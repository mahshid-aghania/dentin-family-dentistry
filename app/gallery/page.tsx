import Link from "next/link";

export const metadata = {
  title: "Gallery | Dentin Family Dentistry Vaughan",
  description:
    "View before and after smile transformation photos at Dentin Family Dentistry in Vaughan. Dental implants, composite veneers, and laminate veneer cases.",
};

const cases = [
  {
    title: "Dental Implant with Composite Veneers",
    description: "Full smile restoration combining implant placement with composite veneer coverage.",
    beforeAfter: [
      { label: "Before", note: "Missing tooth & uneven smile" },
      { label: "After", note: "Implant + composite veneers" },
    ],
  },
  {
    title: "Implant with Laminate Veneers — Case 1",
    description: "Single implant paired with porcelain laminate veneers for a complete smile makeover.",
    beforeAfter: [
      { label: "Before", note: "Gaps and discolouration" },
      { label: "After", note: "Implant + laminate veneers" },
    ],
  },
  {
    title: "Implant with Laminate Veneers — Case 2",
    description: "Multiple-angle documentation of implant and laminate veneer transformation.",
    beforeAfter: [
      { label: "Before (Front)", note: "Crowding and missing teeth" },
      { label: "After (Front)", note: "Natural-looking result" },
      { label: "Before (Side)", note: "Profile view before" },
      { label: "After (Side)", note: "Profile view after" },
    ],
  },
  {
    title: "Implant with Laminate Veneers — Case 3",
    description: "Advanced implant rehabilitation with full laminate veneer set.",
    beforeAfter: [
      { label: "Before", note: "Worn and damaged teeth" },
      { label: "After", note: "Implant + full veneer set" },
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a6fb5] to-[#0d4a80] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-blue-200 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link> / Gallery
          </div>
          <h1 className="text-4xl font-bold">Patient Transformations</h1>
          <p className="text-blue-100 mt-2 max-w-xl">
            Real before & after results from our implant, veneer, and smile makeover patients.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-14">
            We offer a comprehensive range of dental services including oral surgeries, dental implants,
            endodontics, cosmetic dentistry, and restorative dentistry. The cases below showcase real patient
            outcomes achieved at our Vaughan clinic.
          </p>

          <div className="space-y-16">
            {cases.map((c) => (
              <div key={c.title} className="border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
                <h2 className="text-xl font-bold text-gray-900 mb-1">{c.title}</h2>
                <p className="text-gray-500 text-sm mb-6">{c.description}</p>
                <div className={`grid gap-4 ${c.beforeAfter.length === 4 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2"}`}>
                  {c.beforeAfter.map((img) => (
                    <div key={img.label} className="space-y-2">
                      <div
                        className={`aspect-square rounded-2xl flex flex-col items-center justify-center text-center p-4 ${
                          img.label.startsWith("Before") ? "bg-gray-100" : "bg-[#e8f2fc]"
                        }`}
                      >
                        <div className="text-3xl mb-2">🦷</div>
                        <div className={`text-xs font-bold uppercase tracking-wide ${img.label.startsWith("Before") ? "text-gray-500" : "text-[#1a6fb5]"}`}>
                          {img.label}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">{img.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14 text-gray-500 text-sm">
            <p>
              Follow us on{" "}
              <a
                href="https://www.instagram.com/dentin_family_dentistry/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a6fb5] hover:underline font-medium"
              >
                Instagram @dentin_family_dentistry
              </a>{" "}
              for more patient transformations and clinic updates.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#1a6fb5] text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Your Transformation Starts Here</h2>
        <p className="text-blue-100 mb-6 max-w-lg mx-auto">
          Ready to see results like these? Book a consultation with Dr. Adibrad today.
        </p>
        <Link
          href="/appointment"
          className="bg-white text-[#1a6fb5] font-bold px-8 py-3 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition-colors inline-block"
        >
          Book an Appointment
        </Link>
      </section>
    </>
  );
}
