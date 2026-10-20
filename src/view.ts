import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import {
  ACTUATORS,
  CAPSTAN_RADIUS,
  DIGITS,
  PAD_RADIUS,
  THUMB_SPEC,
  padSurfaceLocal,
  type DigitId,
  type DigitFK,
  type ThumbFK,
} from "./anatomy";
import { add, rotateAround, scale, sub, v, worldFromLocal, type Frame, type Vec3 } from "./math";
import type { Sample } from "./timeline";

export interface LabelSpec {
  id: string;
  title: string;
  detail: string;
  position: Vec3;
  priority: 1 | 2;
  offsetX: number;
  offsetY: number;
}

interface ChainRig {
  id: string;
  joints: THREE.Group[];
  shells: THREE.Group[];
  pad: THREE.Mesh;
  padPositions: Float32Array;
  innerTaxels: THREE.InstancedMesh | null;
  pips: THREE.InstancedMesh;
  pipLocals: Vec3[];
  taxelLocals: Vec3[];
}

const ALUMINUM = 0x3a4150;
const SILICONE = 0x1e222a;
const NEON = 0x00f5d4;
const CRIMSON = 0xff0055;
const AMBER = 0xffb703;

export interface Viewer {
  update(state: Sample): void;
  resize(): void;
  labels(): LabelSpec[];
  camera: THREE.PerspectiveCamera;
  dispose(): void;
}

export function createViewer(canvas: HTMLCanvasElement): Viewer {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: "high-performance" });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.setClearColor(0x090b10, 1);

  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const compact = window.innerWidth < 860 || coarse;
  const shadows = !compact;
  renderer.shadowMap.enabled = shadows;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, compact ? 1.25 : 1.6));

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x090b10);
  scene.fog = new THREE.Fog(0x090b10, 9.5, 18);
  scene.environment = studioEnvironment(renderer);

  const camera = new THREE.PerspectiveCamera(32, 1, 0.05, 40);
  const rig = buildScene(scene, shadows);
  const bloom = compact ? null : buildBloom(renderer, scene, camera);

  const labels: LabelSpec[] = [];
  const scratch = new THREE.Vector3();
  const colorA = new THREE.Color(SILICONE);
  const colorB = new THREE.Color(CRIMSON);

  function resize() {
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, compact ? 1.25 : 1.6));
    renderer.setSize(width, height, false);
    camera.aspect = width / Math.max(1, height);
    camera.updateProjectionMatrix();
    bloom?.setSize(width, height);
  }

  function update(state: Sample) {
    camera.position.set(state.camera.position.x, state.camera.position.y, state.camera.position.z);
    camera.up.set(0, 1, 0);
    camera.lookAt(state.camera.target.x, state.camera.target.y, state.camera.target.z);
    camera.fov = state.camera.fov;
    camera.updateProjectionMatrix();

    poseChain(rig.index, state.digits.index, state.explode.indexShell, state, true);
    poseChain(rig.middle, state.digits.middle, state.explode.shells, state, false);
    poseChain(rig.ring, state.digits.ring, state.explode.shells, state, false);
    poseChain(rig.pinky, state.digits.pinky, state.explode.shells, state, false);
    poseChain(rig.thumb, state.thumb, state.explode.shells, state, false);
    posePalm(rig, state);
    poseActuators(rig, state);
    poseTendons(rig, state);
    poseSphere(rig, state);
    poseContacts(rig, state);
    poseArcs(rig, state);
    poseLigaments(rig, state);
    scene.updateMatrixWorld(true);
    fillLabels(labels, rig, state);
    if (bloom) bloom.render();
    else renderer.render(scene, camera);
  }

  resize();
  return {
    update,
    resize,
    labels: () => labels,
    camera,
    dispose() {
      bloom?.dispose();
      renderer.dispose();
      scratch.set(0, 0, 0);
      colorA.set(SILICONE);
      colorB.set(CRIMSON);
    },
  };
}

interface SceneRig {
  cover: THREE.Group;
  index: ChainRig;
  middle: ChainRig;
  ring: ChainRig;
  pinky: ChainRig;
  thumb: ChainRig;
  actuators: Map<string, THREE.Group>;
  tendons: Map<string, { mesh: THREE.Mesh; beads: THREE.Mesh[] }>;
  sphere: THREE.Mesh;
  discs: THREE.Mesh[];
  arrows: THREE.ArrowHelper[];
  shears: THREE.Line[];
  arcs: THREE.Line[];
  ligaments: THREE.Mesh[];
  encoderMats: THREE.MeshStandardMaterial[];
  indexEncoderMats: THREE.MeshStandardMaterial[];
}

function buildScene(scene: THREE.Scene, shadows: boolean): SceneRig {
  const hemi = new THREE.HemisphereLight(0xd5dee8, 0x1a1d24, 0.85);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(0xfff3e4, 2.15);
  key.position.set(2.4, 3.6, 2.8);
  key.castShadow = shadows;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.near = 0.5;
  key.shadow.camera.far = 12;
  key.shadow.camera.left = -2;
  key.shadow.camera.right = 2;
  key.shadow.camera.top = 2;
  key.shadow.camera.bottom = -2;
  key.shadow.bias = -0.00035;
  key.shadow.normalBias = 0.025;
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xb7c6d4, 0.8);
  fill.position.set(-2.6, 1.4, 2.2);
  scene.add(fill);
  const rim = new THREE.DirectionalLight(0xd5ecff, 1.05);
  rim.position.set(-1.4, 2.2, -2.8);
  scene.add(rim);
  const warm = new THREE.DirectionalLight(0xffc7ae, 0.28);
  warm.position.set(2.2, 0.4, -1.6);
  scene.add(warm);

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(4.2, 64),
    new THREE.MeshStandardMaterial({ color: 0x12141a, metalness: 0.18, roughness: 0.72, envMapIntensity: 0.6 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.7;
  floor.receiveShadow = shadows;
  scene.add(floor);

  const cyc = new THREE.Mesh(
    new THREE.SphereGeometry(13, 32, 20),
    new THREE.MeshBasicMaterial({ map: gradientTexture(), side: THREE.BackSide }),
  );
  scene.add(cyc);

  const aluminum = new THREE.MeshStandardMaterial({
    color: ALUMINUM,
    metalness: 0.86,
    roughness: 0.36,
    envMapIntensity: 1.05,
    roughnessMap: grainTexture(),
  });
  const shellMat = aluminum.clone();
  shellMat.color = new THREE.Color(0x313846);
  shellMat.roughness = 0.42;
  const silicone = new THREE.MeshPhysicalMaterial({
    color: SILICONE,
    metalness: 0.04,
    roughness: 0.58,
    clearcoat: 0.18,
    clearcoatRoughness: 0.55,
    sheen: 0.35,
    sheenColor: new THREE.Color(0x3a4252),
  });
  const featuredPad = silicone.clone();
  featuredPad.transparent = true;
  featuredPad.opacity = 1;

  const forearm = new THREE.Mesh(new THREE.CylinderGeometry(0.125, 0.155, 0.42, 28), aluminum);
  forearm.position.set(0.02, -0.17, -0.02);
  forearm.castShadow = shadows;
  scene.add(forearm);
  const wrist = new THREE.Mesh(new THREE.TorusGeometry(0.142, 0.014, 8, 28), aluminum);
  wrist.rotation.x = Math.PI / 2;
  wrist.position.set(0.02, -0.01, -0.02);
  scene.add(wrist);
  const plate = new THREE.Mesh(new RoundedBoxGeometry(0.96, 0.8, 0.05, 3, 0.015), aluminum);
  plate.position.set(0.04, 0.46, -0.075);
  plate.castShadow = shadows;
  plate.receiveShadow = shadows;
  scene.add(plate);
  for (const x of [-0.44, 0.5]) {
    const rail = new THREE.Mesh(new RoundedBoxGeometry(0.035, 0.72, 0.16, 2, 0.008), aluminum);
    rail.position.set(x, 0.44, 0.01);
    rail.castShadow = shadows;
    scene.add(rail);
  }
  const bridge = new THREE.Mesh(new RoundedBoxGeometry(0.86, 0.06, 0.1, 2, 0.008), aluminum);
  bridge.position.set(0.08, 0.8, 0.01);
  scene.add(bridge);

  const cover = new THREE.Group();
  const coverMesh = new THREE.Mesh(new RoundedBoxGeometry(0.9, 0.7, 0.028, 3, 0.01), shellMat);
  coverMesh.castShadow = shadows;
  cover.add(coverMesh);
  scene.add(cover);

  const actuators = new Map<string, THREE.Group>();
  for (const actuator of ACTUATORS) {
    const group = new THREE.Group();
    group.position.set(actuator.position.x, actuator.position.y, actuator.position.z);
    const motor = new THREE.Mesh(
      new THREE.CylinderGeometry(0.022, 0.022, 0.048, 18),
      new THREE.MeshStandardMaterial({ color: 0x2a3140, metalness: 0.7, roughness: 0.4 }),
    );
    motor.rotation.x = Math.PI / 2;
    motor.position.z = -0.038;
    const drum = new THREE.Group();
    drum.name = "drum";
    const drumMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(CAPSTAN_RADIUS, CAPSTAN_RADIUS, 0.016, 20),
      new THREE.MeshStandardMaterial({ color: 0x4a5364, metalness: 0.8, roughness: 0.32 }),
    );
    drumMesh.rotation.x = Math.PI / 2;
    const mark = new THREE.Mesh(
      new THREE.BoxGeometry(0.004, 0.012, 0.004),
      new THREE.MeshStandardMaterial({ color: AMBER, emissive: AMBER, emissiveIntensity: 0.35, roughness: 0.4 }),
    );
    mark.position.set(CAPSTAN_RADIUS * 0.92, 0, 0);
    drumMesh.add(mark);
    for (let groove = 0; groove < 4; groove += 1) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(CAPSTAN_RADIUS + 0.001, 0.0014, 6, 16),
        new THREE.MeshStandardMaterial({ color: 0x1c212b, metalness: 0.6, roughness: 0.45 }),
      );
      ring.position.y = -0.006 + groove * 0.004;
      drumMesh.add(ring);
    }
    drum.add(drumMesh);
    group.add(motor, drum);
    scene.add(group);
    actuators.set(actuator.id, group);
  }

  const index = buildChain("index", aluminum, shellMat, featuredPad, shadows, true);
  const middle = buildChain("middle", aluminum, shellMat, silicone, shadows, false);
  const ring = buildChain("ring", aluminum, shellMat, silicone, shadows, false);
  const pinky = buildChain("pinky", aluminum, shellMat, silicone, shadows, false);
  const thumb = buildChain("thumb", aluminum, shellMat, silicone, shadows, false);
  for (const chain of [index, middle, ring, pinky, thumb]) {
    for (const joint of chain.joints) scene.add(joint);
  }

  const encoderMats: THREE.MeshStandardMaterial[] = [];
  const indexEncoderMats: THREE.MeshStandardMaterial[] = [];
  collectEncoders(index, indexEncoderMats);
  collectEncoders(middle, encoderMats);
  collectEncoders(ring, encoderMats);
  collectEncoders(pinky, encoderMats);
  collectEncoders(thumb, encoderMats);

  const tendonMat = new THREE.MeshStandardMaterial({
    color: 0x9aa3af,
    metalness: 0.72,
    roughness: 0.28,
    emissive: NEON,
    emissiveIntensity: 0.05,
  });
  const tendons = new Map<string, { mesh: THREE.Mesh; beads: THREE.Mesh[] }>();
  for (const actuator of ACTUATORS) {
    const mesh = new THREE.Mesh(new THREE.BufferGeometry(), actuator.kind === "extensor" ? dashedTendon() : tendonMat.clone());
    mesh.castShadow = false;
    mesh.frustumCulled = false;
    const beads: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i += 1) {
      const bead = new THREE.Mesh(
        new THREE.SphereGeometry(0.007, 8, 8),
        new THREE.MeshStandardMaterial({ color: NEON, emissive: NEON, emissiveIntensity: 0.35, roughness: 0.45 }),
      );
      bead.visible = false;
      beads.push(bead);
      scene.add(bead);
    }
    scene.add(mesh);
    tendons.set(actuator.id, { mesh, beads });
  }

  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(1, 48, 32),
    new THREE.MeshPhysicalMaterial({
      color: 0xd7dee8,
      roughness: 0.12,
      metalness: 0,
      transmission: 0.72,
      thickness: 0.45,
      ior: 1.45,
      transparent: true,
      opacity: 0,
      envMapIntensity: 1.2,
    }),
  );
  sphere.castShadow = shadows;
  sphere.visible = false;
  scene.add(sphere);

  const discs: THREE.Mesh[] = [];
  const arrows: THREE.ArrowHelper[] = [];
  const shears: THREE.Line[] = [];
  for (let i = 0; i < 5; i += 1) {
    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(0.03, 20),
      new THREE.MeshBasicMaterial({ color: CRIMSON, transparent: true, opacity: 0.0, depthWrite: false, side: THREE.DoubleSide }),
    );
    disc.visible = false;
    scene.add(disc);
    discs.push(disc);
    const arrow = new THREE.ArrowHelper(new THREE.Vector3(0, 0, -1), new THREE.Vector3(), 0.08, CRIMSON, 0.02, 0.012);
    arrow.visible = false;
    scene.add(arrow);
    arrows.push(arrow);
    const shear = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3(0, 0.04, 0)]),
      new THREE.LineDashedMaterial({ color: 0xf4f1ea, dashSize: 0.012, gapSize: 0.008, transparent: true, opacity: 0.9 }),
    );
    shear.visible = false;
    scene.add(shear);
    shears.push(shear);
  }

  const arcs: THREE.Line[] = [];
  for (let i = 0; i < 3; i += 1) {
    const arc = new THREE.Line(
      new THREE.BufferGeometry(),
      new THREE.LineBasicMaterial({ color: AMBER, transparent: true, opacity: 0.95 }),
    );
    arc.visible = false;
    arc.frustumCulled = false;
    scene.add(arc);
    arcs.push(arc);
  }

  const ligamentMat = new THREE.MeshStandardMaterial({
    color: SILICONE,
    roughness: 0.7,
    metalness: 0.02,
    transparent: true,
    opacity: 0.78,
  });
  const ligaments = [0, 1, 2].map(() => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 1, 8), ligamentMat);
    mesh.castShadow = false;
    scene.add(mesh);
    return mesh;
  });

  return {
    cover,
    index,
    middle,
    ring,
    pinky,
    thumb,
    actuators,
    tendons,
    sphere,
    discs,
    arrows,
    shears,
    arcs,
    ligaments,
    encoderMats,
    indexEncoderMats,
  };
}

function chainSize(id: string): { lengths: number[]; thicks: number[] } {
  if (id === "thumb") return { lengths: [...THUMB_SPEC.L], thicks: [...THUMB_SPEC.thick] };
  const spec = DIGITS[id as DigitId];
  return { lengths: [...spec.L], thicks: [...spec.thick] };
}

function buildChain(
  id: string,
  aluminum: THREE.Material,
  shellMat: THREE.Material,
  padMat: THREE.Material,
  shadows: boolean,
  featured: boolean,
): ChainRig {
  const joints: THREE.Group[] = [];
  const shells: THREE.Group[] = [];
  const { lengths, thicks } = chainSize(id);
  for (let segment = 0; segment < 3; segment += 1) {
    const joint = new THREE.Group();
    joint.matrixAutoUpdate = false;
    const bone = new THREE.Mesh(
      new RoundedBoxGeometry(thicks[segment] * 0.92, lengths[segment] * 0.9, thicks[segment] * 0.78, 3, 0.01),
      aluminum,
    );
    bone.position.y = lengths[segment] / 2;
    bone.castShadow = shadows;
    bone.receiveShadow = shadows;
    joint.add(bone);
    const shellPivot = new THREE.Group();
    const shell = new THREE.Mesh(new RoundedBoxGeometry(thicks[segment] * 1.04, lengths[segment] * 0.78, 0.02, 2, 0.005), shellMat);
    shell.castShadow = shadows;
    shellPivot.add(shell);
    joint.add(shellPivot);
    shells.push(shellPivot);
    const encoderMat = new THREE.MeshStandardMaterial({
      color: 0x2c2618,
      emissive: AMBER,
      emissiveIntensity: 0.25,
      metalness: 0.45,
      roughness: 0.38,
    });
    const encoder = new THREE.Mesh(new THREE.TorusGeometry(Math.max(0.016, thicks[segment] * 0.34), 0.0028, 8, 22), encoderMat);
    encoder.rotation.y = Math.PI / 2;
    encoder.name = "encoder";
    const sensor = new THREE.Mesh(
      new THREE.BoxGeometry(0.01, 0.008, 0.008),
      encoderMat,
    );
    sensor.position.set(0, thicks[segment] * 0.36, 0);
    joint.add(encoder, sensor);
    const pulley = new THREE.Mesh(
      new THREE.CylinderGeometry(0.011, 0.011, thicks[segment] * 0.7, 12),
      aluminum,
    );
    pulley.rotation.z = Math.PI / 2;
    pulley.position.z = thicks[segment] / 2 + 0.008;
    joint.add(pulley);
    const guide = new THREE.Mesh(new THREE.TorusGeometry(0.012, 0.0022, 6, 14), aluminum);
    guide.position.set(0, lengths[segment] * 0.48, thicks[segment] / 2 + 0.016);
    joint.add(guide);
    const dorsal = guide.clone();
    dorsal.position.z = -(thicks[segment] / 2 + 0.016);
    joint.add(dorsal);
    joints.push(joint);
  }

  const distal = joints[2];
  const surface = padSurfaceLocal(lengths[2], thicks[2]);
  const pad = new THREE.Mesh(new THREE.SphereGeometry(PAD_RADIUS, featured ? 28 : 16, featured ? 20 : 12), padMat);
  pad.position.set(surface.x, surface.y, surface.z - PAD_RADIUS);
  pad.castShadow = shadows;
  distal.add(pad);
  const padPositions = new Float32Array(pad.geometry.attributes.position.array);

  const taxelLocals: Vec3[] = [];
  let innerTaxels: THREE.InstancedMesh | null = null;
  if (featured) {
    const dummy = new THREE.Object3D();
    innerTaxels = new THREE.InstancedMesh(
      new THREE.BoxGeometry(0.008, 0.008, 0.004),
      new THREE.MeshBasicMaterial({ color: 0xffffff }),
      20,
    );
    innerTaxels.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(60), 3);
    let n = 0;
    for (let row = 0; row < 5; row += 1) {
      for (let col = 0; col < 4; col += 1) {
        const local = v((col - 1.5) * 0.011, surface.y + (row - 2) * 0.011, surface.z - 0.014);
        taxelLocals.push(local);
        dummy.position.set(local.x, local.y, local.z);
        dummy.scale.setScalar(1);
        dummy.updateMatrix();
        innerTaxels.setMatrixAt(n, dummy.matrix);
        innerTaxels.setColorAt(n, new THREE.Color(SILICONE));
        n += 1;
      }
    }
    distal.add(innerTaxels);
  }

  const pipCount = featured ? 12 : 9;
  const pips = new THREE.InstancedMesh(
    new THREE.SphereGeometry(0.0032, 6, 6),
    new THREE.MeshBasicMaterial({ color: 0xffffff }),
    pipCount,
  );
  pips.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(pipCount * 3), 3);
  const pipLocals: Vec3[] = [];
  const dummy = new THREE.Object3D();
  const cols = featured ? 4 : 3;
  const rows = featured ? 3 : 3;
  let pipIndex = 0;
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const local = v((col - (cols - 1) / 2) * 0.012, surface.y + (row - 1) * 0.012, surface.z + 0.001);
      pipLocals.push(local);
      dummy.position.set(local.x, local.y, local.z);
      dummy.updateMatrix();
      pips.setMatrixAt(pipIndex, dummy.matrix);
      pips.setColorAt(pipIndex, new THREE.Color(0x2a3140));
      pipIndex += 1;
    }
  }
  distal.add(pips);

  return { id, joints, shells, pad, padPositions, innerTaxels, pips, pipLocals, taxelLocals };
}

function collectEncoders(chain: ChainRig, into: THREE.MeshStandardMaterial[]) {
  for (const joint of chain.joints) {
    joint.traverse((obj) => {
      if (obj.name === "encoder" && obj instanceof THREE.Mesh) into.push(obj.material as THREE.MeshStandardMaterial);
    });
  }
}

function poseChain(chain: ChainRig, fk: DigitFK | ThumbFK, open: number, state: Sample, featured: boolean) {
  for (let segment = 0; segment < 3; segment += 1) {
    setFrame(chain.joints[segment], fk.frames[segment]);
    const fan = chain.id === "index" ? -0.08 : chain.id === "pinky" ? 0.1 : chain.id === "thumb" ? -0.12 : 0.05;
    const shell = chain.shells[segment];
    shell.position.set(open * fan, fk.lengths[segment] * 0.5, -(fk.thick[segment] / 2 + 0.034 + open * (0.34 + segment * 0.18)));
    shell.rotation.x = open * (0.25 + segment * 0.12);
  }
  const contact = state.contacts.find((item) => item.digit === chain.id);
  const touching = Boolean(contact && contact.weight > 0.45);
  compressPad(chain, contact?.depth ?? 0, touching && contact ? contact.point : null, fk);
  const localContact = touching && contact ? worldToFrame(fk.frames[2], contact.point) : null;
  paintTaxels(chain, state, featured, (contact?.depth ?? 0) * (contact?.weight ?? 0), localContact);
}

function compressPad(chain: ChainRig, depth: number, contact: Vec3 | null, fk: DigitFK | ThumbFK) {
  const attr = chain.pad.geometry.attributes.position as THREE.BufferAttribute;
  const base = chain.padPositions;
  if (!contact || depth < 0.05) {
    attr.array.set(base);
    attr.needsUpdate = true;
    chain.pad.geometry.computeVertexNormals();
    return;
  }
  const frame = fk.frames[2];
  const local = worldToFrame(frame, contact);
  const center = chain.pad.position;
  for (let i = 0; i < attr.count; i += 1) {
    const x = base[i * 3] + center.x;
    const y = base[i * 3 + 1] + center.y;
    const dx = x - local.x;
    const dy = y - local.y;
    const falloff = Math.exp(-(dx * dx + dy * dy) / (2 * 0.018 * 0.018)) * depth;
    attr.setXYZ(i, base[i * 3], base[i * 3 + 1], base[i * 3 + 2] - falloff * 0.014);
  }
  attr.needsUpdate = true;
  chain.pad.geometry.computeVertexNormals();
}

function paintTaxels(chain: ChainRig, state: Sample, featured: boolean, amount: number, contact: Vec3 | null) {
  const dummy = new THREE.Object3D();
  const dark = new THREE.Color(0x2a3140);
  const hot = new THREE.Color(CRIMSON);
  chain.pipLocals.forEach((local, index) => {
    const pressure = spot(local, contact, amount);
    dummy.position.set(local.x, local.y, local.z);
    dummy.scale.setScalar(0.85 + pressure * 0.9);
    dummy.updateMatrix();
    chain.pips.setMatrixAt(index, dummy.matrix);
    chain.pips.setColorAt(index, dark.clone().lerp(hot, clamp01(pressure)));
  });
  chain.pips.instanceMatrix.needsUpdate = true;
  if (chain.pips.instanceColor) chain.pips.instanceColor.needsUpdate = true;
  if (!chain.innerTaxels) return;
  chain.innerTaxels.visible = state.padReveal > 0.04;
  chain.taxelLocals.forEach((local, index) => {
    const pressure = spot(local, contact, amount);
    dummy.position.set(local.x, local.y, local.z);
    dummy.scale.setScalar(0.75 + pressure * 1.15);
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    chain.innerTaxels?.setMatrixAt(index, dummy.matrix);
    chain.innerTaxels?.setColorAt(index, dark.clone().lerp(hot, clamp01(pressure)));
  });
  chain.innerTaxels.instanceMatrix.needsUpdate = true;
  if (chain.innerTaxels.instanceColor) chain.innerTaxels.instanceColor.needsUpdate = true;
  const mat = chain.pad.material as THREE.MeshPhysicalMaterial;
  if (featured) {
    mat.opacity = 1 - state.padReveal * 0.72;
    mat.depthWrite = mat.opacity > 0.85;
  }
}

function spot(local: Vec3, contact: Vec3 | null, amount: number): number {
  if (!contact || amount <= 0) return 0;
  const dx = local.x - contact.x;
  const dy = local.y - contact.y;
  return amount * Math.exp(-(dx * dx + dy * dy) / 0.00042);
}

function posePalm(rig: SceneRig, state: Sample) {
  const open = state.explode.palm;
  const span = open > 0.72 ? open : open * 0.42;
  rig.cover.position.set(-1.72 * span, 0.48 + 0.95 * span, 0.155 - 0.72 * span);
  rig.cover.rotation.set(-0.35 * span, 0.25 * span, 0.4 * span);
  const glow = state.encoderGlow;
  for (const mat of rig.encoderMats) mat.emissiveIntensity = 0.12 + glow;
  for (const mat of rig.indexEncoderMats) mat.emissiveIntensity = 0.16 + state.indexEncoderGlow * 1.35;
}

function poseActuators(rig: SceneRig, state: Sample) {
  for (const actuator of state.actuators) {
    const group = rig.actuators.get(actuator.id);
    const drum = group?.getObjectByName("drum");
    if (drum) drum.rotation.z = actuator.spool;
  }
}

function poseTendons(rig: SceneRig, state: Sample) {
  for (const tendon of state.tendons) {
    const slot = rig.tendons.get(tendon.id);
    if (!slot || tendon.points.length < 2) continue;
    const points = tendon.points.map((point) => new THREE.Vector3(point.x, point.y, point.z));
    try {
      const curve = new THREE.CatmullRomCurve3(points, false, "centripetal", 0.35);
      const next = new THREE.TubeGeometry(curve, Math.min(72, points.length * 6), tendon.kind === "extensor" ? 0.0044 : 0.0054, 5, false);
      slot.mesh.geometry.dispose();
      slot.mesh.geometry = next;
      const moving = tendon.active > 0.18 && state.t < 32.85;
      slot.beads.forEach((bead, index) => {
        bead.visible = moving;
        if (!moving) return;
        const u = frac(0.17 + index * 0.29 - tendon.direction * Math.min(state.t, 32.8) * 0.25);
        bead.position.copy(curve.getPoint(Math.max(0, Math.min(1, u))));
      });
    } catch {
      slot.beads.forEach((bead) => {
        bead.visible = false;
      });
    }
    const mat = slot.mesh.material as THREE.MeshStandardMaterial;
    mat.emissiveIntensity = 0.03 + tendon.active * (tendon.kind === "flexor" ? 0.32 : 0.16);
  }
}

function poseSphere(rig: SceneRig, state: Sample) {
  const mat = rig.sphere.material as THREE.MeshPhysicalMaterial;
  rig.sphere.visible = state.sphere.opacity > 0.02;
  rig.sphere.position.set(state.sphere.center.x, state.sphere.center.y, state.sphere.center.z);
  rig.sphere.scale.setScalar(state.sphere.radius);
  rig.sphere.quaternion.setFromAxisAngle(new THREE.Vector3(state.sphere.axis.x, state.sphere.axis.y, state.sphere.axis.z), state.sphere.spin);
  mat.opacity = state.sphere.opacity;
}

function poseContacts(rig: SceneRig, state: Sample) {
  state.contacts.forEach((contact, index) => {
    const show = contact.weight > 0.62 && state.sphere.opacity > 0.85;
    const disc = rig.discs[index];
    const arrow = rig.arrows[index];
    const shear = rig.shears[index];
    disc.visible = show;
    arrow.visible = show;
    shear.visible = show && contact.showShear;
    if (!show) return;
    const outward = contact.outward;
    const head = add(contact.point, scale(outward, 0.003));
    const length = 0.03 + contact.depth * 0.02;
    const tail = add(head, scale(outward, length));
    arrow.position.set(tail.x, tail.y, tail.z);
    arrow.setDirection(new THREE.Vector3(-outward.x, -outward.y, -outward.z));
    arrow.setLength(length, 0.01, 0.006);
    disc.position.set(head.x, head.y, head.z);
    disc.lookAt(head.x + outward.x, head.y + outward.y, head.z + outward.z);
    disc.scale.setScalar(0.7 + contact.depth);
    (disc.material as THREE.MeshBasicMaterial).opacity = 0.15 + contact.depth * 0.45;
    if (contact.showShear) {
      const end = add(head, contact.shear);
      shear.geometry.dispose();
      shear.geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(head.x, head.y, head.z),
        new THREE.Vector3(end.x, end.y, end.z),
      ]);
      shear.computeLineDistances();
    }
  });
}

function poseArcs(rig: SceneRig, state: Sample) {
  const visible = state.shot.id === 3;
  const angles = [state.digits.index.pose.mcp, state.digits.index.pose.pip, state.digits.index.pose.dip];
  rig.arcs.forEach((arc, index) => {
    arc.visible = visible;
    if (!visible) return;
    const frame = state.digits.index.frames[index];
    const angle = angles[index];
    const axis = frame.x;
    const restY = rotateAround(frame.y, axis, -angle);
    const restZ = rotateAround(frame.z, axis, -angle);
    const points: THREE.Vector3[] = [];
    const steps = 18;
    for (let step = 0; step <= steps; step += 1) {
      const a = (angle * step) / steps;
      const dir = add(scale(restY, Math.cos(a)), scale(restZ, Math.sin(a)));
      const point = add(frame.origin, scale(dir, 0.045 + index * 0.004));
      points.push(new THREE.Vector3(point.x, point.y, point.z));
    }
    arc.geometry.dispose();
    arc.geometry = new THREE.BufferGeometry().setFromPoints(points);
  });
}

function poseLigaments(rig: SceneRig, state: Sample) {
  const pairs: Array<[ChainRig, ChainRig]> = [
    [rig.index, rig.middle],
    [rig.middle, rig.ring],
    [rig.ring, rig.pinky],
  ];
  pairs.forEach(([a, b], index) => {
    const start = jointPoint(stateDigit(state, a.id).frames[0], 0.42);
    const end = jointPoint(stateDigit(state, b.id).frames[0], 0.42);
    placeSpan(rig.ligaments[index], start, end);
  });
}

function stateDigit(state: Sample, id: string): DigitFK | ThumbFK {
  if (id === "thumb") return state.thumb;
  return state.digits[id as DigitId];
}

function jointPoint(frame: Frame, along: number): Vec3 {
  return worldFromLocal(frame, v(0, along, 0));
}

function placeSpan(mesh: THREE.Mesh, start: Vec3, end: Vec3) {
  const delta = sub(end, start);
  const length = Math.hypot(delta.x, delta.y, delta.z) || 0.001;
  mesh.position.set((start.x + end.x) / 2, (start.y + end.y) / 2, (start.z + end.z) / 2);
  mesh.scale.set(1, length, 1);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(delta.x / length, delta.y / length, delta.z / length));
}

function fillLabels(labels: LabelSpec[], rig: SceneRig, state: Sample) {
  labels.length = 0;
  const indexPad = state.digits.index.pad;
  const deg = (rad: number) => `${((rad * 180) / Math.PI).toFixed(1)}°`;
  if (state.shot.id === 1) {
    push(labels, "cover", "Palm cover", "Lifts clear of the cavity", rig.cover.position, 1, 28, -36);
    push(labels, "shell", "Dorsal shell", "Fingertip pad stays seated", shellAnchor(state), 1, -40, -28);
    push(labels, "pad", "Silicone pad", "Contact surface", indexPad, 1, 34, 18);
  } else if (state.shot.id === 2) {
    const flex = ACTUATORS.find((item) => item.id === "index-flex")!;
    const ext = ACTUATORS.find((item) => item.id === "index-ext")!;
    push(labels, "flex", "Flexor capstan", "Winds as the finger curls", flex.position, 1, 30, -26);
    push(labels, "ext", "Extensor capstan", "Pays out the return tendon", ext.position, 1, -36, 24);
    push(labels, "pull", "Tendon only pulls", "The antagonist provides return", state.digits.index.joints[1], 2, 26, -20);
  } else if (state.shot.id === 3) {
    const pose = state.digits.index.pose;
    push(labels, "mcp", "Index MCP", deg(pose.mcp), state.digits.index.joints[0], 1, -46, -18);
    push(labels, "pip", "Index PIP", deg(pose.pip), state.digits.index.joints[1], 1, 36, -16);
    push(labels, "dip", "Index DIP", `${deg(pose.dip)} coupled`, state.digits.index.joints[2], 1, 32, 20);
    push(labels, "encoder", "Magnetic encoder", "Angle follows the joint", state.digits.index.joints[1], 2, -30, 26);
  } else if (state.shot.id === 4) {
    const indexContact = state.contacts.find((contact) => contact.digit === "index");
    push(labels, "taxel", "Taxel matrix", "Normal-contact sensing", indexPad, 1, 34, -24);
    if (indexContact && indexContact.weight > 0.5) {
      push(labels, "force", "Force on object", "Arrow points into the sphere", indexContact.point, 1, -48, -20);
      if (indexContact.showShear) {
        push(labels, "shear", "Illustrative shear estimate", "Tangent to the surface", indexContact.point, 1, 40, 26);
      }
    }
  } else {
    const moving = state.contacts.find((contact) => contact.weight > 0.2 && contact.weight < 0.85);
    push(labels, "handoff", moving ? "Contact handoff" : "Stable cradle", "Each digit takes a turn", state.sphere.center, 1, 36, -32);
    push(labels, "window", "Palm window", "Retained cutaway", { x: rig.cover.position.x, y: rig.cover.position.y, z: rig.cover.position.z }, 2, -20, -28);
  }
}

function shellAnchor(state: Sample): Vec3 {
  return worldFromLocal(state.digits.index.frames[0], v(-0.08, 0.16, -0.2 - state.explode.indexShell * 0.3));
}

function push(
  labels: LabelSpec[],
  id: string,
  title: string,
  detail: string,
  position: Vec3 | THREE.Vector3,
  priority: 1 | 2,
  offsetX: number,
  offsetY: number,
) {
  labels.push({
    id,
    title,
    detail,
    position: { x: position.x, y: position.y, z: position.z },
    priority,
    offsetX,
    offsetY,
  });
}

function setFrame(obj: THREE.Object3D, frame: Frame) {
  obj.matrix.makeBasis(
    new THREE.Vector3(frame.x.x, frame.x.y, frame.x.z),
    new THREE.Vector3(frame.y.x, frame.y.y, frame.y.z),
    new THREE.Vector3(frame.z.x, frame.z.y, frame.z.z),
  );
  obj.matrix.setPosition(frame.origin.x, frame.origin.y, frame.origin.z);
  obj.matrixWorldNeedsUpdate = true;
}

function worldToFrame(frame: Frame, point: Vec3): Vec3 {
  const delta = sub(point, frame.origin);
  return v(delta.x * frame.x.x + delta.y * frame.x.y + delta.z * frame.x.z, delta.x * frame.y.x + delta.y * frame.y.y + delta.z * frame.y.z, delta.x * frame.z.x + delta.y * frame.z.y + delta.z * frame.z.z);
}

function clamp01(n: number): number {
  return Math.max(0, Math.min(1, n));
}

function frac(n: number): number {
  return n - Math.floor(n);
}

function dashedTendon(): THREE.MeshStandardMaterial {
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 128;
  const g = canvas.getContext("2d");
  if (!g) return new THREE.MeshStandardMaterial({ color: 0x9aa3af, emissive: NEON });
  g.fillStyle = "#9aa3af";
  g.fillRect(0, 0, 32, 128);
  g.fillStyle = "#1b212b";
  for (let y = 0; y < 128; y += 16) g.fillRect(0, y, 32, 6);
  const map = new THREE.CanvasTexture(canvas);
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.repeat.set(1, 8);
  return new THREE.MeshStandardMaterial({
    color: 0xb7c0cc,
    map,
    metalness: 0.64,
    roughness: 0.34,
    emissive: NEON,
    emissiveIntensity: 0.04,
  });
}

function grainTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const g = canvas.getContext("2d");
  const tex = new THREE.CanvasTexture(canvas);
  if (!g) return tex;
  const image = g.createImageData(128, 128);
  let seed = 42;
  for (let i = 0; i < image.data.length; i += 4) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const n = 150 + (seed % 70);
    image.data[i] = n;
    image.data[i + 1] = n;
    image.data[i + 2] = n;
    image.data[i + 3] = 255;
  }
  g.putImageData(image, 0, 0);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(3, 3);
  tex.colorSpace = THREE.NoColorSpace;
  return tex;
}

function gradientTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 16;
  canvas.height = 128;
  const g = canvas.getContext("2d");
  const tex = new THREE.CanvasTexture(canvas);
  if (!g) return tex;
  const gradient = g.createLinearGradient(0, 0, 0, 128);
  gradient.addColorStop(0, "#12151c");
  gradient.addColorStop(0.55, "#232a36");
  gradient.addColorStop(1, "#0b0d12");
  g.fillStyle = gradient;
  g.fillRect(0, 0, 16, 128);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function studioEnvironment(renderer: THREE.WebGLRenderer): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 256;
  const g = canvas.getContext("2d");
  const tex = new THREE.CanvasTexture(canvas);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  if (g) {
    const sky = g.createLinearGradient(0, 0, 0, 256);
    sky.addColorStop(0, "#10141b");
    sky.addColorStop(0.5, "#2c3442");
    sky.addColorStop(1, "#0c0e13");
    g.fillStyle = sky;
    g.fillRect(0, 0, 512, 256);
    g.fillStyle = "rgba(255,246,232,0.9)";
    g.beginPath();
    g.ellipse(370, 64, 78, 34, -0.4, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = "rgba(150, 205, 214, 0.35)";
    g.beginPath();
    g.ellipse(78, 120, 36, 80, 0.3, 0, Math.PI * 2);
    g.fill();
  }
  const pmrem = new THREE.PMREMGenerator(renderer);
  const env = pmrem.fromEquirectangular(tex).texture;
  pmrem.dispose();
  tex.dispose();
  return env;
}

function buildBloom(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera) {
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.08, 0.28, 0.94);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  return composer;
}
