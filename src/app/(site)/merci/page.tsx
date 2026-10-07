import MerciContent from "@/components/MerciContent";
import { site } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Demande reçue | ${site.name}`,
  description: `Votre demande de devis a bien été enregistrée. ${site.name} vous répond sous 24 h par email.`,
  robots: { index: false, follow: false },
};

export default function MerciPage() {
  return <MerciContent />;
}
