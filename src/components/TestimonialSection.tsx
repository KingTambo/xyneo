"use client";

import { site, testimonialFilters, testimonials, type TestimonialFilterId } from "@/data/site";
import { useMemo, useState } from "react";
import ClientPlaceholder from "./ClientPlaceholder";
import SectionCta from "./SectionCta";

function matchesFilter(tag: string, filterId: TestimonialFilterId) {
  if (filterId === "all") return true;
  if (filterId === "fin-chantier") return tag === "Fin de chantier";
  if (filterId === "remise") return /remise en état/i.test(tag);
  if (filterId === "textile") {
    return ["Nettoyage canapé", "Nettoyage textile", "Nettoyage moquette"].includes(tag);
  }
  return true;
}

export default function TestimonialSection() {
  const [activeFilter, setActiveFilter] = useState<TestimonialFilterId>("all");

  const filtered = useMemo(
    () => testimonials.filter((t) => matchesFilter(t.tag, activeFilter)),
    [activeFilter],
  );

  return (
    <section className="testi-sec" aria-labelledby="h2-testi">
      <div className="section-wrap">
        <div className="sec-title">
          <span className="pill">Avis clients vérifiés</span>
          <h2 id="h2-testi">
            {site.rating}/5 sur Google — {site.reviews} avis
          </h2>
          <p className="testi-rating-line">
            <a href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
              Voir les {site.reviews} avis sur Google →
            </a>
          </p>
        </div>

        <div className="testi-tabs" role="tablist" aria-label="Filtrer les avis par prestation">
          {testimonialFilters.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === tab.id}
              className={`testi-tab${activeFilter === tab.id ? " active" : ""}`}
              onClick={() => setActiveFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="testi-grid">
          {filtered.map((t) => (
            <article className="testi-card" key={`${t.name}-${t.tag}`}>
              <div className="testi-body">
                <div className="testi-stars" aria-hidden="true">
                  ⭐⭐⭐⭐⭐
                </div>
                <div className="testi-top">
                  <div className="testi-avatar">{t.initials}</div>
                  <div className="testi-meta">
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-city">{t.city}</div>
                  </div>
                </div>
                <p className="testi-text">{t.text}</p>
                <span className="testi-tag">{t.tag}</span>
              </div>
            </article>
          ))}

          <article className="testi-card testi-card-placeholder">
            <div className="testi-body">
              <ClientPlaceholder block>
                Avis d&apos;un professionnel [À FOURNIR]
              </ClientPlaceholder>
              <p className="testi-text ph-slot-hint">
                Espace réservé pour un avis client BTP, agence ou syndic.
              </p>
            </div>
          </article>
        </div>

        {filtered.length === 0 && (
          <p className="testi-empty">Aucun avis pour cette catégorie pour le moment.</p>
        )}

        <SectionCta formHref="#hero-form" />
      </div>
    </section>
  );
}
