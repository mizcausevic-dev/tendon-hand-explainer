import { CONTACT_SUM, FINGERS, fingerJoints, solveFingerContact, solveThumbContact, thumbJoints } from "../src/sim/kinematics.ts";
import { dist, lerpV, type V3 } from "../src/sim/math.ts";

const A: V3 = [-0.02, 0.1, 0.076];
const C: V3 = [0.012, 0.076, 0.07];
const desired = CONTACT_SUM - 0.0027;
const prefer = {
  thumb: [-0.1, -0.9, -0.15] as V3,
  index: [-0.55, 0.42, 0.62] as V3,
  ring: [0.42, 0.4, 0.62] as V3,
  middle: [0.02, 0.62, 0.62] as V3,
  pinky: [0.78, 0.12, 0.42] as V3,
};

for (let i = 0; i <= 12; i++) {
  const u = i / 12;
  const sphere = lerpV(C, A, u);
  const thumb = solveThumbContact(sphere, prefer.thumb, 0.9, 0.2, desired);
  const index = solveFingerContact(FINGERS.index, sphere, prefer.index, 0.5, desired);
  const ring = solveFingerContact(FINGERS.ring, sphere, prefer.ring, 0.66, desired);
  const middle = solveFingerContact(FINGERS.middle, sphere, prefer.middle, 0.7, desired);
  const pinky = solveFingerContact(FINGERS.pinky, sphere, prefer.pinky, 0.75, desired);
  const tg = dist(thumbJoints(thumb.opposition, thumb.flexion).tip, sphere) - CONTACT_SUM;
  const ig = dist(fingerJoints(FINGERS.index, index).tip, sphere) - CONTACT_SUM;
  const rg = dist(fingerJoints(FINGERS.ring, ring).tip, sphere) - CONTACT_SUM;
  const mg = dist(fingerJoints(FINGERS.middle, middle).tip, sphere) - CONTACT_SUM;
  const pg = dist(fingerJoints(FINGERS.pinky, pinky).tip, sphere) - CONTACT_SUM;
  console.log(
    u.toFixed(2),
    sphere.map((n) => n.toFixed(3)).join(","),
    `th ${(tg * 1000).toFixed(1)} in ${(ig * 1000).toFixed(1)} mi ${(mg * 1000).toFixed(1)} ri ${(rg * 1000).toFixed(1)} pi ${(pg * 1000).toFixed(1)}`,
  );
}
