import { site } from "./site";

type ZoneContent = {
  sections: { h2: string; paragraphs: string[]; list?: string[] }[];
  faqs: { q: string; a: string }[];
};

const deptIntro: Record<string, string> = {
  Ain: "dans l'Ain (01), autour de Bourg-en-Bresse et des principales villes du département",
  Rhône: "dans le Rhône (69), entre Lyon et les communes de l'est lyonnais",
  "Saône-et-Loire": "en Saône-et-Loire (71), de Mâcon à Chalon-sur-Saône et au-delà",
  Drôme: "dans la Drôme (26), en extension de notre secteur Rhône-Ain",
};

function buildZoneContent(city: string, postalCode: string, department: string): ZoneContent {
  const deptPhrase = deptIntro[department] ?? site.region;

  return {
    sections: [
      {
        h2: `Entreprise de nettoyage à ${city}`,
        paragraphs: [
          `${site.name}, entreprise locale basée à ${site.city}, intervient à ${city} (${postalCode}) ${deptPhrase}. Particuliers, agences immobilières, entreprises du BTP, syndics et professionnels : nous nous déplaçons sur place pour évaluer votre besoin et établir un devis gratuit sous 24 h.`,
          `Que vous ayez besoin d'un nettoyage de fin de chantier, d'une remise en état locative avant état des lieux, d'une intervention Diogène ou d'un nettoyage textile à domicile, ${site.owner} et son équipe adaptent chaque prestation à votre calendrier.`,
        ],
      },
      {
        h2: `Nos prestations à ${city} et alentours`,
        paragraphs: [
          `Depuis ${site.city}, nous couvrons ${city} et les communes voisines pour l'ensemble de nos services de nettoyage professionnel.`,
        ],
        list: [
          "Nettoyage de fin de chantier — à partir de 600 €",
          "Remise en état locative — à partir de 200 € (studio)",
          "Nettoyage Diogène et après décès — devis sur place",
          "Nettoyage canapé, tapis, matelas — à domicile",
          "Nettoyage d'appartement ou maison",
          "Ménage à domicile avec avance immédiate 50 %",
          "Nettoyage vitres et baies vitrées",
        ],
      },
      {
        h2: `Pourquoi faire appel à ${site.name} à ${city} ?`,
        paragraphs: [
          `Avec ${site.reviews} avis Google et une note de ${site.rating}/5, ${site.name} est l'interlocuteur de confiance pour vos chantiers et logements à ${city}. Déplacement gratuit, devis transparent et intervention ${site.hours.toLowerCase()}.`,
        ],
        list: [
          `Entreprise locale — ${site.owner}`,
          "Devis gratuit sous 24 h",
          "Intervention rapide et planifiée",
          "Matériel professionnel (autolaveuse, injection-extraction…)",
          "Discrétion pour les situations sensibles (Diogène, après décès)",
        ],
      },
    ],
    faqs: [
      {
        q: `${site.name} intervient-il à ${city} ?`,
        a: `Oui. ${site.name} se déplace à ${city} (${postalCode}) et dans tout le ${department} pour fin de chantier, remise en état, Diogène, nettoyage textile et ménage à domicile.`,
      },
      {
        q: `Comment obtenir un devis de nettoyage à ${city} ?`,
        a: `Contactez-nous au ${site.phone} ou via le formulaire. Nous nous déplaçons gratuitement à ${city} pour évaluer votre besoin et vous remettre un devis sous 24 h.`,
      },
      {
        q: `Quels sont les délais d'intervention à ${city} ?`,
        a: `Nous nous adaptons à vos contraintes : réception de chantier, relocation entre locataires ou urgence. Les délais sont confirmés lors de la visite gratuite sur place.`,
      },
    ],
  };
}

export { buildZoneContent };
