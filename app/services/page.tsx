import Link from "next/link";
import { Stethoscope, Sparkles, Shield, AlertCircle, Smile, Users, Scissors, HeartPulse, ArrowRight, Phone } from "lucide-react";

export const metadata = {
  title: "Dental Services Vaughan | Dentin Family Dentistry",
  description:
    "Explore the full range of dental services at Dentin Family Dentistry in Vaughan — general dentistry, cosmetic, dental implants, oral surgery, and 24/7 emergency care.",
};

const services = [
  {
    icon: <Stethoscope size={28} className="text-[#0D9488]" />,
    title: "General Dentistry",
    description: "Routine cleanings, comprehensive exams, fluoride treatments, and preventive care for patients of all ages — the foundation of a healthy smile.",
    href: "/services/general-dentistry",
    items: ["Dental Cleanings", "Comprehensive Exams", "Fluoride Treatments", "Tooth-Coloured Fillings", "Digital X-Rays"],
  },
  {
    icon: <Sparkles size={28} className="text-[#0D9488]" />,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with porcelain veneers, professional whitening, bonding, and complete smile makeovers tailored to your features.",
    href: "/services/cosmetic-dentistry",
    items: ["Porcelain Veneers", "Teeth Whitening", "Dental Bonding", "Smile Makeovers", "Gum Contouring"],
  },
  {
    icon: <Smile size={28} className="text-[#0D9488]" />,
    title: "Dental Implants",
    description: "Same-day implant solutions by Dr. Adibrad — a permanent, natural-looking replacement for missing teeth using the latest surgical techniques.",
    href: "/services/dental-implants",
    items: ["Single Tooth Implants", "Implant-Supported Bridges", "All-on-4 Implants", "Bone Grafting", "Sinus Lifts"],
  },
  {
    icon: <Shield size={28} className="text-[#0D9488]" />,
    title: "Restorative Dentistry",
    description: "Restore function and aesthetics with crowns, bridges, dentures, and full-mouth rehabilitation — bringing back your confident smile.",
    href: "/services/restorative-dentistry",
    items: ["Dental Crowns", "Bridges", "Dentures & Partials", "Inlays & Onlays", "Full-Mouth Rehab"],
  },
  {
    icon: <HeartPulse size={28} className="text-[#0D9488]" />,
    title: "Endodontics",
    description: "Specialised root canal therapy and endodontic treatments designed to save damaged or infected teeth and relieve pain quickly.",
    href: "/services/endodontics",
    items: ["Root Canal Therapy", "Retreatment", "Apicoectomy", "Pulp Capping", "Cracked Tooth Treatment"],
  },
  {
    icon: <Users size={28} className="text-[#0D9488]" />,
    title: "Pediatric Dentistry",
    description: "Gentle, child-friendly care to establish healthy oral habits and positive dental experiences from the very first visit.",
    href: "/services/pediatric-dentistry",
    items: ["First Dental Visits", "Children's Cleanings", "Dental Sealants", "Fluoride Treatments", "Orthodontic Referrals"],
  },
  {
    icon: <Scissors size={28} className="text-[#0D9488]" />,
    title: "Oral Surgery",
    description: "Expert surgical procedures — from wisdom teeth extractions to complex bone grafting — performed with precision and care.",
    href: "/services/oral-surgery",
    items: ["Wisdom Teeth Removal", "Complex Extractions", "Bone Grafting", "Gum Surgery", "Surgical Biopsy"],
  },
  {
    icon: <AlertCircle size={28} className="text-red-500" />,
    title: "Emergency Dental Care",
    description: "Urgent dental care available 24 / 7. We treat toothaches, broken teeth, lost fillings, dental trauma, and abscesses — call us any time.",
    href: "/services/emergency-dental-care",
    items: ["Toothache Relief", "Broken / Chipped Teeth", "Lost Fillings & Crowns", "Dental Trauma", "Abscess Treatment"],
    urgent: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#002C29] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#0D9488] text-sm mb-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30 mx-2">/</span>
            Our Services
          </div>
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Comprehensive dental care for every stage of life — from routine checkups to advanced implant surgery, all under one roof in Vaughan.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">What We Offer</div>
            <h2 className="text-3xl font-bold text-[#002C29] mb-3">Everything Your Smile Needs</h2>
            <p className="text-[#555574] max-w-xl mx-auto text-sm leading-relaxed">
              Dr. Adibrad and our specialist team provide a complete range of dental services — so you never need to be referred elsewhere for routine or complex care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className={`rounded-2xl p-7 border transition-all duration-200 hover:shadow-md ${
                  s.urgent ? "border-red-100 bg-red-50/40 hover:border-red-200" : "border-gray-100 bg-white hover:border-[#0D9488]/20"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${s.urgent ? "bg-red-100" : "bg-[#F0F0FF]"}`}>
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className={`text-lg font-bold mb-2 ${s.urgent ? "text-red-700" : "text-[#002C29]"}`}>{s.title}</h2>
                    <p className="text-[#555574] text-sm leading-relaxed mb-4">{s.description}</p>
                    <ul className="grid grid-cols-2 gap-1.5 mb-5">
                      {s.items.map((item) => (
                        <li key={item} className="text-xs text-[#555574] flex items-center gap-1.5">
                          <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.urgent ? "bg-red-400" : "bg-[#0D9488]"}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={s.href}
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold hover:underline ${s.urgent ? "text-red-600" : "text-[#0D9488]"}`}
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#002C29] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-1">Free Consultation</p>
            <h2 className="text-2xl md:text-3xl font-bold">Not Sure Which Service You Need?</h2>
            <p className="text-gray-300 mt-2 max-w-lg">
              Book a consultation and Dr. Adibrad will assess your needs and recommend the best treatment plan for your goals and budget.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 bg-[#0D9488] text-white font-bold hover:bg-[#09625C] transition-colors"
              style={{ borderRadius: "100px", padding: "16px 28px" }}
            >
              Book a Consultation <ArrowRight size={15} />
            </Link>
            <a
              href="tel:4379002200"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold hover:border-white transition-colors"
              style={{ borderRadius: "100px", padding: "14px 28px" }}
            >
              <Phone size={15} /> (437) 900-2200
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
