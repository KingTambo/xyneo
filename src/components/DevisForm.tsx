import { serviceOptions } from "@/data/site";

type DevisFormProps = {
  idPrefix: string;
  pageSource?: string;
};

export default function DevisForm({ idPrefix, pageSource = "/" }: DevisFormProps) {
  return (
    <div className="cf-wrap">
      <h3>Votre demande de devis</h3>
      <form className="cform" action="#" method="POST">
        <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" readOnly />
        <input type="hidden" name="page_source" value={pageSource} />
        <input type="hidden" name="utm_source" />
        <input type="hidden" name="utm_medium" />
        <input type="hidden" name="utm_campaign" />
        <input type="hidden" name="gclid" />
        <input type="hidden" name="last_referrer" />
        <input type="hidden" name="landing_page" />
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
          <label htmlFor={`${idPrefix}-ville`}>Ville</label>
          <input type="text" id={`${idPrefix}-ville`} name="ville" placeholder="Votre ville" required autoComplete="address-level2" />
        </div>
        <div className="cf">
          <label htmlFor={`${idPrefix}-service`}>Service souhaité</label>
          <select id={`${idPrefix}-service`} name="service" defaultValue="">
            <option value="">Choisir un service...</option>
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="cf">
          <label htmlFor={`${idPrefix}-msg`}>Description</label>
          <textarea id={`${idPrefix}-msg`} name="message" placeholder="Décrivez votre besoin..." />
        </div>
        <button type="submit" className="btn-submit">
          Envoyer ma demande de devis
        </button>
        <p className="cf-note">Données confidentielles · Réponse sous 24h</p>
      </form>
    </div>
  );
}
