import data from "./articles.json";

export type Block = { type: "h2" | "h3" | "h4" | "p" | "li"; text: string };
export type Article = {
  title: string;
  description: string;
  blocks: Block[];
  snapshot: string; // Wayback timestamp YYYYMMDDHHMMSS (original capture date)
  path: string;
};

const store = data as unknown as Record<string, Article>;

export function getArticle(path: string): Article | undefined {
  return store[path];
}

export function allArticlePaths(): string[] {
  return Object.keys(store);
}

/** Root-level article slugs, e.g. "bruxism" for "/bruxism". */
export function rootSlugs(): string[] {
  return Object.keys(store)
    .filter((p) => /^\/[^/]+$/.test(p))
    .map((p) => p.slice(1));
}

/** Slugs under a prefix, e.g. prefix "/blog" -> ["peridontics", ...]. */
export function slugsUnder(prefix: string): string[] {
  const re = new RegExp(`^${prefix}/([^/]+)$`);
  return Object.keys(store)
    .map((p) => p.match(re))
    .filter((m): m is RegExpMatchArray => !!m)
    .map((m) => m[1]);
}

/** ISO date (yyyy-mm-dd) from the Wayback snapshot timestamp. */
export function snapshotISO(snapshot: string): string {
  if (!snapshot || snapshot.length < 8) return "";
  return `${snapshot.slice(0, 4)}-${snapshot.slice(4, 6)}-${snapshot.slice(6, 8)}`;
}
