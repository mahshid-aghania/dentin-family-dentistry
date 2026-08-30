import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Implant-Supported Dentures in Vaughan",
  description:
    "Stop dentures from slipping. Implant-supported and snap-in dentures in Vaughan by Dr. Mehdi Adibrad — a secure, comfortable alternative to conventional dentures.",
  alternates: { canonical: "/services/dental-implants/implant-supported-dentures" },
};

const benefits = [
  { title: "No more slipping", desc: "Dentures snap onto or are fixed to implants, so they stay put while you eat and speak." },
  { title: "No messy adhesives", desc: "The implants hold the denture in place — no need for creams or pastes." },
  { title: "Better chewing", desc: "A stable base restores much more of your natural bite force than conventional dentures." },
  { title: "Protects the jaw", desc: "Implants preserve bone that traditional dentures cannot, helping maintain facial shape." },
];

const options = [
  { title: "Removable (snap-in) overdentures", desc: "Clip onto a small number of implants and can be removed for cleaning." },
  { title: "Fixed implant bridges", desc: "A full arch permanently secured to implants — cleaned in place like natural teeth." },
];

const faqs = [
  {
    q: "Can I convert my current dentures to implant-supported?",
    a: "Sometimes an existing denture can be adapted, but often a new denture designed for implants gives the best fit and durability. Dr. Adibrad will assess your denture at a consultation.",
  },
  {
    q: "How many implants are needed?",
    a: "A removable overdenture may use as few as two implants per arch, while a fixed full-arch bridge typically uses more. The right number depends on your bone and the option you choose.",
  },
  {
    q: "Are snap-in dentures comfortable?",
    a: "Most patients find them dramatically more comfortable and secure than conventional dentures because they don't rock or press on the gums the same way.",
  },
  {
    q: "Is this covered by CDCP or insurance?",
    a: "Coverage varies. We accept the Canadian Dental Care Plan and private insurance and will review what applies to your treatment. See our CDCP page or call (437) 900-2200.",
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

export default function ImplantSupportedDenturesPage() {
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
            <Link href="/services/dental-implants" className="hover:text-white">Dental Implants</Link> / Implant-Supported Dentures
          </div>
          <h1 className="text-4xl font-bold">Implant-Supported Dentures in Vaughan</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            A secure, comfortable alternative to dentures that slip — anchored by dental implants.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#555574] leading-relaxed mb-8">
            If loose or uncomfortable dentures are affecting how you eat, speak, or feel, implant-supported dentures
            can help. By anchoring the denture to dental implants, Dr. Mehdi Adibrad gives you a stable, confident
            bite at Dentin Family Dentistry in Vaughan.
          </p>

          <h2 className="text-2xl font-bold text-[#002C29] mb-6">Benefits over conventional dentures</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {benefits.map((b) => (
              <div key={b.title} className="bg-[#F0F0FF] rounded-xl p-4">
                <div className="font-semibold text-[#002C29] mb-1 flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#0D9488]" /> {b.title}
                </div>
                <div className="text-sm text-[#555574]">{b.desc}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#002C29] mb-6">Your options</h2>
          <div className="space-y-4 mb-10">
            {options.map((o) => (
              <div key={o.title} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <div className="font-semibold text-[#002C29] mb-1">{o.title}</div>
                <div className="text-sm text-[#555574]">{o.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#F8F8FF] rounded-xl p-6 mb-10">
            <p className="text-sm text-[#555574] mb-4">
              Looking at full-arch replacement? Compare with{" "}
              <Link href="/services/dental-implants/full-mouth" className="text-[#0D9488] underline">full-mouth / All-on-4 implants</Link>{" "}
              or review our{" "}
              <Link href="/services/dental-implants/cost" className="text-[#0D9488] underline">cost guide</Link>.
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
