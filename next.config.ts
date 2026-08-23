import type { NextConfig } from "next";

// GitHub Pages needs a static export to `out/`. Vercel uses native Next.js SSG.
const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isStaticExport ? { output: "export" as const } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
