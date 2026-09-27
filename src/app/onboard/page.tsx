import type { Metadata } from "next";
import { OnboardingQuiz } from "@/components/learning-widgets";

export const metadata: Metadata = { title: "Find your learning path", description: "Answer two quick questions and get a coding path recommendation tailored to what you want to make." };

export default function OnboardPage() {
  return <main className="auth-page"><OnboardingQuiz /></main>;
}