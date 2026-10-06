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
  title: "Nettoyage professionnel Ain, Rhône, Saône-et-Loire | Xyneo",
  description:
    "Xyneo, nettoyage à Bourg-en-Bresse : fin de chantier, remise en état locative, Diogène. Ain, Rhône, Saône-et-Loire. Devis gratuit sous 24 h.",
};

export const viewport: Viewport = {
  themeColor: "#035456",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/xyneo-theme.css" />
        <link rel="icon" href="/img/xyneo-logo.webp" />
      </head>
      <body>
        {children}
        <ClientScripts />
      </body>
    </html>
  );
}
