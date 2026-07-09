import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Gallery | Dentin Family Dentistry Vaughan",
  description:
    "View before and after smile transformation photos at Dentin Family Dentistry in Vaughan. Dental implants, composite veneers, and laminate veneer cases.",
};

const transformations = [
  {
    label: "Before",
    src: "/images/transformation-img-1.jpg",
    alt: "Before dental transformation case 1",
  },
  {
    label: "After",
    src: "/images/transformation-img-2.jpg",
    alt: "After dental transformation case 1",
  },
  {
    label: "Before",
    src: "/images/transformation-img-3-1.jpg",
    alt: "Before dental transformation case 2",
  },
  {
    label: "After",
    src: "/images/transformation-img-4-1.jpg",
    alt: "After dental transformation case 2",
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-[#002C29] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#0D9488] text-sm mb-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> / Gallery
          </div>
          <h1 className="text-4xl font-bold">Patient Transformations</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Real before &amp; after results from our implant, veneer, and smile makeover patients.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">SEE THE TRANSFORMATION</div>
            <h2 className="text-3xl font-bold text-[#002C29] mb-4 leading-tight">
              Stunning results that showcase the life changing impact
            </h2>
            <p className="text-[#555574] max-w-2xl mx-auto">
              We offer a comprehensive range of dental services including oral surgeries, dental implants,
              endodontics, cosmetic dentistry, and restorative dentistry. The cases below showcase real patient
              outcomes achieved at our Vaughan clinic.
            </p>
          </div>

          {/* 2x2 Grid of transformation images */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {transformations.map((img, i) => (
              <div key={i} className="relative group overflow-hidden rounded-2xl">
                <div className="relative aspect-square">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${img.label === "Before" ? "bg-gray-800/80 text-white" : "bg-[#0D9488] text-white"}`}>
                  {img.label}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-[#555574] text-sm">
            <p>
              Follow us on{" "}
              <a
                href="https://www.instagram.com/dentin_family_dentistry/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0D9488] hover:underline font-medium"
              >
                Instagram @dentin_family_dentistry
              </a>{" "}
              for more patient transformations and clinic updates.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0D9488] text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Your Transformation Starts Here</h2>
        <p className="text-white/80 mb-6 max-w-lg mx-auto">
          Ready to see results like these? Book a consultation with Dr. Adibrad today.
        </p>
        <Link
          href="/appointment"
          className="inline-block bg-white text-[#0D9488] font-bold hover:bg-[#002C29] hover:text-white transition-colors"
          style={{ borderRadius: "100px", padding: "19px 30px" }}
        >
          Book an Appointment
        </Link>
      </section>
    </>
  );
}
