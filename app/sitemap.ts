import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/ard-tech`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/work-with-us`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
