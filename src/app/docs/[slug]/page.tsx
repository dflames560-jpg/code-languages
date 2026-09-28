import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { DocsSidebar } from "@/components/learning-widgets";
import { getLanguage, getStarterCode, languages } from "@/lib/catalog";

export function generateStaticParams() {
  return languages.map((language) => ({ slug: language.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const language = getLanguage(slug);
  return { title: language ? `${language.name} reference docs` : "Reference docs", description: language ? `A practical starter reference for learning ${language.name}.` : "Practical coding references." };
}

export default async function DocsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const language = getLanguage(slug);
  if (!language) notFound();
  const isPython = slug === "python";
  const isHtml = slug === "html";
  const isSql = slug === "sql";
  const isReact = slug === "react";
  const sample = getStarterCode(language);
  const definition = isPython ? "A variable gives a useful name to a value. Python figures out the value’s type for you, so you can focus on what you want the program to do." : isHtml ? "HTML gives a document its structure. Tags describe the role of content, like a heading, a paragraph, or a link, so browsers and assistive technology can make sense of it." : isSql ? "A query describes the information you want from a database. SELECT chooses the columns, FROM chooses the table, and WHERE narrows the results." : isReact ? "A component is a reusable piece of interface. It takes inputs called props and returns the elements React should display." : "A variable is a named place to keep a value. Use a clear name that helps the next person understand what the value represents.";
  return <main className="docs-layout"><DocsSidebar languages={languages} active={slug} /><article className="docs-article"><p className="docs-breadcrumb"><Link href="/docs">DOCS</Link> / {language.name.toUpperCase()}</p><p className="eyebrow">A FRIENDLY REFERENCE</p><h1>{language.name} essentials</h1><p className="docs-lead">{language.description} Start with this small pattern and build on it.</p><nav className="docs-toc" aria-label="On this page"><strong>ON THIS PAGE</strong><Link href="#overview">Overview</Link><Link href="#example">A small example</Link><Link href="#next">Where to go next</Link></nav><section id="overview"><h2>Make meaning visible</h2><p>{definition}</p><p>Read the code from top to bottom. Each line adds one small instruction. Keep names specific, and try a tiny change to see what it affects.</p></section><section id="example"><h2>A small example</h2><p>Here’s a simple starting point you can adapt:</p><pre className="docs-code"><code>{sample}</code></pre><p>Change the example, then open the playground to experiment with it.</p></section><section id="next"><h2>Where to go next</h2><ul><li>Practice changing one value at a time.</li><li>Notice what the output tells you.</li><li>Use the matching lessons for a guided challenge.</li></ul><Link className="button button-lime" href={`/playground/${slug}`}>Try {language.name} in the playground <ArrowRight size={14} /></Link> <Link className="text-link" href={`/languages/${slug}`}>View the learning path <ArrowRight size={13} /></Link></section></article></main>;
}