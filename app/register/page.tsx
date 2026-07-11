"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, User, Phone, AlertCircle, ArrowRight, CheckCircle } from "lucide-react";
import { useAuth } from "../components/AuthContext";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", password: "", confirm: "",
  });
  const [showPw, setShowPw]       = useState(false);
  const [showCon, setShowCon]     = useState(false);
  const [agreed, setAgreed]       = useState(false);
  const [error, setError]         = useState("");
  const [loading, setLoading]     = useState(false);

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    const { firstName, lastName, email, phone, password, confirm } = form;
    if (!firstName || !lastName || !email || !password) {
      setError("Please fill in all required fields."); return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters."); return;
    }
    if (password !== confirm) {
      setError("Passwords do not match."); return;
    }
    if (!agreed) {
      setError("Please agree to the terms to continue."); return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    const result = register({ firstName, lastName, email, phone, password });
    setLoading(false);
    if (!result.success) { setError(result.error || "Registration failed."); return; }
    router.push("/account");
  }

  const pwStrength = form.password.length === 0 ? null : form.password.length < 6 ? "weak" : form.password.length < 10 ? "fair" : "strong";

  return (
    <div className="min-h-screen flex">

      {/* Left — brand panel */}
      <div className="hidden lg:flex lg:w-[46%] bg-[#002C29] flex-col items-center justify-center px-14 relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #0D9488 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #0D9488 0%, transparent 70%)" }} />

        <div className="relative z-10 text-center max-w-xs">
          <Link href="/">
            <Image
              src="/images/logo2_cropped.png"
              alt="Dentin Family Dentistry"
              width={180}
              height={56}
              className="h-14 w-auto object-contain mx-auto mb-10 brightness-0 invert"
            />
          </Link>
          <h2 className="text-white text-2xl font-bold leading-snug mb-4">
            Join the Dentin family today.
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-10">
            Create a free patient account in under a minute and take control of your dental health journey.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Book appointments 24 / 7",
              "Receive appointment reminders",
              "Access your care history",
              "CDCP & insurance made easy",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-white/70">
                <CheckCircle size={16} className="text-[#0D9488] shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right — form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 bg-[#F8F8FF]">
        <div className="w-full max-w-md">

          {/* Mobile logo */}
          <div className="lg:hidden mb-8 text-center">
            <Link href="/">
              <Image
                src="/images/logo-on-dark.png"
                alt="Dentin Family Dentistry"
                width={200}
                height={64}
                className="h-14 w-auto object-contain mx-auto rounded-xl"
              />
            </Link>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10">
            <div className="mb-7">
              {/* Desktop logo inside form card */}
              <div className="hidden lg:block mb-6">
                <Link href="/">
                  <Image
                    src="/images/logo-on-dark.png"
                    alt="Dentin Family Dentistry"
                    width={180}
                    height={56}
                    className="h-12 w-auto object-contain rounded-xl"
                  />
                </Link>
              </div>
              <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-2">Patient Portal</div>
              <h1 className="text-2xl font-bold text-[#002C29]">Create your account</h1>
              <p className="text-[#555574] text-sm mt-1">It&apos;s free and takes less than a minute</p>
            </div>

            {error && (
              <div className="flex items-center gap-2.5 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-5">
                <AlertCircle size={15} className="shrink-0" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#002C29] mb-1.5 uppercase tracking-wide">First Name *</label>
                  <div className="relative">
                    <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={update("firstName")}
                      placeholder="Jane"
                      className="w-full border border-gray-200 rounded-xl pl-9 pr-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#002C29] placeholder-gray-400 bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#002C29] mb-1.5 uppercase tracking-wide">Last Name *</label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={update("lastName")}
                    placeholder="Doe"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#002C29] placeholder-gray-400 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#002C29] mb-1.5 uppercase tracking-wide">Email Address *</label>
                <div className="relative">
                  <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#002C29] placeholder-gray-400 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#002C29] mb-1.5 uppercase tracking-wide">Phone Number</label>
                <div className="relative">
                  <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="(000) 000-0000"
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#002C29] placeholder-gray-400 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#002C29] mb-1.5 uppercase tracking-wide">Password *</label>
                <div className="relative">
                  <Lock size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <input
                    type={showPw ? "text" : "password"}
                    value={form.password}
                    onChange={update("password")}
                    placeholder="At least 6 characters"
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-11 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#002C29] placeholder-gray-400 bg-white"
                  />
                  <button type="button" onClick={() => setShowPw((v) => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#002C29] transition-colors">
                    {showPw ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
                {pwStrength && (
                  <div className="mt-1.5 flex items-center gap-2">
                    <div className="flex gap-1 flex-1">
                      {["weak", "fair", "strong"].map((level) => (
                        <div key={level} className={`h-1 flex-1 rounded-full transition-colors ${
                          pwStrength === "weak"   && level === "weak"   ? "bg-red-400" :
                          pwStrength === "fair"   && (level === "weak" || level === "fair") ? "bg-yellow-400" :
                          pwStrength === "strong" ? "bg-[#0D9488]" : "bg-gray-200"
                        }`} />
                      ))}
                    </div>
                    <span className={`text-xs font-medium ${
                      pwStrength === "weak" ? "text-red-500" : pwStrength === "fair" ? "text-yellow-600" : "text-[#0D9488]"
                    }`}>{pwStrength}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#002C29] mb-1.5 uppercase tracking-wide">Confirm Password *</label>
                <div className="relative">
                  <Lock size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <input
                    type={showCon ? "text" : "password"}
                    value={form.confirm}
                    onChange={update("confirm")}
                    placeholder="Repeat your password"
                    className={`w-full border rounded-xl pl-10 pr-11 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#002C29] placeholder-gray-400 bg-white ${
                      form.confirm && form.confirm !== form.password ? "border-red-300" : "border-gray-200"
                    }`}
                  />
                  <button type="button" onClick={() => setShowCon((v) => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#002C29] transition-colors">
                    {showCon ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 accent-[#0D9488] w-4 h-4 shrink-0"
                />
                <span className="text-xs text-[#555574] leading-relaxed">
                  I agree to the{" "}
                  <Link href="/terms" className="text-[#0D9488] hover:underline">Terms of Service</Link>
                  {" "}and{" "}
                  <Link href="/privacy" className="text-[#0D9488] hover:underline">Privacy Policy</Link>
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0D9488] hover:bg-[#09625C] disabled:bg-[#0D9488]/60 text-white font-bold py-3.5 rounded-full transition-colors text-sm flex items-center justify-center gap-2 mt-1"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Create Account <ArrowRight size={15} /></>
                )}
              </button>
            </form>

            <p className="text-center text-sm text-[#555574] mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-[#0D9488] font-semibold hover:underline">Sign in</Link>
            </p>
          </div>

          <p className="text-center text-xs text-[#555574] mt-6">
            Need help?{" "}
            <a href="tel:4379002200" className="text-[#0D9488] hover:underline">(437) 900-2200</a>
          </p>
        </div>
      </div>
    </div>
  );
}
