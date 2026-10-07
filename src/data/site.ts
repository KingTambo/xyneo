export const site = {
  name: "OAO Propreté",
  tagline: "Vitres · Fin de chantier · Bureaux",
  phone: "",
  phoneTel: "",
  email: "contact.oaopreprete@gmail.com",
  address: "[À FOURNIR]",
  owner: "",
  ownerFirst: "",
  ownerRole: "",
  since: "",
  rating: "",
  reviews: "",
  experience: "",
  region: "[Zone d'intervention À FOURNIR]",
  department: "",
  city: "[À FOURNIR]",
  hours: "Lundi au samedi",
  website: "https://oaoproprete.fr",
  googleReviewsUrl: "",
  logoSrc: "/img/oao-logo.png",
  siret: "",
  legalName: "OAO Propreté",
};

export const services = [
  {
    href: "/nettoyage-vitres-et-baies-vitrees/",
    imgClass: "sc1",
    badge: "Sur devis",
    title: "Nettoyage de vitres",
    tagline: "Vitrines, fenêtres, baies vitrées et façades vitrées, sans traces ni auréoles.",
    comprisTitle: "Compris dans votre prestation vitres",
    checklist: [
      "Vitrines commerciales et bureaux",
      "Fenêtres, baies vitrées, vérandas",
      "Passage régulier ou ponctuel",
    ],
  },
  {
    href: "/nettoyage-de-fin-de-chantier/",
    imgClass: "sc2",
    badge: "Sur devis",
    title: "Nettoyage fin de chantier",
    tagline: "Élimination de la poussière et des résidus après travaux, avant remise des clés.",
    comprisTitle: "Compris dans votre prestation fin de chantier",
    checklist: [
      "Dépoussiérage sols, murs, plafonds",
      "Traces de peinture, colle, plâtre",
      "Vitres et sanitaires livrés propres",
    ],
  },
  {
    href: "/nettoyage-bureaux/",
    imgClass: "sc3",
    badge: "Sur devis",
    title: "Nettoyage de bureaux",
    tagline: "Entretien régulier des espaces de travail, sans perturber votre activité.",
    comprisTitle: "Compris dans votre prestation bureaux",
    checklist: [
      "Postes de travail et sols",
      "Sanitaires et espaces communs",
      "Passages hors horaires si besoin",
    ],
  },
  {
    href: "/remise-en-etat-locative/",
    imgClass: "sc4",
    badge: "Sur devis",
    title: "Remise en état locative",
    tagline: "Logement propre et conforme entre deux locataires, avant l'état des lieux.",
    comprisTitle: "Compris dans votre prestation remise en état",
    checklist: ["Nettoyage complet de toutes les pièces", "Cuisine, salle de bain et sanitaires", "Sols, vitres et plinthes", "Conformité avant état des lieux"],
  },
  {
    href: "/nettoyage-diogene/",
    imgClass: "sc5",
    badge: "Sur devis",
    title: "Nettoyage Diogène",
    tagline: "Désencombrement, évacuation et remise en état de logements très dégradés, en toute discrétion.",
    comprisTitle: "Compris dans votre prestation Diogène",
    checklist: ["Désencombrement et tri des objets", "Évacuation des encombrants", "Désinfection et remise en état", "Intervention discrète et respectueuse"],
  },
  {
    href: "/nettoyage-apres-deces/",
    imgClass: "sc6",
    badge: "Sur devis",
    title: "Nettoyage après décès",
    tagline: "Remise en état complète de logements avec discrétion, respect et professionnalisme.",
    comprisTitle: "Compris dans votre prestation après décès",
    checklist: ["Nettoyage en profondeur du logement", "Désinfection des surfaces", "Évacuation si nécessaire", "Intervention rapide et discrète"],
  },
  {
    href: "/nettoyage-canape/",
    imgClass: "sc7",
    badge: "Sur devis",
    title: "Nettoyage textile",
    tagline: "Canapé, tapis et matelas nettoyés à domicile par injection-extraction : taches, acariens et odeurs.",
    comprisTitle: "Compris dans votre prestation textile",
    checklist: ["Injection-extraction professionnelle", "Traitement anti-taches et anti-odeurs", "Canapé, tapis ou matelas", "Résultat visible immédiatement"],
  },
  {
    href: "/nettoyage-dappartement-ou-maison/",
    imgClass: "sc8",
    badge: "Sur devis",
    title: "Nettoyage d'appartement ou maison",
    tagline: "Ménage de fond ou ponctuel de logements, avant ou après un déménagement.",
    comprisTitle: "Compris dans votre prestation ménage",
    checklist: ["Nettoyage complet de toutes les pièces", "Vitres, sols et surfaces", "Avant ou après déménagement", "Adapté à votre calendrier"],
  },
];

export const navServices = services.slice(0, 3).map((s) => ({ href: s.href, label: s.title }));

export const navLinks = [
  { href: "/", label: "Accueil" },
  {
    label: "Services",
    href: "/nettoyage-vitres-et-baies-vitrees/",
    children: navServices,
  },
  { href: "/prix/", label: "Prix & Tarifs" },
  { href: "/contactez-nous/", label: "Contact" },
];

/** 3 engagements — source oaoproprete.fr */
export const commitments = [
  "Devis gratuit et sans engagement",
  "Matériel professionnel",
  "Intervention vitres, chantier et bureaux · Disponible du lundi au samedi",
];

export const formSocialProof = {
  excerpt: "« [Avis client À FOURNIR] »",
  author: "[Prénom N.]",
};

/** Pré-remplissage formulaire depuis ?profil= */
export const profilePresets: Record<string, { clientType: string; service: string }> = {
  vitres: { clientType: "particulier", service: "Nettoyage de vitres" },
  chantier: { clientType: "btp", service: "Nettoyage fin de chantier" },
  bureaux: { clientType: "particulier", service: "Nettoyage de bureaux" },
};

/** 3 services principaux — accueil */
export const primaryServices = services.slice(0, 3);

/** Services secondaires — ligne « Aussi » sur l'accueil */
export const secondaryServiceLinks: { href: string; label: string }[] = [];

export const featuredZones: { href: string; label: string }[] = [];

export const zones: { href: string; label: string }[] = [];

export const testimonials: {
  img: string;
  initials: string;
  name: string;
  city: string;
  text: string;
  tag: string;
}[] = [];

export type TestimonialFilterId = "all" | "vitres" | "fin-chantier" | "bureaux";

export const testimonialFilters: { id: TestimonialFilterId; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "vitres", label: "Vitres" },
  { id: "fin-chantier", label: "Fin de chantier" },
  { id: "bureaux", label: "Bureaux" },
];

export const recentChantiers = [
  { id: 1, legend: "[Type] · [Ville] · [m²] · réalisé en [durée]" },
  { id: 2, legend: "[Type] · [Ville] · [m²] · réalisé en [durée]" },
  { id: 3, legend: "[Type] · [Ville] · [m²] · réalisé en [durée]" },
];

export const proReference = {
  text: "Fin de chantier — [X] locaux à [ville], livrés avant la réception [À FOURNIR]",
};

export const beforeAfter = [
  { src: "/img/avant-apres-1.webp", alt: "Résultat nettoyage fin de chantier — OAO Propreté" },
  { src: "/img/avant-apres-2.webp", alt: "Résultat nettoyage vitres — OAO Propreté" },
  { src: "/img/avant-apres-3.webp", alt: "Résultat nettoyage bureaux — OAO Propreté" },
  { src: "/img/avant-apres-4.webp", alt: "Résultat nettoyage professionnel — OAO Propreté" },
  { src: "/img/avant-apres-5.webp", alt: "Résultat nettoyage vitres — OAO Propreté" },
  { src: "/img/avant-apres-6.webp", alt: "Résultat fin de chantier — OAO Propreté" },
  { src: "/img/avant-apres-7.webp", alt: "Résultat nettoyage professionnel — OAO Propreté" },
  { src: "/img/avant-apres-8.webp", alt: "Résultat nettoyage professionnel — OAO Propreté" },
];

export const serviceOptions = [
  "Nettoyage de vitres",
  "Nettoyage fin de chantier",
  "Nettoyage de bureaux",
  "Autre",
];

export const pricingBlocks = [
  {
    title: "Nos Tarifs pour Nettoyage de vitres",
    href: "/nettoyage-vitres-et-baies-vitrees/",
    rows: [
      ["Vitres intérieures", "[À VALIDER]"],
      ["Vitres int. + ext.", "[À VALIDER]"],
      ["Baies vitrées et façades", "sur devis"],
      ["Devis par email", "Gratuit", true],
    ],
  },
  {
    title: "Nos Tarifs pour Nettoyage fin de chantier",
    href: "/nettoyage-de-fin-de-chantier/",
    rows: [
      ["Selon surface, état et délais", "[À VALIDER]"],
      ["Dépoussiérage complet", "sur devis"],
      ["Vitres et sanitaires", "sur devis"],
      ["Devis par email", "Gratuit", true],
    ],
  },
  {
    title: "Nos Tarifs pour Nettoyage de bureaux",
    href: "/nettoyage-bureaux/",
    rows: [
      ["Entretien régulier", "[À VALIDER]"],
      ["Passage ponctuel", "sur devis"],
      ["Hors horaires de bureau", "sur devis"],
      ["Devis par email", "Gratuit", true],
    ],
  },
];

export const faqs = [
  { q: "Comment obtenir un devis chez OAO Propreté ?", a: "Décrivez votre besoin via le formulaire : type de prestation, adresse d'intervention et coordonnées. Nous revenons vers vous sous 24 h par email, avec une estimation claire et les questions utiles s'il en manque." },
  { q: "Quels types de prestations proposez-vous ?", a: "OAO Propreté intervient pour le nettoyage de vitres, le nettoyage fin de chantier et l'entretien de bureaux. Chaque surface a sa méthode : nous adaptons le matériel et les produits selon le type d'intervention." },
  { q: "Le devis est-il gratuit et sans engagement ?", a: "Oui. Le devis est gratuit et sans engagement. Vous recevez une réponse sous 24 h par email, à l'adresse que vous indiquez." },
  { q: "Quels sont vos horaires d'intervention ?", a: "Nous sommes disponibles du lundi au samedi. Pour les bureaux, des passages hors horaires d'activité peuvent être organisés si besoin." },
  { q: "Intervenez-vous pour des chantiers fraîchement livrés ?", a: "Oui. Le nettoyage fin de chantier couvre le dépoussiérage des sols, murs et plafonds, le retrait des traces de peinture, colle ou plâtre, ainsi que la remise en état des vitres et sanitaires avant remise des clés." },
  { q: "Proposez-vous un entretien régulier des vitres ?", a: "Oui. Nous intervenons en passage régulier ou ponctuel pour vitrines, fenêtres, baies vitrées, vérandas et façades vitrées." },
  { q: "Comment se déroule une demande de devis pour des bureaux ?", a: "Indiquez le type de prestation, l'adresse d'intervention et vos disponibilités. Après validation du devis, nous planifions une date qui vous convient, sans surprise sur le tarif annoncé." },
  { q: "Utilisez-vous du matériel professionnel ?", a: "Oui. Nous utilisons du matériel professionnel adapté à chaque type de surface, pour un résultat sans traces ni auréoles sur le verre et un chantier ou des bureaux remis en état." },
];

/** 4 questions clés — accueil allégé */
export const homepageFaqs = faqs.slice(0, 4);

/** 3 grilles tarifaires — accueil */
export const homepagePricingBlocks = pricingBlocks;

export const footerServices = primaryServices.map((s) => ({
  href: s.href,
  label: s.title,
}));

export const meshLinks: { href: string; label: string }[] = [];

export const socialLinks: { href: string; label: string }[] = [];
