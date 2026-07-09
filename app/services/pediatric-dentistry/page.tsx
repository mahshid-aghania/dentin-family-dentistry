import Link from "next/link";
import { CheckCircle, Users } from "lucide-react";

export const metadata = {
  title: "Pediatric Dentistry Vaughan | Dentin Family Dentistry",
  description:
    "Gentle, child-friendly dental care in Vaughan. First visits, cleanings, sealants, fluoride, and orthodontic referrals for children of all ages.",
};

const benefits = [
  { title: "Gentle & Kid-Friendly", desc: "Our team creates a calm, positive environment for young patients." },
  { title: "Early Problem Detection", desc: "Catching issues early means simpler, less costly treatment later." },
  { title: "Habit Counselling", desc: "Guidance on thumb-sucking, pacifiers, and proper brushing techniques." },
  { title: "Cavity Prevention", desc: "Sealants and fluoride treatments to protect growing teeth." },
  { title: "Orthodontic Screening", desc: "Early assessment for alignment issues and timely referrals." },
  { title: "Lifelong Healthy Habits", desc: "Building a foundation of good oral hygiene from the very first visit." },
];

export default function PediatricDentistryPage() {
  return (
    <>
      <section className="bg-[#002C29] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-gray-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/services" className="hover:text-white">Services</Link> / Pediatric Dentistry
          </div>
          <h1 className="text-4xl font-bold">Pediatric Dentistry</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Gentle, age-appropriate dental care for children — building healthy smiles and positive experiences from day one.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Users size={32} className="text-[#0D9488]" />
              <h2 className="text-2xl font-bold text-gray-900">Caring for Little Smiles</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Children deserve dental care that is as gentle as it is thorough. At Dentin Family Dentistry, we
              create a warm, welcoming environment that helps kids feel comfortable and even look forward to
              their dental visits.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We recommend that children visit the dentist by their first birthday or when their first tooth
              appears. Early visits help us monitor development, provide preventive treatments, and teach
              children healthy oral hygiene habits that will last a lifetime.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Preventive Care for Kids</h3>
            <ul className="space-y-2 mb-6">
              {[
                "First Dental Visits",
                "Children's Cleanings & Exams",
                "Dental Sealants",
                "Fluoride Treatments",
                "Tooth-Colored Fillings",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-[#0D9488]" /> {item}
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Developmental Care</h3>
            <ul className="space-y-2 mb-6">
              {[
                "Orthodontic Evaluations",
                "Space Maintainers",
                "Habit Counselling",
                "Mouthguards for Sports",
                "Emergency Dental Care",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-[#0D9488]" /> {item}
                </li>
              ))}
            </ul>

            <Link
              href="/appointment"
              className="bg-[#0D9488] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#09625C] transition-colors inline-block"
            >
              Book Your Child's Appointment
            </Link>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Early Dental Care</h3>
            <div className="space-y-4">
              {benefits.map((b) => (
                <div key={b.title} className="bg-[#F0F0FF] rounded-xl p-4">
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
                q: "When should my child have their first dental visit?",
                a: "We recommend a child's first visit by their first birthday or within six months of their first tooth appearing — whichever comes first.",
              },
              {
                q: "How do I prepare my child for their first visit?",
                a: "Keep it positive! Talk about the dentist as a friendly helper for their teeth. Avoid using words like 'pain' or 'needle.' Our team is experienced at making first visits fun.",
              },
              {
                q: "Are dental X-rays safe for children?",
                a: "Yes. We use digital X-rays that emit very low radiation levels. We only take X-rays when clinically necessary and always use protective shielding.",
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
