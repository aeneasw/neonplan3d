// The "Eigene Möbel" page: upload a model from Blender, Rhino and co., look at it as NeonPlan will draw it, give it a
// name and a kind, and import it. The backend (own_furniture/) converts the model into parts and signs the one pack
// of all own furniture; the page imports that pack through the normal pack import. Admins only.
// Its texts live here (German and English): the other bundles have no room for them.

import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { importPack, removePack } from "../api.ts";
import type { PackItem, PackPart } from "../packs.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";
import { partTriangles, prettyName, renderScene, slug, START_VIEW, type PreviewView, type Tri } from "./preview.ts";

const WS = "neonplan3d/own_furniture";
const UPLOAD_URL = "/api/neonplan3d/own_furniture/upload";
const CHUNK = 8 * 1024 * 1024;
const ACCEPT = ".glb,.gltf,.bin,.obj,.mtl,.stl,.json,.fp3dpack";

type Edges = boolean | "faint" | "glow";

interface Options {
  max_parts: number;
  units: "auto" | "m" | "cm" | "mm" | "in";
  up: "auto" | "y" | "z";
  turn: number;
  edges: Edges;
}

interface Note {
  code: string;
  count?: number;
  unit?: string;
}

/** A converted model, as the backend answers. */
interface Converted {
  size: [number, number, number];
  parts: PackPart[];
  notes: Note[];
  glow: boolean;
  screen: boolean;
  unit?: string;
  up?: string;
}

interface Fields {
  name: string;
  group: string;
  room: string[];
  mount: "floor" | "surface" | "wall" | "ceiling";
  wall_y: number;
  light: string;
  electric: boolean;
  surface: boolean;
}

/** The item being made: a fresh upload (session, options) or an item of the library being edited. */
interface Draft {
  session?: string;
  editing?: string;
  options?: Options;
  result: Converted;
  objects?: number;
  fields: Fields;
  replaceChecked: boolean;
  converting: boolean;
}

interface State {
  active: boolean;
  error: string | null;
  detail: string;
  key_id: string;
  pack_id: string;
  items: PackItem[];
}

interface JsonEntry {
  item: PackItem;
  problem: string | null;
}

type ProcessResult = { kind: "json"; items: JsonEntry[] } | { kind: "model"; name: string; objects: number; result: Converted };
type PackResult = { pack: string | null; pack_id: string };

/** A failed call: from the websocket ({code, message}) or from the upload. */
interface Failure {
  code?: string;
  message?: string;
  detail?: string;
}

/** Home Assistant's frontend object brings an authenticated fetch (the upload is plain HTTP, not the websocket). */
type HassFetch = HomeAssistant & {
  fetchWithAuth?: (url: string, init?: RequestInit) => Promise<Response>;
  auth?: { data: { access_token: string } };
};

const TEXT = {
  de: {
    title: "Eigene Möbel",
    intro: "Möbel aus Blender, Rhino & Co.: Modell hochladen, Vorschau drehen, Name und Art wählen – NeonPlan baut es aus Quadern, Zylindern und schrägen Quadern nach (höchstens 60 Teile).",
    key_ok: "Schlüssel aktiv",
    key_off: "Schlüssel inaktiv",
    key_hint: "Dein eigener Schlüssel signiert nur deine eigenen Möbel – keine Pro-Funktionen.",
    inactive: "Der eigene Schlüssel ist nicht aktiv – neue Möbel lassen sich nicht übernehmen.",
    reason: {
      unsupported: "Diese NeonPlan-Version prüft Packs anders als erwartet.",
      not_restricted: "NeonPlan beschränkt Studio-Schlüssel nicht mehr wie erwartet – aus Sicherheitsgründen bleibt der Schlüssel aus.",
      self_test_failed: "Der Selbsttest ist fehlgeschlagen.",
    } as Record<string, string>,
    drop: "Modell hierher ziehen",
    or: "oder",
    choose: "Dateien wählen",
    formats: "GLB · glTF (+ .bin) · OBJ (+ .mtl) · STL · Pack-JSON",
    formats_hint: "Mehrere Objekte im Modell werden einzeln zu Teilen – am besten exportierst du Möbel mit getrennten Objekten (Beine, Platte, Schublade …).",
    uploading: "Lade hoch …",
    reading: "Lese das Modell …",
    converting: "Rechne um …",
    parts: (n: number) => `${n} ${n === 1 ? "Teil" : "Teile"}`,
    objects: (n: number) => `aus ${n} ${n === 1 ? "Objekt" : "Objekten"}`,
    size: "B × T × H",
    front: "vorne",
    drag: "Ziehen zum Drehen · Mausrad zum Zoomen",
    shape_title: "Form",
    detail: "Detailgrad",
    detail_hint: "Teile höchstens",
    unit: "Einheit",
    auto: "Automatisch",
    up: "Oben ist",
    turn: "Drehen",
    turn_hint: "Die Vorderseite gehört nach vorne – mit dem Rücken stellt NeonPlan Möbel an die Wand.",
    edges: "Kanten",
    edges_opts: { false: "keine", faint: "zart", true: "normal", glow: "leuchtend" } as Record<string, string>,
    item_title: "Möbel",
    name: "Name",
    kind: "Art",
    kind_none: "– ohne –",
    rooms: "Räume",
    mount: "Steht",
    mount_opts: { floor: "auf dem Boden", surface: "auf einem Möbel", wall: "an der Wand", ceiling: "an der Decke" } as Record<string, string>,
    wall_y: "Unterkante (m)",
    light: "Leuchte",
    light_none: "keine Leuchte",
    electric: "Elektrisch (Schalter/Leistung verknüpfbar)",
    surface: "Oberseite trägt andere Möbel",
    replace: (n: string) => `Vorhandenes „${n}“ ersetzen (Möbel im Plan übernehmen die neue Form)`,
    save: "In NeonPlan übernehmen",
    saving: "Übernehme …",
    discard: "Verwerfen",
    edit_note: "Bearbeiten ändert Name und Eigenschaften. Für eine neue Form das Modell neu hochladen.",
    saved: (n: string) => `„${n}“ ist übernommen – du findest es im Editor unter Möbel.`,
    json_title: "Möbel aus JSON",
    json_all: "Alle übernehmen",
    library: "Deine Möbel",
    library_empty: "Noch keine eigenen Möbel.",
    edit: "Bearbeiten",
    remove: "Entfernen",
    remove_q: (n: string) => `„${n}“ entfernen? Steht es im Plan, bleibt dort ein einfacher Kasten.`,
    removed: (n: string) => `„${n}“ entfernt.`,
    reimport: "Neu einspielen",
    reimported: "Alle eigenen Möbel neu eingespielt.",
    download: "Als .fp3dpack sichern",
    close: "Schließen",
    notes: {
      unit_guessed: (p: Note) => `Einheit geschätzt: ${p.unit} – unten änderbar`,
      bodies_found: (p: Note) => `${p.count} getrennte Körper erkannt`,
      decomposed: (p: Note) => `${p.count} ${p.count === 1 ? "Objekt" : "Objekte"} in Quader zerlegt`,
      dropped_small: (p: Note) => `${p.count} kleine Teile weggelassen – Detailgrad erhöhen`,
      coarse: (p: Note) => `${p.count} ${p.count === 1 ? "Objekt" : "Objekte"} nur grob – Detailgrad erhöhen`,
      texture_colours: (p: Note) => `${p.count}× nur Textur: Farbe unbekannt, Standardfarbe`,
    } as Record<string, (p: Note) => string>,
    errors: {
      unsupported_format: (d: string) =>
        ["fbx", "blend", "3dm", "dae", "usdz", "step", "3mf", "ply"].includes(d)
          ? `.${d} kann ich nicht lesen. Bitte als GLB/glTF exportieren (Blender: Datei → Exportieren → glTF 2.0; Rhino: Speichern unter → glTF) – OBJ und STL gehen auch.`
          : "Unbekanntes Dateiformat. Möglich sind GLB, glTF, OBJ, STL und Pack-JSON.",
      compressed: () => "Das Modell ist komprimiert (Draco/Meshopt). Bitte beim Export die Kompression ausschalten.",
      missing_file: (d: string) => `Zum Modell gehört noch „${d}“ – bitte zusammen mit dem Modell auswählen.`,
      too_many_triangles: (d: string) => `Das Modell hat ${d} Dreiecke – zu viele. Bitte vereinfachen (Blender: Decimate).`,
      broken_file: (d: string) => `Die Datei lässt sich nicht lesen${d ? ` (${d})` : ""}.`,
      no_triangles: () => "Im Modell sind keine Flächen.",
      too_large: (d: string) => `Das Modell ist ${d} groß (NeonPlan: höchstens 10 m). Stimmt die Einheit?`,
      too_small: (d: string) => `Das Modell ist nur ${d} groß. Stimmt die Einheit?`,
      gltf_version: () => "Nur glTF 2.0 wird unterstützt.",
      no_items: (d: string) => `In ${d} stehen keine Möbel.`,
      invalid: (d: string) => `NeonPlan lehnt das Möbel ab: ${d}`,
      full: () => "Höchstens 200 eigene Möbel.",
      no_upload: () => "Der Upload ist abgelaufen – bitte noch einmal hochladen.",
      upload: (d: string) => `Hochladen fehlgeschlagen: ${d}`,
      bad_signature: () => "NeonPlan hat die Signatur abgelehnt – Home Assistant neu starten.",
      unknown_publisher: () => "NeonPlan kennt den Schlüssel nicht – Home Assistant neu starten.",
      unknown_command: () => "Home Assistant läuft noch mit der alten NeonPlan-Version – bitte neu starten.",
      not_loaded: () => "NeonPlan 3D ist nicht eingerichtet.",
      numpy_missing: () => "Diesem Home Assistant fehlt das Python-Paket numpy, das Modelle liest. Pack-JSON geht trotzdem.",
    } as Record<string, (d: string) => string>,
    kinds: {
      sofa: "Sofas",
      seating: "Sitzmöbel",
      table: "Tische",
      storage: "Schränke & Regale",
      bed: "Betten",
      kitchen: "Küche",
      appliance: "Geräte",
      bath: "Bad",
      lamp: "Leuchten",
      media: "Medien",
      office: "Büro",
      tech: "Technik",
      heating: "Heizung & Klima",
      energy: "Energie",
      household: "Haushalt",
      deco: "Deko",
      plant: "Pflanzen",
      outdoor: "Außen",
      kids: "Kinder",
      sport: "Sport",
      pets: "Haustiere",
      vehicle: "Fahrzeuge",
      stairs: "Treppen",
      architecture: "Architektur",
    } as Record<string, string>,
    rooms_opts: {
      living: "Wohnzimmer",
      dining: "Esszimmer",
      kitchen: "Küche",
      bedroom: "Schlafzimmer",
      kids: "Kinderzimmer",
      bath: "Bad",
      office: "Büro",
      hall: "Flur",
      utility: "Hauswirtschaft",
      garage: "Garage",
      garden: "Garten",
      hobby: "Hobby",
    } as Record<string, string>,
    lights: {
      ceiling: "Deckenleuchte",
      downlight: "Einbauspot",
      spot: "Spot",
      panel: "LED-Panel",
      pendant: "Pendelleuchte",
      floor: "Stehlampe",
      uplight: "Deckenfluter",
      table: "Tischlampe",
      wall: "Wandleuchte",
      strip: "LED-Streifen",
      bollard: "Wegleuchte",
      garden: "Garten-Spot",
    } as Record<string, string>,
  },
  en: {
    title: "Own furniture",
    intro: "Furniture from Blender, Rhino and co.: upload a model, turn the preview, pick a name and a kind – NeonPlan rebuilds it from boxes, cylinders and sloped boxes (60 parts at most).",
    key_ok: "Key active",
    key_off: "Key inactive",
    key_hint: "Your own key signs your own furniture only – no Pro features.",
    inactive: "The own key is not active – new furniture cannot be imported.",
    reason: {
      unsupported: "This NeonPlan version checks packs differently than expected.",
      not_restricted: "NeonPlan no longer limits studio keys as expected – for safety the key stays off.",
      self_test_failed: "The self-test failed.",
    },
    drop: "Drop a model here",
    or: "or",
    choose: "Choose files",
    formats: "GLB · glTF (+ .bin) · OBJ (+ .mtl) · STL · pack JSON",
    formats_hint: "Every object of the model becomes a part of its own – export furniture with separate objects (legs, top, drawer …).",
    uploading: "Uploading …",
    reading: "Reading the model …",
    converting: "Converting …",
    parts: (n: number) => `${n} ${n === 1 ? "part" : "parts"}`,
    objects: (n: number) => `from ${n} ${n === 1 ? "object" : "objects"}`,
    size: "W × D × H",
    front: "front",
    drag: "Drag to turn · wheel to zoom",
    shape_title: "Shape",
    detail: "Detail",
    detail_hint: "parts at most",
    unit: "Unit",
    auto: "Automatic",
    up: "Up is",
    turn: "Turn",
    turn_hint: "The front belongs to the front – NeonPlan puts furniture with its back to the wall.",
    edges: "Edges",
    edges_opts: { false: "none", faint: "faint", true: "normal", glow: "glowing" },
    item_title: "Furniture",
    name: "Name",
    kind: "Kind",
    kind_none: "– none –",
    rooms: "Rooms",
    mount: "Stands",
    mount_opts: { floor: "on the floor", surface: "on furniture", wall: "on the wall", ceiling: "on the ceiling" },
    wall_y: "Bottom (m)",
    light: "Lamp",
    light_none: "no lamp",
    electric: "Electric (switch/power can be linked)",
    surface: "Its top carries other furniture",
    replace: (n: string) => `Replace the existing “${n}” (furniture in the plan takes the new shape)`,
    save: "Import into NeonPlan",
    saving: "Importing …",
    discard: "Discard",
    edit_note: "Editing changes name and properties. For a new shape, upload the model again.",
    saved: (n: string) => `“${n}” is imported – you find it in the editor under Furniture.`,
    json_title: "Furniture from JSON",
    json_all: "Import all",
    library: "Your furniture",
    library_empty: "No own furniture yet.",
    edit: "Edit",
    remove: "Remove",
    remove_q: (n: string) => `Remove “${n}”? In the plan it stays as a plain box.`,
    removed: (n: string) => `“${n}” removed.`,
    reimport: "Import again",
    reimported: "All own furniture imported again.",
    download: "Save as .fp3dpack",
    close: "Close",
    notes: {
      unit_guessed: (p: Note) => `Unit guessed: ${p.unit} – change it below`,
      bodies_found: (p: Note) => `${p.count} separate bodies found`,
      decomposed: (p: Note) => `${p.count} ${p.count === 1 ? "object" : "objects"} split into boxes`,
      dropped_small: (p: Note) => `${p.count} small parts left out – raise the detail`,
      coarse: (p: Note) => `${p.count} ${p.count === 1 ? "object" : "objects"} only coarse – raise the detail`,
      texture_colours: (p: Note) => `${p.count}× texture only: colour unknown, default colour`,
    },
    errors: {
      unsupported_format: (d: string) =>
        d
          ? `.${d} cannot be read. Please export as GLB/glTF (Blender: File → Export → glTF 2.0; Rhino: Save As → glTF) – OBJ and STL work too.`
          : "Unknown file format. GLB, glTF, OBJ, STL and pack JSON work.",
      compressed: () => "The model is compressed (Draco/Meshopt). Please turn compression off when exporting.",
      missing_file: (d: string) => `The model needs “${d}” too – please choose it together with the model.`,
      too_many_triangles: (d: string) => `The model has ${d} triangles – too many. Please simplify it (Blender: Decimate).`,
      broken_file: (d: string) => `The file cannot be read${d ? ` (${d})` : ""}.`,
      no_triangles: () => "The model has no faces.",
      too_large: (d: string) => `The model is ${d} (NeonPlan: 10 m at most). Is the unit right?`,
      too_small: (d: string) => `The model is only ${d}. Is the unit right?`,
      gltf_version: () => "Only glTF 2.0 is supported.",
      no_items: (d: string) => `${d} holds no furniture.`,
      invalid: (d: string) => `NeonPlan refuses the furniture: ${d}`,
      full: () => "200 own pieces of furniture at most.",
      no_upload: () => "The upload expired – please upload again.",
      upload: (d: string) => `Upload failed: ${d}`,
      bad_signature: () => "NeonPlan refused the signature – restart Home Assistant.",
      unknown_publisher: () => "NeonPlan does not know the key – restart Home Assistant.",
      unknown_command: () => "Home Assistant still runs the old NeonPlan version – please restart it.",
      not_loaded: () => "NeonPlan 3D is not set up.",
      numpy_missing: () => "This Home Assistant lacks the Python package numpy, which reads models. Pack JSON still works.",
    },
    kinds: {
      sofa: "Sofas",
      seating: "Seating",
      table: "Tables",
      storage: "Storage",
      bed: "Beds",
      kitchen: "Kitchen",
      appliance: "Appliances",
      bath: "Bath",
      lamp: "Lamps",
      media: "Media",
      office: "Office",
      tech: "Tech",
      heating: "Heating & climate",
      energy: "Energy",
      household: "Household",
      deco: "Decoration",
      plant: "Plants",
      outdoor: "Outdoor",
      kids: "Kids",
      sport: "Sport",
      pets: "Pets",
      vehicle: "Vehicles",
      stairs: "Stairs",
      architecture: "Architecture",
    },
    rooms_opts: {
      living: "Living room",
      dining: "Dining room",
      kitchen: "Kitchen",
      bedroom: "Bedroom",
      kids: "Kids' room",
      bath: "Bathroom",
      office: "Office",
      hall: "Hall",
      utility: "Utility",
      garage: "Garage",
      garden: "Garden",
      hobby: "Hobby",
    },
    lights: {
      ceiling: "Ceiling lamp",
      downlight: "Downlight",
      spot: "Spot",
      panel: "LED panel",
      pendant: "Pendant",
      floor: "Floor lamp",
      uplight: "Uplight",
      table: "Table lamp",
      wall: "Wall lamp",
      strip: "LED strip",
      bollard: "Path light",
      garden: "Garden spot",
    },
  },
};

type Texts = typeof TEXT.de;

function sessionId(): string {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  const b = new Uint8Array(16);
  window.crypto.getRandomValues(b);
  return Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("");
}

function defaultFields(name: string, r: Converted): Fields {
  return {
    name,
    group: r.glow ? "lamp" : r.screen ? "media" : "",
    room: [],
    mount: "floor",
    wall_y: 1.0,
    light: r.glow ? (r.size[2] > 1.2 ? "floor" : "table") : "",
    electric: r.screen,
    surface: false,
  };
}

export class OwnFurniture extends LitElement {
  static properties = {
    hass: { attribute: false },
    _state: { state: true },
    _busy: { state: true },
    _message: { state: true },
    _draft: { state: true },
    _json: { state: true },
    _over: { state: true },
  };

  declare hass: HomeAssistant | undefined;
  /** Whether the key works, and the library; null until loaded. */
  private declare _state: State | null;
  /** What runs right now (shown on the busy button or the drop field); "" when idle. */
  private declare _busy: string;
  private declare _message: { ok: boolean; text: string } | null;
  private declare _draft: Draft | null;
  /** Items of an uploaded pack JSON, waiting to be taken over. */
  private declare _json: JsonEntry[] | null;
  /** A file is dragged over the drop field. */
  private declare _over: boolean;
  private view: PreviewView = { ...START_VIEW };
  private convertTimer: ReturnType<typeof setTimeout> | undefined;
  private started = false;
  /** The preview's triangles, made again only when the result changes. */
  private tris: { of: Converted; tris: Tri[] } | null = null;
  /** What the canvases show, so a render that changed neither does not draw them again. */
  private drawn: { result: Converted | null; items: PackItem[] | null } = { result: null, items: null };

  constructor() {
    super();
    this._state = null;
    this._busy = "";
    this._message = null;
    this._draft = null;
    this._json = null;
    this._over = false;
  }

  private get t(): Texts {
    return (this.hass?.language ?? navigator.language).startsWith("de") ? TEXT.de : (TEXT.en as Texts);
  }

  protected willUpdate(changed: PropertyValues): void {
    if (changed.has("hass") && this.hass && !this.started) {
      this.started = true;
      void this.loadState();
    }
  }

  protected updated(): void {
    const d = this._draft;
    if (d && this.drawn.result !== d.result) this.drawPreview();
    if (!d) this.drawn.result = null;
    const items = this._state?.items ?? null;
    if (items && this.drawn.items !== items) {
      this.drawn.items = items;
      this.shadowRoot?.querySelectorAll<HTMLCanvasElement>("canvas[data-thumb]").forEach((cv) => {
        const it = items[Number(cv.dataset.thumb)];
        if (it) renderScene(cv, partTriangles(it.parts, it.size), it.size, { ...START_VIEW, zoom: 0.85 }, { floor: false });
      });
    }
  }

  private async ws<T>(msg: Record<string, unknown>): Promise<T> {
    if (!this.hass) throw { code: "not_loaded" };
    return this.hass.callWS<T>(msg);
  }

  private async loadState(): Promise<void> {
    try {
      this._state = await this.ws<State>({ type: `${WS}/state` });
    } catch (err) {
      const e = err as Failure;
      this._state = { active: false, error: e.code ?? "not_loaded", detail: e.message ?? "", key_id: "", pack_id: "", items: [] };
    }
  }

  private errorText(err: unknown): string {
    const e = (err ?? {}) as Failure;
    const code = e.code ?? "unknown";
    const detail = e.detail ?? e.message ?? "";
    const fn = this.t.errors[code];
    return fn ? fn(detail) : `${code}${detail && detail !== code ? `: ${detail}` : ""}`;
  }

  private say(ok: boolean, text: string): void {
    this._message = { ok, text };
  }

  private itemName(item: PackItem | undefined): string {
    const n = item?.name as Record<string, string> | string | undefined;
    if (n && typeof n === "object") return n[this.t === TEXT.de ? "de" : "en"] || Object.values(n)[0] || "";
    return n || item?.id || "";
  }

  private existing(name: string): PackItem | undefined {
    const id = slug(name);
    return this._state?.items.find((i) => i.id === id);
  }

  // --- upload ------------------------------------------------------------------------------------

  private async upload(list: FileList | null | undefined): Promise<void> {
    const files = [...(list ?? [])];
    if (!files.length || !this.hass || this._busy) return;
    const hass = this.hass as HassFetch;
    this._message = null;
    this._json = null;
    const session = sessionId();
    const total = files.reduce((s, f) => s + f.size, 0) || 1;
    let sent = 0;
    try {
      for (const file of files) {
        for (let off = 0; off < Math.max(file.size, 1); off += CHUNK) {
          this._busy = `${this.t.uploading} ${Math.round((sent / total) * 100)} %`;
          const body = file.slice(off, off + CHUNK);
          const url = `${UPLOAD_URL}?session=${encodeURIComponent(session)}&file=${encodeURIComponent(file.name)}&offset=${off}`;
          const init: RequestInit = { method: "POST", body, headers: { "Content-Type": "application/octet-stream" } };
          const res = hass.fetchWithAuth
            ? await hass.fetchWithAuth(url, init)
            : await fetch(url, { ...init, headers: { "Content-Type": "application/octet-stream", Authorization: `Bearer ${hass.auth?.data.access_token ?? ""}` } });
          if (!res.ok) {
            let detail = `${res.status}`;
            try {
              detail = ((await res.json()) as { message?: string }).message || detail;
            } catch {
              // not JSON
            }
            throw { code: res.status === 404 ? "unknown_command" : "upload", detail };
          }
          sent += body.size;
          if (file.size === 0) break;
        }
      }
      this._busy = this.t.reading;
      const res = await this.ws<ProcessResult>({ type: `${WS}/process`, session, options: {} });
      if (res.kind === "json") {
        this._json = res.items;
        this._draft = null;
      } else {
        this._draft = {
          session,
          options: { max_parts: 40, units: "auto", up: "auto", turn: 0, edges: "faint" },
          result: res.result,
          objects: res.objects,
          fields: defaultFields(prettyName(res.name, this.t.item_title), res.result),
          replaceChecked: false,
          converting: false,
        };
        this.view = { ...START_VIEW };
      }
      this._busy = "";
    } catch (err) {
      this._busy = "";
      this.say(false, this.errorText(err));
    }
  }

  /** Convert the upload again after an option changed (a short pause first: a slider sends many changes). */
  private reconvert(): void {
    const d = this._draft;
    if (!d?.session || !d.options) return;
    this.requestUpdate();
    clearTimeout(this.convertTimer);
    this.convertTimer = setTimeout(async () => {
      d.converting = true;
      this.requestUpdate();
      try {
        const res = await this.ws<{ result: Converted }>({ type: `${WS}/convert`, session: d.session, options: d.options });
        if (this._draft === d) d.result = res.result;
      } catch (err) {
        this.say(false, this.errorText(err));
      }
      d.converting = false;
      this.requestUpdate();
    }, 250);
  }

  // --- save / remove -----------------------------------------------------------------------------

  /** Import the new pack (or remove it when no item is left); the panel then loads the packs again. */
  private async importOwnPack(res: PackResult): Promise<void> {
    if (!this.hass) return;
    if (res.pack) await importPack(this.hass, res.pack);
    else {
      try {
        await removePack(this.hass, res.pack_id);
      } catch (err) {
        if ((err as Failure).code !== "not_found") throw err;
      }
    }
    this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true }));
  }

  private async save(): Promise<void> {
    const d = this._draft;
    if (!d || this._busy) return;
    const f = d.fields;
    const item: Record<string, unknown> = {
      name: f.name.trim() || this.t.item_title,
      size: d.result.size,
      parts: d.result.parts,
      room: f.room,
      mount: f.mount,
    };
    if (f.group) item.group = f.group;
    if (f.mount === "wall") item.wall_y = Number(f.wall_y) || 0;
    if (f.light) item.light = f.light;
    if (f.electric) item.electric = true;
    if (f.surface) item.surface = true;
    const replace = d.editing ?? (d.replaceChecked ? this.existing(String(item.name))?.id : null);
    this._busy = this.t.saving;
    try {
      const res = await this.ws<PackResult>({ type: `${WS}/save`, item, replace: replace ?? null });
      await this.importOwnPack(res);
      this._draft = null;
      await this.loadState();
      this.say(true, this.t.saved(String(item.name)));
    } catch (err) {
      this.say(false, this.errorText(err));
    }
    this._busy = "";
  }

  private async saveJson(): Promise<void> {
    const entries = (this._json ?? []).filter((i) => !i.problem);
    if (!entries.length || this._busy) return;
    this._busy = this.t.saving;
    try {
      let last: PackResult | null = null;
      for (const entry of entries) last = await this.ws<PackResult>({ type: `${WS}/save`, item: entry.item });
      if (last) await this.importOwnPack(last);
      this._json = null;
      await this.loadState();
      this.say(true, this.t.saved(entries.map((i) => this.itemName(i.item)).join(", ")));
    } catch (err) {
      this.say(false, this.errorText(err));
    }
    this._busy = "";
  }

  private async removeItem(item: PackItem): Promise<void> {
    const name = this.itemName(item);
    if (this._busy || !confirm(this.t.remove_q(name))) return;
    this._busy = "…";
    try {
      await this.importOwnPack(await this.ws<PackResult>({ type: `${WS}/remove`, item_id: item.id }));
      if (this._draft?.editing === item.id) this._draft = null;
      await this.loadState();
      this.say(true, this.t.removed(name));
    } catch (err) {
      this.say(false, this.errorText(err));
    }
    this._busy = "";
  }

  private async reimport(): Promise<void> {
    try {
      await this.importOwnPack(await this.ws<PackResult>({ type: `${WS}/pack` }));
      this.say(true, this.t.reimported);
    } catch (err) {
      this.say(false, this.errorText(err));
    }
  }

  private async download(): Promise<void> {
    try {
      const res = await this.ws<PackResult>({ type: `${WS}/pack` });
      if (!res.pack) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([res.pack], { type: "application/json" }));
      a.download = "eigene-moebel.fp3dpack";
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    } catch (err) {
      this.say(false, this.errorText(err));
    }
  }

  private editItem(item: PackItem): void {
    this._json = null;
    this._message = null;
    this._draft = {
      editing: item.id,
      result: { size: item.size, parts: item.parts, notes: [], glow: false, screen: false },
      fields: {
        name: this.itemName(item),
        group: item.group ?? "",
        room: item.room ?? [],
        mount: item.mount ?? "floor",
        wall_y: item.wall_y ?? 1.0,
        light: item.light ?? "",
        electric: !!item.electric,
        surface: !!item.surface,
      },
      replaceChecked: false,
      converting: false,
    };
    this.view = { ...START_VIEW };
    void this.updateComplete.then(() => this.shadowRoot?.querySelector(".fp3d-of-editor")?.scrollIntoView({ behavior: "smooth" }));
  }

  // --- preview -----------------------------------------------------------------------------------

  private drawPreview(): void {
    const canvas = this.shadowRoot?.querySelector<HTMLCanvasElement>("#preview");
    const d = this._draft;
    if (!canvas || !d) return;
    if (this.tris?.of !== d.result) this.tris = { of: d.result, tris: partTriangles(d.result.parts, d.result.size) };
    this.drawn.result = d.result;
    renderScene(canvas, this.tris.tris, d.result.size, this.view, { label: this.t.front });
  }

  private dragStart(ev: PointerEvent): void {
    const canvas = ev.currentTarget as HTMLCanvasElement;
    const start = { x: ev.clientX, y: ev.clientY, yaw: this.view.yaw, pitch: this.view.pitch };
    canvas.setPointerCapture(ev.pointerId);
    const move = (e: PointerEvent) => {
      this.view.yaw = start.yaw - (e.clientX - start.x) * 0.01;
      this.view.pitch = Math.max(-0.2, Math.min(1.45, start.pitch + (e.clientY - start.y) * 0.01));
      this.drawPreview();
    };
    const end = () => {
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerup", end);
      canvas.removeEventListener("pointercancel", end);
    };
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerup", end);
    canvas.addEventListener("pointercancel", end);
  }

  private wheel(ev: WheelEvent): void {
    ev.preventDefault();
    this.view.zoom = Math.max(0.4, Math.min(3, this.view.zoom * (ev.deltaY > 0 ? 1.1 : 0.9)));
    this.drawPreview();
  }

  // --- render ------------------------------------------------------------------------------------

  protected render() {
    const t = this.t;
    const st = this._state;
    return html`<div class="fp3d-of">
      <header class="fp3d-of-head">
        <h2>${t.title}</h2>
        ${st
          ? html`<span class="fp3d-of-pill ${st.active ? "" : "fp3d-of-off"}" title=${`${t.key_hint} ${st.key_id}`}>${st.active ? "●" : "○"} ${st.active ? t.key_ok : t.key_off}</span>`
          : nothing}
        <p class="fp3d-sub">${t.intro}</p>
      </header>
      ${st && !st.active
        ? html`<section class="fp3d-ext-card fp3d-of-warn">
            <b>${t.inactive}</b>
            <div>${t.reason[st.error ?? ""] ?? this.errorText({ code: st.error ?? "", detail: "" })}</div>
            ${st.detail ? html`<code>${st.detail}</code>` : nothing}
          </section>`
        : nothing}
      ${this._message
        ? html`<section class="fp3d-ext-card fp3d-of-msg ${this._message.ok ? "fp3d-of-ok" : "fp3d-of-bad"}">
            ${this._message.text}
            <button class="fp3d-of-x" title=${t.close} aria-label=${t.close} @click=${() => (this._message = null)}>×</button>
          </section>`
        : nothing}
      <div class="fp3d-of-grid">
        <div>${this._draft ? this.renderDraft(this._draft) : this._json ? this.renderJson(this._json) : this.renderDrop()}</div>
        <div>${this.renderLibrary()}</div>
      </div>
    </div>`;
  }

  private renderDrop() {
    const t = this.t;
    const drop = (ev: DragEvent) => {
      ev.preventDefault();
      this._over = false;
      void this.upload(ev.dataTransfer?.files);
    };
    return html`<section
      class="fp3d-ext-card fp3d-of-drop ${this._over ? "fp3d-of-over" : ""}"
      @dragover=${(ev: DragEvent) => (ev.preventDefault(), (this._over = true))}
      @dragleave=${() => (this._over = false)}
      @drop=${drop}
    >
      <div class="fp3d-of-big">📦</div>
      ${this._busy
        ? html`<div>${this._busy}</div>
            <div class="fp3d-of-bar"><div></div></div>`
        : html`<div class="fp3d-of-drop-title">${t.drop}</div>
            <div class="fp3d-sub">${t.or}</div>
            <label class="fp3d-btn fp3d-primary">
              <input type="file" multiple accept=${ACCEPT} hidden @change=${(ev: Event) => void this.upload((ev.target as HTMLInputElement).files)} />
              ${t.choose}
            </label>
            <div class="fp3d-of-formats">${t.formats}</div>
            <div class="fp3d-sub fp3d-of-small">${t.formats_hint}</div>`}
    </section>`;
  }

  private renderDraft(d: Draft) {
    const t = this.t;
    const r = d.result;
    const f = d.fields;
    const o = d.options;
    const lang = this.hass?.language ?? "de";
    const m = (n: number) => n.toLocaleString(lang, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const existing = d.editing ? undefined : this.existing(f.name);
    const set = (patch: Partial<Fields>) => {
      d.fields = { ...f, ...patch };
      this.requestUpdate();
    };
    const option = (patch: Partial<Options>) => {
      if (!d.options) return;
      d.options = { ...d.options, ...patch };
      this.reconvert();
    };
    const select = (value: string, opts: [string, string][], change: (v: string) => void) =>
      html`<select @change=${(ev: Event) => change((ev.target as HTMLSelectElement).value)}>
        ${opts.map(([v, l]) => html`<option value=${v} ?selected=${v === value}>${l}</option>`)}
      </select>`;
    const notes = r.notes.map((n) => t.notes[n.code]).filter(Boolean);
    return html`<section class="fp3d-ext-card fp3d-of-editor">
      <div class="fp3d-of-preview-wrap">
        <canvas id="preview" class="fp3d-of-preview" @pointerdown=${this.dragStart} @wheel=${this.wheel}></canvas>
        ${d.converting || this._busy ? html`<div class="fp3d-of-overlay">${this._busy || t.converting}</div>` : nothing}
      </div>
      <div class="fp3d-of-info">
        <b>${t.parts(r.parts.length)}</b> · ${m(r.size[0])} × ${m(r.size[1])} × ${m(r.size[2])} m <span class="fp3d-sub">(${t.size})</span>
        ${d.objects ? html`<span class="fp3d-sub"> · ${t.objects(d.objects)}</span>` : nothing}
      </div>
      <div class="fp3d-sub fp3d-of-small fp3d-of-center">${t.drag}</div>
      ${notes.length ? html`<div class="fp3d-of-chips fp3d-of-center">${r.notes.map((n) => (t.notes[n.code] ? html`<span class="fp3d-of-note">${t.notes[n.code](n)}</span>` : nothing))}</div>` : nothing}

      ${o
        ? html`<h3>${t.shape_title}</h3>
            <label class="fp3d-field">
              <span>${t.detail}: <b>${o.max_parts}</b> ${t.detail_hint}</span>
              <input type="range" min="1" max="60" .value=${String(o.max_parts)} @input=${(ev: Event) => option({ max_parts: Number((ev.target as HTMLInputElement).value) })} />
            </label>
            <div class="fp3d-of-row">
              <label class="fp3d-field"
                >${t.unit}
                ${select(o.units, [["auto", `${t.auto}${o.units === "auto" && r.unit ? ` (${r.unit})` : ""}`], ["m", "m"], ["cm", "cm"], ["mm", "mm"], ["in", "inch"]], (v) => option({ units: v as Options["units"] }))}
              </label>
              <label class="fp3d-field"
                >${t.up}
                ${select(o.up, [["auto", `${t.auto}${o.up === "auto" && r.up ? ` (${r.up.toUpperCase()})` : ""}`], ["y", "Y"], ["z", "Z"]], (v) => option({ up: v as Options["up"] }))}
              </label>
              <label class="fp3d-field"
                >${t.edges}
                ${select(String(o.edges), Object.entries(t.edges_opts), (v) => option({ edges: v === "true" ? true : v === "false" ? false : (v as Edges) }))}
              </label>
              <div class="fp3d-field">
                <span>${t.turn}</span>
                <button class="fp3d-btn" title=${t.turn_hint} @click=${() => option({ turn: (o.turn + 90) % 360 })}>↻ 90°</button>
              </div>
            </div>`
        : html`<p class="fp3d-sub fp3d-of-small">${t.edit_note}</p>`}

      <h3>${t.item_title}</h3>
      <div class="fp3d-of-row">
        <label class="fp3d-field fp3d-of-grow">${t.name}<input type="text" maxlength="80" .value=${f.name} @input=${(ev: Event) => set({ name: (ev.target as HTMLInputElement).value })} /></label>
        <label class="fp3d-field">${t.kind}${select(f.group, [["", t.kind_none], ...Object.entries(t.kinds)], (v) => set({ group: v }))}</label>
      </div>
      <div class="fp3d-field">
        ${t.rooms}
        <div class="fp3d-of-chips">
          ${Object.entries(t.rooms_opts).map(
            ([k, l]) => html`<button class="fp3d-chip" aria-pressed=${f.room.includes(k)} @click=${() => set({ room: f.room.includes(k) ? f.room.filter((x) => x !== k) : [...f.room, k] })}>${l}</button>`,
          )}
        </div>
      </div>
      <div class="fp3d-of-row">
        <label class="fp3d-field">${t.mount}${select(f.mount, Object.entries(t.mount_opts), (v) => set({ mount: v as Fields["mount"] }))}</label>
        ${f.mount === "wall"
          ? html`<label class="fp3d-field"
              >${t.wall_y}<input type="number" min="0" max="3" step="0.05" .value=${String(f.wall_y)} @input=${(ev: Event) => set({ wall_y: Number((ev.target as HTMLInputElement).value) })}
            /></label>`
          : nothing}
        <label class="fp3d-field">${t.light}${select(f.light, [["", t.light_none], ...Object.entries(t.lights)], (v) => set({ light: v, group: v && !f.group ? "lamp" : f.group }))}</label>
      </div>
      <label class="fp3d-of-check"><input type="checkbox" .checked=${f.electric} @change=${(ev: Event) => set({ electric: (ev.target as HTMLInputElement).checked })} /> ${t.electric}</label>
      <label class="fp3d-of-check"><input type="checkbox" .checked=${f.surface} @change=${(ev: Event) => set({ surface: (ev.target as HTMLInputElement).checked })} /> ${t.surface}</label>
      ${existing
        ? html`<label class="fp3d-of-check fp3d-of-replace"
            ><input type="checkbox" .checked=${d.replaceChecked} @change=${(ev: Event) => ((d.replaceChecked = (ev.target as HTMLInputElement).checked), this.requestUpdate())} />
            ${t.replace(this.itemName(existing))}</label
          >`
        : nothing}
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${() => (this._draft = null)}>${t.discard}</button>
        <button class="fp3d-btn fp3d-primary" ?disabled=${!this._state?.active || !!this._busy || d.converting} @click=${() => void this.save()}>${this._busy || t.save}</button>
      </div>
    </section>`;
  }

  private renderJson(entries: JsonEntry[]) {
    const t = this.t;
    return html`<section class="fp3d-ext-card">
      <h3>${t.json_title}</h3>
      ${entries.map(
        (i) => html`<div class="fp3d-of-lib-row">
          <div class="fp3d-of-grow">
            <b>${this.itemName(i.item)}</b>
            ${i.problem ? html`<div class="fp3d-of-bad fp3d-of-small">${t.errors.invalid(i.problem)}</div>` : html`<div class="fp3d-sub fp3d-of-small">${t.parts((i.item.parts ?? []).length)}</div>`}
          </div>
        </div>`,
      )}
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${() => (this._json = null)}>${t.discard}</button>
        <button class="fp3d-btn fp3d-primary" ?disabled=${!this._state?.active || !!this._busy || !entries.some((i) => !i.problem)} @click=${() => void this.saveJson()}>
          ${this._busy || t.json_all}
        </button>
      </div>
    </section>`;
  }

  private renderLibrary() {
    const t = this.t;
    const items = this._state?.items ?? [];
    const lang = this.hass?.language ?? "de";
    const m = (n: number) => n.toLocaleString(lang, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const active = !!this._state?.active;
    return html`<section class="fp3d-ext-card">
      <h3>${t.library} <span class="fp3d-sub">(${items.length})</span></h3>
      ${items.length
        ? items.map(
            (i, k) => html`<div class="fp3d-of-lib-row">
              <canvas class="fp3d-of-thumb" data-thumb=${k}></canvas>
              <div class="fp3d-of-grow">
                <b>${this.itemName(i)}</b>
                <div class="fp3d-sub fp3d-of-small">${m(i.size[0])} × ${m(i.size[1])} × ${m(i.size[2])} m · ${t.parts(i.parts.length)}${i.group ? ` · ${t.kinds[i.group] ?? i.group}` : ""}</div>
              </div>
              <button class="fp3d-of-icon" title=${t.edit} aria-label=${t.edit} @click=${() => this.editItem(i)}>✎</button>
              <button class="fp3d-of-icon" title=${t.remove} aria-label=${t.remove} ?disabled=${!active} @click=${() => void this.removeItem(i)}>🗑</button>
            </div>`,
          )
        : html`<p class="fp3d-sub">${t.library_empty}</p>`}
      ${items.length
        ? html`<div class="fp3d-actions fp3d-of-left">
            <button class="fp3d-btn" ?disabled=${!active} @click=${() => void this.reimport()}>${t.reimport}</button>
            <button class="fp3d-btn" ?disabled=${!active} @click=${() => void this.download()}>${t.download}</button>
          </div>`
        : nothing}
    </section>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      :host {
        display: block;
        overflow: auto;
      }
      .fp3d-of {
        max-width: 1240px;
        margin: 0 auto;
        padding: 20px 16px 40px;
        display: grid;
        gap: 16px;
      }
      .fp3d-of-head {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 14px;
      }
      .fp3d-of-head h2 {
        margin: 0;
        font-size: 22px;
      }
      .fp3d-of-head p {
        flex-basis: 100%;
        margin: 0;
      }
      .fp3d-sub {
        color: var(--fp3d-muted);
      }
      .fp3d-of-pill {
        font-size: 12px;
        padding: 3px 10px;
        border-radius: 999px;
        color: #34d399;
        background: color-mix(in srgb, #34d399 14%, transparent);
      }
      .fp3d-of-pill.fp3d-of-off {
        color: var(--fp3d-danger);
        background: color-mix(in srgb, var(--fp3d-danger) 14%, transparent);
      }
      .fp3d-of-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 340px;
        gap: 16px;
        align-items: start;
      }
      @media (max-width: 900px) {
        .fp3d-of-grid {
          grid-template-columns: minmax(0, 1fr);
        }
      }
      .fp3d-ext-card {
        padding: 14px 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
      }
      .fp3d-ext-card h3 {
        margin: 16px 0 8px;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-soft);
      }
      .fp3d-ext-card > h3:first-child {
        margin-top: 0;
      }
      .fp3d-of-warn {
        border-color: var(--fp3d-warm);
      }
      .fp3d-of-warn code {
        display: block;
        margin-top: 6px;
        font-size: 12px;
        opacity: 0.7;
      }
      .fp3d-of-msg {
        position: relative;
        padding-right: 40px;
      }
      .fp3d-of-ok {
        border-color: #34d399;
      }
      .fp3d-of-bad {
        color: var(--fp3d-danger);
      }
      .fp3d-of-msg.fp3d-of-bad {
        color: inherit;
        border-color: var(--fp3d-danger);
      }
      .fp3d-of-x {
        position: absolute;
        right: 8px;
        top: 6px;
        background: none;
        border: 0;
        font-size: 20px;
        color: inherit;
        cursor: pointer;
      }
      .fp3d-of-small {
        font-size: 12px;
      }
      .fp3d-of-center {
        text-align: center;
        justify-content: center;
      }
      .fp3d-of-drop {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        text-align: center;
        min-height: 320px;
        border: 2px dashed var(--fp3d-line);
        transition:
          border-color 0.15s,
          background 0.15s;
      }
      .fp3d-of-over {
        border-color: var(--fp3d-accent);
        background: color-mix(in srgb, var(--fp3d-accent) 8%, var(--fp3d-chrome));
      }
      .fp3d-of-big {
        font-size: 48px;
      }
      .fp3d-of-drop-title {
        font-size: 18px;
      }
      .fp3d-of-formats {
        font-size: 13px;
        font-weight: 600;
        margin-top: 6px;
      }
      .fp3d-of-drop .fp3d-of-small {
        max-width: 440px;
      }
      .fp3d-of-bar {
        width: 220px;
        height: 4px;
        border-radius: 2px;
        background: var(--fp3d-line);
        overflow: hidden;
      }
      .fp3d-of-bar div {
        width: 40%;
        height: 100%;
        background: var(--fp3d-accent);
        animation: fp3d-of-slide 1.1s ease-in-out infinite;
      }
      @keyframes fp3d-of-slide {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(250%);
        }
      }
      .fp3d-of-preview-wrap {
        position: relative;
      }
      .fp3d-of-preview {
        width: 100%;
        height: 360px;
        display: block;
        border-radius: 10px;
        cursor: grab;
        touch-action: none;
      }
      .fp3d-of-preview:active {
        cursor: grabbing;
      }
      @media (max-width: 600px) {
        .fp3d-of-preview {
          height: 260px;
        }
      }
      .fp3d-of-overlay {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: color-mix(in srgb, var(--fp3d-chrome-solid) 60%, transparent);
        border-radius: 10px;
      }
      .fp3d-of-info {
        margin-top: 8px;
        text-align: center;
      }
      .fp3d-of-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-of-note {
        font-size: 12px;
        padding: 3px 10px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--fp3d-warm) 14%, transparent);
        color: var(--fp3d-warm);
      }
      .fp3d-of-row {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: flex-end;
        margin: 10px 0;
      }
      .fp3d-of-row .fp3d-field {
        min-width: 130px;
      }
      .fp3d-of-grow {
        flex: 1;
        min-width: 0;
      }
      .fp3d-field b {
        color: var(--fp3d-text);
      }
      .fp3d-of-check {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 8px 0;
      }
      .fp3d-of-check input {
        accent-color: var(--fp3d-accent);
        width: 18px;
        height: 18px;
      }
      .fp3d-of-replace {
        color: var(--fp3d-warm);
      }
      .fp3d-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: flex-end;
        margin-top: 16px;
      }
      .fp3d-actions.fp3d-of-left {
        justify-content: flex-start;
      }
      .fp3d-btn:disabled {
        opacity: 0.45;
        cursor: default;
      }
      label.fp3d-btn {
        display: inline-flex;
        align-items: center;
      }
      .fp3d-of-lib-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 0;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-of-lib-row:first-of-type {
        border-top: 0;
      }
      .fp3d-of-lib-row b {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-of-thumb {
        width: 64px;
        height: 48px;
        flex: none;
        border-radius: 8px;
      }
      .fp3d-of-icon {
        flex: none;
        width: 36px;
        height: 36px;
        border: 0;
        border-radius: 50%;
        background: none;
        color: var(--fp3d-muted);
        font-size: 16px;
        cursor: pointer;
      }
      .fp3d-of-icon:hover {
        background: rgba(255, 255, 255, 0.06);
        color: var(--fp3d-text);
      }
      .fp3d-of-icon:disabled {
        opacity: 0.4;
        cursor: default;
      }
    `,
  ];
}

if (!customElements.get("fp3d-own-furniture")) customElements.define("fp3d-own-furniture", OwnFurniture);
