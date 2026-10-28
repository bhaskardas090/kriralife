import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static HTML export — deploy the `out/` folder to any static host.
  output: "export",
  // /codeveda/ → out/codeveda/index.html (works on every static host, one canonical URL per page)
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
