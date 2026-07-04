import Link from "next/link";
import { CheckCircle, Stethoscope } from "lucide-react";

export const metadata = {
  title: "General Dentistry | Dentin Family Dentistry Vaughan",
  description:
    "Preventive and general dentistry services in Vaughan. Cleanings, exams, fillings, fluoride, and more for the whole family.",
};

const benefits = [
  { title: "Personalized Oral Health Advice", desc: "Custom guidance based on your unique dental needs." },
  { title: "Restorative Treatments", desc: "Fillings, crowns, and bridges to restore damaged teeth." },
  { title: "Overall Health Improvement", desc: "Oral health is linked to systemic health — we help both." },
  { title: "Orthodontic Assessments", desc: "Early evaluation for straighter, healthier smiles." },
  { title: "Gum Health Management", desc: "Prevention and treatment of gingivitis and periodontitis." },
  { title: "Early Detection", desc: "Cavities, gum disease, and oral cancer screening." },
];

export default function GeneralDentistryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a6fb5] to-[#0d4a80] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-blue-200 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/services" className="hover:text-white">Services</Link> / General Dentistry
          </div>
          <h1 className="text-4xl font-bold">General Dentistry</h1>
          <p className="text-blue-100 mt-2 max-w-xl">
            Prevention, diagnosis, and treatment of common oral health issues for your whole family.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Stethoscope size={32} className="text-[#1a6fb5]" />
              <h2 className="text-2xl font-bold text-gray-900">What Is General Dentistry?</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              General dentistry focuses on the prevention, diagnosis, and treatment of common oral health issues.
              Our practice provides personalized care across all ages, addressing cavities, gum disease, and oral
              hygiene education.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Regular dental visits — we recommend every six months — are the foundation of a healthy smile. Early
              detection allows us to treat small problems before they become major (and costly) ones.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Preventive Care</h3>
            <ul className="space-y-2 mb-6">
              {["Dental Cleanings", "Comprehensive Exams", "Fluoride Treatments", "Dental X-Rays", "Oral Cancer Screening"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-[#1a6fb5]" /> {item}
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Restorative Procedures</h3>
            <ul className="space-y-2 mb-6">
              {["Tooth-Colored Fillings", "Crowns & Bridges", "Root Canal Therapy", "Dental Sealants", "Gum Disease Treatment"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-[#1a6fb5]" /> {item}
                </li>
              ))}
            </ul>

            <Link
              href="/appointment"
              className="bg-[#1a6fb5] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#145a95] transition-colors inline-block"
            >
              Book a Cleaning
            </Link>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
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
                q: "How often should I visit the dentist?",
                a: "We recommend dental visits every six months for routine cleanings and exams. Patients with gum disease or other conditions may need more frequent visits.",
              },
              {
                q: "Do you accept dental insurance?",
                a: "Yes, we accept most major dental insurance plans and the Canadian Dental Care Plan (CDCP).",
              },
              {
                q: "What should I do in a dental emergency?",
                a: "Call us immediately at (437) 900-2200. We offer 24/7 emergency dental care.",
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
