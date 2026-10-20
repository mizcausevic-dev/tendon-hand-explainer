import { audioCues } from "./timeline";

export interface MixState {
  music: number;
  effects: number;
  muted: boolean;
}

/**
 * Original synthesized score and mechanical effects.
 * Nothing here is a recording of hardware. Playback starts only after a user gesture.
 * One-shots fire only when playback crosses their time, so seek, pause, and replay
 * do not repeat skipped events.
 */
export class Score {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private music: GainNode | null = null;
  private effects: GainNode | null = null;
  private droneGains: GainNode[] = [];
  private motorGain: GainNode | null = null;
  private noise: AudioBuffer | null = null;
  private live: AudioBufferSourceNode[] = [];
  private tones: OscillatorNode[] = [];
  private lastT = 0;
  private mix: MixState = { music: 0.72, effects: 0.78, muted: false };

  get ready(): boolean {
    return this.ctx !== null;
  }

  currentTime(): number | null {
    if (!this.ctx || this.ctx.state === "suspended") return null;
    return this.ctx.currentTime;
  }

  ensure(): void {
    if (this.ctx) return;
    const ctx = new AudioContext();
    const master = ctx.createGain();
    const music = ctx.createGain();
    const effects = ctx.createGain();
    music.connect(master);
    effects.connect(master);
    master.connect(ctx.destination);
    this.ctx = ctx;
    this.master = master;
    this.music = music;
    this.effects = effects;
    this.noise = noiseBuffer(ctx);
    const layers: Array<[number, OscillatorType, number]> = [
      [73.42, "sine", 0.055],
      [110, "sine", 0.032],
      [146.83, "triangle", 0.02],
      [220, "sine", 0.014],
    ];
    for (const [freq, type, amount] of layers) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.value = 0;
      osc.connect(gain);
      gain.connect(music);
      osc.start();
      this.tones.push(osc);
      this.droneGains.push(gain);
      gain.gain.value = amount;
    }
    const motor = ctx.createOscillator();
    motor.type = "sawtooth";
    motor.frequency.value = 58;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 220;
    const motorGain = ctx.createGain();
    motorGain.gain.value = 0;
    motor.connect(filter);
    filter.connect(motorGain);
    motorGain.connect(effects);
    motor.start();
    this.tones.push(motor);
    this.motorGain = motorGain;
    this.applyMix();
  }

  async resume(): Promise<void> {
    if (this.ctx && this.ctx.state !== "running") await this.ctx.resume();
  }

  setMix(mix: MixState): void {
    this.mix = mix;
    this.applyMix();
  }

  update(t: number, playing: boolean, jumped: boolean, energy: number): void {
    if (!this.ctx || !this.master || !this.music || !this.effects) return;
    if (!playing || jumped || t < this.lastT || t - this.lastT > 0.25) {
      this.stopLive();
      this.lastT = t;
      this.writeBed(t, playing, energy);
      return;
    }
    for (const cue of audioCues()) {
      if (cue.t > this.lastT && cue.t <= t) this.trigger(cue.type, cue.freq);
    }
    this.lastT = t;
    this.writeBed(t, true, energy);
  }

  stop(): void {
    this.stopLive();
    this.writeBed(0, false, 0);
  }

  private applyMix(): void {
    if (!this.master || !this.music || !this.effects || !this.ctx) return;
    const now = this.ctx.currentTime;
    this.master.gain.setTargetAtTime(this.mix.muted ? 0 : 1, now, 0.02);
    this.music.gain.setTargetAtTime(this.mix.music, now, 0.03);
    this.effects.gain.setTargetAtTime(this.mix.effects, now, 0.03);
  }

  private writeBed(t: number, playing: boolean, energy: number): void {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const bed = playing ? musicBed(t) : 0;
    const weights = [1, 0.85, bed > 0.4 ? 0.7 : 0.15, t > 24 && t < 33.2 ? 0.55 : 0.05];
    this.droneGains.forEach((gain, index) => {
      const base = [0.055, 0.032, 0.02, 0.014][index] ?? 0.01;
      gain.gain.setTargetAtTime(base * weights[index] * bed, now, 0.05);
    });
    const hum = playing && t >= 4.8 && t < 32.9 ? Math.min(0.045, 0.008 + energy * 0.03) : 0;
    this.motorGain?.gain.setTargetAtTime(hum, now, 0.04);
  }

  private trigger(type: string, freq: number): void {
    if (!this.ctx || !this.effects || !this.noise) return;
    if (type === "shell") this.noiseHit(freq * 6, 0.18, 0.09, 480);
    else if (type === "motor") this.tone(freq, 0.22, 0.035, "triangle");
    else if (type === "contact") {
      this.tone(freq, 0.12, 0.05, "sine");
      this.noiseHit(900, 0.08, 0.04, 1400);
    } else if (type === "resolve") {
      this.tone(freq, 0.9, 0.04, "sine");
      this.tone(freq * 1.5, 0.9, 0.028, "sine");
    } else this.tone(freq, 0.045, 0.018, "sine");
  }

  private tone(freq: number, duration: number, amount: number, type: OscillatorType): void {
    if (!this.ctx || !this.effects) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    const now = this.ctx.currentTime;
    gain.gain.setValueAtTime(amount, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain);
    gain.connect(this.effects);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  private noiseHit(center: number, duration: number, amount: number, q: number): void {
    if (!this.ctx || !this.effects || !this.noise) return;
    const source = this.ctx.createBufferSource();
    source.buffer = this.noise;
    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = center;
    filter.Q.value = Math.max(0.7, q / 200);
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;
    gain.gain.setValueAtTime(amount, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.effects);
    source.start(now);
    source.stop(now + duration);
    this.live.push(source);
    source.onended = () => {
      this.live = this.live.filter((item) => item !== source);
    };
  }

  private stopLive(): void {
    for (const source of this.live) {
      try {
        source.stop();
      } catch {
        /* already stopped */
      }
    }
    this.live = [];
  }
}

function musicBed(t: number): number {
  const intro = smooth(0, 0.6, t);
  const outro = 1 - smooth(33.05, 34, t);
  const lift = 0.72 + 0.28 * smooth(9.5, 16, t);
  return intro * outro * lift;
}

function smooth(a: number, b: number, x: number): number {
  const u = Math.max(0, Math.min(1, (x - a) / (b - a || 1)));
  return u * u * u * (u * (u * 6 - 15) + 10);
}

function noiseBuffer(ctx: AudioContext): AudioBuffer {
  const length = Math.floor(ctx.sampleRate * 0.35);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let seed = 0x5eed1234;
  for (let i = 0; i < length; i += 1) {
    seed = (Math.imul(1664525, seed) + 1013904223) >>> 0;
    data[i] = ((seed & 65535) / 32768 - 1) * (1 - i / length);
  }
  return buffer;
}
