import type { Metadata } from "next";
import { CatalogBrowser } from "@/components/learning-widgets";
import { languages } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Explore the coding catalog",
  description: "Browse 27 free coding paths across languages, frameworks, tools, and DevOps. Find a hands-on path that fits what you want to build.",
};

export default function LanguagesPage() {
  return <main><section className="page-hero"><div className="page-shell"><p className="eyebrow">27 PATHS. YOUR NEXT SKILL.</p><h1>Find your next <em>thing.</em></h1><p>Programming languages, practical tools, and frameworks. Search around and follow what sparks your curiosity.</p></div></section><section className="page-shell page-content"><CatalogBrowser languages={languages} /></section></main>;
}