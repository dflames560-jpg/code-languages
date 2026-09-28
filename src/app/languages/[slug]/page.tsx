import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, Clock3, Sparkles } from "lucide-react";
import { languages, getLanguage } from "@/lib/catalog";

export function generateStaticParams() {
  return languages.map((language) => ({ slug: language.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const language = getLanguage(slug);
  if (!language) return { title: "Learning path not found" };
  return { title: `${language.name} course for beginners`, description: `${language.description} Learn ${language.name} through bite-sized lessons, hands-on practice, and a free certificate.` };
}

export default async function LanguagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const language = getLanguage(slug);
  if (!language) notFound();
  const previewOrRunnerAvailable = ["javascript", "html", "css"].includes(language.slug);
  return <main><section className="page-hero"><div className="page-shell language-hero"><div><p className="eyebrow">{language.category.toUpperCase()} · {language.level.toUpperCase()}</p><h1>{language.name}, <em>made approachable.</em></h1><p>{language.description} Build a useful foundation one small win at a time.</p><div className="language-badges"><span><Clock3 size={11} /> 2-4 weeks</span><span>{language.lessons.length} lessons</span><span>Free certificate</span></div><div className="language-hero-actions"><Link className="button button-lime" href={`/playground/${language.slug}`}>Try it in the playground <ArrowRight size={15} /></Link><Link className="button button-outline" href={`/docs/${language.slug}`}>View docs <ArrowUpRight size={14} /></Link></div></div><div className="language-hero-mark" style={{ "--language-color": language.color } as React.CSSProperties} aria-hidden="true">{language.mark}</div></div></section>
    <section className="page-shell page-content"><div className="language-body-grid"><div><p className="eyebrow">YOUR CURRICULUM</p><h2 className="route-title" style={{ fontSize: 25, marginBottom: 20 }}>What you’ll learn</h2><div className="curriculum">{language.lessons.map((lesson, index) => <Link className="curriculum-item" key={lesson} href={`/learn/${language.slug}`}><span className="curriculum-number">{String(index + 1).padStart(2, "0")}</span><span><strong>{lesson}</strong><small>{index === 0 ? "Start with the essentials" : "Learn it by building"}</small></span><span>{index === 0 ? "5 min" : "8 min"}</span></Link>)}</div><div className="language-coming">{previewOrRunnerAvailable ? <><Sparkles size={14} /> This path includes a browser JavaScript runner or a sandboxed visual preview.</> : <>This path includes a language-specific example and reference guide. A compiler or interpreter for {language.name} is not bundled yet.</>}</div></div><aside className="learn-card"><h3>Inside this path</h3><p>A practical start with a clear, friendly route from first steps to a project you can show.</p><ul><li><Check size={14} /> Bite-sized lessons with practice</li><li><Check size={14} /> Real examples, not just theory</li><li><Check size={14} /> Free certificate on completion</li><li><Check size={14} /> Learn at your own pace</li></ul><Link className="button button-lime" href={`/learn/${language.slug}`}>Start the first lesson <ArrowRight size={14} /></Link><Link className="text-link" style={{ marginTop: 14 }} href={`/playground/${language.slug}`}>Open the playground <ArrowUpRight size={13} /></Link><Link className="text-link" style={{ marginTop: 10 }} href={`/docs/${language.slug}`}>Read the docs <ArrowUpRight size={13} /></Link></aside></div></section></main>;
}