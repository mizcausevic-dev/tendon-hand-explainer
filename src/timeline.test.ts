import { describe, expect, it } from "vitest";
import { cross, dot, norm, sub, v } from "./math";
import {
  CAPSTAN_RADIUS,
  DIP_COUPLING,
  THUMB_IP_COUPLING,
  boneClearanceOk,
  routesFor,
  solveDigit,
  solveThumb,
  type PoseSet,
} from "./anatomy";
import {
  DURATION,
  FPS,
  FRAME_COUNT,
  SHOTS,
  audioCues,
  contactErrorAt,
  frameAt,
  poseDistance,
  sample,
  shotAt,
  supportAt,
} from "./timeline";

function curled(): PoseSet {
  return {
    digits: {
      index: { abd: 0.04, mcp: 1.05, pip: 1.2, dip: 1.2 * DIP_COUPLING },
      middle: { abd: 0, mcp: 0.2, pip: 0.2, dip: 0.2 * DIP_COUPLING },
      ring: { abd: -0.05, mcp: 0.2, pip: 0.2, dip: 0.2 * DIP_COUPLING },
      pinky: { abd: -0.12, mcp: 0.2, pip: 0.2, dip: 0.2 * DIP_COUPLING },
    },
    thumb: { opp: 1.05, abd: 0.05, mcp: 0.8, ip: 0.8 * THUMB_IP_COUPLING },
  };
}

function extended(): PoseSet {
  return {
    digits: {
      index: { abd: 0.04, mcp: 0, pip: 0, dip: 0 },
      middle: { abd: 0, mcp: 0, pip: 0, dip: 0 },
      ring: { abd: -0.05, mcp: 0, pip: 0, dip: 0 },
      pinky: { abd: -0.12, mcp: 0, pip: 0, dip: 0 },
    },
    thumb: { opp: 0.34, abd: 0.05, mcp: 0, ip: 0 },
  };
}

describe("timeline contract", () => {
  it("covers exactly 34 seconds and 1020 frames", () => {
    expect(DURATION).toBe(34);
    expect(FPS).toBe(30);
    expect(FRAME_COUNT).toBe(1020);
    expect(frameAt(0)).toBe(0);
    expect(frameAt(5)).toBe(150);
    expect(frameAt(10)).toBe(300);
    expect(frameAt(17)).toBe(510);
    expect(frameAt(25)).toBe(750);
    expect(frameAt(33.999)).toBe(1019);
    expect(frameAt(34)).toBe(1019);
    for (let frame = 0; frame < FRAME_COUNT; frame += 1) {
      expect(frameAt((frame + 0.5) / FPS)).toBe(frame);
    }
  });

  it("assigns the five shot intervals without gaps", () => {
    expect(SHOTS.map((shot) => [shot.start, shot.end])).toEqual([
      [0, 5],
      [5, 10],
      [10, 17],
      [17, 25],
      [25, 34],
    ]);
    expect(shotAt(0).id).toBe(1);
    expect(shotAt(4.999).id).toBe(1);
    expect(shotAt(5).id).toBe(2);
    expect(shotAt(9.999).id).toBe(2);
    expect(shotAt(10).id).toBe(3);
    expect(shotAt(16.999).id).toBe(3);
    expect(shotAt(17).id).toBe(4);
    expect(shotAt(24.999).id).toBe(4);
    expect(shotAt(25).id).toBe(5);
    expect(shotAt(34).id).toBe(5);
  });

  it("is deterministic and holds the final pose", () => {
    const a = sample(12.345);
    const b = sample(12.345);
    expect(a.digits.index.pose).toEqual(b.digits.index.pose);
    expect(a.camera.position).toEqual(b.camera.position);
    expect(a.tendons.map((tendon) => tendon.spool)).toEqual(b.tendons.map((tendon) => tendon.spool));
    expect(poseDistance(sample(33).pose, sample(34).pose)).toBeLessThan(1e-8);
    expect(sample(33).sphere.center).toEqual(sample(34).sphere.center);
    expect(sample(33).sphere.spin).toBe(sample(34).sphere.spin);
    expect(sample(33).camera.position).toEqual(sample(34).camera.position);
  });

  it("plays the exterior reveal before the palm push", () => {
    expect(sample(0).explode.palm).toBe(0);
    expect(sample(0).explode.shells).toBe(0);
    expect(sample(4).explode.palm).toBeGreaterThan(0.95);
    expect(sample(4).explode.shells).toBeGreaterThan(0.95);
    expect(sample(7).explode.palm).toBeGreaterThan(0.95);
    expect(sample(33).explode.shells).toBeLessThan(0.02);
    expect(sample(33).explode.palm).toBeGreaterThan(0.35);
    expect(sample(33).explode.palm).toBeLessThan(0.5);
    expect(sample(33).explode.indexShell).toBeGreaterThan(0.2);
  });
});

describe("tendon mechanics", () => {
  it("keeps distal joints coupled and routes tendons outside the bone", () => {
    const state = sample(14);
    expect(state.digits.index.pose.dip).toBeCloseTo(state.digits.index.pose.pip * DIP_COUPLING, 6);
    expect(state.thumb.pose.ip).toBeCloseTo(state.thumb.pose.mcp * THUMB_IP_COUPLING, 6);
    expect(boneClearanceOk(state.digits.index)).toBe(true);
    for (const tendon of state.tendons) {
      expect(tendon.points.length).toBeGreaterThan(5);
      for (const point of tendon.points) {
        expect(Number.isFinite(point.x)).toBe(true);
        expect(Number.isFinite(point.y)).toBe(true);
        expect(Number.isFinite(point.z)).toBe(true);
      }
    }
  });

  it("winds the flexor and pays out the extensor when a finger curls", () => {
    const flexName = "index-flex";
    const extName = "index-ext";
    const curledRoutes = routesFor(curled());
    const extendedRoutes = routesFor(extended());
    const flexCurled = curledRoutes.find((route) => route.id === flexName)!;
    const flexExtended = extendedRoutes.find((route) => route.id === flexName)!;
    const extCurled = curledRoutes.find((route) => route.id === extName)!;
    const extExtended = extendedRoutes.find((route) => route.id === extName)!;
    expect(flexCurled.freeLength).toBeLessThan(flexExtended.freeLength - 0.01);
    expect(extCurled.freeLength).toBeGreaterThan(extExtended.freeLength + 0.01);
    expect(flexCurled.spool).toBeGreaterThan(flexExtended.spool + 1);
    expect(extCurled.spool).toBeLessThan(extExtended.spool - 1);
    expect(CAPSTAN_RADIUS).toBeGreaterThan(0);
  });

  it("winds the opposition capstan as the thumb opposes", () => {
    const open = routesFor(extended());
    const opposed = routesFor(curled());
    const openSpool = open.find((route) => route.id === "thumb-opp")!.spool;
    const opposedSpool = opposed.find((route) => route.id === "thumb-opp")!.spool;
    expect(opposedSpool).toBeGreaterThan(openSpool + 0.4);
  });
});

describe("contact choreography", () => {
  it("introduces the sphere before any contact", () => {
    expect(sample(17).sphere.opacity).toBeLessThan(0.05);
    expect(sample(18.4).sphere.opacity).toBeGreaterThan(0.95);
    expect(sample(18.4).supportCount).toBe(0);
    expect(sample(20.4).supportCount).toBeGreaterThanOrEqual(3);
  });

  it("keeps at least two digits supporting the sphere once the grasp closes", () => {
    for (let t = 20.4; t <= 33; t += 0.2) {
      expect(supportAt(t), `support at ${t}`).toBeGreaterThanOrEqual(2);
    }
  });

  it("puts every digit on the sphere at some point during manipulation", () => {
    const peaks: Record<string, number> = { thumb: 0, index: 0, middle: 0, ring: 0, pinky: 0 };
    for (let t = 25; t <= 33; t += 0.1) {
      for (const contact of sample(t).contacts) peaks[contact.digit] = Math.max(peaks[contact.digit], contact.weight);
    }
    for (const id of Object.keys(peaks)) expect(peaks[id], id).toBeGreaterThan(0.8);
  });

  it("tracks contact targets closely while a digit is fully seated", () => {
    const probes: Array<[number, "index" | "middle" | "ring" | "pinky" | "thumb"]> = [
      [22, "index"],
      [22, "middle"],
      [22, "thumb"],
      [30.6, "ring"],
      [30.6, "thumb"],
      [30.7, "pinky"],
      [32.8, "index"],
      [32.8, "middle"],
    ];
    for (const [t, digit] of probes) {
      const err = contactErrorAt(t, digit);
      expect(err, `${digit} @ ${t}`).toBeLessThan(0.04);
    }
  });

  it("keeps released digits outside the sphere", () => {
    const checks: Array<[number, "index" | "middle" | "ring" | "pinky" | "thumb"]> = [
      [22, "ring"],
      [22, "pinky"],
      [24, "pinky"],
      [32.8, "pinky"],
    ];
    for (const [t, digit] of checks) {
      const state = sample(t);
      const pad = digit === "thumb" ? state.thumb.pad : state.digits[digit].pad;
      const gap = Math.hypot(pad.x - state.sphere.center.x, pad.y - state.sphere.center.y, pad.z - state.sphere.center.z);
      expect(gap, `${digit} @ ${t}`).toBeGreaterThan(state.sphere.radius + 0.02);
    }
  });
});

describe("audio and finite playback", () => {
  it("keeps synthesized cues inside the master timeline", () => {
    const cues = audioCues();
    expect(cues.length).toBeGreaterThan(10);
    for (const cue of cues) {
      expect(cue.t).toBeGreaterThan(0);
      expect(cue.t).toBeLessThan(DURATION);
    }
    const times = cues.map((cue) => cue.t);
    const sorted = [...times].sort((a, b) => a - b);
    expect(times).toEqual(sorted);
  });

  it("stays finite across every reference frame", () => {
    for (let frame = 0; frame < FRAME_COUNT; frame += 15) {
      const state = sample(frame / FPS);
      expect(Number.isFinite(state.camera.fov)).toBe(true);
      expect(Number.isFinite(state.digits.middle.pad.y)).toBe(true);
      expect(state.camera.position.z).toBeGreaterThan(0.2);
    }
    const solved = solveDigit("index", { abd: 0, mcp: 0.4, pip: 0.5, dip: 0 });
    expect(solved.pose.dip).toBeCloseTo(0.5 * DIP_COUPLING, 6);
    expect(Number.isFinite(solveThumb({ opp: 0.8, abd: 0, mcp: 0.4, ip: 0 }).pad.x)).toBe(true);
  });
});

function ndc(point: { x: number; y: number; z: number }, t: number, aspect = 16 / 9) {
  const cam = sample(t).camera;
  const forward = norm(sub(cam.target, cam.position));
  const right = norm(cross(forward, v(0, 1, 0)));
  const up = cross(right, forward);
  const rel = sub(point, cam.position);
  const z = dot(rel, forward);
  const f = 1 / Math.tan((cam.fov * Math.PI) / 180 / 2);
  return {
    x: (dot(rel, right) / z) * (f / aspect),
    y: (dot(rel, up) / z) * f,
    z,
    distance: Math.hypot(cam.position.x - cam.target.x, cam.position.y - cam.target.y, cam.position.z - cam.target.z),
  };
}

describe("camera framing", () => {
  function expectInside(point: { x: number; y: number; z: number }, t: number, label: string) {
    const p = ndc(point, t);
    expect(p.z, `${label} depth @ ${t}`).toBeGreaterThan(0.45);
    expect(Math.abs(p.x), `${label} x @ ${t}`).toBeLessThan(0.92);
    expect(Math.abs(p.y), `${label} y @ ${t}`).toBeLessThan(0.92);
    expect(p.distance, `camera distance @ ${t}`).toBeGreaterThan(0.7);
  }

  it("holds the whole specimen in the opening and closing frames", () => {
    for (const t of [0, 33.5]) {
      const state = sample(t);
      expectInside(state.digits.index.pad, t, "index pad");
      expectInside(state.digits.pinky.pad, t, "pinky pad");
      expectInside(state.thumb.pad, t, "thumb pad");
      expectInside(v(0.02, -0.17, -0.02), t, "forearm");
    }
  });

  it("looks at the palm actuators, then the index joints, then the contact", () => {
    const palm = sample(7);
    expectInside(palm.actuators[0].position, 7, "capstan");
    const routed = sample(13.5);
    expectInside(routed.digits.index.joints[1], 13.5, "index pip");
    expectInside(routed.digits.index.joints[0], 13.5, "index mcp");
    const touch = sample(21);
    expectInside(touch.sphere.center, 21, "sphere");
    expectInside(touch.digits.index.pad, 21, "index pad");
    expectInside(touch.thumb.pad, 21, "thumb pad");
  });
});
