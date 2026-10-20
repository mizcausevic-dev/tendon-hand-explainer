# Tendon-driven dexterous hand

A 34-second interactive explainer of an illustrative, tendon-driven, five-finger robotic hand. The specimen is procedural: geometry, materials, and audio are generated in the browser. No API keys and no third-party runtime services.

## Setup

```bash
npm install
npm test
npm run dev
```

Production:

```bash
npm run build
npm run preview
```

Open the dev server at `http://127.0.0.1:5173`. `?t=12.5` opens that timestamp without starting audio.

## What the film shows

One master clock runs from 0 to 34 seconds at a reference 30 fps (frames 0–1019). Playback time does not depend on the render frame rate. At 34 seconds the final pose holds.

| Shot | Time | What you see |
| --- | --- | --- |
| 1 | 0–5 s | Palmar hero, then a controlled cover explosion |
| 2 | 5–10 s | Palm capstans winding antagonistic tendons |
| 3 | 10–17 s | Index routing, pulleys, guides, magnetic encoders |
| 4 | 17–25 s | Fingertip contact, taxel map, force-on-object arrows |
| 5 | 25–34 s | Covers return, in-hand reorientation, held hero |

Chosen actuator layout: four fingers each have a flexor capstan and an extensor capstan. The thumb adds an opposition capstan. Eleven modules sit in the palm. DIP is coupled to PIP. Thumb IP is coupled to MCP. Spread is a coupled bias with a passive web, not its own motor. A tendon only pulls.

The taxel grid is a normal-contact illustration. Tangent marks are labeled “Illustrative shear estimate.” Angles and colors are animation data, not live sensing or a validated force model. Audio is synthesized, not a recording of hardware.

## Controls

Play, pause, replay, timeline scrub, previous and next shot, mute, separate music and effects levels, fullscreen where the browser allows it, and a reduced-motion mode. Keyboard: Space, arrows, Shift+arrows, Home, End, R, M, F, when focus is not already on a control.

## GitHub Pages

`vite.config.ts` uses a relative `base`. `.github/workflows/pages.yml` builds `dist` and deploys with GitHub Pages. Enable Pages with the GitHub Actions source on the default branch.

Suggested repository topics: `threejs`, `robotics`, `tendons`, `webgl`, `vite`, `typescript`, `animation`, `kinematics`, `accessibility`, `simulation`.

## Limits

Model units are not millimeters. The film does not claim packaging, torque, manufacturability, or measured sensor performance. Seeking is deterministic because every pose is a function of time, including the contact solve, which always starts from fixed seeds.
