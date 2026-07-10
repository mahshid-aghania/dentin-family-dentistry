"use client";

import { useEffect, useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard, CalendarDays, PlusCircle, UserCircle,
  LogOut, Phone, MapPin, Clock, AlertCircle, CheckCircle,
  XCircle, ArrowRight, ChevronRight, Stethoscope, Sparkles,
  Layers, Shield, Activity, Smile, Scissors, User, Save,
  CalendarCheck, Ban, Mail,
} from "lucide-react";
import { useAuth, Appointment } from "../components/AuthContext";

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────

const SERVICES = [
  { id: "General Dentistry",   desc: "Cleanings & preventive care",    Icon: Stethoscope, urgent: false },
  { id: "Cosmetic Dentistry",  desc: "Veneers, whitening & makeovers", Icon: Sparkles,    urgent: false },
  { id: "Dental Implants",     desc: "Same-day implant solutions",      Icon: Layers,      urgent: false },
  { id: "Restorative Dentistry", desc: "Crowns, bridges & dentures",   Icon: Shield,      urgent: false },
  { id: "Endodontics",         desc: "Root canal therapy",              Icon: Activity,    urgent: false },
  { id: "Pediatric Dentistry", desc: "Gentle care for children",        Icon: Smile,       urgent: false },
  { id: "Oral Surgery",        desc: "Extractions & procedures",        Icon: Scissors,    urgent: false },
  { id: "Emergency Care",      desc: "Urgent dental care — 24/7",      Icon: AlertCircle, urgent: true  },
];

const TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
];

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

function fmtDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-CA", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
}

function fmtDateShort(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-CA", {
    month: "short", day: "numeric", year: "numeric",
  });
}

function isSunday(dateStr: string) {
  return new Date(dateStr + "T00:00:00").getDay() === 0;
}

const todayStr = new Date().toISOString().split("T")[0];

// ─────────────────────────────────────────────
// Status badge
// ─────────────────────────────────────────────

function StatusBadge({ status }: { status: Appointment["status"] }) {
  const cfg = {
    upcoming:  { label: "Upcoming",  cls: "bg-teal-50 text-teal-700 border-teal-200",   Icon: CalendarCheck },
    completed: { label: "Completed", cls: "bg-gray-100 text-gray-500 border-gray-200",  Icon: CheckCircle   },
    cancelled: { label: "Cancelled", cls: "bg-red-50 text-red-500 border-red-200",      Icon: Ban           },
  }[status];
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-semibold border rounded-full px-2.5 py-0.5 ${cfg.cls}`}>
      <cfg.Icon size={11} /> {cfg.label}
    </span>
  );
}

// ─────────────────────────────────────────────
// Tab: Overview
// ─────────────────────────────────────────────

function OverviewTab({
  user, appointments, onBook,
}: {
  user: { firstName: string; lastName: string; email: string; createdAt: string };
  appointments: Appointment[];
  onBook: () => void;
}) {
  const upcoming = appointments.filter((a) => a.status === "upcoming");
  const nextAppt = upcoming.sort((a, b) => a.date.localeCompare(b.date))[0];

  return (
    <div className="space-y-6">
      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { label: "Upcoming", value: upcoming.length, sub: "appointments", color: "text-[#0D9488]" },
          { label: "Total Booked", value: appointments.filter(a => a.status !== "cancelled").length, sub: "all time", color: "text-[#002C29]" },
          { label: "Member Since", value: new Date(user.createdAt).toLocaleDateString("en-CA", { month: "short", year: "numeric" }), sub: "patient portal", color: "text-[#002C29]" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#555574] mb-1">{s.label}</p>
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-[#555574] mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Next appointment */}
      <div>
        <h2 className="text-xs font-bold text-[#002C29] uppercase tracking-widest mb-3">Next Appointment</h2>
        {nextAppt ? (
          <div className="bg-[#002C29] text-white rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-14 h-14 bg-[#0D9488] rounded-xl flex items-center justify-center shrink-0">
              <CalendarDays size={24} />
            </div>
            <div className="flex-1">
              <p className="text-[#4ECDC4] text-xs font-semibold uppercase tracking-widest mb-0.5">{nextAppt.service}</p>
              <p className="font-bold text-lg leading-tight">{fmtDate(nextAppt.date)}</p>
              <p className="text-white/60 text-sm">{nextAppt.time} · Dentin Family Dentistry, Vaughan</p>
            </div>
            <a href="tel:4379002200"
              className="inline-flex items-center gap-2 bg-[#0D9488] hover:bg-[#0BB8A8] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shrink-0">
              <Phone size={14} /> Call to Confirm
            </a>
          </div>
        ) : (
          <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center">
            <div className="w-14 h-14 bg-[#F0F0FF] rounded-full flex items-center justify-center mx-auto mb-4">
              <CalendarDays size={24} className="text-[#0D9488]" />
            </div>
            <p className="font-semibold text-[#002C29] mb-1">No upcoming appointments</p>
            <p className="text-[#555574] text-sm mb-5">Book your next visit with Dr. Adibrad today.</p>
            <button onClick={onBook}
              className="inline-flex items-center gap-2 bg-[#0D9488] text-white text-sm font-semibold hover:bg-[#09625C] transition-colors px-6 py-3 rounded-full">
              Book Now <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>

      {/* Quick actions */}
      <div>
        <h2 className="text-xs font-bold text-[#002C29] uppercase tracking-widest mb-3">Quick Actions</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { Icon: PlusCircle,  title: "Book Appointment",  desc: "Schedule a visit with Dr. Adibrad",     action: onBook,           urgent: false },
            { Icon: AlertCircle, title: "Emergency Care",    desc: "24/7 urgent dental care",               href: "tel:4379002200",   urgent: true  },
            { Icon: Phone,       title: "Call the Clinic",   desc: "(437) 900-2200 · Mon–Sat 9 AM–9 PM",   href: "tel:4379002200",   urgent: false },
            { Icon: MapPin,      title: "Get Directions",    desc: "3300 Steeles Ave W, Unit #6, Vaughan",  href: "/contact",         urgent: false },
          ].map((item) => {
            const inner = (
              <div className={`flex items-start gap-4 bg-white rounded-2xl p-5 border transition-all duration-200 group cursor-pointer
                ${item.urgent ? "border-red-100 hover:border-red-200 hover:shadow-md" : "border-gray-100 hover:border-[#0D9488]/20 hover:shadow-md"}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.urgent ? "bg-red-50" : "bg-[#F0F0FF]"}`}>
                  <item.Icon size={20} className={item.urgent ? "text-red-500" : "text-[#0D9488]"} />
                </div>
                <div className="flex-1">
                  <p className={`font-semibold text-sm group-hover:text-[#0D9488] transition-colors ${item.urgent ? "text-red-700" : "text-[#002C29]"}`}>{item.title}</p>
                  <p className="text-[#555574] text-xs mt-0.5">{item.desc}</p>
                </div>
                <ChevronRight size={14} className="text-gray-300 group-hover:text-[#0D9488] transition-colors mt-0.5 shrink-0" />
              </div>
            );
            return item.action
              ? <button key={item.title} onClick={item.action} className="text-left w-full">{inner}</button>
              : <a key={item.title} href={item.href}>{inner}</a>;
          })}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Tab: My Appointments
// ─────────────────────────────────────────────

function AppointmentsTab({
  appointments, onCancel, onBook,
}: {
  appointments: Appointment[];
  onCancel: (id: string) => void;
  onBook: () => void;
}) {
  const [filter, setFilter] = useState<"all" | "upcoming" | "completed" | "cancelled">("all");
  const [cancellingId, setCancellingId] = useState<string | null>(null);

  const sorted = [...appointments].sort((a, b) => b.date.localeCompare(a.date));
  const visible = filter === "all" ? sorted : sorted.filter((a) => a.status === filter);

  function handleCancel(id: string) {
    setCancellingId(id);
    setTimeout(() => { onCancel(id); setCancellingId(null); }, 400);
  }

  return (
    <div className="space-y-5">
      {/* Filter pills */}
      <div className="flex gap-2 flex-wrap">
        {(["all", "upcoming", "completed", "cancelled"] as const).map((f) => (
          <button key={f} onClick={() => setFilter(f)}
            className={`text-xs font-semibold capitalize px-4 py-1.5 rounded-full border transition-colors ${
              filter === f ? "bg-[#0D9488] text-white border-[#0D9488]" : "border-gray-200 text-[#555574] hover:border-[#0D9488] hover:text-[#0D9488]"
            }`}>
            {f} {f === "all" ? `(${appointments.length})` : `(${appointments.filter(a => a.status === f).length})`}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="bg-white border border-gray-100 rounded-2xl p-10 text-center">
          <CalendarDays size={32} className="text-gray-300 mx-auto mb-3" />
          <p className="font-semibold text-[#002C29] mb-1">No {filter === "all" ? "" : filter} appointments</p>
          <p className="text-[#555574] text-sm mb-5">
            {filter === "all" ? "You haven't booked any appointments yet." : `No ${filter} appointments to show.`}
          </p>
          {filter !== "cancelled" && (
            <button onClick={onBook}
              className="inline-flex items-center gap-2 bg-[#0D9488] text-white text-sm font-semibold hover:bg-[#09625C] transition-colors px-6 py-3 rounded-full">
              Book Appointment <ArrowRight size={14} />
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {visible.map((appt) => {
            const svc = SERVICES.find((s) => s.id === appt.service);
            const Icon = svc?.Icon ?? CalendarDays;
            return (
              <div key={appt.id}
                className={`bg-white border rounded-2xl p-5 transition-opacity duration-300 ${cancellingId === appt.id ? "opacity-40" : "opacity-100"} ${appt.status === "cancelled" ? "border-gray-100" : "border-gray-100"}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${svc?.urgent ? "bg-red-50" : "bg-[#F0F0FF]"}`}>
                    <Icon size={20} className={svc?.urgent ? "text-red-500" : "text-[#0D9488]"} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <div>
                        <p className="font-semibold text-[#002C29] text-sm">{appt.service}</p>
                        <p className="text-[#555574] text-xs mt-0.5">{fmtDate(appt.date)} · {appt.time}</p>
                      </div>
                      <StatusBadge status={appt.status} />
                    </div>
                    {appt.notes && (
                      <p className="text-xs text-[#555574] mt-2 bg-[#F8F8FF] rounded-lg px-3 py-2 border border-gray-100 italic">
                        &ldquo;{appt.notes}&rdquo;
                      </p>
                    )}
                    <p className="text-[10px] text-gray-400 mt-2">
                      Booked {new Date(appt.bookedAt).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" })}
                    </p>
                  </div>
                </div>
                {appt.status === "upcoming" && (
                  <div className="mt-4 pt-4 border-t border-gray-100 flex gap-3">
                    <a href="tel:4379002200"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D9488] hover:underline">
                      <Phone size={12} /> Call to Reschedule
                    </a>
                    <button onClick={() => handleCancel(appt.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-500 hover:underline ml-auto">
                      <XCircle size={12} /> Cancel
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Tab: Book Appointment
// ─────────────────────────────────────────────

function BookTab({ onBooked }: { onBooked: (appt: Appointment) => void }) {
  const { bookAppointment } = useAuth();
  const [step, setStep]               = useState<1 | 2 | 3 | "success">(1);
  const [service, setService]         = useState("");
  const [date, setDate]               = useState("");
  const [time, setTime]               = useState("");
  const [notes, setNotes]             = useState("");
  const [booked, setBooked]           = useState<Appointment | null>(null);
  const [submitting, setSubmitting]   = useState(false);

  function goNext() { setStep((s) => (s === 1 ? 2 : s === 2 ? 3 : s) as 1 | 2 | 3); }
  function goBack() { setStep((s) => (s === 3 ? 2 : s === 2 ? 1 : s) as 1 | 2 | 3); }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    const appt = bookAppointment({ service, date, time, notes });
    setBooked(appt);
    setStep("success");
    setSubmitting(false);
    onBooked(appt);
  }

  function reset() {
    setStep(1); setService(""); setDate(""); setTime(""); setNotes(""); setBooked(null);
  }

  if (step === "success" && booked) {
    return (
      <div className="bg-white border border-gray-100 rounded-2xl p-10 text-center max-w-md mx-auto">
        <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-white" />
        </div>
        <h2 className="text-xl font-bold text-[#002C29] mb-2">Appointment Requested!</h2>
        <p className="text-[#555574] text-sm mb-6 leading-relaxed">
          Our team will confirm your appointment by phone or email within 1 business hour.
        </p>
        <div className="bg-[#F8F8FF] rounded-xl p-5 text-left space-y-2.5 mb-6 border border-gray-100">
          {[
            { label: "Service",  value: booked.service },
            { label: "Date",     value: fmtDateShort(booked.date) },
            { label: "Time",     value: booked.time },
          ].map((row) => (
            <div key={row.label} className="flex justify-between text-sm">
              <span className="text-[#555574]">{row.label}</span>
              <span className="font-semibold text-[#002C29]">{row.value}</span>
            </div>
          ))}
        </div>
        <a href="tel:4379002200"
          className="inline-flex items-center gap-2 bg-[#0D9488] text-white text-sm font-semibold hover:bg-[#09625C] transition-colors px-6 py-3 rounded-full mb-3 w-full justify-center">
          <Phone size={14} /> Call to Confirm · (437) 900-2200
        </a>
        <button onClick={reset}
          className="text-sm text-[#0D9488] hover:underline font-semibold">
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      {/* Step progress */}
      <div className="flex items-center gap-2 mb-7">
        {[
          { n: 1, label: "Service" },
          { n: 2, label: "Date & Time" },
          { n: 3, label: "Confirm" },
        ].map(({ n, label }, i) => (
          <div key={n} className="flex items-center gap-2">
            {i > 0 && <div className={`h-px w-8 ${(step as number) >= n ? "bg-[#0D9488]" : "bg-gray-200"}`} />}
            <div className="flex items-center gap-1.5">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                (step as number) > n ? "bg-[#0D9488] text-white" : step === n ? "bg-[#0D9488] text-white" : "bg-gray-100 text-gray-400"
              }`}>
                {(step as number) > n ? <CheckCircle size={13} /> : n}
              </div>
              <span className={`text-xs font-semibold hidden sm:inline ${(step as number) >= n ? "text-[#002C29]" : "text-gray-400"}`}>{label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Step 1: Service */}
      {step === 1 && (
        <div>
          <h2 className="text-lg font-bold text-[#002C29] mb-1">Choose a Service</h2>
          <p className="text-[#555574] text-sm mb-5">Select the type of appointment you need.</p>
          <div className="grid grid-cols-2 gap-3">
            {SERVICES.map(({ id, desc, Icon, urgent }) => (
              <button key={id} onClick={() => { setService(id); goNext(); }}
                className={`flex items-start gap-3 p-4 border-2 rounded-xl text-left transition-all hover:shadow-sm ${
                  service === id
                    ? urgent ? "border-red-400 bg-red-50" : "border-[#0D9488] bg-[#F0F0FF]"
                    : urgent ? "border-red-100 hover:border-red-300" : "border-gray-100 hover:border-[#0D9488]/40"
                }`}>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${urgent ? "bg-red-100" : "bg-[#F0F0FF]"}`}>
                  <Icon size={18} className={urgent ? "text-red-500" : "text-[#0D9488]"} />
                </div>
                <div>
                  <p className={`text-sm font-semibold leading-tight ${urgent ? "text-red-700" : "text-[#002C29]"}`}>{id}</p>
                  <p className="text-xs text-[#555574] mt-0.5">{desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Date & Time */}
      {step === 2 && (
        <div>
          <h2 className="text-lg font-bold text-[#002C29] mb-1">Choose Date &amp; Time</h2>
          <p className="text-[#555574] text-sm mb-5">
            Clinic hours: Monday – Saturday, 9:00 AM – 9:00 PM.
          </p>

          <div className="mb-5">
            <label className="block text-xs font-bold text-[#002C29] uppercase tracking-widest mb-2">Preferred Date</label>
            <input
              type="date"
              value={date}
              min={todayStr}
              onChange={(e) => { setDate(e.target.value); setTime(""); }}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#002C29] bg-white"
            />
            {date && isSunday(date) && (
              <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                <AlertCircle size={12} /> We&apos;re closed on Sundays. Please choose another day.
              </p>
            )}
          </div>

          {date && !isSunday(date) && (
            <div>
              <label className="block text-xs font-bold text-[#002C29] uppercase tracking-widest mb-2">Preferred Time</label>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {TIME_SLOTS.map((slot) => (
                  <button key={slot} onClick={() => setTime(slot)}
                    className={`py-2.5 text-sm font-semibold rounded-xl border-2 transition-colors ${
                      time === slot
                        ? "border-[#0D9488] bg-[#0D9488] text-white"
                        : "border-gray-200 text-[#555574] hover:border-[#0D9488] hover:text-[#0D9488]"
                    }`}>
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <button onClick={goBack}
              className="border border-gray-200 text-[#555574] text-sm font-semibold px-5 py-2.5 rounded-full hover:border-gray-300 transition-colors">
              Back
            </button>
            <button onClick={goNext} disabled={!date || !time || isSunday(date)}
              className="bg-[#0D9488] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#09625C] disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors">
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Review & confirm */}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h2 className="text-lg font-bold text-[#002C29] mb-1">Review &amp; Confirm</h2>
          <p className="text-[#555574] text-sm mb-5">Check your details, add any notes, then submit.</p>

          {/* Summary card */}
          <div className="bg-[#F8F8FF] border border-gray-100 rounded-xl p-5 mb-5 space-y-2.5">
            {[
              { label: "Service", value: service },
              { label: "Date",    value: fmtDate(date) },
              { label: "Time",    value: time },
            ].map((row) => (
              <div key={row.label} className="flex justify-between text-sm">
                <span className="text-[#555574]">{row.label}</span>
                <span className="font-semibold text-[#002C29]">{row.value}</span>
              </div>
            ))}
          </div>

          <div className="mb-5">
            <label className="block text-xs font-bold text-[#002C29] uppercase tracking-widest mb-2">
              Notes for the Clinic <span className="font-normal text-gray-400 normal-case">(optional)</span>
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. I have sensitivity on my upper left molar…"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#002C29] placeholder-gray-400 bg-white resize-none"
            />
          </div>

          <p className="text-xs text-[#555574] bg-[#F0F0FF] rounded-xl px-4 py-3 mb-5 border border-[#0D9488]/10">
            Our team will call you within 1 business hour to confirm your slot.
            For emergencies, call <a href="tel:4379002200" className="text-[#0D9488] font-semibold">(437) 900-2200</a> directly.
          </p>

          <div className="flex gap-3">
            <button type="button" onClick={goBack}
              className="border border-gray-200 text-[#555574] text-sm font-semibold px-5 py-2.5 rounded-full hover:border-gray-300 transition-colors">
              Back
            </button>
            <button type="submit" disabled={submitting}
              className="flex-1 bg-[#0D9488] text-white text-sm font-bold py-2.5 rounded-full hover:bg-[#09625C] disabled:bg-[#0D9488]/60 transition-colors flex items-center justify-center gap-2">
              {submitting
                ? <><div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Booking…</>
                : <><CalendarCheck size={15} /> Confirm Appointment</>}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Tab: My Profile
// ─────────────────────────────────────────────

function ProfileTab({ user, onUpdate }: {
  user: { firstName: string; lastName: string; email: string; phone: string; createdAt: string };
  onUpdate: (d: { firstName?: string; lastName?: string; phone?: string }) => void;
}) {
  const [form, setForm]     = useState({ firstName: user.firstName, lastName: user.lastName, phone: user.phone });
  const [saved, setSaved]   = useState(false);

  function handleSave(e: FormEvent) {
    e.preventDefault();
    onUpdate(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  const initials = `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();

  return (
    <div className="max-w-lg space-y-6">
      {/* Avatar */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center gap-4">
        <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">
          {initials}
        </div>
        <div>
          <p className="font-bold text-[#002C29]">{user.firstName} {user.lastName}</p>
          <p className="text-[#555574] text-sm">{user.email}</p>
          <p className="text-xs text-gray-400 mt-0.5">
            Member since {new Date(user.createdAt).toLocaleDateString("en-CA", { month: "long", year: "numeric" })}
          </p>
        </div>
      </div>

      {/* Edit form */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6">
        <h2 className="text-sm font-bold text-[#002C29] uppercase tracking-widest mb-5">Personal Information</h2>
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#002C29] mb-1.5 uppercase tracking-wide">First Name</label>
              <div className="relative">
                <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <input type="text" value={form.firstName}
                  onChange={(e) => setForm((p) => ({ ...p, firstName: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl pl-9 pr-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#002C29]" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#002C29] mb-1.5 uppercase tracking-wide">Last Name</label>
              <input type="text" value={form.lastName}
                onChange={(e) => setForm((p) => ({ ...p, lastName: e.target.value }))}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#002C29]" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#002C29] mb-1.5 uppercase tracking-wide">Email Address</label>
            <div className="relative">
              <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input type="email" value={user.email} disabled
                className="w-full border border-gray-100 rounded-xl pl-9 pr-3 py-3 text-sm text-gray-400 bg-gray-50 cursor-not-allowed" />
            </div>
            <p className="text-[10px] text-gray-400 mt-1">Email cannot be changed — it&apos;s your account identifier.</p>
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#002C29] mb-1.5 uppercase tracking-wide">Phone Number</label>
            <div className="relative">
              <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input type="tel" value={form.phone}
                onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                placeholder="(000) 000-0000"
                className="w-full border border-gray-200 rounded-xl pl-9 pr-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#002C29]" />
            </div>
          </div>
          <button type="submit"
            className={`inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-full transition-colors ${
              saved ? "bg-green-500 text-white" : "bg-[#0D9488] hover:bg-[#09625C] text-white"
            }`}>
            {saved ? <><CheckCircle size={15} /> Saved!</> : <><Save size={15} /> Save Changes</>}
          </button>
        </form>
      </div>

      {/* Practice info */}
      <div className="bg-[#002C29] text-white rounded-2xl p-6">
        <p className="text-[#0D9488] text-xs font-bold uppercase tracking-widest mb-4">Practice Info</p>
        <div className="space-y-3 text-sm text-white/70">
          <div className="flex items-start gap-2.5">
            <MapPin size={14} className="text-[#0D9488] shrink-0 mt-0.5" />
            <span>3300 Steeles Ave W, Unit #6, Vaughan, ON L4K 2Y4</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone size={14} className="text-[#0D9488] shrink-0" />
            <a href="tel:4379002200" className="hover:text-white">(437) 900-2200</a>
          </div>
          <div className="flex items-start gap-2.5">
            <Clock size={14} className="text-[#0D9488] shrink-0 mt-0.5" />
            <span>Mon – Sat: 9:00 AM – 9:00 PM<br />Sunday: Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main page
// ─────────────────────────────────────────────

type TabId = "overview" | "appointments" | "book" | "profile";

const TABS: { id: TabId; label: string; Icon: typeof LayoutDashboard }[] = [
  { id: "overview",     label: "Overview",         Icon: LayoutDashboard },
  { id: "appointments", label: "My Appointments",  Icon: CalendarDays    },
  { id: "book",         label: "Book Appointment", Icon: PlusCircle      },
  { id: "profile",      label: "My Profile",       Icon: UserCircle      },
];

export default function AccountPage() {
  const { user, loading, logout, appointments, cancelAppointment, updateProfile } = useAuth();
  const router = useRouter();
  const [tab, setTab] = useState<TabId>("overview");

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

  return (
    <>
      {/* Header */}
      <section className="bg-[#002C29] text-white py-10 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#0D9488] rounded-full flex items-center justify-center text-white text-lg font-bold shrink-0">
              {initials}
            </div>
            <div>
              <p className="text-[#0D9488] text-xs font-semibold uppercase tracking-widest mb-0.5">Patient Portal</p>
              <h1 className="text-xl font-bold">Hi, {user.firstName}! 👋</h1>
            </div>
          </div>
          <button onClick={() => { logout(); router.push("/"); }}
            className="inline-flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/50 text-sm font-medium transition-colors px-4 py-2 rounded-full">
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      </section>

      {/* Tab nav */}
      <div className="bg-white border-b border-gray-100 sticky top-[73px] z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {TABS.map(({ id, label, Icon }) => (
              <button key={id} onClick={() => setTab(id)}
                className={`flex items-center gap-2 px-4 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                  tab === id
                    ? "border-[#0D9488] text-[#0D9488]"
                    : "border-transparent text-[#555574] hover:text-[#002C29]"
                }`}>
                <Icon size={15} /> {label}
                {id === "appointments" && appointments.filter(a => a.status === "upcoming").length > 0 && (
                  <span className="w-4 h-4 bg-[#0D9488] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {appointments.filter(a => a.status === "upcoming").length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-8 px-4 bg-[#F8F8FF] min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          {tab === "overview" && (
            <OverviewTab user={user} appointments={appointments} onBook={() => setTab("book")} />
          )}
          {tab === "appointments" && (
            <AppointmentsTab
              appointments={appointments}
              onCancel={cancelAppointment}
              onBook={() => setTab("book")}
            />
          )}
          {tab === "book" && (
            <BookTab onBooked={() => setTimeout(() => setTab("appointments"), 2500)} />
          )}
          {tab === "profile" && (
            <ProfileTab user={user} onUpdate={updateProfile} />
          )}
        </div>
      </section>
    </>
  );
}
