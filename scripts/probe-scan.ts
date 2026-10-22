import {
  CONTACT_SUM,
  FINGERS,
  fingerJoints,
  thumbJoints,
  type DigitId,
} from "../src/sim/kinematics.ts";
import { dist, dot, normalize, sub, type V3 } from "../src/sim/math.ts";

function best(digit: DigitId, sphere: V3): { gap: number; dir: V3; a: number; b: number } {
  let gap = 999;
  let dir: V3 = [0, 1, 0];
  let a = 0;
  let b = 0;
  if (digit === "thumb") {
    for (let i = 0; i <= 18; i++) {
      const opp = (1.05 * i) / 18;
      for (let j = 0; j <= 16; j++) {
        const flex = (1.15 * j) / 16;
        const tip = thumbJoints(opp, flex).tip;
        const g = dist(tip, sphere) - CONTACT_SUM;
        if (Math.abs(g) < Math.abs(gap)) {
          gap = g;
          dir = normalize(sub(tip, sphere));
          a = opp;
          b = flex;
        }
      }
    }
  } else {
    const spec = FINGERS[digit];
    for (let i = 0; i <= 40; i++) {
      const flex = (spec.flexMax * i) / 40;
      const tip = fingerJoints(spec, flex).tip;
      const g = dist(tip, sphere) - CONTACT_SUM;
      if (Math.abs(g) < Math.abs(gap)) {
        gap = g;
        dir = normalize(sub(tip, sphere));
        a = flex;
        b = 0;
      }
    }
  }
  return { gap, dir, a, b };
}

const digits: DigitId[] = ["thumb", "index", "middle", "ring", "pinky"];
type Hit = { sphere: V3; score: number; parts: string };

const hits: Hit[] = [];
for (let ix = -4; ix <= 4; ix++) {
  for (let iy = 0; iy <= 8; iy++) {
    for (let iz = 0; iz <= 6; iz++) {
      const sphere: V3 = [-0.02 + ix * 0.008, 0.07 + iy * 0.006, 0.04 + iz * 0.006];
      const rows = digits.map((d) => ({ d, ...best(d, sphere) }));
      const close = rows.filter((r) => Math.abs(r.gap) < 0.0035);
      if (close.length < 3) continue;
      let spread = 0;
      for (let i = 0; i < close.length; i++) {
        for (let j = i + 1; j < close.length; j++) spread += 1 - dot(close[i].dir, close[j].dir);
      }
      if (spread < 1.3) continue;
      const score = spread - close.reduce((s, r) => s + Math.abs(r.gap) * 40, 0);
      const parts = close
        .map((r) => `${r.d}:${(r.gap * 1000).toFixed(1)}@${r.a.toFixed(2)}/${r.b.toFixed(2)}`)
        .join(" ");
      hits.push({ sphere, score, parts });
    }
  }
}
hits.sort((a, b) => b.score - a.score);
for (const hit of hits.slice(0, 18)) {
  console.log(hit.score.toFixed(2), hit.sphere.map((n) => n.toFixed(3)).join(","), hit.parts);
}
console.log("hits", hits.length);
