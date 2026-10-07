"use client";

import { pushDataLayer } from "@/lib/analytics";
import { site } from "@/data/site";
import { useEffect } from "react";

const steps = [
  { title: "Analyse de votre demande", text: "Nous étudions le type de prestation, l'adresse et les détails que vous avez indiqués." },
  { title: "Réponse sous 24 h", text: "Vous recevez une estimation claire par email, avec les questions utiles s'il en manque." },
  { title: "Intervention planifiée", text: "On fixe une date qui vous convient, sans surprise sur le tarif annoncé." },
];

export default function MerciContent() {
  useEffect(() => {
    pushDataLayer({ event: "devis_envoye" });
  }, []);

  const contactHref = site.phoneTel ? `tel:${site.phoneTel}` : `mailto:${site.email}`;
  const contactLabel = site.phoneTel ? site.phone : site.email;

  return (
    <section className="merci-sec" aria-labelledby="merci-h1">
      <div className="section-wrap merci-wrap">
        <div className="merci-icon" aria-hidden="true">
          ✓
        </div>
        <h1 id="merci-h1">Demande reçue. Nous vous répondons sous 24 h</h1>
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
          Pour accélérer, envoyez 2–3 photos en répondant à l&apos;email de confirmation ou écrivez-nous à{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <a href={contactHref} className="btn-or merci-tel-btn">
          {site.phoneTel ? "Nous appeler" : "Nous écrire"}
        </a>
        <p style={{ marginTop: "12px", fontSize: ".9rem", color: "var(--muted)" }}>{contactLabel}</p>
      </div>
    </section>
  );
}
