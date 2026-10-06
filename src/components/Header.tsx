import { navLinks, site } from "@/data/site";

export default function Header() {
  return (
    <>
      <div className="topbar">
        <span className="topbar-full">
          Intervention dans l&apos;Ain, le Rhône et la Saône-et-Loire &nbsp;·&nbsp;
          <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
          &nbsp;·&nbsp; {site.hours}
        </span>
        <span className="topbar-mobile">
          <a href={`tel:${site.phoneTel}`}>{site.phone}</a> · 7j/7
        </span>
      </div>
      <nav aria-label="Navigation principale">
        <div className="nav-inner">
          <a href="/" className="logo" aria-label={`Accueil ${site.name}`}>
            <img
              className="logo-img"
              src="/img/xyneo-logo.webp"
              alt=""
              width={120}
              height={44}
              loading="eager"
            />
            <div className="logo-text">
              <strong>{site.name}</strong>
              <span>{site.tagline}</span>
            </div>
          </a>
          <input type="checkbox" id="nt" aria-hidden="true" />
          <label htmlFor="nt" className="hbg">
            <span></span>
            <span></span>
            <span></span>
            <span className="sr-only">Ouvrir le menu</span>
          </label>
          <ul className="nav-links" role="list">
            {navLinks.map((link) =>
              "children" in link ? (
                <li className="has-sub" role="none" key={link.label}>
                  <a href={link.href}>Services</a>
                  <button className="sub-toggle" aria-expanded="false" aria-label="Voir les services">
                    ▾
                  </button>
                  <ul className="sub-menu" role="list">
                    {link.children?.map((child) => (
                      <li key={child.href}>
                        <a href={child.href}>{child.label}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li role="none" key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ),
            )}
            <li role="none">
              <a href="/#hero-form" className="nav-cta">
                Recevoir mon devis sous 24 h
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mob-bar" id="mob-bar" aria-label="Actions rapides">
        <a href={`tel:${site.phoneTel}`} className="mob-tel">
          📞 {site.phone}
        </a>
        <a href="/#hero-form" className="mob-dev" aria-label="Recevoir mon devis sous 24 h">
          Mon devis 24 h
        </a>
      </div>
    </>
  );
}
