import MerciContent from "@/components/MerciContent";
import { site } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Demande reçue | ${site.name}`,
  description: `Votre demande de devis a bien été enregistrée. ${site.name} vous rappelle sous 24 h ouvrées au ${site.phone}.`,
  robots: { index: false, follow: false },
};

export default function MerciPage() {
  return <MerciContent />;
}
