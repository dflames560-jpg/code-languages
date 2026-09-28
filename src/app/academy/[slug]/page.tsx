import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CommerceShell, CoursePage } from "@/components/commerce-app";
import { courses } from "@/lib/commerce-data";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  return course ? { title: course.title, description: course.description } : { title: "Course not found" };
}

export default async function CourseRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  if (!course) notFound();
  return <CommerceShell activePath="/academy"><CoursePage course={course} /></CommerceShell>;
}
