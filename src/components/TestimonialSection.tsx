"use client";

import { site, testimonialFilters, testimonials, type TestimonialFilterId } from "@/data/site";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ClientPlaceholder from "./ClientPlaceholder";
import SectionCta from "./SectionCta";

function matchesFilter(tag: string, filterId: TestimonialFilterId) {
  if (filterId === "all") return true;
  if (filterId === "vitres") return /vitres|commerce/i.test(tag);
  if (filterId === "fin-chantier") return tag === "Fin de chantier";
  if (filterId === "remise") return /remise en état/i.test(tag);
  if (filterId === "textile") {
    return ["Nettoyage canapé", "Nettoyage textile", "Nettoyage moquette"].includes(tag);
  }
  return true;
}

export default function TestimonialSection() {
  const hasReviews = Boolean(site.googleReviewsUrl && site.rating && site.reviews);
  const [activeFilter, setActiveFilter] = useState<TestimonialFilterId>("all");
  const [activeSlide, setActiveSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => testimonials.filter((t) => matchesFilter(t.tag, activeFilter)),
    [activeFilter],
  );

  const showPlaceholder = activeFilter === "all" && testimonials.length === 0;
  const slideCount = filtered.length + (showPlaceholder ? 1 : 0);

  useEffect(() => {
    setActiveSlide(0);
    if (trackRef.current) trackRef.current.scrollLeft = 0;
  }, [activeFilter]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || slideCount <= 1) return;

    const onScroll = () => {
      const cards = Array.from(track.querySelectorAll<HTMLElement>(".testi-card"));
      if (!cards.length) return;
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((card, index) => {
        const dist = Math.abs(card.offsetLeft - track.scrollLeft);
        if (dist < minDist) {
          minDist = dist;
          closest = index;
        }
      });
      setActiveSlide(closest);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [slideCount, activeFilter]);

  const goToSlide = useCallback((index: number) => {
    const track = trackRef.current;
    const card = track?.querySelectorAll<HTMLElement>(".testi-card")[index];
    if (!card || !track) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setActiveSlide(index);
  }, []);

  return (
    <section className="testi-sec" aria-labelledby="h2-testi">
      <div className="section-wrap">
        <div className="sec-title">
          <span className="pill">Avis clients vérifiés</span>
          <h2 id="h2-testi">
            {hasReviews ? (
              <>
                {site.rating}/5 sur Google — {site.reviews} avis
              </>
            ) : (
              <>Avis clients vérifiés</>
            )}
          </h2>
          {hasReviews ? (
            <p className="testi-rating-line">
              <a href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                Voir les {site.reviews} avis sur Google →
              </a>
            </p>
          ) : (
            <p className="testi-rating-line">
              <ClientPlaceholder block>Avis Google [À FOURNIR]</ClientPlaceholder>
            </p>
          )}
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

        <div className="testi-carousel-wrap">
          <div className="testi-grid" ref={trackRef}>
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
                  <span className="testi-tag">{t.tag} · Avis Google</span>
                </div>
              </article>
            ))}

            {showPlaceholder && (
              <article className="testi-card testi-card-placeholder">
                <div className="testi-body">
                  <ClientPlaceholder block>Avis d&apos;un professionnel [À FOURNIR]</ClientPlaceholder>
                  <p className="testi-text ph-slot-hint">
                    Espace réservé pour un avis client BTP, agence ou syndic.
                  </p>
                </div>
              </article>
            )}
          </div>

          {slideCount > 1 && (
            <div className="testi-dots" role="tablist" aria-label="Pagination des avis">
              {Array.from({ length: slideCount }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={activeSlide === index}
                  aria-label={`Avis ${index + 1} sur ${slideCount}`}
                  className={`testi-dot${activeSlide === index ? " active" : ""}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          )}
        </div>

        {filtered.length === 0 && (
          <p className="testi-empty">Aucun avis pour cette catégorie pour le moment.</p>
        )}

        <SectionCta formHref="#hero-form" />
      </div>
    </section>
  );
}
