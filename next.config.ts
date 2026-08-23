import type { NextConfig } from "next";

// GitHub Pages needs /portfolio; Vercel and local use root (empty).
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPages ? "/portfolio" : "";
const assetPrefix = isGitHubPages ? "/portfolio" : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  assetPrefix,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
