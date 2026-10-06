import { site } from "@/data/site";
import CtaPair from "./CtaPair";

type InnerPageHeroProps = {
  title: string;
  subtitle: string;
  badges?: string[];
  formHref?: string;
  variant?: "default" | "discreet";
};

export default function InnerPageHero({
  title,
  subtitle,
  badges,
  formHref = "#devis",
  variant = "default",
}: InnerPageHeroProps) {
  return (
    <section className="page-hero">
      <div className="section-wrap">
        {badges && badges.length > 0 && (
          <div className="ph-badges">
            {badges.map((badge) => (
              <span className="badge" key={badge}>
                {badge}
              </span>
            ))}
          </div>
        )}
        <h1>{title}</h1>
        <p className="sub">{subtitle}</p>
        <CtaPair formHref={formHref} variant={variant} />
        <div className="page-stats">
          <div className="stat">
            <strong>{site.rating} ★</strong>
            <span>{site.reviews} avis Google</span>
          </div>
          <div className="stat">
            <strong>24h</strong>
            <span>Devis rapide</span>
          </div>
          <div className="stat">
            <strong>{site.experience} ans</strong>
            <span>Expérience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
