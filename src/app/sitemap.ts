import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** ⚠️ SITE_URL usa placeholder até o domínio final ser preenchido em src/lib/site.ts */
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
