import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Sparkles } from "lucide-react";
import { Playground } from "@/components/learning-widgets";
import { getLanguage, languages } from "@/lib/catalog";

export function generateStaticParams() {
  return languages.map((language) => ({ slug: language.slug }));
}

export async function generateMetadata({ params }: PageProps<"/playground/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const language = getLanguage(slug);
  return { title: language ? `${language.name} browser playground` : "Code playground", description: language ? `Practice ${language.name} in an editable, browser-based coding playground.` : "Practice coding in your browser." };
}

export default async function PlaygroundPage({ params }: PageProps<"/playground/[slug]">) {
  const { slug } = await params;
  const language = getLanguage(slug);
  if (!language) notFound();
  return <main className="page-shell playground-page"><div className="playground-page-head"><div><p className="eyebrow"><Link href={`/languages/${language.slug}`}><ArrowLeft size={12} /> {language.name} PATH</Link> · PRACTICE SPACE</p><h1>Try an idea. <em>See what happens.</em></h1><p>Make a change, run it, learn from the result. This space is yours.</p></div><div className="language-badges"><Link href={`/docs/${language.slug}`}><BookOpen size={12} /> Reference docs</Link><span><Sparkles size={12} /> Autosaves in this session</span></div></div><Playground language={language} /></main>;
}