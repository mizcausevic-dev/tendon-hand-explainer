import * as THREE from "three";
import { Score } from "./audio";
import { DURATION, SHOTS, sample, shotAt } from "./timeline";
import { createViewer, type LabelSpec, type Viewer } from "./view";
import "./style.css";

const loader = document.querySelector<HTMLElement>("#loader");
const fallback = document.querySelector<HTMLElement>("#fallback");
const app = document.querySelector<HTMLElement>("#app");
const canvas = document.querySelector<HTMLCanvasElement>("#view");
const labelLayer = document.querySelector<HTMLElement>("#labels");
const leaders = document.querySelector<SVGSVGElement>("#leaders");
const caption = document.querySelector<HTMLElement>("#caption");
const summary = document.querySelector<HTMLElement>("#summary");
const timeReadout = document.querySelector<HTMLElement>("#time-readout");
const shotReadout = document.querySelector<HTMLElement>("#shot-readout");
const timeline = document.querySelector<HTMLInputElement>("#timeline");
const playButton = document.querySelector<HTMLButtonElement>("#play");
const banner = document.querySelector<HTMLElement>("#banner");
const reduceButton = document.querySelector<HTMLButtonElement>("#reduced");

const score = new Score();
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

let viewer: Viewer | null = null;
let time = 0;
let playing = false;
let reduced = motionQuery.matches;
let anchorTimeline = 0;
let anchorClock = 0;
let lastAnnouncedShot = 0;
let seeked = false;

const params = new URLSearchParams(window.location.search);
const requestedTime = Number(params.get("t"));
if (Number.isFinite(requestedTime)) time = Math.min(DURATION, Math.max(0, requestedTime));

function showFallback(message: string) {
  loader?.setAttribute("hidden", "");
  app?.setAttribute("hidden", "");
  if (!fallback) return;
  fallback.hidden = false;
  const note = fallback.querySelector<HTMLElement>("#fallback-note");
  if (note) note.textContent = message;
}

function hasWebGL(): boolean {
  try {
    const probe = document.createElement("canvas");
    return Boolean(probe.getContext("webgl2") || probe.getContext("webgl"));
  } catch {
    return false;
  }
}

function clock(): number {
  return performance.now() / 1000;
}

function render() {
  if (!viewer) return;
  const state = sample(time);
  viewer.update(state);
  layoutLabels(viewer.labels());
  if (caption) caption.textContent = `${state.shot.name}. ${state.shot.caption}`;
  if (timeReadout) timeReadout.textContent = `${time.toFixed(3)} s · frame ${String(state.frame).padStart(4, "0")}`;
  if (shotReadout) shotReadout.textContent = `Shot ${state.shot.id} of 5`;
  if (timeline) {
    timeline.value = String(time);
    timeline.setAttribute("aria-valuenow", time.toFixed(3));
    timeline.setAttribute("aria-valuetext", `${time.toFixed(1)} seconds, shot ${state.shot.id}, ${state.shot.name}`);
  }
  if (playButton) {
    playButton.textContent = playing ? "Pause" : "Play";
    playButton.setAttribute("aria-pressed", playing ? "true" : "false");
    playButton.setAttribute("aria-label", playing ? "Pause animation" : "Play animation");
  }
  score.update(time, playing, seeked, state.motionEnergy);
  seeked = false;
  if (state.shot.id !== lastAnnouncedShot) {
    lastAnnouncedShot = state.shot.id;
    announce(state.shot.id, state.shot.name, state.shot.caption);
  }
}

function announce(id: number, name: string, text: string) {
  if (summary) summary.textContent = `Shot ${id}, ${name}. ${text}`;
}

function layoutLabels(items: LabelSpec[]) {
  if (!viewer || !labelLayer || !leaders || !canvas) return;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  leaders.setAttribute("viewBox", `0 0 ${width} ${height}`);
  const compact = width < 760;
  const visible = items.filter((item) => (compact ? item.priority === 1 : true)).slice(0, compact ? 3 : 5);
  labelLayer.replaceChildren();
  leaders.replaceChildren();
  const placed: Array<{ x: number; y: number }> = [];
  for (const item of visible) {
    const projected = project(item.position, width, height);
    if (!projected) continue;
    let x = projected.x + item.offsetX;
    let y = projected.y + item.offsetY;
    for (const other of placed) {
      if (Math.abs(other.x - x) < 120 && Math.abs(other.y - y) < 36) y += 34;
    }
    x = Math.max(8, Math.min(width - 160, x));
    y = Math.max(8, Math.min(height - 72, y));
    placed.push({ x, y });
    const node = document.createElement("div");
    node.className = "tag";
    const title = document.createElement("strong");
    title.textContent = item.title;
    const detail = document.createElement("span");
    detail.textContent = item.detail;
    node.append(title, detail);
    node.style.left = `${x}px`;
    node.style.top = `${y}px`;
    labelLayer.append(node);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", String(projected.x));
    line.setAttribute("y1", String(projected.y));
    line.setAttribute("x2", String(x));
    line.setAttribute("y2", String(y + 8));
    leaders.append(line);
  }
}

function project(position: { x: number; y: number; z: number }, width: number, height: number) {
  if (!viewer) return null;
  const vector = new THREE.Vector3(position.x, position.y, position.z);
  vector.project(viewer.camera);
  if (vector.z > 1) return null;
  const x = (vector.x * 0.5 + 0.5) * width;
  const y = (-vector.y * 0.5 + 0.5) * height;
  if (x < -40 || y < -40 || x > width + 40 || y > height + 40) return null;
  return { x, y };
}

function seek(next: number, fromUser = false) {
  time = Math.min(DURATION, Math.max(0, next));
  if (playing) {
    anchorTimeline = time;
    anchorClock = clock();
  }
  seeked = true;
  if (fromUser) announce(shotAt(time).id, shotAt(time).name, shotAt(time).caption);
  render();
}

function play() {
  score.ensure();
  void score.resume();
  if (time >= DURATION) time = 0;
  anchorTimeline = time;
  anchorClock = clock();
  playing = true;
  seeked = true;
  render();
}

function pause() {
  playing = false;
  seeked = true;
  score.update(time, false, true, 0);
  const shot = shotAt(time);
  announce(shot.id, shot.name, `${shot.caption} Paused at ${time.toFixed(1)} seconds.`);
  render();
}

function toggle() {
  if (playing) pause();
  else play();
}

function replay() {
  score.ensure();
  void score.resume();
  time = 0;
  playing = true;
  anchorTimeline = 0;
  anchorClock = clock();
  seeked = true;
  render();
}

function step(direction: number) {
  const starts = SHOTS.map((shot) => shot.start);
  let index = 0;
  for (let i = 0; i < starts.length; i += 1) if (time >= starts[i] - 0.02) index = i;
  if (direction > 0) seek(starts[Math.min(starts.length - 1, index + 1)], true);
  else if (time - starts[index] > 0.4) seek(starts[index], true);
  else seek(starts[Math.max(0, index - 1)], true);
  if (playing) pause();
}

function syncMix() {
  const music = Number(document.querySelector<HTMLInputElement>("#music")?.value ?? 0.72);
  const effects = Number(document.querySelector<HTMLInputElement>("#effects")?.value ?? 0.78);
  const muted = document.querySelector<HTMLButtonElement>("#mute")?.getAttribute("aria-pressed") === "true";
  score.setMix({ music, effects, muted });
}

function setReduced(next: boolean) {
  reduced = next;
  document.body.classList.toggle("is-reduced", reduced);
  reduceButton?.setAttribute("aria-pressed", reduced ? "true" : "false");
  if (banner) banner.hidden = !reduced;
  if (reduced && playing) pause();
}

function loop() {
  if (playing) {
    const next = anchorTimeline + (clock() - anchorClock);
    if (next >= DURATION) {
      time = DURATION;
      playing = false;
      seeked = true;
      announce(5, "Coordinated manipulation", "Final frame held.");
    } else time = next;
  }
  render();
  requestAnimationFrame(loop);
}

function bind() {
  playButton?.addEventListener("click", toggle);
  document.querySelector("#replay")?.addEventListener("click", replay);
  document.querySelector("#prev-shot")?.addEventListener("click", () => step(-1));
  document.querySelector("#next-shot")?.addEventListener("click", () => step(1));
  timeline?.addEventListener("input", () => seek(Number(timeline.value), true));
  document.querySelector("#music")?.addEventListener("input", syncMix);
  document.querySelector("#effects")?.addEventListener("input", syncMix);
  document.querySelector<HTMLButtonElement>("#mute")?.addEventListener("click", (event) => {
    const button = event.currentTarget as HTMLButtonElement;
    const pressed = button.getAttribute("aria-pressed") === "true";
    button.setAttribute("aria-pressed", pressed ? "false" : "true");
    button.textContent = pressed ? "Mute" : "Unmute";
    button.setAttribute("aria-label", pressed ? "Mute audio" : "Unmute audio");
    syncMix();
  });
  document.querySelector("#fullscreen")?.addEventListener("click", async () => {
    const root = document.documentElement;
    if (!document.fullscreenEnabled) return;
    if (document.fullscreenElement) await document.exitFullscreen();
    else await root.requestFullscreen();
  });
  reduceButton?.addEventListener("click", () => setReduced(!reduced));
  window.addEventListener("keydown", (event) => {
    const tag = (event.target as HTMLElement | null)?.tagName;
    if (tag === "INPUT" || tag === "BUTTON" || tag === "SUMMARY" || tag === "TEXTAREA") return;
    if (event.code === "Space") {
      event.preventDefault();
      toggle();
    } else if (event.code === "KeyR") replay();
    else if (event.code === "KeyM") document.querySelector<HTMLButtonElement>("#mute")?.click();
    else if (event.code === "KeyF") document.querySelector<HTMLButtonElement>("#fullscreen")?.click();
    else if (event.code === "ArrowRight") seek(time + (event.shiftKey ? 0.1 : 1), true);
    else if (event.code === "ArrowLeft") seek(time - (event.shiftKey ? 0.1 : 1), true);
    else if (event.code === "Home") seek(0, true);
    else if (event.code === "End") seek(DURATION, true);
  });
  window.addEventListener("resize", () => viewer?.resize());
  motionQuery.addEventListener?.("change", (event) => setReduced(event.matches));
  const fullscreenButton = document.querySelector<HTMLButtonElement>("#fullscreen");
  if (fullscreenButton && !document.fullscreenEnabled) {
    fullscreenButton.disabled = true;
    fullscreenButton.textContent = "Fullscreen unavailable";
  }
}

function boot() {
  if (!canvas || !hasWebGL()) {
    showFallback("WebGL is unavailable in this browser. The schematic below describes the same illustrative mechanism.");
    return;
  }
  try {
    viewer = createViewer(canvas);
    canvas.addEventListener("webglcontextlost", (event) => {
      event.preventDefault();
      showFallback("The graphics context was lost before the specimen could keep drawing.");
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "The 3D viewer could not start.";
    showFallback(message);
    return;
  }
  bind();
  setReduced(reduced);
  syncMix();
  viewer.resize();
  render();
  loader?.setAttribute("hidden", "");
  requestAnimationFrame(loop);
}

boot();
