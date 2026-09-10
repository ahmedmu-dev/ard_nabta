import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// v1: homepage only. Add each v2 route here as it's built.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
