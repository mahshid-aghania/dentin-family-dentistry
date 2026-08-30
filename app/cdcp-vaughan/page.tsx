import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Canadian Dental Care Plan (CDCP) Dentist in Vaughan",
  description:
    "Dentin Family Dentistry accepts the Canadian Dental Care Plan (CDCP) in Vaughan. Learn what CDCP is, who qualifies, and how to book with Dr. Mehdi Adibrad.",
  alternates: { canonical: "/cdcp-vaughan" },
};

const covered = [
  "Examinations, cleanings, and preventive care",
  "Fillings and other restorative treatment",
  "Extractions and oral surgery",
  "Dentures and other services, based on eligibility",
];

const faqs = [
  {
    q: "Does Dentin Family Dentistry accept the CDCP?",
    a: "Yes. We welcome patients using the Canadian Dental Care Plan at our Vaughan clinic. Bring your CDCP member information and our team will help you understand your coverage.",
  },
  {
    q: "Who qualifies for the CDCP?",
    a: "Eligibility is set by the Government of Canada and is based on factors such as household income and not having access to private dental insurance. For official eligibility and to apply, visit Canada.ca or call us and we'll point you in the right direction.",
  },
  {
    q: "What does the CDCP cover?",
    a: "The plan helps cover a range of dental services including exams, cleanings, fillings, extractions, and dentures, subject to your eligibility and the plan's terms. Some treatments may require preauthorization.",
  },
  {
    q: "Does the CDCP cover dental implants?",
    a: "Coverage for implants is limited and depends on the plan's rules and your eligibility. We'll review what may apply and provide a clear estimate. See our implant cost guide for how pricing works.",
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

export default function CdcpVaughanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-[#002C29] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-gray-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link> / CDCP in Vaughan
          </div>
          <h1 className="text-4xl font-bold">Canadian Dental Care Plan (CDCP) in Vaughan</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Dentin Family Dentistry proudly accepts the CDCP — quality dental care that fits your coverage.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#555574] leading-relaxed mb-8">
            The Canadian Dental Care Plan (CDCP) helps eligible Canadian residents access dental care. At Dentin
            Family Dentistry in Vaughan, we accept the CDCP and will help you make the most of your benefits — from
            routine checkups to more involved treatment with Dr. Mehdi Adibrad.
          </p>

          <h2 className="text-2xl font-bold text-[#002C29] mb-6">Services often covered under the CDCP</h2>
          <ul className="space-y-2 mb-10">
            {covered.map((c) => (
              <li key={c} className="flex items-center gap-2 text-sm text-[#555574]">
                <CheckCircle size={16} className="text-[#0D9488]" /> {c}
              </li>
            ))}
          </ul>
          <p className="text-xs text-[#8888a0] mb-10">
            Coverage, eligibility, and preauthorization rules are set by the Government of Canada and may change.
            Please confirm current details on Canada.ca; our team can help explain how the plan applies to your care.
          </p>

          <div className="bg-[#F8F8FF] rounded-xl p-6 mb-10">
            <h3 className="font-bold text-[#002C29] mb-2">Book with a CDCP-friendly dentist in Vaughan</h3>
            <p className="text-sm text-[#555574] mb-4">
              Call <a href="tel:+14379002200" className="text-[#0D9488] underline">(437) 900-2200</a> or book online —
              we'll help you understand your CDCP coverage.
            </p>
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 bg-[#0D9488] text-white font-semibold hover:bg-[#09625C] transition-colors"
              style={{ borderRadius: "100px", padding: "14px 26px" }}
            >
              <Phone size={16} /> Book an Appointment
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
            General information only and not affiliated with or endorsed by the Government of Canada. For official
            CDCP eligibility and application, visit Canada.ca. Clinical recommendations are made by{" "}
            <Link href="/about" className="underline">Dr. Mehdi Adibrad</Link> after an examination.
          </p>
        </div>
      </section>
    </>
  );
}
