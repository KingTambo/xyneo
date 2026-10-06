"use client";

import { useRef, useState } from "react";
import { serviceOptions, site } from "@/data/site";

type DevisFormProps = {
  idPrefix: string;
  pageSource?: string;
  defaultService?: string;
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

function formatPhotoLabel(count: number) {
  if (count === 0) return "Aucune photo ajoutée";
  if (count === 1) return "1 photo ajoutée";
  return `${count} photos ajoutées`;
}

export default function DevisForm({ idPrefix, pageSource = "/", defaultService = "" }: DevisFormProps) {
  const [step, setStep] = useState(1);
  const [clientType, setClientType] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);

  function onPhotosChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files ? Array.from(event.target.files) : [];
    setPhotos(files);
  }

  function removePhoto(index: number) {
    setPhotos((prev) => {
      const next = prev.filter((_, i) => i !== index);
      if (photoInputRef.current) {
        const dt = new DataTransfer();
        next.forEach((file) => dt.items.add(file));
        photoInputRef.current.files = dt.files;
      }
      return next;
    });
  }

  function goToStep2() {
    const form = formRef.current;
    if (!form) return;
    if (!clientType) {
      const firstClient = form.querySelector(`input[name="${idPrefix}-client"]`) as HTMLInputElement | null;
      firstClient?.focus();
      return;
    }
    const service = form.elements.namedItem("service") as HTMLSelectElement | null;
    const ville = form.elements.namedItem("ville") as HTMLInputElement | null;
    if (!service?.value || !ville?.value.trim()) {
      if (!service?.value) service?.focus();
      else ville?.focus();
      form.reportValidity();
      return;
    }
    setStep(2);
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
      <form className="cform" action="#" method="POST" ref={formRef}>
        <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" readOnly />
        <input type="hidden" name="page_source" value={pageSource} />
        <input type="hidden" name="utm_source" />
        <input type="hidden" name="utm_medium" />
        <input type="hidden" name="utm_campaign" />
        <input type="hidden" name="gclid" />
        <input type="hidden" name="last_referrer" />
        <input type="hidden" name="landing_page" />
        <input type="hidden" name="client_type" value={clientType} />

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
              <select id={`${idPrefix}-service`} name="service" defaultValue={defaultService} required>
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
            <div className="form-row">
              <div className="cf">
                <label htmlFor={`${idPrefix}-surface`}>Surface approximative</label>
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
                <label htmlFor={`${idPrefix}-urgence`}>Quand ?</label>
                <select id={`${idPrefix}-urgence`} name="urgence" defaultValue="">
                  <option value="">Choisir…</option>
                  {urgencyOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="cf">
              <span className="cf-file-label">Photos (facultatif)</span>
              <div className="cf-file">
                <input
                  ref={photoInputRef}
                  type="file"
                  id={`${idPrefix}-photos`}
                  name="photos"
                  className="cf-file-input"
                  accept="image/jpeg,image/png,image/webp,image/heic"
                  multiple
                  onChange={onPhotosChange}
                />
                <label htmlFor={`${idPrefix}-photos`} className="cf-file-zone">
                  <span className="cf-file-icon" aria-hidden="true">
                    📷
                  </span>
                  <span className="cf-file-title">Ajouter des photos</span>
                  <span className="cf-file-sub">Glissez-déposez ou cliquez pour parcourir</span>
                  <span className="cf-file-meta">JPG, PNG · 2 à 3 photos recommandées</span>
                </label>
                <p className="cf-file-status">{formatPhotoLabel(photos.length)}</p>
                {photos.length > 0 && (
                  <ul className="cf-file-list">
                    {photos.map((file, index) => (
                      <li key={`${file.name}-${index}`}>
                        <span className="cf-file-name" title={file.name}>
                          {file.name}
                        </span>
                        <button
                          type="button"
                          className="cf-file-remove"
                          onClick={() => removePhoto(index)}
                          aria-label={`Retirer ${file.name}`}
                        >
                          Retirer
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <p className="cf-hint">Des photos de l&apos;état du logement ou du chantier nous aident à chiffrer plus précisément.</p>
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
              <label htmlFor={`${idPrefix}-msg`}>Précisions (facultatif)</label>
              <textarea id={`${idPrefix}-msg`} name="message" placeholder="Accès, étage, contraintes de planning…" />
            </div>
            <div className="cf-actions">
              <button type="button" className="btn-wh btn-back" onClick={() => setStep(1)}>
                ← Retour
              </button>
              <button type="submit" className="btn-submit">
                Recevoir mon devis gratuit sous 24 h
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
