import { site } from "./site";

type ContentSection = {
  h2: string;
  paragraphs: string[];
  list?: string[];
};

type ServiceContent = {
  heroSubtitle: string;
  badge?: string;
  imgClass?: string;
  sections: ContentSection[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
};

export const serviceContent: Record<string, ServiceContent> = {
  "nettoyage-de-fin-de-chantier": {
    heroSubtitle:
      "Vous venez de terminer un chantier ou des travaux de rénovation ? Xyneo prend en charge la remise en état complète de vos espaces dans l'Ain, le Rhône et la Saône-et-Loire. Devis gratuit sur place sous 24 h.",
    badge: "À partir de 600€",
    imgClass: "sc1",
    sections: [
      {
        h2: "Ce que comprend notre nettoyage de fin de chantier",
        paragraphs: [
          `Entreprise locale basée à ${site.city}, ${site.name} propose un service après travaux professionnel, rigoureux et fiable, adapté aux particuliers, entreprises du BTP, architectes, promoteurs ou agences immobilières.`,
          "Grâce à des équipements professionnels (autolaveuse, monobrosse, aspirateur de chantier), nous garantissons un résultat soigné, conforme aux exigences des opérations préalables à la réception (OPR).",
        ],
        list: [
          "Dépoussiérage et nettoyage des sols (carrelage, béton, parquet…)",
          "Lessivage des murs et des plinthes",
          "Nettoyage des vitres, encadrements et rebords, avec suppression des traces de peinture",
          "Désinfection des sanitaires et des pièces humides",
          "Entretien des extérieurs : terrasses, entrées, escaliers",
          "Aspiration des poussières fines et traitement post-construction",
        ],
      },
      {
        h2: "Entreprise locale : notre zone d'intervention",
        paragraphs: [
          "Nous intervenons sur l'ensemble de l'Ain (01), du Rhône (69) et de la Saône-et-Loire (71), pour des chantiers de toute taille : logements, locaux professionnels, commerces, immeubles.",
          "Chaque chantier est différent : volume de poussières, résidus de plâtre ou de peinture, matériaux délicats. C'est pourquoi nous nous déplaçons sur place pour évaluer votre chantier avant de chiffrer, afin de vous donner un prix juste et un délai tenu avant la réception ou la livraison.",
        ],
      },
      {
        h2: "Pour qui ?",
        paragraphs: [
          "Particuliers, entreprises du BTP, architectes, promoteurs immobiliers, agences et syndics : nous adaptons notre intervention à chaque type de chantier, qu'il s'agisse d'une construction neuve, d'une rénovation ou d'un aménagement.",
        ],
      },
    ],
    faqs: [
      {
        q: "Combien coûte un nettoyage de fin de chantier à Bourg-en-Bresse ?",
        a: "Chez Xyneo, un nettoyage de fin de chantier démarre à 600 €, selon la surface, l'état du chantier et les délais. Le devis précis est établi après une visite gratuite sur place, sous 24 h.",
      },
      {
        q: "Xyneo intervient-elle en urgence avant une réception de travaux ?",
        a: "Oui. Xyneo s'adapte aux délais de livraison de chantier, y compris pour des interventions rapides avant les OPR ou la remise des clés.",
      },
      {
        q: "Le devis de nettoyage de fin de chantier se fait-il sur place ?",
        a: "Oui. Xyneo se déplace gratuitement pour évaluer le chantier et établir un devis précis, adapté au volume de poussières et aux matériaux.",
      },
      {
        q: "Xyneo évacue-t-elle les déchets de chantier ?",
        a: "Oui, sur devis : cartons, emballages, chutes et petits gravats sont évacués en déchetterie. Pour les gros volumes, une benne est organisée.",
      },
      {
        q: "Xyneo travaille-t-elle avec les entreprises du BTP et les architectes ?",
        a: "Oui. Xyneo intervient avant la réception des travaux en respectant le planning du chantier, avec facturation professionnelle et attestation d'assurance sur demande.",
      },
    ],
    relatedSlugs: ["remise-en-etat-locative", "nettoyage-vitres-et-baies-vitrees", "nettoyage-dappartement-ou-maison"],
  },
  "remise-en-etat-locative": {
    heroSubtitle:
      "Propriétaire, bailleur ou agence immobilière : remettez votre logement en état avant relocation. Un logement propre se reloue plus vite et évite les litiges lors de l'état des lieux.",
    badge: "À partir de 200€",
    imgClass: "sc2",
    sections: [
      {
        h2: "Ce qui est inclus dans notre intervention",
        paragraphs: [
          `${site.name} réalise un nettoyage complet du logement, pièce par pièce. Entreprise locale basée à ${site.city}, nous nous déplaçons pour visiter le logement et établir un devis gratuit avant d'intervenir.`,
          "Propriétaires bailleurs, agences immobilières, syndics de copropriété — nous nous adaptons aux délais souvent serrés entre le départ d'un locataire et l'arrivée du suivant.",
        ],
        list: [
          "Cuisine : four, plaques, hotte, réfrigérateur, placards intérieur et extérieur",
          "Sanitaires : détartrage, désinfection, joints",
          "Sols : aspiration, lavage, décrassage ; moquettes en injection-extraction sur option",
          "Vitres : vitres, huisseries et volets",
          "Murs et portes : traces de doigts et salissures, plinthes, interrupteurs",
          "Rangements : placards, radiateurs, dépoussiérage complet",
        ],
      },
      {
        h2: "Zone d'intervention",
        paragraphs: [
          "Ain (01), Rhône (69), Saône-et-Loire (71). Ce service s'inscrit souvent dans la continuité d'un nettoyage de fin de chantier ou avant l'entrée d'un nouveau locataire.",
        ],
      },
    ],
    faqs: [
      {
        q: "Combien coûte une remise en état locative à Bourg-en-Bresse ?",
        a: "Chez Xyneo, une remise en état locative démarre à 200 € pour un studio, selon la surface et l'état du logement. Le devis précis est établi après une visite gratuite sur place.",
      },
      {
        q: "Combien de temps prend une remise en état locative ?",
        a: "Quelques heures pour un studio, jusqu'à une journée pour un grand logement. Le délai exact est confirmé lors de la visite gratuite.",
      },
      {
        q: "Xyneo intervient-elle entre deux locataires ?",
        a: "Oui. Xyneo s'adapte aux délais serrés entre l'état des lieux de sortie et l'arrivée du nouveau locataire, pour les propriétaires bailleurs, agences et syndics.",
      },
      {
        q: "Le devis de remise en état se fait-il sur place ?",
        a: "Oui. Xyneo se déplace gratuitement pour visiter le logement et établir un devis précis avant d'intervenir.",
      },
    ],
    relatedSlugs: ["nettoyage-de-fin-de-chantier", "nettoyage-dappartement-ou-maison", "nettoyage-apres-deces"],
  },
  "nettoyage-diogene": {
    heroSubtitle:
      "Situation d'accumulation ou d'insalubrité ? Xyneo accompagne particuliers, familles et professionnels avec discrétion et sans jugement.",
    badge: "Devis gratuit",
    imgClass: "sc3",
    sections: [
      {
        h2: "Une intervention menée par un ancien infirmier",
        paragraphs: [
          `${site.name} a été fondée par ${site.owner}, ancien infirmier. Les situations de fragilité, le respect de la personne, la confidentialité et les règles d'hygiène face aux risques biologiques font partie de son quotidien depuis longtemps.`,
          "Entreprise locale basée à Bourg-en-Bresse, Xyneo commence chaque intervention Diogène par une visite discrète sur place pour évaluer la situation et établir un devis gratuit, en lien avec la personne concernée ou sa famille.",
        ],
      },
      {
        h2: "Nettoyage Diogène : notre intervention et engagement",
        paragraphs: [
          "Étapes de notre intervention : évaluation gratuite et confidentielle sur site, tri des affaires et évacuation en déchetterie, mise en garde-meuble si besoin de conserver des objets.",
          "Désinfection complète avec traitement des odeurs et des surfaces contaminées, puis remise en état pour un logement à nouveau vivable et conforme. Notre engagement : rigueur technique, rapidité d'intervention et respect de la personne à chaque étape.",
        ],
      },
      {
        h2: "Pour qui intervenons-nous ?",
        paragraphs: [
          "Xyneo intervient à la demande des familles, des tuteurs et mandataires de protection, des CCAS, des travailleurs sociaux et services d'aide à domicile, des bailleurs, des syndics et des agences immobilières.",
        ],
      },
    ],
    faqs: [
      {
        q: "Combien coûte un nettoyage Diogène à Bourg-en-Bresse ?",
        a: "Le tarif dépend de la surface, du volume à évacuer et de l'état du logement. Xyneo réalise une évaluation gratuite et confidentielle sur place, puis un devis détaillé.",
      },
      {
        q: "Xyneo intervient-elle avec discrétion ?",
        a: "Oui. Chaque intervention Diogène est menée sans jugement, dans le respect de la personne et de la confidentialité, par une entreprise fondée par un ancien infirmier.",
      },
      {
        q: "Que deviennent les objets à conserver ?",
        a: "Le tri se fait avec la personne ou sa famille. Les objets à garder peuvent être placés en garde-meuble, le reste est évacué en déchetterie.",
      },
      {
        q: "Le logement est-il désinfecté après l'intervention ?",
        a: "Oui. Xyneo réalise une désinfection complète avec traitement des odeurs et des surfaces contaminées, pour un logement à nouveau vivable.",
      },
      {
        q: "Xyneo travaille-t-elle avec les services sociaux et les tuteurs ?",
        a: "Oui. Xyneo intervient à la demande des CCAS, travailleurs sociaux, tuteurs et mandataires de protection, en lien avec la personne concernée.",
      },
    ],
    relatedSlugs: ["nettoyage-apres-deces", "nettoyage-dappartement-ou-maison", "remise-en-etat-locative"],
  },
  "nettoyage-apres-deces": {
    heroSubtitle:
      "Intervention discrète et professionnelle pour remettre un logement en état propre, sain et prêt à être habité, vendu ou loué.",
    badge: "Devis gratuit",
    imgClass: "sc4",
    sections: [
      {
        h2: "Nettoyage après décès : intervention discrète et professionnelle",
        paragraphs: [
          "Le décès d'un proche dans un logement, parfois découvert plusieurs jours après, laisse un logement à remettre en état dans des conditions difficiles : odeurs fortes, salissures biologiques, désinfection nécessaire.",
          `Entreprise locale basée à ${site.city}, ${site.name} se déplace rapidement pour évaluer la situation et établir un devis gratuit, en lien avec la famille, le notaire ou l'agence concernée.`,
        ],
      },
      {
        h2: "Une intervention menée par un ancien infirmier",
        paragraphs: [
          `${site.name} a été fondée par ${site.owner}, ancien infirmier. La confrontation à des situations difficiles, le respect de la personne et des familles, la rigueur face aux risques biologiques font partie de son quotidien depuis longtemps.`,
        ],
      },
      {
        h2: "Ce qui est inclus dans notre intervention",
        paragraphs: [],
        list: [
          "Évaluation discrète et confidentielle sur place, devis gratuit",
          "Désinfection complète et traitement des odeurs et surfaces contaminées",
          "Nettoyage approfondi du logement, pièce par pièce",
          "Évacuation des déchets et, si besoin, des encombrants",
          "Remise en état du logement pour une vente, une location ou un usage familial",
        ],
      },
    ],
    faqs: [
      {
        q: "Combien coûte un nettoyage après décès à Bourg-en-Bresse ?",
        a: "Le tarif dépend de la surface, de l'état du logement et du délai d'intervention. Xyneo réalise une évaluation gratuite et confidentielle sur place, puis un devis détaillé.",
      },
      {
        q: "Intervenez-vous en urgence ?",
        a: "Oui, Xyneo s'adapte aux situations urgentes et peut intervenir rapidement après contact.",
      },
      {
        q: "Travaillez-vous avec les familles, notaires et pompes funèbres ?",
        a: "Oui, nous intervenons à la demande des familles, notaires, agences immobilières ou pompes funèbres, en toute discrétion.",
      },
      {
        q: "Le logement est-il désinfecté et désodorisé ?",
        a: "Oui, chaque intervention inclut une désinfection complète et un traitement professionnel des odeurs.",
      },
    ],
    relatedSlugs: ["nettoyage-diogene", "remise-en-etat-locative", "nettoyage-dappartement-ou-maison"],
  },
  "nettoyage-canape": {
    heroSubtitle:
      "Entreprise de nettoyage canapé, fauteuil et divan à domicile à Bourg-en-Bresse et ses environs. Méthode injection-extraction, sans déplacer vos meubles.",
    badge: "À partir de 60€",
    imgClass: "sc5",
    sections: [
      {
        h2: "Nettoyage de canapé à domicile",
        paragraphs: [
          "Votre canapé affiche des taches de café, de nourriture ou dégage une mauvaise odeur ? Notre entreprise propose une méthode efficace et écologique réalisée directement à domicile, sans déplacer vos meubles.",
          "Nous intervenons sur tous les textiles d'ameublement : microfibre, velours, coton, lin, canapés convertibles ou d'angle, fauteuils, chaises rembourrées et banquettes.",
        ],
      },
      {
        h2: "Nettoyage canapé, fauteuil et divan",
        paragraphs: [
          "Nous utilisons des injecteurs-extracteurs haut de gamme, capables d'extraire en profondeur la saleté incrustée dans les fibres. Contrairement au matériel grand public, nos équipements professionnels garantissent un résultat net et durable.",
          "Notre méthode, douce mais très efficace, respecte les tissus fragiles tout en assurant un traitement anti-acariens et une désinfection complète. Résultat : un intérieur propre, sain et dépourvu d'allergènes.",
        ],
        list: [
          "Taches : pipi de chat ou de chien, transpiration, nourriture, cigarette",
          "Fauteuil : 40 €",
          "Canapé 2/3 places : 60 €",
          "Canapé 4/5 places : 70 €",
          "Canapé en U, pouf, chaises : sur devis",
        ],
      },
    ],
    faqs: [
      {
        q: "Combien de temps faut-il pour nettoyer un canapé ?",
        a: "Comptez généralement 1 à 2 heures selon la taille et l'état du canapé, avec un séchage rapide grâce à nos équipements professionnels.",
      },
      {
        q: "Le nettoyage à domicile évite-t-il de déplacer mon canapé ?",
        a: "Oui, notre intervention se fait directement chez vous, sans besoin de déplacer ou transporter vos meubles.",
      },
    ],
    relatedSlugs: ["nettoyage-tapis", "nettoyage-matelas", "nettoyage-dappartement-ou-maison"],
  },
  "nettoyage-matelas": {
    heroSubtitle:
      "Service de nettoyage matelas à domicile à Bourg-en-Bresse et les alentours. Injection-extraction, désinfection complète, 7j/7.",
    badge: "À partir de 40€",
    imgClass: "sc5",
    sections: [
      {
        h2: "Nettoyage de matelas à domicile",
        paragraphs: [
          "Votre matelas présente des taches, une odeur désagréable ou déclenche des réactions allergiques ? Notre société est spécialisée dans le nettoyage de matelas à domicile et intervient rapidement, 7j/7.",
          "Nos équipements à injection-extraction éliminent acariens, bactéries, moisissures, mauvaises odeurs et taches d'urine ou de transpiration. Votre matelas ressort assaini, désinfecté et rafraîchi dès la première intervention.",
        ],
        list: [
          "Matelas enfant : 40 €",
          "Matelas 1 place : 50 €",
          "Matelas 2 places : 60 €",
          "Séchage rapide, sans résidu chimique",
        ],
      },
    ],
    faqs: [
      {
        q: "Le nettoyage de matelas élimine-t-il vraiment les acariens ?",
        a: "Oui, notre méthode par injection-extraction associée à un traitement adapté élimine efficacement acariens, bactéries et allergènes en profondeur.",
      },
      {
        q: "Puis-je dormir sur le matelas juste après le nettoyage ?",
        a: "Le séchage est rapide grâce à nos équipements professionnels, mais nous recommandons d'attendre quelques heures pour un confort optimal avant de refaire le lit.",
      },
    ],
    relatedSlugs: ["nettoyage-canape", "nettoyage-tapis", "nettoyage-dappartement-ou-maison"],
  },
  "nettoyage-tapis": {
    heroSubtitle:
      "Entreprise de nettoyage tapis à domicile à Bourg-en-Bresse. Laine, synthétique, tapis d'orient — méthode adaptée à chaque fibre.",
    badge: "À partir de 50€",
    imgClass: "sc5",
    sections: [
      {
        h2: "Nettoyage tapis à domicile",
        paragraphs: [
          "Votre tapis a perdu de son éclat, présente des taches ou dégage une odeur désagréable ? Xyneo intervient à domicile pour redonner vie à vos tapis, quels que soient leur matière ou leur niveau d'encrassement.",
          "Notre expertise couvre les tapis en laine, fibres synthétiques, textiles délicats et tapis d'orient. Chaque matière exige une méthode adaptée : vapeur sèche, injection-extraction ou nettoyage manuel.",
        ],
        list: [
          "1 tapis : 50 €",
          "2 tapis : 80 €",
          "3 tapis : 100 €",
          "Taches : urine, transpiration, nourriture, cigarette",
        ],
      },
    ],
    faqs: [
      {
        q: "Combien de temps met un tapis à sécher après nettoyage ?",
        a: "Grâce à nos machines à injection-extraction, le séchage est généralement rapide, entre quelques heures et une journée selon l'épaisseur et la matière du tapis.",
      },
      {
        q: "Le nettoyage abîme-t-il les tapis anciens ou fragiles ?",
        a: "Non, nous adaptons la méthode selon la matière pour préserver les fibres, y compris sur les tapis d'orient et les textiles délicats.",
      },
    ],
    relatedSlugs: ["nettoyage-canape", "nettoyage-matelas", "nettoyage-dappartement-ou-maison"],
  },
  "nettoyage-dappartement-ou-maison": {
    heroSubtitle:
      "Entretien complet d'appartements, maisons, studios ou locaux professionnels. Service rapide, flexible et personnalisé autour de Bourg-en-Bresse.",
    badge: "Sur devis",
    imgClass: "sc6",
    sections: [
      {
        h2: "Nettoyage d'appartement ou de maison",
        paragraphs: [
          `Basée près de ${site.city}, ${site.name} prend en charge le nettoyage complet de tous types d'habitations, quelles que soient leur configuration ou leur état.`,
          "Que votre logement ait besoin d'un entretien classique ou d'une remise en état après un sinistre ou une longue période d'abandon, nous intervenons rapidement.",
        ],
        list: [
          "Lessivage des murs, plafonds et sols",
          "Dépoussiérage complet de chaque pièce",
          "Nettoyage des vitres et fenêtres",
          "Désinfection de la cuisine et des sanitaires",
          "Évacuation des encombrants si nécessaire",
          "Entretien des sols : carrelage, parquet, moquette",
        ],
      },
      {
        h2: "Prestations associées",
        paragraphs: [
          "Nos services sont modulables et peuvent être associés à d'autres prestations : nettoyage après déménagement, remise en état avant un état des lieux, traitement de logements insalubres (syndrome de Diogène) ou nettoyage après décès.",
          "Pour un intérieur impeccable, nous proposons aussi le nettoyage de canapé, de tapis et de matelas en complément du ménage classique.",
        ],
      },
    ],
    faqs: [
      {
        q: "Proposez-vous un entretien régulier ou seulement ponctuel ?",
        a: "Les deux : nous nous adaptons à vos besoins, que ce soit pour un nettoyage unique (déménagement, état des lieux) ou un entretien récurrent de votre logement.",
      },
      {
        q: "Intervenez-vous aussi sur des logements très dégradés ?",
        a: "Oui, nous intervenons sur tous types de situations, y compris les logements insalubres ou fortement encombrés, avec discrétion et sans jugement.",
      },
    ],
    relatedSlugs: ["remise-en-etat-locative", "menage-a-domicile-avance-immediate", "nettoyage-de-fin-de-chantier"],
  },
  "menage-a-domicile-avance-immediate": {
    heroSubtitle:
      "Ménage récurrent à domicile avec avance immédiate du crédit d'impôt 50 % — partenariat Unipros. Vous ne payez que la moitié, tout de suite.",
    badge: "Avance immédiate 50%",
    imgClass: "sc7",
    sections: [
      {
        h2: "Ménage à domicile – Avance immédiate 50 %",
        paragraphs: [
          `${site.name}, en partenariat avec Unipros, vous permet de bénéficier du crédit d'impôt services à la personne directement sur votre facture — sans attendre votre déclaration.`,
        ],
        list: [
          "Ménage récurrent (sols, poussière, surfaces)",
          "Cuisine et sanitaires (détartrage / désinfection)",
          "Vitres intérieures",
          "Moquette / canapé / tapis",
        ],
      },
      {
        h2: "Comment ça marche",
        paragraphs: [
          "Vous réglez uniquement 50 % du montant de la facture. Xyneo et Unipros gèrent toute la démarche administrative pour vous. Aucune avance de trésorerie, aucun dossier à remplir de votre côté.",
          "Tout particulier résidant en France (résidence principale ou secondaire), sans condition de revenu ni d'âge, pour un ménage récurrent à domicile dans l'Ain, le Rhône et la Saône-et-Loire.",
        ],
      },
    ],
    faqs: [
      {
        q: "Comment fonctionne l'avance immédiate du crédit d'impôt ?",
        a: "50 % du montant de la prestation est déduit directement sur votre facture, sans attendre votre déclaration d'impôts l'année suivante.",
      },
      {
        q: "Qui peut en bénéficier ?",
        a: "Tout particulier résidant en France, pour un ménage récurrent à domicile dans le cadre de services à la personne.",
      },
    ],
    relatedSlugs: ["nettoyage-dappartement-ou-maison", "remise-en-etat-locative", "nettoyage-canape"],
  },
  "nettoyage-vitres-et-baies-vitrees": {
    heroSubtitle:
      "Vitres, huisseries et volets roulants nettoyés minutieusement, intérieur et extérieur, autour de Bourg-en-Bresse.",
    badge: "Sur devis",
    imgClass: "sc8",
    sections: [
      {
        h2: "Nettoyage de vitres et baies vitrées",
        paragraphs: [
          `Baies vitrées, huisseries, volets roulants : ${site.ownerFirst} et l'équipe Xyneo interviennent minutieusement et proprement, comme le confirment nos avis Google.`,
          "Nous utilisons un matériel professionnel adapté pour un résultat sans traces ni auréoles, chez les particuliers comme les professionnels.",
        ],
        list: [
          "Baies vitrées intérieur et extérieur",
          "Huisseries et volets roulants",
          "Encadrements et rebords",
          "Particuliers et entreprises",
        ],
      },
    ],
    faqs: [
      {
        q: "Intervenez-vous sur les volets roulants ?",
        a: "Oui, nous nettoyons vitres, huisseries et volets roulants, intérieur comme extérieur selon l'accès.",
      },
      {
        q: "Comment obtenir un devis ?",
        a: `Contactez-nous au ${site.phone} ou via le formulaire. Devis gratuit sous 24 h après évaluation de vos besoins.`,
      },
    ],
    relatedSlugs: ["nettoyage-de-fin-de-chantier", "nettoyage-dappartement-ou-maison", "remise-en-etat-locative"],
  },
};
