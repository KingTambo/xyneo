"use client";

import { profilePresets } from "@/data/site";
import { dispatchFormPreset, scrollToFormAnchor } from "@/lib/form-presets";

const segments = [
  { label: "Nettoyage de vitres", key: "vitres" as const },
  { label: "Fin de chantier", key: "chantier" as const },
  { label: "Nettoyage de bureaux", key: "bureaux" as const },
];

export default function HeroSegments() {
  function handleSelect(key: keyof typeof profilePresets) {
    const preset = profilePresets[key];
    if (!preset) return;
    window.history.replaceState(null, "", `?profil=${key}#hero-form`);
    dispatchFormPreset(preset);
    scrollToFormAnchor("#hero-form");
  }

  return (
    <div className="hero-segments-wrap">
      <p className="hero-segments-label">Type de prestation :</p>
      <div className="hero-segments" role="navigation" aria-label="Choisir votre prestation">
        {segments.map((seg) => (
          <button
            key={seg.key}
            type="button"
            className="hero-seg"
            onClick={() => handleSelect(seg.key)}
          >
            {seg.label}
          </button>
        ))}
      </div>
    </div>
  );
}
