import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowRight, Clock, Calendar, Phone, ChevronRight } from "lucide-react";
import type { FAQ } from "./ArticleFAQ";

/* Keep this in sync with the SITE_URL used in app/layout.tsx so absolute
   URLs in structured data stay consistent across the site. */
export const SITE_URL = "https://dentin-family-dentistry.vercel.app";

export const AUTHOR = {
  name: "Dr. Mehdi Adibrad",
  role: "Implant Surgeon & Head Dentist at Dentin Family Dentistry",
  location: "Vaughan, Ontario",
  profilePath: "/about",
};

export const PUBLISHER = {
  name: "Dentin Family Dentistry",
  logo: "/images/logo-color.png",
  phoneDisplay: "(437) 900-2200",
  phoneHref: "tel:4379002200",
};

/* ---------------------------------------------------------------- */
/* Breadcrumbs                                                        */
/* ---------------------------------------------------------------- */
export function Breadcrumbs({ title }: { title: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[#0D9488] text-sm">
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-1">
        <li>
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
        </li>
        <li className="text-white/30">/</li>
        <li>
          <Link href="/blog" className="hover:text-white transition-colors">Patient Education</Link>
        </li>
        <li className="text-white/30">/</li>
        <li className="text-white/80" aria-current="page">{title}</li>
      </ol>
    </nav>
  );
}

/* ---------------------------------------------------------------- */
/* Article header (dark hero)                                         */
/* ---------------------------------------------------------------- */
export function ArticleHeader({
  title,
  breadcrumbTitle,
  category,
  date,
  readTime,
}: {
  title: string;
  breadcrumbTitle: string;
  category: string;
  date: string;
  readTime: string;
}) {
  return (
    <section className="bg-[#002C29] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <Breadcrumbs title={breadcrumbTitle} />
        </div>
        <div className="inline-block bg-green-500/30 text-green-200 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          {category}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">{title}</h1>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-300">
          <span>
            By{" "}
            <Link href={AUTHOR.profilePath} className="text-white font-semibold hover:text-[#0D9488] transition-colors">
              {AUTHOR.name}
            </Link>{" "}
            · {AUTHOR.role.replace(" at Dentin Family Dentistry", "")}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={13} /> {date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={13} /> {readTime}
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Table of contents                                                 */
/* ---------------------------------------------------------------- */
export function TableOfContents({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav aria-label="Table of contents" className="not-prose bg-[#F0F0FF] rounded-2xl p-6 mb-10">
      <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">On this page</div>
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className="inline-flex items-start gap-1.5 text-sm text-[#555574] hover:text-[#0D9488] transition-colors"
            >
              <ChevronRight size={14} className="text-[#0D9488] shrink-0 mt-0.5" />
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ---------------------------------------------------------------- */
/* Urgent warning callout                                            */
/* ---------------------------------------------------------------- */
export function WarningCallout({
  title = "When to seek urgent care",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <aside role="note" className="not-prose border-l-4 border-red-500 bg-red-50 rounded-r-2xl p-6 my-8">
      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle size={20} className="text-red-600 shrink-0" />
        <h3 className="font-bold text-red-800 m-0">{title}</h3>
      </div>
      <div className="text-sm text-red-900/90 leading-relaxed space-y-2">{children}</div>
      <p className="text-sm text-red-900/90 leading-relaxed mt-3 mb-0">
        If you have difficulty breathing or swallowing, seek emergency medical care immediately. For urgent dental
        concerns, call our Vaughan clinic at{" "}
        <a href={PUBLISHER.phoneHref} className="font-semibold underline">{PUBLISHER.phoneDisplay}</a>.
      </p>
    </aside>
  );
}

/* ---------------------------------------------------------------- */
/* Educational disclaimer                                            */
/* ---------------------------------------------------------------- */
export function EducationalNote() {
  return (
    <p className="not-prose text-xs text-gray-400 leading-relaxed border-t border-gray-100 pt-6 mt-10">
      This article is for general education only and does not replace an in-person examination or the personalized
      instructions you receive from your dentist. If Dr. Adibrad&apos;s specific guidance differs from what you read
      here, always follow the instructions given to you directly. Individual results and treatment plans vary based on
      your oral health, bone levels, medical history, and a clinical assessment.
    </p>
  );
}

/* ---------------------------------------------------------------- */
/* Final call to action                                              */
/* ---------------------------------------------------------------- */
export function ArticleCTA({
  heading = "Request an Implant Consultation in Vaughan",
  body,
}: {
  heading?: string;
  body: string;
}) {
  return (
    <section className="not-prose bg-[#0D9488] rounded-2xl p-8 text-white text-center my-10">
      <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">{heading}</h2>
      <p className="text-white/90 mb-6 max-w-xl mx-auto leading-relaxed">{body}</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/appointment"
          className="inline-flex items-center gap-2 bg-white text-[#0D9488] font-bold hover:bg-[#002C29] hover:text-white transition-colors"
          style={{ borderRadius: "100px", padding: "14px 26px" }}
        >
          Book a Consultation <ArrowRight size={15} />
        </Link>
        <a
          href={PUBLISHER.phoneHref}
          className="inline-flex items-center gap-2 border border-white/60 text-white font-semibold hover:bg-white hover:text-[#0D9488] transition-colors"
          style={{ borderRadius: "100px", padding: "12px 26px" }}
        >
          <Phone size={15} /> {PUBLISHER.phoneDisplay}
        </a>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Author biography box                                              */
/* ---------------------------------------------------------------- */
export function AuthorBox() {
  return (
    <section className="not-prose bg-[#F8F8FF] border border-gray-100 rounded-2xl p-6 md:p-8 my-10">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-[#e8e8f0]">
          <Image
            src="/images/dr-adibrad-portrait.jpg"
            alt="Dr. Mehdi Adibrad, Implant Surgeon at Dentin Family Dentistry in Vaughan"
            fill
            sizes="96px"
            className="object-cover object-top"
          />
        </div>
        <div>
          <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-1">About the author</div>
          <h2 className="text-lg font-bold text-[#002C29] mb-1">
            <Link href={AUTHOR.profilePath} className="hover:text-[#0D9488] transition-colors">
              {AUTHOR.name}
            </Link>
          </h2>
          <p className="text-sm text-[#0D9488] font-medium mb-3">
            {AUTHOR.role} · {AUTHOR.location}
          </p>
          <p className="text-sm text-[#555574] leading-relaxed mb-3">
            Dr. Mehdi Adibrad is a periodontist and implant surgeon with more than 12 years of experience, and the
            head dentist at Dentin Family Dentistry in Vaughan. He holds an active general dentistry licence with the
            Royal College of Dental Surgeons of Ontario (RCDSO), is a member of the Ontario Dental Association, and has
            authored 10+ peer-reviewed publications. He focuses on One-Day Implant solutions using detailed planning,
            3D imaging, and high-quality materials.
          </p>
          <Link
            href={AUTHOR.profilePath}
            className="text-sm text-[#0D9488] font-semibold inline-flex items-center gap-1 hover:underline"
          >
            Read Dr. Adibrad&apos;s full profile <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Related articles                                                  */
/* ---------------------------------------------------------------- */
export type RelatedItem = {
  href: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
};

export function RelatedArticles({ items }: { items: RelatedItem[] }) {
  return (
    <section className="py-12 px-4 bg-[#F8F8FF]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg font-bold text-[#002C29] mb-4">Related Articles</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block border border-gray-100 bg-white rounded-xl p-5 hover:shadow-md transition-shadow group"
            >
              <div className="text-xs text-gray-400 mb-1">
                {item.category} · {item.readTime}
              </div>
              <div className="font-bold text-[#002C29] group-hover:text-[#0D9488] transition-colors leading-snug">
                {item.title}
              </div>
              <div className="text-sm text-[#555574] mt-1 leading-relaxed">{item.excerpt}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Structured data: BlogPosting + BreadcrumbList + optional FAQPage  */
/* ---------------------------------------------------------------- */
export function ArticleSchema({
  slug,
  headline,
  description,
  image,
  datePublished,
  dateModified,
  breadcrumbTitle,
  faqs,
}: {
  slug: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  breadcrumbTitle: string;
  faqs?: FAQ[];
}) {
  const url = `${SITE_URL}/blog/${slug}`;
  const personId = `${SITE_URL}/about#dr-mehdi-adibrad`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      headline,
      description,
      image: `${SITE_URL}${image}`,
      inLanguage: "en-CA",
      datePublished,
      dateModified,
      author: {
        "@type": "Person",
        "@id": personId,
        name: AUTHOR.name,
        jobTitle: "Periodontist & Implant Surgeon",
        url: `${SITE_URL}${AUTHOR.profilePath}`,
      },
      publisher: {
        "@type": "Dentist",
        name: PUBLISHER.name,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}${PUBLISHER.logo}`,
        },
      },
      about: { "@type": "MedicalProcedure", name: "Dental Implants" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Patient Education", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: breadcrumbTitle, item: url },
      ],
    },
  ];

  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  const json = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
