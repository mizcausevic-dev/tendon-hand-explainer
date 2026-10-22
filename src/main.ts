import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { renderStems } from "./audio/score.ts";
import { PAL } from "./palette.ts";
import { applyRig, buildHand, focusEncoder, type HandRig } from "./scene/buildHand.ts";
import { beadPhase, createRope, updateRope, type Rope } from "./scene/ropes.ts";
import {
  DURATION,
  SHOTS,
  frameAt,
  shotAt,
  type ContactVisual,
  type FrameState,
} from "./sim/choreography.ts";
import { SPHERE_RADIUS } from "./sim/kinematics.ts";
import type { V3 } from "./sim/math.ts";

interface LabelEl {
  id: string;
  el: HTMLDivElement;
  line: SVGLineElement;
}

function must<T extends Element>(selector: string): T {
  const node = document.querySelector<T>(selector);
  if (!node) throw new Error(`Missing ${selector}`);
  return node;
}

const app = must<HTMLDivElement>("#app");
const canvas = must<HTMLCanvasElement>("#view");
const loading = must<HTMLDivElement>("#loading");
const gate = must<HTMLDivElement>("#gate");
const errorBox = must<HTMLDivElement>("#error");
const fallback = must<HTMLDivElement>("#fallback");
const playButton = must<HTMLButtonElement>("#play");
const startButton = must<HTMLButtonElement>("#start");
const replayButton = must<HTMLButtonElement>("#replay");
const muteButton = must<HTMLButtonElement>("#mute");
const fullButton = must<HTMLButtonElement>("#full");
const timeline = must<HTMLInputElement>("#timeline");
const musicSlider = must<HTMLInputElement>("#music");
const sfxSlider = must<HTMLInputElement>("#sfx");
const reducedBox = must<HTMLInputElement>("#reduced");
const shotKicker = must<HTMLParagraphElement>("#shot-kicker");
const shotTitle = must<HTMLHeadingElement>("#shot-title");
const clockEl = must<HTMLParagraphElement>("#clock");
const readout = must<HTMLDivElement>("#readout");
const telemetry = must<HTMLElement>("#telemetry");
const taxelMap = must<HTMLCanvasElement>("#taxel-map");
const labelLayer = must<HTMLDivElement>("#labels");
const leaderSvg = must<SVGSVGElement>("#leaders");

const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
reducedBox.checked = reducedQuery.matches;

function showError(message: string): void {
  errorBox.hidden = false;
  errorBox.textContent = message;
  loading.hidden = true;
}

function hasWebGL(): boolean {
  try {
    const probe = document.createElement("canvas");
    return Boolean(probe.getContext("webgl2") || probe.getContext("webgl"));
  } catch {
    return false;
  }
}

class MasterClock {
  time = 0;
  playing = false;
  private originTime = 0;
  private originPerf = 0;
  private audioOrigin = 0;
  private audio: AudioContext | null = null;

  play(audio: AudioContext | null, audioOrigin: number | null): void {
    this.playing = true;
    this.originTime = this.time;
    this.originPerf = performance.now();
    this.audio = audioOrigin === null ? null : audio;
    this.audioOrigin = audioOrigin ?? 0;
  }

  pause(): void {
    this.time = this.sample();
    this.playing = false;
    this.audio = null;
  }

  seek(time: number): void {
    this.time = clampTime(time);
    this.originTime = this.time;
    this.originPerf = performance.now();
    if (this.audio) this.audioOrigin = this.audio.currentTime;
  }

  sample(): number {
    if (!this.playing) return this.time;
    const next = this.audio
      ? this.originTime + (this.audio.currentTime - this.audioOrigin)
      : this.originTime + (performance.now() - this.originPerf) / 1000;
    if (next >= DURATION) {
      this.time = DURATION;
      this.playing = false;
      this.audio = null;
      return DURATION;
    }
    this.time = Math.max(0, next);
    return this.time;
  }
}

function clampTime(time: number): number {
  return Math.min(DURATION, Math.max(0, time));
}

class Stems {
  ctx: AudioContext | null = null;
  private musicGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private master: GainNode | null = null;
  private buffers: { music: AudioBuffer; sfx: AudioBuffer } | null = null;
  private sources: AudioBufferSourceNode[] = [];
  muted = false;

  prepare(): void {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.musicGain = this.ctx.createGain();
    this.sfxGain = this.ctx.createGain();
    this.musicGain.gain.value = Number(musicSlider!.value);
    this.sfxGain.gain.value = Number(sfxSlider!.value);
    this.musicGain.connect(this.master);
    this.sfxGain.connect(this.master);
    this.master.connect(this.ctx.destination);
    this.buffers = renderStems(this.ctx);
  }

  async resume(): Promise<void> {
    if (this.ctx && this.ctx.state !== "running") await this.ctx.resume();
  }

  start(offset: number): number | null {
    this.stop();
    if (!this.ctx || !this.buffers || !this.musicGain || !this.sfxGain) return null;
    const when = this.ctx.currentTime + 0.04;
    const arm = (buffer: AudioBuffer, gain: GainNode) => {
      const source = this.ctx!.createBufferSource();
      source.buffer = buffer;
      source.connect(gain);
      source.start(when, Math.min(Math.max(0, offset), Math.max(0, buffer.duration - 0.02)));
      this.sources.push(source);
    };
    arm(this.buffers.music, this.musicGain);
    arm(this.buffers.sfx, this.sfxGain);
    return when;
  }

  stop(): void {
    for (const source of this.sources) {
      try {
        source.stop();
      } catch {
        /* already ended */
      }
    }
    this.sources = [];
  }

  setMusic(value: number): void {
    if (this.musicGain) this.musicGain.gain.value = value;
  }

  setSfx(value: number): void {
    if (this.sfxGain) this.sfxGain.gain.value = value;
  }

  setMuted(muted: boolean): void {
    this.muted = muted;
    if (this.master) this.master.gain.value = muted ? 0 : 1;
  }
}

function formatTime(time: number): string {
  const clamped = clampTime(time);
  const minutes = Math.floor(clamped / 60);
  const seconds = Math.floor(clamped % 60);
  const ms = Math.floor((clamped - Math.floor(clamped)) * 1000);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(ms).padStart(3, "0")}`;
}

function makeLabel(id: string): LabelEl {
  const el = document.createElement("div");
  el.className = "label";
  el.dataset.id = id;
  labelLayer!.appendChild(el);
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("stroke", "rgba(231,228,220,0.55)");
  line.setAttribute("stroke-width", "1");
  leaderSvg!.appendChild(line);
  return { id, el, line };
}

const labels: Record<string, LabelEl> = {
  cover: makeLabel("cover"),
  shell: makeLabel("shell"),
  motor: makeLabel("motor"),
  tendon: makeLabel("tendon"),
  capstan: makeLabel("capstan"),
  route: makeLabel("route"),
  dof: makeLabel("dof"),
  joint: makeLabel("joint"),
  encoder: makeLabel("encoder"),
  guide: makeLabel("guide"),
  force: makeLabel("force"),
  taxel: makeLabel("taxel"),
  shear: makeLabel("shear"),
};

function hideLabels(): void {
  for (const label of Object.values(labels)) {
    label.el.style.display = "none";
    label.line.style.display = "none";
  }
}

function placeLabel(label: LabelEl, anchor: THREE.Vector3, camera: THREE.Camera, title: string, detail: string, ox: number, oy: number): void {
  const width = canvas!.clientWidth;
  const height = canvas!.clientHeight;
  const projected = anchor.clone().project(camera);
  if (projected.z > 1) {
    label.el.style.display = "none";
    label.line.style.display = "none";
    return;
  }
  const x = (projected.x * 0.5 + 0.5) * width;
  const y = (-projected.y * 0.5 + 0.5) * height;
  const lx = Math.min(width - 80, Math.max(70, x + ox));
  const ly = Math.min(height - 120, Math.max(36, y + oy));
  label.el.style.display = "block";
  label.el.style.left = `${lx}px`;
  label.el.style.top = `${ly}px`;
  label.el.innerHTML = detail ? `${title}<small>${detail}</small>` : title;
  label.line.style.display = "block";
  label.line.setAttribute("x1", x.toFixed(1));
  label.line.setAttribute("y1", y.toFixed(1));
  label.line.setAttribute("x2", lx.toFixed(1));
  label.line.setAttribute("y2", (ly + 8).toFixed(1));
}

function v3(value: V3): THREE.Vector3 {
  return new THREE.Vector3(value[0], value[1], value[2]);
}

function makeArrow(color: number): THREE.Group {
  const group = new THREE.Group();
  const shaft = new THREE.Mesh(
    new THREE.CylinderGeometry(0.0007, 0.0007, 1, 6),
    new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.35, roughness: 0.4 }),
  );
  shaft.position.y = 0.5;
  const head = new THREE.Mesh(
    new THREE.ConeGeometry(0.0022, 0.006, 8),
    new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.45, roughness: 0.35 }),
  );
  head.position.y = 1;
  group.add(shaft, head);
  group.visible = false;
  return group;
}

function pointArrow(arrow: THREE.Group, origin: THREE.Vector3, direction: THREE.Vector3, length: number): void {
  arrow.position.copy(origin);
  arrow.scale.set(1, length, 1);
  arrow.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize());
  arrow.visible = true;
}

if (!hasWebGL()) {
  loading.hidden = true;
  gate.hidden = true;
  fallback.hidden = false;
} else {
  boot().catch((error: unknown) => {
    showError(error instanceof Error ? error.message : "The study failed to start.");
  });
}

async function boot(): Promise<void> {
  const stems = new Stems();
  try {
    stems.prepare();
  } catch (error) {
    console.warn("Audio unavailable", error);
  }

  const renderer = new THREE.WebGLRenderer({ canvas: canvas!, antialias: true, alpha: false, powerPreference: "high-performance" });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(PAL.studio, 1);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(PAL.studio);
  scene.fog = new THREE.Fog(PAL.studio, 1.4, 3.2);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.42;

  const camera = new THREE.PerspectiveCamera(32, 1, 0.01, 10);
  const rig = buildHand();
  scene.add(rig.root);

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(0.45, 48),
    new THREE.MeshStandardMaterial({ color: 0x0e1116, roughness: 0.92, metalness: 0.04 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.175;
  floor.receiveShadow = true;
  scene.add(floor);

  const cyc = new THREE.Mesh(
    new THREE.SphereGeometry(2.4, 32, 20),
    new THREE.MeshStandardMaterial({ color: 0x161920, roughness: 1, metalness: 0, side: THREE.BackSide }),
  );
  scene.add(cyc);

  const key = new THREE.DirectionalLight(0xfff3e4, 4.2);
  key.position.set(0.45, 0.85, 0.55);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.near = 0.1;
  key.shadow.camera.far = 3;
  key.shadow.camera.left = -0.35;
  key.shadow.camera.right = 0.35;
  key.shadow.camera.top = 0.4;
  key.shadow.camera.bottom = -0.3;
  key.shadow.bias = -0.0004;
  scene.add(key);
  const front = new THREE.DirectionalLight(0xf4f7fb, 3.4);
  front.position.set(0.2, 0.25, 1.2);
  scene.add(front);
  const rim = new THREE.DirectionalLight(0x9ecfff, 2.4);
  rim.position.set(-0.7, 0.45, -0.55);
  scene.add(rim);
  scene.add(new THREE.HemisphereLight(0x8ea0b8, 0x1a1e26, 0.7));
  scene.environmentIntensity = 0.85;
  renderer.toneMappingExposure = 1.22;

  const ropes = buildRopes();
  for (const rope of Object.values(ropes)) {
    scene.add(rope.mesh, rope.bead);
  }

  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(SPHERE_RADIUS, 40, 28),
    new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: sphereBands(),
      roughness: 0.62,
      metalness: 0,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    }),
  );
  sphere.castShadow = true;
  sphere.visible = false;
  scene.add(sphere);

  const normals = ["thumb", "index", "middle", "ring", "pinky"].map(() => makeArrow(PAL.crimson));
  const shears = ["thumb", "index", "middle", "ring", "pinky"].map(() => {
    const arrow = makeArrow(0xf4f1ea);
    return arrow;
  });
  normals.forEach((arrow) => scene.add(arrow));
  shears.forEach((arrow) => scene.add(arrow));

  const arc = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(Array.from({ length: 28 }, () => new THREE.Vector3())),
    new THREE.LineBasicMaterial({ color: PAL.amber }),
  );
  arc.visible = false;
  arc.frustumCulled = false;
  scene.add(arc);

  let composer: EffectComposer | null = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);
  let bloom: UnrealBloomPass | null = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.1, 0.3, 0.94);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  let quality = window.innerWidth < 800 ? 1 : 1.5;

  const clock = new MasterClock();
  let scrubbing = false;
  let resumeAfterScrub = false;
  let announcedShot = 0;

  function renderSize(): void {
    const width = canvas!.clientWidth;
    const height = Math.max(1, canvas!.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, quality));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    composer?.setSize(width, height);
    bloom?.setSize(width, height);
  }
  renderSize();
  window.addEventListener("resize", renderSize);
  canvas.addEventListener("webglcontextrestored", () => {
    renderSize();
    draw(clock.time);
  });

  const world = new THREE.Vector3();

  function draw(time: number): void {
    const frame = frameAt(time, reducedBox!.checked);
    applyRig(rig, frame.pose, frame.explode, frame.tendons);
    if (frame.shot === 3) {
      const u = smooth(10, 16.3, frame.t);
      focusEncoder(rig, u < 0.34 ? "mcp" : u < 0.67 ? "pip" : "dip");
    }
    rig.root.updateMatrixWorld(true);
    updateRopes(ropes, frame, reducedBox!.checked);
    updatePads(rig, frame);
    updateTaxels(rig, frame);
    updateSphere(sphere, frame);
    updateArrows(normals, shears, frame);
    updateArc(arc, rig, frame);
    const cam = frame.camera;
    camera.position.set(cam.position[0], cam.position[1], cam.position[2]);
    camera.lookAt(cam.target[0], cam.target[1], cam.target[2]);
    camera.fov = cam.fov;
    camera.updateProjectionMatrix();
    updateHud(frame, camera, rig);
    if (composer && bloom) composer.render();
    else renderer.render(scene, camera);
  }

  function updateHud(frame: FrameState, cam: THREE.Camera, hand: HandRig): void {
    const shot = SHOTS[frame.shot - 1];
    shotKicker!.textContent = shot.kicker;
    shotTitle!.textContent = shot.title;
    clockEl!.textContent = `${formatTime(frame.t)} / 00:34.000`;
    timeline!.value = String(frame.t);
    timeline!.setAttribute("aria-valuenow", frame.t.toFixed(3));
    timeline!.setAttribute("aria-valuetext", `${formatTime(frame.t)}, ${shot.title}`);
    if (frame.shot !== announcedShot) {
      announcedShot = frame.shot;
      readout!.textContent = `${shot.kicker} ${shot.title}`;
    }
    hideLabels();
    const show = (id: string, object: THREE.Object3D, title: string, detail: string, ox: number, oy: number) => {
      object.getWorldPosition(world);
      placeLabel(labels[id], world, cam, title, detail, ox, oy);
    };
    if (frame.shot === 1 && frame.explode.cover > 0.08) {
      show("cover", hand.covers.palmar, "Palmar cover", "Lifts clear of the motors", 70, -36);
      show("shell", hand.fingers.index.shells[0], "Dorsal shell", "Stays aligned with the bone", -80, -20);
      show("motor", hand.capstans.index, "Motor module", "One capstan, one DOF", 40, 28);
      const flex = frame.tendons.index.flexor;
      placeLabel(labels.tendon, v3(flex[3]), cam, "Flexor tendon", "Pulls. It does not push.", 64, 10);
    }
    if (frame.shot === 2) {
      show("capstan", hand.capstans.index, "Dual-groove capstan", "Winds one tendon, pays out the other", 72, -30);
      const flexing = frame.activity.index.flexor >= frame.activity.index.extensor;
      placeLabel(
        labels.route,
        v3(flexing ? frame.tendons.index.flexor[2] : frame.tendons.index.extensor[2]),
        cam,
        flexing ? "Flexor winds" : "Extensor pays out",
        "Opposing groove on the same shaft",
        60,
        24,
      );
      show("dof", hand.anchors.indexPip, "PIP follows MCP", "Coupled, not a second motor", -20, -48);
    }
    if (frame.shot === 3) {
      const u = smooth(10, 16.3, frame.t);
      const joint = u < 0.34 ? hand.anchors.indexMcp : u < 0.67 ? hand.anchors.indexPip : hand.anchors.indexDip;
      const name = u < 0.34 ? "MCP" : u < 0.67 ? "PIP" : "DIP";
      const coupled = name !== "MCP";
      const angle = name === "MCP" ? frame.indexJoints.mcp : name === "PIP" ? frame.indexJoints.pipAngle : frame.indexJoints.dipAngle;
      show("joint", joint, `${name} ${(angle * 180 / Math.PI).toFixed(0)}°`, coupled ? "Coupled to MCP" : "Actuated joint", 56, -28);
      show("encoder", joint, "Magnetic encoder", "Angle sensor, not an actuator", -70, 16);
      show("guide", hand.anchors.indexPip, "Tendon guide", "Route stays outside the bone", 20, 36);
    }
    if (frame.shot === 4 || frame.shot === 5) {
      const active = frame.contacts.filter((contact) => contact.pressure > 0.25);
      if (active[0]) {
        const anchor = v3(frame.sphere.center).add(v3(active[0].outward).multiplyScalar(SPHERE_RADIUS + 0.01));
        placeLabel(labels.force, anchor, cam, "Force on object", "Normal, into the sphere", 68, -24);
      }
      if (frame.shot === 4) {
        hand.pads[0].mesh.getWorldPosition(world);
        placeLabel(labels.taxel, world, cam, "Capacitive taxels", "Normal contact only", -76, 20);
      }
      const shear = frame.contacts.find((contact) => contact.shearAmount > 0.25);
      if (shear) {
        const anchor = v3(frame.sphere.center).add(v3(shear.outward).multiplyScalar(SPHERE_RADIUS));
        placeLabel(labels.shear, anchor, cam, "Illustrative shear estimate", "Not a capacitive shear measurement", 40, 36);
      }
    }
    telemetry!.hidden = frame.shot !== 4;
    if (frame.shot === 4) drawTaxelMap(frame.contacts.find((contact) => contact.digit === "index"));
    playButton!.setAttribute("aria-pressed", clock.playing ? "true" : "false");
    playButton!.textContent = clock.playing ? "Pause" : "Play";
    playButton!.setAttribute("aria-label", clock.playing ? "Pause" : "Play");
  }

  let slowFrames = 0;
  let last = performance.now();
  let playGeneration = 0;
  function loop(): void {
    requestAnimationFrame(loop);
    const now = performance.now();
    const dt = now - last;
    last = now;
    if (dt > 42) slowFrames += 1;
    else slowFrames = Math.max(0, slowFrames - 1);
    if (slowFrames > 90 && bloom) {
      bloom = null;
      composer = null;
      quality = 1;
      renderSize();
      slowFrames = 0;
    }
    const time = scrubbing ? Number(timeline!.value) : clock.sample();
    if (!clock.playing && time >= DURATION) playButton!.textContent = "Play";
    draw(time);
  }

  function playFromUser(): void {
    const generation = ++playGeneration;
    void (async () => {
      gate!.hidden = true;
      await stems.resume();
      if (generation !== playGeneration) return;
      const offset = clock.time >= DURATION ? 0 : clock.time;
      if (offset === 0 && clock.time >= DURATION) clock.seek(0);
      const when = stems.start(offset);
      if (generation !== playGeneration) {
        stems.stop();
        return;
      }
      clock.play(stems.ctx, when);
    })();
  }

  function pauseAll(): void {
    playGeneration += 1;
    clock.pause();
    stems.stop();
    playButton!.setAttribute("aria-pressed", "false");
    playButton!.textContent = "Play";
  }

  startButton.addEventListener("click", playFromUser);
  playButton.addEventListener("click", () => {
    if (clock.playing) pauseAll();
    else playFromUser();
  });
  replayButton.addEventListener("click", () => {
    const generation = ++playGeneration;
    clock.seek(0);
    void stems.resume().then(() => {
      if (generation !== playGeneration) return;
      const when = stems.start(0);
      if (generation !== playGeneration) {
        stems.stop();
        return;
      }
      clock.play(stems.ctx, when);
    });
  });
  muteButton.addEventListener("click", () => {
    const next = !stems.muted;
    stems.setMuted(next);
    muteButton.setAttribute("aria-pressed", next ? "true" : "false");
    muteButton.textContent = next ? "Unmute" : "Mute";
  });
  musicSlider.addEventListener("input", () => stems.setMusic(Number(musicSlider.value)));
  sfxSlider.addEventListener("input", () => stems.setSfx(Number(sfxSlider.value)));
  timeline.addEventListener("pointerdown", () => {
    scrubbing = true;
    resumeAfterScrub = clock.playing;
    if (clock.playing) pauseAll();
  });
  timeline.addEventListener("input", () => {
    clock.seek(Number(timeline.value));
    draw(clock.time);
  });
  const endScrub = () => {
    if (!scrubbing) return;
    scrubbing = false;
    clock.seek(Number(timeline.value));
    if (resumeAfterScrub) playFromUser();
  };
  timeline.addEventListener("pointerup", endScrub);
  timeline.addEventListener("pointercancel", endScrub);
  timeline.addEventListener("keyup", endScrub);
  fullButton.addEventListener("click", () => {
    if (!document.fullscreenElement) void app!.requestFullscreen?.();
    else void document.exitFullscreen?.();
  });
  if (!document.fullscreenEnabled && !("webkitRequestFullscreen" in app)) fullButton.hidden = true;

  window.addEventListener("keydown", (event) => {
    const target = event.target as HTMLElement | null;
    const typing = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA");
    if (event.code === "Space" && !typing) {
      event.preventDefault();
      playButton.click();
    } else if (event.code === "KeyR" && !typing) {
      replayButton.click();
    } else if (event.code === "KeyM" && !typing) {
      muteButton.click();
    } else if (event.code === "KeyF" && !typing) {
      fullButton.click();
    } else if ((event.code === "ArrowRight" || event.code === "ArrowLeft") && target !== timeline) {
      event.preventDefault();
      const step = event.shiftKey ? 1 : 1 / 30;
      const dir = event.code === "ArrowRight" ? 1 : -1;
      const was = clock.playing;
      if (was) pauseAll();
      clock.seek(clock.time + dir * step);
      draw(clock.time);
      if (was) playFromUser();
    } else if (event.code === "Home") {
      clock.seek(0);
      draw(0);
    } else if (event.code === "End") {
      pauseAll();
      clock.seek(DURATION);
      draw(DURATION);
    }
  });

  loading.hidden = true;
  draw(0);

  const api = {
    setTime(time: number) {
      pauseAll();
      clock.seek(time);
      draw(clock.time);
    },
    getTime: () => clock.time,
    play: () => playFromUser(),
    pause: () => pauseAll(),
    shot: () => shotAt(clock.time),
    frame: () => frameAt(clock.time, reducedBox.checked),
  };
  (window as unknown as { __HAND__?: typeof api }).__HAND__ = api;

  requestAnimationFrame(loop);
}

function sphereBands(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not paint the sphere.");
  ctx.fillStyle = "#7e8b99";
  ctx.fillRect(0, 0, 128, 64);
  ctx.fillStyle = "#66717e";
  ctx.fillRect(0, 18, 128, 3);
  ctx.fillRect(0, 42, 128, 3);
  ctx.fillStyle = "#9aa6b3";
  ctx.fillRect(60, 0, 2, 64);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function buildRopes(): Record<string, Rope> {
  const ids = ["indexF", "indexE", "middleF", "middleE", "ringF", "ringE", "pinkyF", "pinkyE", "thumbF", "thumbE", "thumbAdd", "thumbAbd"];
  return Object.fromEntries(ids.map((id) => [id, createRope(0.00115, PAL.tendon)]));
}

function updateRopes(ropes: Record<string, Rope>, frame: FrameState, reduced: boolean): void {
  const pairs: [string, V3[], number, number, boolean][] = [
    ["indexF", frame.tendons.index.flexor, frame.activity.index.flexor, frame.tendons.index.capstan, true],
    ["indexE", frame.tendons.index.extensor, frame.activity.index.extensor, frame.tendons.index.capstan, false],
    ["middleF", frame.tendons.middle.flexor, frame.activity.middle.flexor, frame.tendons.middle.capstan, true],
    ["middleE", frame.tendons.middle.extensor, frame.activity.middle.extensor, frame.tendons.middle.capstan, false],
    ["ringF", frame.tendons.ring.flexor, frame.activity.ring.flexor, frame.tendons.ring.capstan, true],
    ["ringE", frame.tendons.ring.extensor, frame.activity.ring.extensor, frame.tendons.ring.capstan, false],
    ["pinkyF", frame.tendons.pinky.flexor, frame.activity.pinky.flexor, frame.tendons.pinky.capstan, true],
    ["pinkyE", frame.tendons.pinky.extensor, frame.activity.pinky.extensor, frame.tendons.pinky.capstan, false],
    ["thumbF", frame.tendons.thumbFlex.flexor, frame.activity.thumbFlex.flexor, frame.tendons.thumbFlex.capstan, true],
    ["thumbE", frame.tendons.thumbFlex.extensor, frame.activity.thumbFlex.extensor, frame.tendons.thumbFlex.capstan, false],
    ["thumbAdd", frame.tendons.thumbOpp.adductor, frame.activity.thumbOpp.flexor, frame.tendons.thumbOpp.capstan, true],
    ["thumbAbd", frame.tendons.thumbOpp.abductor, frame.activity.thumbOpp.extensor, frame.tendons.thumbOpp.capstan, false],
  ];
  for (const [id, points, activity, capstan, towardMotor] of pairs) {
    const glow = activity > 0.2 ? activity * 0.75 : 0;
    const bead = !reduced && activity > 0.35 ? beadPhase(capstan, towardMotor) : null;
    updateRope(ropes[id], points, 0.00145, glow, bead);
  }
}

function updatePads(rig: HandRig, frame: FrameState): void {
  const center = v3(frame.sphere.center);
  const limit = SPHERE_RADIUS + 0.0004;
  const active = frame.sphere.opacity > 0.4;
  const vertex = new THREE.Vector3();
  for (const pad of rig.pads) {
    const attr = pad.mesh.geometry.getAttribute("position") as THREE.BufferAttribute;
    const array = attr.array as Float32Array;
    array.set(pad.base);
    if (active) {
      for (let i = 0; i < array.length; i += 3) {
        vertex.set(array[i], array[i + 1], array[i + 2]);
        pad.mesh.localToWorld(vertex);
        const distance = vertex.distanceTo(center);
        if (distance < limit && distance > 1e-5) {
          vertex.sub(center).multiplyScalar(limit / distance).add(center);
          pad.mesh.worldToLocal(vertex);
          array[i] = vertex.x;
          array[i + 1] = vertex.y;
          array[i + 2] = vertex.z;
        }
      }
    }
    attr.needsUpdate = true;
    pad.mesh.geometry.computeVertexNormals();
  }
}

function updateTaxels(rig: HandRig, frame: FrameState): void {
  const center = v3(frame.sphere.center);
  const color = new THREE.Color();
  const point = new THREE.Vector3();
  for (const grid of rig.taxels) {
    const contact = frame.contacts.find((item) => item.digit === grid.digit);
    grid.local.forEach((local, index) => {
      point.copy(local);
      grid.mesh.localToWorld(point);
      let lit = 0;
      if (contact && frame.sphere.opacity > 0.5 && contact.pressure > 0.05) {
        const distance = point.distanceTo(center);
        const falloff = Math.exp(-(((distance - SPHERE_RADIUS) / 0.0042) ** 2));
        lit = contact.pressure * falloff;
      }
      color.set("#b7c3d4").lerp(new THREE.Color("#ff0055"), Math.min(1, lit));
      grid.mesh.setColorAt(index, color);
    });
    if (grid.mesh.instanceColor) grid.mesh.instanceColor.needsUpdate = true;
  }
}

function updateSphere(sphere: THREE.Mesh, frame: FrameState): void {
  const material = sphere.material as THREE.MeshStandardMaterial;
  material.opacity = frame.sphere.opacity * 0.92;
  sphere.visible = frame.sphere.opacity > 0.02;
  sphere.position.set(frame.sphere.center[0], frame.sphere.center[1], frame.sphere.center[2]);
  sphere.quaternion.setFromAxisAngle(new THREE.Vector3(0.12, 0.25, 0.96).normalize(), frame.sphere.spin);
}

function updateArrows(normals: THREE.Group[], shears: THREE.Group[], frame: FrameState): void {
  const order = ["thumb", "index", "middle", "ring", "pinky"] as const;
  order.forEach((digit, index) => {
    const contact = frame.contacts.find((item) => item.digit === digit) as ContactVisual;
    if (!contact || contact.pressure < 0.28 || frame.sphere.opacity < 0.6) {
      normals[index].visible = false;
      shears[index].visible = false;
      return;
    }
    const outward = v3(contact.outward).normalize();
    const surface = v3(frame.sphere.center).addScaledVector(outward, SPHERE_RADIUS + 0.0005);
    const into = outward.clone().multiplyScalar(-1);
    pointArrow(normals[index], surface.clone().addScaledVector(into, -0.004), into, 0.012 + contact.pressure * 0.01);
    if (contact.shearAmount > 0.25) {
      const tangent = v3(contact.shearDir).normalize();
      pointArrow(shears[index], surface.clone().addScaledVector(tangent, 0.002), tangent, 0.008 * contact.shearAmount);
    } else {
      shears[index].visible = false;
    }
  });
}

function updateArc(arc: THREE.Line, rig: HandRig, frame: FrameState): void {
  if (frame.shot !== 3) {
    arc.visible = false;
    return;
  }
  const u = smooth(10, 16.3, frame.t);
  const joint = u < 0.34 ? rig.fingers.index.mcp : u < 0.67 ? rig.fingers.index.pip : rig.fingers.index.dip;
  const angle = u < 0.34 ? frame.indexJoints.mcp : u < 0.67 ? frame.indexJoints.pipAngle : frame.indexJoints.dipAngle;
  const position = arc.geometry.getAttribute("position") as THREE.BufferAttribute;
  const local = new THREE.Vector3();
  for (let i = 0; i < 28; i++) {
    const a = (angle * i) / 27;
    local.set(0, Math.cos(a) * 0.016, Math.sin(a) * 0.016);
    local.applyMatrix4(joint.matrixWorld);
    position.setXYZ(i, local.x, local.y, local.z);
  }
  position.needsUpdate = true;
  arc.geometry.computeBoundingSphere();
  arc.visible = true;
}

function drawTaxelMap(contact: ContactVisual | undefined): void {
  const ctx = taxelMap!.getContext("2d");
  if (!ctx || !contact) return;
  ctx.clearRect(0, 0, 120, 100);
  const cols = 6;
  const rows = 5;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const nx = (c / (cols - 1) - 0.5) * 0.8;
      const ny = (r / (rows - 1) - 0.5) * 0.8;
      const falloff = Math.exp(-(nx * nx + ny * ny) * 3.2);
      const lit = contact.pressure * falloff;
      const red = Math.round(30 + lit * 225);
      const green = Math.round(34 * (1 - lit));
      const blue = Math.round(42 + lit * 40);
      ctx.fillStyle = `rgb(${red},${green},${blue})`;
      ctx.fillRect(8 + c * 18, 8 + r * 17, 14, 13);
      if (lit > 0.55) {
        ctx.fillStyle = "#fff";
        ctx.fillRect(12 + c * 18, 12 + r * 17, 6, 5);
      }
    }
  }
}

function smooth(a: number, b: number, t: number): number {
  const x = Math.min(1, Math.max(0, (t - a) / (b - a || 1)));
  return x * x * (3 - 2 * x);
}
