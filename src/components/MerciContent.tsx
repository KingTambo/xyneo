"use client";

import { pushDataLayer } from "@/lib/analytics";
import { site } from "@/data/site";
import { useEffect } from "react";

const steps = [
  { title: "Appel de confirmation", text: `${site.ownerFirst} ou son équipe vous contacte pour préciser votre besoin.` },
  { title: "Visite gratuite sur place", text: "Évaluation du logement ou du chantier, sans engagement." },
  { title: "Devis écrit sous 24 h", text: "Tarif clair et détaillé, adapté à votre situation." },
];

export default function MerciContent() {
  useEffect(() => {
    pushDataLayer({ event: "devis_envoye" });
  }, []);

  return (
    <section className="merci-sec" aria-labelledby="merci-h1">
      <div className="section-wrap merci-wrap">
        <div className="merci-icon" aria-hidden="true">
          ✓
        </div>
        <h1 id="merci-h1">Demande reçue. {site.ownerFirst} vous rappelle sous 24 h</h1>
        <ol className="merci-steps">
          {steps.map((step, i) => (
            <li key={step.title}>
              <span className="merci-step-num">{i + 1}</span>
              <div>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="merci-sms">
          Pour accélérer, envoyez 2–3 photos par SMS au{" "}
          <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
        </p>
        <a href={`tel:${site.phoneTel}`} className="btn-or merci-tel-btn">
          Appeler {site.ownerFirst}
        </a>
      </div>
    </section>
  );
}
