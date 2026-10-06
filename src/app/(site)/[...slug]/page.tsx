import ServicePageContent from "@/components/ServicePageContent";
import StaticPageContent from "@/components/StaticPageContent";
import ZonePageContent from "@/components/ZonePageContent";
import { getAllSlugs, getPageBySlug } from "@/data/pages";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug: [slug] }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug.join("/"));
  if (!page) return { title: "Page introuvable" };

  return {
    title: `${page.title} | Xyneo`,
    description: page.description,
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug.length !== 1) {
    notFound();
  }

  const page = getPageBySlug(slug[0]);
  if (!page) {
    notFound();
  }

  switch (page.type) {
    case "service":
      return <ServicePageContent page={page} />;
    case "zone":
      return <ZonePageContent page={page} />;
    case "static":
      return <StaticPageContent page={page} />;
    default:
      notFound();
  }
}
