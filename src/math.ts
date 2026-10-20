export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export function v(x = 0, y = 0, z = 0): Vec3 {
  return { x, y, z };
}

export function add(a: Vec3, b: Vec3): Vec3 {
  return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z };
}

export function sub(a: Vec3, b: Vec3): Vec3 {
  return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
}

export function scale(a: Vec3, s: number): Vec3 {
  return { x: a.x * s, y: a.y * s, z: a.z * s };
}

export function dot(a: Vec3, b: Vec3): number {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

export function cross(a: Vec3, b: Vec3): Vec3 {
  return {
    x: a.y * b.z - a.z * b.y,
    y: a.z * b.x - a.x * b.z,
    z: a.x * b.y - a.y * b.x,
  };
}

export function len(a: Vec3): number {
  return Math.hypot(a.x, a.y, a.z);
}

export function norm(a: Vec3): Vec3 {
  const l = len(a);
  if (l < 1e-8) return v(0, 1, 0);
  return scale(a, 1 / l);
}

export function lerp(a: Vec3, b: Vec3, t: number): Vec3 {
  return add(a, scale(sub(b, a), t));
}

export function lerpN(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function clamp(n: number, a: number, b: number): number {
  return Math.max(a, Math.min(b, n));
}

export function dist(a: Vec3, b: Vec3): number {
  return len(sub(a, b));
}

export function smootherstep(edge0: number, edge1: number, x: number): number {
  if (edge1 === edge0) return x >= edge1 ? 1 : 0;
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * t * (t * (t * 6 - 15) + 10);
}

export function frac(n: number): number {
  return n - Math.floor(n);
}

/** Right-handed rotation of a vector around a unit axis. */
export function rotateAround(p: Vec3, axis: Vec3, angle: number): Vec3 {
  const ax = norm(axis);
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return add(add(scale(p, c), scale(cross(ax, p), s)), scale(ax, dot(ax, p) * (1 - c)));
}

export interface Frame {
  origin: Vec3;
  x: Vec3;
  y: Vec3;
  z: Vec3;
}

export function identityFrame(origin: Vec3 = v()): Frame {
  return { origin, x: v(1, 0, 0), y: v(0, 1, 0), z: v(0, 0, 1) };
}

export function rotateFrame(f: Frame, axis: Vec3, angle: number): Frame {
  return {
    origin: f.origin,
    x: rotateAround(f.x, axis, angle),
    y: rotateAround(f.y, axis, angle),
    z: rotateAround(f.z, axis, angle),
  };
}

export function translateFrame(f: Frame, local: Vec3): Frame {
  return {
    origin: worldFromLocal(f, local),
    x: f.x,
    y: f.y,
    z: f.z,
  };
}

export function worldFromLocal(f: Frame, local: Vec3): Vec3 {
  return add(f.origin, add(add(scale(f.x, local.x), scale(f.y, local.y)), scale(f.z, local.z)));
}

export function almostEqual(a: number, b: number, eps = 1e-6): boolean {
  return Math.abs(a - b) <= eps;
}

export function vecAlmost(a: Vec3, b: Vec3, eps = 1e-5): boolean {
  return dist(a, b) <= eps;
}
