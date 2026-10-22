import * as THREE from "three";
import { PAL } from "../palette.ts";
import { EXPLODE_PARK, type ExplodeState } from "../sim/choreography.ts";
import {
  FINGERS,
  PAD_RADIUS,
  THUMB,
  thumbJoints,
  type FingerId,
  type FingerSpec,
  type Pose,
} from "../sim/kinematics.ts";
import type { TendonSnapshot } from "../sim/choreography.ts";

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function canvasTexture(paint: (ctx: CanvasRenderingContext2D, size: number) => void, srgb: boolean): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not create a texture canvas.");
  paint(ctx, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.LinearSRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

export function createMaterials(): {
  aluminum: THREE.MeshStandardMaterial;
  aluminumDark: THREE.MeshStandardMaterial;
  silicone: THREE.MeshStandardMaterial;
  copper: THREE.MeshStandardMaterial;
  encoder: THREE.MeshStandardMaterial;
  joint: THREE.MeshStandardMaterial;
} {
  const rnd = mulberry32(0x0a11ce);
  const rough = canvasTexture((ctx, size) => {
    ctx.fillStyle = "#9a9a9a";
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 1800; i++) {
      const v = 120 + Math.floor(rnd() * 80);
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.fillRect(Math.floor(rnd() * size), Math.floor(rnd() * size), 2, 1);
    }
  }, false);
  const grain = canvasTexture((ctx, size) => {
    ctx.fillStyle = "#1e222a";
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 2400; i++) {
      const v = 20 + Math.floor(rnd() * 28);
      ctx.fillStyle = `rgba(${v},${v},${v + 4},0.55)`;
      ctx.fillRect(Math.floor(rnd() * size), Math.floor(rnd() * size), 2, 2);
    }
  }, true);
  return {
    aluminum: new THREE.MeshStandardMaterial({
      color: PAL.aluminum,
      roughnessMap: rough,
      metalness: 0.58,
      roughness: 0.46,
    }),
    aluminumDark: new THREE.MeshStandardMaterial({
      color: PAL.aluminumDark,
      metalness: 0.62,
      roughness: 0.52,
    }),
    silicone: new THREE.MeshStandardMaterial({
      color: PAL.silicone,
      map: grain,
      metalness: 0.02,
      roughness: 0.72,
    }),
    copper: new THREE.MeshStandardMaterial({
      color: PAL.copper,
      metalness: 0.7,
      roughness: 0.34,
    }),
    encoder: new THREE.MeshStandardMaterial({
      color: 0x6a5420,
      emissive: PAL.amber,
      emissiveIntensity: 0.28,
      metalness: 0.45,
      roughness: 0.3,
    }),
    joint: new THREE.MeshStandardMaterial({
      color: 0x222833,
      metalness: 0.7,
      roughness: 0.4,
    }),
  };
}

export interface FingerRig {
  mcp: THREE.Group;
  pip: THREE.Group;
  dip: THREE.Group;
  shells: THREE.Group[];
  encoders: Record<"mcp" | "pip" | "dip", THREE.MeshStandardMaterial>;
}

export interface ThumbRig {
  cmc: THREE.Group;
  mcp: THREE.Group;
  ip: THREE.Group;
  shells: THREE.Group[];
  encoders: Record<"cmc" | "mcp" | "ip", THREE.MeshStandardMaterial>;
}

export interface PadRig {
  digit: "index" | "middle" | "ring" | "pinky" | "thumb";
  mesh: THREE.Mesh;
  base: Float32Array;
}

export interface TaxelRig {
  digit: PadRig["digit"];
  mesh: THREE.InstancedMesh;
  local: THREE.Vector3[];
}

export interface HandRig {
  root: THREE.Group;
  fingers: Record<FingerId, FingerRig>;
  thumb: ThumbRig;
  pads: PadRig[];
  taxels: TaxelRig[];
  covers: {
    palmar: THREE.Group;
    dorsal: THREE.Group;
  };
  capstans: Record<string, THREE.Group>;
  anchors: Record<string, THREE.Object3D>;
}

const _basisX = new THREE.Vector3();
const _basisY = new THREE.Vector3();
const _basisZ = new THREE.Vector3();
const _basis = new THREE.Matrix4();

function alongY(length: number, radiusTop: number, radiusBottom: number, material: THREE.Material): THREE.Mesh {
  const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, length, 14, 1, false);
  geometry.translate(0, length / 2, 0);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function encoderRing(materialSource: THREE.MeshStandardMaterial): { mesh: THREE.Mesh; material: THREE.MeshStandardMaterial } {
  const material = materialSource.clone();
  const mesh = new THREE.Mesh(new THREE.TorusGeometry(0.0082, 0.00115, 8, 18), material);
  mesh.rotation.y = Math.PI / 2;
  mesh.castShadow = false;
  return { mesh, material };
}

function dorsalShell(length: number, radius: number, material: THREE.Material): THREE.Mesh {
  const geometry = new THREE.CylinderGeometry(radius, radius * 0.92, length, 12, 1, true, Math.PI * 0.15, Math.PI * 0.9);
  geometry.translate(0, length / 2, 0);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  return mesh;
}

function buildFinger(spec: FingerSpec, materials: ReturnType<typeof createMaterials>): FingerRig {
  const root = new THREE.Group();
  root.position.set(spec.base[0], spec.base[1], spec.base[2]);
  root.rotation.z = spec.yaw;
  const mcp = new THREE.Group();
  root.add(mcp);
  const [l1, l2, l3] = spec.lengths;
  mcp.add(alongY(l1, 0.0074, 0.0066, materials.aluminum));
  const pip = new THREE.Group();
  pip.position.y = l1;
  mcp.add(pip);
  pip.add(alongY(l2, 0.0062, 0.0055, materials.aluminum));
  const dip = new THREE.Group();
  dip.position.y = l2;
  pip.add(dip);
  dip.add(alongY(l3 * 0.62, 0.0052, 0.0046, materials.aluminum));

  const shells = [l1, l2].map((length, index) => {
    const shell = new THREE.Group();
    const plate = dorsalShell(length * 0.82, index === 0 ? 0.0092 : 0.0076, materials.aluminumDark);
    plate.position.y = length * 0.08;
    shell.add(plate);
    (index === 0 ? mcp : pip).add(shell);
    return shell;
  });

  const pin = (parent: THREE.Group) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.0016, 0.0016, 0.018, 8), materials.joint);
    mesh.rotation.z = Math.PI / 2;
    parent.add(mesh);
  };
  pin(mcp);
  pin(pip);
  pin(dip);

  const mcpEncoder = encoderRing(materials.encoder);
  const pipEncoder = encoderRing(materials.encoder);
  const dipEncoder = encoderRing(materials.encoder);
  mcp.add(mcpEncoder.mesh);
  pip.add(pipEncoder.mesh);
  dip.add(dipEncoder.mesh);

  const pulley = (parent: THREE.Group, y: number, z: number, r: number) => {
    const mesh = new THREE.Mesh(new THREE.TorusGeometry(r, 0.0011, 6, 14), materials.joint);
    mesh.position.set(0, y, z);
    mesh.rotation.y = Math.PI / 2;
    parent.add(mesh);
  };
  pulley(mcp, l1 * 0.42, 0.0072, 0.0042);
  pulley(pip, l2 * 0.45, 0.0062, 0.0036);
  pulley(dip, l3 * 0.38, 0.0052, 0.003);
  pulley(mcp, l1 * 0.55, -0.0066, 0.0034);

  return {
    mcp,
    pip,
    dip,
    shells,
    encoders: { mcp: mcpEncoder.material, pip: pipEncoder.material, dip: dipEncoder.material },
  };
}

function attachFingerRoot(spec: FingerSpec, rig: FingerRig, parent: THREE.Group): void {
  const root = rig.mcp.parent as THREE.Group;
  root.position.set(spec.base[0], spec.base[1], spec.base[2]);
  parent.add(root);
}

export function buildHand(): HandRig {
  const materials = createMaterials();
  const root = new THREE.Group();
  root.name = "hand";

  const dorsalPlate = new THREE.Mesh(new THREE.BoxGeometry(0.094, 0.108, 0.007), materials.aluminum);
  dorsalPlate.position.set(0, 0.008, -0.012);
  dorsalPlate.castShadow = true;
  dorsalPlate.receiveShadow = true;
  root.add(dorsalPlate);

  const rail = (x: number) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.1, 0.02), materials.aluminumDark);
    mesh.position.set(x, 0.006, 0.0);
    mesh.castShadow = true;
    root.add(mesh);
  };
  rail(-0.046);
  rail(0.046);
  const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.086, 0.012, 0.018), materials.aluminumDark);
  bridge.position.set(0, 0.056, 0.001);
  root.add(bridge);
  const wristBlock = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.02, 0.024), materials.aluminum);
  wristBlock.position.set(0, -0.046, -0.002);
  wristBlock.castShadow = true;
  root.add(wristBlock);

  const forearm = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.027, 0.11, 18), materials.aluminum);
  forearm.position.set(0, -0.112, -0.002);
  forearm.castShadow = true;
  forearm.receiveShadow = true;
  root.add(forearm);
  const flange = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.008, 18), materials.aluminumDark);
  flange.position.set(0, -0.062, -0.002);
  root.add(flange);

  const fingers = {
    index: buildFinger(FINGERS.index, materials),
    middle: buildFinger(FINGERS.middle, materials),
    ring: buildFinger(FINGERS.ring, materials),
    pinky: buildFinger(FINGERS.pinky, materials),
  };
  (Object.keys(fingers) as FingerId[]).forEach((id) => attachFingerRoot(FINGERS[id], fingers[id], root));

  const thumb = buildThumb(materials);
  root.add(thumb.cmc);

  const pads: PadRig[] = [];
  const taxels: TaxelRig[] = [];
  (Object.keys(fingers) as FingerId[]).forEach((id) => {
    const pad = makePad(materials.silicone);
    pad.mesh.position.y = FINGERS[id].lengths[2];
    fingers[id].dip.add(pad.mesh);
    pads.push({ digit: id, mesh: pad.mesh, base: pad.base });
    const grid = makeTaxels();
    grid.mesh.position.y = FINGERS[id].lengths[2];
    fingers[id].dip.add(grid.mesh);
    taxels.push({ digit: id, mesh: grid.mesh, local: grid.local });
  });
  const thumbPad = makePad(materials.silicone);
  thumbPad.mesh.position.y = THUMB.dist;
  thumb.ip.add(thumbPad.mesh);
  pads.push({ digit: "thumb", mesh: thumbPad.mesh, base: thumbPad.base });
  const thumbGrid = makeTaxels();
  thumbGrid.mesh.position.y = THUMB.dist;
  thumb.ip.add(thumbGrid.mesh);
  taxels.push({ digit: "thumb", mesh: thumbGrid.mesh, local: thumbGrid.local });

  const palmar = new THREE.Group();
  const palmarPlate = new THREE.Mesh(new THREE.BoxGeometry(0.086, 0.096, 0.005), materials.aluminum);
  palmarPlate.castShadow = true;
  palmar.add(palmarPlate);
  const inset = new THREE.Mesh(
    new THREE.BoxGeometry(0.06, 0.07, 0.0015),
    materials.aluminumDark,
  );
  inset.position.z = 0.003;
  palmar.add(inset);
  palmar.position.set(0, 0.008, 0.02);
  root.add(palmar);

  const dorsal = new THREE.Group();
  const dorsalShellPlate = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.1, 0.004), materials.aluminumDark);
  dorsalShellPlate.castShadow = true;
  dorsal.add(dorsalShellPlate);
  dorsal.position.set(0, 0.008, -0.02);
  root.add(dorsal);

  const capstans: Record<string, THREE.Group> = {};
  (Object.keys(FINGERS) as FingerId[]).forEach((id) => {
    capstans[id] = makeMotor(FINGERS[id].motor, new THREE.Vector3(1, 0, 0), materials, root);
  });
  capstans.thumbFlex = makeMotor(THUMB.flexMotor, new THREE.Vector3(0.25, 0.2, 1).normalize(), materials, root);
  capstans.thumbOpp = makeMotor(THUMB.oppMotor, new THREE.Vector3(1, 0.15, 0.1).normalize(), materials, root);

  const anchors: Record<string, THREE.Object3D> = {
    cover: palmar,
    dorsal,
    motor: capstans.index,
    indexMcp: fingers.index.mcp,
    indexPip: fingers.index.pip,
    indexDip: fingers.index.dip,
  };

  return { root, fingers, thumb, pads, taxels, covers: { palmar, dorsal }, capstans, anchors };
}

function buildThumb(materials: ReturnType<typeof createMaterials>): ThumbRig {
  const cmc = new THREE.Group();
  cmc.position.set(THUMB.base[0], THUMB.base[1], THUMB.base[2]);
  cmc.add(alongY(THUMB.meta, 0.008, 0.0072, materials.aluminum));
  const shell = new THREE.Group();
  const plate = dorsalShell(THUMB.meta * 0.8, 0.01, materials.aluminumDark);
  shell.add(plate);
  cmc.add(shell);
  const mcp = new THREE.Group();
  mcp.position.y = THUMB.meta;
  cmc.add(mcp);
  mcp.add(alongY(THUMB.prox, 0.0068, 0.006, materials.aluminum));
  const ip = new THREE.Group();
  ip.position.y = THUMB.prox;
  mcp.add(ip);
  ip.add(alongY(THUMB.dist * 0.62, 0.0054, 0.0048, materials.aluminum));
  const cmcEncoder = encoderRing(materials.encoder);
  const mcpEncoder = encoderRing(materials.encoder);
  const ipEncoder = encoderRing(materials.encoder);
  cmc.add(cmcEncoder.mesh);
  mcp.add(mcpEncoder.mesh);
  ip.add(ipEncoder.mesh);
  return {
    cmc,
    mcp,
    ip,
    shells: [shell],
    encoders: { cmc: cmcEncoder.material, mcp: mcpEncoder.material, ip: ipEncoder.material },
  };
}

function makePad(material: THREE.Material): { mesh: THREE.Mesh; base: Float32Array } {
  const geometry = new THREE.SphereGeometry(PAD_RADIUS, 18, 14);
  const mesh = new THREE.Mesh(geometry, material.clone());
  mesh.castShadow = true;
  mesh.name = "pad";
  const position = geometry.getAttribute("position") as THREE.BufferAttribute;
  return { mesh, base: new Float32Array(position.array) };
}

function makeTaxels(): { mesh: THREE.InstancedMesh; local: THREE.Vector3[] } {
  const cols = 6;
  const rows = 5;
  const local: THREE.Vector3[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = (c / (cols - 1) - 0.5) * 0.011;
      const y = (r / (rows - 1) - 0.5) * 0.009 - 0.001;
      const dir = new THREE.Vector3(x, y, 0.012).normalize();
      local.push(dir.multiplyScalar(PAD_RADIUS * 0.96));
    }
  }
  const geometry = new THREE.SphereGeometry(0.00062, 6, 5);
  const material = new THREE.MeshStandardMaterial({
    color: 0x8ea0b8,
    roughness: 0.4,
    metalness: 0.1,
    emissive: 0xff0055,
    emissiveIntensity: 0,
  });
  const mesh = new THREE.InstancedMesh(geometry, material, local.length);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  const dummy = new THREE.Object3D();
  local.forEach((point, index) => {
    dummy.position.copy(point);
    dummy.scale.setScalar(1);
    dummy.updateMatrix();
    mesh.setMatrixAt(index, dummy.matrix);
    mesh.setColorAt(index, new THREE.Color("#8ea0b8"));
  });
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  return { mesh, local };
}

function makeMotor(
  at: [number, number, number],
  axis: THREE.Vector3,
  materials: ReturnType<typeof createMaterials>,
  parent: THREE.Group,
): THREE.Group {
  const housing = new THREE.Group();
  housing.position.set(at[0], at[1], at[2]);
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(1, 0, 0), axis.clone().normalize());
  housing.quaternion.copy(q);
  const bracket = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.012, 0.012), materials.aluminumDark);
  housing.add(bracket);
  const coil = new THREE.Mesh(new THREE.TorusGeometry(0.0042, 0.0013, 6, 12), materials.copper);
  coil.rotation.y = Math.PI / 2;
  housing.add(coil);
  const capstan = new THREE.Group();
  capstan.position.x = 0.01;
  const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.0046, 0.0046, 0.007, 16), materials.joint);
  drum.rotation.z = Math.PI / 2;
  capstan.add(drum);
  const groove = new THREE.Mesh(new THREE.TorusGeometry(0.0048, 0.0007, 6, 16), materials.aluminum);
  groove.rotation.y = Math.PI / 2;
  groove.position.x = 0.0016;
  capstan.add(groove);
  const grooveB = groove.clone();
  grooveB.position.x = -0.0016;
  capstan.add(grooveB);
  housing.add(capstan);
  const eyelet = new THREE.Mesh(new THREE.TorusGeometry(0.0024, 0.0006, 6, 10), materials.joint);
  eyelet.position.set(0.004, 0.008, 0.004);
  housing.add(eyelet);
  parent.add(housing);
  return capstan;
}

export function applyRig(rig: HandRig, pose: Pose, explode: ExplodeState, tendons: TendonSnapshot): void {
  (Object.keys(FINGERS) as FingerId[]).forEach((id) => {
    const spec = FINGERS[id];
    const finger = rig.fingers[id];
    finger.mcp.rotation.x = pose[id];
    finger.pip.rotation.x = pose[id] * spec.couple[0];
    finger.dip.rotation.x = pose[id] * spec.couple[1];
    const shellOpen = id === "index" ? explode.indexShell : explode.shells;
    finger.shells.forEach((shell) => {
      shell.position.z = -0.003 - EXPLODE_PARK.shell * shellOpen;
    });
    const hot = id === "index" ? 0.55 : 0.28;
    finger.encoders.mcp.emissiveIntensity = hot;
    finger.encoders.pip.emissiveIntensity = 0.28;
    finger.encoders.dip.emissiveIntensity = 0.28;
  });

  const thumb = thumbJoints(pose.thumbOpp, pose.thumbFlex);
  _basisX.set(thumb.axis[0], thumb.axis[1], thumb.axis[2]);
  _basisY.set(thumb.metaDir[0], thumb.metaDir[1], thumb.metaDir[2]);
  _basisZ.crossVectors(_basisX, _basisY).normalize();
  _basis.makeBasis(_basisX, _basisY, _basisZ);
  rig.thumb.cmc.quaternion.setFromRotationMatrix(_basis);
  rig.thumb.mcp.rotation.x = thumb.flex;
  rig.thumb.ip.rotation.x = thumb.ipAngle;
  rig.thumb.shells.forEach((shell) => {
    shell.position.z = -0.003 - EXPLODE_PARK.shell * explode.shells;
  });
  rig.thumb.encoders.cmc.emissiveIntensity = 0.55;
  rig.thumb.encoders.mcp.emissiveIntensity = 0.45;
  rig.thumb.encoders.ip.emissiveIntensity = 0.4;

  rig.covers.palmar.position.set(
    EXPLODE_PARK.cover[0] * explode.cover,
    0.008 + EXPLODE_PARK.cover[1] * explode.cover,
    0.02 + EXPLODE_PARK.cover[2] * explode.cover,
  );
  rig.covers.dorsal.position.set(
    EXPLODE_PARK.dorsal[0] * explode.dorsal,
    0.008 + EXPLODE_PARK.dorsal[1] * explode.dorsal,
    -0.02 + EXPLODE_PARK.dorsal[2] * explode.dorsal,
  );

  rig.capstans.index.rotation.x = tendons.index.capstan;
  rig.capstans.middle.rotation.x = tendons.middle.capstan;
  rig.capstans.ring.rotation.x = tendons.ring.capstan;
  rig.capstans.pinky.rotation.x = tendons.pinky.capstan;
  rig.capstans.thumbFlex.rotation.x = tendons.thumbFlex.capstan;
  rig.capstans.thumbOpp.rotation.x = tendons.thumbOpp.capstan;
}

export function focusEncoder(rig: HandRig, which: "mcp" | "pip" | "dip" | null): void {
  (Object.keys(rig.fingers) as FingerId[]).forEach((id) => {
    const enc = rig.fingers[id].encoders;
    enc.mcp.emissiveIntensity = 0.28;
    enc.pip.emissiveIntensity = 0.28;
    enc.dip.emissiveIntensity = 0.28;
  });
  if (!which) return;
  rig.fingers.index.encoders[which].emissiveIntensity = 1.05;
}
