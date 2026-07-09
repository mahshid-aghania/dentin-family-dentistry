import Link from "next/link";
import { CheckCircle, Smile } from "lucide-react";

export const metadata = {
  title: "Dental Implants Vaughan | Dentin Family Dentistry",
  description:
    "Expert One-Day Dental Implant solutions in Vaughan by Dr. Mehdi Adibrad. Single implants, All-on-4, implant-supported bridges, bone grafting and more.",
};

const benefits = [
  { title: "Natural Look & Feel", desc: "Implants look, feel, and function just like your natural teeth." },
  { title: "Long-Lasting Solution", desc: "With proper care, implants can last a lifetime." },
  { title: "Preserves Jawbone", desc: "Implants stimulate bone growth and prevent bone loss after tooth loss." },
  { title: "No Slipping", desc: "Unlike dentures, implants are fixed permanently and won't move." },
  { title: "Protects Adjacent Teeth", desc: "No need to grind down neighboring teeth as with bridges." },
  { title: "Improved Confidence", desc: "Eat, speak, and smile with complete confidence." },
];

export default function DentalImplantsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a6fb5] to-[#0d4a80] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-blue-200 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/services" className="hover:text-white">Services</Link> / Dental Implants
          </div>
          <h1 className="text-4xl font-bold">Dental Implants</h1>
          <p className="text-blue-100 mt-2 max-w-xl">
            State-of-the-art One-Day Implant solutions by expert implant surgeon Dr. Mehdi Adibrad.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Smile size={32} className="text-[#1a6fb5]" />
              <h2 className="text-2xl font-bold text-gray-900">What Are Dental Implants?</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dental implants are titanium posts surgically placed into the jawbone to act as synthetic tooth
              roots. Once integrated with the bone, they support crowns, bridges, or dentures — providing a
              stable, permanent foundation for replacement teeth.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Dr. Adibrad specializes in One-Day Implant procedures, meaning in many cases you can walk out
              with a functional tooth the same day as your surgery. Using advanced 3D imaging and precision
              surgical techniques, we deliver outstanding results with minimal downtime.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Implant Solutions We Offer</h3>
            <ul className="space-y-2 mb-6">
              {[
                "Single Tooth Implants",
                "Implant-Supported Bridges",
                "All-on-4 Implants",
                "Implant-Supported Dentures",
                "Bone Grafting",
                "Sinus Lifts",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-[#1a6fb5]" /> {item}
                </li>
              ))}
            </ul>

            <Link
              href="/appointment"
              className="bg-[#1a6fb5] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#145a95] transition-colors inline-block"
            >
              Book an Implant Consultation
            </Link>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Implants?</h3>
            <div className="space-y-4">
              {benefits.map((b) => (
                <div key={b.title} className="bg-[#e8f2fc] rounded-xl p-4">
                  <div className="font-semibold text-gray-900 mb-1">{b.title}</div>
                  <div className="text-sm text-gray-500">{b.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-2xl">
            {[
              {
                q: "Am I a candidate for dental implants?",
                a: "Most adults with good general health are candidates. Dr. Adibrad will assess your bone density and overall oral health during a consultation to determine the best approach for you.",
              },
              {
                q: "How long does the implant procedure take?",
                a: "With our One-Day Implant technology, many patients receive their implant and a temporary crown in a single visit. Full integration typically takes 3–6 months.",
              },
              {
                q: "Are dental implants covered by insurance?",
                a: "Coverage varies by plan. We accept the Canadian Dental Care Plan (CDCP) and will help you understand your benefits. Contact us at (437) 900-2200 for details.",
              },
              {
                q: "How do I care for my implants?",
                a: "Implants are cared for just like natural teeth — brush twice daily, floss, and visit us for regular cleanings. With good oral hygiene, implants can last a lifetime.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
