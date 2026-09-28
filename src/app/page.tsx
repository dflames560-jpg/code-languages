import type { Metadata } from "next";
import { CommerceShell, OverviewPage } from "@/components/commerce-app";

export const metadata: Metadata = { title: "Commerce workspace", description: "A practical home for learning Shopify, product research, dropshipping operations, and marketing." };

export default function HomePage() {
  return <CommerceShell activePath="/"><OverviewPage /></CommerceShell>;
}
