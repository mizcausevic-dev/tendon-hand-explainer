import {
  CONTACT_SUM,
  FINGERS,
  fingerJoints,
  fingerTendon,
  padOf,
  solveFingerContact,
  solveThumbContact,
  thumbJoints,
  thumbOppositionTendon,
  thumbTendon,
  type DigitId,
  type Pose,
} from "./kinematics.ts";
import { clamp, dist, lerp, lerpV, normalize, smootherstep, sub, type V3 } from "./math.ts";

export const DURATION = 34;
export const FPS = 30;
export const FRAME_COUNT = 1020;

export const SHOTS = [
  { id: 1, start: 0, end: 5, kicker: "01", title: "Exterior anatomy" },
  { id: 2, start: 5, end: 10, kicker: "02", title: "Palm actuation" },
  { id: 3, start: 10, end: 17, kicker: "03", title: "Routing and encoders" },
  { id: 4, start: 17, end: 25, kicker: "04", title: "Tactile contact" },
  { id: 5, start: 25, end: 34, kicker: "05", title: "Coordinated manipulation" },
] as const;

export const EXPLODE_PARK = {
  cover: [0.15, 0.075, 0.045] as V3,
  dorsal: [0.125, 0.02, -0.095] as V3,
  shell: 0.036,
};

const PREFER: Record<DigitId, V3> = {
  thumb: normalize([-0.1, -0.9, -0.15]),
  index: normalize([-0.55, 0.42, 0.62]),
  middle: normalize([0.02, 0.62, 0.62]),
  ring: normalize([0.42, 0.4, 0.62]),
  pinky: normalize([0.78, 0.12, 0.42]),
};

const DIGITS: DigitId[] = ["thumb", "index", "middle", "ring", "pinky"];

type Keys = [number, number][];

function sample(keys: Keys, t: number): number {
  if (t <= keys[0][0]) return keys[0][1];
  const last = keys[keys.length - 1];
  if (t >= last[0]) return last[1];
  for (let i = 0; i < keys.length - 1; i++) {
    const a = keys[i];
    const b = keys[i + 1];
    if (t >= a[0] && t <= b[0]) {
      return lerp(a[1], b[1], smootherstep(a[0], b[0], t));
    }
  }
  return last[1];
}

function sampleV(keys: [number, V3][], t: number): V3 {
  if (t <= keys[0][0]) return keys[0][1];
  const last = keys[keys.length - 1];
  if (t >= last[0]) return last[1];
  for (let i = 0; i < keys.length - 1; i++) {
    const a = keys[i];
    const b = keys[i + 1];
    if (t >= a[0] && t <= b[0]) return lerpV(a[1], b[1], smootherstep(a[0], b[0], t));
  }
  return last[1];
}

const HINT: Record<keyof Pose, Keys> = {
  index: [
    [0, 0.08],
    [5, 0.12],
    [5.25, 0.12],
    [6.75, 1.02],
    [7.15, 1.02],
    [8.75, 0.16],
    [11.4, 0.2],
    [15.6, 0.98],
    [17.2, 0.5],
    [26.15, 0.5],
    [26.7, 0.22],
    [31.25, 0.22],
    [31.75, 0.5],
    [33, 0.5],
    [34, 0.5],
  ],
  middle: [
    [0, 0.07],
    [5, 0.08],
    [5.8, 0.08],
    [7.05, 0.5],
    [7.45, 0.5],
    [8.8, 0.12],
    [15.4, 0.14],
    [17.2, 0.7],
    [27.7, 0.7],
    [28.25, 0.22],
    [30.85, 0.22],
    [31.35, 0.66],
    [33, 0.7],
    [34, 0.7],
  ],
  ring: [
    [0, 0.08],
    [26.7, 0.12],
    [27.25, 0.62],
    [31.45, 0.62],
    [32.05, 0.18],
    [33, 0.18],
    [34, 0.18],
  ],
  pinky: [
    [0, 0.09],
    [28.7, 0.12],
    [29.25, 0.74],
    [30.05, 0.74],
    [30.45, 0.16],
    [33, 0.16],
    [34, 0.16],
  ],
  thumbOpp: [
    [0, 0.28],
    [5, 0.34],
    [14, 0.36],
    [17.2, 0.72],
    [33, 0.72],
    [34, 0.72],
  ],
  thumbFlex: [
    [0, 0.1],
    [17.2, 0.16],
    [33, 0.16],
    [34, 0.16],
  ],
};

const WEIGHT: Record<DigitId, Keys> = {
  thumb: [
    [0, 0],
    [18.5, 0],
    [19.35, 1],
    [34, 1],
  ],
  index: [
    [0, 0],
    [18.7, 0],
    [19.5, 1],
    [26.25, 1],
    [27.0, 0],
    [31.75, 0],
    [32.1, 1],
    [34, 1],
  ],
  middle: [
    [0, 0],
    [18.55, 0],
    [19.4, 1],
    [28.0, 1],
    [28.7, 0],
    [30.9, 0],
    [31.55, 1],
    [34, 1],
  ],
  ring: [
    [0, 0],
    [27.6, 0],
    [28.05, 1],
    [31.35, 1],
    [31.8, 0],
    [34, 0],
  ],
  pinky: [
    [0, 0],
    [29.25, 0],
    [29.6, 1],
    [30.1, 1],
    [30.55, 0],
    [34, 0],
  ],
};

const SPHERE_KEYS: [number, V3][] = [
  [17, [-0.086, 0.132, 0.112]],
  [18.2, [-0.046, 0.114, 0.09]],
  [19.45, [-0.02, 0.1, 0.076]],
  [26.5, [-0.02, 0.1, 0.076]],
  [27.35, [-0.0104, 0.0928, 0.0742]],
  [28.15, [-0.0024, 0.0868, 0.0727]],
  [29.15, [0.0069, 0.0798, 0.071]],
  [29.5, [0.012, 0.076, 0.07]],
  [30.7, [0.012, 0.076, 0.07]],
  [31.35, [-0.0008, 0.0856, 0.0724]],
  [32.2, [-0.0149, 0.0962, 0.075]],
  [33, [-0.02, 0.1, 0.076]],
  [34, [-0.02, 0.1, 0.076]],
];

const SPIN_KEYS: Keys = [
  [0, 0],
  [19.2, 0],
  [26.3, 0.18],
  [29.4, 0.85],
  [32.4, 1.35],
  [33, 1.42],
  [34, 1.42],
];

export function clampTime(t: number): number {
  if (t < 0) return 0;
  if (t > DURATION) return DURATION;
  return t;
}

export function frameIndex(t: number): number {
  const time = clampTime(t);
  if (time >= DURATION) return FRAME_COUNT - 1;
  return Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(time * FPS + 1e-6)));
}

export function shotAt(t: number): 1 | 2 | 3 | 4 | 5 {
  const time = clampTime(t);
  if (time < 5) return 1;
  if (time < 10) return 2;
  if (time < 17) return 3;
  if (time < 25) return 4;
  return 5;
}

export function weightsAt(t: number): Record<DigitId, number> {
  const time = clampTime(t);
  return {
    thumb: sample(WEIGHT.thumb, time),
    index: sample(WEIGHT.index, time),
    middle: sample(WEIGHT.middle, time),
    ring: sample(WEIGHT.ring, time),
    pinky: sample(WEIGHT.pinky, time),
  };
}

export function engagement(weight: number): number {
  return smootherstep(0.05, 0.4, weight);
}

function hintAt(t: number): Pose {
  return {
    index: sample(HINT.index, t),
    middle: sample(HINT.middle, t),
    ring: sample(HINT.ring, t),
    pinky: sample(HINT.pinky, t),
    thumbOpp: sample(HINT.thumbOpp, t),
    thumbFlex: sample(HINT.thumbFlex, t),
  };
}

export function pressDepth(t: number): number {
  const time = clampTime(t);
  return 0.0027 * smootherstep(18.9, 20.15, time);
}

export function sphereCenterAt(t: number): V3 {
  return sampleV(SPHERE_KEYS, clampTime(t));
}

export function sphereOpacityAt(t: number): number {
  return smootherstep(17, 17.55, clampTime(t));
}

export function spinAt(t: number): number {
  return sample(SPIN_KEYS, clampTime(t));
}

export function poseAt(t: number): Pose {
  const time = clampTime(t);
  const hint = hintAt(time);
  const weights = weightsAt(time);
  const sphere = sphereCenterAt(time);
  const desired = CONTACT_SUM - pressDepth(time);
  const pose: Pose = { ...hint };
  if (time >= 17 && sphereOpacityAt(time) > 0.2) {
    if (weights.thumb > 0.04) {
      const solved = solveThumbContact(sphere, PREFER.thumb, hint.thumbOpp, hint.thumbFlex, desired);
      const blend = engagement(weights.thumb);
      pose.thumbOpp = lerp(hint.thumbOpp, solved.opposition, blend);
      pose.thumbFlex = lerp(hint.thumbFlex, solved.flexion, blend);
    }
    for (const id of ["index", "middle", "ring", "pinky"] as const) {
      if (weights[id] > 0.04) {
        const solved = solveFingerContact(FINGERS[id], sphere, PREFER[id], hint[id], desired);
        pose[id] = lerp(hint[id], solved, engagement(weights[id]));
      }
    }
  }
  return pose;
}

export interface ExplodeState {
  cover: number;
  dorsal: number;
  shells: number;
  indexShell: number;
}

export function explodeAt(t: number): ExplodeState {
  const time = clampTime(t);
  let open = 0;
  if (time < 1.1) open = 0;
  else if (time < 4.4) open = smootherstep(1.1, 4.4, time);
  else if (time < 25) open = 1;
  else if (time < 27.35) open = 1 - smootherstep(25, 27.35, time);
  else open = 0;
  const indexShell = time < 25 ? open : time < 27.35 ? lerp(1, 0.4, smootherstep(25, 27.35, time)) : 0.4;
  return { cover: open, dorsal: open, shells: open, indexShell };
}

export interface ContactVisual {
  digit: DigitId;
  weight: number;
  engage: number;
  pad: V3;
  gap: number;
  pressure: number;
  outward: V3;
  forceDir: V3;
  shearDir: V3;
  shearAmount: number;
}

const SPIN_AXIS = normalize([0.12, 0.25, 0.96]);

export function contactsAt(t: number, pose = poseAt(t), center = sphereCenterAt(t)): ContactVisual[] {
  const time = clampTime(t);
  const weights = weightsAt(time);
  const rate = Math.abs(spinAt(Math.min(DURATION, time + 0.05)) - spinAt(time)) / 0.05;
  const shearScale = clamp(rate / 0.55, 0, 1) * (time >= 26.4 && time < 32.6 ? 1 : 0);
  return DIGITS.map((digit) => {
    const pad = padOf(pose, digit);
    const offset = sub(pad, center);
    const radial = Math.hypot(offset[0], offset[1], offset[2]);
    const outward = radial > 1e-6 ? normalize(offset) : PREFER[digit];
    const gap = radial - CONTACT_SUM;
    const weight = weights[digit];
    const engage = engagement(weight);
    const pressure = engage * clamp((0.0036 - gap) / 0.0036, 0, 1);
    const shearDir = normalize([
      SPIN_AXIS[1] * outward[2] - SPIN_AXIS[2] * outward[1],
      SPIN_AXIS[2] * outward[0] - SPIN_AXIS[0] * outward[2],
      SPIN_AXIS[0] * outward[1] - SPIN_AXIS[1] * outward[0],
    ]);
    return {
      digit,
      weight,
      engage,
      pad,
      gap,
      pressure,
      outward,
      forceDir: [-outward[0], -outward[1], -outward[2]],
      shearDir,
      shearAmount: pressure > 0.2 ? shearScale * pressure : 0,
    };
  });
}

export interface CameraFrame {
  position: V3;
  target: V3;
  fov: number;
}

const CAM_FULL: { t: number; p: V3; q: V3; fov: number }[] = [
  { t: 0, p: [0.34, 0.09, 0.78], q: [0, 0.02, 0.01], fov: 30 },
  { t: 4.7, p: [0.24, 0.055, 0.58], q: [0, 0.028, 0.012], fov: 32 },
  { t: 6.6, p: [0.015, 0.008, 0.132], q: [-0.006, 0.004, 0.012], fov: 28 },
  { t: 9.6, p: [0.04, 0.028, 0.16], q: [-0.01, 0.02, 0.02], fov: 30 },
  { t: 25.15, p: [0.055, 0.09, 0.2], q: [-0.01, 0.07, 0.05], fov: 30 },
  { t: 27.4, p: [0.18, 0.11, 0.36], q: [0, 0.055, 0.03], fov: 32 },
  { t: 31.2, p: [0.2, 0.12, 0.38], q: [0.01, 0.06, 0.032], fov: 32 },
  { t: 33, p: [0.3, 0.07, 0.72], q: [0, 0.02, 0.012], fov: 32 },
  { t: 34, p: [0.3, 0.07, 0.72], q: [0, 0.02, 0.012], fov: 32 },
];

const CAM_STILL: { t: number; p: V3; q: V3; fov: number }[] = [
  { t: 0, p: [0.32, 0.08, 0.74], q: [0, 0.02, 0.01], fov: 30 },
  { t: 5, p: [0.03, 0.012, 0.15], q: [-0.004, 0.006, 0.012], fov: 30 },
  { t: 10, p: [-0.02, 0.09, 0.16], q: [-0.02, 0.09, 0.04], fov: 30 },
  { t: 17, p: [-0.03, 0.1, 0.12], q: [-0.02, 0.1, 0.07], fov: 26 },
  { t: 25, p: [0.16, 0.1, 0.36], q: [0, 0.05, 0.03], fov: 32 },
  { t: 34, p: [0.16, 0.1, 0.36], q: [0, 0.05, 0.03], fov: 32 },
];

function camFrame(key: { p: V3; q: V3; fov: number }): CameraFrame {
  return { position: key.p, target: key.q, fov: key.fov };
}

function sampleCam(keys: { t: number; p: V3; q: V3; fov: number }[], t: number): CameraFrame {
  if (t <= keys[0].t) return camFrame(keys[0]);
  const last = keys[keys.length - 1];
  if (t >= last.t) return camFrame(last);
  for (let i = 0; i < keys.length - 1; i++) {
    const a = keys[i];
    const b = keys[i + 1];
    if (Math.abs(t - a.t) <= 1e-9) return camFrame(a);
    if (t > a.t && t < b.t) {
      const u = smootherstep(a.t, b.t, t);
      return {
        position: lerpV(a.p, b.p, u),
        target: lerpV(a.q, b.q, u),
        fov: lerp(a.fov, b.fov, u),
      };
    }
  }
  return camFrame(last);
}

export function cameraAt(t: number, reduced: boolean, pose = poseAt(t), center = sphereCenterAt(t)): CameraFrame {
  const time = clampTime(t);
  if (reduced) return sampleCam(CAM_STILL, time);
  if (time >= 10 && time < 17.15) {
    const u = smootherstep(10, 16.3, time);
    const joints = fingerJoints(FINGERS.index, pose.index);
    const focus = lerpV(joints.base, joints.tip, u);
    return {
      position: [focus[0] - 0.058, focus[1] + 0.01, focus[2] + 0.046],
      target: focus,
      fov: lerp(30, 24, u),
    };
  }
  if (time >= 17.15 && time < 25.05) {
    const joints = fingerJoints(FINGERS.index, pose.index);
    const focus = lerpV(joints.tip, center, 0.45);
    const u = smootherstep(17.15, 19.6, time);
    return {
      position: [focus[0] - 0.09, focus[1] + 0.038, focus[2] + lerp(0.17, 0.15, u)],
      target: focus,
      fov: lerp(34, 30, u),
    };
  }
  return sampleCam(CAM_FULL, time);
}

export interface TendonSnapshot {
  index: ReturnType<typeof fingerTendon>;
  middle: ReturnType<typeof fingerTendon>;
  ring: ReturnType<typeof fingerTendon>;
  pinky: ReturnType<typeof fingerTendon>;
  thumbFlex: ReturnType<typeof thumbTendon>;
  thumbOpp: ReturnType<typeof thumbOppositionTendon>;
}

export function tendonsAt(pose: Pose): TendonSnapshot {
  return {
    index: fingerTendon(FINGERS.index, pose.index),
    middle: fingerTendon(FINGERS.middle, pose.middle),
    ring: fingerTendon(FINGERS.ring, pose.ring),
    pinky: fingerTendon(FINGERS.pinky, pose.pinky),
    thumbFlex: thumbTendon(pose.thumbOpp, pose.thumbFlex),
    thumbOpp: thumbOppositionTendon(pose.thumbOpp, pose.thumbFlex),
  };
}

export interface RouteActivity {
  flexor: number;
  extensor: number;
}

function signedActivity(delta: number): { flexor: number; extensor: number } {
  const mag = clamp(Math.abs(delta) / 0.035, 0, 1);
  if (delta >= 0) return { flexor: mag, extensor: 0 };
  return { flexor: 0, extensor: mag };
}

export function activityAt(t: number): Record<"index" | "middle" | "ring" | "pinky" | "thumbFlex" | "thumbOpp", RouteActivity> {
  const time = clampTime(t);
  const a = poseAt(time);
  const b = poseAt(Math.min(DURATION, time + 0.045));
  return {
    index: signedActivity(b.index - a.index),
    middle: signedActivity(b.middle - a.middle),
    ring: signedActivity(b.ring - a.ring),
    pinky: signedActivity(b.pinky - a.pinky),
    thumbFlex: signedActivity(b.thumbFlex - a.thumbFlex),
    thumbOpp: signedActivity(b.thumbOpp - a.thumbOpp),
  };
}

export interface FrameState {
  t: number;
  frame: number;
  shot: 1 | 2 | 3 | 4 | 5;
  pose: Pose;
  explode: ExplodeState;
  sphere: { center: V3; opacity: number; spin: number; radius: number };
  contacts: ContactVisual[];
  camera: CameraFrame;
  tendons: TendonSnapshot;
  activity: ReturnType<typeof activityAt>;
  indexJoints: ReturnType<typeof fingerJoints>;
  thumbJoints: ReturnType<typeof thumbJoints>;
}

export function frameAt(t: number, reduced = false): FrameState {
  const time = clampTime(t);
  const pose = poseAt(time);
  const center = sphereCenterAt(time);
  return {
    t: time,
    frame: frameIndex(time),
    shot: shotAt(time),
    pose,
    explode: explodeAt(time),
    sphere: {
      center,
      opacity: sphereOpacityAt(time),
      spin: spinAt(time),
      radius: 0.0135,
    },
    contacts: contactsAt(time, pose, center),
    camera: cameraAt(time, reduced, pose, center),
    tendons: tendonsAt(pose),
    activity: activityAt(time),
    indexJoints: fingerJoints(FINGERS.index, pose.index),
    thumbJoints: thumbJoints(pose.thumbOpp, pose.thumbFlex),
  };
}

export function supportCount(contacts: ContactVisual[], minPressure = 0.35): number {
  return contacts.filter((contact) => contact.pressure >= minPressure).length;
}

export function minGapDuring(t0: number, t1: number, step = 0.1): number {
  let min = Number.POSITIVE_INFINITY;
  for (let t = t0; t <= t1 + 1e-6; t += step) {
    const contacts = contactsAt(t);
    for (const contact of contacts) {
      if (contact.weight > 0.65) min = Math.min(min, Math.abs(contact.gap));
    }
  }
  return min;
}

export function contributingDigits(t0: number, t1: number, step = 0.1): DigitId[] {
  const hit = new Set<DigitId>();
  for (let t = t0; t <= t1 + 1e-6; t += step) {
    for (const contact of contactsAt(t)) {
      if (contact.pressure >= 0.35) hit.add(contact.digit);
    }
  }
  return DIGITS.filter((digit) => hit.has(digit));
}

export function firstContactTime(step = 0.02): number {
  for (let t = 17; t < 25; t += step) {
    if (supportCount(contactsAt(t), 0.45) >= 2) return t;
  }
  return -1;
}

export { dist };
