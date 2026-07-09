"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/general-dentistry", label: "General Dentistry" },
      { href: "/services/cosmetic-dentistry", label: "Cosmetic Dentistry" },
      { href: "/services/restorative-dentistry", label: "Restorative Dentistry" },
      { href: "/services/dental-implants", label: "Dental Implants" },
      { href: "/services/oral-surgery", label: "Oral Surgery" },
      { href: "/services/endodontics", label: "Endodontics" },
      { href: "/services/pediatric-dentistry", label: "Pediatric Dentistry" },
      { href: "/services/emergency-dental-care", label: "Emergency Dental Care" },
    ],
  },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-[#1a6fb5] text-white text-sm py-2 px-4 flex justify-between items-center">
        <span className="hidden sm:block">We Accept the Canadian Dental Care Plan (CDCP)</span>
        <a href="tel:4379002200" className="flex items-center gap-1 font-semibold ml-auto">
          <Phone size={14} /> (437) 900-2200
        </a>
      </div>
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1a6fb5] rounded-full flex items-center justify-center text-white font-bold text-lg">
            D
          </div>
          <div className="leading-tight">
            <div className="font-bold text-[#1a6fb5] text-lg">Dentin</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">Family Dentistry</div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.href} className="relative group">
                <button
                  className="flex items-center gap-1 hover:text-[#1a6fb5] transition-colors py-2"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  {link.label}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-52 hidden group-hover:block">
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block px-4 py-2 text-sm hover:bg-[#e8f2fc] hover:text-[#1a6fb5] transition-colors"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#1a6fb5] transition-colors">
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <Link
          href="/appointment"
          className="hidden lg:block bg-[#1a6fb5] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#145a95] transition-colors"
        >
          Book Now
        </Link>

        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t px-4 pb-4">
          <ul className="flex flex-col gap-2 text-sm font-medium text-gray-700 mt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 hover:text-[#1a6fb5] border-b border-gray-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <ul className="pl-4">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-1 text-gray-500 hover:text-[#1a6fb5]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/appointment"
                className="block text-center bg-[#1a6fb5] text-white px-5 py-2 rounded-full mt-2 font-semibold"
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
