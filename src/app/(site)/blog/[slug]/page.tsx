import Breadcrumb from "@/components/Breadcrumb";
import PageDevisSection from "@/components/PageDevisSection";
import { blogPosts } from "@/data/pages";
import { site } from "@/data/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const postBodies: Record<string, string[]> = {
  "nettoyage-apres-deces-bourg-en-bresse": [
    "Il y a des appels qu'on garde en tête. Celui-ci venait de la petite-fille d'un habitant d'un immeuble de Bourg-en-Bresse. Son grand-père était décédé depuis plusieurs jours et la famille avait besoin d'une intervention rapide, discrète et respectueuse.",
    `Chez Xyneo, ce type de situation demande une double compétence : technique et humaine. Fondée par ${site.ownerFormal}, ancien infirmier, notre entreprise intervient avec la rigueur nécessaire face aux risques biologiques, et le respect dû à la famille.`,
    "L'intervention se déroule en deux temps : d'abord une évaluation confidentielle sur place et un devis gratuit, puis la désinfection complète, le traitement des odeurs et la remise en état du logement — prêt à être vendu, loué ou restitué.",
  ],
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article introuvable" };

  return {
    title: `${post.title} | Blog Xyneo`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = postBodies[slug] ?? [post.excerpt];

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog/" },
          { label: post.title },
        ]}
      />
      <div className="page-layout" style={{ gridTemplateColumns: "1fr", paddingTop: "48px" }}>
        <article className="content">
          <span className="blog-card-date">{post.date}</span>
          <h1 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", margin: "12px 0 24px" }}>{post.title}</h1>
          {paragraphs.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
          <p>
            Besoin d&apos;une intervention à {site.city} ou dans {site.region} ?{" "}
            <a href="/contactez-nous/#devis">Demandez un devis gratuit</a>.
          </p>
        </article>
      </div>
      <PageDevisSection pageSource={`/blog/${slug}/`} />
    </>
  );
}
