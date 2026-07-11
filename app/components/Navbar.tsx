"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Menu, X, Phone, ChevronDown,
  Shield, Sparkles, Layers, Scissors,
  Stethoscope, Smile, Activity, AlertCircle,
  Clock, MapPin, User, LogOut,
} from "lucide-react";
import { useAuth } from "./AuthContext";

const serviceLinks = [
  {
    category: "Preventive & General",
    items: [
      { href: "/services/general-dentistry",    label: "General Dentistry",    desc: "Cleanings, exams & X-rays",         icon: <Stethoscope size={16} /> },
      { href: "/services/pediatric-dentistry",  label: "Pediatric Dentistry",  desc: "Gentle care for children",           icon: <Smile size={16} /> },
      { href: "/services/endodontics",          label: "Endodontics",          desc: "Root canal therapy",                 icon: <Activity size={16} /> },
    ],
  },
  {
    category: "Cosmetic & Restorative",
    items: [
      { href: "/services/cosmetic-dentistry",   label: "Cosmetic Dentistry",   desc: "Veneers, whitening & bonding",       icon: <Sparkles size={16} /> },
      { href: "/services/restorative-dentistry",label: "Restorative Dentistry",desc: "Crowns, bridges & fillings",         icon: <Shield size={16} /> },
      { href: "/services/dental-implants",      label: "Dental Implants",      desc: "Same-day implant solutions",         icon: <Layers size={16} /> },
    ],
  },
  {
    category: "Surgical & Urgent",
    items: [
      { href: "/services/oral-surgery",         label: "Oral Surgery",         desc: "Extractions & surgical procedures",  icon: <Scissors size={16} /> },
      { href: "/services/emergency-dental-care",label: "Emergency Dental Care",desc: "24 / 7 urgent dental care",          icon: <AlertCircle size={16} />, urgent: true },
    ],
  },
];

const allServiceLinks = serviceLinks.flatMap((g) => g.items);

export default function Navbar() {
  const [mobileOpen, setMobileOpen]                 = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { user, logout }                            = useAuth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">

      {/* Top bar */}
      <div className="bg-[#002C29] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-white/80">
            <span className="flex items-center gap-1.5">
              <Shield size={12} className="text-[#0D9488]" />
              Accepting New Patients
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="flex items-center gap-1.5">
              <Shield size={12} className="text-[#0D9488]" />
              CDCP Coverage Welcome
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-[#0D9488]" />
              Mon – Sat: 9 AM – 9 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white/80">
              <MapPin size={12} className="text-[#0D9488]" />
              Vaughan, ON
            </span>
            <a
              href="tel:4379002200"
              className="flex items-center gap-1.5 font-semibold text-white hover:text-[#0D9488] transition-colors whitespace-nowrap"
            >
              <Phone size={12} />
              (437) 900-2200
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo-color.png"
            alt="Dentin Family Dentistry — Vaughan"
            width={160}
            height={50}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1 text-sm font-medium text-[#002C29]">

          <li>
            <Link href="/" className="px-3 py-2 rounded-lg hover:bg-[#F0F0FF] hover:text-[#0D9488] transition-colors block">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="px-3 py-2 rounded-lg hover:bg-[#F0F0FF] hover:text-[#0D9488] transition-colors block">
              About Us
            </Link>
          </li>

          {/* Services mega-dropdown */}
          <li className="relative group">
            <Link
              href="/services"
              className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-[#F0F0FF] hover:text-[#0D9488] transition-colors"
            >
              Our Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
            </Link>

            {/* Mega menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 hidden group-hover:block w-[680px] bg-white shadow-xl rounded-2xl border border-gray-100 p-6 z-50">
              <div className="grid grid-cols-3 gap-6">
                {serviceLinks.map((group) => (
                  <div key={group.category}>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#0D9488] mb-3 pb-2 border-b border-gray-100">
                      {group.category}
                    </p>
                    <ul className="space-y-1">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`flex items-start gap-2.5 px-2 py-2 rounded-lg transition-colors group/item ${
                              item.urgent
                                ? "hover:bg-red-50"
                                : "hover:bg-[#F0F0FF]"
                            }`}
                          >
                            <span className={`mt-0.5 shrink-0 ${item.urgent ? "text-red-500" : "text-[#0D9488]"}`}>
                              {item.icon}
                            </span>
                            <span>
                              <span className={`block text-sm font-semibold leading-tight ${item.urgent ? "text-red-600 group-hover/item:text-red-700" : "text-[#002C29] group-hover/item:text-[#0D9488]"}`}>
                                {item.label}
                              </span>
                              <span className="block text-xs text-[#555574] mt-0.5">{item.desc}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Footer of mega menu */}
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                <p className="text-xs text-[#555574]">
                  Not sure which service you need?
                </p>
                <Link
                  href="/services"
                  className="text-xs font-semibold text-[#0D9488] hover:underline"
                >
                  View All Services →
                </Link>
              </div>
            </div>
          </li>

          <li>
            <Link href="/gallery" className="px-3 py-2 rounded-lg hover:bg-[#F0F0FF] hover:text-[#0D9488] transition-colors block">
              Gallery
            </Link>
          </li>

          <li>
            <Link href="/blog" className="px-3 py-2 rounded-lg hover:bg-[#F0F0FF] hover:text-[#0D9488] transition-colors block">
              Patient Education
            </Link>
          </li>

          <li>
            <Link href="/contact" className="px-3 py-2 rounded-lg hover:bg-[#F0F0FF] hover:text-[#0D9488] transition-colors block">
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href="tel:4379002200"
            className="flex items-center gap-1.5 text-sm font-semibold text-[#002C29] hover:text-[#0D9488] transition-colors"
          >
            <Phone size={15} />
            <span>(437) 900-2200</span>
          </a>

          {user ? (
            <div className="flex items-center gap-2">
              <Link
                href="/account"
                className="flex items-center gap-2 border border-[#0D9488]/30 text-[#002C29] hover:border-[#0D9488] hover:text-[#0D9488] text-sm font-semibold transition-colors"
                style={{ borderRadius: "100px", padding: "9px 18px" }}
              >
                <div className="w-5 h-5 bg-[#0D9488] rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                  {user.firstName[0]}{user.lastName[0]}
                </div>
                My Account
              </Link>
              <button
                onClick={logout}
                className="text-[#555574] hover:text-red-500 transition-colors p-2"
                title="Sign out"
              >
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-1.5 border border-[#002C29]/20 text-[#002C29] hover:border-[#0D9488] hover:text-[#0D9488] text-sm font-semibold transition-colors"
              style={{ borderRadius: "100px", padding: "9px 18px" }}
            >
              <User size={14} /> Sign In
            </Link>
          )}

          <Link
            href="/appointment"
            className="bg-[#0D9488] text-white text-sm font-semibold hover:bg-[#09625C] transition-colors"
            style={{ borderRadius: "100px", padding: "11px 22px" }}
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[#002C29] p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6 max-h-[80vh] overflow-y-auto">
          <ul className="flex flex-col text-sm font-medium text-[#002C29] mt-3 gap-0.5">

            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center py-3 border-b border-gray-100 hover:text-[#0D9488] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* Mobile services */}
            <li>
              <button
                className="w-full text-left py-3 flex items-center justify-between border-b border-gray-100 hover:text-[#0D9488] transition-colors"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Our Services
                <ChevronDown size={14} className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pb-2 pt-1">
                  {serviceLinks.map((group) => (
                    <div key={group.category} className="mb-3">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#0D9488] px-2 py-1.5">
                        {group.category}
                      </p>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={`flex items-center gap-2 px-2 py-2 rounded-lg text-[#555574] hover:text-[#0D9488] hover:bg-[#F0F0FF] transition-colors ${item.urgent ? "text-red-600" : ""}`}
                              onClick={() => setMobileOpen(false)}
                            >
                              <span className={item.urgent ? "text-red-500" : "text-[#0D9488]"}>{item.icon}</span>
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <Link
                    href="/services"
                    className="block text-center text-xs font-semibold text-[#0D9488] hover:underline py-1 mt-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </li>

            {[
              { href: "/gallery", label: "Gallery" },
              { href: "/blog", label: "Patient Education" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center py-3 border-b border-gray-100 hover:text-[#0D9488] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}

            <li className="pt-4 flex flex-col gap-3">
              <a
                href="tel:4379002200"
                className="flex items-center justify-center gap-2 border border-[#0D9488] text-[#0D9488] font-semibold py-3 rounded-full hover:bg-[#F0F0FF] transition-colors"
              >
                <Phone size={15} /> (437) 900-2200
              </a>
              {user ? (
                <>
                  <Link
                    href="/account"
                    className="flex items-center justify-center gap-2 border border-gray-200 text-[#002C29] font-semibold py-3 rounded-full hover:bg-[#F0F0FF] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <User size={15} /> My Account
                  </Link>
                  <button
                    onClick={() => { logout(); setMobileOpen(false); }}
                    className="flex items-center justify-center gap-2 text-red-500 border border-red-200 font-semibold py-3 rounded-full hover:bg-red-50 transition-colors"
                  >
                    <LogOut size={15} /> Sign Out
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center justify-center gap-2 border border-gray-200 text-[#002C29] font-semibold py-3 rounded-full hover:bg-[#F0F0FF] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <User size={15} /> Sign In / Register
                </Link>
              )}
              <Link
                href="/appointment"
                className="block text-center bg-[#0D9488] text-white font-semibold py-3 rounded-full hover:bg-[#09625C] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
