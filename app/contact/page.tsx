import Link from "next/link";
import { MapPin, Phone, Mail, Clock, AlertCircle, ArrowRight, Shield } from "lucide-react";

export const metadata = {
  title: "Contact Us | Dentin Family Dentistry Vaughan",
  description:
    "Contact Dentin Family Dentistry in Vaughan. Call (437) 900-2200, email us, or visit us at 3300 Steeles Ave W, Unit #6. Mon–Sat 9 AM–9 PM. 24/7 emergency care.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#002C29] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#0D9488] text-sm mb-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30 mx-2">/</span>
            Contact Us
          </div>
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            We&apos;d love to hear from you. Reach out to book an appointment, ask a question, or confirm your insurance coverage.
          </p>
        </div>
      </section>

      {/* Quick contact cards */}
      <section className="py-12 px-4 bg-[#F0F0FF]">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: <Phone size={22} className="text-[#0D9488]" />,
              label: "Call Us",
              value: "(437) 900-2200",
              sub: "24 / 7 for emergencies",
              href: "tel:4379002200",
            },
            {
              icon: <Mail size={22} className="text-[#0D9488]" />,
              label: "Email Us",
              value: "dfdentistry3300@gmail.com",
              sub: "We reply within 1 business day",
              href: "mailto:dfdentistry3300@gmail.com",
            },
            {
              icon: <MapPin size={22} className="text-[#0D9488]" />,
              label: "Visit Us",
              value: "3300 Steeles Ave W, Unit #6",
              sub: "Vaughan, ON L4K 2Y4",
              href: "https://maps.google.com/?q=3300+Steeles+Ave+W+Unit+6+Vaughan+ON",
            },
            {
              icon: <Clock size={22} className="text-[#0D9488]" />,
              label: "Office Hours",
              value: "Mon – Sat: 9 AM – 9 PM",
              sub: "Sunday: Closed",
              href: null,
            },
          ].map((card) => (
            <div key={card.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-11 h-11 bg-[#F0F0FF] rounded-xl flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#0D9488] mb-1">{card.label}</p>
              {card.href ? (
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="font-semibold text-[#002C29] hover:text-[#0D9488] transition-colors text-sm block leading-snug"
                >
                  {card.value}
                </a>
              ) : (
                <p className="font-semibold text-[#002C29] text-sm leading-snug">{card.value}</p>
              )}
              <p className="text-[#555574] text-xs mt-1">{card.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">

          {/* Left — info */}
          <div>
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">Get in Touch</div>
            <h2 className="text-3xl font-bold text-[#002C29] mb-5 leading-tight">
              We&apos;re Here to Help
            </h2>
            <p className="text-[#555574] leading-relaxed mb-8">
              Whether you&apos;re a new patient, have a question about treatment, or need to confirm your insurance coverage — our team is ready to assist. Call us, email us, or fill in the form and we&apos;ll get back to you within one business hour.
            </p>

            {/* Hours card */}
            <div className="bg-[#F8F8FF] rounded-2xl p-6 border border-gray-100 mb-5">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-[#0D9488]" />
                <h3 className="font-bold text-[#002C29] text-sm uppercase tracking-widest">Office Hours</h3>
              </div>
              <div className="space-y-2.5 text-sm text-[#555574]">
                <div className="flex justify-between">
                  <span className="font-medium text-[#002C29]">Monday – Saturday</span>
                  <span>9:00 AM – 9:00 PM</span>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex justify-between">
                  <span className="font-medium text-[#002C29]">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Emergency callout */}
            <div className="flex gap-3 bg-red-50 border border-red-200 rounded-2xl p-5 mb-5">
              <AlertCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-red-700 text-sm mb-1">Dental Emergency?</p>
                <p className="text-[#555574] text-sm mb-2">We offer 24 / 7 emergency dental care. Do not wait — call us immediately.</p>
                <a href="tel:4379002200" className="font-bold text-red-600 hover:underline text-sm inline-flex items-center gap-1">
                  <Phone size={13} /> (437) 900-2200
                </a>
              </div>
            </div>

            {/* CDCP badge */}
            <div className="flex gap-3 bg-[#F0F0FF] border border-[#0D9488]/20 rounded-2xl p-5">
              <Shield size={20} className="text-[#0D9488] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#002C29] text-sm mb-1">CDCP Coverage Welcome</p>
                <p className="text-[#555574] text-sm">We accept the Canadian Dental Care Plan. Contact us to verify your eligibility before booking.</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#F8F8FF] rounded-3xl p-8 border border-gray-100">
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-2">Send a Message</div>
            <h2 className="text-2xl font-bold text-[#002C29] mb-6">How Can We Help?</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#002C29] mb-1.5 uppercase tracking-wide">First Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] bg-white text-[#002C29] placeholder-gray-400"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#002C29] mb-1.5 uppercase tracking-wide">Last Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] bg-white text-[#002C29] placeholder-gray-400"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#002C29] mb-1.5 uppercase tracking-wide">Email Address</label>
                <input
                  type="email"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] bg-white text-[#002C29] placeholder-gray-400"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#002C29] mb-1.5 uppercase tracking-wide">Phone Number</label>
                <input
                  type="tel"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] bg-white text-[#002C29] placeholder-gray-400"
                  placeholder="(000) 000-0000"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#002C29] mb-1.5 uppercase tracking-wide">I&apos;m Enquiring About</label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] bg-white text-[#555574]">
                  <option value="">Select a topic</option>
                  <option>Booking an Appointment</option>
                  <option>General Dentistry</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Dental Implants</option>
                  <option>Restorative Dentistry</option>
                  <option>Oral Surgery</option>
                  <option>Pediatric Dentistry</option>
                  <option>Emergency Dental Care</option>
                  <option>Insurance & CDCP</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#002C29] mb-1.5 uppercase tracking-wide">Message</label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] bg-white text-[#002C29] placeholder-gray-400 resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0D9488] text-white font-bold py-3.5 hover:bg-[#09625C] transition-colors text-sm inline-flex items-center justify-center gap-2"
                style={{ borderRadius: "100px" }}
              >
                Send Message <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps embed */}
      <section className="px-4 pb-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-72">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.452!2d-79.5417!3d43.7902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f3bc6a3dc1b%3A0x1!2s3300+Steeles+Ave+W%2C+Vaughan%2C+ON+L4K+2Y4!5e0!3m2!1sen!2sca!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dentin Family Dentistry — 3300 Steeles Ave W, Vaughan, ON"
            />
          </div>
          <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
            <p className="text-sm text-[#555574] flex items-center gap-2">
              <MapPin size={14} className="text-[#0D9488]" />
              3300 Steeles Ave W, Unit #6, Vaughan, ON L4K 2Y4
            </p>
            <a
              href="https://maps.google.com/?q=3300+Steeles+Ave+W+Unit+6+Vaughan+ON+L4K+2Y4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D9488] hover:underline"
            >
              Open in Google Maps <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
