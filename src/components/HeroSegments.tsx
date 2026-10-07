"use client";

import { profilePresets } from "@/data/site";
import { dispatchFormPreset, scrollToFormAnchor } from "@/lib/form-presets";

const segments = [
  { label: "Je suis pro du bâtiment", key: "btp" as const },
  { label: "Je loue ou gère un logement", key: "agence" as const },
  { label: "Logement encombré", key: "diogene" as const },
  { label: "Après décès", key: "deces" as const, discreet: true },
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
      <p className="hero-segments-label">Votre situation :</p>
      <div className="hero-segments" role="navigation" aria-label="Choisir votre situation">
        {segments.map((seg) => (
          <button
            key={seg.key}
            type="button"
            className={`hero-seg${seg.discreet ? " hero-seg-discreet" : ""}`}
            onClick={() => handleSelect(seg.key)}
          >
            {seg.label}
          </button>
        ))}
      </div>
    </div>
  );
}
