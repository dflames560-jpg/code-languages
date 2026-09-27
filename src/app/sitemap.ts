import type { MetadataRoute } from "next";
import { languages } from "@/lib/catalog";

const baseUrl = "https://codelanguages.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const primary = ["", "/languages", "/docs", "/certifications", "/onboard", "/login", "/pricing"];
  const languageRoutes = languages.flatMap((language) => [
    { url: `${baseUrl}/languages/${language.slug}`, changeFrequency: "monthly" as const, priority: language.featured ? 0.8 : 0.6 },
    { url: `${baseUrl}/docs/${language.slug}`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/playground/${language.slug}`, changeFrequency: "monthly" as const, priority: 0.6 },
  ]);
  return [...primary.map((path) => ({ url: `${baseUrl}${path}`, changeFrequency: "weekly" as const, priority: path ? 0.7 : 1 })), ...languageRoutes];
}