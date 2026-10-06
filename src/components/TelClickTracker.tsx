"use client";

import { trackTelClick } from "@/lib/analytics";
import { useEffect } from "react";

/** Délégation globale — event GA4 clic_tel sur chaque lien tel: */
export default function TelClickTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = (event.target as Element | null)?.closest('a[href^="tel:"]');
      if (!target) return;
      trackTelClick((target as HTMLAnchorElement).href);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
