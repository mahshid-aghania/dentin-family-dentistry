import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Full-Mouth Dental Implants & All-on-4 in Vaughan",
  description:
    "Full-arch tooth replacement in Vaughan — All-on-4 and implant-supported full dentures by Dr. Mehdi Adibrad. Restore an entire smile with a fixed, stable solution.",
  alternates: { canonical: "/services/dental-implants/full-mouth" },
};

const benefits = [
  { title: "Fixed, not removable", desc: "A full arch of teeth anchored on implants — no adhesives and no nightly removal with fixed options." },
  { title: "As few as four implants", desc: "All-on-4 uses strategically placed implants to support a full arch, often without extensive grafting." },
  { title: "Preserves jawbone", desc: "Implants stimulate the bone, helping prevent the facial collapse seen with long-term denture wear." },
  { title: "Eat and speak with confidence", desc: "A stable bite lets you enjoy a wider range of foods and speak naturally." },
];

const steps = [
  { title: "Consultation & 3D imaging", desc: "We assess your bone, gums, and goals, and plan the case with 3D scans." },
  { title: "Implant placement", desc: "The implants are placed and, in many cases, a temporary fixed arch is attached the same day." },
  { title: "Healing & integration", desc: "The implants fuse with the bone over several months (osseointegration)." },
  { title: "Final restoration", desc: "Your custom, permanent arch is fitted for long-term function and appearance." },
];

const faqs = [
  {
    q: "What is the difference between All-on-4 and full-mouth implants?",
    a: "All-on-4 is a specific technique that supports a full arch of fixed teeth on four implants. 'Full-mouth implants' is a broader term that can also include more implants per arch or implant-supported dentures. Dr. Adibrad will recommend the approach that fits your bone and goals.",
  },
  {
    q: "Can I get teeth the same day?",
    a: "Many patients receive a temporary fixed set of teeth on the day of surgery, with the permanent arch placed after healing. Whether same-day teeth are appropriate depends on your case.",
  },
  {
    q: "Am I too old, or do I have enough bone?",
    a: "Age itself is rarely a barrier. Techniques like All-on-4 are designed to work with available bone, and grafting can rebuild bone where needed. A consultation and 3D scan will confirm your options.",
  },
  {
    q: "How do I care for full-arch implants?",
    a: "You clean them daily like natural teeth and attend regular maintenance visits. We will give you a personalized hygiene routine.",
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

export default function FullMouthImplantsPage() {
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
            <Link href="/services/dental-implants" className="hover:text-white">Dental Implants</Link> / Full-Mouth
          </div>
          <h1 className="text-4xl font-bold">Full-Mouth Dental Implants &amp; All-on-4 in Vaughan</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Replace an entire arch of teeth with a fixed, stable, natural-looking solution.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#555574] leading-relaxed mb-8">
            If you are missing most or all of your teeth, or facing the loss of a full arch, full-mouth implant
            solutions can restore both function and appearance. Dr. Mehdi Adibrad offers All-on-4 and other
            implant-supported full-arch options at Dentin Family Dentistry in Vaughan.
          </p>

          <h2 className="text-2xl font-bold text-[#002C29] mb-6">Why choose full-arch implants?</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {benefits.map((b) => (
              <div key={b.title} className="bg-[#F0F0FF] rounded-xl p-4">
                <div className="font-semibold text-[#002C29] mb-1">{b.title}</div>
                <div className="text-sm text-[#555574]">{b.desc}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#002C29] mb-6">What the process looks like</h2>
          <ol className="space-y-4 mb-10">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#0D9488] text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <div>
                  <div className="font-semibold text-[#002C29]">{s.title}</div>
                  <div className="text-sm text-[#555574]">{s.desc}</div>
                </div>
              </li>
            ))}
          </ol>

          <div className="bg-[#F8F8FF] rounded-xl p-6 mb-10">
            <p className="text-sm text-[#555574] mb-4">
              Wondering about cost or coverage? See our{" "}
              <Link href="/services/dental-implants/cost" className="text-[#0D9488] underline">implant cost guide</Link>{" "}
              or book a consultation for a personalized plan.
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
            General information only; not a substitute for a clinical consultation. Suitability for All-on-4 or
            full-mouth implants is determined after an examination by{" "}
            <Link href="/about" className="underline">Dr. Mehdi Adibrad</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
