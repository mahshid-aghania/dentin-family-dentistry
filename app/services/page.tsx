import Link from "next/link";
import { Stethoscope, Sparkles, Shield, AlertCircle, Smile, Users, Scissors, HeartPulse } from "lucide-react";

export const metadata = {
  title: "Services | Dentin Family Dentistry Vaughan",
  description:
    "Explore our full range of dental services at Dentin Family Dentistry in Vaughan: general, cosmetic, restorative, emergency, implants, and more.",
};

const services = [
  {
    icon: <Stethoscope size={36} className="text-[#1a6fb5]" />,
    title: "General Dentistry",
    description:
      "Routine cleanings, comprehensive exams, fluoride treatments, and preventive care for patients of all ages.",
    href: "/services/general-dentistry",
    items: ["Dental Cleanings", "Comprehensive Exams", "Fluoride Treatments", "Fillings", "X-Rays"],
  },
  {
    icon: <Sparkles size={36} className="text-[#1a6fb5]" />,
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with porcelain veneers, teeth whitening, bonding, and complete smile makeovers.",
    href: "/services/cosmetic-dentistry",
    items: ["Porcelain Veneers", "Teeth Whitening", "Dental Bonding", "Smile Makeovers", "Gum Contouring"],
  },
  {
    icon: <Shield size={36} className="text-[#1a6fb5]" />,
    title: "Restorative Dentistry",
    description:
      "Restore function and aesthetics with crowns, bridges, dentures, implants, and full-mouth rehabilitation.",
    href: "/services/restorative-dentistry",
    items: ["Dental Implants", "Crowns & Bridges", "Dentures", "Root Canals", "Inlays & Onlays"],
  },
  {
    icon: <AlertCircle size={36} className="text-[#1a6fb5]" />,
    title: "Emergency Dental Care",
    description:
      "Urgent dental care available 24/7. We treat toothaches, broken teeth, lost fillings, and dental trauma.",
    href: "/services/emergency-dental-care",
    items: ["Toothache Relief", "Broken Teeth", "Lost Fillings", "Dental Trauma", "Abscess Treatment"],
  },
  {
    icon: <Smile size={36} className="text-[#1a6fb5]" />,
    title: "Dental Implants",
    description:
      "Expert One-Day Implant solutions by Dr. Adibrad using the latest technology and surgical techniques.",
    href: "/services",
    items: ["Single Tooth Implants", "Implant-Supported Bridges", "All-on-4 Implants", "Bone Grafting", "Sinus Lifts"],
  },
  {
    icon: <Users size={36} className="text-[#1a6fb5]" />,
    title: "Pediatric Dentistry",
    description:
      "Gentle, age-appropriate care for children to establish healthy oral habits and positive dental experiences.",
    href: "/services",
    items: ["First Dental Visits", "Children's Cleanings", "Sealants", "Fluoride", "Orthodontic Referrals"],
  },
  {
    icon: <Scissors size={36} className="text-[#1a6fb5]" />,
    title: "Oral Surgery",
    description:
      "Expert surgical procedures including wisdom teeth extractions, bone grafting, and complex extractions.",
    href: "/services",
    items: ["Wisdom Teeth", "Tooth Extractions", "Bone Grafting", "Gum Surgery", "Biopsy"],
  },
  {
    icon: <HeartPulse size={36} className="text-[#1a6fb5]" />,
    title: "Endodontics",
    description:
      "Specialized root canal therapy and endodontic treatments to save damaged or infected teeth.",
    href: "/services",
    items: ["Root Canal Therapy", "Retreatment", "Apicoectomy", "Pulp Capping", "Cracked Tooth Treatment"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a6fb5] to-[#0d4a80] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-blue-200 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link> / Services
          </div>
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="text-blue-100 mt-2 max-w-xl">
            A comprehensive range of dental services tailored to your unique needs — from prevention to full restoration.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#e8f2fc] rounded-xl flex items-center justify-center shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
                    <ul className="grid grid-cols-2 gap-1 mb-4">
                      {s.items.map((item) => (
                        <li key={item} className="text-xs text-gray-600 flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-[#1a6fb5] rounded-full shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={s.href}
                      className="text-[#1a6fb5] font-semibold text-sm hover:underline"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#1a6fb5] text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Not Sure Which Service You Need?</h2>
        <p className="text-blue-100 mb-6 max-w-lg mx-auto">
          Book a consultation and Dr. Adibrad will assess your needs and recommend the best treatment plan.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/appointment"
            className="bg-white text-[#1a6fb5] font-bold px-8 py-3 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition-colors"
          >
            Book a Consultation
          </Link>
          <a
            href="tel:4379002200"
            className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-[#1a6fb5] transition-colors"
          >
            Call (437) 900-2200
          </a>
        </div>
      </section>
    </>
  );
}
