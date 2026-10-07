import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import ClientScripts from "@/components/ClientScripts";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import { site } from "@/data/site";
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
  title: `Nettoyage fin de chantier, vitres et bureaux à ${site.city} · ${site.name}`,
  description: `${site.name} : nettoyage de fin de chantier, vitres professionnelles, remise locative et entretien de bureaux à ${site.city}. Devis gratuit — rappel sous 24 h ouvrées.`,
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
        <link rel="preload" as="image" href="/img/hero.jpg" />
        <LocalBusinessJsonLd />
      </head>
      <body>
        {children}
        <ClientScripts />
      </body>
    </html>
  );
}
