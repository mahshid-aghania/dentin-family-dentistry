import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth={0} />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer>
      {/* Pre-footer CTA strip */}
      <div className="bg-[#0D9488] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-1">Serving Vaughan & Surrounding Areas</p>
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">
              Ready to Transform Your Smile?
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/appointment"
              className="bg-white text-[#0D9488] font-bold text-sm hover:bg-[#002C29] hover:text-white transition-colors"
              style={{ borderRadius: "100px", padding: "13px 28px" }}
            >
              Book Appointment
            </Link>
            <a
              href="tel:4379002200"
              className="flex items-center gap-2 border-2 border-white text-white font-bold text-sm hover:bg-white hover:text-[#0D9488] transition-colors"
              style={{ borderRadius: "100px", padding: "11px 24px" }}
            >
              <Phone size={15} /> (437) 900-2200
            </a>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="bg-[#002C29] text-gray-400">
        <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/logo2_cropped.png"
                alt="Dentin Family Dentistry — Vaughan"
                width={160}
                height={50}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Dentin Family Dentistry provides compassionate, high-quality dental care in Vaughan — from routine cleanings to dental implants and full smile makeovers.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mb-5">
              <a
                href="https://www.instagram.com/dentin_family_dentistry/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0D9488] transition-colors"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/DentinFamilyDentistry/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0D9488] transition-colors"
                aria-label="Follow us on Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <a href="mailto:dfdentistry3300@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={13} className="text-[#0D9488] shrink-0" />
                dfdentistry3300@gmail.com
              </a>
              <a href="tel:4379002200" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={13} className="text-[#0D9488] shrink-0" />
                (437) 900-2200
              </a>
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/",            label: "Home" },
                { href: "/about",       label: "About Us" },
                { href: "/services",    label: "Our Services" },
                { href: "/gallery",     label: "Gallery" },
                { href: "/blog",        label: "Patient Education" },
                { href: "/contact",     label: "Contact Us" },
                { href: "/appointment", label: "Book Appointment" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#0D9488] transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#0D9488] shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Our Services</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/services/general-dentistry",     label: "General Dentistry" },
                { href: "/services/cosmetic-dentistry",    label: "Cosmetic Dentistry" },
                { href: "/services/dental-implants",       label: "Dental Implants" },
                { href: "/services/restorative-dentistry", label: "Restorative Dentistry" },
                { href: "/services/oral-surgery",          label: "Oral Surgery" },
                { href: "/services/endodontics",           label: "Endodontics" },
                { href: "/services/pediatric-dentistry",   label: "Pediatric Dentistry" },
                { href: "/services/emergency-dental-care", label: "Emergency Dental Care" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#0D9488] transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#0D9488] shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Practice Info */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Practice Info</h3>
            <div className="space-y-4 text-sm">

              {/* Address */}
              <div className="flex gap-2.5">
                <MapPin size={14} className="text-[#0D9488] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  3300 Steeles Ave W, Unit #6<br />
                  Vaughan, ON L4K 2Y4
                </address>
              </div>

              {/* Hours */}
              <div className="flex gap-2.5">
                <Clock size={14} className="text-[#0D9488] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <p className="text-white text-xs font-semibold mb-1">Office Hours</p>
                  <p>Mon – Saturday: 9:00 AM – 9:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Emergency */}
              <div className="flex gap-2.5 bg-red-900/30 border border-red-800/40 rounded-xl p-3">
                <AlertCircle size={14} className="text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-300 text-xs font-bold mb-0.5">Dental Emergency?</p>
                  <p className="text-xs mb-1.5 text-gray-400">We offer 24 / 7 emergency care.</p>
                  <a href="tel:4379002200" className="text-red-300 font-bold text-sm hover:text-white transition-colors">
                    Call (437) 900-2200
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-5 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Dentin Family Dentistry. All Rights Reserved. Vaughan, ON.</p>
            <div className="flex items-center gap-4">
              <Link href="/contact" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <span className="text-white/20">|</span>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
              <span className="text-white/20">|</span>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
