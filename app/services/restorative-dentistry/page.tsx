import Link from "next/link";
import { CheckCircle, Shield } from "lucide-react";

export const metadata = {
  title: "Restorative Dentistry | Dentin Family Dentistry Vaughan",
  description:
    "Restore your smile with crowns, bridges, dental implants, and more at Dentin Family Dentistry Vaughan.",
};

export default function RestorativeDentistryPage() {
  return (
    <>
      <section className="bg-[#002C29] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-gray-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/services" className="hover:text-white">Services</Link> / Restorative Dentistry
          </div>
          <h1 className="text-4xl font-bold">Restorative Dentistry</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Rebuild your smile and restore full function with our comprehensive restorative dental treatments.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield size={32} className="text-[#0D9488]" />
                <h2 className="text-2xl font-bold text-gray-900">Restore Your Smile</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Restorative dentistry focuses on repairing and replacing damaged or missing teeth to restore both
                function and aesthetics. Our comprehensive approach ensures you can eat, speak, and smile with
                confidence again.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From simple fillings to complex full-mouth rehabilitation, Dr. Adibrad and our team use the latest
                materials and techniques to deliver long-lasting, natural-looking results.
              </p>
            </div>
            <div className="bg-[#F0F0FF] rounded-2xl p-8">
              <h3 className="font-bold text-gray-900 mb-4">Key Benefits of Restorative Care</h3>
              <ul className="space-y-3">
                {[
                  "Restore ability to chew and speak normally",
                  "Prevent remaining teeth from shifting",
                  "Maintain facial structure and bone health",
                  "Improve overall oral health",
                  "Boost confidence and quality of life",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-[#0D9488]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Dental Implants",
                desc: "The gold standard for replacing missing teeth. Titanium posts are surgically placed in the jawbone to support natural-looking crowns.",
              },
              {
                title: "Dental Crowns",
                desc: "Custom-fabricated caps that cover damaged, weakened, or discolored teeth to restore strength and appearance.",
              },
              {
                title: "Dental Bridges",
                desc: "Fixed prosthetics that span the gap created by one or more missing teeth, supported by adjacent teeth or implants.",
              },
              {
                title: "Root Canal Therapy",
                desc: "A procedure to remove infected pulp tissue from inside the tooth, relieving pain and saving the natural tooth.",
              },
              {
                title: "Dentures",
                desc: "Removable full or partial dentures custom-fitted to replace multiple missing teeth comfortably and effectively.",
              },
              {
                title: "Inlays & Onlays",
                desc: "Precision-crafted porcelain or composite restorations for moderate tooth decay that's too large for a filling but doesn't require a full crown.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/appointment"
              className="bg-[#0D9488] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#09625C] transition-colors inline-block"
            >
              Book a Restorative Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
