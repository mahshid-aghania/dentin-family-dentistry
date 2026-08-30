import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Dental Bone Grafting in Vaughan",
  description:
    "Dental bone grafting in Vaughan to rebuild jawbone lost to tooth loss or gum disease — often a first step before dental implants. Provided by Dr. Mehdi Adibrad.",
  alternates: { canonical: "/services/periodontics/bone-grafting" },
};

const when = [
  { title: "Before dental implants", desc: "Builds enough healthy bone to securely anchor an implant." },
  { title: "After tooth extraction", desc: "A socket graft preserves the ridge so future treatment stays possible." },
  { title: "Advanced gum disease", desc: "Replaces bone destroyed by periodontitis to stabilize teeth." },
  { title: "Sinus lift support", desc: "Adds bone height in the upper jaw for implants near the sinus." },
];

const faqs = [
  {
    q: "Why would I need a bone graft?",
    a: "Bone can shrink after tooth loss or gum disease. A graft rebuilds that bone so the jaw can support implants or remaining teeth. It's frequently done to prepare the jaw for dental implants.",
  },
  {
    q: "Where does the graft material come from?",
    a: "Graft material can come from your own body, a certified donor source, or a synthetic material. Dr. Adibrad will discuss the safest, most suitable option for your case.",
  },
  {
    q: "How long does healing take?",
    a: "The graft integrates with your existing bone over several months before implants are placed. Timelines vary by graft size and your healing.",
  },
  {
    q: "Is bone grafting painful?",
    a: "It's performed with local anesthetic and most patients experience only mild, manageable discomfort afterward. You'll receive detailed aftercare instructions.",
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

export default function BoneGraftingPage() {
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
            <Link href="/services/periodontics" className="hover:text-white">Periodontics</Link> / Bone Grafting
          </div>
          <h1 className="text-4xl font-bold">Dental Bone Grafting in Vaughan</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Rebuild lost jawbone to restore your smile and make dental implants possible.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#555574] leading-relaxed mb-8">
            Bone grafting rebuilds jawbone that has shrunk after tooth loss or gum disease. It's often the step that
            makes <Link href="/services/dental-implants" className="text-[#0D9488] underline">dental implants</Link>{" "}
            possible when there isn't enough bone to hold them. Dr. Mehdi Adibrad provides bone grafting at Dentin
            Family Dentistry in Vaughan.
          </p>

          <h2 className="text-2xl font-bold text-[#002C29] mb-6">When bone grafting is needed</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {when.map((w) => (
              <div key={w.title} className="bg-[#F0F0FF] rounded-xl p-4">
                <div className="font-semibold text-[#002C29] mb-1 flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#0D9488]" /> {w.title}
                </div>
                <div className="text-sm text-[#555574]">{w.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#F8F8FF] rounded-xl p-6 mb-10">
            <p className="text-sm text-[#555574] mb-4">
              Considering implants but told you don't have enough bone? A consultation and 3D scan will confirm
              whether grafting can help.
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
