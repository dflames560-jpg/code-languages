import type { Metadata } from "next";
import { CertificateGrid } from "@/components/learning-widgets";
import { languages } from "@/lib/catalog";

export const metadata: Metadata = { title: "Free coding certificates", description: "Build practical coding skills, pass a course check, and earn a shareable certificate for your portfolio." };

export default function CertificationsPage() {
  return <main><section className="page-hero"><div className="page-shell"><p className="eyebrow">PROOF OF THE WORK YOU PUT IN</p><h1>Make progress <em>official.</em></h1><p>Finish a learning path and earn a shareable certificate. Every certificate starts with practice, not a payment.</p></div></section><section className="page-shell page-content"><p className="catalog-count">8 certificate paths · all included for free</p><CertificateGrid languages={languages} /></section></main>;
}