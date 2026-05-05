export function getBasePath(): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!basePath) return "";
  // normalize: ensure leading slash, no trailing slash
  const withLeading = basePath.startsWith("/") ? basePath : `/${basePath}`;
  return withLeading.replace(/\/$/, "");
}

/**
 * Prefixes paths like "/images/x.png" with NEXT_PUBLIC_BASE_PATH (GitHub Pages).
 * Leaves absolute URLs and already-prefixed paths untouched.
 */
export function withBasePath(path: string): string {
  const basePath = getBasePath();
  if (!basePath) return path;
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;
  if (!path.startsWith("/")) return path;
  if (path === basePath || path.startsWith(`${basePath}/`)) return path;
  return `${basePath}${path}`;
}

