import Link from "next/link";
import { Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Book an Appointment | Dentin Family Dentistry Vaughan",
  description:
    "Schedule your dental appointment at Dentin Family Dentistry in Vaughan. Call (437) 900-2200 or fill out our online booking form.",
};

export default function AppointmentPage() {
  return (
    <>
      <section className="bg-[#002C29] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-gray-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link> / Book Appointment
          </div>
          <h1 className="text-4xl font-bold">Book an Appointment</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Ready for a healthier smile? Schedule your visit with Dr. Adibrad and our team today.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Form — 3 cols */}
          <div className="md:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request an Appointment</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                  placeholder="(000) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]">
                  <option value="">Select a Service</option>
                  <option>General Dentistry / Cleaning</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Dental Implants</option>
                  <option>Restorative Dentistry</option>
                  <option>Emergency Dental Care</option>
                  <option>Porcelain Veneers</option>
                  <option>Teeth Whitening</option>
                  <option>Root Canal</option>
                  <option>Oral Surgery</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]">
                    <option>Morning (9am–12pm)</option>
                    <option>Afternoon (12pm–5pm)</option>
                    <option>Evening (5pm–9pm)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Are You a New Patient?</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input type="radio" name="new_patient" value="yes" className="accent-[#0D9488]" /> Yes, new patient
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input type="radio" name="new_patient" value="no" className="accent-[#0D9488]" /> Returning patient
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                <textarea
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] resize-none"
                  placeholder="Tell us anything we should know..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0D9488] text-white font-bold py-3 rounded-full hover:bg-[#09625C] transition-colors text-base"
              >
                Request Appointment
              </button>
              <p className="text-xs text-gray-400 text-center">
                We will call you within 24 hours to confirm your appointment.
              </p>
            </form>
          </div>

          {/* Side info — 2 cols */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-[#F0F0FF] rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Prefer to Call?</h3>
              <a
                href="tel:4379002200"
                className="flex items-center gap-3 text-[#0D9488] font-bold text-lg hover:underline"
              >
                <Phone size={20} /> (437) 900-2200
              </a>
              <p className="text-gray-500 text-sm mt-2">
                Our team is available during office hours to assist you.
              </p>
            </div>

            <div className="bg-[#F0F0FF] rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Clock size={18} className="text-[#0D9488]" /> Office Hours
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Mon – Sat</span>
                  <span>9:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h3 className="font-bold text-red-700 mb-2">Dental Emergency?</h3>
              <p className="text-red-600 text-sm mb-3">
                Don&apos;t wait — call us immediately for same-day emergency care.
              </p>
              <a
                href="tel:4379002200"
                className="block text-center bg-red-500 text-white font-bold py-2 rounded-full text-sm hover:bg-red-600 transition-colors"
              >
                Emergency Line: (437) 900-2200
              </a>
            </div>

            <div className="bg-[#F0F0FF] rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Mail size={18} className="text-[#0D9488]" /> Email Us
              </h3>
              <a
                href="mailto:dfdentistry3300@gmail.com"
                className="text-[#0D9488] text-sm hover:underline"
              >
                dfdentistry3300@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
