import { activityAt, contactsAt, DURATION } from "../sim/choreography.ts";

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function smooth(edge0: number, edge1: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0 || 1)));
  return t * t * (3 - 2 * t);
}

class Lowpass {
  y = 0;
  constructor(
    private cutoff: number,
    private sampleRate: number,
  ) {}
  step(x: number): number {
    const a = 1 - Math.exp((-2 * Math.PI * this.cutoff) / this.sampleRate);
    this.y += a * (x - this.y);
    return this.y;
  }
}

const CHORDS: { t0: number; t1: number; notes: number[] }[] = [
  { t0: 0, t1: 8.6, notes: [110, 164.81, 220, 261.63] },
  { t0: 8.1, t1: 17.3, notes: [87.31, 130.81, 174.61, 220] },
  { t0: 16.7, t1: 25.3, notes: [82.41, 123.47, 164.81, 196] },
  { t0: 24.7, t1: 33.05, notes: [110, 164.81, 220, 329.63] },
  { t0: 32.55, t1: 34, notes: [110, 220] },
];

function masterEnv(t: number): number {
  return smooth(0, 1.5, t) * (1 - smooth(32.85, 34, t));
}

function renderMusic(sampleRate: number): { left: Float32Array; right: Float32Array } {
  const n = Math.floor(sampleRate * DURATION);
  const left = new Float32Array(n);
  const right = new Float32Array(n);
  const rand = mulberry32(0x51c0);
  const bedL = new Lowpass(900, sampleRate);
  const bedR = new Lowpass(900, sampleRate);
  for (let i = 0; i < n; i++) {
    const t = i / sampleRate;
    const env = masterEnv(t);
    let sample = 0;
    for (const chord of CHORDS) {
      const gate = smooth(chord.t0, chord.t0 + 0.7, t) * (1 - smooth(chord.t1 - 0.7, chord.t1, t));
      if (gate <= 0) continue;
      chord.notes.forEach((freq, index) => {
        const detune = 1 + (index % 2 === 0 ? 0.004 : -0.0035);
        const amp = (index === 0 ? 0.22 : 0.11) * gate;
        sample += Math.sin(2 * Math.PI * freq * t) * amp;
        sample += Math.sin(2 * Math.PI * freq * detune * t + 0.4) * amp * 0.45;
      });
    }
    sample += Math.sin(2 * Math.PI * 55 * t) * 0.08 * env;
    const noise = rand() * 2 - 1;
    const air = (bedL.step(noise) + bedR.step(rand() * 2 - 1)) * 0.012 * env;
    if (t >= 5 && t < 32.6) {
      const beat = (t - 5) % 0.8;
      if (beat < 0.025) sample += Math.sin(2 * Math.PI * 180 * beat) * (1 - beat / 0.025) * 0.035;
    }
    for (const mark of [5, 10, 17, 25]) {
      const dt = t - mark;
      if (dt >= 0 && dt < 0.09) sample += Math.sin(2 * Math.PI * 620 * dt) * (1 - dt / 0.09) * 0.03;
    }
    const mixed = (sample * 0.34 + air) * env;
    left[i] = mixed;
    right[i] = mixed * 0.96 + air * 0.4;
  }
  return { left, right };
}

function motorEnvelope(sampleRate: number): Float32Array {
  const step = 1 / 40;
  const coarse: number[] = [];
  for (let t = 0; t <= DURATION; t += step) {
    const activity = activityAt(t);
    const sum =
      activity.index.flexor +
      activity.index.extensor +
      activity.middle.flexor +
      activity.middle.extensor +
      activity.ring.flexor +
      activity.ring.extensor +
      activity.pinky.flexor +
      activity.pinky.extensor +
      activity.thumbFlex.flexor +
      activity.thumbFlex.extensor +
      activity.thumbOpp.flexor +
      activity.thumbOpp.extensor;
    coarse.push(Math.min(1, sum / 2.2));
  }
  const n = Math.floor(sampleRate * DURATION);
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const u = (i / sampleRate / step);
    const a = Math.floor(u);
    const b = Math.min(coarse.length - 1, a + 1);
    const f = u - a;
    out[i] = (coarse[a] ?? 0) * (1 - f) + (coarse[b] ?? 0) * f;
  }
  return out;
}

function contactTimes(): number[] {
  const times: number[] = [];
  let prev = contactsAt(17).map((contact) => contact.pressure);
  for (let t = 17.02; t <= 33; t += 0.02) {
    const now = contactsAt(t);
    now.forEach((contact, index) => {
      if (prev[index] < 0.55 && contact.pressure >= 0.55) times.push(t);
    });
    prev = now.map((contact) => contact.pressure);
  }
  return times;
}

function renderSfx(sampleRate: number): { left: Float32Array; right: Float32Array } {
  const n = Math.floor(sampleRate * DURATION);
  const left = new Float32Array(n);
  const right = new Float32Array(n);
  const rand = mulberry32(0xc0a1);
  const motor = motorEnvelope(sampleRate);
  const hum = new Lowpass(220, sampleRate);
  const whooshes = [
    { t: 1.55, dur: 0.55, amp: 0.22 },
    { t: 2.45, dur: 0.5, amp: 0.16 },
    { t: 3.45, dur: 0.45, amp: 0.14 },
    { t: 25.35, dur: 0.42, amp: 0.16 },
    { t: 26.15, dur: 0.38, amp: 0.13 },
    { t: 26.9, dur: 0.36, amp: 0.11 },
  ];
  const thumps = contactTimes();
  for (let i = 0; i < n; i++) {
    const t = i / sampleRate;
    let sample = 0;
    const env = motor[i] ?? 0;
    const noise = rand() * 2 - 1;
    sample += hum.step(noise) * env * 0.55;
    sample += Math.sin(2 * Math.PI * 96 * t) * env * 0.08;
    sample += Math.sin(2 * Math.PI * 210 * t) * env * 0.025;
    for (const whoosh of whooshes) {
      const dt = t - whoosh.t;
      if (dt >= 0 && dt < whoosh.dur) {
        const u = dt / whoosh.dur;
        const shape = Math.sin(Math.PI * u) * (1 - u);
        sample += (rand() * 2 - 1) * shape * whoosh.amp;
      }
    }
    for (const hit of thumps) {
      const dt = t - hit;
      if (dt >= 0 && dt < 0.12) {
        const decay = Math.exp(-dt * 34);
        sample += Math.sin(2 * Math.PI * 128 * dt) * decay * 0.28;
        sample += (rand() * 2 - 1) * decay * 0.08;
      }
    }
    const tail = 1 - smooth(33.15, 34, t);
    sample *= tail;
    left[i] = sample;
    right[i] = sample * 0.94;
  }
  return { left, right };
}

export function renderStems(ctx: AudioContext): { music: AudioBuffer; sfx: AudioBuffer } {
  const musicSamples = renderMusic(ctx.sampleRate);
  const sfxSamples = renderSfx(ctx.sampleRate);
  const music = ctx.createBuffer(2, musicSamples.left.length, ctx.sampleRate);
  const sfx = ctx.createBuffer(2, sfxSamples.left.length, ctx.sampleRate);
  music.copyToChannel(new Float32Array(musicSamples.left), 0);
  music.copyToChannel(new Float32Array(musicSamples.right), 1);
  sfx.copyToChannel(new Float32Array(sfxSamples.left), 0);
  sfx.copyToChannel(new Float32Array(sfxSamples.right), 1);
  return { music, sfx };
}
