# Illustrative hand model

Effective date: 2026-10-20. These notes describe the animation model in this repository. They are not a hardware specification.

## Actuator choice

The study uses one layout and stays inside it.

| Digit | Motors | What moves |
| --- | --- | --- |
| Index, middle, ring, pinky | 1 each | One dual-groove capstan. Flexor winds as the finger closes. Extensor pays out on the other groove, and the reverse on opening. |
| Thumb | 2 | Opposition capstan (adductor / abductor) and flexion capstan (flexor / extensor). |

PIP and DIP angles are ratios of MCP flexion. Thumb IP is a ratio of thumb MCP flexion. Encoder rings report those angles. They do not add degrees of freedom.

Capstan angle is `(restLength - currentLength) / 0.0046` on the flexor, or on the adductor for opposition. Positive means that tendon has shortened. The opposing tendon is the other groove of the same shaft. The two length changes are not moment-arm matched. A small flexor length change during pure opposition is routing coupling, not a second command.

## Tendons

Routes are polylines through palm eyelets and joint pulleys, drawn as tubes outside the phalanges. A pulse bead is shown only while a route is active. Its position comes from the capstan angle. The tube itself does not scroll.

## Contact

The sphere is introduced from t = 17 and is seated before the pads load. From the first contact through t = 34, at least two digits support it. Shot 5 gives each digit a visible supporting interval. High contact weight is scheduled only while that digit can reach the sphere.

Pad deformation pushes silicone vertices out of the sphere. The taxel grid is a 6×5 set of points on the pad. Color shows relative normal contact. It is not a calibration and it does not measure shear. Tangential arrows, when the sphere is being reoriented, are labeled "Illustrative shear estimate." Normal arrows point into the sphere and are labeled "Force on object." There are no newton values.

The grasp is authored kinematics plus a deterministic contact solver. It is not a dynamics simulation. Seeking does not depend on the previous frame.

## Camera and time

One clock runs from 0 to 34 seconds, independent of the render frame rate. At 34 seconds the pose, sphere, and camera hold. Shot windows are start-inclusive and end-exclusive. Frame index is `floor(t * 30 + 1e-6)`, so frame 1019 is the last frame before 34.

## What this page must not be read as

Packaging that would fit in a real palm, torque or tendon tension, sensor calibration, shear from a capacitive grid, measured audio, or a claim that the drawn clearances are manufacturable.
