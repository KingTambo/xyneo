import {
  featuredZones,
  homepageFaqs,
  homepagePricingBlocks,
  primaryServices,
  secondaryServiceLinks,
  site,
  testimonials,
  whyItems,
} from "@/data/site";
import DevisForm from "./DevisForm";

export default function HomeContent() {
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
          aria-hidden="true"
        />
        <div className="hero-split">
          <div className="hero-content">
            <div className="hero-ratings">
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>
              <strong>{site.rating}/5</strong>
              <span>
                sur Google ({site.reviews} avis) · Basé à {site.city} depuis {site.since}
              </span>
            </div>
            <h1 id="h1-hero">
              Nettoyage après travaux, avant état des lieux ou logement encombré à {site.city}
            </h1>
            <p className="hero-sub">
              Votre chantier livré propre pour la réception, votre logement prêt à relouer, ou un logement très
              encombré remis en état en toute discrétion. Devis gratuit sous 24 h, intervention {site.hours} dans
              l&apos;Ain, le Rhône et la Saône-et-Loire.
            </p>
            <div className="hero-badges">
              <span className="badge">Depuis {site.since}</span>
              <span className="badge">Devis gratuit 24 h</span>
              <span className="badge">RC Pro — attestation sur demande</span>
            </div>
            <div className="hero-segments" role="navigation" aria-label="Choisir votre profil">
              <a href="/nettoyage-de-fin-de-chantier/" className="hero-seg">
                Je suis pro du bâtiment
              </a>
              <a href="/remise-en-etat-locative/" className="hero-seg">
                Je loue ou gère un logement
              </a>
              <a href="/nettoyage-diogene/" className="hero-seg hero-seg-discreet">
                Logement encombré ou après décès
              </a>
            </div>
            <div className="hero-btns">
              <a href="#devis" className="btn-or">
                Recevoir mon devis sous 24 h
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-wh">
                Appeler {site.owner.split(" ")[0]} : {site.phone}
              </a>
            </div>
            <p className="hero-google-link">
              <a href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                Voir les {site.reviews} avis sur Google →
              </a>
            </p>
          </div>
          <div className="hero-form-col">
            <DevisForm idPrefix="hero-cf" />
          </div>
        </div>
      </section>

      <div className="reass">
        <div className="reass-inner">
          <span className="reass-item">📅 Depuis {site.since}</span>
          <span className="reass-item">🛡️ Assuré RC Pro</span>
          <span className="reass-item">📍 Basé à {site.city}</span>
          <span className="reass-item">💳 CB / Visa acceptés</span>
        </div>
      </div>

      <section className="services-sec" aria-labelledby="h2-svs-mini" style={{ padding: "72px 0" }}>
        <div className="section-wrap">
          <div className="sec-title">
            <span className="pill">Nos prestations phares</span>
            <h2 id="h2-svs-mini">Trois expertises, un seul interlocuteur</h2>
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
        </div>
      </section>

      <section className="why-sec" aria-labelledby="h2-why">
        <div className="section-wrap">
          <div className="why-grid">
            <div>
              <span className="why-label">Pourquoi nous choisir ?</span>
              <h2 id="h2-why">Un seul interlocuteur, du devis à la fin du chantier</h2>
              <p style={{ color: "#525252", marginBottom: "24px", lineHeight: 1.7 }}>
                {site.name}, c&apos;est {site.owner} : il évalue chaque chantier lui-même et reste votre contact
                unique. Son équipe intervient sans sous-traitance, 7j/7 de 7h30 à 21h.
              </p>
              <div className="why-items">
                {whyItems.map((item) => (
                  <div className="why-item" key={item.title}>
                    <div className="wi-ico">{item.icon}</div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="why-card">
                <div className="big-num">{site.rating}/5</div>
                <div className="big-lbl">{site.reviews} avis Google</div>
                <div className="sub-stats">
                  <div className="sub-stat">
                    <strong>{site.since}</strong>
                    <span>En activité depuis</span>
                  </div>
                  <div className="sub-stat">
                    <strong>24h</strong>
                    <span>Devis rapide</span>
                  </div>
                </div>
                <a href={`tel:${site.phoneTel}`} className="cta-tel">
                  📞 {site.phone}
                </a>
                <p>{site.hours}</p>
                <a
                  href={site.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="why-google-link"
                >
                  Voir les avis sur Google →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="zones-sec" aria-labelledby="h2-zones" id="zones">
        <div className="section-wrap">
          <div className="sec-title">
            <span className="pill">Zones d&apos;intervention</span>
            <h2 id="h2-zones">Intervention autour de {site.city}</h2>
            <p>Déplacement inclus dans l&apos;Ain, le Rhône et la Saône-et-Loire · Devis gratuit sous 24 h</p>
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

      <section className="artisan-trust" aria-labelledby="h2-artisan-trust">
        <div className="section-wrap">
          <div className="artisan-trust-grid">
            <div className="artisan-trust-text">
              <span className="pill">Votre interlocuteur</span>
              <h2 id="h2-artisan-trust">{site.owner}, votre contact unique à {site.city}</h2>
              <p>
                Je viens évaluer moi-même chaque chantier et je reste votre seul interlocuteur jusqu&apos;à la fin.
                Mon équipe intervient avec le matériel professionnel adapté — fin de chantier, remise en état ou
                situation difficile.
              </p>
              <p>Devis gratuit sur place, prix ferme après visite, sans sous-traitance.</p>
              <div className="artisan-trust-badges">
                <span className="at-badge">📅 Depuis {site.since}</span>
                <span className="at-badge">🛡️ RC Pro</span>
                <span className="at-badge">⭐ {site.rating}/5 · {site.reviews} avis</span>
                <span className="at-badge">🏠 {site.city}</span>
              </div>
              <a href={`tel:${site.phoneTel}`} className="btn-or" style={{ display: "inline-flex", marginTop: "24px", gap: "8px" }}>
                📞 Appeler {site.owner.split(" ")[0]} : {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="testi-sec" aria-labelledby="h2-testi">
        <div className="section-wrap">
          <div className="sec-title">
            <span className="pill">Avis clients vérifiés</span>
            <h2 id="h2-testi">{site.rating}/5 sur Google — {site.reviews} avis</h2>
            <p className="testi-rating-line">
              <a href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                Voir les {site.reviews} avis sur Google →
              </a>
            </p>
          </div>
          <div className="testi-carousel-wrap">
            <button className="tc-btn tc-prev" aria-label="Précédent">
              &#8249;
            </button>
            <div className="testi-viewport">
              <div className="testi-track">
                {testimonials.map((t) => (
                  <div className="testi-slide" key={t.name}>
                    <div className="testi-card">
                      <div className="testi-body">
                        <div className="testi-stars">⭐⭐⭐⭐⭐</div>
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="tc-btn tc-next" aria-label="Suivant">
              &#8250;
            </button>
          </div>
          <div className="tc-dots">
            {testimonials.map((_, i) => (
              <button key={i} className={`tc-dot${i === 0 ? " active" : ""}`} data-i={i} aria-label={`Avis ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="rp-sec" aria-labelledby="h2-rp">
        <div className="section-wrap">
          <div className="sec-title">
            <span className="pill">Tarifs</span>
            <h2 id="h2-rp">Fourchettes indicatives — 3 prestations phares</h2>
            <p>Prix indicatifs TTC · Prix ferme après visite gratuite sur place</p>
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
              <div className="rp-cta-row">
                <a href={`${block.href}#devis`} className="btn-or" style={{ fontSize: ".85rem", padding: "10px 22px" }}>
                  Devis pour ce service →
                </a>
              </div>
            </details>
          ))}
        </div>
        <p className="rp-disclaimer">Tarifs indicatifs TTC. Devis gratuit et personnalisé sous 24 h.</p>
        <div style={{ textAlign: "center", marginTop: "16px", paddingBottom: "16px" }}>
          <a href="/prix/" className="btn-or">
            Voir la grille tarifaire complète →
          </a>
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
            <h2 id="h2-faq">Vos questions, nos réponses</h2>
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
