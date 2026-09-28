import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Mono, DM_Sans, Playfair_Display } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const mono = DM_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codelanguages.dev"),
  title: { default: "Code Languages | Learn to code, one little win at a time", template: "%s | Code Languages" },
  description: "The free, fun way to learn to code. Build real skills with bite-sized lessons, hands-on playgrounds, and a friendly Byte in your corner.",
  openGraph: {
    title: "Code Languages | Learn to code, one little win at a time",
    description: "Build real skills by building real things. Free, hands-on coding education for curious minds.",
    siteName: "Code Languages",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Code Languages: the free, fun way to learn to code" }],
  },
  twitter: { card: "summary_large_image", title: "Code Languages", description: "The free, fun way to learn to code." },
  alternates: { languages: { en: "/", es: "/es", fr: "/fr" } },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${display.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: `try{document.documentElement.dataset.theme=localStorage.getItem('code-languages-theme')||'light'}catch{document.documentElement.dataset.theme='light'}` }} />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
