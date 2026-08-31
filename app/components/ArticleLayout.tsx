import Link from "next/link";
import { Phone } from "lucide-react";
import { Article, snapshotISO } from "../content/articles";

const SITE_URL = "https://www.dfdentistry.ca";

/** Render recovered content blocks, grouping consecutive list items into <ul>. */
function ArticleBody({ blocks }: { blocks: Article["blocks"] }) {
  const out: React.ReactNode[] = [];
  let list: string[] = [];
  const flush = (key: string) => {
    if (list.length) {
      out.push(
        <ul key={key} className="list-disc pl-6 space-y-1 mb-4 text-[#555574]">
          {list.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      );
      list = [];
    }
  };
  blocks.forEach((b, i) => {
    if (b.type === "li") {
      list.push(b.text);
      return;
    }
    flush(`ul-${i}`);
    if (b.type === "h2")
      out.push(
        <h2 key={i} className="text-2xl font-bold text-[#002C29] mt-8 mb-3">{b.text}</h2>
      );
    else if (b.type === "h3")
      out.push(
        <h3 key={i} className="text-xl font-semibold text-[#002C29] mt-6 mb-2">{b.text}</h3>
      );
    else if (b.type === "h4")
      out.push(
        <h4 key={i} className="text-lg font-semibold text-[#002C29] mt-4 mb-2">{b.text}</h4>
      );
    else out.push(<p key={i} className="text-[#555574] leading-relaxed mb-4">{b.text}</p>);
  });
  flush("ul-last");
  return <>{out}</>;
}

export default function ArticleLayout({ article }: { article: Article }) {
  const iso = snapshotISO(article.snapshot);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: { "@type": "Person", name: "Dr. Mehdi Adibrad" },
    publisher: {
      "@type": "Dentist",
      name: "Dentin Family Dentistry",
      telephone: "+14379002200",
    },
    mainEntityOfPage: `${SITE_URL}${article.path}`,
    ...(iso ? { datePublished: iso, dateModified: iso } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="bg-[#002C29] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-gray-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/blog" className="hover:text-white">Patient Education</Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">{article.title}</h1>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <ArticleBody blocks={article.blocks} />

          <div className="bg-[#F8F8FF] rounded-xl p-6 mt-10">
            <h2 className="font-bold text-[#002C29] mb-2">Book a consultation in Vaughan</h2>
            <p className="text-sm text-[#555574] mb-4">
              Have questions about your care? Dr. Mehdi Adibrad and the team at Dentin Family
              Dentistry are here to help. Call{" "}
              <a href="tel:+14379002200" className="text-[#0D9488] underline">(437) 900-2200</a>.
            </p>
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 bg-[#0D9488] text-white font-semibold hover:bg-[#09625C] transition-colors"
              style={{ borderRadius: "100px", padding: "14px 26px" }}
            >
              <Phone size={16} /> Book an Appointment
            </Link>
          </div>

          <p className="text-xs text-[#8888a0] mt-8 leading-relaxed">
            This article is general information, not a substitute for a clinical consultation.
            Diagnosis and treatment are determined after an examination by{" "}
            <Link href="/about" className="underline">Dr. Mehdi Adibrad</Link>, an Ontario-licensed
            general dentist at Dentin Family Dentistry in Vaughan.
          </p>
        </div>
      </article>
    </>
  );
}
