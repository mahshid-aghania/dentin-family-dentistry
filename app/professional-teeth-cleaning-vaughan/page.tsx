import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Professional Teeth Cleaning in Vaughan",
  description:
    "Professional teeth cleaning and dental hygiene in Vaughan at Dentin Family Dentistry. Remove plaque and tartar, prevent gum disease, and keep your smile healthy.",
  alternates: { canonical: "/professional-teeth-cleaning-vaughan" },
};

const benefits = [
  { title: "Removes plaque & tartar", desc: "Clears buildup that brushing alone can't reach — the main cause of cavities and gum disease." },
  { title: "Prevents gum disease", desc: "Regular cleanings keep your gums healthy and catch problems early." },
  { title: "Fresher breath", desc: "A professional cleaning removes the bacteria behind persistent bad breath." },
  { title: "Brighter smile", desc: "Cleanings remove surface stains for a naturally cleaner look." },
  { title: "Early problem detection", desc: "Your hygienist and dentist spot issues before they become painful or costly." },
  { title: "Whole-body health", desc: "Good oral health supports your overall health and wellbeing." },
];

const faqs = [
  {
    q: "How often should I get my teeth cleaned?",
    a: "Most people benefit from a professional cleaning every six months, but some need more frequent visits — especially if you have gum disease or a history of buildup. We'll recommend the right schedule for you.",
  },
  {
    q: "Is a cleaning covered by insurance or the CDCP?",
    a: "Preventive cleanings are commonly covered by private insurance and the Canadian Dental Care Plan, subject to your eligibility. Our team will confirm your coverage. See our CDCP page or call (437) 900-2200.",
  },
  {
    q: "Does a cleaning hurt?",
    a: "A routine cleaning is comfortable for most patients. If you have sensitive teeth or gum inflammation, let us know and we'll keep you comfortable throughout.",
  },
  {
    q: "What if I need a deep cleaning instead?",
    a: "If we find signs of gum disease, we may recommend scaling and root planing (a deep cleaning) instead of a routine cleaning. Learn more on our periodontics page.",
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

export default function TeethCleaningVaughanPage() {
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
            <Link href="/services/general-dentistry" className="hover:text-white">General Dentistry</Link> / Teeth Cleaning
          </div>
          <h1 className="text-4xl font-bold">Professional Teeth Cleaning in Vaughan</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Keep your smile healthy with gentle, thorough dental cleanings and hygiene care.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#555574] leading-relaxed mb-8">
            Regular professional cleanings are the simplest way to protect your teeth and gums. At Dentin Family
            Dentistry in Vaughan, our team removes the plaque and tartar that lead to cavities and gum disease, and
            helps you keep a healthy smile between visits.
          </p>

          <h2 className="text-2xl font-bold text-[#002C29] mb-6">Benefits of regular cleanings</h2>
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

          <p className="text-sm text-[#555574] mb-10">
            Concerned about your gums? Learn about{" "}
            <Link href="/services/periodontics" className="text-[#0D9488] underline">gum disease treatment</Link> and{" "}
            <Link href="/services/periodontics/scaling-and-root-planing" className="text-[#0D9488] underline">deep cleaning (scaling &amp; root planing)</Link>.
          </p>

          <div className="bg-[#F8F8FF] rounded-xl p-6 mb-10">
            <h3 className="font-bold text-[#002C29] mb-2">Due for a cleaning?</h3>
            <p className="text-sm text-[#555574] mb-4">
              Book your next hygiene visit at our Vaughan clinic — new patients welcome.
            </p>
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 bg-[#0D9488] text-white font-semibold hover:bg-[#09625C] transition-colors"
              style={{ borderRadius: "100px", padding: "14px 26px" }}
            >
              <Phone size={16} /> Book a Cleaning
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
