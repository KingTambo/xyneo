import BeforeAfterSlider from "./BeforeAfterSlider";

export type RealisationItem = {
  id: number;
  legend: string;
  pending?: boolean;
  imageSrc?: string;
  beforeSrc?: string;
  alt?: string;
};

export default function RealisationCard({ item }: { item: RealisationItem }) {
  return (
    <article className={`realisation-card${item.pending ? " realisation-card-pending" : ""}`}>
      <BeforeAfterSlider
        pending={item.pending}
        beforeSrc={item.beforeSrc}
        afterSrc={item.imageSrc}
        alt={item.alt ?? item.legend}
      />
      <p className="realisation-legend">{item.legend}</p>
    </article>
  );
}
