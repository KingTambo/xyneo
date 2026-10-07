import { profilePresets, site, type services } from "@/data/site";

type Service = (typeof services)[number];

const discreetProfileByHref: Partial<Record<string, keyof typeof profilePresets>> = {};

function isDiscreetService(href: string) {
  return href in discreetProfileByHref;
}

function ServiceCompris({ service }: { service: Service }) {
  const list = (
    <>
      <p className="sc-compris-title">{service.comprisTitle}</p>
      <ul className="sc-checklist">
        {service.checklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );

  return (
    <>
      <div className="sc-compris sc-compris-desktop">{list}</div>
      <details className="sc-compris-details">
        <summary>Voir ce qui est inclus ▾</summary>
        <div className="sc-compris">{list}</div>
      </details>
    </>
  );
}

function ServiceCardBody({ service }: { service: Service }) {
  return (
    <>
      <h3>{service.title}</h3>
      <p className="sc-tagline">{service.tagline}</p>
      <ServiceCompris service={service} />
    </>
  );
}

export default function ServicePrimaryCard({ service }: { service: Service }) {
  const discreet = isDiscreetService(service.href);
  const profilKey = discreet ? discreetProfileByHref[service.href] : undefined;

  if (discreet && profilKey) {
    return (
      <article className="sc sc-discreet">
        <a href={service.href} className="sc-top-link">
          <div className={`sc-img ${service.imgClass}`} role="img" aria-label={service.title}>
            <span className="sc-badge">{service.badge}</span>
          </div>
          <div className="sc-body">
            <ServiceCardBody service={service} />
          </div>
        </a>
        <div className="sc-foot sc-foot-discreet">
          <a href={`/?profil=${profilKey}#hero-form`} className="sc-lnk sc-lnk-discreet">
            Parler de votre situation en toute discrétion
          </a>
          <a href={site.phoneTel ? `tel:${site.phoneTel}` : `mailto:${site.email}`} className="sc-lnk-tel">
            {site.phoneTel ? (site.ownerFirst ? `Appeler ${site.ownerFirst}` : "Nous appeler") : "Nous écrire"}
          </a>
        </div>
      </article>
    );
  }

  return (
    <a href={service.href} className="sc-link">
      <article className="sc">
        <div className={`sc-img ${service.imgClass}`} role="img" aria-label={service.title}>
          <span className="sc-badge">{service.badge}</span>
        </div>
        <div className="sc-body">
          <ServiceCardBody service={service} />
          <div className="sc-foot">
            <span className="sc-lnk">Devis pour ce service</span>
            <span className="sc-arr">→</span>
          </div>
        </div>
      </article>
    </a>
  );
}
