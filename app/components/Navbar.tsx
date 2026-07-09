"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const serviceLinks = [
  { href: "/services/general-dentistry", label: "General Dentistry" },
  { href: "/services/cosmetic-dentistry", label: "Cosmetic Dentistry" },
  { href: "/services/restorative-dentistry", label: "Restorative Dentistry" },
  { href: "/services/dental-implants", label: "Dental Implants" },
  { href: "/services/oral-surgery", label: "Oral Surgery" },
  { href: "/services/endodontics", label: "Endodontics" },
  { href: "/services/pediatric-dentistry", label: "Pediatric Dentistry" },
  { href: "/services/emergency-dental-care", label: "Emergency Dental Care" },
];

const pagesLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blogs" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#0D9488] text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <span className="text-center sm:text-left text-xs sm:text-sm">
            🦷 We Accept the Canadian Dental Care Plan (CDCP)! Good news! Our dentistry now accepts CDCP coverage. If you&apos;re eligible, book your appointment today.
          </span>
          <a href="tel:4379002200" className="flex items-center gap-1 font-semibold whitespace-nowrap text-xs sm:text-sm">
            <Phone size={13} /> (437) 900-2200
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo2_cropped.png"
            alt="Dentin Family Dentistry Logo"
            width={160}
            height={50}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#002C29]">
          <li>
            <Link href="/" className="hover:text-[#0D9488] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#0D9488] transition-colors">
              About Us
            </Link>
          </li>

          {/* Services dropdown */}
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-[#0D9488] transition-colors py-2">
              Services <ChevronDown size={14} />
            </button>
            <ul className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-56 hidden group-hover:block border border-gray-100">
              {serviceLinks.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="block px-4 py-2 text-sm hover:bg-[#F0F0FF] hover:text-[#0D9488] transition-colors text-[#555574]"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Pages dropdown */}
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-[#0D9488] transition-colors py-2">
              Pages <ChevronDown size={14} />
            </button>
            <ul className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-40 hidden group-hover:block border border-gray-100">
              {pagesLinks.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="block px-4 py-2 text-sm hover:bg-[#F0F0FF] hover:text-[#0D9488] transition-colors text-[#555574]"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link href="/contact" className="hover:text-[#0D9488] transition-colors">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Desktop right side */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:4379002200" className="flex items-center gap-1 text-sm font-semibold text-[#002C29] hover:text-[#0D9488] transition-colors">
            <Phone size={15} /> (437) 900-2200
          </a>
          <Link
            href="/appointment"
            className="bg-[#0D9488] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#09625C] transition-colors"
            style={{ borderRadius: "100px", padding: "12px 24px" }}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-[#002C29]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6">
          <ul className="flex flex-col gap-1 text-sm font-medium text-[#002C29] mt-3">
            <li>
              <Link
                href="/"
                className="block py-2 hover:text-[#0D9488] border-b border-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 hover:text-[#0D9488] border-b border-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <button
                className="w-full text-left py-2 flex items-center justify-between border-b border-gray-100 hover:text-[#0D9488]"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services <ChevronDown size={14} className={mobileServicesOpen ? "rotate-180" : ""} />
              </button>
              {mobileServicesOpen && (
                <ul className="pl-4 py-1">
                  {serviceLinks.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block py-1.5 text-[#555574] hover:text-[#0D9488]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <button
                className="w-full text-left py-2 flex items-center justify-between border-b border-gray-100 hover:text-[#0D9488]"
                onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
              >
                Pages <ChevronDown size={14} className={mobilePagesOpen ? "rotate-180" : ""} />
              </button>
              {mobilePagesOpen && (
                <ul className="pl-4 py-1">
                  {pagesLinks.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block py-1.5 text-[#555574] hover:text-[#0D9488]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 hover:text-[#0D9488] border-b border-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li className="pt-3">
              <Link
                href="/appointment"
                className="block text-center bg-[#0D9488] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#09625C] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
