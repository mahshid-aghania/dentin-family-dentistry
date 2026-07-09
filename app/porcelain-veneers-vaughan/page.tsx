import Link from "next/link";
import { CheckCircle, Star } from "lucide-react";

export const metadata = {
  title: "Porcelain Veneers Vaughan | Dentin Family Dentistry",
  description:
    "Transform your smile with porcelain veneers in Vaughan. Expert cosmetic dentistry by Dr. Mehdi Adibrad at Dentin Family Dentistry.",
};

export default function PorcelainVeneersPage() {
  return (
    <>
      <section className="bg-[#002C29] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-gray-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link> / Porcelain Veneers Vaughan
          </div>
          <h1 className="text-4xl font-bold">Porcelain Veneers in Vaughan</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Achieve a flawless, natural-looking smile with our premium porcelain veneers — crafted with precision by Dr. Adibrad.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#002C29] mb-4">What Are Porcelain Veneers?</h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              Porcelain veneers are ultra-thin, custom-made ceramic shells bonded to the front surface of your
              teeth. They are designed to improve the color, shape, size, and alignment of your teeth — creating
              a stunning, natural-looking smile that lasts for years.
            </p>
            <p className="text-[#555574] leading-relaxed mb-6">
              At Dentin Family Dentistry, Dr. Adibrad takes a meticulous, personalized approach to veneer design,
              ensuring each set is crafted to complement your facial features and skin tone for a truly
              natural result.
            </p>

            <h3 className="text-lg font-bold text-[#002C29] mb-3">Veneers Can Correct:</h3>
            <ul className="space-y-2 mb-8">
              {[
                "Stained or discolored teeth resistant to whitening",
                "Chipped, cracked, or worn enamel",
                "Gaps between teeth",
                "Slightly misaligned or uneven teeth",
                "Teeth that appear too small or short",
                "Irregular or asymmetrical shapes",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#555574]">
                  <CheckCircle size={16} className="text-[#0D9488]" /> {item}
                </li>
              ))}
            </ul>

            <Link
              href="/appointment"
              className="bg-[#0D9488] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#09625C] transition-colors inline-block"
            >
              Book a Veneer Consultation
            </Link>
          </div>

          <div className="space-y-6">
            <div className="bg-[#F0F0FF] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#002C29] mb-4">The Veneer Process</h3>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Consultation", desc: "We assess your smile, discuss your goals, and determine if veneers are right for you." },
                  { step: "02", title: "Preparation", desc: "A small amount of enamel is removed from the tooth surface to make room for the veneer." },
                  { step: "03", title: "Impressions", desc: "Custom impressions are taken and sent to our dental lab to craft your precise veneers." },
                  { step: "04", title: "Bonding", desc: "Your new porcelain veneers are permanently bonded to your teeth for a flawless finish." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#0D9488] text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold text-[#002C29]">{item.title}</div>
                      <div className="text-[#555574] text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#0D9488" className="text-[#0D9488]" />
                ))}
              </div>
              <blockquote className="italic text-[#555574] text-sm mb-3">
                &ldquo;Dentin dentistry is 10/10! The staff and dentists are not only great, but very professional and friendly.&rdquo;
              </blockquote>
              <div className="font-semibold text-[#002C29] text-sm">— Kimia KH</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F8F8FF]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#002C29] mb-6">Porcelain Veneers FAQs</h2>
          <div className="space-y-4">
            {[
              {
                q: "How long do porcelain veneers last?",
                a: "With proper care, porcelain veneers can last 10–15 years or longer. Regular dental check-ups and good oral hygiene are key.",
              },
              {
                q: "Are veneers permanent?",
                a: "Veneers are considered a permanent procedure since a small amount of enamel is removed during preparation. This enamel does not grow back.",
              },
              {
                q: "Do veneers look natural?",
                a: "Yes. Porcelain veneers are designed to mimic the light-reflecting properties of natural teeth and are custom shaded to blend seamlessly.",
              },
              {
                q: "Is the procedure painful?",
                a: "Most patients experience minimal discomfort. Local anesthesia is used during preparation to keep you comfortable throughout.",
              },
              {
                q: "Am I a good candidate for veneers?",
                a: "Good candidates have healthy teeth and gums. Book a consultation with Dr. Adibrad to assess your suitability.",
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

      <section className="py-16 px-4 bg-[#0D9488] text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Ready for Your Dream Smile?</h2>
        <p className="text-gray-300 mb-6 max-w-lg mx-auto">
          Book a porcelain veneer consultation at our Vaughan office today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/appointment"
            className="bg-white text-[#0D9488] font-bold px-8 py-3 rounded-full hover:bg-[#002C29] hover:text-white transition-colors"
          >
            Book Consultation
          </Link>
          <a
            href="tel:4379002200"
            className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-[#0D9488] transition-colors"
          >
            Call (437) 900-2200
          </a>
        </div>
      </section>
    </>
  );
}
