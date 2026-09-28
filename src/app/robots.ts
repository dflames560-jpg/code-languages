import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: ["/", "/academy/", "/coach", "/simulator", "/product-lab", "/store-launch", "/marketing"] },
    sitemap: "https://storecraft.school/sitemap.xml",
  };
}