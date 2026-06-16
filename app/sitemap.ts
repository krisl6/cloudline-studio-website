import type { MetadataRoute } from "next"
import { SITE_URL, SITE_ROUTES } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return SITE_ROUTES.map((route) => ({
    url: route ? `${SITE_URL}/${route}/` : `${SITE_URL}/`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}
