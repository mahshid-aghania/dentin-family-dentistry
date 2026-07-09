import Link from "next/link";
import {
  Phone,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Users,
  Smile,
  Stethoscope,
  Sparkles,
  AlertCircle,
} from "lucide-react";

const services = [
  {
    icon: <Stethoscope size={32} className="text-[#1a6fb5]" />,
    title: "General Dentistry",
    description: "Routine cleanings, exams, fillings, and preventive care for the whole family.",
    href: "/services/general-dentistry",
  },
  {
    icon: <Sparkles size={32} className="text-[#1a6fb5]" />,
    title: "Cosmetic Dentistry",
    description: "Veneers, teeth whitening, and smile makeovers to boost your confidence.",
    href: "/services/cosmetic-dentistry",
  },
  {
    icon: <Shield size={32} className="text-[#1a6fb5]" />,
    title: "Restorative Dentistry",
    description: "Crowns, bridges, dental implants, and full-mouth restoration solutions.",
    href: "/services/restorative-dentistry",
  },
  {
    icon: <AlertCircle size={32} className="text-[#1a6fb5]" />,
    title: "Emergency Dental Care",
    description: "Same-day emergency appointments available for urgent dental needs.",
    href: "/services/emergency-dental-care",
  },
  {
    icon: <Smile size={32} className="text-[#1a6fb5]" />,
    title: "Dental Implants",
    description: "State-of-the-art one-day implant solutions by our expert implant surgeon.",
    href: "/services",
  },
  {
    icon: <Users size={32} className="text-[#1a6fb5]" />,
    title: "Pediatric Dentistry",
    description: "Gentle, friendly care for children to build healthy smiles from day one.",
    href: "/services",
  },
];

const whyUs = [
  "Accurate diagnosis of dental diseases",
  "24/7 emergency dental services",
  "5-star patient reviews",
  "Experienced & compassionate professionals",
  "Accepts Canadian Dental Care Plan (CDCP)",
  "Advanced diagnostic technology",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a6fb5] to-[#0d4a80] text-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              {"Vaughan's Trusted Dental Practice"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Your Healthy Smile <br />
              <span className="text-yellow-300">Is Our Mission</span>
            </h1>
            <p className="text-blue-100 text-lg mb-6 leading-relaxed">
              Compassionate, high-quality dental care for the whole family. From routine cleanings to advanced
              implant surgery — we&apos;re here for every step of your dental journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/appointment"
                className="bg-white text-[#1a6fb5] font-bold px-7 py-3 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition-colors"
              >
                Book Appointment
              </Link>
              <a
                href="tel:4379002200"
                className="border-2 border-white text-white font-bold px-7 py-3 rounded-full hover:bg-white hover:text-[#1a6fb5] transition-colors flex items-center gap-2"
              >
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "12+", label: "Years Experience" },
              { value: "5★", label: "Patient Rating" },
              { value: "24/7", label: "Emergency Care" },
              { value: "CDCP", label: "Plan Accepted" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300">{stat.value}</div>
                <div className="text-sm text-blue-100 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcement Bar */}
      <div className="bg-yellow-400 text-gray-900 text-center py-3 px-4 text-sm font-semibold">
        🦷 We Now Accept the Canadian Dental Care Plan (CDCP) — Call{" "}
        <a href="tel:4379002200" className="underline">(437) 900-2200</a> to learn more
      </div>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Dental Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We are excited to meet you and provide the best dental care for your family.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-[#1a6fb5] transition-all"
              >
                <div className="mb-4">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#1a6fb5] transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="border-2 border-[#1a6fb5] text-[#1a6fb5] font-semibold px-8 py-3 rounded-full hover:bg-[#1a6fb5] hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Dr. Adibrad */}
      <section className="py-20 px-4 bg-[#e8f2fc]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-[#1a6fb5] rounded-3xl aspect-square flex items-center justify-center">
            <div className="text-center text-white p-8">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-5xl">
                👨‍⚕️
              </div>
              <div className="font-bold text-xl">Dr. Mehdi Adibrad</div>
              <div className="text-blue-200 text-sm mt-1">Head &amp; Implant Surgeon</div>
              <div className="mt-4 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="white" className="text-white" />
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="text-[#1a6fb5] font-semibold uppercase text-sm tracking-wide mb-2">Meet Your Dentist</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Trusted Dentist in Vaughan
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dr. Mehdi Adibrad brings over 12 years of experience as head instructor at the ConfiDentist Group,
              helping internationally trained dentists achieve Canadian licensing. He is a respected periodontist
              and oral surgeon.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Specializing in One-Day Implant solutions, Dr. Adibrad employs a patient-centered approach with
              advanced diagnostic tools and high-quality materials to deliver precision care every time.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Active General Dentistry License (RCDSO)",
                "Ontario Dental Association Member",
                "International Team for Implantology (ITI) Member",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-[#1a6fb5]" /> {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="bg-[#1a6fb5] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#145a95] transition-colors inline-block"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose Dentin Family Dentistry?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We combine experience, technology, and compassion to deliver exceptional dental care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyUs.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-[#e8f2fc] rounded-xl p-4">
                <CheckCircle size={20} className="text-[#1a6fb5] shrink-0" />
                <span className="text-gray-800 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-[#1a6fb5] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill="white" className="text-white" />
            ))}
          </div>
          <blockquote className="text-xl italic text-blue-100 mb-6">
            &ldquo;Dentin dentistry is 10/10! The staff and dentists are not only great, but very professional and
            friendly.&rdquo;
          </blockquote>
          <div className="font-semibold">— Kimia KH</div>
          <div className="text-blue-200 text-sm">Verified Patient</div>
        </div>
      </section>

      {/* Hours & CTA */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Office Hours</h2>
            <div className="space-y-3">
              {[
                { day: "Monday – Saturday", hours: "9:00 AM – 9:00 PM" },
                { day: "Sunday", hours: "Closed" },
              ].map((h) => (
                <div key={h.day} className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="flex items-center gap-2 font-medium text-gray-700">
                    <Clock size={16} className="text-[#1a6fb5]" /> {h.day}
                  </span>
                  <span className="text-gray-600">{h.hours}</span>
                </div>
              ))}
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-4 flex items-start gap-3">
                <AlertCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-red-700">24/7 Emergency Available</div>
                  <div className="text-red-600 text-sm mt-1">Call us anytime for dental emergencies.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1a6fb5] rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Ready for a Healthier Smile?</h3>
            <p className="text-blue-100 mb-6">
              Book your appointment today and experience the Dentin difference.
            </p>
            <Link
              href="/appointment"
              className="block bg-white text-[#1a6fb5] font-bold py-3 px-8 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition-colors mb-4"
            >
              Book an Appointment
            </Link>
            <a href="tel:4379002200" className="text-blue-200 text-sm hover:text-white transition-colors">
              Or call (437) 900-2200
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
