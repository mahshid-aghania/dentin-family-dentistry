import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArticle, slugsUnder } from "../../content/articles";
import ArticleLayout from "../../components/ArticleLayout";

export const dynamicParams = false;

export function generateStaticParams() {
  return slugsUnder("/blog").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(`/blog/${slug}`);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(`/blog/${slug}`);
  if (!a) notFound();
  return <ArticleLayout article={a} />;
}
