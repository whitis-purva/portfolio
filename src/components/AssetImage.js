import { withBasePath } from "@/lib/assetPath";

/**
 * Drop-in <img> that prefixes src with Next.js basePath on export.
 */
export default function AssetImage({ src, alt = "", ...props }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={withBasePath(src)} alt={alt} {...props} />;
}
