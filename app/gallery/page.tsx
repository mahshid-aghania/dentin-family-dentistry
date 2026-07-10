import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Gallery | Dentin Family Dentistry Vaughan",
  description:
    "Explore our Dental Gallery featuring captivating before-and-after images highlighting the artistry and precision of our cosmetic dentistry.",
};

const cases = [
  {
    title: "Dental Implant: Implant and Composite Veneers",
    pairs: [
      {
        before: { src: "/images/Implant-and-composite-veneers.jpg", alt: "Implant and Composite Veneers — Before" },
        after:  { src: "/images/Implant-and-composite-veneers-2.jpg", alt: "Implant and Composite Veneers — After" },
      },
    ],
  },
  {
    title: "Implant",
    pairs: [
      {
        before: { src: "/images/Implant-and-Laminate-Veneers.jpg", alt: "Implant — Before" },
        after:  { src: "/images/Implant-and-Laminate-Veneers-2.jpg", alt: "Implant — After" },
      },
      {
        before: { src: "/images/PHOTO-2026-02-20-15-20-10.jpg", alt: "Implant case 2 — Before" },
        after:  { src: "/images/PHOTO-2026-02-20-15-20-10-2.jpg", alt: "Implant case 2 — After" },
      },
    ],
  },
  {
    title: "Implant and Laminate Veneers",
    pairs: [
      {
        before: { src: "/images/Implant-and-Laminate-Veneers-after.jpg", alt: "Implant and Laminate Veneers — Before" },
        after:  { src: "/images/Implant-and-Laminate-Veneers-new.jpg", alt: "Implant and Laminate Veneers — After" },
      },
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#002C29] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#0D9488] text-sm mb-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> / Gallery
          </div>
          <h1 className="text-4xl font-bold">Gallery</h1>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          {cases.map((c) => (
            <div key={c.title}>
              {/* Case title */}
              <h2 className="text-2xl font-bold text-[#002C29] mb-6">{c.title}</h2>

              {/* Before / After column headers */}
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="text-center font-bold text-[#002C29] text-lg">Before</div>
                <div className="text-center font-bold text-[#002C29] text-lg">After</div>
              </div>

              {/* Image pairs */}
              <div className="space-y-4">
                {c.pairs.map((pair, i) => (
                  <div key={i} className="grid grid-cols-2 gap-4">
                    <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg">
                      <Image
                        src={pair.before.src}
                        alt={pair.before.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 600px"
                      />
                    </div>
                    <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg">
                      <Image
                        src={pair.after.src}
                        alt={pair.after.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 600px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
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
