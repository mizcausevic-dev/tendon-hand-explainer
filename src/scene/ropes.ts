import * as THREE from "three";
import type { V3 } from "../sim/math.ts";

const TUBULAR = 56;
const RADIAL = 8;

export interface Rope {
  mesh: THREE.Mesh;
  material: THREE.MeshStandardMaterial;
  bead: THREE.Mesh;
}

export function createRope(radius: number, color: number): Rope {
  const rings = TUBULAR + 1;
  const positions = new Float32Array(rings * RADIAL * 3);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const indices: number[] = [];
  for (let i = 0; i < TUBULAR; i++) {
    for (let j = 0; j < RADIAL; j++) {
      const a = i * RADIAL + j;
      const b = i * RADIAL + ((j + 1) % RADIAL);
      const c = (i + 1) * RADIAL + j;
      const d = (i + 1) * RADIAL + ((j + 1) % RADIAL);
      indices.push(a, c, b, b, c, d);
    }
  }
  geometry.setIndex(indices);
  const material = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.46,
    metalness: 0.08,
    emissive: 0x00f5d4,
    emissiveIntensity: 0,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.frustumCulled = false;
  const bead = new THREE.Mesh(
    new THREE.SphereGeometry(radius * 2.3, 10, 8),
    new THREE.MeshStandardMaterial({
      color: 0x00f5d4,
      emissive: 0x00f5d4,
      emissiveIntensity: 0.8,
      roughness: 0.3,
    }),
  );
  bead.visible = false;
  return { mesh, material, bead };
}

function resample(points: V3[], count: number): THREE.Vector3[] {
  const cumulative = [0];
  for (let i = 1; i < points.length; i++) {
    const dx = points[i][0] - points[i - 1][0];
    const dy = points[i][1] - points[i - 1][1];
    const dz = points[i][2] - points[i - 1][2];
    cumulative.push(cumulative[i - 1] + Math.hypot(dx, dy, dz));
  }
  const total = cumulative[cumulative.length - 1] || 1;
  const out: THREE.Vector3[] = [];
  let seg = 0;
  for (let i = 0; i < count; i++) {
    const target = (total * i) / (count - 1);
    while (seg < cumulative.length - 2 && cumulative[seg + 1] < target) seg += 1;
    const span = cumulative[seg + 1] - cumulative[seg] || 1;
    const u = (target - cumulative[seg]) / span;
    const a = points[seg];
    const b = points[Math.min(seg + 1, points.length - 1)];
    out.push(new THREE.Vector3(a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u, a[2] + (b[2] - a[2]) * u));
  }
  return out;
}

export function updateRope(rope: Rope, points: V3[], radius: number, glow: number, beadU: number | null): void {
  const sampled = resample(points, TUBULAR + 1);
  const tangents: THREE.Vector3[] = [];
  for (let i = 0; i < sampled.length; i++) {
    const ahead = sampled[Math.min(i + 1, sampled.length - 1)];
    const behind = sampled[Math.max(i - 1, 0)];
    tangents.push(ahead.clone().sub(behind).normalize());
  }
  let normal = new THREE.Vector3(0, 0, 1);
  if (Math.abs(normal.dot(tangents[0])) > 0.9) normal.set(1, 0, 0);
  normal.crossVectors(normal, tangents[0]).normalize();
  const position = rope.mesh.geometry.getAttribute("position") as THREE.BufferAttribute;
  for (let i = 0; i < sampled.length; i++) {
    if (i > 0) {
      const axis = new THREE.Vector3().crossVectors(tangents[i - 1], tangents[i]);
      const sin = axis.length();
      const cos = THREE.MathUtils.clamp(tangents[i - 1].dot(tangents[i]), -1, 1);
      if (sin > 1e-5) {
        axis.multiplyScalar(1 / sin);
        normal.applyAxisAngle(axis, Math.atan2(sin, cos));
      }
    }
    normal.addScaledVector(tangents[i], -normal.dot(tangents[i])).normalize();
    const binormal = new THREE.Vector3().crossVectors(tangents[i], normal).normalize();
    for (let j = 0; j < RADIAL; j++) {
      const angle = (j / RADIAL) * Math.PI * 2;
      const radial = normal.clone().multiplyScalar(Math.cos(angle)).addScaledVector(binormal, Math.sin(angle));
      const vertex = sampled[i].clone().addScaledVector(radial, radius);
      position.setXYZ(i * RADIAL + j, vertex.x, vertex.y, vertex.z);
    }
  }
  position.needsUpdate = true;
  rope.mesh.geometry.computeVertexNormals();
  rope.material.emissiveIntensity = glow;
  if (beadU === null) {
    rope.bead.visible = false;
    return;
  }
  const index = Math.min(sampled.length - 1, Math.max(0, Math.round(beadU * (sampled.length - 1))));
  rope.bead.visible = true;
  rope.bead.position.copy(sampled[index]);
}

export function beadPhase(capstan: number, towardMotor: boolean): number {
  const turns = capstan / (Math.PI * 2);
  const frac = turns - Math.floor(turns);
  return towardMotor ? 1 - frac : frac;
}
