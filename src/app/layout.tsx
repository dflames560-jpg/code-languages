import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Mono, DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://storecraft.school"),
  title: { default: "Storecraft | Learn to build a better online store", template: "%s | Storecraft" },
  description: "A practical learning workspace for Shopify setup, product research, dropshipping operations, and responsible marketing.",
  openGraph: {
    title: "Storecraft | Learn to build a better online store",
    description: "Practical lessons, a product lab, launch checklists, and a transparent commerce coach.",
    siteName: "Storecraft",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Storecraft: practical education for independent store builders" }],
  },
  twitter: { card: "summary_large_image", title: "Storecraft", description: "Build a better online store with practical learning." },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${display.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
