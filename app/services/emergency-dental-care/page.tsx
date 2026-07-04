import Link from "next/link";
import { AlertCircle, Phone, Clock, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Emergency Dental Care | Dentin Family Dentistry Vaughan",
  description:
    "24/7 emergency dental care in Vaughan. Toothaches, broken teeth, lost fillings — call (437) 900-2200 now.",
};

export default function EmergencyDentalCarePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-red-200 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/services" className="hover:text-white">Services</Link> / Emergency Dental Care
          </div>
          <h1 className="text-4xl font-bold">Emergency Dental Care</h1>
          <p className="text-red-100 mt-2 max-w-xl">
            Dental emergencies happen. We&apos;re here for you 24/7 — call us immediately for urgent care.
          </p>
          <a
            href="tel:4379002200"
            className="mt-6 inline-flex items-center gap-2 bg-white text-red-600 font-bold px-7 py-3 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition-colors"
          >
            <Phone size={18} /> Call Now: (437) 900-2200
          </a>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle size={32} className="text-red-500" />
              <h2 className="text-2xl font-bold text-gray-900">What Is a Dental Emergency?</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              A dental emergency is any situation that requires immediate attention to save a tooth, stop bleeding,
              relieve severe pain, or prevent an infection from spreading. Do not wait — call us right away.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-4">Common Dental Emergencies We Treat:</h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { title: "Severe Toothache", desc: "Intense, persistent pain that won't subside with over-the-counter medication." },
                { title: "Broken or Cracked Tooth", desc: "Chipped or fractured teeth from trauma or biting hard objects." },
                { title: "Knocked-Out Tooth", desc: "A tooth fully dislodged — time is critical. Call immediately." },
                { title: "Lost Filling or Crown", desc: "Exposed tooth structure that requires urgent protection." },
                { title: "Dental Abscess", desc: "A serious infection that can spread without prompt treatment." },
                { title: "Soft Tissue Injuries", desc: "Lacerations to the gums, tongue, cheeks, or lips." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 border-l-4 border-red-400 pl-4 py-1">
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                    <div className="text-gray-500 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={24} className="text-red-500" />
                <h3 className="text-xl font-bold text-gray-900">Available 24/7</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Our emergency line is available around the clock. Don&apos;t suffer through dental pain — call us now.
              </p>
              <a
                href="tel:4379002200"
                className="block text-center bg-red-500 text-white font-bold py-3 px-6 rounded-full hover:bg-red-600 transition-colors mb-3"
              >
                (437) 900-2200 — Emergency Line
              </a>
            </div>

            <div className="bg-[#e8f2fc] rounded-2xl p-8">
              <h3 className="font-bold text-gray-900 mb-4">What to Do Before You Arrive</h3>
              <ul className="space-y-3">
                {[
                  "Call us immediately — we will guide you through first steps.",
                  "For a knocked-out tooth: handle by the crown, rinse gently, and keep moist.",
                  "For bleeding: apply gentle pressure with clean gauze.",
                  "For swelling: apply a cold pack to the outside of the cheek.",
                  "Do NOT take aspirin for dental pain before treatment.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-[#1a6fb5] shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Don&apos;t Wait — Get Help Now</h2>
        <p className="text-red-100 mb-6 max-w-lg mx-auto">
          Dental emergencies get worse with time. Call our emergency line immediately.
        </p>
        <a
          href="tel:4379002200"
          className="bg-white text-red-600 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition-colors inline-flex items-center gap-2"
        >
          <Phone size={18} /> Call (437) 900-2200 Now
        </a>
      </section>
    </>
  );
}
