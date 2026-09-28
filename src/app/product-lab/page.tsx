import type { Metadata } from "next";
import { CommerceShell, ProductLabPage } from "@/components/commerce-app";

export const metadata: Metadata = { title: "Product lab", description: "Capture product ideas, evidence, and conservative unit economics in a local workspace." };

export default function ProductLabRoute() {
  return <CommerceShell activePath="/product-lab"><ProductLabPage /></CommerceShell>;
}
