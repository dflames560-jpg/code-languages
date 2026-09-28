import type { MetadataRoute } from "next";

const baseUrl = "https://storecraft.school";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/academy", "/academy/shopify-store", "/academy/product-research", "/academy/dropshipping-operations", "/academy/ethical-marketing", "/academy/shopify-growth", "/coach", "/simulator", "/product-lab", "/store-launch", "/marketing"];
  return routes.map((path) => ({ url: `${baseUrl}${path}`, changeFrequency: "weekly", priority: path ? 0.75 : 1 }));
}