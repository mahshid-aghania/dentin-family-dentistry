import Link from "next/link";

export const metadata = {
  title: "Gallery | Dentin Family Dentistry Vaughan",
  description:
    "View before and after photos and our dental office gallery at Dentin Family Dentistry in Vaughan.",
};

const categories = ["All", "Dental Implants", "Cosmetic", "Restorative", "Office"];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a6fb5] to-[#0d4a80] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-blue-200 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link> / Gallery
          </div>
          <h1 className="text-4xl font-bold">Our Gallery</h1>
          <p className="text-blue-100 mt-2 max-w-xl">
            Browse before & after transformations and take a look at our modern dental office.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                  cat === "All"
                    ? "bg-[#1a6fb5] text-white border-[#1a6fb5]"
                    : "border-gray-200 text-gray-600 hover:border-[#1a6fb5] hover:text-[#1a6fb5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: "Smile Transformation", category: "Cosmetic", color: "bg-blue-100" },
              { label: "Dental Implant Result", category: "Dental Implants", color: "bg-sky-100" },
              { label: "Veneers Before & After", category: "Cosmetic", color: "bg-indigo-100" },
              { label: "Crown Restoration", category: "Restorative", color: "bg-teal-100" },
              { label: "Full Smile Makeover", category: "Cosmetic", color: "bg-cyan-100" },
              { label: "Implant Surgery", category: "Dental Implants", color: "bg-blue-50" },
              { label: "Whitening Results", category: "Cosmetic", color: "bg-sky-50" },
              { label: "Bridge Placement", category: "Restorative", color: "bg-indigo-50" },
              { label: "Office Reception", category: "Office", color: "bg-gray-100" },
              { label: "Treatment Room", category: "Office", color: "bg-gray-100" },
              { label: "Patient Consultation", category: "Office", color: "bg-slate-100" },
              { label: "Dr. Adibrad at Work", category: "Office", color: "bg-blue-100" },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.color} rounded-2xl aspect-square flex flex-col items-center justify-center text-center p-4 hover:shadow-md transition-shadow cursor-pointer`}
              >
                <div className="text-3xl mb-2">🦷</div>
                <div className="text-xs font-medium text-gray-700">{item.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{item.category}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 text-gray-500 text-sm">
            <p>
              Follow us on{" "}
              <a
                href="https://www.instagram.com/dentin_family_dentistry/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a6fb5] hover:underline"
              >
                Instagram @dentin_family_dentistry
              </a>{" "}
              for more patient transformations and office updates.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#1a6fb5] text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Your Transformation Starts Here</h2>
        <p className="text-blue-100 mb-6 max-w-lg mx-auto">
          Ready to see results like these? Book a consultation today.
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
