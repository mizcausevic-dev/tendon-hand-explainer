import {
  CONTACT_SUM,
  FINGERS,
  padOf,
  solveFinger,
  solveThumb,
  thumbOppositionTendon,
  thumbTendon,
  type DigitId,
  type Pose,
} from "../src/sim/kinematics.ts";
import { add, dist, normalize, scale, sub, type V3 } from "../src/sim/math.ts";

function trial(name: string, sphere: V3, digits: DigitId[]) {
  console.log("\n#", name, sphere.map((n) => n.toFixed(3)).join(", "));
  const pose: Pose = { index: 0.2, middle: 0.2, ring: 0.2, pinky: 0.2, thumbOpp: 0.4, thumbFlex: 0.2 };
  for (const digit of digits) {
    const base = digit === "thumb" ? ([-0.04, 0.004, 0.012] as V3) : FINGERS[digit].base;
    const dir = normalize(sub(base, sphere));
    const target = add(sphere, scale(dir, CONTACT_SUM));
    if (digit === "thumb") {
      const solved = solveThumb(target);
      pose.thumbOpp = solved.opposition;
      pose.thumbFlex = solved.flexion;
    } else {
      pose[digit] = solveFinger(FINGERS[digit], target);
    }
    const pad = padOf(pose, digit);
    const gap = dist(pad, sphere) - CONTACT_SUM;
    console.log(
      digit.padEnd(6),
      "gap",
      (gap * 1000).toFixed(2).padStart(7),
      "mm  pad",
      pad.map((n) => n.toFixed(3)).join(", "),
      digit === "thumb"
        ? `opp ${pose.thumbOpp.toFixed(2)} flex ${pose.thumbFlex.toFixed(2)}`
        : `flex ${pose[digit].toFixed(2)}`,
    );
  }
}

for (const opp of [0, 0.5, 1.05]) {
  const flexT = thumbTendon(opp, 0.2);
  const oppT = thumbOppositionTendon(opp, 0.2);
  console.log(
    "opp",
    opp.toFixed(2),
    "capF",
    flexT.capstan.toFixed(2),
    "Lf",
    flexT.flexorLength.toFixed(4),
    "Le",
    flexT.extensorLength.toFixed(4),
    "capO",
    oppT.capstan.toFixed(2),
    "Ladd",
    oppT.adductorLength.toFixed(4),
    "Labd",
    oppT.abductorLength.toFixed(4),
  );
}

trial("tripod", [-0.012, 0.086, 0.056], ["thumb", "index", "middle"]);
trial("index press", [-0.014, 0.092, 0.06], ["thumb", "index", "middle"]);
trial("ring handoff", [0.006, 0.082, 0.052], ["thumb", "middle", "ring"]);
trial("pinky", [0.016, 0.074, 0.048], ["ring", "pinky", "middle"]);
trial("pinky thumb", [0.008, 0.072, 0.05], ["thumb", "ring", "pinky"]);
trial("return", [-0.006, 0.084, 0.054], ["thumb", "index", "middle"]);
