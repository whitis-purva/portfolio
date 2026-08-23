/**
 * Prefix static asset paths with the Next.js basePath when present.
 * Keeps absolute/external URLs unchanged. Safe for local dev when basePath is ''.
 */
export function withBasePath(path = "") {
  if (!path) return path;
  if (/^(https?:|data:|blob:|mailto:|#)/i.test(path)) return path;

  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (base && (normalized === base || normalized.startsWith(`${base}/`))) {
    return normalized;
  }

  return `${base}${normalized}`;
}
