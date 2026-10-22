import {
  add,
  clamp,
  cross,
  dist,
  dot,
  len,
  lerpV,
  normalize,
  polylineLength,
  rotateAround,
  scale,
  sub,
  type V3,
} from "./math.ts";

/**
 * Illustrative underactuated hand.
 * Four fingers: one motor each. PIP and DIP angles are coupled to MCP
 * because a single flexor crosses all three joints. They are not independently actuated.
 * Thumb: two motors, opposition and flexion. Thumb IP is coupled to thumb MCP flexion.
 * Every actuator is an antagonistic pair on one dual-groove capstan.
 * Lengths are illustration scale, not a measured mechanism.
 */

export const SPHERE_RADIUS = 0.0135;
export const PAD_RADIUS = 0.0105;
export const CAPSTAN_RADIUS = 0.0046;
export const CONTACT_SUM = SPHERE_RADIUS + PAD_RADIUS;

export type FingerId = "index" | "middle" | "ring" | "pinky";
export type DigitId = FingerId | "thumb";

export interface FingerSpec {
  id: FingerId;
  base: V3;
  yaw: number;
  lengths: [number, number, number];
  couple: [number, number];
  flexMax: number;
  motor: V3;
}

export const FINGERS: Record<FingerId, FingerSpec> = {
  index: {
    id: "index",
    base: [-0.03, 0.05, 0.007],
    yaw: 0.07,
    lengths: [0.044, 0.028, 0.024],
    couple: [0.75, 0.5],
    flexMax: 1.15,
    motor: [-0.028, 0.01, 0.003],
  },
  middle: {
    id: "middle",
    base: [-0.008, 0.054, 0.007],
    yaw: -0.01,
    lengths: [0.048, 0.03, 0.025],
    couple: [0.75, 0.5],
    flexMax: 1.15,
    motor: [-0.008, 0.012, 0.003],
  },
  ring: {
    id: "ring",
    base: [0.014, 0.05, 0.007],
    yaw: -0.07,
    lengths: [0.044, 0.028, 0.024],
    couple: [0.75, 0.5],
    flexMax: 1.15,
    motor: [0.014, 0.01, 0.003],
  },
  pinky: {
    id: "pinky",
    base: [0.032, 0.044, 0.006],
    yaw: -0.08,
    lengths: [0.032, 0.02, 0.018],
    couple: [0.72, 0.48],
    flexMax: 1.15,
    motor: [0.03, 0.004, 0.003],
  },
};

export const THUMB = {
  base: [-0.04, 0.004, 0.012] as V3,
  meta: 0.038,
  prox: 0.032,
  dist: 0.024,
  ipCouple: 0.68,
  oppMax: 1.05,
  flexMax: 1.15,
  flexMotor: [-0.03, -0.018, 0.004] as V3,
  oppMotor: [-0.018, -0.028, 0.004] as V3,
};

const THUMB_REST = normalize([-0.82, 0.42, 0.26]);
const THUMB_OPPOSED = normalize([0.62, 0.7, 0.36]);

export interface Pose {
  index: number;
  middle: number;
  ring: number;
  pinky: number;
  thumbOpp: number;
  thumbFlex: number;
}

export interface FingerJoints {
  base: V3;
  pip: V3;
  dip: V3;
  tip: V3;
  mcp: number;
  pipAngle: number;
  dipAngle: number;
  yaw: number;
}

export interface ThumbJoints {
  base: V3;
  mcp: V3;
  ip: V3;
  tip: V3;
  opposition: number;
  flex: number;
  ipAngle: number;
  axis: V3;
  metaDir: V3;
}

export interface TendonRoute {
  flexor: V3[];
  extensor: V3[];
  flexorLength: number;
  extensorLength: number;
  /** Positive winds the flexor and pays out the extensor. */
  capstan: number;
}

export interface OppositionRoute {
  adductor: V3[];
  abductor: V3[];
  adductorLength: number;
  abductorLength: number;
  /** Positive winds the adductor (opposition) and pays out the abductor. */
  capstan: number;
}

interface Axes {
  x: V3;
  y: V3;
  z: V3;
}

function fingerAxes(yaw: number): Axes {
  const c = Math.cos(yaw);
  const s = Math.sin(yaw);
  return {
    x: [c, s, 0],
    y: [-s, c, 0],
    z: [0, 0, 1],
  };
}

function boneDir(axes: Axes, cumulative: number): V3 {
  const c = Math.cos(cumulative);
  const s = Math.sin(cumulative);
  return [axes.y[0] * c + axes.z[0] * s, axes.y[1] * c + axes.z[1] * s, axes.y[2] * c + axes.z[2] * s];
}

function palmarDir(axes: Axes, cumulative: number): V3 {
  const c = Math.cos(cumulative);
  const s = Math.sin(cumulative);
  return [axes.y[0] * -s + axes.z[0] * c, axes.y[1] * -s + axes.z[1] * c, axes.y[2] * -s + axes.z[2] * c];
}

export function fingerJoints(spec: FingerSpec, mcpAngle: number): FingerJoints {
  const axes = fingerAxes(spec.yaw);
  const mcp = clamp(mcpAngle, 0, spec.flexMax);
  const pipAngle = spec.couple[0] * mcp;
  const dipAngle = spec.couple[1] * mcp;
  const a1 = mcp;
  const a2 = mcp + pipAngle;
  const a3 = mcp + pipAngle + dipAngle;
  const base = spec.base;
  const pip = add(base, scale(boneDir(axes, a1), spec.lengths[0]));
  const dip = add(pip, scale(boneDir(axes, a2), spec.lengths[1]));
  const tip = add(dip, scale(boneDir(axes, a3), spec.lengths[2]));
  return { base, pip, dip, tip, mcp, pipAngle, dipAngle, yaw: spec.yaw };
}

function fingerSample(spec: FingerSpec, mcpAngle: number, link: 0 | 1 | 2, u: number, side: number): V3 {
  const joints = fingerJoints(spec, mcpAngle);
  const axes = fingerAxes(spec.yaw);
  const origins = [joints.base, joints.pip, joints.dip];
  const cumul = [
    joints.mcp,
    joints.mcp + joints.pipAngle,
    joints.mcp + joints.pipAngle + joints.dipAngle,
  ];
  const origin = origins[link];
  const along = boneDir(axes, cumul[link]);
  const sideDir = palmarDir(axes, cumul[link]);
  return add(add(origin, scale(along, spec.lengths[link] * u)), scale(sideDir, side));
}

export function thumbJoints(opposition: number, flexion: number): ThumbJoints {
  const u = clamp(opposition / THUMB.oppMax, 0, 1);
  const metaDir = normalize(lerpV(THUMB_REST, THUMB_OPPOSED, u));
  const axis = normalize(cross(metaDir, [0, 0, 1]));
  const flex = clamp(flexion, 0, THUMB.flexMax);
  const ipAngle = THUMB.ipCouple * flex;
  const base = THUMB.base;
  const mcp = add(base, scale(metaDir, THUMB.meta));
  const proxDir = rotateAround(metaDir, axis, flex);
  const ip = add(mcp, scale(proxDir, THUMB.prox));
  const distDir = rotateAround(metaDir, axis, flex + ipAngle);
  const tip = add(ip, scale(distDir, THUMB.dist));
  return { base, mcp, ip, tip, opposition: clamp(opposition, 0, THUMB.oppMax), flex, ipAngle, axis, metaDir };
}

function thumbSample(
  joints: ThumbJoints,
  link: 0 | 1 | 2,
  u: number,
  side: number,
): V3 {
  const origins = [joints.base, joints.mcp, joints.ip];
  const dirs = [
    joints.metaDir,
    rotateAround(joints.metaDir, joints.axis, joints.flex),
    rotateAround(joints.metaDir, joints.axis, joints.flex + joints.ipAngle),
  ];
  const lengths = [THUMB.meta, THUMB.prox, THUMB.dist];
  const flexorSide = normalize(cross(joints.axis, dirs[link]));
  return add(add(origins[link], scale(dirs[link], lengths[link] * u)), scale(flexorSide, side));
}

function restFlexorLength(spec: FingerSpec): number {
  return polylineLength(fingerFlexorPoints(spec, 0));
}

function restExtensorLength(spec: FingerSpec): number {
  return polylineLength(fingerExtensorPoints(spec, 0));
}

const FLEXOR_REST: Record<FingerId, number> = {
  index: 0,
  middle: 0,
  ring: 0,
  pinky: 0,
};
const EXTENSOR_REST: Record<FingerId, number> = {
  index: 0,
  middle: 0,
  ring: 0,
  pinky: 0,
};

function fingerFlexorPoints(spec: FingerSpec, mcp: number): V3[] {
  const eyelet = add(spec.motor, [0, 0.016, 0.009]);
  return [
    eyelet,
    fingerSample(spec, mcp, 0, 0.02, 0.009),
    fingerSample(spec, mcp, 0, 0.42, 0.0072),
    fingerSample(spec, mcp, 1, 0.28, 0.0064),
    fingerSample(spec, mcp, 1, 0.72, 0.006),
    fingerSample(spec, mcp, 2, 0.38, 0.0054),
    fingerSample(spec, mcp, 2, 0.86, 0.0036),
  ];
}

function fingerExtensorPoints(spec: FingerSpec, mcp: number): V3[] {
  const eyelet = add(spec.motor, [0, 0.012, -0.011]);
  return [
    eyelet,
    fingerSample(spec, mcp, 0, 0.08, -0.008),
    fingerSample(spec, mcp, 0, 0.55, -0.0068),
    fingerSample(spec, mcp, 1, 0.4, -0.006),
    fingerSample(spec, mcp, 1, 0.78, -0.0054),
    fingerSample(spec, mcp, 2, 0.62, -0.0046),
  ];
}

for (const id of Object.keys(FINGERS) as FingerId[]) {
  FLEXOR_REST[id] = restFlexorLength(FINGERS[id]);
  EXTENSOR_REST[id] = restExtensorLength(FINGERS[id]);
}

export function fingerTendon(spec: FingerSpec, mcp: number): TendonRoute {
  const flexor = fingerFlexorPoints(spec, mcp);
  const extensor = fingerExtensorPoints(spec, mcp);
  const flexorLength = polylineLength(flexor);
  const extensorLength = polylineLength(extensor);
  const capstan = (FLEXOR_REST[spec.id] - flexorLength) / CAPSTAN_RADIUS;
  return { flexor, extensor, flexorLength, extensorLength, capstan };
}

function thumbFlexorPoints(joints: ThumbJoints): V3[] {
  const eyelet = add(THUMB.flexMotor, [-0.008, 0.01, 0.008]);
  return [
    eyelet,
    thumbSample(joints, 0, 0.35, 0.006),
    thumbSample(joints, 0, 0.82, 0.0065),
    thumbSample(joints, 1, 0.35, 0.006),
    thumbSample(joints, 1, 0.75, 0.0054),
    thumbSample(joints, 2, 0.4, 0.0048),
    thumbSample(joints, 2, 0.84, 0.0032),
  ];
}

function thumbExtensorPoints(joints: ThumbJoints): V3[] {
  const eyelet = add(THUMB.flexMotor, [-0.004, 0.008, -0.008]);
  return [
    eyelet,
    thumbSample(joints, 0, 0.4, -0.0055),
    thumbSample(joints, 1, 0.45, -0.005),
    thumbSample(joints, 2, 0.55, -0.0042),
  ];
}

let thumbFlexRest = 0;
let thumbAddRest = 0;

function oppositionPoints(joints: ThumbJoints, kind: "add" | "abd"): V3[] {
  const along = thumbSample(joints, 0, 0.68, 0);
  if (kind === "add") {
    const eyelet: V3 = [-0.006, -0.008, 0.012];
    const insertion: V3 = [along[0] + 0.005, along[1] + 0.001, along[2] + 0.002];
    const mid = lerpV(eyelet, insertion, 0.5);
    mid[2] += 0.003;
    return [eyelet, mid, insertion];
  }
  const eyelet: V3 = [-0.064, -0.016, 0.0];
  const insertion: V3 = [along[0] - 0.007, along[1] - 0.002, along[2] - 0.002];
  const mid = lerpV(eyelet, insertion, 0.55);
  mid[2] -= 0.002;
  return [eyelet, mid, insertion];
}

function initThumbRests(): void {
  const straight = thumbJoints(0, 0);
  thumbFlexRest = polylineLength(thumbFlexorPoints(straight));
  thumbAddRest = polylineLength(oppositionPoints(straight, "add"));
}

initThumbRests();

export function thumbTendon(opposition: number, flexion: number): TendonRoute {
  const joints = thumbJoints(opposition, flexion);
  const flexor = thumbFlexorPoints(joints);
  const extensor = thumbExtensorPoints(joints);
  const flexorLength = polylineLength(flexor);
  const extensorLength = polylineLength(extensor);
  const capstan = (thumbFlexRest - flexorLength) / CAPSTAN_RADIUS;
  return { flexor, extensor, flexorLength, extensorLength, capstan };
}

export function thumbOppositionTendon(opposition: number, flexion: number): OppositionRoute {
  const joints = thumbJoints(opposition, flexion);
  const adductor = oppositionPoints(joints, "add");
  const abductor = oppositionPoints(joints, "abd");
  const adductorLength = polylineLength(adductor);
  const abductorLength = polylineLength(abductor);
  const capstan = (thumbAddRest - adductorLength) / CAPSTAN_RADIUS;
  return { adductor, abductor, adductorLength, abductorLength, capstan };
}

export function solveFinger(spec: FingerSpec, target: V3): number {
  let bestA = 0;
  let bestD = Number.POSITIVE_INFINITY;
  const coarse = 36;
  for (let i = 0; i <= coarse; i++) {
    const a = (spec.flexMax * i) / coarse;
    const d = dist(fingerJoints(spec, a).tip, target);
    if (d < bestD) {
      bestD = d;
      bestA = a;
    }
  }
  const window = spec.flexMax / coarse;
  const fine = 20;
  for (let i = 0; i <= fine; i++) {
    const a = clamp(bestA + (i / fine - 0.5) * 2 * window, 0, spec.flexMax);
    const d = dist(fingerJoints(spec, a).tip, target);
    if (d < bestD) {
      bestD = d;
      bestA = a;
    }
  }
  return bestA;
}

function contactCost(tip: V3, sphere: V3, prefer: V3, desired: number, angle: number, hint: number): number {
  const offset = sub(tip, sphere);
  const radial = len(offset);
  const gap = radial - desired;
  const dir = radial > 1e-6 ? scale(offset, 1 / radial) : normalize(prefer);
  const align = 1 - dot(dir, normalize(prefer));
  const penetration = gap < -0.0008 ? Math.abs(gap) * 5 : Math.abs(gap);
  return penetration + align * 0.012 + Math.abs(angle - hint) * 0.004;
}

export function solveFingerContact(spec: FingerSpec, sphere: V3, prefer: V3, hint: number, desired = CONTACT_SUM): number {
  let bestA = clamp(hint, 0, spec.flexMax);
  let bestC = Number.POSITIVE_INFINITY;
  const steps = 48;
  for (let i = 0; i <= steps; i++) {
    const a = (spec.flexMax * i) / steps;
    const cost = contactCost(fingerJoints(spec, a).tip, sphere, prefer, desired, a, hint);
    if (cost < bestC) {
      bestC = cost;
      bestA = a;
    }
  }
  const span = spec.flexMax / steps;
  for (let i = 0; i <= 16; i++) {
    const a = clamp(bestA + (i / 16 - 0.5) * 2 * span, 0, spec.flexMax);
    const cost = contactCost(fingerJoints(spec, a).tip, sphere, prefer, desired, a, hint);
    if (cost < bestC) {
      bestC = cost;
      bestA = a;
    }
  }
  return bestA;
}

export function solveThumbContact(
  sphere: V3,
  prefer: V3,
  hintOpp: number,
  hintFlex: number,
  desired = CONTACT_SUM,
): { opposition: number; flexion: number } {
  let bestO = hintOpp;
  let bestF = hintFlex;
  let bestC = Number.POSITIVE_INFINITY;
  const no = 16;
  const nf = 16;
  for (let i = 0; i <= no; i++) {
    const opp = (THUMB.oppMax * i) / no;
    for (let j = 0; j <= nf; j++) {
      const flex = (THUMB.flexMax * j) / nf;
      const cost =
        contactCost(thumbJoints(opp, flex).tip, sphere, prefer, desired, opp, hintOpp) +
        Math.abs(flex - hintFlex) * 0.004;
      if (cost < bestC) {
        bestC = cost;
        bestO = opp;
        bestF = flex;
      }
    }
  }
  return { opposition: bestO, flexion: bestF };
}

export function solveThumb(target: V3): { opposition: number; flexion: number } {
  let bestO = 0;
  let bestF = 0;
  let bestD = Number.POSITIVE_INFINITY;
  const no = 14;
  const nf = 14;
  for (let i = 0; i <= no; i++) {
    const opp = (THUMB.oppMax * i) / no;
    for (let j = 0; j <= nf; j++) {
      const flex = (THUMB.flexMax * j) / nf;
      const d = dist(thumbJoints(opp, flex).tip, target);
      if (d < bestD) {
        bestD = d;
        bestO = opp;
        bestF = flex;
      }
    }
  }
  const so = THUMB.oppMax / no;
  const sf = THUMB.flexMax / nf;
  for (let i = 0; i <= 8; i++) {
    const opp = clamp(bestO + (i / 8 - 0.5) * 2 * so, 0, THUMB.oppMax);
    for (let j = 0; j <= 8; j++) {
      const flex = clamp(bestF + (j / 8 - 0.5) * 2 * sf, 0, THUMB.flexMax);
      const d = dist(thumbJoints(opp, flex).tip, target);
      if (d < bestD) {
        bestD = d;
        bestO = opp;
        bestF = flex;
      }
    }
  }
  return { opposition: bestO, flexion: bestF };
}

export function padOf(pose: Pose, digit: DigitId): V3 {
  if (digit === "thumb") return thumbJoints(pose.thumbOpp, pose.thumbFlex).tip;
  return fingerJoints(FINGERS[digit], pose[digit]).tip;
}

export function jointDegrees(pose: Pose, digit: DigitId): { name: string; deg: number; coupled: boolean }[] {
  if (digit === "thumb") {
    const j = thumbJoints(pose.thumbOpp, pose.thumbFlex);
    return [
      { name: "CMC opposition", deg: (j.opposition * 180) / Math.PI, coupled: false },
      { name: "Thumb MCP", deg: (j.flex * 180) / Math.PI, coupled: false },
      { name: "Thumb IP", deg: (j.ipAngle * 180) / Math.PI, coupled: true },
    ];
  }
  const j = fingerJoints(FINGERS[digit], pose[digit]);
  return [
    { name: "MCP", deg: (j.mcp * 180) / Math.PI, coupled: false },
    { name: "PIP", deg: (j.pipAngle * 180) / Math.PI, coupled: true },
    { name: "DIP", deg: (j.dipAngle * 180) / Math.PI, coupled: true },
  ];
}
