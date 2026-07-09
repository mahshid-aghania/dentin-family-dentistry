import Link from "next/link";
import { CheckCircle, HeartPulse } from "lucide-react";

export const metadata = {
  title: "Endodontics & Root Canal Vaughan | Dentin Family Dentistry",
  description:
    "Specialized endodontic and root canal therapy in Vaughan. Save your natural teeth with gentle, effective treatment at Dentin Family Dentistry.",
};

const benefits = [
  { title: "Save Your Natural Tooth", desc: "Root canal therapy removes infection while preserving your original tooth." },
  { title: "Pain Relief", desc: "Treatment eliminates the severe pain caused by infected or inflamed pulp." },
  { title: "Prevent Spread of Infection", desc: "Stopping infection before it spreads to surrounding teeth and bone." },
  { title: "Efficient & Comfortable", desc: "Modern techniques make root canals no more uncomfortable than a filling." },
  { title: "Long-Term Results", desc: "A treated and crowned tooth can last a lifetime with proper care." },
  { title: "Cost-Effective", desc: "Saving a tooth is almost always more economical than replacing it with an implant." },
];

export default function EndodonticsPage() {
  return (
    <>
      <section className="bg-[#002C29] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-gray-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/services" className="hover:text-white">Services</Link> / Endodontics
          </div>
          <h1 className="text-4xl font-bold">Endodontics</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Specialized root canal therapy and endodontic treatments to relieve pain and save your natural teeth.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <HeartPulse size={32} className="text-[#0D9488]" />
              <h2 className="text-2xl font-bold text-[#002C29]">What Is Endodontics?</h2>
            </div>
            <p className="text-[#555574] leading-relaxed mb-4">
              Endodontics is the branch of dentistry focused on diagnosing and treating diseases of the dental
              pulp — the soft tissue inside your teeth containing nerves, blood vessels, and connective tissue.
              When the pulp becomes infected or inflamed, endodontic treatment is necessary to save the tooth.
            </p>
            <p className="text-[#555574] leading-relaxed mb-6">
              The most common endodontic procedure is root canal therapy. Despite its reputation, a modern
              root canal is a routine, comfortable procedure that relieves the severe pain of an infected tooth
              and preserves it for years to come.
            </p>

            <h3 className="text-lg font-bold text-[#002C29] mb-3">Endodontic Treatments</h3>
            <ul className="space-y-2 mb-6">
              {[
                "Root Canal Therapy",
                "Endodontic Retreatment",
                "Apicoectomy (Root-End Surgery)",
                "Pulp Capping",
                "Pulpotomy (Partial Pulp Removal)",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#555574]">
                  <CheckCircle size={16} className="text-[#0D9488]" /> {item}
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-[#002C29] mb-3">Signs You May Need Treatment</h3>
            <ul className="space-y-2 mb-6">
              {[
                "Severe toothache or prolonged sensitivity",
                "Darkening or discolouration of a tooth",
                "Swelling or tenderness in nearby gums",
                "Persistent pimple on the gums",
                "Pain when biting or touching the tooth",
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
              Book an Endodontic Consultation
            </Link>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#002C29] mb-6">Benefits of Root Canal Therapy</h3>
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
                q: "Does a root canal hurt?",
                a: "Modern root canal therapy is performed under local anesthesia — you should feel no pain during the procedure. Most patients are surprised by how comfortable it is. Any mild soreness afterward typically resolves within a few days.",
              },
              {
                q: "How long does a root canal take?",
                a: "Most root canals are completed in one or two appointments of 60–90 minutes each, depending on the complexity of the case.",
              },
              {
                q: "What happens after a root canal?",
                a: "After root canal therapy, the tooth is typically restored with a crown to protect it and restore full function. The crown appointment is usually scheduled a few weeks after the root canal.",
              },
              {
                q: "Can I eat after a root canal?",
                a: "Wait until the anesthesia has fully worn off before eating. Stick to soft foods for the first day or two and avoid chewing on the treated side until your permanent crown is placed.",
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
