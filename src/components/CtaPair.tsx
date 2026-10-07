"use client";

import { scrollToFormAnchor } from "@/lib/form-presets";
import { site } from "@/data/site";

type CtaPairProps = {
  formHref?: string;
  variant?: "default" | "discreet";
  className?: string;
};

export default function CtaPair({ formHref = "#hero-form", variant = "default", className = "" }: CtaPairProps) {
  const primaryLabel =
    variant === "discreet"
      ? "Parler de votre situation en toute discrétion"
      : "Recevoir mon devis sous 24 h";

  function handlePrimaryClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    scrollToFormAnchor(formHref);
  }

  return (
    <div className={`cta-pair${className ? ` ${className}` : ""}`}>
      <a href={formHref} className="btn-or" onClick={handlePrimaryClick}>
        {primaryLabel}
      </a>
      <a href={`tel:${site.phoneTel}`} className="btn-wh">
        Appeler {site.ownerFirst}
      </a>
    </div>
  );
}
