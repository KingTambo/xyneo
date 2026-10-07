import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import ClientScripts from "@/components/ClientScripts";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "OAO Propreté — Nettoyage vitres, fin de chantier, bureaux",
  description:
    "OAO Propreté nettoie vos vitres, vos locaux après travaux et vos bureaux. Devis gratuit sous 24 h, sans engagement. Disponible du lundi au samedi.",
};

export const viewport: Viewport = {
  themeColor: "#142635",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "window.dataLayer=window.dataLayer||[];" }} />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/xyneo-theme.css" />
        <link rel="icon" href="/img/oao-logo.png" type="image/png" />
        <link rel="preload" as="image" href="/img/oao-logo.png" type="image/png" />
        <link rel="preload" as="image" href="/img/hero.webp" type="image/webp" />
      </head>
      <body>
        {children}
        <ClientScripts />
      </body>
    </html>
  );
}
