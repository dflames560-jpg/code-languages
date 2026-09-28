import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonCourse } from "@/components/lesson-course";
import { getLanguage, languages } from "@/lib/catalog";

export function generateStaticParams() {
  return languages.map((language) => ({ slug: language.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const language = getLanguage(slug);
  return language ? { title: `${language.name}: ${language.lessons[0]}`, description: `Learn ${language.lessons[0]} with a clear explanation and hands-on ${language.name} practice.` } : { title: "Lesson not found" };
}

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const language = getLanguage(slug);
  if (!language) notFound();
  return <main className="lesson-page"><LessonCourse language={language} /></main>;
}