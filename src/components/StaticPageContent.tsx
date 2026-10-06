import {
  blogPosts,
  pricingBlocks,
  type StaticPageData,
  zones,
} from "@/data/pages";
import { site } from "@/data/site";
import Breadcrumb from "./Breadcrumb";
import DevisForm from "./DevisForm";
import InnerPageHero from "./InnerPageHero";
import PageDevisSection from "./PageDevisSection";

type StaticPageContentProps = {
  page: StaticPageData;
};

export default function StaticPageContent({ page }: StaticPageContentProps) {
  const path = `/${page.slug}/`;

  switch (page.template) {
    case "contact":
      return (
        <>
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Contact" }]} />
          <InnerPageHero
            title="Contactez nous"
            subtitle={`Une question, un devis ou une intervention urgente ? ${site.name} vous répond sous 24 h.`}
            badges={["Devis gratuit", site.hours]}
          />
          <div className="page-layout">
            <article className="content">
              <h2>Nos coordonnées</h2>
              <p>
                <strong>Téléphone :</strong>{" "}
                <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
                <br />
                <strong>Email :</strong> <a href={`mailto:${site.email}`}>{site.email}</a>
                <br />
                <strong>Adresse :</strong> {site.address}
                <br />
                <strong>Horaires :</strong> {site.hours}
              </p>
              <h2>Zone d&apos;intervention</h2>
              <p>
                Nous intervenons dans l&apos;Ain, le Rhône et la Saône-et-Loire, autour de {site.city}. Consultez{" "}
                <a href="/zones-intervention/">toutes nos communes</a>.
              </p>
            </article>
            <aside className="page-sidebar">
              <DevisForm idPrefix="contact-cf" pageSource={path} />
            </aside>
          </div>
        </>
      );

    case "realisations":
      return (
        <>
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Nos réalisations" }]} />
          <InnerPageHero
            title="Nos réalisations"
            subtitle="Fin de chantier, remise en état, Diogène et nettoyage textile : découvrez le travail de Xyneo."
            badges={[`${site.rating}/5 Google`, `${site.reviews} avis`]}
          />
          <section className="ba-sec">
            <div className="section-wrap">
              <div className="content" style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center", padding: "48px 0" }}>
                <p>
                  Nos photos avant/après de chantiers réels seront publiées prochainement, avec ville, type de prestation
                  et surface. En attendant, contactez-nous pour des références sur votre secteur.
                </p>
                <a href={`tel:${site.phoneTel}`} className="btn-or" style={{ display: "inline-flex", marginTop: "20px" }}>
                  📞 {site.phone}
                </a>
              </div>
            </div>
          </section>
          <PageDevisSection pageSource={path} />
        </>
      );

    case "blog":
      return (
        <>
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Blog" }]} />
          <InnerPageHero
            title="Blog"
            subtitle="Conseils pratiques sur le nettoyage professionnel, la fin de chantier et l'entretien de votre logement."
          />
          <div className="page-layout" style={{ gridTemplateColumns: "1fr" }}>
            <div className="content">
              <div className="blog-grid">
                {blogPosts.map((post) => (
                  <article className="blog-card" key={post.slug}>
                    <span className="blog-card-date">{post.date}</span>
                    <h2>
                      <a href={`/blog/${post.slug}/`}>{post.title}</a>
                    </h2>
                    <p>{post.excerpt}</p>
                    <a href={`/blog/${post.slug}/`} className="sc-lnk">
                      Lire l&apos;article →
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <PageDevisSection pageSource={path} />
        </>
      );

    case "zones":
      return (
        <>
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Zones d'intervention" }]} />
          <InnerPageHero
            title="Zones d'intervention"
            subtitle={`${site.name} intervient dans l'Ain, le Rhône et la Saône-et-Loire. Trouvez votre commune.`}
            badges={[site.region, "Devis gratuit 24h"]}
          />
          <section className="zones-sec">
            <div className="section-wrap">
              <div className="zones-pills">
                {zones.map((z) => (
                  <a key={z.href} href={z.href} className="zone">
                    {z.label}
                  </a>
                ))}
              </div>
              <div className="zones-map-full">
                <iframe
                  src="https://maps.google.com/maps?q=Bourg-en-Bresse&z=9&output=embed&hl=fr"
                  width="100%"
                  height="400"
                  loading="lazy"
                  title="Carte zones d'intervention Xyneo"
                  style={{ border: 0, borderRadius: "10px" }}
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
          <PageDevisSection pageSource={path} />
        </>
      );

    case "prix":
      return (
        <>
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Grille tarifaire" }]} />
          <InnerPageHero
            title="Grille tarifaire"
            subtitle="Tarifs indicatifs TTC. Chaque prestation fait l'objet d'un devis personnalisé gratuit."
            badges={["Devis gratuit", "Sans engagement"]}
          />
          <section className="rp-sec">
            <div className="section-wrap">
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
                        En savoir plus →
                      </a>
                    </div>
                  </details>
                ))}
              </div>
              <p className="rp-disclaimer">Tarifs indicatifs TTC. Devis gratuit et personnalisé sous 24 h.</p>
            </div>
          </section>
          <PageDevisSection pageSource={path} />
        </>
      );

    case "legal-mentions":
      return (
        <>
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]} />
          <div className="page-layout" style={{ gridTemplateColumns: "1fr", paddingTop: "48px" }}>
            <article className="content">
              <h1 style={{ fontSize: "1.8rem", marginBottom: "24px" }}>Mentions légales</h1>
              <h2>Éditeur du site</h2>
              <p>
                {site.name} — {site.owner}
                <br />
                {site.address}
                <br />
                Tél : {site.phone} — Email : {site.email}
              </p>
              <h2>Hébergement</h2>
              <p>Site hébergé par le prestataire d&apos;hébergement du domaine xyneo.fr.</p>
              <h2>Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, logo) est la propriété de {site.name} et ne peut être
                reproduit sans autorisation.
              </p>
            </article>
          </div>
        </>
      );

    case "legal-privacy":
      return (
        <>
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Confidentialité" }]} />
          <div className="page-layout" style={{ gridTemplateColumns: "1fr", paddingTop: "48px" }}>
            <article className="content">
              <h1 style={{ fontSize: "1.8rem", marginBottom: "24px" }}>Politique de confidentialité</h1>
              <p>
                {site.name} s&apos;engage à protéger les données personnelles collectées via le formulaire de contact et
                les cookies du site.
              </p>
              <h2>Données collectées</h2>
              <p>Nom, téléphone, email, ville et description de votre demande, uniquement pour répondre à votre sollicitation.</p>
              <h2>Vos droits</h2>
              <p>
                Vous pouvez demander l&apos;accès, la rectification ou la suppression de vos données en contactant{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </article>
          </div>
        </>
      );

    default:
      return null;
  }
}
