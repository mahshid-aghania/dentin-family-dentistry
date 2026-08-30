import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Crown Lengthening in Vaughan",
  description:
    "Crown lengthening in Vaughan — reshaping gum and bone to expose more tooth for a healthier restoration or a more even smile. Provided by Dr. Mehdi Adibrad.",
  alternates: { canonical: "/services/periodontics/crown-lengthening" },
};

const reasons = [
  { title: "To restore a tooth", desc: "Exposes more tooth structure so a crown or filling can be placed properly when decay or a fracture sits near the gumline." },
  { title: "For a gummy smile", desc: "Reshapes an excessive or uneven gumline to reveal more of your natural teeth." },
  { title: "Before other treatment", desc: "Prepares a tooth so a lasting, well-sealed restoration is possible." },
];

const faqs = [
  {
    q: "What is crown lengthening?",
    a: "Crown lengthening is a minor surgical procedure that removes or reshapes a small amount of gum tissue (and sometimes bone) to expose more of a tooth. It's used for both health and cosmetic reasons.",
  },
  {
    q: "Is it a cosmetic or a functional procedure?",
    a: "It can be either. Functionally, it exposes enough tooth to support a filling or crown. Cosmetically, it can correct a 'gummy' smile by creating a more balanced gumline.",
  },
  {
    q: "What is recovery like?",
    a: "The procedure is done with local anesthetic. Mild soreness for a few days is normal, and we'll provide aftercare instructions. Final restorations are usually placed after the gums have healed.",
  },
  {
    q: "Will my gums look natural afterward?",
    a: "Yes — the goal is a healthy, even gumline that frames your teeth naturally. Dr. Adibrad plans the procedure to balance function and appearance.",
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

export default function CrownLengtheningPage() {
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
            <Link href="/services/periodontics" className="hover:text-white">Periodontics</Link> / Crown Lengthening
          </div>
          <h1 className="text-4xl font-bold">Crown Lengthening in Vaughan</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Reshaping the gumline for healthier restorations and a more balanced smile.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#555574] leading-relaxed mb-8">
            Crown lengthening reshapes gum tissue — and sometimes a small amount of bone — to expose more of a tooth.
            It can make a damaged tooth restorable, or correct a &ldquo;gummy&rdquo; smile for a more even look. It's
            part of the <Link href="/services/periodontics" className="text-[#0D9488] underline">periodontal care</Link>{" "}
            Dr. Mehdi Adibrad offers in Vaughan.
          </p>

          <h2 className="text-2xl font-bold text-[#002C29] mb-6">Why crown lengthening?</h2>
          <div className="space-y-4 mb-10">
            {reasons.map((r) => (
              <div key={r.title} className="bg-[#F0F0FF] rounded-xl p-4">
                <div className="font-semibold text-[#002C29] mb-1 flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#0D9488]" /> {r.title}
                </div>
                <div className="text-sm text-[#555574]">{r.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#F8F8FF] rounded-xl p-6 mb-10">
            <p className="text-sm text-[#555574] mb-4">
              Wondering if crown lengthening is right for you? Book a consultation to review your options.
            </p>
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 bg-[#0D9488] text-white font-semibold hover:bg-[#09625C] transition-colors"
              style={{ borderRadius: "100px", padding: "14px 26px" }}
            >
              <Phone size={16} /> Book a Consultation
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
