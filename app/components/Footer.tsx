import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#002C29] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div>
          <Link href="/" className="inline-block mb-5">
            <Image
              src="/images/logo2_cropped.png"
              alt="Dentin Family Dentistry Logo"
              width={160}
              height={50}
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-sm text-gray-400 mb-5 leading-relaxed">
            We offer a comprehensive range of dental services, including oral surgeries, dental implants, endodontics, cosmetic dentistry, and restorative dentistry.
          </p>
          <div className="space-y-2 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#0D9488] shrink-0" />
              <a href="mailto:dfdentistry3300@gmail.com" className="hover:text-white transition-colors text-xs">
                dfdentistry3300@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[#0D9488] shrink-0" />
              <a href="tel:4379002200" className="hover:text-white transition-colors">
                (437) 900-2200
              </a>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <a
              href="https://www.instagram.com/dentin_family_dentistry/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0D9488] transition-colors"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth={0} />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/DentinFamilyDentistry/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0D9488] transition-colors"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-base">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {[
              { href: "/about", label: "About us" },
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/appointment", label: "Appointment Request" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-400 hover:text-[#0D9488] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-base">Our Services</h3>
          <ul className="space-y-2.5 text-sm">
            {[
              { href: "/services/general-dentistry", label: "General Dentistry" },
              { href: "/services/cosmetic-dentistry", label: "Cosmetic Dentistry" },
              { href: "/services/restorative-dentistry", label: "Restorative Dentistry" },
              { href: "/services/emergency-dental-care", label: "Emergency Dental Care" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-400 hover:text-[#0D9488] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials / Follow */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-base">Follow Us</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://www.instagram.com/dentin_family_dentistry/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0D9488] transition-colors flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-[#0D9488]">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth={0} />
                </svg>
                @dentin_family_dentistry
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/DentinFamilyDentistry/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0D9488] transition-colors flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#0D9488]">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                DentinFamilyDentistry
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-4 text-center text-xs text-gray-500">
        © 2024 All Rights Reserved.{" "}
        <Link href="/contact" className="hover:text-gray-400 transition-colors">Term &amp; Condition</Link>
        {" | "}
        <Link href="/contact" className="hover:text-gray-400 transition-colors">Support</Link>
        {" | "}
        <Link href="/contact" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
      </div>
    </footer>
  );
}
