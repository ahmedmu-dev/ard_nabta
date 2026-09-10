import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // v1 ships local SVG placeholder images (see public/images/**) so real
    // photography can drop in later without touching next/image usage.
    // Safe here: these are trusted, build-time static assets, not user uploads.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
