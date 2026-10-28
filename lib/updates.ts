import { CODEVEDA_URL } from "./site";

export type UpdateProduct = "codeveda" | "foreverdays";

// Mirrors `UpdateType` in codeveda-web. `get-all-updates` returns every product's
// updates newest first, each with `product` set (`get-updates` is Codeveda-only).
export type StudioUpdate = {
  id: string | number;
  title: string;
  description: string;
  date: string;
  type: "New Content" | "Feature" | "Update";
  icon: string;
  details?: string[];
  product?: UpdateProduct;
};

// Tried in order. The Codeveda-only route is a fallback so the Journal isn't empty
// while a codeveda.dev deploy without `get-all-updates` is live.
const UPDATES_ENDPOINTS = [
  `${CODEVEDA_URL}/api/updates/get-all-updates`,
  `${CODEVEDA_URL}/api/updates/get-updates`,
];

async function fetchUpdates(url: string): Promise<StudioUpdate[]> {
  const res = await fetch(url, { cache: "force-cache" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const body = (await res.json()) as { success?: boolean; updates?: StudioUpdate[] };
  if (!Array.isArray(body.updates)) throw new Error("response has no updates array");
  return body.updates;
}

// This site is a static export, so this runs once during `next build` and the
// result is baked into the HTML — rebuild to pick up new updates. (The endpoints
// send no CORS headers, so the browser couldn't fetch them from kriralife.com anyway.)
// If every endpoint fails this yields [] rather than failing the build; pages show an empty state.
export async function getUpdates(limit?: number): Promise<StudioUpdate[]> {
  for (const url of UPDATES_ENDPOINTS) {
    try {
      const updates = await fetchUpdates(url);
      return limit ? updates.slice(0, limit) : updates;
    } catch (error) {
      console.warn(`Could not load updates from ${url} (${error instanceof Error ? error.message : error})`);
    }
  }
  return [];
}

export const updateAnchor = (update: Pick<StudioUpdate, "id">) => `update-${update.id}`;

// ISO date for <time dateTime>; undefined when the display string doesn't parse.
export function isoDate(date: string): string | undefined {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return undefined;
  // "Aug 1, 2026" parses as local midnight; read it back in local time, not via
  // toISOString(), which would shift it a day back in zones ahead of UTC.
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
