import { FINGERS, fingerJoints, fingerTendon, thumbJoints, thumbOppositionTendon, thumbTendon, type FingerId } from "../src/sim/kinematics.ts";
import { fmt } from "../src/sim/math.ts";

const ids: FingerId[] = ["index", "middle", "ring", "pinky"];
for (const id of ids) {
  console.log("\n==", id);
  for (const a of [0, 0.35, 0.55, 0.75, 0.95, 1.15]) {
    const j = fingerJoints(FINGERS[id], a);
    const tendon = fingerTendon(FINGERS[id], a);
    console.log(
      a.toFixed(2),
      "tip",
      fmt(j.tip),
      "Lf",
      tendon.flexorLength.toFixed(4),
      "Le",
      tendon.extensorLength.toFixed(4),
      "cap",
      tendon.capstan.toFixed(3),
    );
  }
}

console.log("\n== thumb");
for (const opp of [0, 0.35, 0.7, 1.05]) {
  for (const flex of [0, 0.4, 0.8]) {
    const j = thumbJoints(opp, flex);
    const flexT = thumbTendon(opp, flex);
    const oppT = thumbOppositionTendon(opp, flex);
    console.log(
      "opp",
      opp.toFixed(2),
      "flex",
      flex.toFixed(2),
      "tip",
      fmt(j.tip),
      "Lf",
      flexT.flexorLength.toFixed(4),
      "Le",
      flexT.extensorLength.toFixed(4),
      "capF",
      flexT.capstan.toFixed(3),
      "Ladd",
      oppT.adductorLength.toFixed(4),
      "Labd",
      oppT.abductorLength.toFixed(4),
      "capO",
      oppT.capstan.toFixed(3),
    );
  }
}
