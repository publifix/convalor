/**
 * Joins the configured base path with a relative path, guaranteeing exactly
 * one slash between them regardless of whether BASE_URL ends in a slash
 * (Astro's `trailingSlash` setting affects this).
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}${path.replace(/^\/+/, '')}`;
}
