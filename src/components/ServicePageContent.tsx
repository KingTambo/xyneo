import {
  getRelatedServices,
  getServicePricing,
  type ServicePageData,
} from "@/data/pages";
import { site } from "@/data/site";
import Breadcrumb from "./Breadcrumb";
import InnerPageHero from "./InnerPageHero";
import PageDevisSection from "./PageDevisSection";

type ServicePageContentProps = {
  page: ServicePageData;
};

export default function ServicePageContent({ page }: ServicePageContentProps) {
  const path = `/${page.slug}/`;
  const pricing = getServicePricing(page.slug);
  const related = getRelatedServices(page.relatedSlugs);

  return (
    <>
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: page.title }]} />
      <InnerPageHero
        title={`${page.title} à ${site.city}`}
        subtitle={page.heroSubtitle}
        badges={[page.badge ?? "Devis gratuit 24h", site.region].filter(Boolean) as string[]}
      />

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
            <h3>Devis rapide</h3>
            <p style={{ fontSize: ".85rem", color: "#6b6b6b", marginBottom: "12px" }}>
              Réponse sous 24 h pour {page.title.toLowerCase()}.
            </p>
            <a href="#devis" className="btn-or" style={{ display: "block", textAlign: "center" }}>
              Demander un devis
            </a>
            <a href={`tel:${site.phoneTel}`} className="sidebar-tel">
              📞 {site.phone}
            </a>
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

      <PageDevisSection
        pageSource={path}
        title={`Devis ${page.title.toLowerCase()}`}
        subtitle={`Intervention à ${site.city} et dans ${site.region}. Devis gratuit sous 24 h.`}
      />
    </>
  );
}
