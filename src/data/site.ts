export const site = {
  name: "Xyneo",
  tagline: "Basé à Bourg-en-Bresse — Ain, Rhône & Saône-et-Loire",
  phone: "06 66 90 39 61",
  phoneTel: "+33666903961",
  email: "contact@xyneo.fr",
  address: "1 rue Alfred Bertholet, 01000 Bourg-en-Bresse",
  owner: "Abel Ringuet",
  since: "2018",
  rating: "4.9",
  reviews: "29",
  experience: "8",
  region: "Ain, Rhône et Saône-et-Loire",
  department: "01",
  city: "Bourg-en-Bresse",
  hours: "7h30 – 21h · 7j/7",
  website: "https://xyneo.fr",
  googleReviewsUrl: "https://share.google/IlnvBucdew1zoqnNX",
  /** À compléter — affiché dans le footer quand renseigné */
  siret: "",
  legalName: "Xyneo",
};

export const services = [
  {
    href: "/nettoyage-de-fin-de-chantier/",
    imgClass: "sc1",
    badge: "À partir de 600€",
    title: "Nettoyage de fin de chantier",
    tagline: "Après travaux, avant réception (OPR) : poussières fines, vitres, sols, sanitaires.",
    comprisTitle: "Compris dans votre prestation fin de chantier",
    checklist: ["Retrait des poussières fines et résidus de chantier", "Nettoyage des vitres, sols et sanitaires", "Évacuation des déchets de chantier", "Livraison prête pour réception des travaux"],
  },
  {
    href: "/remise-en-etat-locative/",
    imgClass: "sc2",
    badge: "À partir de 200€",
    title: "Remise en état locative",
    tagline: "Logement propre et conforme entre deux locataires, avant l'état des lieux.",
    comprisTitle: "Compris dans votre prestation remise en état",
    checklist: ["Nettoyage complet de toutes les pièces", "Cuisine, salle de bain et sanitaires", "Sols, vitres et plinthes", "Conformité avant état des lieux"],
  },
  {
    href: "/nettoyage-diogene/",
    imgClass: "sc3",
    badge: "Sur devis",
    title: "Nettoyage Diogène",
    tagline: "Désencombrement, évacuation et remise en état de logements très dégradés, en toute discrétion.",
    comprisTitle: "Compris dans votre prestation Diogène",
    checklist: ["Désencombrement et tri des objets", "Évacuation des encombrants", "Désinfection et remise en état", "Intervention discrète et respectueuse"],
  },
  {
    href: "/nettoyage-apres-deces/",
    imgClass: "sc4",
    badge: "Sur devis",
    title: "Nettoyage après décès",
    tagline: "Remise en état complète de logements avec discrétion, respect et professionnalisme.",
    comprisTitle: "Compris dans votre prestation après décès",
    checklist: ["Nettoyage en profondeur du logement", "Désinfection des surfaces", "Évacuation si nécessaire", "Intervention rapide et discrète"],
  },
  {
    href: "/nettoyage-canape/",
    imgClass: "sc5",
    badge: "À partir de 60€",
    title: "Nettoyage textile",
    tagline: "Canapé, tapis et matelas nettoyés à domicile par injection-extraction : taches, acariens et odeurs.",
    comprisTitle: "Compris dans votre prestation textile",
    checklist: ["Injection-extraction professionnelle", "Traitement anti-taches et anti-odeurs", "Canapé, tapis ou matelas", "Résultat visible immédiatement"],
  },
  {
    href: "/nettoyage-dappartement-ou-maison/",
    imgClass: "sc6",
    badge: "Sur devis",
    title: "Nettoyage d'appartement ou maison",
    tagline: "Ménage de fond ou ponctuel de logements, avant ou après un déménagement.",
    comprisTitle: "Compris dans votre prestation ménage",
    checklist: ["Nettoyage complet de toutes les pièces", "Vitres, sols et surfaces", "Avant ou après déménagement", "Adapté à votre calendrier"],
  },
  {
    href: "/menage-a-domicile-avance-immediate/",
    imgClass: "sc7",
    badge: "Avance immédiate",
    title: "Ménage à domicile",
    tagline: "Entretien régulier de votre logement, avec avance immédiate du crédit d'impôt.",
    comprisTitle: "Compris dans votre prestation ménage régulier",
    checklist: ["Entretien régulier personnalisé", "Avance immédiate du crédit d'impôt 50%", "Intervenant de confiance", "Planning flexible"],
  },
  {
    href: "/nettoyage-vitres-et-baies-vitrees/",
    imgClass: "sc8",
    badge: "Sur devis",
    title: "Nettoyage vitres & baies vitrées",
    tagline: "Vitres, huisseries et volets roulants nettoyés minutieusement, intérieur et extérieur.",
    comprisTitle: "Compris dans votre prestation vitres",
    checklist: ["Baies vitrées intérieur et extérieur", "Huisseries et volets roulants", "Sans traces ni auréoles", "Matériel professionnel adapté"],
  },
];

export const navServices = [
  ...services.map((s) => ({ href: s.href, label: s.title })),
  { href: "/nettoyage-matelas/", label: "Nettoyage matelas" },
  { href: "/nettoyage-tapis/", label: "Nettoyage tapis" },
];

export const navLinks = [
  { href: "/", label: "Accueil" },
  {
    label: "Services",
    href: "/nettoyage-de-fin-de-chantier/",
    children: navServices,
  },
  { href: "/prix/", label: "Prix & Tarifs" },
  { href: "/zones-intervention/", label: "Zones" },
  { href: "/contactez-nous/", label: "Contact" },
];

export const whyItems = [
  { icon: "👤", title: "Un interlocuteur dédié", text: "Abel vous accompagne du premier contact à la fin de l'intervention, avec une équipe sur le terrain." },
  { icon: "🕐", title: "Interventions 7j/7", text: "De 7h30 à 21h, y compris le week-end — pour tenir votre planning de réception ou de relocation." },
  { icon: "🚛", title: "Déchets évacués", text: "Encombrants et déchets de chantier évacués lorsque la prestation le prévoit." },
  { icon: "📋", title: "Devis sur place", text: "Visite gratuite et devis détaillé avant intervention." },
];

/** Pré-remplissage formulaire depuis ?profil= */
export const profilePresets: Record<string, { clientType: string; service: string }> = {
  btp: { clientType: "btp", service: "Nettoyage de fin de chantier" },
  agence: { clientType: "agence", service: "Remise en état locative" },
  diogene: { clientType: "particulier", service: "Nettoyage Diogène" },
  deces: { clientType: "particulier", service: "Nettoyage après décès" },
};

/** 3 services principaux — accueil */
export const primaryServices = services.slice(0, 3);

/** Services secondaires — ligne « Aussi » sur l'accueil */
export const secondaryServiceLinks = [
  { href: "/nettoyage-apres-deces/", label: "Après décès" },
  { href: "/nettoyage-canape/", label: "Canapés & textile" },
  { href: "/nettoyage-vitres-et-baies-vitrees/", label: "Vitres" },
  { href: "/nettoyage-dappartement-ou-maison/", label: "Ménage ponctuel" },
  { href: "/menage-a-domicile-avance-immediate/", label: "Ménage à domicile" },
];

/** 8 villes phares — accueil (sans Drôme) */
export const featuredZones = [
  { href: "/nettoyage-bourg-en-bresse-01000/", label: "Bourg-en-Bresse 01000" },
  { href: "/nettoyage-oyonnax-01100/", label: "Oyonnax 01100" },
  { href: "/nettoyage-amberieu-en-bugey-01500/", label: "Ambérieu-en-Bugey 01500" },
  { href: "/nettoyage-belley-01300/", label: "Belley 01300" },
  { href: "/nettoyage-macon-71000/", label: "Mâcon 71000" },
  { href: "/nettoyage-chalon-sur-saone-71100/", label: "Chalon-sur-Saône 71100" },
  { href: "/nettoyage-lyon-69000/", label: "Lyon 69000" },
  { href: "/nettoyage-villefranche-sur-saone-69400/", label: "Villefranche-sur-Saône 69400" },
];

export const zones = [
  { href: "/nettoyage-bourg-en-bresse-01000/", label: "Bourg-en-Bresse 01000" },
  { href: "/nettoyage-oyonnax-01100/", label: "Oyonnax 01100" },
  { href: "/nettoyage-amberieu-en-bugey-01500/", label: "Ambérieu-en-Bugey 01500" },
  { href: "/nettoyage-belley-01300/", label: "Belley 01300" },
  { href: "/nettoyage-meximieux-01800/", label: "Meximieux 01800" },
  { href: "/nettoyage-miribel-01700/", label: "Miribel 01700" },
  { href: "/nettoyage-montluel-01120/", label: "Montluel 01120" },
  { href: "/nettoyage-replonges-01750/", label: "Replonges 01750" },
  { href: "/nettoyage-saint-genis-laval-69230/", label: "Saint-Genis-Laval 69230" },
  { href: "/nettoyage-villefranche-sur-saone-69400/", label: "Villefranche-sur-Saône 69400" },
  { href: "/nettoyage-tarare-69170/", label: "Tarare 69170" },
  { href: "/nettoyage-givors-69700/", label: "Givors 69700" },
  { href: "/nettoyage-macon-71000/", label: "Mâcon 71000" },
  { href: "/nettoyage-chalon-sur-saone-71100/", label: "Chalon-sur-Saône 71100" },
  { href: "/nettoyage-louhans-71500/", label: "Louhans 71500" },
  { href: "/nettoyage-tournus-71700/", label: "Tournus 71700" },
  { href: "/nettoyage-paray-le-monial-71600/", label: "Paray-le-Monial 71600" },
  { href: "/nettoyage-romans-sur-isere-26100/", label: "Romans-sur-Isère 26100" },
  { href: "/nettoyage-valence-26000/", label: "Valence 26000" },
  { href: "/nettoyage-lyon-69000/", label: "Lyon 69000" },
  { href: "/nettoyage-villeurbanne-69100/", label: "Villeurbanne 69100" },
  { href: "/nettoyage-caluire-et-cuire-69300/", label: "Caluire-et-Cuire 69300" },
  { href: "/nettoyage-oullins-69600/", label: "Oullins 69600" },
  { href: "/nettoyage-venissieux-69200/", label: "Vénissieux 69200" },
  { href: "/nettoyage-amberieux-en-dombes-01330/", label: "Ambérieux-en-Dombes 01330" },
  { href: "/nettoyage-peronnas-01960/", label: "Péronnas 01960" },
  { href: "/nettoyage-saint-remy-71100/", label: "Saint-Rémy 71100" },
  { href: "/nettoyage-chatenoy-le-royal-71880/", label: "Châtenoy-le-Royal 71880" },
  { href: "/nettoyage-saint-marcel-71380/", label: "Saint-Marcel 71380" },
  { href: "/nettoyage-foret-de-trevoux-01600/", label: "Trévoux 01600" },
];

export const testimonials = [
  { img: "/img/review-4.webp", initials: "CM", name: "Cécile Maussang", city: "Ain", text: "« Intervention au top, Abel est très sympathique et professionnel, le nettoyage de mon appart après travaux (sol, baies vitrées et poutres) est nickel. Encore merci pour votre disponibilité rapide. »", tag: "Fin de chantier" },
  { img: "/img/review-1.webp", initials: "SD", name: "S. D.", city: "Ain", text: "« Personne très sérieuse et sympathique. Très contente de son travail, je le recommande. »", tag: "Nettoyage professionnel" },
  { img: "/img/review-2.webp", initials: "AB", name: "Antoine Blanc", city: "Ain", text: "« Travail très sérieux, Abel est super sympa, en plein déménagement il m'a même proposé de m'aider à descendre l'ancien canapé, je recommande. »", tag: "Aide déménagement" },
  { img: "/img/review-3.webp", initials: "DG", name: "Déborah GAGET", city: "Ain", text: "« J'ai contacté Xyneo pour le nettoyage de moquettes en très mauvais état, j'ai été très satisfaite à tout point de vue : disponibilité, efficacité, professionnalisme, je recommande ! »", tag: "Nettoyage moquette" },
  { img: "/img/review-5.webp", initials: "GP", name: "Gerard PACCOUD", city: "Ain", text: "« Répond très rapidement à notre demande. Travail effectué consciencieusement et efficacement. Contact très agréable et sympathique. À recommander. »", tag: "Nettoyage professionnel" },
  { img: "/img/review-6.webp", initials: "MD", name: "Maria Isabel Diaz", city: "Ain", text: "« M. Abel Ringuet, de Xyneo, a fait les vitres, les huisseries, et les volets roulants chez moi. Il travaille minutieusement et proprement ; il est sérieux, efficace, et très sympathique. Je le recommande ! »", tag: "Nettoyage vitres" },
  { img: "/img/review-7.webp", initials: "VP", name: "Véronique Perrier", city: "Ain", text: "« Mon canapé a reçu de l'urine de chat hier matin, monsieur est venu dans l'après-midi ! Conseil et nettoyage rapide avec traitement anti-odeur. Le canapé est comme neuf. Merci. »", tag: "Nettoyage canapé" },
  { img: "/img/review-8.webp", initials: "JV", name: "Jimmy Verne", city: "Ain", text: "« Très professionnel, canapé et chaises revenus comme avant. Il prend le temps de faire son travail. Je recommande à 100 %. »", tag: "Nettoyage textile" },
];

export const beforeAfter = [
  { src: "/img/avant-apres-1.webp", alt: "Résultat nettoyage fin de chantier — Xyneo" },
  { src: "/img/avant-apres-2.webp", alt: "Résultat remise en état locative — Xyneo" },
  { src: "/img/avant-apres-3.webp", alt: "Résultat nettoyage Diogène — Xyneo" },
  { src: "/img/avant-apres-4.webp", alt: "Résultat nettoyage canapé — Xyneo" },
  { src: "/img/avant-apres-5.webp", alt: "Résultat nettoyage vitres — Xyneo" },
  { src: "/img/avant-apres-6.webp", alt: "Résultat nettoyage moquette — Xyneo" },
  { src: "/img/avant-apres-7.webp", alt: "Résultat fin de chantier — Xyneo" },
  { src: "/img/avant-apres-8.webp", alt: "Résultat nettoyage professionnel — Xyneo" },
];

export const serviceOptions = [
  "Nettoyage de fin de chantier",
  "Remise en état locative",
  "Nettoyage Diogène",
  "Nettoyage après décès",
  "Nettoyage canapé / tapis / matelas",
  "Nettoyage appartement ou maison",
  "Ménage à domicile",
  "Autre",
];

export const pricingBlocks = [
  {
    title: "Nos Tarifs pour Nettoyage de fin de chantier",
    href: "/nettoyage-de-fin-de-chantier/",
    rows: [
      ["Nettoyage de fin de chantier", "à partir de 600€"],
      ["Selon surface, état et délais", "sur devis"],
      ["Évacuation déchets de chantier", "sur devis"],
      ["Visite et devis sur place", "Gratuit", true],
    ],
  },
  {
    title: "Nos Tarifs pour Remise en état locative",
    href: "/remise-en-etat-locative/",
    rows: [
      ["Studio", "à partir de 200€"],
      ["T2 / T3 et plus", "sur devis"],
      ["Selon surface et état du logement", "sur devis"],
      ["Visite et devis sur place", "Gratuit", true],
    ],
  },
  {
    title: "Nos Tarifs pour Nettoyage Diogène",
    href: "/nettoyage-diogene/",
    rows: [
      ["Évaluation sur place", "Gratuit"],
      ["Tri, évacuation et remise en état", "sur devis"],
      ["Désinfection complète", "sur devis"],
      ["Selon surface et volume", "sur devis", true],
    ],
  },
  {
    title: "Nos Tarifs pour Nettoyage canapé",
    href: "/nettoyage-canape/",
    rows: [
      ["Fauteuil", "40€"],
      ["Canapé 2/3 places", "60€"],
      ["Canapé 4/5 places", "70€"],
      ["Canapé en U, pouf, chaises", "sur devis"],
      ["Déplacement", "Inclus", true],
    ],
  },
  {
    title: "Nos Tarifs pour Nettoyage matelas",
    href: "/nettoyage-matelas/",
    rows: [
      ["Matelas enfant", "40€"],
      ["Matelas 1 place", "50€"],
      ["Matelas 2 places", "60€"],
      ["Déplacement", "Inclus", true],
    ],
  },
  {
    title: "Nos Tarifs pour Nettoyage tapis",
    href: "/nettoyage-tapis/",
    rows: [
      ["1 tapis", "50€"],
      ["2 tapis", "80€"],
      ["3 tapis", "100€"],
      ["Déplacement", "Inclus", true],
    ],
  },
  {
    title: "Nos Tarifs pour Nettoyage appartement ou maison",
    href: "/nettoyage-dappartement-ou-maison/",
    rows: [
      ["Ménage ponctuel ou de fond", "sur devis"],
      ["Avant / après déménagement", "sur devis"],
      ["Logement très dégradé", "sur devis"],
      ["Visite et devis sur place", "Gratuit", true],
    ],
  },
  {
    title: "Nos Tarifs pour Nettoyage après décès",
    href: "/nettoyage-apres-deces/",
    rows: [
      ["Selon surface et état", "sur devis"],
      ["Désinfection et traitement des odeurs", "inclus"],
      ["Évacuation si nécessaire", "sur devis"],
      ["Évaluation sur place", "Gratuit", true],
    ],
  },
  {
    title: "Nos Tarifs pour Ménage à domicile",
    href: "/menage-a-domicile-avance-immediate/",
    rows: [
      ["Ménage récurrent à domicile", "sur devis"],
      ["Crédit d'impôt 50%", "Avance immédiate"],
      ["Partenariat Unipros", "Inclus"],
      ["Devis", "Gratuit", true],
    ],
  },
  {
    title: "Nos Tarifs pour Nettoyage vitres",
    href: "/nettoyage-vitres-et-baies-vitrees/",
    rows: [
      ["Vitres intérieures", "sur devis"],
      ["Vitres int. + ext.", "sur devis"],
      ["Baies vitrées et volets", "sur devis"],
      ["Visite et devis sur place", "Gratuit", true],
    ],
  },
];

export const faqs = [
  { q: "Combien coûte un nettoyage de fin de chantier à Bourg-en-Bresse ?", a: "Chez Xyneo, un nettoyage de fin de chantier démarre à 600 € TTC, selon la surface, l'état du chantier et les délais. Le devis précis est établi après une visite gratuite sur place, sous 24 h." },
  { q: "Combien coûte une remise en état locative à Bourg-en-Bresse ?", a: "Chez Xyneo, une remise en état locative démarre à 200 € pour un studio, selon la surface et l'état du logement. Le devis précis est établi après une visite gratuite sur place." },
  { q: "Comment obtenir un devis pour un nettoyage à Bourg-en-Bresse ?", a: `Il vous suffit de nous contacter au ${site.phone} ou via le formulaire. Nous nous déplaçons dans l'Ain, le Rhône et la Saône-et-Loire pour évaluer vos besoins et vous remettre un devis clair sous 24 h.` },
  { q: "Intervenez-vous en urgence pour une remise en état locative ?", a: `Oui, nous assurons des interventions rapides sur l'ensemble de notre secteur, notamment entre deux locataires ou avant un état des lieux. Contactez-nous au ${site.phone} pour une prise en charge rapide.` },
  { q: "Dans quelles communes intervenez-vous ?", a: `${site.name} intervient dans l'Ain (01), le Rhône (69) et la Saône-et-Loire (71), autour de Bourg-en-Bresse. Quel que soit l'endroit où se situe votre bien, nous nous déplaçons pour réaliser votre prestation.` },
  { q: "Proposez-vous le nettoyage Diogène avec discrétion ?", a: "Oui, nous prenons en charge le désencombrement, l'évacuation et la remise en état de logements en situation de Diogène, avec une intervention respectueuse et discrète." },
  { q: "Comment fonctionne l'avance immédiate du crédit d'impôt ?", a: "Pour le ménage à domicile, vous ne payez que 50 % du montant grâce à l'avance immédiate du crédit d'impôt. Nous nous occupons des démarches administratives pour vous." },
  { q: "Nettoyez-vous les canapés, tapis et matelas à domicile ?", a: "Oui, nous utilisons la méthode injection-extraction professionnelle pour éliminer taches, acariens et odeurs. Le résultat est visible immédiatement après l'intervention." },
  { q: "Combien de temps dure une intervention de fin de chantier ?", a: "La durée varie selon la surface : quelques heures pour un studio, une journée pour un T3/T4, plusieurs jours pour un local commercial. Nous vous communiquons un planning précis dans le devis." },
  { q: "Êtes-vous assurés ?", a: "Oui, Xyneo dispose d'une assurance responsabilité civile professionnelle. L'attestation est transmise sur demande pour les professionnels, syndics et agences." },
  { q: "Dois-je être présent pendant l'intervention ?", a: "Votre présence n'est en général pas obligatoire si l'accès au logement est organisé (clés, digicode, contact sur place). Nous nous adaptons aux situations sensibles (Diogène, après décès) : contactez-nous pour en discuter." },
  { q: "Sous quel délai pouvez-vous intervenir ?", a: `Le devis vous est remis sous 24 h. Pour l'intervention, nous planifions selon vos contraintes et nos disponibilités — appelez le ${site.phone} pour une demande urgente.` },
];

/** 4 questions clés — accueil allégé */
export const homepageFaqs = [
  faqs.find((f) => f.q.startsWith("Êtes-vous"))!,
  faqs.find((f) => f.q.startsWith("Dois-je"))!,
  faqs.find((f) => f.q.startsWith("Sous quel"))!,
  faqs.find((f) => f.q.startsWith("Combien coûte un nettoyage de fin"))!,
];

/** 3 grilles tarifaires — accueil (prix de départ) */
export const homepagePricingBlocks = [
  {
    title: "Nettoyage de fin de chantier",
    href: "/nettoyage-de-fin-de-chantier/",
    rows: [
      ["Appartement / maison", "à partir de 600 €"],
      ["Selon surface et état", "sur devis"],
      ["Visite et devis sur place", "Gratuit", true],
    ],
  },
  {
    title: "Remise en état locative",
    href: "/remise-en-etat-locative/",
    rows: [
      ["Studio", "à partir de 200 €"],
      ["T2", "300 – 450 €"],
      ["T3 et plus", "sur devis"],
      ["Visite et devis sur place", "Gratuit", true],
    ],
  },
  {
    title: "Nettoyage Diogène",
    href: "/nettoyage-diogene/",
    rows: [
      ["Évaluation sur place", "Gratuite sous 48 h"],
      ["Tri, évacuation et remise en état", "sur devis"],
      ["Désinfection", "sur devis", true],
    ],
  },
];

export const footerServices = services.slice(0, 8).map((s) => ({
  href: s.href,
  label: `${s.title} — ${site.region}`,
}));

export const meshLinks = [
  { href: "https://xyneo.fr/nettoyage-de-fin-de-chantier/", label: "Fin de chantier Ain (01)" },
  { href: "https://xyneo.fr/remise-en-etat-locative/", label: "Remise en état Rhône (69)" },
  { href: "https://xyneo.fr/nettoyage-diogene/", label: "Diogène Saône-et-Loire (71)" },
];

export const socialLinks = [
  { href: "https://www.facebook.com/XyneoNettoyage", label: "Facebook" },
  { href: "https://www.instagram.com/xyneo01", label: "Instagram" },
  { href: "https://www.linkedin.com/in/abel-ringuet-01977b3b2", label: "LinkedIn" },
];
