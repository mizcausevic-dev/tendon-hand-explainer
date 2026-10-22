import {
  DURATION,
  FRAME_COUNT,
  SHOTS,
  activityAt,
  cameraAt,
  contactsAt,
  contributingDigits,
  explodeAt,
  firstContactTime,
  frameAt,
  frameIndex,
  poseAt,
  shotAt,
  sphereCenterAt,
  sphereOpacityAt,
  supportCount,
  tendonsAt,
} from "../src/sim/choreography.ts";
import { FINGERS, fingerJoints, fingerTendon, thumbOppositionTendon, thumbTendon } from "../src/sim/kinematics.ts";

let failed = 0;
function check(name: string, cond: boolean, detail = ""): void {
  if (cond) {
    console.log("ok  ", name);
  } else {
    failed += 1;
    console.error("FAIL", name, detail);
  }
}

check("duration is 34", DURATION === 34);
check("1020 frames", FRAME_COUNT === 1020);
check("five shots cover [0,34) without gaps", SHOTS.every((shot, i) => shot.start === (i === 0 ? 0 : SHOTS[i - 1].end) && shot.end > shot.start) && SHOTS[4].end === 34);

for (let frame = 0; frame < FRAME_COUNT; frame++) {
  if (frameIndex(frame / 30) !== frame) {
    check(`frame ${frame}`, false, String(frameIndex(frame / 30)));
    break;
  }
}
check("frame 0", frameIndex(0) === 0);
check("frame 1019 at just under 34", frameIndex(33.999) === 1019);
check("hold frame at 34", frameIndex(34) === 1019);

check("shot boundaries", shotAt(0) === 1 && shotAt(4.999) === 1 && shotAt(5) === 2 && shotAt(9.999) === 2 && shotAt(10) === 3 && shotAt(16.999) === 3 && shotAt(17) === 4 && shotAt(24.999) === 4 && shotAt(25) === 5 && shotAt(34) === 5);

const a = frameAt(12.345);
const b = frameAt(12.345);
check("seek is pure", JSON.stringify(a.pose) === JSON.stringify(b.pose) && JSON.stringify(a.sphere) === JSON.stringify(b.sphere) && JSON.stringify(a.camera) === JSON.stringify(b.camera));

let finite = true;
for (let t = 0; t <= 34; t += 0.25) {
  const frame = frameAt(t);
  const blob = JSON.stringify(frame.pose) + JSON.stringify(frame.sphere.center) + JSON.stringify(frame.camera.position);
  if (blob.includes("null") || blob.includes("NaN")) finite = false;
}
check("sampled frames are finite", finite);

const open = explodeAt(0);
const exposed = explodeAt(4.8);
const reassembled = explodeAt(30);
check("explode closed at start", open.cover === 0 && open.shells === 0);
check("explode open before shot 2", exposed.cover > 0.99 && exposed.indexShell > 0.99);
check("covers return and index cutaway remains", reassembled.cover < 0.01 && Math.abs(reassembled.indexShell - 0.4) < 1e-6);

const posed = poseAt(6.7);
const joints = fingerJoints(FINGERS.index, posed.index);
check(
  "PIP and DIP stay coupled to MCP",
  Math.abs(joints.pipAngle - FINGERS.index.couple[0] * joints.mcp) < 1e-9 &&
    Math.abs(joints.dipAngle - FINGERS.index.couple[1] * joints.mcp) < 1e-9,
);

const early = fingerTendon(FINGERS.index, poseAt(5.3).index);
const flexed = fingerTendon(FINGERS.index, poseAt(6.7).index);
const returned = fingerTendon(FINGERS.index, poseAt(8.7).index);
check(
  "flexor shortens and extensor lengthens as the index flexes",
  flexed.flexorLength < early.flexorLength - 0.004 && flexed.extensorLength > early.extensorLength + 0.002,
  `early ${early.flexorLength.toFixed(4)}/${early.extensorLength.toFixed(4)} flexed ${flexed.flexorLength.toFixed(4)}/${flexed.extensorLength.toFixed(4)}`,
);
check(
  "extensor return lengthens the flexor",
  returned.flexorLength > flexed.flexorLength + 0.004 && returned.extensorLength < flexed.extensorLength - 0.001,
);
check("capstan winds with flexor take-up", flexed.capstan > early.capstan + 0.4 && returned.capstan < flexed.capstan - 0.4);

const oppLoose = thumbOppositionTendon(0.15, 0.12);
const oppTight = thumbOppositionTendon(0.95, 0.12);
check(
  "thumb opposition pair is antagonistic",
  oppTight.adductorLength < oppLoose.adductorLength - 0.004 && oppTight.abductorLength > oppLoose.abductorLength + 0.004,
  `add ${oppLoose.adductorLength.toFixed(4)}->${oppTight.adductorLength.toFixed(4)} abd ${oppLoose.abductorLength.toFixed(4)}->${oppTight.abductorLength.toFixed(4)}`,
);

const thumbLoose = thumbTendon(0.7, 0.05);
const thumbTight = thumbTendon(0.7, 0.7);
check(
  "thumb flexion pair is antagonistic",
  thumbTight.flexorLength < thumbLoose.flexorLength - 0.003 && thumbTight.extensorLength > thumbLoose.extensorLength + 0.001,
);

const contact = firstContactTime(0.05);
check("sphere is visible before contact", sphereOpacityAt(17.6) > 0.85 && contact > 18.8, `contact ${contact.toFixed(2)}`);
check("contact lead time is at least 1.5s", contact - 17.4 >= 1.5, `lead ${(contact - 17.4).toFixed(2)} from opacity`);

let supported = true;
let worstSupport = 99;
let worstT = 0;
for (let t = contact; t <= 34; t += 0.1) {
  const count = supportCount(contactsAt(t), 0.35);
  if (count < worstSupport) {
    worstSupport = count;
    worstT = t;
  }
  if (count < 2) supported = false;
}
check("at least two digits support the sphere after contact", supported, `worst ${worstSupport} at ${worstT.toFixed(2)}`);

const cast = contributingDigits(25, 33, 0.1);
check("all five digits contribute in shot 5", cast.length === 5, cast.join(","));

let gapOk = true;
let worstGap = 0;
let worstGapT = 0;
for (let t = 19.6; t <= 33; t += 0.05) {
  for (const item of contactsAt(t)) {
    if (item.engage > 0.8 && Math.abs(item.gap) > worstGap) {
      worstGap = Math.abs(item.gap);
      worstGapT = t;
    }
    if (item.engage > 0.8 && Math.abs(item.gap) > 0.0045) gapOk = false;
  }
}
check("engaged pads stay on the sphere", gapOk, `worst ${(worstGap * 1000).toFixed(2)}mm at ${worstGapT.toFixed(2)}`);

const endA = poseAt(33);
const endB = poseAt(34);
const samePose = (Object.keys(endA) as (keyof typeof endA)[]).every((key) => Math.abs(endA[key] - endB[key]) < 1e-6);
check("final second holds the pose", samePose);
check("final second holds the sphere", JSON.stringify(sphereCenterAt(33)) === JSON.stringify(sphereCenterAt(34)));
const camA = cameraAt(33, false);
const camB = cameraAt(34, false);
check("final second holds the camera", JSON.stringify(camA) === JSON.stringify(camB));

const routes = tendonsAt(poseAt(16));
const routeList = [routes.index.flexor, routes.index.extensor, routes.thumbFlex.flexor, routes.thumbOpp.adductor, routes.thumbOpp.abductor];
check(
  "tendon routes are continuous polylines",
  routeList.every((route) => route.length >= 3 && route.every((point) => point.every((value) => Number.isFinite(value)))),
);

const pulling = activityAt(6.2);
check("index flexor is the active route while curling", pulling.index.flexor > 0.4 && pulling.index.extensor === 0);
const releasing = activityAt(8.1);
check("index extensor is the active route while opening", releasing.index.extensor > 0.4 && releasing.index.flexor === 0);

console.log(failed === 0 ? "\nAll checks passed." : `\n${failed} checks failed.`);
process.exit(failed === 0 ? 0 : 1);
