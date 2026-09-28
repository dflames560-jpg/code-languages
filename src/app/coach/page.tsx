import type { Metadata } from "next";
import { CoachPage, CommerceShell } from "@/components/commerce-app";

export const metadata: Metadata = { title: "Commerce coach", description: "Get guided educational prompts for Shopify setup, product research, fulfillment, and marketing tests." };

export default function CoachRoute() {
  return <CommerceShell activePath="/coach"><CoachPage /></CommerceShell>;
}
