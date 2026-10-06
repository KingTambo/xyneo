"use client";

import { profilePresets, serviceOptions, site } from "@/data/site";
import { useEffect, useRef, useState } from "react";

type DevisFormProps = {
  idPrefix: string;
  pageSource?: string;
  defaultService?: string;
  defaultProfile?: string;
};

const clientTypes = [
  { value: "particulier", label: "Particulier" },
  { value: "agence", label: "Agence, syndic ou bailleur" },
  { value: "btp", label: "Entreprise du bâtiment ou MOE" },
];

const surfaceOptions = [
  "Moins de 40 m²",
  "40 – 80 m²",
  "80 – 150 m²",
  "Plus de 150 m²",
  "Je ne sais pas",
];

const urgencyOptions = [
  "Urgent (sous 72 h)",
  "Sous 2 semaines",
  "Date précise",
  "Flexible",
];

function readProfileFromUrl(defaultProfile: string) {
  if (typeof window === "undefined") return defaultProfile;
  return new URLSearchParams(window.location.search).get("profil") || defaultProfile;
}

export default function DevisForm({
  idPrefix,
  pageSource = "/",
  defaultService = "",
  defaultProfile = "",
}: DevisFormProps) {
  const [step, setStep] = useState(1);
  const [clientType, setClientType] = useState("");
  const [service, setService] = useState(defaultService);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const profileKey = readProfileFromUrl(defaultProfile);
    const preset = profileKey ? profilePresets[profileKey] : undefined;
    if (preset) {
      setClientType(preset.clientType);
      setService(preset.service);
    }
  }, [defaultProfile]);

  useEffect(() => {
    const form = formRef.current;
    if (!form || typeof window === "undefined") return;
    const fields = ["utm_source", "utm_medium", "utm_campaign", "gclid", "last_referrer", "landing_page"] as const;
    fields.forEach((name) => {
      const el = form.elements.namedItem(name) as HTMLInputElement | null;
      const val = sessionStorage.getItem(name);
      if (el && val) el.value = val;
    });
  }, []);

  function goToStep2() {
    const form = formRef.current;
    if (!form) return;
    if (!clientType) {
      const firstClient = form.querySelector(`input[name="${idPrefix}-client"]`) as HTMLInputElement | null;
      firstClient?.focus();
      return;
    }
    const serviceEl = form.elements.namedItem("service") as HTMLSelectElement | null;
    const ville = form.elements.namedItem("ville") as HTMLInputElement | null;
    const urgence = form.elements.namedItem("urgence") as HTMLSelectElement | null;
    if (!serviceEl?.value || !ville?.value.trim() || !urgence?.value) {
      if (!serviceEl?.value) serviceEl?.focus();
      else if (!ville?.value.trim()) ville?.focus();
      else urgence?.focus();
      form.reportValidity();
      return;
    }
    setStep(2);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setErrorMessage("");

    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries()) as Record<string, string>;
    payload.client_type = clientType;

    try {
      const res = await fetch("/api/devis/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(json.error || "Envoi impossible. Appelez le " + site.phone);
        return;
      }

      setStatus("success");
      if (typeof window !== "undefined" && "gtag" in window) {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", "generate_lead", {
          event_category: "devis",
          event_label: payload.service,
        });
      }
    } catch {
      setStatus("error");
      setErrorMessage("Connexion impossible. Appelez le " + site.phone);
    }
  }

  if (status === "success") {
    return (
      <div className="cf-wrap cf-success">
        <div className="cf-success-icon" aria-hidden="true">
          ✓
        </div>
        <h3>Demande reçue</h3>
        <p>
          Merci ! {site.owner.split(" ")[0]} ou son équipe vous rappelle sous <strong>24 h</strong> au numéro indiqué.
        </p>
        <p className="cf-hint">
          Vous avez des photos ? Envoyez-les par SMS ou WhatsApp au{" "}
          <a href={`tel:${site.phoneTel}`}>{site.phone}</a>.
        </p>
        <a href={`tel:${site.phoneTel}`} className="btn-or" style={{ display: "inline-flex", marginTop: "12px" }}>
          📞 Appeler maintenant
        </a>
      </div>
    );
  }

  return (
    <div className="cf-wrap">
      <h3>{step === 1 ? "Décrivez votre besoin" : "Vos coordonnées"}</h3>
      <div className="cf-steps" role="tablist" aria-label="Étapes du formulaire">
        <button
          type="button"
          role="tab"
          id={`${idPrefix}-step-1`}
          aria-selected={step === 1}
          aria-controls={`${idPrefix}-panel-1`}
          className={`cf-step${step === 1 ? " active" : ""}${step === 2 ? " done" : ""}`}
          onClick={() => setStep(1)}
        >
          1. Besoin
        </button>
        <button
          type="button"
          role="tab"
          id={`${idPrefix}-step-2`}
          aria-selected={step === 2}
          aria-controls={`${idPrefix}-panel-2`}
          className={`cf-step${step === 2 ? " active" : ""}`}
          onClick={goToStep2}
        >
          2. Contact
        </button>
      </div>
      <form
        className="cform"
        method="POST"
        ref={formRef}
        onSubmit={handleSubmit}
        data-react-form="true"
        noValidate={false}
      >
        <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" readOnly />
        <input type="hidden" name="page_source" value={pageSource} />
        <input type="hidden" name="utm_source" />
        <input type="hidden" name="utm_medium" />
        <input type="hidden" name="utm_campaign" />
        <input type="hidden" name="gclid" />
        <input type="hidden" name="last_referrer" />
        <input type="hidden" name="landing_page" />

        {step === 1 && (
          <div id={`${idPrefix}-panel-1`} role="tabpanel" aria-labelledby={`${idPrefix}-step-1`}>
            <fieldset className="cf-fieldset">
              <legend>Vous êtes *</legend>
              <div className="cf-chips">
                {clientTypes.map((type) => (
                  <label key={type.value} className={`cf-chip${clientType === type.value ? " selected" : ""}`}>
                    <input
                      type="radio"
                      name={`${idPrefix}-client`}
                      value={type.value}
                      checked={clientType === type.value}
                      onChange={() => setClientType(type.value)}
                      required
                    />
                    {type.label}
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="cf">
              <label htmlFor={`${idPrefix}-service`}>Prestation *</label>
              <select
                id={`${idPrefix}-service`}
                name="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
              >
                <option value="">Choisir une prestation…</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="cf">
              <label htmlFor={`${idPrefix}-ville`}>Ville ou code postal *</label>
              <input
                type="text"
                id={`${idPrefix}-ville`}
                name="ville"
                placeholder="Ex. Bourg-en-Bresse, 01000"
                required
                autoComplete="address-level2"
              />
            </div>
            <div className="cf">
              <label htmlFor={`${idPrefix}-urgence`}>Quand ? *</label>
              <select id={`${idPrefix}-urgence`} name="urgence" defaultValue="" required>
                <option value="">Choisir…</option>
                {urgencyOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <button type="button" className="btn-submit" onClick={goToStep2}>
              Continuer →
            </button>
          </div>
        )}

        {step === 2 && (
          <div id={`${idPrefix}-panel-2`} role="tabpanel" aria-labelledby={`${idPrefix}-step-2`}>
            <div className="form-row">
              <div className="cf">
                <label htmlFor={`${idPrefix}-nom`}>Votre nom *</label>
                <input type="text" id={`${idPrefix}-nom`} name="nom" placeholder="Jean Dupont" required autoComplete="name" />
              </div>
              <div className="cf">
                <label htmlFor={`${idPrefix}-tel`}>Téléphone *</label>
                <input type="tel" id={`${idPrefix}-tel`} name="tel" placeholder="06 XX XX XX XX" required autoComplete="tel" />
              </div>
            </div>
            <div className="cf">
              <label htmlFor={`${idPrefix}-email`}>Email</label>
              <input type="email" id={`${idPrefix}-email`} name="email" placeholder="votre@email.fr" autoComplete="email" />
            </div>
            <div className="cf">
              <label htmlFor={`${idPrefix}-surface`}>Surface approximative (facultatif)</label>
              <select id={`${idPrefix}-surface`} name="surface" defaultValue="">
                <option value="">Choisir…</option>
                {surfaceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="cf">
              <label htmlFor={`${idPrefix}-msg`}>Précisions (facultatif)</label>
              <textarea id={`${idPrefix}-msg`} name="message" placeholder="Accès, étage, contraintes de planning…" />
            </div>
            {status === "error" && <p className="cf-error">{errorMessage}</p>}
            <div className="cf-actions">
              <button type="button" className="btn-wh btn-back" onClick={() => setStep(1)}>
                ← Retour
              </button>
              <button type="submit" className="btn-submit" disabled={status === "loading"}>
                {status === "loading" ? "Envoi en cours…" : "Recevoir mon devis gratuit sous 24 h"}
              </button>
            </div>
            <p className="cf-note">
              {site.owner} vous rappelle sous 24 h. Gratuit, sans engagement. Vos informations restent confidentielles.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export type { DevisFormProps };
