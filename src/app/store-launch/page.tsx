import type { Metadata } from "next";
import { CommerceShell, StoreLaunchPage } from "@/components/commerce-app";

export const metadata: Metadata = { title: "Store launch checklist", description: "A practical local checklist for preparing and testing a Shopify store." };

export default function StoreLaunchRoute() {
  return <CommerceShell activePath="/store-launch"><StoreLaunchPage /></CommerceShell>;
}
