import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArticle, rootSlugs } from "../content/articles";
import ArticleLayout from "../components/ArticleLayout";

export const dynamicParams = false;

export function generateStaticParams() {
  return rootSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(`/${slug}`);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/${slug}` },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(`/${slug}`);
  if (!a) notFound();
  return <ArticleLayout article={a} />;
}
