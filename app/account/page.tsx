"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CalendarDays, Phone, LogOut, User, Shield,
  Clock, MapPin, ArrowRight, AlertCircle, Sparkles,
} from "lucide-react";
import { useAuth } from "../components/AuthContext";

export default function AccountPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.replace("/login");
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F8FF]">
        <div className="w-8 h-8 border-2 border-[#0D9488]/30 border-t-[#0D9488] rounded-full animate-spin" />
      </div>
    );
  }

  const initials = `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
  const memberSince = new Date(user.createdAt).toLocaleDateString("en-CA", {
    year: "numeric", month: "long",
  });

  function handleLogout() {
    logout();
    router.push("/");
  }

  return (
    <>
      {/* Page header */}
      <section className="bg-[#002C29] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#0D9488] rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0">
              {initials}
            </div>
            <div>
              <div className="text-[#0D9488] text-xs font-semibold uppercase tracking-widest mb-0.5">Patient Portal</div>
              <h1 className="text-2xl font-bold">Welcome back, {user.firstName}!</h1>
              <p className="text-white/50 text-xs mt-0.5">Member since {memberSince}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/50 text-sm font-medium transition-colors px-4 py-2 rounded-full"
          >
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#F8F8FF] min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">

            {/* Left — quick actions */}
            <div className="lg:col-span-2 space-y-5">

              {/* Quick actions */}
              <div>
                <h2 className="text-sm font-bold text-[#002C29] uppercase tracking-widest mb-4">Quick Actions</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <CalendarDays size={22} className="text-[#0D9488]" />,
                      title: "Book Appointment",
                      desc: "Schedule your next visit with Dr. Adibrad",
                      href: "/appointment",
                      color: "bg-[#F0F0FF]",
                    },
                    {
                      icon: <AlertCircle size={22} className="text-red-500" />,
                      title: "Emergency Care",
                      desc: "Dental emergency? We're available 24 / 7",
                      href: "/services/emergency-dental-care",
                      color: "bg-red-50",
                    },
                    {
                      icon: <Sparkles size={22} className="text-[#0D9488]" />,
                      title: "Cosmetic Services",
                      desc: "Veneers, whitening & smile makeovers",
                      href: "/services/cosmetic-dentistry",
                      color: "bg-[#F0F0FF]",
                    },
                    {
                      icon: <Phone size={22} className="text-[#0D9488]" />,
                      title: "Call the Office",
                      desc: "(437) 900-2200 — Mon–Sat 9 AM–9 PM",
                      href: "tel:4379002200",
                      color: "bg-[#F0F0FF]",
                    },
                  ].map((action) => (
                    <Link
                      key={action.title}
                      href={action.href}
                      className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md hover:border-[#0D9488]/20 transition-all duration-200 group"
                    >
                      <div className={`w-11 h-11 ${action.color} rounded-xl flex items-center justify-center shrink-0`}>
                        {action.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-[#002C29] text-sm group-hover:text-[#0D9488] transition-colors">{action.title}</p>
                        <p className="text-[#555574] text-xs mt-0.5 leading-snug">{action.desc}</p>
                      </div>
                      <ArrowRight size={14} className="text-gray-300 group-hover:text-[#0D9488] mt-0.5 shrink-0 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Upcoming appointments placeholder */}
              <div>
                <h2 className="text-sm font-bold text-[#002C29] uppercase tracking-widest mb-4">Upcoming Appointments</h2>
                <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
                  <div className="w-14 h-14 bg-[#F0F0FF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CalendarDays size={24} className="text-[#0D9488]" />
                  </div>
                  <p className="font-semibold text-[#002C29] mb-1">No upcoming appointments</p>
                  <p className="text-[#555574] text-sm mb-5">Book your next visit with Dr. Adibrad today.</p>
                  <Link
                    href="/appointment"
                    className="inline-flex items-center gap-2 bg-[#0D9488] text-white text-sm font-semibold hover:bg-[#09625C] transition-colors px-6 py-3 rounded-full"
                  >
                    Book Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right — profile + practice info */}
            <div className="space-y-5">

              {/* Profile card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-sm font-bold text-[#002C29] uppercase tracking-widest">Your Profile</h2>
                  <button className="text-xs text-[#0D9488] hover:underline font-semibold">Edit</button>
                </div>
                <div className="flex items-center gap-3 mb-5 pb-5 border-b border-gray-100">
                  <div className="w-12 h-12 bg-[#0D9488] rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#002C29]">{user.firstName} {user.lastName}</p>
                    <p className="text-[#555574] text-xs">{user.email}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-sm">
                    <User size={14} className="text-[#0D9488] shrink-0" />
                    <span className="text-[#555574]">{user.firstName} {user.lastName}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm">
                    <Phone size={14} className="text-[#0D9488] shrink-0" />
                    <span className="text-[#555574]">{user.phone || "Not provided"}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm">
                    <Shield size={14} className="text-[#0D9488] shrink-0" />
                    <span className="text-[#555574]">CDCP — verify at office</span>
                  </div>
                </div>
              </div>

              {/* Practice info */}
              <div className="bg-[#002C29] text-white rounded-2xl p-6">
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#0D9488] mb-4">Practice Info</h2>
                <div className="space-y-3 text-sm text-white/70">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={14} className="text-[#0D9488] shrink-0 mt-0.5" />
                    <span>3300 Steeles Ave W, Unit #6<br />Vaughan, ON L4K 2Y4</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone size={14} className="text-[#0D9488] shrink-0" />
                    <a href="tel:4379002200" className="hover:text-white transition-colors">(437) 900-2200</a>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock size={14} className="text-[#0D9488] shrink-0 mt-0.5" />
                    <span>Mon – Sat: 9:00 AM – 9:00 PM<br />Sunday: Closed</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 bg-red-900/30 border border-red-500/30 rounded-xl px-3 py-2.5">
                    <AlertCircle size={13} className="text-red-400 shrink-0" />
                    <p className="text-xs text-red-300">Emergency? Call us 24 / 7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
