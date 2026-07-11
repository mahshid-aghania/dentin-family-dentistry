import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Sparkles } from "lucide-react";

export const metadata = {
  title: "Cosmetic Dentistry | Dentin Family Dentistry Vaughan",
  description:
    "Transform your smile with veneers, whitening, bonding, and smile makeovers at Dentin Family Dentistry in Vaughan.",
};

export default function CosmeticDentistryPage() {
  return (
    <>
      <section className="bg-[#002C29] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-gray-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/services" className="hover:text-white">Services</Link> / Cosmetic Dentistry
          </div>
          <h1 className="text-4xl font-bold">Cosmetic Dentistry</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Beautiful smiles are crafted here. Explore our cosmetic dental treatments designed to transform your smile.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={32} className="text-[#0D9488]" />
              <h2 className="text-2xl font-bold text-[#002C29]">Smile Transformation</h2>
            </div>
            <p className="text-[#555574] leading-relaxed mb-6">
              Cosmetic dentistry combines art and science to enhance the appearance of your teeth, gums, and
              overall smile. Whether you want to brighten discolored teeth, fix chipped enamel, or completely
              redesign your smile, we have solutions tailored to you.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Porcelain Veneers",
                  desc: "Ultra-thin ceramic shells bonded to the front surface of your teeth to correct color, shape, and size. A versatile solution for a complete smile transformation.",
                },
                {
                  title: "Teeth Whitening",
                  desc: "Professional-grade whitening treatments that safely brighten your smile by several shades in a single visit — or with a convenient take-home kit.",
                },
                {
                  title: "Dental Bonding",
                  desc: "Tooth-colored composite resin applied to repair chips, cracks, gaps, and discoloration. A quick and affordable cosmetic solution.",
                },
                {
                  title: "Smile Makeovers",
                  desc: "A personalized combination of cosmetic procedures — veneers, whitening, reshaping, and more — to create the smile of your dreams.",
                },
                {
                  title: "Gum Contouring",
                  desc: "Reshape uneven gumlines to create a more balanced, proportional smile.",
                },
              ].map((item) => (
                <div key={item.title} className="border-l-4 border-[#0D9488] pl-4">
                  <h3 className="font-bold text-[#002C29] mb-1">{item.title}</h3>
                  <p className="text-[#555574] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6 shadow-sm">
              <Image
                src="/images/cosmetic-veneers-result.png"
                alt="Porcelain veneers result — cosmetic dentistry at Dentin Family Dentistry Vaughan"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="bg-[#F0F0FF] rounded-2xl p-8 mb-6">
              <h3 className="text-xl font-bold text-[#002C29] mb-4">Is Cosmetic Dentistry Right for You?</h3>
              <p className="text-[#555574] text-sm mb-4">You may be a great candidate if you want to address:</p>
              <ul className="space-y-2">
                {[
                  "Stained or discolored teeth",
                  "Chipped or cracked enamel",
                  "Gaps between teeth",
                  "Misshapen or uneven teeth",
                  "Worn-down teeth",
                  "A gummy smile",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#555574]">
                    <CheckCircle size={16} className="text-[#0D9488]" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0D9488] text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">Ready to Transform Your Smile?</h3>
              <p className="text-gray-300 text-sm mb-4">
                Book a cosmetic consultation with Dr. Adibrad to discuss your options and create a personalized
                treatment plan.
              </p>
              <Link
                href="/appointment"
                className="block bg-white text-[#0D9488] font-bold py-3 px-6 rounded-full text-center hover:bg-[#002C29] hover:text-white transition-colors"
              >
                Book Cosmetic Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
