"use client";

import { homepagePricingBlocks } from "@/data/site";
import SectionCta from "./SectionCta";
import { useCallback, useEffect, useState } from "react";

const MOBILE_MQ = "(max-width: 767px)";

export default function HomePricingSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);
    const sync = () => {
      const mobile = mq.matches;
      setIsMobile(mobile);
      if (mobile) setOpenIndex(0);
    };
    setHydrated(true);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  function isBlockOpen(index: number) {
    if (!hydrated) return index === 0;
    return isMobile ? openIndex === index : true;
  }

  const handleSummaryClick = useCallback(
    (index: number, event: React.MouseEvent<HTMLElement>) => {
      if (!isMobile) return;
      event.preventDefault();
      setOpenIndex((prev) => (prev === index ? -1 : index));
    },
    [isMobile],
  );

  return (
    <section className="rp-sec" aria-labelledby="h2-rp">
      <div className="section-wrap">
        <div className="sec-title">
          <span className="pill">Tarifs</span>
          <h2 id="h2-rp">Combien ça coûte ? Nos prix de départ</h2>
          <p>Prix de départ HT pour les pros. Le prix exact dépend de la surface et de l&apos;état ; fixé après visite gratuite.</p>
        </div>
      </div>
      <div className="rp-blocks-wrap">
        {homepagePricingBlocks.map((block, index) => (
          <details
            className="rp-block"
            key={block.title}
            open={isBlockOpen(index)}
          >
            <summary className="rp-summary" onClick={(event) => handleSummaryClick(index, event)}>
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
                    <th>Tarif indicatif HT</th>
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
          </details>
        ))}
      </div>
      <p className="rp-disclaimer">Tarifs indicatifs HT. Devis gratuit et personnalisé — rappel sous 24 h ouvrées.</p>
      <div className="section-wrap">
        <SectionCta formHref="#hero-form" />
        <p className="rp-full-link">
          <a href="/prix/">Voir la grille tarifaire complète →</a>
        </p>
      </div>
    </section>
  );
}
