import { featuredZones, footerServices, meshLinks, site, socialLinks } from "@/data/site";
import ClientPlaceholder from "./ClientPlaceholder";

export default function Footer() {
  const footerZoneTags = featuredZones.map((z) => {
    const match = z.label.match(/^(.+?) (\d{5})$/);
    const label = match ? `Nettoyage ${match[1]} (${match[2]})` : `Nettoyage ${z.label}`;
    return { href: z.href, label };
  });

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <a href="/">
              {site.logoSrc ? (
                <>
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
                  <span className="f-brand-tagline">{site.tagline}</span>
                </>
              ) : (
                <div className="f-brand-text">
                  <strong>{site.name}</strong>
                  <span>{site.tagline}</span>
                </div>
              )}
            </a>
          </div>
          <p className="f-brand-desc">
            Nettoyage de vitres, fin de chantier et bureaux. Devis gratuit sous 24 h, sans engagement.
          </p>
          <p className="f-legal-line">
            SIRET{" "}
            {site.siret ? (
              site.siret
            ) : (
              <ClientPlaceholder>[À FOURNIR]</ClientPlaceholder>
            )}{" "}
            · {site.legalName}
          </p>
          <p className="f-legal-line">
            <a href="/mentions-legales/">Mentions légales</a>
          </p>
          {site.googleReviewsUrl && site.reviews ? (
            <p className="f-legal-line">
              <a href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                Voir nos {site.reviews} avis Google →
              </a>
            </p>
          ) : null}
          <span className="f-contacts-label">Nos contacts</span>
          {site.phoneTel ? (
            <div className="f-contact-item">
              <span className="f-contact-icon">📞</span>
              <div className="f-contact-text">
                <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
                <br />
                <span style={{ fontSize: ".78rem", color: "rgba(255,255,255,.45)" }}>{site.hours}</span>
              </div>
            </div>
          ) : null}
          <div className="f-contact-item">
            <span className="f-contact-icon">✉️</span>
            <div className="f-contact-text">
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>
          <div className="f-contact-item">
            <span className="f-contact-icon">📍</span>
            <div className="f-contact-text">
              <address style={{ display: "inline" }}>
                {site.address.startsWith("[") ? <ClientPlaceholder>{site.address}</ClientPlaceholder> : site.address}
              </address>
            </div>
          </div>
          {socialLinks.length > 0 ? (
            <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
              {socialLinks.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: ".78rem", color: "rgba(255,255,255,.55)" }}>
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
              <a href="/contactez-nous/">Contactez-nous</a>
            </li>
            <li>
              <a href="/#hero-form">Demander un devis</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p style={{ fontSize: ".85rem", color: "rgba(255,255,255,.65)", lineHeight: 1.6 }}>
            <a href={`mailto:${site.email}`} style={{ color: "inherit" }}>
              {site.email}
            </a>
            <br />
            {site.hours}
            <br />
            <a href={site.website} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,.55)" }}>
              {site.website.replace(/^https?:\/\//, "")}
            </a>
          </p>
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
