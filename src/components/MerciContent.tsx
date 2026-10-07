"use client";

import { pushDataLayer } from "@/lib/analytics";
import { site } from "@/data/site";
import { useEffect } from "react";

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
        <h1 id="merci-h1">Demande reçue. On vous rappelle sous 24 h ouvrées</h1>
        <p className="merci-lead">
          Enregistrez le <strong>{site.phone}</strong> — c&apos;est ce numéro qui va vous appeler.
        </p>
        <ol className="merci-steps">
          <li>
            <span className="merci-step-num">1</span>
            <div>
              <strong>Rappel sous 24 h ouvrées</strong>
              <p>Depuis le {site.phone} pour préciser votre besoin.</p>
            </div>
          </li>
          <li>
            <span className="merci-step-num">2</span>
            <div>
              <strong>Visite gratuite sur place</strong>
              <p>Évaluation du chantier ou des locaux, sans engagement.</p>
            </div>
          </li>
          <li>
            <span className="merci-step-num">3</span>
            <div>
              <strong>Devis écrit</strong>
              <p>Tarif clair, avec attestations pro si vous en avez besoin.</p>
            </div>
          </li>
        </ol>
        <p className="merci-sms">
          Pour aller plus vite, envoyez 2–3 photos par SMS au{" "}
          <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
        </p>
        <a href={`tel:${site.phoneTel}`} className="btn-or merci-tel-btn">
          {site.phone}
        </a>
      </div>
    </section>
  );
}
