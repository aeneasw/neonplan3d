import assert from "node:assert/strict";
import { test } from "node:test";
import type { PackPart } from "../packs.ts";
import { partTriangles, prettyName, slug } from "./preview.ts";

const box: PackPart = { shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "wood" };

test("slug matches the backend's ids (library.slug)", () => {
  assert.equal(slug("Esstisch Eiche"), "esstisch_eiche");
  assert.equal(slug("Größe – Übergröße"), "groesse_uebergroesse");
  assert.equal(slug("  --Lampe--  "), "lampe");
  assert.equal(slug("a".repeat(40)), "a".repeat(32));
});

test("a file name becomes a furniture name", () => {
  assert.equal(prettyName("esstisch_eiche", "Möbel"), "Esstisch eiche");
  assert.equal(prettyName("", "Möbel"), "Möbel");
});

test("a box is 12 triangles inside the item's size", () => {
  const tris = partTriangles([box], [2, 1, 0.5]);
  assert.equal(tris.length, 12);
  for (const t of tris)
    for (const [x, y, z] of t.v) {
      assert.ok(Math.abs(x) <= 1 + 1e-9 && Math.abs(z) <= 0.5 + 1e-9, `${x} ${z}`);
      assert.ok(y >= 0 && y <= 0.5 + 1e-9, `${y}`);
    }
});

test("cylinders upright and lying, lofts and turned boxes are drawn", () => {
  const parts: PackPart[] = [
    { ...box, shape: "cyl" },
    { ...box, shape: "cyl", axis: "x" },
    { ...box, shape: "loft", tw: 0.5, td: 0.5 },
    { ...box, rot: 45 },
  ];
  const tris = partTriangles(parts, [1, 1, 1]);
  assert.ok(tris.length > 100);
  // every part has faces groups of its own (the outlines follow them)
  assert.ok(new Set(tris.map((t) => t.g)).size > 10);
});

test("lamp parts glow, colours come from roles or hex", () => {
  const [glow] = partTriangles([{ ...box, glow: true }], [1, 1, 1]);
  assert.deepEqual(glow.col, [255, 214, 120]);
  const [hex] = partTriangles([{ ...box, color: "#102030" }], [1, 1, 1]);
  assert.deepEqual(hex.col, [16, 32, 48]);
});
