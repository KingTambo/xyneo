import {
  featuredZones,
  homepageFaqs,
  primaryServices,
  commitments,
  proReference,
  recentChantiers,
  serviceAreas,
  showPortfolioSection,
  secondaryServiceLinks,
  site,
} from "@/data/site";
import ClientPlaceholder from "./ClientPlaceholder";
import CtaPair from "./CtaPair";
import DevisForm from "./DevisForm";
import HeroSegments from "./HeroSegments";
import PhotoPlaceholder from "./PhotoPlaceholder";
import SectionCta from "./SectionCta";
import ServicePrimaryCard from "./ServicePrimaryCard";
import HomePricingSection from "./HomePricingSection";
import TestimonialSection from "./TestimonialSection";

export default function HomeContent() {
  const hasReviews = Boolean(site.googleReviewsUrl && site.rating && site.reviews);
  const ratingDisplay = site.rating ? site.rating.replace(".", ",") : "";

  return (
    <main>
      <section className="hero" aria-labelledby="h1-hero">
        <img
          className="hero-bg"
          src="/img/hero.webp"
          alt=""
          width={1600}
          height={900}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          aria-hidden="true"
        />
        <div className="hero-split">
          <div className="hero-main">
            {hasReviews ? (
              <a
                href={site.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-ratings hero-ratings-link hero-main-block"
              >
                <div className="hero-ratings-portrait hero-ratings-logo">
                  {site.logoSrc ? (
                    <img src={site.logoSrc} alt="" width={52} height={52} loading="eager" />
                  ) : (
                    <PhotoPlaceholder variant="portrait" />
                  )}
                </div>
                <span className="hero-ratings-text">
                  <span className="hero-ratings-line">
                    <span className="stars" aria-hidden="true">
                      ★
                    </span>{" "}
                    {ratingDisplay}/5 · {site.reviews} avis Google · {site.owner || site.name}
                    {site.owner ? `, ${site.ownerRole}` : ""}
                  </span>
                  <span className="hero-ratings-cta">
                    Voir les {site.reviews} avis sur Google →
                  </span>
                </span>
              </a>
            ) : (
              <div className="hero-ratings hero-main-block">
                <div className="hero-ratings-portrait">
                  <PhotoPlaceholder variant="portrait" />
                </div>
                <span className="hero-ratings-text">
                  <ClientPlaceholder block>Avis Google · {site.owner} [À FOURNIR]</ClientPlaceholder>
                </span>
              </div>
            )}
            <div className="hero-intro hero-main-block">
              <h1 id="h1-hero">
                Fin de chantier, vitres et bureaux pour les professionnels à {site.city}
              </h1>
              <p className="hero-sub hero-sub-full">
                Entreprises du BTP, commerces, agences immobilières et bureaux : votre site livré propre pour la
                réception, vos vitrines éclatantes et vos locaux entretenus sans perturber votre activité. Devis
                gratuit sous 24 h dans l&apos;Ain, le Rhône et la Saône-et-Loire.
              </p>
              <p className="hero-sub hero-sub-short">
                BTP, commerces et bureaux — devis sous 24 h · {site.region}
              </p>
            </div>
            <div className="hero-badges hero-main-block">
              <span className="badge">Devis écrit sous 24 h</span>
              <span className="badge">Assuré RC Pro</span>
              <span className="badge">Matériel professionnel</span>
            </div>
            <div className="hero-segments-block hero-main-block">
              <HeroSegments />
            </div>
            <CtaPair formHref="#hero-form" className="hero-btns hero-devis-scroll hero-main-block" />
            {hasReviews && (
              <p className="hero-google-link hero-main-block">
                <a href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                  Voir les {site.reviews} avis sur Google →
                </a>
              </p>
            )}
          </div>
          <div className="hero-form-col" id="hero-form">
            <DevisForm idPrefix="hero-cf" />
          </div>
        </div>
      </section>

      <div className="trust-band">
        <div className="trust-band-inner">
          <span>Assuré RC Pro</span>
          <span> · {site.address}</span>
          <span> · ☎ {site.phone}</span>
          {site.since ? <span> · Depuis {site.since}</span> : null}
        </div>
      </div>

      <section className="services-sec" aria-labelledby="h2-svs-mini">
        <div className="section-wrap">
          <div className="sec-title">
            <span className="pill">Nos prestations phares</span>
            <h2 id="h2-svs-mini">
              Un partenaire unique pour vos chantiers, vitrines et remises en état — du devis à la livraison
            </h2>
            <p>Fin de chantier, vitres professionnelles et remise locative pour agences — {site.region}</p>
          </div>
          <div className="services-grid services-grid-primary">
            {primaryServices.map((service) => (
              <ServicePrimaryCard key={service.title} service={service} />
            ))}
          </div>
          <p className="services-also">
            Aussi :{" "}
            {secondaryServiceLinks.map((link, i) => (
              <span key={link.href} className="services-also-item">
                {i > 0 && <span className="services-also-sep" aria-hidden="true"> · </span>}
                <a href={link.href}>{link.label}</a>
              </span>
            ))}
          </p>
          <SectionCta formHref="#hero-form" />
        </div>
      </section>

      {showPortfolioSection ? (
        <section className="chantiers-sec" aria-labelledby="h2-chantiers">
          <div className="section-wrap">
            <div className="sec-title">
              <span className="pill">Réalisations</span>
              <h2 id="h2-chantiers">Chantiers récents</h2>
              <p>Avant / après sur des interventions réelles</p>
            </div>
            <div className="chantiers-scroll">
              <div className="chantiers-grid">
                {recentChantiers.map((chantier) => (
                  <article className="chantier-card" key={chantier.id}>
                    <div className="chantier-photos">
                      <figure className="chantier-photo">
                        <div className="chantier-photo-slot">
                          <PhotoPlaceholder />
                        </div>
                        <figcaption className="chantier-label">Avant</figcaption>
                      </figure>
                      <figure className="chantier-photo">
                        <div className="chantier-photo-slot">
                          <PhotoPlaceholder />
                        </div>
                        <figcaption className="chantier-label">Après</figcaption>
                      </figure>
                    </div>
                    <div className="chantier-legend">
                      <ClientPlaceholder block>{chantier.legend}</ClientPlaceholder>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <article className="pro-ref-card" aria-labelledby="h3-pro-ref">
              <span className="pill">Référence professionnelle</span>
              <h3 id="h3-pro-ref" className="visually-hidden">
                Référence professionnelle
              </h3>
              <ClientPlaceholder block>{proReference.text}</ClientPlaceholder>
            </article>
            <SectionCta formHref="#hero-form" />
          </div>
        </section>
      ) : null}

      <section className="engagements-sec why-sec" aria-labelledby="h2-engagements">
        <div className="section-wrap">
          <div className="engagements-grid">
            <div className="engagements-photo engagements-photo-logo">
              {site.logoSrc ? (
                <img src={site.logoSrc} alt={site.name} width={220} height={80} loading="lazy" />
              ) : (
                <PhotoPlaceholder />
              )}
            </div>
            <div className="engagements-content">
              <span className="pill">Nos engagements</span>
              <h2 id="h2-engagements">Nos 3 engagements</h2>
              <ul className="engagements-list">
                {commitments.map((text) => (
                  <li className="engagement-item" key={text}>
                    <span className="engagement-check" aria-hidden="true">
                      ✓
                    </span>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <SectionCta formHref="#hero-form" />
        </div>
      </section>

      <section className="zones-sec" aria-labelledby="h2-zones" id="zones">
        <div className="section-wrap">
          <div className="sec-title">
            <span className="pill">Zones d&apos;intervention</span>
            <h2 id="h2-zones">On intervient auprès des pros dans l&apos;Ain</h2>
            <p>{site.region} · Devis gratuit sous 24 h · Déplacement sur site</p>
          </div>
          <div className="zones-pills">
            {featuredZones.length > 0
              ? featuredZones.map((zone) => (
                  <a key={zone.href} href={zone.href} className="zone main">
                    📍 {zone.label}
                  </a>
                ))
              : serviceAreas.map((area) => (
                  <span key={area} className="zone main zone-static">
                    📍 {area}
                  </span>
                ))}
          </div>
          {featuredZones.length > 0 ? (
            <p className="zones-more-link">
              <a href="/zones-intervention/">Voir toutes nos communes d&apos;intervention →</a>
            </p>
          ) : null}
          <div className="zones-map-full">
            <iframe
              src="https://maps.google.com/maps?q=2+Rue+Gambetta+01000+Bourg-en-Bresse&z=11&output=embed&hl=fr"
              loading="lazy"
              title={`Zone d'intervention ${site.name}`}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <TestimonialSection />

      <HomePricingSection />

      <section className="page-devis-sec" id="devis" aria-labelledby="devis-h2">
        <div className="section-wrap">
          <div className="sec-title">
            <span className="pill">Devis gratuit</span>
            <h2 id="devis-h2">Recevez votre devis sous 24 h</h2>
            <p>
              {site.region} · Réponse sous 24 h · Sans engagement · ☎ {site.phone}
            </p>
          </div>
          <div className="devis-form-center">
            <DevisForm idPrefix="devis-cf" />
          </div>
          <div className="devis-trust-strip">
            <span className="devis-trust-item">✅ Devis gratuit et personnalisé</span>
            <span className="devis-trust-item">⚡ Réponse sous 24 h</span>
            <span className="devis-trust-item">📍 Déplacement inclus</span>
            <span className="devis-trust-item">🕐 {site.hours}</span>
          </div>
        </div>
      </section>

      <section className="faq-sec" id="faq" aria-labelledby="h2-faq">
        <div className="section-wrap">
          <div className="sec-title">
            <span className="pill">Questions fréquentes</span>
            <h2 id="h2-faq">Avant de nous appeler, vous vous demandez sûrement…</h2>
          </div>
          <div className="faq-list">
            {homepageFaqs.map((faq) => (
              <details key={faq.q}>
                <summary>
                  {faq.q}
                  <span className="faq-arr" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="faq-ans">{faq.a}</div>
              </details>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "24px" }}>
            <a href="/prix/">Voir la grille tarifaire complète →</a>
          </p>
        </div>
      </section>
    </main>
  );
}
