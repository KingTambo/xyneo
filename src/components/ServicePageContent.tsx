import {
  getRelatedServices,
  getServicePricing,
  type ServicePageData,
} from "@/data/pages";
import { discreetServiceSlugs, slugToServiceTitle } from "@/lib/form-presets";
import { site } from "@/data/site";
import Breadcrumb from "./Breadcrumb";
import CtaPair from "./CtaPair";
import DevisForm from "./DevisForm";

type ServicePageContentProps = {
  page: ServicePageData;
};

export default function ServicePageContent({ page }: ServicePageContentProps) {
  const path = `/${page.slug}/`;
  const pricing = getServicePricing(page.slug);
  const related = getRelatedServices(page.relatedSlugs);
  const defaultService = slugToServiceTitle(page.slug);
  const isDiscreet = discreetServiceSlugs.has(page.slug);

  return (
    <>
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: page.title }]} />

      <section className="hero service-hero" aria-labelledby="service-h1">
        <div className="hero-split">
          <div className="hero-main">
            <div className="hero-intro">
              <h1 id="service-h1">
                {page.title} à {site.city}
              </h1>
              <p className="hero-sub hero-sub-full">{page.heroSubtitle}</p>
            </div>
            <div className="hero-extra">
              {page.badge && (
                <div className="ph-badges">
                  <span className="badge">{page.badge}</span>
                  <span className="badge">{site.region}</span>
                </div>
              )}
              <CtaPair formHref="#devis" variant={isDiscreet ? "discreet" : "default"} />
            </div>
          </div>
          <div className="hero-form-col" id="devis">
            <DevisForm idPrefix="service-cf" pageSource={path} defaultService={defaultService} />
          </div>
        </div>
      </section>

      <div className="page-layout">
        <article className="content">
          {page.sections.map((section) => (
            <section key={section.h2}>
              <h2>{section.h2}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              {section.list && (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {pricing && (
            <section>
              <h2>Tarifs indicatifs</h2>
              <table>
                <thead>
                  <tr>
                    <th>Prestation</th>
                    <th>Tarif TTC</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.rows.map(([label, price], i) => (
                    <tr key={`${label}-${i}`}>
                      <td>{label}</td>
                      <td>{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="note">Tarifs indicatifs. Devis personnalisé gratuit sur place.</p>
            </section>
          )}

          <section>
            <h2>Questions fréquentes</h2>
            <div className="faq-list">
              {page.faqs.map((faq) => (
                <details className="faq-item" key={faq.q}>
                  <summary>
                    {faq.q}
                    <span className="faq-arr" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="faq-ans">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        </article>

        <aside className="page-sidebar">
          <div className="cf-wrap">
            <h3>Besoin d&apos;aide ?</h3>
            <p style={{ fontSize: ".85rem", color: "#6b6b6b", marginBottom: "12px" }}>
              Réponse sous 24 h pour {page.title.toLowerCase()}.
            </p>
            <CtaPair formHref="#devis" variant={isDiscreet ? "discreet" : "default"} />
          </div>
          {related.length > 0 && (
            <div className="sidebar-box">
              <h4>Services associés</h4>
              <ul className="sidebar-links">
                {related.map((r) => (
                  <li key={r.href}>
                    <a href={r.href}>{r.title} →</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}
