# Tendon hand, illustrative anatomy

A 34-second browser study of a tendon-driven, five-finger robotic hand. The hand is an engineered specimen: the palm opens, capstans wind antagonistic tendons, the index finger shows joint sensing, and the digits reorient a small sphere. Every readout is authored animation data.

This is not a validated mechanism. It does not claim packaging, torque, force, dimensions, manufacturability, or hardware performance.

## Run

```bash
npm ci
npm run dev
```

Open the local URL Vite prints. Press **Play the study**. Audio starts on that gesture.

```bash
npm run verify   # timeline, tendons, contact, seek purity
npm run build    # tsc --noEmit && vite build
npm run preview  # serves dist on port 4173
```

Node 22. The production build uses relative asset paths (`base: "./"`) so it can sit on a GitHub Pages project site.

## Controls

Play and pause, replay, timeline scrub, mute, separate music and effects levels, and full screen where the browser allows it.

Keyboard: Space play/pause, R replay, M mute, F full screen, Left/Right one frame, Shift+arrow one second, Home and End. The timeline is a labeled range input.

If WebGL is missing, the page shows a static palmar schematic of the same actuator layout. `prefers-reduced-motion` checks the calmer camera path. Playback still runs on the same 34-second clock.

## What the model is

Six palm motors and twelve tendons. Each motor turns one dual-groove capstan. One groove takes up a tendon while the other pays the antagonist out. A tendon only pulls.

Four fingers have one motor each. PIP is 0.75×MCP and DIP is 0.50×MCP (pinky 0.72 and 0.48). Those joints are coupled. They are not extra motors. The thumb has two motors, opposition and flexion. Thumb IP is 0.68× thumb MCP flexion. Magnetic encoders are drawn at the joints as angle sensors.

Lengths are illustration scale. The contact solver is a pure function of the master clock, so a seek rebuilds the same pose, tendons, camera, sphere, and overlays. Detail is in `docs/model-notes-Cursor.md`.

## Audio

Music and effects are synthesized in the browser from fixed seeds into two 34-second buffers. They are not recordings of the drawn hardware. Pause, seek, and replay stop the sources and start again at the new offset.

## GitHub Pages

The live preview is the `gh-pages` branch:

https://mizcausevic-dev.github.io/tendon-hand-explainer/

Source for this build is the branch `cursor/tendon-hand-explainer-d3ee`. `.github/workflows/pages.yml` can also build `dist` from `main` or `master`. The site that is actually served is the `gh-pages` branch.

Suggested repository topics, once a remote exists: `threejs`, `vite`, `typescript`, `robotics`, `tendon-driven`, `webgl`, `animation`, `kinematics`, `explanatory-visualization`.

About line: Illustrative 34-second WebGL study of an underactuated tendon-driven robotic hand.
