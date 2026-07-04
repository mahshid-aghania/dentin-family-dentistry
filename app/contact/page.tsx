import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Dentin Family Dentistry Vaughan",
  description:
    "Contact Dentin Family Dentistry in Vaughan. Call (437) 900-2200, email us, or visit us at 3300 Steeles Ave W, Unit #6.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a6fb5] to-[#0d4a80] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-blue-200 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link> / Contact Us
          </div>
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-blue-100 mt-2 max-w-xl">
            We&apos;d love to hear from you. Reach out to book an appointment, ask a question, or just say hello.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#e8f2fc] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-[#1a6fb5]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Address</div>
                  <div className="text-gray-600 text-sm">
                    3300 Steeles Ave W, Unit #6<br />
                    Vaughan, ON L4K 2Y4
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#e8f2fc] rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-[#1a6fb5]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Phone</div>
                  <a href="tel:4379002200" className="text-[#1a6fb5] hover:underline">(437) 900-2200</a>
                  <div className="text-gray-500 text-xs mt-0.5">24/7 Emergency Line Available</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#e8f2fc] rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-[#1a6fb5]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email</div>
                  <a href="mailto:dfdentistry3300@gmail.com" className="text-[#1a6fb5] hover:underline text-sm">
                    dfdentistry3300@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#e8f2fc] rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-[#1a6fb5]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-2">Hours of Operation</div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between gap-8">
                      <span>Monday – Friday</span>
                      <span>8:00 AM – 7:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Saturday</span>
                      <span>9:00 AM – 4:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-[#e8f2fc] rounded-2xl p-5">
              <div className="font-semibold text-gray-900 mb-2">Canadian Dental Care Plan (CDCP)</div>
              <p className="text-gray-600 text-sm">
                We are proud to accept the Canadian Dental Care Plan. Contact us to verify your coverage.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6fb5] focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6fb5] focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6fb5] focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6fb5] focus:border-transparent"
                  placeholder="(000) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6fb5] focus:border-transparent"
                  placeholder="Appointment Request"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6fb5] focus:border-transparent resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1a6fb5] text-white font-semibold py-3 rounded-full hover:bg-[#145a95] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="px-4 pb-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-100 rounded-2xl overflow-hidden h-64 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <MapPin size={32} className="mx-auto mb-2" />
              <div className="font-medium">3300 Steeles Ave W, Unit #6, Vaughan, ON L4K 2Y4</div>
              <a
                href="https://maps.google.com/?q=3300+Steeles+Ave+W,+Vaughan,+ON+L4K+2Y4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a6fb5] text-sm hover:underline mt-1 block"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
