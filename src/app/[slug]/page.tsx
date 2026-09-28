import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

const pages: Record<string, { title: string; description: string; heading: string; copy: string }> = {
  about: { title: "About Code Languages", description: "A small team making practical coding education approachable and free.", heading: "Built for curious minds.", copy: "Code Languages is a learning project with one simple idea: the best way to learn to code is to make something, one small win at a time. Byte is here to make the first steps feel a little more human." },
  blog: { title: "The Code Languages blog", description: "Notes on learning, building, and finding your way into code.", heading: "Notes from the learning path.", copy: "Short reads on getting started, building good habits, and the interesting things people make with code. New stories are on the way." },
  support: { title: "Support", description: "Get help with Code Languages learning paths and browser playgrounds.", heading: "How can we help?", copy: "We’re building a helpful support desk for your learning journey. For now, visit the docs or choose a language path to find guided next steps." },
  privacy: { title: "Privacy", description: "Privacy information for Code Languages learners.", heading: "Your learning stays yours.", copy: "This scaffold stores theme preference and demo lesson progress in your browser’s local storage. It does not send that information to a server. A production privacy policy will be published before accounts or analytics are connected." },
  terms: { title: "Terms", description: "Terms of use for Code Languages.", heading: "A simple starting point.", copy: "Code Languages is an educational MVP scaffold. Lessons, progress tracking, and account screens are provided for learning and demonstration. Formal terms will be published before a public service launch." },
  cookies: { title: "Cookie settings", description: "Cookie and local storage information for Code Languages.", heading: "Small storage, clear purpose.", copy: "This demo uses local storage to remember your theme and lesson progress. It does not set advertising cookies." },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  return page ? { title: page.title, description: page.description } : { title: "Page not found" };
}

export default async function InformationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  return <main className="page-shell simple-page"><p className="eyebrow">CODE LANGUAGES · {slug.toUpperCase()}</p><h1>{page.heading}</h1><p>{page.copy}</p><Link className="text-link link-lime" href="/docs">Visit the docs <ArrowRight size={14} /></Link></main>;
}