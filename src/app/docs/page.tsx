import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Code2, Compass } from "lucide-react";
import { DocsSidebar } from "@/components/learning-widgets";
import { languages } from "@/lib/catalog";

export const metadata: Metadata = { title: "Documentation", description: "Clear, practical coding references for the concepts you’ll meet in your lessons." };

export default function DocsHomePage() {
  return <main className="docs-layout"><DocsSidebar languages={languages} /><article className="docs-article"><p className="docs-breadcrumb">CODE LANGUAGES / DOCS</p><p className="eyebrow">REFERENCE, WITHOUT THE RUNAROUND</p><h1>Docs for your next step.</h1><p className="docs-lead">Friendly, skimmable guides that help you understand what your code is doing and where to go next.</p><div className="docs-toc"><strong>START HERE</strong><Link href="/docs/python">Python: values and variables <ArrowRight size={12} /></Link><Link href="/docs/javascript">JavaScript: functions and events <ArrowRight size={12} /></Link><Link href="/docs/html">HTML: structure a page <ArrowRight size={12} /></Link></div><h2>Pick a reference</h2><div className="docs-card-list">{[["Language guides", "Clear explanations of syntax, common patterns, and the small details that make code click.", Code2, "/languages"], ["Lesson notes", "A quick refresher for ideas you’ve met in the practice paths.", BookOpen, "/languages/python"], ["Choose a path", "Not sure what to read yet? Find the learning path that fits what you want to make.", Compass, "/languages"]].map(([title, description, Icon, href]) => { const DocIcon = Icon as typeof Code2; return <Link className="docs-card" href={href as string} key={title as string}><DocIcon size={19} /><span><strong>{title as string}</strong><small>{description as string}</small></span><ArrowRight size={15} /></Link>; })}</div></article></main>;
}