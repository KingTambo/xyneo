import CtaPair from "./CtaPair";

type SectionCtaProps = {
  formHref?: string;
  variant?: "default" | "discreet";
};

export default function SectionCta({ formHref = "#hero-form", variant = "default" }: SectionCtaProps) {
  return (
    <div className="section-cta">
      <CtaPair formHref={formHref} variant={variant} />
    </div>
  );
}
