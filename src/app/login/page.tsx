import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/learning-widgets";

export const metadata: Metadata = { title: "Sign in", description: "Sign in to continue your Code Languages learning journey." };

export default function LoginPage() {
  return <main className="auth-page"><section className="auth-panel"><p className="eyebrow">GOOD TO HAVE YOU BACK</p><h1>Pick up where <em>you left off.</em></h1><p>Sign in to get back to your lessons, streak, and next little win.</p><LoginForm /><p style={{ margin: "17px 0 0", textAlign: "center" }}>New around here? <Link href="/onboard" style={{ color: "var(--lime)" }}>Find your first path <span aria-hidden="true">→</span></Link></p></section></main>;
}