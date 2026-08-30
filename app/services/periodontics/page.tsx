import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Periodontics & Gum Disease Treatment in Vaughan",
  description:
    "Gum disease treatment and periodontal care in Vaughan by Dr. Mehdi Adibrad — internationally trained in periodontics. Scaling & root planing, gum grafting, bone grafting, crown lengthening, and pocket reduction.",
  alternates: { canonical: "/services/periodontics" },
};

const signs = [
  "Red, swollen, or tender gums",
  "Gums that bleed when brushing or flossing",
  "Persistent bad breath or a bad taste",
  "Gums pulling away from the teeth (recession)",
  "Loose or shifting teeth",
  "Pain or discomfort when chewing",
];

const treatments = [
  { href: "/services/periodontics/scaling-and-root-planing", title: "Scaling & Root Planing", desc: "Deep cleaning below the gumline to treat early and moderate gum disease." },
  { href: "/services/periodontics/gum-grafting", title: "Gum Grafting", desc: "Rebuild receded gums to protect roots and improve your smile." },
  { href: "/services/periodontics/bone-grafting", title: "Bone Grafting", desc: "Restore bone lost to disease or tooth loss — often before implants." },
  { href: "/services/periodontics/crown-lengthening", title: "Crown Lengthening", desc: "Reshape gum and bone to expose more tooth for health or cosmetics." },
];

const faqs = [
  {
    q: "What is periodontal (gum) disease?",
    a: "Periodontal disease is an infection of the tissues that hold your teeth in place, caused by plaque bacteria. Early-stage gingivitis is reversible; advanced periodontitis can damage bone and lead to tooth loss, so early treatment matters.",
  },
  {
    q: "Do you have a periodontist in Vaughan?",
    a: "Dr. Mehdi Adibrad is an Ontario-licensed general dentist who is internationally trained in periodontics and implant dentistry, and provides periodontal treatment at our Vaughan clinic. Complex cases can be co-managed or referred when appropriate.",
  },
  {
    q: "Is gum disease treatment covered by insurance or the CDCP?",
    a: "Many periodontal treatments are covered in part by private insurance and the Canadian Dental Care Plan, depending on your eligibility. We'll review your coverage before treatment. See our CDCP page or call (437) 900-2200.",
  },
  {
    q: "Can gum disease be reversed?",
    a: "Early gingivitis can often be reversed with professional cleaning and improved home care. More advanced disease can be controlled and stabilized with treatment, but it requires ongoing maintenance.",
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

export default function PeriodonticsPage() {
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
            <Link href="/services" className="hover:text-white">Services</Link> / Periodontics
          </div>
          <h1 className="text-4xl font-bold">Periodontics &amp; Gum Disease Treatment in Vaughan</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Healthy gums are the foundation of a healthy smile. Expert periodontal care by Dr. Mehdi Adibrad.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#555574] leading-relaxed mb-8">
            Gum (periodontal) disease is one of the most common causes of tooth loss in adults — and one of the most
            treatable when caught early. At Dentin Family Dentistry in Vaughan, Dr. Mehdi Adibrad diagnoses and treats
            gum disease at every stage, from professional deep cleaning to grafting and surgical care.
          </p>

          <h2 className="text-2xl font-bold text-[#002C29] mb-6">Signs you may need periodontal care</h2>
          <ul className="grid sm:grid-cols-2 gap-2 mb-10">
            {signs.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-[#555574]">
                <CheckCircle size={16} className="text-[#0D9488] mt-0.5 flex-shrink-0" /> {s}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-[#002C29] mb-6">Periodontal treatments we offer</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {treatments.map((t) => (
              <Link key={t.href} href={t.href} className="block bg-[#F0F0FF] rounded-xl p-5 hover:bg-[#E6E6FF] transition-colors">
                <div className="font-semibold text-[#002C29] mb-1">{t.title}</div>
                <div className="text-sm text-[#555574]">{t.desc}</div>
              </Link>
            ))}
          </div>
          <p className="text-sm text-[#555574] mb-10">
            We also provide pocket-reduction (osseous) surgery for advanced disease and routine{" "}
            <Link href="/professional-teeth-cleaning-vaughan" className="text-[#0D9488] underline">professional teeth cleaning in Vaughan</Link>{" "}
            to keep gums healthy.
          </p>

          <div className="bg-[#F8F8FF] rounded-xl p-6 mb-10">
            <h3 className="font-bold text-[#002C29] mb-2">Worried about your gums?</h3>
            <p className="text-sm text-[#555574] mb-4">
              Early treatment is simpler and more affordable. Book a periodontal evaluation today.
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
            General information only; not a substitute for a clinical consultation. Diagnosis and treatment are
            determined after an examination by{" "}
            <Link href="/about" className="underline">Dr. Mehdi Adibrad</Link>, an Ontario-licensed general dentist
            with training in periodontics.
          </p>
        </div>
      </section>
    </>
  );
}
