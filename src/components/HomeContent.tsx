import {
  featuredZones,
  homepageFaqs,
  homepagePricingBlocks,
  primaryServices,
  commitments,
  proReference,
  recentChantiers,
  secondaryServiceLinks,
  site,
} from "@/data/site";
import ClientPlaceholder from "./ClientPlaceholder";
import CtaPair from "./CtaPair";
import DevisForm from "./DevisForm";
import HeroSegments from "./HeroSegments";
import SectionCta from "./SectionCta";
import TestimonialSection from "./TestimonialSection";

export default function HomeContent() {
  const ratingDisplay = site.rating.replace(".", ",");

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
            <div className="hero-intro">
              <h1 id="h1-hero">
                Nettoyage après travaux, avant état des lieux ou logement encombré à {site.city}
              </h1>
              <p className="hero-sub hero-sub-full">
                Votre chantier livré propre pour la réception, votre logement prêt à relouer, ou un logement très
                encombré remis en état en toute discrétion. Devis gratuit sous 24 h, intervention {site.hours} dans
                l&apos;Ain, le Rhône et la Saône-et-Loire.
              </p>
              <p className="hero-sub hero-sub-short">
                Chantier, relocation ou logement difficile — devis gratuit sous 24 h · {site.region}
              </p>
            </div>
            <div className="hero-extra">
              <div className="hero-ratings">
                <div className="hero-ratings-portrait" title="[À FOURNIR] Portrait M. Ringuet">
                  <ClientPlaceholder block>[À FOURNIR] Portrait {site.ownerFormal}</ClientPlaceholder>
                </div>
                <span className="hero-ratings-text">
                  <span className="stars" aria-hidden="true">
                    ★
                  </span>{" "}
                  {ratingDisplay}/5 · {site.reviews} avis Google · {site.ownerFormal}, {site.ownerRole}
                </span>
              </div>
              <div className="hero-badges">
                <span className="badge">Devis écrit sous 24 h</span>
                <span className="badge">Assuré RC Pro</span>
                <span className="badge">7j/7</span>
              </div>
              <HeroSegments />
              <CtaPair formHref="#hero-form" className="hero-btns hero-devis-scroll" />
              <p className="hero-google-link">
                <a href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                  Voir les {site.reviews} avis sur Google →
                </a>
              </p>
            </div>
          </div>
          <div className="hero-form-col" id="hero-form">
            <DevisForm idPrefix="hero-cf" />
          </div>
        </div>
      </section>

      <div className="trust-band">
        <div className="trust-band-inner">
          <span>Assuré RC Pro </span>
          <ClientPlaceholder>[ASSUREUR À FOURNIR]</ClientPlaceholder>
          <span> · SIRET </span>
          <ClientPlaceholder>[À FOURNIR]</ClientPlaceholder>
          <span>
            {" "}
            · Depuis {site.since} · {site.address}
          </span>
        </div>
      </div>

      <section className="services-sec" aria-labelledby="h2-svs-mini" style={{ padding: "72px 0" }}>
        <div className="section-wrap">
          <div className="sec-title">
            <span className="pill">Nos prestations phares</span>
            <h2 id="h2-svs-mini">
              Votre chantier ou logement remis en état, du devis à la remise des clés — un seul interlocuteur
            </h2>
            <p>Fin de chantier, remise en état ou situation difficile — {site.region}</p>
          </div>
          <div className="services-grid services-grid-primary">
            {primaryServices.map((service) => (
              <a key={service.title} href={service.href} className="sc-link">
                <article className="sc">
                  <div className={`sc-img ${service.imgClass}`} role="img" aria-label={service.title}>
                    <span className="sc-badge">{service.badge}</span>
                  </div>
                  <div className="sc-body">
                    <h3>{service.title}</h3>
                    <p className="sc-tagline">{service.tagline}</p>
                    <div className="sc-compris">
                      <p className="sc-compris-title">{service.comprisTitle}</p>
                      <ul className="sc-checklist">
                        {service.checklist.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="sc-foot">
                      <span className="sc-lnk">Devis pour ce service</span>
                      <span className="sc-arr">→</span>
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
          <p className="services-also">
            Aussi :{" "}
            {secondaryServiceLinks.map((link, i) => (
              <span key={link.href}>
                {i > 0 && " · "}
                <a href={link.href}>{link.label}</a>
              </span>
            ))}
          </p>
          <SectionCta formHref="#hero-form" />
        </div>
      </section>

      <section className="chantiers-sec" aria-labelledby="h2-chantiers">
        <div className="section-wrap">
          <div className="sec-title">
            <span className="pill">Réalisations</span>
            <h2 id="h2-chantiers">Chantiers récents</h2>
            <p>Avant / après sur des interventions réelles — photos à venir</p>
          </div>
          <div className="chantiers-grid">
            {recentChantiers.map((chantier) => (
              <article className="chantier-card" key={chantier.id}>
                <div className="chantier-photos">
                  <figure className="chantier-photo">
                    <div className="chantier-photo-slot ph-slot">
                      <ClientPlaceholder block>[À FOURNIR]</ClientPlaceholder>
                    </div>
                    <figcaption className="chantier-label">Avant</figcaption>
                  </figure>
                  <figure className="chantier-photo">
                    <div className="chantier-photo-slot ph-slot">
                      <ClientPlaceholder block>[À FOURNIR]</ClientPlaceholder>
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

      <section className="engagements-sec why-sec" aria-labelledby="h2-engagements">
        <div className="section-wrap">
          <div className="engagements-grid">
            <div className="engagements-photo">
              <ClientPlaceholder block>[À FOURNIR] {site.ownerFormal} sur un chantier</ClientPlaceholder>
            </div>
            <div className="engagements-content">
              <span className="pill">Nos engagements</span>
              <h2 id="h2-engagements">Nos 3 engagements</h2>
              <ul className="engagements-list">
                {commitments.map((text) => (
                  <li className="engagement-item" key={text}>
                    <ClientPlaceholder className="engagement-badge">[À VALIDER]</ClientPlaceholder>
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
            <h2 id="h2-zones">On intervient chez vous : Ain, Rhône, Saône-et-Loire</h2>
            <p>Intervention dans l&apos;Ain, le Rhône et la Saône-et-Loire · Devis gratuit sous 24 h</p>
          </div>
          <div className="zones-pills">
            {featuredZones.map((zone) => (
              <a key={zone.href} href={zone.href} className="zone main">
                📍 {zone.label}
              </a>
            ))}
          </div>
          <p className="zones-more-link">
            <a href="/zones-intervention/">Voir toutes nos communes d&apos;intervention →</a>
          </p>
          <div className="zones-map-full">
            <iframe
              src="https://maps.google.com/maps?q=46.2051,5.2258&z=10&output=embed&hl=fr"
              loading="lazy"
              title={`Zone d'intervention ${site.name}`}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <TestimonialSection />

      <section className="rp-sec" aria-labelledby="h2-rp">
        <div className="section-wrap">
          <div className="sec-title">
            <span className="pill">Tarifs</span>
            <h2 id="h2-rp">Combien ça coûte ? Nos prix de départ</h2>
            <p>Tarifs indicatifs TTC · Devis personnalisé gratuit après visite sur place</p>
          </div>
        </div>
        <div className="rp-blocks-wrap">
          {homepagePricingBlocks.map((block) => (
            <details className="rp-block" key={block.title} open>
              <summary className="rp-summary">
                <h3>{block.title}</h3>
                <span className="rp-chevron" aria-hidden="true">
                  ▾
                </span>
              </summary>
              <div className="rp-content">
                <table className="rp-table">
                  <thead>
                    <tr>
                      <th>Critère / Prestation</th>
                      <th>Tarif indicatif TTC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map(([label, price, muted], rowIndex) => (
                      <tr key={`${block.title}-${rowIndex}`} className={muted ? "rp-muted" : undefined}>
                        <td>{label}</td>
                        <td>
                          <span className="rp-price-val">{price}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </details>
          ))}
        </div>
        <p className="rp-disclaimer">Tarifs indicatifs TTC. Devis gratuit et personnalisé sous 24 h.</p>
        <div className="section-wrap">
          <SectionCta formHref="#hero-form" />
          <p style={{ textAlign: "center", marginTop: "16px" }}>
            <a href="/prix/">Voir la grille tarifaire complète →</a>
          </p>
        </div>
      </section>

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
