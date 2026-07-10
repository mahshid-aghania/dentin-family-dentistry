"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, AlertCircle, ArrowRight } from "lucide-react";
import { useAuth } from "../components/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw]     = useState(false);
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!email || !password) { setError("Please fill in all fields."); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 400)); // brief UX delay
    const result = login(email, password);
    setLoading(false);
    if (!result.success) { setError(result.error || "Login failed."); return; }
    router.push("/account");
  }

  return (
    <div className="min-h-screen flex">

      {/* Left — brand panel */}
      <div className="hidden lg:flex lg:w-[46%] bg-[#002C29] flex-col items-center justify-center px-14 relative overflow-hidden">
        {/* Background blobs */}
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
            Your smile is in good hands.
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-10">
            Sign in to manage your appointments, access care notes, and stay connected with Dr. Adibrad&apos;s team.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Book & manage appointments",
              "View your treatment history",
              "24 / 7 access to your account",
              "CDCP & insurance tracking",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-white/70">
                <div className="w-5 h-5 bg-[#0D9488]/20 border border-[#0D9488]/40 rounded-full flex items-center justify-center shrink-0">
                  <div className="w-1.5 h-1.5 bg-[#0D9488] rounded-full" />
                </div>
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
                src="/images/logo2_cropped.png"
                alt="Dentin Family Dentistry"
                width={150}
                height={48}
                className="h-11 w-auto object-contain mx-auto"
              />
            </Link>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10">
            <div className="mb-8">
              <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-2">Patient Portal</div>
              <h1 className="text-2xl font-bold text-[#002C29]">Welcome back</h1>
              <p className="text-[#555574] text-sm mt-1">Sign in to your Dentin account</p>
            </div>

            {error && (
              <div className="flex items-center gap-2.5 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-5">
                <AlertCircle size={15} className="shrink-0" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#002C29] mb-1.5 uppercase tracking-wide">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#002C29] placeholder-gray-400 bg-white"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-[#002C29] uppercase tracking-wide">Password</label>
                  <Link href="/forgot-password" className="text-xs text-[#0D9488] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <input
                    type={showPw ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-11 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#002C29] placeholder-gray-400 bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((v) => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#002C29] transition-colors"
                  >
                    {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0D9488] hover:bg-[#09625C] disabled:bg-[#0D9488]/60 text-white font-bold py-3.5 rounded-full transition-colors text-sm flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Sign In <ArrowRight size={15} /></>
                )}
              </button>
            </form>

            <p className="text-center text-sm text-[#555574] mt-6">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-[#0D9488] font-semibold hover:underline">
                Create one free
              </Link>
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
