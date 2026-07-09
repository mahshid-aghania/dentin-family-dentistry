import Link from "next/link";
import { CheckCircle, Scissors } from "lucide-react";

export const metadata = {
  title: "Oral Surgery Vaughan | Dentin Family Dentistry",
  description:
    "Expert oral surgery services in Vaughan including wisdom teeth extractions, bone grafting, gum surgery, and complex extractions by Dr. Mehdi Adibrad.",
};

const benefits = [
  { title: "Expert Surgeon On-Site", desc: "Dr. Adibrad is an experienced periodontist and oral surgeon." },
  { title: "Advanced Technology", desc: "3D imaging and precision surgical tools for safer, more accurate procedures." },
  { title: "Comfortable Experience", desc: "Sedation options available to ensure your comfort throughout the procedure." },
  { title: "Fast Recovery", desc: "Minimally invasive techniques reduce healing time and post-operative discomfort." },
  { title: "Comprehensive Aftercare", desc: "Detailed post-surgery instructions and follow-up appointments included." },
  { title: "Implant-Ready Planning", desc: "Bone grafting and site preparation for future dental implant placement." },
];

export default function OralSurgeryPage() {
  return (
    <>
      <section className="bg-[#002C29] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-gray-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/services" className="hover:text-white">Services</Link> / Oral Surgery
          </div>
          <h1 className="text-4xl font-bold">Oral Surgery</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Expert surgical procedures to treat dental and oral conditions, performed by our in-house oral surgeon.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Scissors size={32} className="text-[#0D9488]" />
              <h2 className="text-2xl font-bold text-[#002C29]">Oral Surgery at Dentin</h2>
            </div>
            <p className="text-[#555574] leading-relaxed mb-4">
              Oral surgery encompasses a range of procedures that go beyond routine dental care. At Dentin
              Family Dentistry, Dr. Mehdi Adibrad — a skilled periodontist and implant surgeon — performs a
              full spectrum of oral surgical procedures right in our Vaughan office.
            </p>
            <p className="text-[#555574] leading-relaxed mb-6">
              Whether you need a wisdom tooth removed, a bone graft before an implant, or treatment for
              advanced gum disease, our surgical team combines precision technique with a compassionate
              approach for optimal outcomes.
            </p>

            <h3 className="text-lg font-bold text-[#002C29] mb-3">Surgical Procedures</h3>
            <ul className="space-y-2 mb-6">
              {[
                "Wisdom Teeth Extractions",
                "Simple & Complex Tooth Extractions",
                "Bone Grafting",
                "Sinus Lifts",
                "Gum Surgery (Periodontal Surgery)",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#555574]">
                  <CheckCircle size={16} className="text-[#0D9488]" /> {item}
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-[#002C29] mb-3">Additional Procedures</h3>
            <ul className="space-y-2 mb-6">
              {[
                "Frenectomy (Tongue-Tie / Lip-Tie)",
                "Cyst & Lesion Removal",
                "Oral Biopsy",
                "Pre-Prosthetic Surgery",
                "Implant Site Preparation",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#555574]">
                  <CheckCircle size={16} className="text-[#0D9488]" /> {item}
                </li>
              ))}
            </ul>

            <Link
              href="/appointment"
              className="inline-block bg-[#0D9488] text-white font-semibold hover:bg-[#09625C] transition-colors" style={{ borderRadius: "100px", padding: "16px 28px" }}
            >
              Book a Surgical Consultation
            </Link>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#002C29] mb-6">Why Choose Us for Surgery?</h3>
            <div className="space-y-4">
              {benefits.map((b) => (
                <div key={b.title} className="bg-[#F0F0FF] rounded-xl p-4">
                  <div className="font-semibold text-[#002C29] mb-1">{b.title}</div>
                  <div className="text-sm text-[#555574]">{b.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F8F8FF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#002C29] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-2xl">
            {[
              {
                q: "Will oral surgery be painful?",
                a: "We use local anesthesia to ensure you are completely numb during the procedure. Sedation options are also available for anxious patients. Post-operative discomfort is manageable with prescribed pain relief.",
              },
              {
                q: "How long is the recovery after a tooth extraction?",
                a: "Most patients recover within 3–7 days for simple extractions. Wisdom teeth removal or more complex procedures may take 1–2 weeks. We provide detailed aftercare instructions to speed your recovery.",
              },
              {
                q: "Do I need a referral for oral surgery?",
                a: "No referral is needed. You can call us directly at (437) 900-2200 or book online to schedule a surgical consultation with Dr. Adibrad.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-[#002C29] mb-2">{faq.q}</h3>
                <p className="text-[#555574] text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
