import type { Metadata } from "next";
import { CommerceShell, MarketingPage } from "@/components/commerce-app";

export const metadata: Metadata = { title: "Marketing workshop", description: "Create original, measurable campaign briefs and plan responsible marketing tests." };

export default function MarketingRoute() {
  return <CommerceShell activePath="/marketing"><MarketingPage /></CommerceShell>;
}
