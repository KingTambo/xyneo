import { type ZonePageData } from "@/data/pages";
import { site } from "@/data/site";
import Breadcrumb from "./Breadcrumb";
import CtaPair from "./CtaPair";
import InnerPageHero from "./InnerPageHero";
import PageDevisSection from "./PageDevisSection";

type ZonePageContentProps = {
  page: ZonePageData;
};

export default function ZonePageContent({ page }: ZonePageContentProps) {
  const path = `/${page.slug}/`;

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Zones d'intervention", href: "/zones-intervention/" },
          { label: page.city },
        ]}
      />
      <InnerPageHero
        title={`Nettoyage professionnel à ${page.city}`}
        subtitle={`${site.name} intervient à ${page.city} (${page.postalCode}) et dans tout le ${page.department} pour fin de chantier, remise en état locative, Diogène et nettoyage textile.`}
        badges={["Devis gratuit 24h", page.department]}
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

          <section>
            <h2>Questions fréquentes — {page.city}</h2>
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
            <h3>Intervention à {page.city}</h3>
            <p style={{ fontSize: ".85rem", color: "#6b6b6b", marginBottom: "12px" }}>
              Décrivez votre besoin, nous vous rappelons sous 24 h.
            </p>
            <CtaPair formHref="#devis" />
          </div>
          <div className="sidebar-box">
            <h4>Communes voisines ({page.department})</h4>
            <ul className="sidebar-links">
              {page.nearbyZones.map((z) => (
                <li key={z.href}>
                  <a href={z.href}>{z.label} →</a>
                </li>
              ))}
              <li>
                <a href="/zones-intervention/">Toutes nos communes →</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <PageDevisSection
        pageSource={path}
        title={`Devis nettoyage à ${page.city}`}
        subtitle={`${site.name} intervient à ${page.city} (${page.postalCode}). Devis gratuit sous 24 h.`}
      />
    </>
  );
}
