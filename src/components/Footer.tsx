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
              <img
                src="/img/xyneo-logo.webp"
                alt={site.name}
                className="footer-logo-img"
                width={120}
                height={44}
                loading="lazy"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </a>
            <div className="f-brand-text">
              <strong>{site.name}</strong>
              <span>{site.tagline}</span>
            </div>
          </div>
          <p className="f-brand-desc">
            Nettoyage professionnel à {site.city} depuis {site.since} — fin de chantier, remise en état et Diogène dans l&apos;Ain, le Rhône et la Saône-et-Loire.
          </p>
          <p className="f-legal-line">
            SIRET{" "}
            {site.siret ? (
              site.siret
            ) : (
              <ClientPlaceholder>[À FOURNIR]</ClientPlaceholder>
            )}{" "}
            ·{" "}
            {site.siret && site.legalName ? (
              site.legalName
            ) : (
              <ClientPlaceholder>[Raison sociale À FOURNIR]</ClientPlaceholder>
            )}
          </p>
          <p className="f-legal-line">
            <a href="/mentions-legales/">Mentions légales</a>
          </p>
          <p className="f-legal-line">
            <a href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
              Voir nos {site.reviews} avis Google →
            </a>
          </p>
          <span className="f-contacts-label">Nos contacts</span>
          <div className="f-contact-item">
            <span className="f-contact-icon">
              📞
            </span>
            <div className="f-contact-text">
              <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
              <br />
              <span style={{ fontSize: ".78rem", color: "rgba(255,255,255,.45)" }}>{site.hours}</span>
            </div>
          </div>
          <div className="f-contact-item">
            <span className="f-contact-icon">
              ✉️
            </span>
            <div className="f-contact-text">
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>
          <div className="f-contact-item">
            <span className="f-contact-icon">
              📍
            </span>
            <div className="f-contact-text">
              <address style={{ display: "inline" }}>{site.address}</address>
            </div>
          </div>
          <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
            {socialLinks.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: ".78rem", color: "rgba(255,255,255,.55)" }}>
                {s.label}
              </a>
            ))}
          </div>
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
              <a href="/blog/">Blog</a>
            </li>
            <li>
              <a href="/contactez-nous/">Contactez nous</a>
            </li>
            <li>
              <a href="/#zones">Zones d&apos;intervention</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Nous trouver</h4>
          <div className="footer-map">
            <iframe
              src="https://maps.google.com/maps?q=46.2051,5.2258&z=14&output=embed&hl=fr"
              width="100%"
              height="180"
              loading="lazy"
              title={`Localisation ${site.name}`}
              style={{ border: 0, borderRadius: "8px" }}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href="https://www.google.com/maps?q=46.2051,5.2258"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", marginTop: "8px", fontSize: ".78rem", color: "rgba(255,255,255,.55)", textAlign: "center" }}
            >
              Ouvrir dans Google Maps →
            </a>
          </div>
        </div>
      </div>
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
      <div className="footer-mesh">
        <span className="fz-label">Nos services par département&nbsp;:</span>
        {meshLinks.map((link) => (
          <a key={link.href} href={link.href} className="ztag" target="_blank" rel="noopener noreferrer">
            ↗ {link.label}
          </a>
        ))}
      </div>
      <div className="footer-bot">
        <span>© 2026 {site.name} — Tous droits réservés</span>
        <span>
          <a href="/mentions-legales/">Mentions légales</a> · <a href="/politique-de-confidentialite/">Confidentialité</a>
        </span>
      </div>
    </footer>
  );
}
