// The own furniture's preview: a small z-buffer renderer on a 2D canvas that draws pack parts the way the 3D view
// builds them (boxes, cylinders upright or lying, lofts, turned parts). No three.js, so the page loads at once.

import type { PackPart } from "../packs.ts";

export type Vec3 = [number, number, number];
export type Rgb = [number, number, number];

export interface Tri {
  v: [Vec3, Vec3, Vec3];
  col: Rgb;
  /** Face group: outlines are drawn where it changes. */
  g: number;
  top?: boolean;
  flat?: boolean;
}

export interface PreviewView {
  yaw: number;
  pitch: number;
  zoom: number;
}

export interface SceneOptions {
  bg?: Rgb;
  floor?: boolean;
  floorCol?: Rgb;
  accent?: Rgb;
  /** Text under the front arrow. */
  label?: string;
}

/** The view a preview starts with: from the front left, a little from above. */
export const START_VIEW: PreviewView = { yaw: -0.65, pitch: 0.42, zoom: 1 };

// palette roles in a light look, so the shape reads on the dark page
const ROLE: Record<string, string> = {
  body: "#8a95ab",
  fabric: "#5d6f93",
  cushion: "#8193b8",
  wood: "#a5764a",
  white: "#e6e8ee",
  metal: "#a3acb8",
  dark: "#2c323d",
  glass: "#a9d6f5",
  plant: "#4f9a5a",
  pot: "#b86a4b",
  accent: "#00c8e0",
};

export function hexRgb(hex: string): Rgb {
  const h = hex.replace("#", "");
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

const sub = (a: Vec3, b: Vec3): Vec3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a: Vec3, b: Vec3): number => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a: Vec3, b: Vec3): Vec3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = (a: Vec3): Vec3 => {
  const l = Math.hypot(a[0], a[1], a[2]);
  return [a[0] / l, a[1] / l, a[2] / l];
};

/** Triangles of the parts in metres (x right, y up, z front), each with colour and a face group. */
export function partTriangles(parts: readonly PackPart[], size: readonly number[]): Tri[] {
  const [W, D, H] = size;
  const tris: Tri[] = [];
  let group = 0;
  const add = (a: Vec3, b: Vec3, c: Vec3, col: Rgb, g: number, top: boolean) => tris.push({ v: [a, b, c], col, g, top });
  const quad = (a: Vec3, b: Vec3, c: Vec3, d: Vec3, col: Rgb) => {
    const g = group++;
    add(a, b, c, col, g, false);
    add(a, c, d, col, g, false);
  };
  for (const p of parts) {
    const col: Rgb = p.glow ? [255, 214, 120] : hexRgb(ROLE[p.color] ?? (p.color?.startsWith("#") ? p.color : ROLE.body));
    const y0 = p.y * H;
    const y1 = Math.min(H, (p.y + p.h) * H);
    const cx = p.x * W;
    const cz = p.z * D;
    const a = ((p.rot ?? 0) * Math.PI) / 180;
    const ca = Math.cos(a);
    const sa = Math.sin(a);
    const tf = (x: number, z: number): [number, number] => [cx + (x - cx) * ca - (z - cz) * sa, cz + (x - cx) * sa + (z - cz) * ca];
    const prism = (bot: [number, number][], top: [number, number][], yb: number, yt: number) => {
      const B = bot.map(([x, z]): Vec3 => [x, yb, z]);
      const T = top.map(([x, z]): Vec3 => [x, yt, z]);
      // top and bottom fans
      const gt = group++;
      const gb = group++;
      for (let i = 1; i < bot.length - 1; i++) {
        add(T[0], T[i], T[i + 1], col, gt, true);
        add(B[0], B[i + 1], B[i], col, gb, false);
      }
      return { B, T };
    };
    if (p.shape === "cyl" && (p.axis === "x" || p.axis === "z")) {
      const alongX = p.axis === "x";
      const len = alongX ? p.w * W : p.d * D;
      const r = Math.min(alongX ? p.d * D : p.w * W, y1 - y0) / 2;
      const cy = (y0 + y1) / 2;
      const n = 16;
      const pt = (t: number, i: number): Vec3 => {
        const q = (i / n) * Math.PI * 2;
        const across = Math.cos(q) * r;
        const up = cy + Math.sin(q) * r;
        return alongX ? [cx + t, up, cz + across] : [cx + across, up, cz + t];
      };
      const gs = group++;
      const g0 = group++;
      const g1 = group++;
      for (let i = 0; i < n; i++) {
        const a0 = pt(-len / 2, i);
        const a1 = pt(-len / 2, i + 1);
        const b0 = pt(len / 2, i);
        const b1 = pt(len / 2, i + 1);
        add(a0, b0, b1, col, gs, false);
        add(a0, b1, a1, col, gs, false);
        add(pt(-len / 2, 0), a1, a0, col, g0, false);
        add(pt(len / 2, 0), b0, b1, col, g1, false);
      }
      continue;
    }
    if (p.shape === "cyl") {
      const r = Math.min(p.w * W, p.d * D) / 2;
      const n = 20;
      const ring = Array.from({ length: n }, (_, i): [number, number] => [cx + Math.cos((i / n) * 2 * Math.PI) * r, cz + Math.sin((i / n) * 2 * Math.PI) * r]);
      const { B, T } = prism(ring, ring, y0, y1);
      const gs = group++;
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        add(B[i], T[i], T[j], col, gs, false);
        add(B[i], T[j], B[j], col, gs, false);
      }
      continue;
    }
    const x0 = (p.x - p.w / 2) * W;
    const x1 = (p.x + p.w / 2) * W;
    const z0 = (p.z - p.d / 2) * D;
    const z1 = (p.z + p.d / 2) * D;
    const bot = [tf(x0, z0), tf(x1, z0), tf(x1, z1), tf(x0, z1)];
    let top = bot;
    if (p.shape === "loft") {
      const tx = p.tx ?? p.x;
      const tz = p.tz ?? p.z;
      const tw = p.tw ?? p.w;
      const td = p.td ?? p.d;
      top = [tf((tx - tw / 2) * W, (tz - td / 2) * D), tf((tx + tw / 2) * W, (tz - td / 2) * D), tf((tx + tw / 2) * W, (tz + td / 2) * D), tf((tx - tw / 2) * W, (tz + td / 2) * D)];
    }
    const { B, T } = prism(bot, top, y0, y1);
    for (let i = 0; i < 4; i++) {
      const j = (i + 1) % 4;
      quad(B[i], B[j], T[j], T[i], col);
    }
  }
  return tris;
}

/** Draws triangles into a canvas with a z-buffer, flat light and outlines between faces. */
export function renderScene(canvas: HTMLCanvasElement, tris: readonly Tri[], size: readonly number[], view: PreviewView, opts: SceneOptions = {}): void {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const cw = Math.max(1, Math.round(canvas.clientWidth * dpr)) || canvas.width;
  const ch = Math.max(1, Math.round(canvas.clientHeight * dpr)) || canvas.height;
  if (canvas.width !== cw || canvas.height !== ch) {
    canvas.width = cw;
    canvas.height = ch;
  }
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const img = ctx.createImageData(cw, ch);
  const px = img.data;
  const zb = new Float32Array(cw * ch).fill(Infinity);
  const gb = new Int32Array(cw * ch).fill(-1);
  const [W, D, H] = size;
  const radius = Math.max(0.05, Math.hypot(W, D, H) / 2);
  const target: Vec3 = [0, H / 2, 0];
  const dist = radius * 3.1 * view.zoom;
  const eye: Vec3 = [
    target[0] + Math.sin(view.yaw) * Math.cos(view.pitch) * dist,
    target[1] + Math.sin(view.pitch) * dist,
    target[2] + Math.cos(view.yaw) * Math.cos(view.pitch) * dist,
  ];
  const fwd = norm(sub(target, eye));
  const right = norm(cross(fwd, [0, 1, 0]));
  const up = cross(right, fwd);
  const f = Math.min(cw, ch) / 2 / Math.tan((22 * Math.PI) / 180);
  const project = (v: Vec3): Vec3 => {
    const d = sub(v, eye);
    const z = dot(d, fwd);
    return [cw / 2 + (dot(d, right) * f) / z, ch / 2 - (dot(d, up) * f) / z, z];
  };
  const bg = opts.bg ?? [15, 23, 41];
  for (let i = 0; i < cw * ch; i++) {
    px[i * 4] = bg[0];
    px[i * 4 + 1] = bg[1];
    px[i * 4 + 2] = bg[2];
    px[i * 4 + 3] = 255;
  }
  const light = norm([0.45, 0.85, 0.6]);
  const draw = (t: Tri) => {
    const n = norm(cross(sub(t.v[1], t.v[0]), sub(t.v[2], t.v[0])));
    if (!Number.isFinite(n[0])) return;
    // two-sided: the normal turned to the viewer
    const nn: Vec3 = dot(n, sub(eye, t.v[0])) < 0 ? [-n[0], -n[1], -n[2]] : n;
    let shade = 0.48 + 0.52 * Math.max(0, dot(nn, light));
    if (t.top) shade = Math.min(1.12, shade * 1.1);
    const c = t.flat ? t.col : t.col.map((v) => Math.min(255, Math.round(v * shade)));
    const p = t.v.map(project);
    if (p.some((q) => q[2] <= 0.01)) return;
    const minx = Math.max(0, Math.floor(Math.min(p[0][0], p[1][0], p[2][0])));
    const maxx = Math.min(cw - 1, Math.ceil(Math.max(p[0][0], p[1][0], p[2][0])));
    const miny = Math.max(0, Math.floor(Math.min(p[0][1], p[1][1], p[2][1])));
    const maxy = Math.min(ch - 1, Math.ceil(Math.max(p[0][1], p[1][1], p[2][1])));
    const area = (p[1][0] - p[0][0]) * (p[2][1] - p[0][1]) - (p[2][0] - p[0][0]) * (p[1][1] - p[0][1]);
    if (Math.abs(area) < 1e-9) return;
    for (let y = miny; y <= maxy; y++) {
      for (let x = minx; x <= maxx; x++) {
        const sx = x + 0.5;
        const sy = y + 0.5;
        const w0 = ((p[1][0] - sx) * (p[2][1] - sy) - (p[2][0] - sx) * (p[1][1] - sy)) / area;
        const w1 = ((p[2][0] - sx) * (p[0][1] - sy) - (p[0][0] - sx) * (p[2][1] - sy)) / area;
        const w2 = 1 - w0 - w1;
        if (w0 < -1e-6 || w1 < -1e-6 || w2 < -1e-6) continue;
        // perspective-correct depth
        const z = 1 / (w0 / p[0][2] + w1 / p[1][2] + w2 / p[2][2]);
        const k = y * cw + x;
        // coplanar faces of two parts: the first one drawn keeps the pixel (no flicker)
        if (z < zb[k] - 1e-4 * z) {
          zb[k] = z;
          gb[k] = t.g;
          px[k * 4] = c[0];
          px[k * 4 + 1] = c[1];
          px[k * 4 + 2] = c[2];
        }
      }
    }
  };
  const accent = opts.accent ?? [55, 224, 255];
  // the floor: a soft plate under the item, with the front marked
  if (opts.floor !== false) {
    const m = Math.max(W, D) * 0.75 + 0.1;
    const fc = opts.floorCol ?? [27, 38, 62];
    const fl: Vec3[] = [
      [-m, -0.001, -m],
      [m, -0.001, -m],
      [m, -0.001, m],
      [-m, -0.001, m],
    ];
    draw({ v: [fl[0], fl[1], fl[2]], col: fc, g: -2, flat: true });
    draw({ v: [fl[0], fl[2], fl[3]], col: fc, g: -2, flat: true });
    const a = Math.max(0.06, Math.min(W, 0.4) * 0.25);
    const z0 = D / 2 + 0.05;
    draw({ v: [[-a, 0, z0], [a, 0, z0], [0, 0, z0 + a * 1.1]], col: accent, g: -3, flat: true });
  }
  for (const t of tris) draw(t);
  // outlines where the face changes: darkened, so they read on light and dark parts alike
  for (let y = 1; y < ch - 1; y++) {
    for (let x = 1; x < cw - 1; x++) {
      const k = y * cw + x;
      const g = gb[k];
      if (g < 0) continue;
      if (gb[k + 1] !== g || gb[k - 1] !== g || gb[k + cw] !== g || gb[k - cw] !== g) {
        px[k * 4] *= 0.5;
        px[k * 4 + 1] *= 0.5;
        px[k * 4 + 2] *= 0.55;
      }
    }
  }
  ctx.putImageData(img, 0, 0);
  if (opts.label && opts.floor !== false) {
    const p = project([0, 0, D / 2 + 0.05 + Math.max(0.06, Math.min(W, 0.4) * 0.25) * 1.6]);
    ctx.font = `${12 * dpr}px var(--fp3d-font, sans-serif)`;
    ctx.fillStyle = `rgb(${accent.join(",")})`;
    ctx.textAlign = "center";
    ctx.fillText(opts.label, p[0], p[1] + 12 * dpr);
  }
}

const UMLAUTS: Record<string, string> = { ä: "ae", ö: "oe", ü: "ue", ß: "ss" };

/** The id the backend gives a name (library.slug), to find an item of the same name before saving. */
export function slug(text: string): string {
  return String(text)
    .toLowerCase()
    .replace(/[äöüß]/g, (c) => UMLAUTS[c])
    .replace(/[^a-z0-9_-]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^[_-]+|[_-]+$/g, "")
    .slice(0, 32)
    .replace(/[_-]+$/, "");
}

/** A file name as a furniture name: "esstisch_eiche" → "Esstisch eiche". */
export function prettyName(text: string, fallback: string): string {
  const t = String(text || "").replace(/[_-]+/g, " ").trim();
  return t ? t[0].toUpperCase() + t.slice(1) : fallback;
}
