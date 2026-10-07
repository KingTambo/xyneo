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
      : "Demander un devis gratuit";

  function handlePrimaryClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    scrollToFormAnchor(formHref);
  }

  const secondaryHref = site.phoneTel ? `tel:${site.phoneTel}` : `mailto:${site.email}`;
  const secondaryLabel = site.phoneTel
    ? site.ownerFirst
      ? `Appeler ${site.ownerFirst}`
      : "Nous appeler"
    : "Nous écrire";

  return (
    <div className={`cta-pair${className ? ` ${className}` : ""}`}>
      <a href={formHref} className="btn-or" onClick={handlePrimaryClick}>
        {primaryLabel}
      </a>
      <a href={secondaryHref} className="btn-wh">
        {secondaryLabel}
      </a>
    </div>
  );
}
