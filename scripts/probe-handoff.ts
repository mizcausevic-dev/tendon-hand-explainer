import { contactsAt, poseAt, sphereCenterAt, supportCount, weightsAt } from "../src/sim/choreography.ts";

for (let t = 28.4; t <= 29.7; t += 0.1) {
  const weights = weightsAt(t);
  const contacts = contactsAt(t);
  const pose = poseAt(t);
  const sphere = sphereCenterAt(t);
  const bits = contacts
    .map((c) => `${c.digit.slice(0, 2)} w${c.weight.toFixed(2)} g${(c.gap * 1000).toFixed(1)} p${c.pressure.toFixed(2)}`)
    .join(" | ");
  console.log(
    t.toFixed(2),
    "sup",
    supportCount(contacts, 0.35),
    "sph",
    sphere.map((n) => n.toFixed(3)).join(","),
    "\n ",
    bits,
    "\n  pose",
    `i${pose.index.toFixed(2)} m${pose.middle.toFixed(2)} r${pose.ring.toFixed(2)} p${pose.pinky.toFixed(2)} o${pose.thumbOpp.toFixed(2)} f${pose.thumbFlex.toFixed(2)}`,
  );
}
