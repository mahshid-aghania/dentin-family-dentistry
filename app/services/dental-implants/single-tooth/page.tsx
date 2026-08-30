import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Single-Tooth Dental Implant in Vaughan",
  description:
    "Replace one missing tooth with a single dental implant in Vaughan by Dr. Mehdi Adibrad — a natural-looking crown that protects your neighbouring teeth and jawbone.",
  alternates: { canonical: "/services/dental-implants/single-tooth" },
};

const points = [
  { title: "Protects adjacent teeth", desc: "Unlike a traditional bridge, an implant does not require grinding down the healthy teeth next to the gap." },
  { title: "Prevents bone loss", desc: "The implant replaces the tooth root and keeps the jawbone stimulated." },
  { title: "Looks and feels natural", desc: "A custom crown is colour-matched to blend with your smile." },
  { title: "Easy to care for", desc: "Brush and floss it like a natural tooth — no special maintenance." },
];

const faqs = [
  {
    q: "Is a single implant better than a bridge?",
    a: "In many cases, yes — an implant replaces one tooth without altering the neighbouring teeth, and it helps preserve the bone. A bridge may still be appropriate in some situations. Dr. Adibrad will explain the trade-offs for your case.",
  },
  {
    q: "How long does a single-tooth implant take?",
    a: "After placement, the implant integrates with the bone over roughly 3–6 months before the final crown is attached. Some cases allow a temporary tooth sooner.",
  },
  {
    q: "Does it hurt?",
    a: "The procedure is done with local anesthetic and most patients report far less discomfort than they expected. We will review aftercare and pain management with you.",
  },
  {
    q: "How long will it last?",
    a: "With good oral hygiene and regular checkups, dental implants can last for decades.",
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

export default function SingleToothImplantPage() {
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
            <Link href="/services/dental-implants" className="hover:text-white">Dental Implants</Link> / Single Tooth
          </div>
          <h1 className="text-4xl font-bold">Single-Tooth Dental Implant in Vaughan</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            The modern way to replace one missing tooth — without compromising the teeth around it.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#555574] leading-relaxed mb-8">
            A single dental implant replaces one missing tooth from root to crown. It restores your bite and smile
            while protecting the health of the teeth and bone around the gap. Dr. Mehdi Adibrad places single implants
            at Dentin Family Dentistry in Vaughan using 3D planning for precise, comfortable results.
          </p>

          <h2 className="text-2xl font-bold text-[#002C29] mb-6">Why a single implant?</h2>
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
              Curious about pricing or coverage? See our{" "}
              <Link href="/services/dental-implants/cost" className="text-[#0D9488] underline">implant cost guide</Link>.
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
