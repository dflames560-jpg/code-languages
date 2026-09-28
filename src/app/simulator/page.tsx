import type { Metadata } from "next";
import { CommerceShell, StoreSimulatorPage } from "@/components/commerce-app";

export const metadata: Metadata = { title: "Shopify store practice simulator", description: "Practice store setup, product, supplier, and customer experience decisions in a safe local Shopify-style simulator." };

export default function SimulatorRoute() {
  return <CommerceShell activePath="/simulator"><StoreSimulatorPage /></CommerceShell>;
}
