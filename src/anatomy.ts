/**
 * Simplified tendon-driven hand model.
 *
 * Actuator layout (illustrative, not a validated mechanism):
 * - Four fingers: one flexor capstan and one extensor capstan each.
 * - Thumb: flexor, extensor, and opposition capstans.
 * - DIP follows PIP by a fixed coupling. Thumb IP follows MCP the same way.
 * - Abduction is a coupled spread bias. It has no motor and no tendon.
 * - A tendon only shortens. The antagonist pays out.
 *
 * Units are model units, not millimeters. Nothing here is a measured
 * dimension, torque, force, or sensor calibration.
 */
import {
  add,
  clamp,
  cross,
  dist,
  identityFrame,
  lerpN,
  norm,
  rotateAround,
  rotateFrame,
  scale,
  sub,
  translateFrame,
  v,
  type Frame,
  type Vec3,
  worldFromLocal,
} from "./math";

export const DIP_COUPLING = 0.68;
export const THUMB_IP_COUPLING = 0.62;
export const CAPSTAN_RADIUS = 0.01;
export const SPHERE_RADIUS = 0.104;
export const PAD_RADIUS = 0.031;

export type DigitId = "index" | "middle" | "ring" | "pinky";
export const DIGIT_IDS: DigitId[] = ["index", "middle", "ring", "pinky"];

export interface DigitPose {
  abd: number;
  mcp: number;
  pip: number;
  dip: number;
}

export interface ThumbPose {
  opp: number;
  abd: number;
  mcp: number;
  ip: number;
}

export interface DigitSpec {
  id: DigitId;
  x: number;
  baseY: number;
  L: readonly [number, number, number];
  thick: readonly [number, number, number];
  abdRest: number;
}

export const DIGITS: Record<DigitId, DigitSpec> = {
  index: { id: "index", x: -0.15, baseY: 0.8, L: [0.4, 0.25, 0.18], thick: [0.086, 0.076, 0.068], abdRest: 0.06 },
  middle: { id: "middle", x: 0.03, baseY: 0.82, L: [0.44, 0.28, 0.19], thick: [0.092, 0.08, 0.07], abdRest: -0.01 },
  ring: { id: "ring", x: 0.2, baseY: 0.79, L: [0.4, 0.25, 0.18], thick: [0.084, 0.074, 0.066], abdRest: -0.07 },
  pinky: { id: "pinky", x: 0.34, baseY: 0.75, L: [0.37, 0.23, 0.17], thick: [0.072, 0.064, 0.058], abdRest: -0.12 },
};

export const THUMB_SPEC = {
  base: v(-0.28, 0.48, 0.05),
  L: [0.36, 0.3, 0.24] as const,
  thick: [0.098, 0.084, 0.072] as const,
};

export interface DigitFK {
  id: DigitId;
  pose: DigitPose;
  frames: [Frame, Frame, Frame];
  lengths: [number, number, number];
  thick: [number, number, number];
  pad: Vec3;
  padNormal: Vec3;
  joints: [Vec3, Vec3, Vec3];
  axes: [Vec3, Vec3, Vec3];
}

export interface ThumbFK {
  pose: ThumbPose;
  frames: [Frame, Frame, Frame];
  lengths: [number, number, number];
  thick: [number, number, number];
  pad: Vec3;
  padNormal: Vec3;
  joints: [Vec3, Vec3, Vec3];
  axes: [Vec3, Vec3, Vec3];
}

export function coupleDigit(pose: DigitPose): DigitPose {
  return { ...pose, dip: pose.pip * DIP_COUPLING };
}

export function coupleThumb(pose: ThumbPose): ThumbPose {
  return { ...pose, ip: pose.mcp * THUMB_IP_COUPLING };
}

export function padSurfaceLocal(distLen: number, thick: number): Vec3 {
  return v(0, distLen * 0.56, thick / 2 + PAD_RADIUS * 0.82);
}

export function solveDigit(id: DigitId, raw: DigitPose): DigitFK {
  const spec = DIGITS[id];
  const pose = coupleDigit(raw);
  let f = identityFrame(v(spec.x, spec.baseY, 0));
  f = rotateFrame(f, f.z, pose.abd);
  f = rotateFrame(f, f.x, pose.mcp);
  const prox = f;
  const pipFrame = rotateFrame(translateFrame(prox, v(0, spec.L[0], 0)), prox.x, pose.pip);
  const dipFrame = rotateFrame(translateFrame(pipFrame, v(0, spec.L[1], 0)), pipFrame.x, pose.dip);
  const localPad = padSurfaceLocal(spec.L[2], spec.thick[2]);
  const padFrame = translateFrame(dipFrame, localPad);
  return {
    id,
    pose,
    frames: [prox, pipFrame, dipFrame],
    lengths: [spec.L[0], spec.L[1], spec.L[2]],
    thick: [spec.thick[0], spec.thick[1], spec.thick[2]],
    pad: padFrame.origin,
    padNormal: padFrame.z,
    joints: [prox.origin, pipFrame.origin, dipFrame.origin],
    axes: [prox.x, pipFrame.x, dipFrame.x],
  };
}

function aimedFrame(origin: Vec3, direction: Vec3, zHint: Vec3): Frame {
  const yAxis = norm(direction);
  let xAxis = norm(cross(yAxis, zHint));
  if (Math.hypot(xAxis.x, xAxis.y, xAxis.z) < 1e-5) xAxis = norm(cross(yAxis, v(0, 1, 0)));
  let zAxis = norm(cross(xAxis, yAxis));
  if (zAxis.z < 0) {
    xAxis = scale(xAxis, -1);
    zAxis = norm(cross(xAxis, yAxis));
  }
  return { origin, x: xAxis, y: yAxis, z: zAxis };
}

export function solveThumb(raw: ThumbPose): ThumbFK {
  const pose = coupleThumb(raw);
  const L = THUMB_SPEC.L;
  const thick = THUMB_SPEC.thick;
  const neutral = v(0.24, 0.48, 0.4);
  const swung = rotateAround(neutral, v(0, 1, 0), (pose.opp - 0.7) * 0.65);
  const tilted = rotateAround(swung, v(1, 0, 0), pose.abd * 0.85);
  const meta = aimedFrame(THUMB_SPEC.base, tilted, v(0, -0.15, 1));
  const mcp = rotateFrame(translateFrame(meta, v(0, L[0], 0)), meta.x, pose.mcp);
  const ip = rotateFrame(translateFrame(mcp, v(0, L[1], 0)), mcp.x, pose.ip);
  const localPad = padSurfaceLocal(L[2], thick[2]);
  const padFrame = translateFrame(ip, localPad);
  return {
    pose,
    frames: [meta, mcp, ip],
    lengths: [L[0], L[1], L[2]],
    thick: [thick[0], thick[1], thick[2]],
    pad: padFrame.origin,
    padNormal: padFrame.z,
    joints: [meta.origin, mcp.origin, ip.origin],
    axes: [meta.x, mcp.x, ip.x],
  };
}

function solve3(m: number[], b: number[]): number[] | null {
  const a = m.slice();
  const x = b.slice();
  for (let col = 0; col < 3; col += 1) {
    let piv = col;
    for (let r = col + 1; r < 3; r += 1) {
      if (Math.abs(a[r * 3 + col]) > Math.abs(a[piv * 3 + col])) piv = r;
    }
    if (Math.abs(a[piv * 3 + col]) < 1e-10) return null;
    if (piv !== col) {
      for (let c = col; c < 3; c += 1) {
        const tmp = a[col * 3 + c];
        a[col * 3 + c] = a[piv * 3 + c];
        a[piv * 3 + c] = tmp;
      }
      const tb = x[col];
      x[col] = x[piv];
      x[piv] = tb;
    }
    const div = a[col * 3 + col];
    for (let c = col; c < 3; c += 1) a[col * 3 + c] /= div;
    x[col] /= div;
    for (let r = 0; r < 3; r += 1) {
      if (r === col) continue;
      const f = a[r * 3 + col];
      for (let c = col; c < 3; c += 1) a[r * 3 + c] -= f * a[col * 3 + c];
      x[r] -= f * x[col];
    }
  }
  return x;
}

function dlsStep(columns: Vec3[], err: Vec3): number[] | null {
  const jt = columns;
  const A = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const rhs = [0, 0, 0];
  const lambda = 8e-4;
  for (let r = 0; r < 3; r += 1) {
    for (let c = 0; c < 3; c += 1) {
      A[r * 3 + c] = dotSafe(jt[r], jt[c]) + (r === c ? lambda : 0);
    }
    rhs[r] = component(jt[r], err);
  }
  return solve3(A, rhs);
}

function dotSafe(a: Vec3, b: Vec3): number {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

function component(j: Vec3, err: Vec3): number {
  return j.x * err.x + j.y * err.y + j.z * err.z;
}

function subV(a: Vec3, b: Vec3): Vec3 {
  return sub(a, b);
}

const DIGIT_LIMIT = {
  abd: [-0.95, 0.75] as const,
  mcp: [-0.2, 1.45] as const,
  pip: [0, 1.65] as const,
};

function ikDigitFrom(id: DigitId, target: Vec3, seed: DigitPose): { pose: DigitPose; error: number } {
  let pose = coupleDigit(seed);
  const eps = 1e-3;
  for (let iter = 0; iter < 12; iter += 1) {
    const cur = solveDigit(id, pose).pad;
    const err = subV(target, cur);
    const error = Math.hypot(err.x, err.y, err.z);
    if (error < 8e-4) return { pose: coupleDigit(pose), error };
    const base = pose;
    const columns: Vec3[] = (["abd", "mcp", "pip"] as const).map((key) => {
      const next = { ...base, [key]: base[key] + eps };
      const p2 = solveDigit(id, next).pad;
      return scale(sub(p2, cur), 1 / eps);
    });
    const dq = dlsStep(columns, err);
    if (!dq) break;
    const maxStep = 0.28;
    pose = coupleDigit({
      abd: clamp(base.abd + clamp(dq[0], -maxStep, maxStep), DIGIT_LIMIT.abd[0], DIGIT_LIMIT.abd[1]),
      mcp: clamp(base.mcp + clamp(dq[1], -maxStep, maxStep), DIGIT_LIMIT.mcp[0], DIGIT_LIMIT.mcp[1]),
      pip: clamp(base.pip + clamp(dq[2], -maxStep, maxStep), DIGIT_LIMIT.pip[0], DIGIT_LIMIT.pip[1]),
      dip: 0,
    });
  }
  return { pose: coupleDigit(pose), error: dist(solveDigit(id, pose).pad, target) };
}

export function ikDigit(id: DigitId, target: Vec3, seed: DigitPose): { pose: DigitPose; error: number } {
  const spec = DIGITS[id];
  const rel = sub(target, v(spec.x, spec.baseY, 0));
  const hintedAbd = clamp(Math.atan2(-rel.x, Math.max(0.05, rel.y)), DIGIT_LIMIT.abd[0], DIGIT_LIMIT.abd[1]);
  const aimed = { ...seed, abd: hintedAbd };
  const candidates = [
    aimed,
    { ...aimed, mcp: 0.85, pip: 1.05 },
    { ...aimed, mcp: 0.35, pip: 0.4 },
  ];
  let best = ikDigitFrom(id, target, candidates[0]);
  for (const candidate of candidates.slice(1)) {
    const next = ikDigitFrom(id, target, candidate);
    if (next.error < best.error) best = next;
  }
  return best;
}

function ikThumbFrom(target: Vec3, seed: ThumbPose): { pose: ThumbPose; error: number } {
  let pose = coupleThumb(seed);
  const eps = 1e-3;
  for (let iter = 0; iter < 12; iter += 1) {
    const cur = solveThumb(pose).pad;
    const err = sub(target, cur);
    const error = Math.hypot(err.x, err.y, err.z);
    if (error < 8e-4) return { pose: coupleThumb(pose), error };
    const base = pose;
    const columns: Vec3[] = (["opp", "abd", "mcp"] as const).map((key) => {
      const next = { ...base, [key]: base[key] + eps };
      return scale(sub(solveThumb(next).pad, cur), 1 / eps);
    });
    const dq = dlsStep(columns, err);
    if (!dq) break;
    const maxStep = 0.3;
    pose = coupleThumb({
      opp: clamp(base.opp + clamp(dq[0], -maxStep, maxStep), 0.05, 1.55),
      abd: clamp(base.abd + clamp(dq[1], -maxStep, maxStep), -0.45, 0.65),
      mcp: clamp(base.mcp + clamp(dq[2], -maxStep, maxStep), -0.15, 1.4),
      ip: 0,
    });
  }
  return { pose: coupleThumb(pose), error: dist(solveThumb(pose).pad, target) };
}

export function ikThumb(target: Vec3, seed: ThumbPose): { pose: ThumbPose; error: number } {
  const candidates = [seed, { ...seed, opp: 0.7, mcp: 0.45 }, { ...seed, opp: 1.15, mcp: 0.85 }];
  let best = ikThumbFrom(target, candidates[0]);
  for (const candidate of candidates.slice(1)) {
    const next = ikThumbFrom(target, candidate);
    if (next.error < best.error) best = next;
  }
  return best;
}

export type TendonKind = "flexor" | "extensor" | "opposition";

export interface ActuatorDef {
  id: string;
  digit: DigitId | "thumb";
  kind: TendonKind;
  position: Vec3;
}

export const ACTUATORS: ActuatorDef[] = [
  { id: "index-flex", digit: "index", kind: "flexor", position: v(-0.15, 0.62, 0.055) },
  { id: "index-ext", digit: "index", kind: "extensor", position: v(-0.15, 0.46, 0.055) },
  { id: "middle-flex", digit: "middle", kind: "flexor", position: v(0.03, 0.64, 0.055) },
  { id: "middle-ext", digit: "middle", kind: "extensor", position: v(0.03, 0.48, 0.055) },
  { id: "ring-flex", digit: "ring", kind: "flexor", position: v(0.2, 0.62, 0.055) },
  { id: "ring-ext", digit: "ring", kind: "extensor", position: v(0.2, 0.46, 0.055) },
  { id: "pinky-flex", digit: "pinky", kind: "flexor", position: v(0.35, 0.58, 0.055) },
  { id: "pinky-ext", digit: "pinky", kind: "extensor", position: v(0.35, 0.42, 0.055) },
  { id: "thumb-flex", digit: "thumb", kind: "flexor", position: v(-0.28, 0.34, 0.06) },
  { id: "thumb-ext", digit: "thumb", kind: "extensor", position: v(-0.28, 0.18, 0.06) },
  { id: "thumb-opp", digit: "thumb", kind: "opposition", position: v(-0.14, 0.24, 0.06) },
];

export interface TendonRoute {
  id: string;
  digit: DigitId | "thumb";
  kind: TendonKind;
  points: Vec3[];
  freeLength: number;
  spool: number;
}

function sideOffset(thick: number, dorsal: boolean): number {
  const sign = dorsal ? -1 : 1;
  return sign * (thick / 2 + 0.015);
}

function dedupe(points: Vec3[]): Vec3[] {
  const out: Vec3[] = [];
  for (const p of points) {
    const prev = out[out.length - 1];
    if (!prev || dist(prev, p) > 1e-4) out.push(p);
  }
  return out;
}

function polylineLength(points: Vec3[]): number {
  let total = 0;
  for (let i = 1; i < points.length; i += 1) total += dist(points[i - 1], points[i]);
  return total;
}

function rimPoint(center: Vec3, angle: number): Vec3 {
  const radius = CAPSTAN_RADIUS + 0.006;
  return add(center, v(Math.cos(angle) * radius, Math.sin(angle) * radius, 0));
}

function wrapOnDrum(center: Vec3, guide: Vec3, spool: number): Vec3[] {
  const base = Math.atan2(guide.y - center.y, guide.x - center.x);
  const span = clamp(spool, -Math.PI * 1.15, Math.PI * 1.15);
  const steps = Math.max(2, Math.ceil(Math.abs(span) / 0.32));
  const pts: Vec3[] = [];
  for (let i = 0; i <= steps; i += 1) {
    const a = base + span * (1 - i / steps);
    pts.push(rimPoint(center, a));
  }
  return pts;
}

function digitBody(fk: DigitFK, kind: TendonKind): Vec3[] {
  const dorsal = kind === "extensor";
  const [prox, mid, dist] = fk.frames;
  const z0 = sideOffset(fk.thick[0], dorsal);
  const z1 = sideOffset(fk.thick[1], dorsal);
  const z2 = sideOffset(fk.thick[2], dorsal);
  const lateral = fk.id === "pinky" ? 0.045 : fk.id === "index" ? -0.04 : 0.035;
  const guide = worldFromLocal(prox, v(0, 0.08, z0));
  const redirect = v(DIGITS[fk.id].x + lateral, DIGITS[fk.id].baseY - 0.04, dorsal ? -0.02 : 0.09);
  const insertion = worldFromLocal(dist, v(0, fk.lengths[2] * 0.42, z2));
  return dedupe([
    redirect,
    guide,
    worldFromLocal(prox, v(0, fk.lengths[0] * 0.38, z0)),
    worldFromLocal(prox, v(0, fk.lengths[0] * 0.78, z0)),
    worldFromLocal(mid, v(0, 0.02, z1)),
    worldFromLocal(mid, v(0, fk.lengths[1] * 0.45, z1)),
    worldFromLocal(mid, v(0, fk.lengths[1] * 0.82, z1)),
    worldFromLocal(dist, v(0, 0.02, z2)),
    worldFromLocal(dist, v(0, fk.lengths[2] * 0.28, z2)),
    insertion,
  ]);
}

function digitTendonPoints(fk: DigitFK, kind: TendonKind, spool: number): Vec3[] {
  const actuator = ACTUATORS.find((item) => item.digit === fk.id && item.kind === kind);
  if (!actuator) return [];
  const body = digitBody(fk, kind);
  return dedupe([...wrapOnDrum(actuator.position, body[0], spool), ...body]);
}

function thumbBody(fk: ThumbFK, kind: TendonKind): Vec3[] {
  const [meta, prox, dist] = fk.frames;
  if (kind === "opposition") {
    const insertion = worldFromLocal(meta, v(0, fk.lengths[0] * 0.72, fk.thick[0] / 2 + 0.012));
    return dedupe([
      v(-0.2, 0.3, 0.09),
      v(-0.26, 0.36, 0.1),
      worldFromLocal(meta, v(0, fk.lengths[0] * 0.28, fk.thick[0] / 2 + 0.012)),
      insertion,
    ]);
  }
  const dorsal = kind === "extensor";
  const z0 = sideOffset(fk.thick[0], dorsal);
  const z1 = sideOffset(fk.thick[1], dorsal);
  const z2 = sideOffset(fk.thick[2], dorsal);
  const guide = worldFromLocal(meta, v(0, 0.08, z0));
  const insertion = worldFromLocal(dist, v(0, fk.lengths[2] * 0.4, z2));
  return dedupe([
    v(-0.34, 0.3, dorsal ? 0.0 : 0.1),
    guide,
    worldFromLocal(meta, v(0, fk.lengths[0] * 0.55, z0)),
    worldFromLocal(prox, v(0, 0.04, z1)),
    worldFromLocal(prox, v(0, fk.lengths[1] * 0.62, z1)),
    worldFromLocal(dist, v(0, 0.03, z2)),
    insertion,
  ]);
}

function thumbTendonPoints(fk: ThumbFK, kind: TendonKind, spool: number): Vec3[] {
  const actuator = ACTUATORS.find((item) => item.digit === "thumb" && item.kind === kind);
  if (!actuator) return [];
  const body = thumbBody(fk, kind);
  return dedupe([...wrapOnDrum(actuator.position, body[0], spool), ...body]);
}

function freeBodyLength(points: Vec3[]): number {
  if (points.length < 2) return 0;
  let total = 0;
  for (let i = 1; i < points.length; i += 1) total += dist(points[i - 1], points[i]);
  return total;
}

function spoolFor(current: number, reference: number): number {
  return (reference - current) / CAPSTAN_RADIUS;
}

function digitFreeLength(fk: DigitFK, kind: TendonKind): number {
  return freeBodyLength(digitBody(fk, kind));
}

function thumbFreeLength(fk: ThumbFK, kind: TendonKind): number {
  return freeBodyLength(thumbBody(fk, kind));
}

export interface PoseSet {
  digits: Record<DigitId, DigitPose>;
  thumb: ThumbPose;
}

export function routesFor(pose: PoseSet): TendonRoute[] {
  const digits = {
    index: solveDigit("index", pose.digits.index),
    middle: solveDigit("middle", pose.digits.middle),
    ring: solveDigit("ring", pose.digits.ring),
    pinky: solveDigit("pinky", pose.digits.pinky),
  };
  const thumb = solveThumb(pose.thumb);
  const refDigits = {
    index: solveDigit("index", { ...pose.digits.index, mcp: 0, pip: 0, dip: 0 }),
    middle: solveDigit("middle", { ...pose.digits.middle, mcp: 0, pip: 0, dip: 0 }),
    ring: solveDigit("ring", { ...pose.digits.ring, mcp: 0, pip: 0, dip: 0 }),
    pinky: solveDigit("pinky", { ...pose.digits.pinky, mcp: 0, pip: 0, dip: 0 }),
  };
  const refThumbFlex = solveThumb({ ...pose.thumb, mcp: 0, ip: 0 });
  const refThumbOpp = solveThumb({ ...pose.thumb, opp: 0.34 });
  const routes: TendonRoute[] = [];

  for (const id of DIGIT_IDS) {
    for (const kind of ["flexor", "extensor"] as const) {
      const current = digitFreeLength(digits[id], kind);
      const reference = digitFreeLength(refDigits[id], kind);
      const spool = spoolFor(current, reference);
      const points = digitTendonPoints(digits[id], kind, spool);
      routes.push({
        id: `${id}-${kind === "flexor" ? "flex" : "ext"}`,
        digit: id,
        kind,
        points,
        freeLength: current,
        spool,
      });
    }
  }

  for (const kind of ["flexor", "extensor", "opposition"] as const) {
    const current = thumbFreeLength(thumb, kind);
    const reference =
      kind === "opposition" ? thumbFreeLength(refThumbOpp, kind) : thumbFreeLength(refThumbFlex, kind);
    // The opposition tendon passes a redirect, so positive spool winds as opposition increases.
    const spool = (kind === "opposition" ? -1 : 1) * spoolFor(current, reference);
    routes.push({
      id: kind === "opposition" ? "thumb-opp" : `thumb-${kind === "flexor" ? "flex" : "ext"}`,
      digit: "thumb",
      kind,
      points: thumbTendonPoints(thumb, kind, spool),
      freeLength: current,
      spool,
    });
  }
  return routes;
}

export function reachLength(id: DigitId | "thumb"): number {
  if (id === "thumb") return THUMB_SPEC.L[0] + THUMB_SPEC.L[1] + THUMB_SPEC.L[2];
  const spec = DIGITS[id];
  return spec.L[0] + spec.L[1] + spec.L[2];
}

export function boneClearanceOk(fk: DigitFK): boolean {
  const [prox] = fk.frames;
  const point = worldFromLocal(prox, v(0, fk.lengths[0] * 0.5, sideOffset(fk.thick[0], false)));
  const axisPoint = worldFromLocal(prox, v(0, fk.lengths[0] * 0.5, 0));
  return dist(point, axisPoint) > fk.thick[0] / 2;
}

export function mixDigit(a: DigitPose, b: DigitPose, t: number): DigitPose {
  return coupleDigit({
    abd: lerpN(a.abd, b.abd, t),
    mcp: lerpN(a.mcp, b.mcp, t),
    pip: lerpN(a.pip, b.pip, t),
    dip: 0,
  });
}

export function mixThumb(a: ThumbPose, b: ThumbPose, t: number): ThumbPose {
  return coupleThumb({
    opp: lerpN(a.opp, b.opp, t),
    abd: lerpN(a.abd, b.abd, t),
    mcp: lerpN(a.mcp, b.mcp, t),
    ip: 0,
  });
}

export function polyline(points: Vec3[]): number {
  return polylineLength(points);
}
