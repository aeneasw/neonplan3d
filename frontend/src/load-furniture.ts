// The "Eigene Möbel" page: its bundle loads only when the page is opened.

import type * as FurnitureBundle from "./furniture/entry.ts";

/** Content hash of the own furniture bundle, set by the build (see build.mjs). */
declare const __FP3D_FURNITURE_HASH__: string;

let loading: Promise<typeof FurnitureBundle> | undefined;

export function loadFurniture(): Promise<typeof FurnitureBundle> {
  const url = new URL(`./neonplan3d-furniture.js?v=${__FP3D_FURNITURE_HASH__}`, new URL(import.meta.url)).href;
  loading ??= (import(/* @vite-ignore */ url) as Promise<typeof FurnitureBundle>).catch((err) => {
    loading = undefined;
    throw err;
  });
  return loading;
}
