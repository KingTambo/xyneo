import { featuredZones, footerServices, meshLinks, site, socialLinks } from "@/data/site";

export default function Footer() {
  const footerZoneTags = featuredZones.map((z) => {
    const match = z.label.match(/^(.+?) (\d{5})$/);
    const label = match ? `Nettoyage ${match[1]} (${match[2]})` : `Nettoyage ${z.label}`;
    return { href: z.href, label };
  });

  const phoneHref = site.phoneTel ? `tel:${site.phoneTel}` : `mailto:${site.email}`;

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <a href="/">
              {site.logoSrc ? (
                <span className="footer-logo-badge">
                  <img
                    src={site.logoSrc}
                    alt={site.name}
                    className="footer-logo-img"
                    width={200}
                    height={48}
                    loading="lazy"
                  />
                </span>
              ) : null}
              <div className="f-brand-text">
                <strong>{site.name}</strong>
                <span>{site.tagline}</span>
              </div>
            </a>
          </div>
          <p className="f-brand-desc">
            Nettoyage professionnel à {site.city} — fin de chantier, vitres, remise locative et entretien de
            bureaux dans l&apos;Ain.
          </p>
          {(site.siret || site.legalName) && (
            <p className="f-legal-line">
              {site.siret ? <>SIRET {site.siret} · </> : null}
              {site.legalName}
            </p>
          )}
          <p className="f-legal-line">
            <a href="/mentions-legales/">Mentions légales</a>
            {" · "}
            <a href="/on-recrute/">On recrute →</a>
          </p>
          {site.googleReviewsUrl && site.reviews ? (
            <p className="f-legal-line">
              <a href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                Voir nos avis Google →
              </a>
            </p>
          ) : null}
          <span className="f-contacts-label">Nos contacts</span>
          <div className="f-contact-item">
            <span className="f-contact-icon">📞</span>
            <div className="f-contact-text">
              <a href={phoneHref}>{site.phone}</a>
              <br />
              <span style={{ fontSize: ".78rem", color: "rgba(255,255,255,.45)" }}>{site.hours}</span>
            </div>
          </div>
          <div className="f-contact-item">
            <span className="f-contact-icon">✉️</span>
            <div className="f-contact-text">
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>
          <div className="f-contact-item">
            <span className="f-contact-icon">📍</span>
            <div className="f-contact-text">
              <address style={{ display: "inline" }}>{site.address}</address>
            </div>
          </div>
          {socialLinks.length > 0 ? (
            <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: ".78rem", color: "rgba(255,255,255,.55)" }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
        <div className="footer-col">
          <h4>Nos services</h4>
          <ul>
            {footerServices.map((s) => (
              <li key={s.label}>
                <a href={s.href}>{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Pages utiles</h4>
          <ul>
            <li>
              <a href="/nos-realisations/">Nos réalisations</a>
            </li>
            <li>
              <a href="/on-recrute/">On recrute</a>
            </li>
            <li>
              <a href="/#zones">Zones d&apos;intervention</a>
            </li>
            <li>
              <a href="/#hero-form">Demander un devis</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Nous trouver</h4>
          <div className="footer-map">
            <iframe
              src="https://maps.google.com/maps?q=2+Rue+Gambetta+01000+Bourg-en-Bresse&z=14&output=embed&hl=fr"
              width="100%"
              height="180"
              loading="lazy"
              title={`Localisation ${site.name}`}
              style={{ border: 0, borderRadius: "8px" }}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={site.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                marginTop: "8px",
                fontSize: ".78rem",
                color: "rgba(255,255,255,.55)",
                textAlign: "center",
              }}
            >
              Ouvrir dans Google Maps →
            </a>
          </div>
        </div>
      </div>
      {footerZoneTags.length > 0 ? (
        <div className="footer-zones">
          <span className="fz-label">Principales zones :</span>
          {footerZoneTags.map((z) => (
            <a key={z.href} href={z.href} className="ztag">
              {z.label}
            </a>
          ))}
          <a href="/zones-intervention/" className="ztag ztag-more">
            Toutes nos communes →
          </a>
        </div>
      ) : null}
      {meshLinks.length > 0 ? (
        <div className="footer-mesh">
          <span className="fz-label">Nos services par département&nbsp;:</span>
          {meshLinks.map((link) => (
            <a key={link.href} href={link.href} className="ztag" target="_blank" rel="noopener noreferrer">
              ↗ {link.label}
            </a>
          ))}
        </div>
      ) : null}
      <div className="footer-bot">
        <span>© 2026 {site.name} — Tous droits réservés</span>
        <span>
          <a href="/mentions-legales/">Mentions légales</a> · <a href="/politique-de-confidentialite/">Confidentialité</a>
        </span>
      </div>
    </footer>
  );
}
