"use client";

import { FORM_PRESET_EVENT, readFormPresetFromUrl, type FormPreset } from "@/lib/form-presets";
import { isValidFrPhone, PHONE_ERROR_MSG } from "@/lib/phone";
import { formSocialProof, serviceOptions, site } from "@/data/site";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

type DevisFormProps = {
  idPrefix: string;
  pageSource?: string;
  defaultService?: string;
  defaultProfile?: string;
};

const clientTypes = [
  { value: "btp", label: "Entreprise du bâtiment ou MOE" },
  { value: "commerce", label: "Commerce, bureau ou local pro" },
  { value: "agence", label: "Agence, syndic ou bailleur" },
  { value: "particulier", label: "Particulier" },
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

const DIOGENE_SERVICE = "Nettoyage Diogène";

function applyPreset(
  preset: FormPreset,
  setClientType: (v: string) => void,
  setService: (v: string) => void,
) {
  if (preset.clientType) setClientType(preset.clientType);
  if (preset.service) setService(preset.service);
}

export default function DevisForm({
  idPrefix,
  pageSource = "/",
  defaultService = "",
  defaultProfile = "",
}: DevisFormProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [clientType, setClientType] = useState("");
  const [service, setService] = useState(defaultService);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const loadPresetsFromUrl = useCallback(() => {
    const preset = readFormPresetFromUrl();
    if (preset.clientType || preset.service) {
      applyPreset(preset, setClientType, setService);
      return;
    }
    if (defaultProfile && typeof window !== "undefined") {
      const profil = new URLSearchParams(window.location.search).get("profil") || defaultProfile;
      const fromProfil = readFormPresetFromUrl(`?profil=${profil}`);
      applyPreset(fromProfil, setClientType, setService);
    }
  }, [defaultProfile]);

  useEffect(() => {
    if (defaultService) setService(defaultService);
  }, [defaultService]);

  useEffect(() => {
    loadPresetsFromUrl();
  }, [loadPresetsFromUrl]);

  useEffect(() => {
    function onPreset(event: Event) {
      const detail = (event as CustomEvent<FormPreset>).detail;
      if (detail) applyPreset(detail, setClientType, setService);
    }
    window.addEventListener(FORM_PRESET_EVENT, onPreset);
    return () => window.removeEventListener(FORM_PRESET_EVENT, onPreset);
  }, []);

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

  function validatePhoneField(requireValue = false) {
    const form = formRef.current;
    const telEl = form?.elements.namedItem("tel") as HTMLInputElement | null;
    if (!telEl) return true;
    const value = telEl.value.trim();
    if (!value && !requireValue) {
      setPhoneError("");
      telEl.setCustomValidity("");
      return true;
    }
    if (!isValidFrPhone(value)) {
      setPhoneError(PHONE_ERROR_MSG);
      telEl.setCustomValidity(PHONE_ERROR_MSG);
      return false;
    }
    setPhoneError("");
    telEl.setCustomValidity("");
    return true;
  }

  function handlePhoneBlur() {
    const telEl = formRef.current?.elements.namedItem("tel") as HTMLInputElement | null;
    if (!telEl?.value.trim()) return;
    validatePhoneField(true);
  }

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    const telEl = event.currentTarget;
    if (isValidFrPhone(telEl.value)) {
      setPhoneError("");
      telEl.setCustomValidity("");
    } else if (phoneError) {
      validatePhoneField(true);
    }
  }

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
    if (!validatePhoneField(true)) {
      form.reportValidity();
      return;
    }

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
        setErrorMessage(json.error || "Envoi impossible. Appelez " + site.ownerFirst + " au " + site.phone);
        return;
      }

      router.push("/merci/");
    } catch {
      setStatus("error");
      setErrorMessage("Connexion impossible. Appelez " + site.ownerFirst + " au " + site.phone);
    }
  }

  const hasReviews = Boolean(site.googleReviewsUrl && site.rating && site.reviews);
  const ratingLine = hasReviews
    ? `★ ${site.rating.replace(".", ",")}/5 · ${site.reviews} avis Google`
    : "Devis gratuit · Réponse sous 24 h";

  return (
    <div className="cf-wrap" data-devis-form="true">
      <p className="cf-step-meta">Étape {step}/2 · 30 secondes</p>
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
            {clientType === "btp" && (
              <div className="cf">
                <label htmlFor={`${idPrefix}-date-reception`}>Date de réception prévue (facultatif)</label>
                <input type="date" id={`${idPrefix}-date-reception`} name="date_reception" />
              </div>
            )}
            {service === DIOGENE_SERVICE && (
              <>
                <div className="cf">
                  <label htmlFor={`${idPrefix}-pieces`}>Nombre de pièces concernées (facultatif)</label>
                  <input
                    type="text"
                    id={`${idPrefix}-pieces`}
                    name="pieces_diogene"
                    placeholder="Ex. 3 pièces"
                    inputMode="numeric"
                  />
                </div>
                <div className="cf">
                  <label htmlFor={`${idPrefix}-etage`}>Étage / ascenseur (facultatif)</label>
                  <input
                    type="text"
                    id={`${idPrefix}-etage`}
                    name="etage_ascenseur"
                    placeholder="Ex. 3e sans ascenseur"
                  />
                </div>
              </>
            )}
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
                <input
                  type="text"
                  id={`${idPrefix}-nom`}
                  name="nom"
                  placeholder="Jean Dupont"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="cf">
                <label htmlFor={`${idPrefix}-tel`}>Téléphone *</label>
                <input
                  type="tel"
                  id={`${idPrefix}-tel`}
                  name="tel"
                  placeholder="06 66 90 39 61"
                  required
                  autoComplete="tel"
                  aria-invalid={phoneError ? "true" : undefined}
                  aria-describedby={phoneError ? `${idPrefix}-tel-error` : undefined}
                  onBlur={handlePhoneBlur}
                  onChange={handlePhoneChange}
                />
                {phoneError && (
                  <p className="cf-field-error" id={`${idPrefix}-tel-error`} role="alert">
                    {phoneError}
                  </p>
                )}
              </div>
            </div>
            <div className="cf">
              <label htmlFor={`${idPrefix}-email`}>Email</label>
              <input
                type="email"
                id={`${idPrefix}-email`}
                name="email"
                placeholder="votre@email.fr"
                autoComplete="email"
              />
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
                {status === "loading" ? "Envoi en cours…" : "Recevoir mon devis sous 24 h"}
              </button>
            </div>
            <div className="cf-social-proof">
              <p className="cf-social-rating">{ratingLine}</p>
              <blockquote className="cf-social-quote">
                {formSocialProof.excerpt} — {formSocialProof.author}
              </blockquote>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export type { DevisFormProps };
