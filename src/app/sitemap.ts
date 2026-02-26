import type { MetadataRoute } from "next";

const SITE_URL = "https://www.hydrafitstudio.com";
const LOCALES = ["fr", "en", "ar"];

const routes = [
  "",
  "/experience",
  "/courses",
  "/booking",
  "/events",
  "/blog",
  "/shop",
  "/legal",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${SITE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : route === "/booking" ? 0.9 : 0.8,
        alternates: {
          languages: {
            fr: `${SITE_URL}/fr${route}`,
            en: `${SITE_URL}/en${route}`,
            ar: `${SITE_URL}/ar${route}`,
          },
        },
      });
    }
  }

  return entries;
}
