import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Scaling & Root Planing (Deep Cleaning) in Vaughan",
  description:
    "Scaling and root planing in Vaughan — a deep cleaning below the gumline to treat gum disease and stop it from progressing. Provided by Dr. Mehdi Adibrad.",
  alternates: { canonical: "/services/periodontics/scaling-and-root-planing" },
};

const points = [
  { title: "Removes hidden buildup", desc: "Cleans plaque and tartar from below the gumline where brushing can't reach." },
  { title: "Smooths the roots", desc: "Root surfaces are smoothed so gums can reattach and pockets can shrink." },
  { title: "Stops disease progressing", desc: "Halts early-to-moderate gum disease before it damages bone." },
  { title: "Comfortable treatment", desc: "Performed with local anesthetic, often over one or two visits." },
];

const faqs = [
  {
    q: "How is deep cleaning different from a regular cleaning?",
    a: "A regular cleaning (prophylaxis) removes plaque and tartar above and slightly below the gumline for healthy mouths. Scaling and root planing is a deeper treatment for gum disease that cleans well below the gumline and smooths the tooth roots.",
  },
  {
    q: "Does scaling and root planing hurt?",
    a: "The area is numbed with local anesthetic, so the procedure is comfortable. Mild sensitivity for a few days afterward is normal and usually managed with over-the-counter pain relief.",
  },
  {
    q: "How many visits will I need?",
    a: "Deep cleaning is often done in one or two visits, sometimes by treating one side of the mouth at a time. Your treatment plan depends on how much buildup is present.",
  },
  {
    q: "What happens after treatment?",
    a: "We'll place you on a periodontal maintenance schedule — usually more frequent cleanings — and review home-care techniques to keep the disease under control.",
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

export default function ScalingRootPlaningPage() {
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
            <Link href="/services/periodontics" className="hover:text-white">Periodontics</Link> / Scaling &amp; Root Planing
          </div>
          <h1 className="text-4xl font-bold">Scaling &amp; Root Planing in Vaughan</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            A deep cleaning that treats gum disease at the source and helps your gums heal.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#555574] leading-relaxed mb-8">
            When gum disease has moved below the gumline, a standard cleaning isn't enough. Scaling and root planing —
            often called a &ldquo;deep cleaning&rdquo; — removes bacterial buildup from the roots of your teeth and
            smooths those surfaces so your gums can heal and reattach. It's a cornerstone of{" "}
            <Link href="/services/periodontics" className="text-[#0D9488] underline">periodontal care</Link> at our
            Vaughan clinic.
          </p>

          <h2 className="text-2xl font-bold text-[#002C29] mb-6">What deep cleaning does</h2>
          <div className="space-y-4 mb-10">
            {points.map((p) => (
              <div key={p.title} className="bg-[#F0F0FF] rounded-xl p-4">
                <div className="font-semibold text-[#002C29] mb-1 flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#0D9488]" /> {p.title}
                </div>
                <div className="text-sm text-[#555574]">{p.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#F8F8FF] rounded-xl p-6 mb-10">
            <p className="text-sm text-[#555574] mb-4">
              Not sure whether you need a deep cleaning? A periodontal evaluation will measure your gum pockets and
              confirm the right treatment.
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
