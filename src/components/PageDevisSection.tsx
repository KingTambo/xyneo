import { site } from "@/data/site";
import DevisForm from "./DevisForm";

type PageDevisSectionProps = {
  pageSource: string;
  title?: string;
  subtitle?: string;
};

export default function PageDevisSection({
  pageSource,
  title = "Un devis gratuit sous 24 h",
  subtitle = "Décrivez votre besoin et recevez une estimation transparente, sans engagement.",
}: PageDevisSectionProps) {
  return (
    <section className="page-devis-sec" id="devis" aria-labelledby="devis-h2">
      <div className="section-wrap">
        <div className="devis-grid">
          <div className="devis-text">
            <span className="pill">Devis gratuit</span>
            <h2 id="devis-h2">{title}</h2>
            <p>{subtitle}</p>
            <div className="devis-trust-strip">
              <span className="devis-trust-item">✓ Réponse sous 24 h</span>
              <span className="devis-trust-item">✓ Sans engagement</span>
              <span className="devis-trust-item">✓ {site.region}</span>
            </div>
            <a href={`tel:${site.phoneTel}`} className="cta-tel" style={{ marginTop: "20px" }}>
              📞 {site.phone}
            </a>
          </div>
          <DevisForm idPrefix="page-cf" pageSource={pageSource} />
        </div>
      </div>
    </section>
  );
}
