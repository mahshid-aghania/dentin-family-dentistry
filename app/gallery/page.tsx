import Link from "next/link";
import GalleryTabs from "../components/GalleryTabs";

export const metadata = {
  title: "Gallery | Dentin Family Dentistry Vaughan",
  description:
    "Explore our Dental Gallery featuring captivating before-and-after images highlighting the artistry and precision of our cosmetic dentistry.",
};

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

      {/* Gallery with tabs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <GalleryTabs />
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
