import { serviceContent } from "./service-content";
import { buildZoneContent } from "./zone-content";
import {
  beforeAfter,
  faqs,
  pricingBlocks,
  services,
  site,
  testimonials,
  zones,
} from "./site";

export type ContentSection = {
  h2: string;
  paragraphs: string[];
  list?: string[];
};

export type ServicePageData = {
  type: "service";
  slug: string;
  title: string;
  description: string;
  heroSubtitle: string;
  badge?: string;
  imgClass?: string;
  sections: ContentSection[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
};

export type ZonePageData = {
  type: "zone";
  slug: string;
  title: string;
  description: string;
  city: string;
  postalCode: string;
  department: string;
  deptCode: string;
  sections: ContentSection[];
  faqs: { q: string; a: string }[];
  nearbyZones: { href: string; label: string }[];
};

export type StaticPageData = {
  type: "static";
  slug: string;
  title: string;
  description: string;
  template: "contact" | "blog" | "realisations" | "zones" | "prix" | "legal-privacy" | "legal-mentions";
};

export type PageData = ServicePageData | ZonePageData | StaticPageData;

const serviceExtras = serviceContent;

function buildServicePages(): ServicePageData[] {
  const serviceBySlug = new Map(services.map((s) => [s.href.replace(/^\/|\/$/g, ""), s]));
  const allSlugs = new Set([
    ...services.map((s) => s.href.replace(/^\/|\/$/g, "")),
    "nettoyage-matelas",
    "nettoyage-tapis",
  ]);

  return [...allSlugs].map((slug) => {
    const service = serviceBySlug.get(slug);
    const extra = serviceExtras[slug];
    const title = service?.title ?? (slug === "nettoyage-matelas" ? "Nettoyage matelas" : "Nettoyage tapis");
    const description =
      service?.tagline ??
      extra?.heroSubtitle ??
      `${title} à ${site.city} et ${site.region}. Devis gratuit sous 24 h.`;

    return {
      type: "service",
      slug,
      title,
      description,
      heroSubtitle: extra?.heroSubtitle ?? description,
      badge: extra?.badge ?? service?.badge,
      imgClass: extra?.imgClass ?? service?.imgClass,
      sections: extra?.sections ?? [],
      faqs: extra?.faqs ?? faqs.slice(0, 3),
      relatedSlugs: extra?.relatedSlugs ?? [],
    };
  });
}

function parseZone(label: string, href: string, allZones: typeof zones): ZonePageData {
  const slug = href.replace(/^\/|\/$/g, "");
  const match = label.match(/^(.+?) (\d{5})$/);
  const city = match?.[1] ?? label;
  const postalCode = match?.[2] ?? "";
  const deptCode = postalCode.slice(0, 2);
  const department =
    deptCode === "01"
      ? "Ain"
      : deptCode === "69"
        ? "Rhône"
        : deptCode === "71"
          ? "Saône-et-Loire"
          : deptCode === "26"
            ? "Drôme"
            : site.region;

  const content = buildZoneContent(city, postalCode, department);
  const nearbyZones = allZones
    .filter((z) => z.href !== href && z.label.match(/\d{5}/)?.[0]?.startsWith(deptCode))
    .slice(0, 4)
    .map((z) => ({ href: z.href, label: z.label }));

  return {
    type: "zone",
    slug,
    title: `Nettoyage professionnel à ${city} (${postalCode})`,
    description: `${site.name} intervient à ${city} (${postalCode}) pour fin de chantier, remise en état locative, Diogène et nettoyage textile. Devis gratuit sous 24 h.`,
    city,
    postalCode,
    department,
    deptCode,
    sections: content.sections,
    faqs: content.faqs,
    nearbyZones,
  };
}

const staticPages: StaticPageData[] = [
  {
    type: "static",
    slug: "contactez-nous",
    title: "Contactez nous",
    description: `Contactez ${site.name} pour un devis gratuit : vitres, fin de chantier et bureaux. ${site.email} — Réponse sous 24 h.`,
    template: "contact",
  },
  {
    type: "static",
    slug: "nos-realisations",
    title: "Nos réalisations",
    description: `Découvrez les réalisations de ${site.name} : nettoyage de vitres, fin de chantier et bureaux.`,
    template: "realisations",
  },
  {
    type: "static",
    slug: "blog",
    title: "Blog",
    description: `Conseils et actualités nettoyage professionnel par ${site.name} — vitres, fin de chantier et bureaux.`,
    template: "blog",
  },
  {
    type: "static",
    slug: "zones-intervention",
    title: "Zones d'intervention",
    description: `${site.name} — zone d'intervention et communes desservies. Devis gratuit sous 24 h.`,
    template: "zones",
  },
  {
    type: "static",
    slug: "prix",
    title: "Grille tarifaire",
    description: `Tarifs indicatifs ${site.name} : vitres, fin de chantier et bureaux. Devis gratuit sous 24 h.`,
    template: "prix",
  },
  {
    type: "static",
    slug: "mentions-legales",
    title: "Mentions légales",
    description: `Mentions légales du site ${site.name}.`,
    template: "legal-mentions",
  },
  {
    type: "static",
    slug: "politique-de-confidentialite",
    title: "Politique de confidentialité",
    description: `Politique de confidentialité et protection des données — ${site.name}.`,
    template: "legal-privacy",
  },
];

export const blogPosts = [
  {
    slug: "nettoyage-apres-deces-bourg-en-bresse",
    title: "Nettoyage après décès à Bourg-en-Bresse : accompagner une famille en deux temps",
    date: "27 septembre 2026",
    excerpt:
      "Il y a des appels qu'on garde en tête. Celui-ci venait de la petite-fille d'un habitant de Bourg-en-Bresse…",
  },
];

const allPages: PageData[] = [
  ...buildServicePages(),
  ...zones.map((z) => parseZone(z.label, z.href, zones)),
  ...staticPages,
];

const pageMap = new Map(allPages.map((p) => [p.slug, p]));

export function getPageBySlug(slug: string): PageData | undefined {
  return pageMap.get(slug.replace(/^\/|\/$/g, ""));
}

export function getAllSlugs(): string[] {
  return allPages.map((p) => p.slug);
}

export function getServicePricing(slug: string) {
  const href = `/${slug}/`;
  return pricingBlocks.find((b) => b.href === href);
}

export function getRelatedServices(slugs: string[]) {
  return slugs
    .map((slug) => {
      const page = getPageBySlug(slug);
      if (!page || page.type !== "service") return null;
      return { href: `/${slug}/`, title: page.title };
    })
    .filter(Boolean) as { href: string; title: string }[];
}

export { beforeAfter, testimonials, zones, pricingBlocks, site };
