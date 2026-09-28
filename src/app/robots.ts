import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: ["/", "/languages/", "/learn/", "/docs/", "/playground/", "/certifications"], disallow: ["/login", "/onboard"] },
    sitemap: "https://codelanguages.dev/sitemap.xml",
  };
}