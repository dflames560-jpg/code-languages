import type { Metadata } from "next";
import { AcademyPage, CommerceShell } from "@/components/commerce-app";

export const metadata: Metadata = { title: "Commerce Academy", description: "Practical, original courses about Shopify setup, product research, dropshipping operations, marketing, and store growth." };

export default function AcademyRoute() {
  return <CommerceShell activePath="/academy"><AcademyPage /></CommerceShell>;
}
