import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** ⚠️ SITE_URL usa placeholder até o domínio final ser preenchido em src/lib/site.ts */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
