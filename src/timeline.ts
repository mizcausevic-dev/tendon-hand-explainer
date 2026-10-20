/**
 * One master clock, t in [0, 34]. Every visual quantity is a pure function of t.
 * Shot intervals are start-inclusive and end-exclusive. t = 34 holds the final pose.
 */
import {
  ACTUATORS,
  DIGITS,
  DIGIT_IDS,
  SPHERE_RADIUS,
  ikDigit,
  ikThumb,
  mixDigit,
  mixThumb,
  routesFor,
  solveDigit,
  solveThumb,
  type DigitFK,
  type DigitId,
  type DigitPose,
  type PoseSet,
  type ThumbFK,
  type ThumbPose,
} from "./anatomy";
import {
  add,
  clamp,
  cross,
  dist,
  lerp,
  norm,
  rotateAround,
  scale,
  smootherstep,
  sub,
  v,
  type Vec3,
} from "./math";

export const DURATION = 34;
export const FPS = 30;
export const FRAME_COUNT = 1020;

export const SHOTS = [
  { id: 1, name: "Exterior reveal", caption: "Palmar view. Covers lift off the chassis.", start: 0, end: 5 },
  { id: 2, name: "Palm actuation", caption: "Antagonistic capstans. A tendon only pulls.", start: 5, end: 10 },
  { id: 3, name: "Routing and sensing", caption: "Guides, pulleys, and magnetic encoders.", start: 10, end: 17 },
  { id: 4, name: "Tactile contact", caption: "Normal contact across the index pad.", start: 17, end: 25 },
  { id: 5, name: "Coordinated manipulation", caption: "In-hand reorientation. Covers return.", start: 25, end: 34 },
] as const;

export type ShotId = (typeof SHOTS)[number]["id"];

export interface ContactViz {
  digit: DigitId | "thumb";
  point: Vec3;
  outward: Vec3;
  weight: number;
  depth: number;
  shear: Vec3;
  showShear: boolean;
  error: number;
}

export interface TendonViz {
  id: string;
  digit: DigitId | "thumb";
  kind: "flexor" | "extensor" | "opposition";
  points: Vec3[];
  spool: number;
  active: number;
  direction: number;
}

export interface ActuatorViz {
  id: string;
  digit: DigitId | "thumb";
  kind: "flexor" | "extensor" | "opposition";
  position: Vec3;
  spool: number;
  active: number;
}

export interface Sample {
  t: number;
  frame: number;
  shot: { id: ShotId; name: string; caption: string };
  explode: { shells: number; palm: number; indexShell: number };
  camera: { position: Vec3; target: Vec3; fov: number };
  sphere: { center: Vec3; radius: number; opacity: number; spin: number; axis: Vec3 };
  contacts: ContactViz[];
  pose: PoseSet;
  digits: Record<DigitId, DigitFK>;
  thumb: ThumbFK;
  tendons: TendonViz[];
  actuators: ActuatorViz[];
  encoderGlow: number;
  indexEncoderGlow: number;
  padReveal: number;
  supportCount: number;
  motionEnergy: number;
}

type Keys = Array<[number, number]>;

function sampleKeys(keys: Keys, t: number): number {
  if (t <= keys[0][0]) return keys[0][1];
  for (let i = 0; i < keys.length - 1; i += 1) {
    const [t0, v0] = keys[i];
    const [t1, v1] = keys[i + 1];
    if (t <= t1) return v0 + (v1 - v0) * smootherstep(t0, t1, t);
  }
  return keys[keys.length - 1][1];
}

export function frameAt(t: number): number {
  if (t <= 0) return 0;
  if (t >= DURATION) return FRAME_COUNT - 1;
  return Math.min(FRAME_COUNT - 1, Math.floor(t * FPS + 1e-8));
}

export function shotAt(t: number): (typeof SHOTS)[number] {
  const time = clamp(t, 0, 33.999999);
  return SHOTS.find((shot) => time >= shot.start && time < shot.end) ?? SHOTS[4];
}

function panelOpen(t: number, endResidual: number): number {
  if (t < 0.4) return 0;
  if (t < 3.7) return smootherstep(0.4, 3.7, t);
  if (t < 25) return 1;
  if (t < 28) return 1 + (endResidual - 1) * smootherstep(25, 28, t);
  return endResidual;
}

function band(t: number, rise0: number, rise1: number, fall0: number, fall1: number): number {
  return smootherstep(rise0, rise1, t) * (1 - smootherstep(fall0, fall1, t));
}

const INDEX_MCP: Keys = [
  [0, 0.16],
  [4.6, 0.16],
  [6.4, 1.12],
  [7.9, 0.18],
  [9.5, 0.9],
  [10.4, 0.22],
  [13.2, 0.58],
  [16.4, 1.02],
  [18.6, 0.48],
  [34, 0.48],
];
const INDEX_PIP: Keys = [
  [0, 0.14],
  [4.6, 0.14],
  [6.4, 1.28],
  [7.9, 0.16],
  [9.5, 1.05],
  [10.4, 0.18],
  [13.2, 0.7],
  [16.4, 1.15],
  [18.6, 0.55],
  [34, 0.55],
];
const INDEX_ABD: Keys = [
  [0, 0.06],
  [17, 0.05],
  [22, 0.02],
  [30, 0.08],
  [34, 0.04],
];

const MIDDLE_MCP: Keys = [
  [0, 0.14],
  [5.4, 0.14],
  [7.1, 1.02],
  [8.6, 0.2],
  [10.2, 0.72],
  [16.5, 0.62],
  [18.6, 0.42],
  [34, 0.42],
];
const MIDDLE_PIP: Keys = [
  [0, 0.12],
  [5.4, 0.12],
  [7.1, 1.16],
  [8.6, 0.18],
  [10.2, 0.84],
  [16.5, 0.7],
  [18.6, 0.5],
  [34, 0.5],
];

const RING_MCP: Keys = [
  [0, 0.12],
  [6.2, 0.12],
  [7.6, 0.84],
  [9.2, 0.24],
  [11, 0.78],
  [18, 0.55],
  [24, 0.4],
  [34, 0.4],
];
const RING_PIP: Keys = [
  [0, 0.1],
  [6.2, 0.1],
  [7.6, 0.95],
  [9.2, 0.2],
  [11, 0.9],
  [18, 0.62],
  [24, 0.42],
  [34, 0.42],
];

const PINKY_MCP: Keys = [
  [0, 0.1],
  [6.6, 0.1],
  [8.1, 0.7],
  [9.6, 0.22],
  [12, 0.85],
  [20, 0.48],
  [32.4, 0.36],
  [34, 0.36],
];
const PINKY_PIP: Keys = [
  [0, 0.08],
  [6.6, 0.08],
  [8.1, 0.82],
  [9.6, 0.18],
  [12, 0.95],
  [20, 0.5],
  [32.4, 0.32],
  [34, 0.32],
];

const THUMB_OPP: Keys = [
  [0, 0.34],
  [5, 0.34],
  [6.7, 1.05],
  [8.4, 0.4],
  [12, 0.3],
  [16.5, 0.32],
  [18.8, 0.72],
  [34, 0.72],
];
const THUMB_MCP: Keys = [
  [0, 0.12],
  [5, 0.12],
  [6.7, 0.72],
  [8.4, 0.16],
  [16.5, 0.18],
  [18.8, 0.42],
  [34, 0.42],
];
const THUMB_ABD: Keys = [
  [0, 0.08],
  [16, 0.08],
  [22, 0.02],
  [32.4, 0.04],
  [34, 0.04],
];

function authoredPose(t: number): PoseSet {
  const index: DigitPose = {
    abd: sampleKeys(INDEX_ABD, t),
    mcp: sampleKeys(INDEX_MCP, t),
    pip: sampleKeys(INDEX_PIP, t),
    dip: 0,
  };
  const middle: DigitPose = {
    abd: DIGITS.middle.abdRest,
    mcp: sampleKeys(MIDDLE_MCP, t),
    pip: sampleKeys(MIDDLE_PIP, t),
    dip: 0,
  };
  const ring: DigitPose = {
    abd: DIGITS.ring.abdRest,
    mcp: sampleKeys(RING_MCP, t),
    pip: sampleKeys(RING_PIP, t),
    dip: 0,
  };
  const pinky: DigitPose = {
    abd: DIGITS.pinky.abdRest - 0.04 * smootherstep(10, 16, t) * (1 - smootherstep(18, 22, t)),
    mcp: sampleKeys(PINKY_MCP, t),
    pip: sampleKeys(PINKY_PIP, t),
    dip: 0,
  };
  const thumb: ThumbPose = {
    opp: sampleKeys(THUMB_OPP, t),
    abd: sampleKeys(THUMB_ABD, t),
    mcp: sampleKeys(THUMB_MCP, t),
    ip: 0,
  };
  return {
    digits: {
      index: { ...index, dip: index.pip * 0.68 },
      middle: { ...middle, dip: middle.pip * 0.68 },
      ring: { ...ring, dip: ring.pip * 0.68 },
      pinky: { ...pinky, dip: pinky.pip * 0.68 },
    },
    thumb: { ...thumb, ip: thumb.mcp * 0.62 },
  };
}

const CONTACT_DIR: Record<DigitId | "thumb", Vec3> = {
  thumb: norm(v(-0.2, -0.78, 0.48)),
  index: norm(v(-0.7, 0.22, 0.62)),
  middle: norm(v(-0.02, 0.48, 0.8)),
  ring: norm(v(0.58, 0.16, 0.7)),
  pinky: norm(v(0.9, -0.02, 0.32)),
};

function cradle(t: number): Vec3 {
  const u = smootherstep(28, 32.2, t);
  return v(-0.02 + 0.045 * u, 1.0 - 0.03 * u, 0.48);
}

export function sphereMotion(t: number): { center: Vec3; opacity: number; spin: number; axis: Vec3 } {
  const home = cradle(Math.max(t, 19.7));
  const intro = smootherstep(17, 19.65, t);
  const start = add(cradle(19.7), v(0.03, 0.24, 0.26));
  const spin =
    0.14 * smootherstep(21.2, 23.1, t) * (1 - smootherstep(24.2, 25.4, t)) +
    0.58 * smootherstep(28.1, 32.2, t);
  return {
    center: lerp(start, home, intro),
    opacity: smootherstep(17.05, 18.35, t),
    spin,
    axis: norm(v(0.15, 1, 0.2)),
  };
}

function contactWeight(digit: DigitId | "thumb", t: number): number {
  if (t < 19.2 || t > 34) return 0;
  if (digit === "thumb") return band(t, 19.35, 20.15, 40, 41);
  if (digit === "index") return Math.min(1, band(t, 19.4, 20.2, 29.9, 30.55) + band(t, 31.05, 31.55, 40, 41));
  if (digit === "middle") return Math.min(1, band(t, 19.4, 20.2, 28.15, 28.9) + band(t, 30.35, 31.05, 40, 41));
  if (digit === "ring") return band(t, 27.95, 28.75, 40, 41);
  return band(t, 29.35, 30.15, 31.45, 32.15);
}

function contactPoint(digit: DigitId | "thumb", center: Vec3, spin: number, axis: Vec3): Vec3 {
  const dir = rotateAround(CONTACT_DIR[digit], axis, spin);
  return add(center, scale(dir, SPHERE_RADIUS + 0.004));
}

const SEEDS: Record<DigitId, DigitPose> = {
  index: { abd: 0.02, mcp: 0.62, pip: 0.78, dip: 0.53 },
  middle: { abd: -0.02, mcp: 0.58, pip: 0.72, dip: 0.49 },
  ring: { abd: -0.08, mcp: 0.64, pip: 0.7, dip: 0.48 },
  pinky: { abd: -0.16, mcp: 0.7, pip: 0.62, dip: 0.42 },
};

const THUMB_SEED: ThumbPose = { opp: 0.95, abd: 0.05, mcp: 0.55, ip: 0.34 };

function poseAt(t: number): { pose: PoseSet; contacts: ContactViz[]; sphere: ReturnType<typeof sphereMotion> } {
  const authored = authoredPose(t);
  const sphere = sphereMotion(t);
  const pose: PoseSet = {
    digits: {
      index: authored.digits.index,
      middle: authored.digits.middle,
      ring: authored.digits.ring,
      pinky: authored.digits.pinky,
    },
    thumb: authored.thumb,
  };
  const contacts: ContactViz[] = [];
  const shearRate = spinRate(t);
  const showShear = Math.abs(shearRate) > 0.12 && t >= 21 && t <= 32.7;

  for (const id of DIGIT_IDS) {
    const weight = contactWeight(id, t);
    const target = contactPoint(id, sphere.center, sphere.spin, sphere.axis);
    const solved = ikDigit(id, target, { ...SEEDS[id], abd: authored.digits[id].abd });
    pose.digits[id] = mixDigit(authored.digits[id], solved.pose, poseBlend(id, t, weight));
    const outward = norm(sub(target, sphere.center));
    const shear = showShear && weight > 0.45 ? scale(norm(cross(sphere.axis, outward)), 0.045) : v();
    contacts.push({
      digit: id,
      point: target,
      outward,
      weight,
      depth: weight * (0.62 + 0.38 * pressPulse(t)),
      shear,
      showShear: showShear && weight > 0.45,
      error: solved.error,
    });
  }

  const thumbWeight = contactWeight("thumb", t);
  const thumbTarget = contactPoint("thumb", sphere.center, sphere.spin, sphere.axis);
  const thumbSolved = ikThumb(thumbTarget, { ...THUMB_SEED, abd: authored.thumb.abd });
  pose.thumb = mixThumb(authored.thumb, thumbSolved.pose, poseBlend("thumb", t, thumbWeight));
  const thumbOut = norm(sub(thumbTarget, sphere.center));
  contacts.push({
    digit: "thumb",
    point: thumbTarget,
    outward: thumbOut,
    weight: thumbWeight,
    depth: thumbWeight * (0.62 + 0.38 * pressPulse(t)),
    shear: showShear && thumbWeight > 0.45 ? scale(norm(cross(sphere.axis, thumbOut)), 0.045) : v(),
    showShear: showShear && thumbWeight > 0.45,
    error: thumbSolved.error,
  });

  return { pose, contacts, sphere };
}

function poseBlend(digit: DigitId | "thumb", t: number, weight: number): number {
  if (digit === "thumb" || digit === "index" || digit === "middle") {
    if (t < 20.25) return Math.max(weight, smootherstep(17.6, 19.35, t));
    return weight;
  }
  if (digit === "ring") {
    if (t < 28.8) return Math.max(weight, smootherstep(26.4, 27.9, t));
    return weight;
  }
  if (t < 30.2) return Math.max(weight, smootherstep(28.2, 29.35, t));
  return weight;
}

function pressPulse(t: number): number {
  return smootherstep(20.6, 21.5, t) * (1 - smootherstep(22.6, 23.4, t));
}

function spinRate(t: number): number {
  const dt = 1 / 30;
  return (sphereMotion(t).spin - sphereMotion(Math.max(0, t - dt)).spin) / dt;
}

interface CameraShot {
  position: Vec3;
  target: Vec3;
  fov: number;
}

function look(target: Vec3, offset: Vec3, fov: number): CameraShot {
  return { position: add(target, offset), target, fov };
}

function blendCam(a: CameraShot, b: CameraShot, u: number): CameraShot {
  return {
    position: lerp(a.position, b.position, u),
    target: lerp(a.target, b.target, u),
    fov: a.fov + (b.fov - a.fov) * u,
  };
}

/** Palmar-side cameras. Distances stay outside the chassis so the lens never enters a solid. */
function cameraAt(t: number, pose: PoseSet, sphere: Vec3): CameraShot {
  const index = solveDigit("index", pose.digits.index);
  const reveal = look(v(0.02, 0.72, 0.08), v(1.35, 0.42, 2.85), 34);
  const palm = look(v(0.02, 0.56, 0.06), v(0.28, 0.42, 1.42), 32);
  const along = smootherstep(10.8, 16.5, t);
  const fingerTarget = lerp(lerp(index.joints[0], index.joints[1], Math.min(1, along * 1.35)), index.joints[2], smootherstep(14.2, 16.6, t));
  const finger = look(fingerTarget, v(-0.42, 0.26, 1.22), 30);
  const outward = norm(sub(index.pad, sphere));
  let side = norm(cross(v(0, 1, 0), outward));
  if (side.z < 0) side = scale(side, -1);
  const contact = look(lerp(index.pad, sphere, 0.42), add(add(scale(side, 0.78), scale(outward, 0.22)), v(0, 0.34, 0.12)), 32);
  const hero = look(lerp(v(0.0, 0.55, 0.1), sphere, 0.22), v(1.32, 0.38, 3.05), 34);
  let cam = blendCam(reveal, palm, smootherstep(4.35, 5.45, t));
  cam = blendCam(cam, finger, smootherstep(9.35, 10.7, t));
  cam = blendCam(cam, contact, smootherstep(16.15, 17.55, t));
  cam = blendCam(cam, hero, smootherstep(24.15, 25.9, t));
  if (t >= 33) return hero;
  return cam;
}

let cacheT = Number.NaN;
let cache: Sample | null = null;

export function resetSampleCache(): void {
  cacheT = Number.NaN;
  cache = null;
}

export function sample(t: number): Sample {
  const time = clamp(t, 0, DURATION);
  if (cache && cacheT === time) return cache;
  const built = buildSample(time);
  cacheT = time;
  cache = built;
  return built;
}

function buildSample(time: number): Sample {
  const shot = shotAt(time);
  const current = poseAt(time);
  const prev = poseAt(Math.max(0, time - 1 / FPS));
  const digits = {
    index: solveDigit("index", current.pose.digits.index),
    middle: solveDigit("middle", current.pose.digits.middle),
    ring: solveDigit("ring", current.pose.digits.ring),
    pinky: solveDigit("pinky", current.pose.digits.pinky),
  };
  const thumb = solveThumb(current.pose.thumb);
  const nowRoutes = routesFor(current.pose);
  const prevRoutes = routesFor(prev.pose);
  const tendons: TendonViz[] = nowRoutes.map((route) => {
    const before = prevRoutes.find((item) => item.id === route.id);
    const delta = route.spool - (before?.spool ?? route.spool);
    const rate = Math.abs(delta) * FPS;
    return {
      id: route.id,
      digit: route.digit,
      kind: route.kind,
      points: route.points,
      spool: route.spool,
      active: clamp(rate / 2.4, 0, 1),
      direction: Math.abs(delta) < 1e-4 ? 0 : Math.sign(delta),
    };
  });
  const actuators: ActuatorViz[] = ACTUATORS.map((actuator) => {
    const tendon = tendons.find((item) => item.id === actuator.id);
    return {
      id: actuator.id,
      digit: actuator.digit,
      kind: actuator.kind,
      position: actuator.position,
      spool: tendon?.spool ?? 0,
      active: tendon?.active ?? 0,
    };
  });
  const supportCount = current.contacts.filter((contact) => contact.weight > 0.55).length;
  const motionEnergy = tendons.reduce((sum, tendon) => sum + tendon.active, 0) / tendons.length;
  return {
    t: time,
    frame: frameAt(time),
    shot: { id: shot.id, name: shot.name, caption: shot.caption },
    explode: {
      shells: panelOpen(time, 0),
      palm: panelOpen(time, 0.42),
      indexShell: panelOpen(time, 0.3),
    },
    camera: cameraAt(time, current.pose, current.sphere.center),
    sphere: { ...current.sphere, radius: SPHERE_RADIUS },
    contacts: current.contacts,
    pose: current.pose,
    digits,
    thumb,
    tendons,
    actuators,
    encoderGlow: 0.22 + 0.7 * band(time, 10.2, 11, 16.4, 17),
    indexEncoderGlow: 0.28 + 0.72 * band(time, 10.1, 10.8, 16.5, 17),
    padReveal: band(time, 17.3, 18.5, 24.2, 25.15),
    supportCount,
    motionEnergy,
  };
}

export function audioCues(): Array<{ t: number; type: "shell" | "motor" | "tick" | "contact" | "resolve"; freq: number }> {
  const cues: Array<{ t: number; type: "shell" | "motor" | "tick" | "contact" | "resolve"; freq: number }> = [
    { t: 0.62, type: "shell", freq: 150 },
    { t: 1.18, type: "shell", freq: 132 },
    { t: 1.82, type: "shell", freq: 118 },
    { t: 2.46, type: "shell", freq: 140 },
    { t: 3.15, type: "shell", freq: 124 },
    { t: 5.12, type: "motor", freq: 86 },
    { t: 19.85, type: "contact", freq: 360 },
    { t: 25.35, type: "shell", freq: 136 },
    { t: 26.15, type: "shell", freq: 128 },
    { t: 27.05, type: "shell", freq: 142 },
    { t: 28.55, type: "tick", freq: 240 },
    { t: 30.25, type: "tick", freq: 220 },
    { t: 31.35, type: "tick", freq: 260 },
    { t: 33.08, type: "resolve", freq: 220 },
  ];
  for (let beat = 5.25; beat < 32.8; beat += 0.75) cues.push({ t: Number(beat.toFixed(4)), type: "tick", freq: 180 });
  return cues.sort((a, b) => a.t - b.t);
}

export function poseDistance(a: PoseSet, b: PoseSet): number {
  let total = 0;
  for (const id of DIGIT_IDS) {
    total += Math.abs(a.digits[id].mcp - b.digits[id].mcp);
    total += Math.abs(a.digits[id].pip - b.digits[id].pip);
    total += Math.abs(a.digits[id].abd - b.digits[id].abd);
    total += Math.abs(a.digits[id].dip - b.digits[id].dip);
  }
  total += Math.abs(a.thumb.opp - b.thumb.opp);
  total += Math.abs(a.thumb.mcp - b.thumb.mcp);
  total += Math.abs(a.thumb.ip - b.thumb.ip);
  total += Math.abs(a.thumb.abd - b.thumb.abd);
  return total;
}

export function contactErrorAt(t: number, digit: DigitId | "thumb"): number {
  return sample(t).contacts.find((contact) => contact.digit === digit)?.error ?? Infinity;
}

export function supportAt(t: number): number {
  return sample(t).supportCount;
}

export function palmPointClearance(point: Vec3): number {
  return dist(point, v(0, 0.5, 0));
}
