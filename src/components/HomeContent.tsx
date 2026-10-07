import {
  afterRequestSteps,
  featuredZones,
  homepageFaqs,
  primaryServices,
  proDossierItems,
  realisations,
  serviceAreas,
  showPortfolioSection,
  site,
} from "@/data/site";
import CtaPair from "./CtaPair";
import DevisForm from "./DevisForm";
import HomePricingSection from "./HomePricingSection";
import LazyMap from "./LazyMap";
import SectionCta from "./SectionCta";
import RealisationCard from "./RealisationCard";
import ServicePrimaryCard from "./ServicePrimaryCard";
import TestimonialSection from "./TestimonialSection";

export default function HomeContent() {
  const hasReviews = Boolean(site.googleReviewsUrl && site.rating && site.reviews);
  const reviewCount = Number(site.reviews) || 0;
  const ratingDisplay = site.rating ? site.rating.replace(".", ",") : "";
  const showReviewCount = reviewCount >= 10;

  return (
    <main>
      <section className="hero" aria-labelledby="h1-hero">
        <img
          className="hero-bg"
          src="/img/hero.jpg"
          alt=""
          width={1600}
          height={900}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          aria-hidden="true"
        />
        <div className="hero-split">
          <div className="hero-intro">
            <h1 id="h1-hero">
              Nettoyage de fin de chantier, vitres et bureaux pour les pros à {site.city}
            </h1>
            <p className="hero-sub">
              Votre chantier prêt pour la réception, vos vitrines nettes, vos bureaux entretenus — aux horaires
              qui ne gênent pas votre activité. Visite et devis gratuits dans l&apos;Ain.
            </p>
          </div>

          <figure className="hero-photo">
            <img
              src={site.heroPhotoSrc}
              alt="Agent OAO Propreté en tenue professionnelle nettoyant une vitrine à Bourg-en-Bresse"
              width={800}
              height={450}
              loading="eager"
              decoding="async"
            />
          </figure>

          {hasReviews ? (
            <a
              href={site.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-ratings hero-ratings-link hero-ratings-compact"
            >
              <span className="hero-ratings-text">
                <span className="hero-ratings-line">
                  <span className="stars" aria-hidden="true">
                    ★
                  </span>{" "}
                  {ratingDisplay} sur Google
                  {showReviewCount ? ` · ${site.reviews} avis` : ""}
                  {" · "}
                  Assuré RC Pro · Rappel 24 h
                </span>
              </span>
            </a>
          ) : null}

          <div className="hero-form-col" id="hero-form">
            <DevisForm idPrefix="hero-cf" />
          </div>

          <div className="hero-badges">
            <span className="badge">Rappel sous 24 h ouvrées</span>
            <span className="badge">Assuré RC Pro, attestation fournie</span>
            <span className="badge">Interventions tôt le matin ou après fermeture</span>
          </div>
          <CtaPair formHref="#hero-form" className="hero-btns hero-devis-scroll" />
        </div>
      </section>

      <div className="trust-band">
        <div className="trust-band-inner">
          <span>Assuré RC Pro</span>
          <span> · Attestations URSSAF envoyées avec le devis</span>
          <span> · ☎ {site.phone}</span>
          {site.siret ? <span> · SIRET {site.siret}</span> : null}
        </div>
      </div>

      <section className="services-sec" aria-labelledby="h2-svs-mini">
        <div className="section-wrap">
          <div className="sec-title">
            <span className="pill">Nos prestations phares</span>
            <h2 id="h2-svs-mini">Ce qu&apos;on fait pour vous</h2>
            <p>Ponctuel ou régulier, on s&apos;adapte à votre planning — {site.region}</p>
          </div>
          <div className="services-grid services-grid-primary services-grid-quad">
            {primaryServices.map((service) => (
              <ServicePrimaryCard key={service.title} service={service} />
            ))}
          </div>
          <p className="services-also">
            <a href="/nettoyage-dappartement-ou-maison/">Vous êtes un particulier ? Voir nos services pour particuliers →</a>
          </p>
          <SectionCta formHref="#hero-form" />
        </div>
      </section>

      {showPortfolioSection ? (
        <section className="realisations-sec" aria-labelledby="h2-realisations">
          <div className="section-wrap">
            <div className="sec-title">
              <span className="pill">Nos réalisations</span>
              <h2 id="h2-realisations">Des interventions réelles dans l&apos;Ain</h2>
              <p>Photos de chantiers et interventions professionnelles</p>
            </div>
            <div className="realisations-grid">
              {realisations.map((item) => (
                <RealisationCard key={item.id} item={item} />
              ))}
            </div>
            <p className="realisations-more">
              <a href="/nos-realisations/">Voir toutes nos réalisations →</a>
            </p>
            <SectionCta formHref="#hero-form" />
          </div>
        </section>
      ) : null}

      <section className="engagements-sec why-sec" aria-labelledby="h2-engagements">
        <div className="section-wrap">
          <div className="engagements-grid">
            <div className="engagements-photo">
              <img
                src={site.teamPhotoSrc}
                alt="Équipe OAO Propreté en intervention sur une vitrine"
                width={420}
                height={560}
                loading="lazy"
              />
            </div>
            <div className="engagements-content">
              <span className="pill">Notre méthode</span>
              <h2 id="h2-engagements">Ce qui se passe après votre demande</h2>
              <ol className="engagements-list engagements-steps">
                {afterRequestSteps.map((text, index) => (
                  <li className="engagement-item" key={text}>
                    <span className="engagement-check" aria-hidden="true">
                      {index + 1}
                    </span>
                    <p>{text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="pro-dossier-card" aria-labelledby="h3-pro-dossier">
            <span className="pill">Dossier pro prêt</span>
            <h3 id="h3-pro-dossier">Vos attestations, envoyées avec le devis</h3>
            <ul className="pro-dossier-list">
              {proDossierItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <SectionCta formHref="#hero-form" />
        </div>
      </section>

      <section className="zones-sec" aria-labelledby="h2-zones" id="zones">
        <div className="section-wrap">
          <div className="sec-title">
            <span className="pill">Zones d&apos;intervention</span>
            <h2 id="h2-zones">Nettoyage professionnel à {site.city} et dans l&apos;Ain</h2>
            <p>
              {site.region}. Votre ville n&apos;est pas listée ? Appelez-nous au {site.phone} — on vous répond
              tout de suite.
            </p>
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
          <LazyMap
            title={`Zone d'intervention ${site.name}`}
            query="2+Rue+Gambetta+01000+Bourg-en-Bresse"
          />
        </div>
      </section>

      <TestimonialSection />

      <HomePricingSection />

      <section className="page-devis-sec" id="devis" aria-labelledby="devis-h2">
        <div className="section-wrap">
          <div className="sec-title">
            <span className="pill">Devis gratuit</span>
            <h2 id="devis-h2">Votre devis gratuit en 2 minutes</h2>
            <p>
              {site.region} · Rappel sous 24 h ouvrées · Sans engagement · ☎ {site.phone}
            </p>
          </div>
          <div className="devis-social-mini">
            <img src="/img/realisation-1.jpg" alt="" width={120} height={80} loading="lazy" aria-hidden="true" />
            <blockquote>
              {`« Très satisfaite du travail sur les vitrines de notre agence Century 21 ! » — Giulia M.`}
            </blockquote>
          </div>
          <div className="devis-form-center">
            <DevisForm idPrefix="devis-cf" />
          </div>
          <div className="devis-trust-strip">
            <span className="devis-trust-item">✅ Devis gratuit et personnalisé</span>
            <span className="devis-trust-item">⚡ Rappel sous 24 h ouvrées</span>
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
