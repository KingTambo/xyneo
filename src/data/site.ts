export const site = {
  name: "OAO Propreté",
  tagline: "Partenaire des pros · BTP, commerces et bureaux — Ain",
  phone: "06 02 53 27 67",
  phoneTel: "+33602532767",
  email: "contact.oaopreprete@gmail.com",
  address: "2 Rue Gambetta, 01000 Bourg-en-Bresse",
  owner: "",
  ownerFirst: "",
  ownerRole: "gérant",
  since: "",
  rating: "5.0",
  reviews: "2",
  experience: "",
  region: "Ain et environs",
  department: "01",
  city: "Bourg-en-Bresse",
  hours: "Devis sous 24 h · intervention rapide",
  website: "https://oaoproprete.fr",
  googleReviewsUrl: "https://share.google/EYnhEXfIJoKSj3NkT",
  logoSrc: "/img/oao-logo.png",
  /** À compléter — affiché dans le footer quand renseigné */
  siret: "",
  legalName: "OAO Propreté",
};

export const services = [
  {
    href: "/nettoyage-de-fin-de-chantier/",
    imgClass: "sc1",
    badge: "À partir de 600 €",
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
    tagline: "Agences et bailleurs : logement conforme entre deux locataires, avant l'état des lieux.",
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
    tagline: "Devantures, vitrines et baies vitrées — intérieur et extérieur, sans perturber votre activité.",
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

/** 3 engagements — accueil */
export const commitments = [
  "Devis écrit sous 24 h, après visite gratuite sur site",
  "Planning adapté à vos horaires d'ouverture et à la date de réception de chantier",
  "Matériel professionnel, assuré RC Pro — attestation transmise sur demande pour vos dossiers",
];

/** Extrait d'avis sous le formulaire — Century 21 (Google) */
export const formSocialProof = {
  excerpt:
    "« Très satisfaite du travail sur les vitrines de notre agence Century 21 ! Une équipe professionnelle, sérieuse. »",
  author: "Giulia M. · Century 21",
};

/** Pré-remplissage formulaire depuis ?profil= */
export const profilePresets: Record<string, { clientType: string; service: string }> = {
  btp: { clientType: "btp", service: "Nettoyage de fin de chantier" },
  commerce: { clientType: "commerce", service: "Nettoyage vitres & baies vitrées" },
  agence: { clientType: "agence", service: "Remise en état locative" },
  bureaux: { clientType: "commerce", service: "Entretien de bureaux" },
  diogene: { clientType: "particulier", service: "Nettoyage Diogène" },
  deces: { clientType: "particulier", service: "Nettoyage après décès" },
};

/** 3 services principaux — accueil (orientation pro) */
export const primaryServices = [
  services.find((s) => s.href === "/nettoyage-de-fin-de-chantier/")!,
  services.find((s) => s.href === "/nettoyage-vitres-et-baies-vitrees/")!,
  services.find((s) => s.href === "/remise-en-etat-locative/")!,
];

/** Services secondaires — ligne « Aussi » sur l'accueil */
export const secondaryServiceLinks = [
  { href: "/nettoyage-diogene/", label: "Diogène" },
  { href: "/nettoyage-apres-deces/", label: "Après décès" },
  { href: "/nettoyage-canape/", label: "Canapés & textile" },
  { href: "/nettoyage-dappartement-ou-maison/", label: "Ménage ponctuel" },
  { href: "/menage-a-domicile-avance-immediate/", label: "Ménage à domicile" },
];

/** Villes affichées — accueil (zone d'intervention) */
export const serviceAreas = [
  "Bourg-en-Bresse",
  "Montrevel-en-Bresse",
  "Oyonnax",
  "Ambérieu-en-Bugey",
  "Belley",
];

/** Pages zones SEO — à compléter */
export const featuredZones: { href: string; label: string }[] = [];

/** Masquer portfolio tant qu'il n'y a pas de photos réelles */
export const showPortfolioSection = false;

export const zones: { href: string; label: string }[] = [];

export const testimonials = [
  {
    img: "",
    initials: "GM",
    name: "Giulia Morano",
    city: "Montrevel-en-Bresse",
    text: "« Très satisfaite du travail réalisé sur les vitrines intérieures et extérieures de notre agence Century 21 à Montrevel-en-Bresse ! Une équipe professionnelle, sérieuse. Je recommande. »",
    tag: "Commerce / Agence",
  },
  {
    img: "",
    initials: "KM",
    name: "Kevin MOITEAUX",
    city: "Bourg-en-Bresse",
    text: "« Très bon travail, ma devanture a retrouvé tout son éclat ! Je recommande sans hésitation ! »",
    tag: "Commerce / Vitres",
  },
];

export type TestimonialFilterId = "all" | "vitres" | "fin-chantier" | "remise" | "textile";

export const testimonialFilters: { id: TestimonialFilterId; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "vitres", label: "Commerces & vitres" },
  { id: "fin-chantier", label: "Fin de chantier" },
  { id: "remise", label: "Remise en état" },
  { id: "textile", label: "Textile" },
];

/** Chantiers récents — légendes et photos à fournir par le client */
export const recentChantiers = [
  { id: 1, legend: "[Type] · [Ville] · [m²] · réalisé en [durée]" },
  { id: 2, legend: "[Type] · [Ville] · [m²] · réalisé en [durée]" },
  { id: 3, legend: "[Type] · [Ville] · [m²] · réalisé en [durée]" },
];

export const proReference = {
  text: "Fin de chantier — [X] logements à [ville], livrés avant la réception [À FOURNIR]",
};

export const beforeAfter = [
  { src: "/img/avant-apres-1.webp", alt: "Résultat nettoyage fin de chantier — OAO Propreté" },
  { src: "/img/avant-apres-2.webp", alt: "Résultat remise en état locative — OAO Propreté" },
  { src: "/img/avant-apres-3.webp", alt: "Résultat nettoyage Diogène — OAO Propreté" },
  { src: "/img/avant-apres-4.webp", alt: "Résultat nettoyage canapé — OAO Propreté" },
  { src: "/img/avant-apres-5.webp", alt: "Résultat nettoyage vitres — OAO Propreté" },
  { src: "/img/avant-apres-6.webp", alt: "Résultat nettoyage moquette — OAO Propreté" },
  { src: "/img/avant-apres-7.webp", alt: "Résultat fin de chantier — OAO Propreté" },
  { src: "/img/avant-apres-8.webp", alt: "Résultat nettoyage professionnel — OAO Propreté" },
];

export const serviceOptions = [
  "Nettoyage de fin de chantier",
  "Nettoyage vitres & baies vitrées",
  "Remise en état locative",
  "Entretien de bureaux",
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
  { q: `Combien coûte un nettoyage de fin de chantier à ${site.city} ?`, a: `Chez ${site.name}, un nettoyage de fin de chantier démarre à 600 € TTC, selon la surface, l'état du chantier et les délais. Le devis précis est établi après une visite gratuite sur place, sous 24 h.` },
  { q: `Combien coûte une remise en état locative à ${site.city} ?`, a: `Chez ${site.name}, une remise en état locative démarre à 200 € pour un studio, selon la surface et l'état du logement. Le devis précis est établi après une visite gratuite sur place.` },
  { q: `Comment obtenir un devis pour un nettoyage à ${site.city} ?`, a: `Il vous suffit de nous contacter au ${site.phone} ou via le formulaire. Nous nous déplaçons dans l'Ain, le Rhône et la Saône-et-Loire pour évaluer vos besoins et vous remettre un devis clair sous 24 h.` },
  { q: "Intervenez-vous en urgence pour une remise en état locative ?", a: `Oui, nous assurons des interventions rapides sur l'ensemble de notre secteur, notamment entre deux locataires ou avant un état des lieux. Contactez-nous au ${site.phone} pour une prise en charge rapide.` },
  { q: "Dans quelles communes intervenez-vous ?", a: `${site.name} intervient dans l'Ain (01), le Rhône (69) et la Saône-et-Loire (71), autour de ${site.city}. Quel que soit l'endroit où se situe votre bien, nous nous déplaçons pour réaliser votre prestation.` },
  { q: "Proposez-vous le nettoyage Diogène avec discrétion ?", a: "Oui, nous prenons en charge le désencombrement, l'évacuation et la remise en état de logements en situation de Diogène, avec une intervention respectueuse et discrète." },
  { q: "Comment fonctionne l'avance immédiate du crédit d'impôt ?", a: "Pour le ménage à domicile, vous ne payez que 50 % du montant grâce à l'avance immédiate du crédit d'impôt. Nous nous occupons des démarches administratives pour vous." },
  { q: "Nettoyez-vous les canapés, tapis et matelas à domicile ?", a: "Oui, nous utilisons la méthode injection-extraction professionnelle pour éliminer taches, acariens et odeurs. Le résultat est visible immédiatement après l'intervention." },
  { q: "Combien de temps dure une intervention de fin de chantier ?", a: "La durée varie selon la surface : quelques heures pour un studio, une journée pour un T3/T4, plusieurs jours pour un local commercial. Nous vous communiquons un planning précis dans le devis." },
  { q: "Êtes-vous assurés ?", a: `Oui, ${site.name} dispose d'une assurance responsabilité civile professionnelle. L'attestation est transmise sur demande pour les professionnels, syndics et agences.` },
  { q: "Dois-je être présent pendant l'intervention ?", a: "Votre présence n'est en général pas obligatoire si l'accès au logement est organisé (clés, digicode, contact sur place). Nous nous adaptons aux situations sensibles (Diogène, après décès) : contactez-nous pour en discuter." },
  { q: "Sous quel délai pouvez-vous intervenir ?", a: `Le devis vous est remis sous 24 h. Pour l'intervention, nous planifions selon vos contraintes et nos disponibilités — appelez le ${site.phone} pour une demande urgente.` },
];

/** 4 questions clés — accueil allégé (orientation pro) */
export const homepageFaqs = [
  faqs.find((f) => f.q.startsWith("Êtes-vous"))!,
  faqs.find((f) => f.q.startsWith("Combien coûte un nettoyage de fin"))!,
  faqs.find((f) => f.q.startsWith("Intervenez-vous en urgence"))!,
  faqs.find((f) => f.q.startsWith("Combien de temps dure"))!,
];

/** 3 grilles tarifaires — accueil (prix de départ) */
export const homepagePricingBlocks = [
  {
    title: "Nettoyage de fin de chantier",
    href: "/nettoyage-de-fin-de-chantier/",
    rows: [
      ["À partir de", "600 €"],
      ["Selon surface, état et délais", "sur devis"],
      ["Local commercial", "sur devis"],
      ["Visite et devis sur place", "Gratuit", true],
    ],
  },
  {
    title: "Nettoyage vitres & baies vitrées",
    href: "/nettoyage-vitres-et-baies-vitrees/",
    rows: [
      ["Devanture ou vitrine", "sur devis"],
      ["Vitres int. + ext.", "sur devis"],
      ["Baies vitrées et volets", "sur devis"],
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
];

export const footerServices = services.slice(0, 8).map((s) => ({
  href: s.href,
  label: `${s.title} — ${site.region}`,
}));

export const meshLinks: { href: string; label: string }[] = [];

export const socialLinks: { href: string; label: string }[] = [];
