import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArticle, slugsUnder } from "../../content/articles";
import ArticleLayout from "../../components/ArticleLayout";

export const dynamicParams = false;

export function generateStaticParams() {
  return slugsUnder("/portfolio").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(`/portfolio/${slug}`);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/portfolio/${slug}` },
  };
}

export default async function PortfolioArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(`/portfolio/${slug}`);
  if (!a) notFound();
  return <ArticleLayout article={a} />;
}
