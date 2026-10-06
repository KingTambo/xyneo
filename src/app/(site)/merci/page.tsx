import MerciContent from "@/components/MerciContent";
import { site } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demande reçue | Xyneo",
  description: `Votre demande de devis a bien été enregistrée. ${site.ownerFirst} vous rappelle sous 24 h.`,
  robots: { index: false, follow: false },
};

export default function MerciPage() {
  return <MerciContent />;
}
