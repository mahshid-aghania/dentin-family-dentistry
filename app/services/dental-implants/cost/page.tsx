import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Dental Implant Cost in Vaughan",
  description:
    "What affects the cost of dental implants in Vaughan — the factors, what's included, CDCP and financing options. Book a consultation with Dr. Mehdi Adibrad for a personalized quote.",
  alternates: { canonical: "/services/dental-implants/cost" },
};

const factors = [
  { title: "Number of implants", desc: "Replacing a single tooth costs less than restoring several teeth or a full arch." },
  { title: "Type of restoration", desc: "A single crown, an implant-supported bridge, or full-arch (All-on-4) solutions each carry different costs." },
  { title: "Bone grafting or sinus lift", desc: "If the jawbone needs to be rebuilt before placement, this adds to the treatment plan." },
  { title: "Diagnostics & materials", desc: "3D imaging, surgical guides, and the implant and crown materials selected for your case." },
  { title: "Complexity of your case", desc: "Existing dental conditions, extractions, or temporary restorations can affect the plan." },
];

const faqs = [
  {
    q: "How much do dental implants cost in Vaughan?",
    a: "Cost depends on how many teeth are being replaced and the type of restoration. Because every mouth is different, we provide a written, itemized estimate after a consultation and 3D scan rather than a one-size-fits-all price.",
  },
  {
    q: "Does the Canadian Dental Care Plan (CDCP) help with implants?",
    a: "The CDCP and private insurance may contribute toward parts of implant treatment depending on your eligibility and plan. Our team will review your coverage and explain what applies. See our CDCP page or call (437) 900-2200.",
  },
  {
    q: "Do you offer financing or payment options?",
    a: "We accept cash, credit, insurance, and CDCP, and can discuss payment options during your consultation so treatment fits your budget.",
  },
  {
    q: "Are implants worth the cost compared to bridges or dentures?",
    a: "Implants preserve jawbone, do not require grinding down neighbouring teeth, and can last for decades with good care — which often makes them cost-effective over the long term. Dr. Adibrad will review the trade-offs for your situation.",
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

export default function DentalImplantCostPage() {
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
            <Link href="/services/dental-implants" className="hover:text-white">Dental Implants</Link> / Cost
          </div>
          <h1 className="text-4xl font-bold">Dental Implant Cost in Vaughan</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            An honest guide to what goes into the price of dental implants — and how to get a personalized, itemized quote.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#555574] leading-relaxed mb-6">
            There is no single price for dental implants, because the right treatment depends on your teeth, your
            jawbone, and the result you want. Below are the main factors that determine cost, so you can walk into
            your consultation knowing what to ask. For a written estimate tailored to your mouth, book a consultation
            with Dr. Mehdi Adibrad.
          </p>

          {/* TODO (clinic): insert clinic-verified price ranges here after clinician review — do not publish invented figures. */}

          <h2 className="text-2xl font-bold text-[#002C29] mb-6">What affects the cost of implants?</h2>
          <div className="space-y-4 mb-10">
            {factors.map((f) => (
              <div key={f.title} className="bg-[#F0F0FF] rounded-xl p-4">
                <div className="font-semibold text-[#002C29] mb-1 flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#0D9488]" /> {f.title}
                </div>
                <div className="text-sm text-[#555574]">{f.desc}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#002C29] mb-4">Coverage &amp; payment</h2>
          <p className="text-[#555574] leading-relaxed mb-6">
            We accept the Canadian Dental Care Plan (CDCP), private insurance, cash, and credit. Our team will help
            you understand what your plan covers and provide a clear breakdown before any treatment begins. Learn more
            about <Link href="/cdcp-vaughan" className="text-[#0D9488] underline">CDCP coverage in Vaughan</Link>.
          </p>

          <div className="bg-[#F8F8FF] rounded-xl p-6 mb-10">
            <h3 className="font-bold text-[#002C29] mb-2">Get a personalized implant quote</h3>
            <p className="text-sm text-[#555574] mb-4">
              A consultation with a 3D scan lets us give you an accurate, itemized estimate — no guesswork.
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
            This page is general information, not a substitute for a clinical consultation. Treatment recommendations
            and costs are determined after an examination by{" "}
            <Link href="/about" className="underline">Dr. Mehdi Adibrad</Link>, an Ontario-licensed general dentist
            with training in implant dentistry.
          </p>
        </div>
      </section>
    </>
  );
}
