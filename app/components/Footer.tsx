import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-[#1a6fb5] rounded-full flex items-center justify-center text-white font-bold text-lg">
              D
            </div>
            <div className="leading-tight">
              <div className="font-bold text-white text-lg">Dentin</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Family Dentistry</div>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Providing compassionate, high-quality dental care in Vaughan. Your healthy smile is our mission.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/dentin_family_dentistry/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#1a6fb5] transition-colors"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth={0}/></svg>
            </a>
            <a
              href="https://www.facebook.com/DentinFamilyDentistry/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#1a6fb5] transition-colors"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/gallery", label: "Gallery" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact Us" },
              { href: "/appointment", label: "Book Appointment" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#1a6fb5] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/services/general-dentistry", label: "General Dentistry" },
              { href: "/services/cosmetic-dentistry", label: "Cosmetic Dentistry" },
              { href: "/services/restorative-dentistry", label: "Restorative Dentistry" },
              { href: "/services/emergency-dental-care", label: "Emergency Dental Care" },
              { href: "/porcelain-veneers-vaughan", label: "Porcelain Veneers" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#1a6fb5] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={16} className="text-[#1a6fb5] shrink-0 mt-0.5" />
              <span>3300 Steeles Ave W, Unit #6, Vaughan, ON L4K 2Y4</span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="text-[#1a6fb5] shrink-0" />
              <a href="tel:4379002200" className="hover:text-[#1a6fb5] transition-colors">(437) 900-2200</a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="text-[#1a6fb5] shrink-0" />
              <a href="mailto:dfdentistry3300@gmail.com" className="hover:text-[#1a6fb5] transition-colors">
                dfdentistry3300@gmail.com
              </a>
            </li>
            <li className="flex gap-3">
              <Clock size={16} className="text-[#1a6fb5] shrink-0 mt-0.5" />
              <div>
                <div>Mon–Fri: 8am – 7pm</div>
                <div>Saturday: 9am – 4pm</div>
                <div>Sunday: Closed</div>
                <div className="text-red-400 mt-1">24/7 Emergency Available</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 px-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Dentin Family Dentistry. All rights reserved. | 3300 Steeles Ave W, Vaughan, ON
      </div>
    </footer>
  );
}
