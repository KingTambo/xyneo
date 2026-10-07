"use client";

import { site, testimonials } from "@/data/site";
import SectionCta from "./SectionCta";

export default function TestimonialSection() {
  const hasReviews = Boolean(site.googleReviewsUrl && site.rating && site.reviews);

  return (
    <section className="testi-sec testi-sec-compact" aria-labelledby="h2-testi">
      <div className="section-wrap">
        <div className="sec-title">
          <span className="pill">Avis clients vérifiés</span>
          <h2 id="h2-testi">Ce que disent nos clients</h2>
          {hasReviews ? (
            <p className="testi-rating-line">
              <a href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                ★ {site.rating?.replace(".", ",")} sur Google — Voir les avis →
              </a>
            </p>
          ) : null}
        </div>

        <div className="testi-grid testi-grid-static">
          {testimonials.map((t) => (
            <article className="testi-card" key={`${t.name}-${t.tag}`}>
              {t.img ? (
                <img className="testi-photo" src={t.img} alt="" loading="lazy" width={400} height={220} />
              ) : null}
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
        </div>

        <SectionCta formHref="#hero-form" />
      </div>
    </section>
  );
}
