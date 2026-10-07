"use client";

import { profilePresets } from "@/data/site";
import { dispatchFormPreset, scrollToFormAnchor } from "@/lib/form-presets";

const segments = [
  { label: "Entreprise du bâtiment", key: "btp" as const },
  { label: "Commerce ou vitrine", key: "commerce" as const },
  { label: "Agence immobilière", key: "agence" as const },
  { label: "Bureaux et locaux pro", key: "bureaux" as const },
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
      <p className="hero-segments-label">Votre activité :</p>
      <div className="hero-segments" role="navigation" aria-label="Choisir votre situation">
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
