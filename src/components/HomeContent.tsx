import {
  beforeAfter,
  faqs,
  pricingBlocks,
  services,
  site,
  testimonials,
  whyItems,
  zones,
} from "@/data/site";
import DevisForm from "./DevisForm";

export default function HomeContent() {
  return (
    <main>
      <section className="hero" aria-labelledby="h1-hero">
        <img
          className="hero-bg"
          src="/img/hero.webp"
          alt={`Nettoyage professionnel à ${site.city} — équipe ${site.name}`}
          width={1600}
          height={900}
          fetchPriority="high"
        />
        <div className="hero-split">
          <div className="hero-content">
            <div className="hero-ratings">
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>
              <strong>{site.rating}/5</strong>
              <span>{site.reviews} avis Google vérifiés</span>
            </div>
            <h1 id="h1-hero">Nettoyage fin de chantier, remise en état locative et Diogène à {site.city}</h1>
            <p className="hero-sub">
              {site.name} intervient dans l&apos;Ain, le Rhône et la Saône-et-Loire pour les chantiers, les logements à relouer et les situations difficiles. Particuliers, MOE, BTP, agences et syndics : devis gratuit sous 24 h.
            </p>
            <div className="hero-badges">
              <span className="badge">Professionnel certifié</span>
              <span className="badge">Devis gratuit 24h</span>
              <span className="badge">{site.hours}</span>
              <span className="badge">Ain · Rhône · Saône-et-Loire</span>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>+{site.reviews}</strong>
                <span>Avis Google</span>
              </div>
              <div className="stat">
                <strong>{site.experience} ans</strong>
                <span>Expérience</span>
              </div>
              <div className="stat">
                <strong>{site.rating} ★</strong>
                <span>Note Google</span>
              </div>
              <div className="stat">
                <strong>24h</strong>
                <span>Devis rapide</span>
              </div>
            </div>
          </div>
          <div className="hero-form-col">
            <DevisForm idPrefix="hero-cf" />
          </div>
        </div>
      </section>

      <div className="reass">
        <div className="reass-inner">
          <span className="reass-item">💳 CB / Visa acceptés</span>
          <span className="reass-item">✅ Avance immédiate crédit d&apos;impôt</span>
        </div>
      </div>

      <section className="services-sec" aria-labelledby="h2-svs-mini" style={{ padding: "72px 0" }}>
        <div className="section-wrap">
          <div className="sec-title">
            <span className="pill">Tous nos services</span>
            <h2 id="h2-svs-mini">Nos services de nettoyage professionnel</h2>
            <p>Fin de chantier, remise en état, Diogène et nettoyage textile — {site.region}</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <a key={service.title} href={service.href} className="sc-link">
                <article className="sc">
                  <div className={`sc-img ${service.imgClass}`} role="img" aria-label={`${service.title} Nice`}>
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
                      <span className="sc-lnk">En savoir plus</span>
                      <span className="sc-arr">→</span>
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="why-sec" aria-labelledby="h2-why">
        <div className="section-wrap">
          <div className="why-grid">
            <div>
              <span className="why-label">Pourquoi nous choisir ?</span>
              <h2 id="h2-why">Un interlocuteur local à votre écoute</h2>
              <p style={{ color: "#525252", marginBottom: "24px", lineHeight: 1.7 }}>
                {site.name} intervient sur les chantiers, les logements à relouer et les situations difficiles, pour les particuliers comme pour les professionnels.
                Fin de chantier, remise en état locative, Diogène, nettoyage textile et vitres : devis gratuit sous 24 h dans tout le secteur de {site.city}.
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
                <div className="big-num">+{site.reviews}</div>
                <div className="big-lbl">clients satisfaits</div>
                <div className="sub-stats">
                  <div className="sub-stat">
                    <strong>4.9/5</strong>
                    <span>Note Google</span>
                  </div>
                  <div className="sub-stat">
                    <strong>{site.experience} ans</strong>
                    <span>Expérience</span>
                  </div>
                </div>
                <a href={`tel:${site.phoneTel}`} className="cta-tel">
                  📞 {site.phone}
                </a>
                <p>{site.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="zones-sec" aria-labelledby="h2-zones" id="zones">
        <div className="section-wrap">
          <div className="sec-title">
            <span className="pill">Zones d&apos;intervention</span>
            <h2 id="h2-zones">Zones d&apos;intervention — Ain, Rhône et Saône-et-Loire</h2>
            <p>Nous intervenons autour de {site.city} · Déplacement inclus · Devis gratuit sous 24h</p>
          </div>
          <div className="zones-filter" data-zones-filter>
            <input type="search" className="zones-search" placeholder="Rechercher une commune ou un code postal…" aria-label="Rechercher une commune ou un code postal" />
            <p className="zones-search-empty" hidden>
              Aucune commune trouvée.
            </p>
            <div className="zones-pills">
              {zones.map((zone) => (
                <a key={zone.href} href={zone.href} className="zone main">
                  📍 {zone.label}
                </a>
              ))}
            </div>
          </div>
          <p className="zones-more-link">
            <a href="/zones-intervention/">
              Voir toutes nos zones d&apos;intervention →
            </a>
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
            <div className="artisan-trust-photo">
              <img
                src="/img/artisan-portrait.webp"
                alt={`Équipe ${site.name} — nettoyage professionnel ${site.city}`}
                width={600}
                height={800}
                loading="lazy"
              />
              <div className="artisan-trust-badges" style={{ marginTop: "16px", flexWrap: "wrap", gap: "6px", justifyContent: "center" }}>
                <span className="at-badge">✅ Professionnel certifié</span>
                <span className="at-badge">📅 Depuis {site.since}</span>
                <span className="at-badge">⭐ {site.reviews}+ avis Google</span>
                <span className="at-badge">🏠 Basé à {site.city}</span>
              </div>
            </div>
            <div className="artisan-trust-text">
              <span className="pill">Votre interlocuteur</span>
              <h2 id="h2-artisan-trust">Un professionnel de confiance à {site.city} depuis {site.since}</h2>
              <p>
                {site.name}, c&apos;est {site.owner} et son équipe, basés à {site.city}. Nous intervenons rapidement dans l&apos;Ain, le Rhône et la Saône-et-Loire avec le matériel professionnel adapté à chaque prestation.
              </p>
              <p>Devis gratuit, tarif transparent, sans sous-traitance. Fin de chantier, remise en état locative ou Diogène : vous nous confiez votre besoin, on s&apos;occupe de tout.</p>
              <a href={`tel:${site.phoneTel}`} className="btn-or" style={{ display: "inline-flex", marginTop: "24px", gap: "8px" }}>
                📞 Appelez le {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="testi-sec" aria-labelledby="h2-testi">
        <div className="section-wrap">
          <div className="sec-title">
            <span className="pill">Avis clients vérifiés</span>
            <h2 id="h2-testi">{site.reviews}+ Avis Clients Vérifiés — {site.region}</h2>
            <p className="testi-rating-line">
              <span className="stars" aria-hidden="true">★★★★★</span> <strong>{site.rating}/5</strong> · {site.reviews} avis Google vérifiés
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
                      <div className="testi-img-wrap">
                        <img src={t.img} alt={t.name} loading="lazy" width={600} height={450} />
                      </div>
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

      <section className="ba-sec" aria-labelledby="h2-ba">
        <div className="section-wrap">
          <div className="sec-title">
            <span className="pill">Résultats concrets</span>
            <h2 id="h2-ba">Nos réalisations — résultats avant &amp; après intervention</h2>
            <p>Photos réelles de nos interventions dans l&apos;Ain, le Rhône et la Saône-et-Loire · Chaque image illustre le résultat final obtenu pour nos clients</p>
          </div>
          <div className="ba-grid">
            {beforeAfter.map((item) => (
              <div className="ba-card" key={item.src}>
                <img src={item.src} alt={item.alt} loading="lazy" width={600} height={450} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rp-sec" aria-labelledby="h2-rp">
        <div className="section-wrap">
          <div className="sec-title">
            <span className="pill">Tarifs</span>
            <h2 id="h2-rp">Nos Tarifs Nettoyage — Grille Indicative 2026</h2>
            <p>Estimation indicative — le devis final est gratuit et personnalisé selon votre chantier</p>
          </div>
        </div>
        <div className="rp-blocks-wrap">
          {pricingBlocks.map((block) => (
            <details className="rp-block" key={block.title}>
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
                <a href={block.href} className="btn-or" style={{ fontSize: ".85rem", padding: "10px 22px" }}>
                  En savoir plus sur {block.title.replace("Nos Tarifs pour ", "")} →
                </a>
              </div>
            </details>
          ))}
        </div>
        <p className="rp-disclaimer">
          Tarifs indicatifs TTC. Devis gratuit et personnalisé sous 24h.
        </p>
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
            <h2 id="devis-h2">Demandez votre devis gratuit</h2>
            <p>
              Nettoyage professionnel — {site.region} · Réponse sous 24h · Sans engagement · ☎ {site.phone}
            </p>
          </div>
          <div className="devis-form-center">
            <DevisForm idPrefix="devis-cf" />
          </div>
          <div className="devis-trust-strip">
            <span className="devis-trust-item">✅ Devis gratuit et personnalisé</span>
            <span className="devis-trust-item">⚡ Réponse sous 24h</span>
            <span className="devis-trust-item">📍 Déplacement inclus — {site.region}</span>
            <span className="devis-trust-item">🕐 {site.hours}</span>
            <span className="devis-trust-item">✅ Avance immédiate crédit d&apos;impôt</span>
          </div>
        </div>
      </section>

      <section className="faq-sec" aria-labelledby="h2-faq">
        <div className="section-wrap">
          <div className="sec-title">
            <span className="pill">Questions fréquentes</span>
            <h2 id="h2-faq">Vos questions sur nos services de nettoyage</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
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
        </div>
      </section>
    </main>
  );
}
