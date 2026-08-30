import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Gum Grafting & Gum Recession Treatment in Vaughan",
  description:
    "Gum grafting in Vaughan to treat receding gums, protect exposed roots, reduce sensitivity, and restore your smile. Provided by Dr. Mehdi Adibrad.",
  alternates: { canonical: "/services/periodontics/gum-grafting" },
};

const why = [
  { title: "Protects tooth roots", desc: "Covers exposed roots that are vulnerable to decay and wear." },
  { title: "Reduces sensitivity", desc: "Eases the sensitivity to hot and cold that comes with recession." },
  { title: "Prevents further recession", desc: "Reinforces thin gum tissue so recession doesn't keep progressing." },
  { title: "Improves your smile", desc: "Restores a more even, healthy-looking gumline." },
];

const causes = [
  "Gum disease (periodontitis)",
  "Aggressive or hard brushing",
  "Genetics and thin gum tissue",
  "Teeth grinding or misalignment",
];

const faqs = [
  {
    q: "What causes gum recession?",
    a: "Common causes include gum disease, aggressive brushing, genetics, grinding, and misaligned teeth. Recession exposes the tooth root, which can increase sensitivity and the risk of decay.",
  },
  {
    q: "What happens during a gum graft?",
    a: "Gum tissue (often from the roof of your mouth or a donor source) is placed over the receded area to rebuild the gumline. It's done with local anesthetic and the site heals over a few weeks.",
  },
  {
    q: "How much does a gum graft cost?",
    a: "Cost depends on how many teeth are treated and the grafting technique. We provide a written estimate after an exam, and we accept insurance and the CDCP where applicable. See our CDCP page or call (437) 900-2200.",
  },
  {
    q: "Is the recovery difficult?",
    a: "Most people return to normal activities quickly. You'll be given aftercare instructions and asked to avoid brushing the site directly and eating hard or hot foods for a short period.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function GumGraftingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-[#002C29] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-gray-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/services" className="hover:text-white">Services</Link> /{" "}
            <Link href="/services/periodontics" className="hover:text-white">Periodontics</Link> / Gum Grafting
          </div>
          <h1 className="text-4xl font-bold">Gum Grafting &amp; Recession Treatment in Vaughan</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Rebuild receded gums to protect your teeth and restore a healthy smile.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#555574] leading-relaxed mb-8">
            When gums recede, the roots of your teeth become exposed — leading to sensitivity, a higher risk of decay,
            and an uneven smile. Gum grafting rebuilds that lost tissue. Dr. Mehdi Adibrad performs gum grafting as
            part of comprehensive <Link href="/services/periodontics" className="text-[#0D9488] underline">periodontal care</Link> in Vaughan.
          </p>

          <h2 className="text-2xl font-bold text-[#002C29] mb-6">Why gum grafting?</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {why.map((w) => (
              <div key={w.title} className="bg-[#F0F0FF] rounded-xl p-4">
                <div className="font-semibold text-[#002C29] mb-1 flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#0D9488]" /> {w.title}
                </div>
                <div className="text-sm text-[#555574]">{w.desc}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#002C29] mb-4">Common causes of recession</h2>
          <ul className="space-y-2 mb-10">
            {causes.map((c) => (
              <li key={c} className="flex items-center gap-2 text-sm text-[#555574]">
                <CheckCircle size={16} className="text-[#0D9488]" /> {c}
              </li>
            ))}
          </ul>

          <div className="bg-[#F8F8FF] rounded-xl p-6 mb-10">
            <p className="text-sm text-[#555574] mb-4">
              Noticing sensitive teeth or a receding gumline? Book an evaluation to catch it early.
            </p>
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 bg-[#0D9488] text-white font-semibold hover:bg-[#09625C] transition-colors"
              style={{ borderRadius: "100px", padding: "14px 26px" }}
            >
              <Phone size={16} /> Book an Evaluation
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-[#002C29] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-[#002C29] mb-2">{faq.q}</h3>
                <p className="text-[#555574] text-sm">{faq.a}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#8888a0] mt-10 leading-relaxed">
            General information only; not a substitute for a clinical consultation with{" "}
            <Link href="/about" className="underline">Dr. Mehdi Adibrad</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
