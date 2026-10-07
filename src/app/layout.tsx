import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import ClientScripts from "@/components/ClientScripts";
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
  title: `Nettoyage fin de chantier & remise en état | ${site.name}`,
  description: `${site.name}, nettoyage professionnel : fin de chantier, remise en état locative, Diogène. Devis gratuit sous 24 h.`,
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
