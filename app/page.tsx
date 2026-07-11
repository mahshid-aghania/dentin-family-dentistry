import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, Star, Clock, Shield, AlertCircle, Sparkles, Layers, ArrowRight, Globe, Award, Users, BookOpen, Calendar } from "lucide-react";
import FAQAccordion from "./components/FAQAccordion";
import InstagramReels from "./components/InstagramReels";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden min-h-[88vh] flex items-center"
        style={{ background: "#001A18" }}>

        {/* Full-bleed video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
          style={{ zIndex: 0 }}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Layered overlay: very dark on left → lighter right so video reads through */}
        <div className="absolute inset-0" style={{
          zIndex: 1,
          background: "linear-gradient(to right, rgba(0,26,24,0.93) 0%, rgba(0,26,24,0.82) 38%, rgba(0,26,24,0.45) 62%, rgba(0,26,24,0.10) 100%)"
        }} />

        {/* Bottom vignette for polish */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{
          zIndex: 1,
          background: "linear-gradient(to top, rgba(0,26,24,0.7) 0%, transparent 100%)"
        }} />

        {/* Subtle dot grid — texture on dark left side */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
          zIndex: 1,
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24" style={{ zIndex: 2 }}>
          <div className="max-w-xl xl:max-w-2xl">

            {/* Trust pill */}
            <div className="inline-flex items-center gap-2 bg-[#0D9488]/20 border border-[#0D9488]/40 text-[#4ECDC4] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-7">
              <Shield size={11} /> Vaughan&rsquo;s Trusted Dental Practice
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[3.8rem] font-bold text-white leading-[1.08] mb-6">
              Trusted Dentist &amp;<br />Implant Surgeon<br />
              <span className="text-[#4ECDC4]">in Vaughan</span>
            </h1>

            <p className="text-white/72 text-lg mb-10 leading-relaxed max-w-lg">
              From routine checkups to advanced dental implants and full smile makeovers — compassionate, high-quality care for every patient.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 bg-[#0D9488] text-white font-bold hover:bg-[#0BB8A8] transition-colors shadow-lg shadow-[#0D9488]/30"
                style={{ borderRadius: "100px", padding: "17px 32px" }}
              >
                <Phone size={16} /> Book Appointment
              </Link>
              <a
                href="tel:4379002200"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold hover:border-white hover:bg-white/10 transition-colors backdrop-blur-sm"
                style={{ borderRadius: "100px", padding: "15px 28px" }}
              >
                (437) 900-2200
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mb-8 pt-5 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white">24 / 7</div>
                <div className="text-white/50 text-sm mt-0.5">Emergency Service</div>
              </div>
              <div className="w-px bg-white/10 hidden sm:block" />
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-white/50 text-sm mt-0.5">Happy Patients</div>
              </div>
              <div className="w-px bg-white/10 hidden sm:block" />
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#0D9488" className="text-[#0D9488]" />
                  ))}
                </div>
                <div className="text-white/50 text-sm">Google Rating</div>
              </div>
            </div>

            {/* Hours + CDCP */}
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Clock size={13} className="text-[#0D9488] shrink-0" />
                Mon – Sat: 9:00 AM – 9:00 PM &nbsp;·&nbsp; Sunday: Closed
              </div>
              <div className="flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield size={12} className="text-[#4ECDC4]" />
                <span className="text-white/80 text-xs font-semibold">CDCP Accepted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT / DOCTOR ── */}
      <section className="py-24 px-4 bg-white overflow-hidden" aria-label="About Dr. Mehdi Adibrad">
        <div className="max-w-7xl mx-auto">

          {/* Section label */}
          <div className="text-center mb-14">
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">Meet Your Doctor</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002C29] leading-tight">
              Dr. Mehdi Adibrad —<br className="hidden sm:block" />
              <span className="text-[#0D9488]"> Implant Surgeon &amp; Head Dentist in Vaughan, ON</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-start">

            {/* ── Left: photo column ── */}
            <div className="relative max-w-sm mx-auto lg:mx-0 lg:sticky lg:top-28">
              {/* Teal accent block behind photo */}
              <div className="absolute -top-5 -left-5 w-full h-full bg-[#F0F0FF] rounded-3xl" />

              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-xl">
                <Image
                  src="/images/dr-adibrad.jpg"
                  alt="Dr. Mehdi Adibrad — Implant Surgeon and Head Dentist at Dentin Family Dentistry, Vaughan Ontario"
                  fill
                  className="object-cover object-top"
                />
                {/* Gradient name strip */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#001A18]/90 via-[#001A18]/40 to-transparent pt-12 pb-5 px-5">
                  <p className="text-white font-bold text-sm">Dr. Mehdi Adibrad</p>
                  <p className="text-white/70 text-xs mt-0.5">Periodontist &amp; Implant Surgeon · Vaughan, ON</p>
                </div>
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -top-3 -right-3 bg-[#0D9488] text-white rounded-2xl px-4 py-3 shadow-xl text-center z-10">
                <div className="text-2xl font-extrabold leading-none">12+</div>
                <div className="text-[10px] font-semibold mt-0.5 uppercase tracking-wide">Years Exp.</div>
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-gray-100 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 z-10">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#0D9488" className="text-[#0D9488]" />
                  ))}
                </div>
                <div>
                  <p className="text-[#002C29] text-xs font-bold leading-none">5-Star Rated</p>
                  <p className="text-[#555574] text-[10px] mt-0.5">Google Reviews</p>
                </div>
              </div>
            </div>

            {/* ── Right: content column ── */}
            <div className="flex flex-col gap-7">

              {/* Bio */}
              <div>
                <p className="text-[#555574] leading-relaxed text-[15px] mb-4">
                  With a track record of over <strong className="text-[#002C29] font-semibold">10 published articles in renowned peer-reviewed journals</strong>, Dr. Adibrad excelled as a periodontist, implantologist, and surgeon before establishing himself in the Canadian dental landscape.
                </p>
                <p className="text-[#555574] leading-relaxed text-[15px] mb-4">
                  His achievements include <strong className="text-[#002C29] font-semibold">topping the Canadian Assessment of Fundamental Knowledge (AFK) examination</strong> and securing his general dentistry licence through the <strong className="text-[#002C29] font-semibold">NDEB Equivalency Process on his very first attempt</strong> — a benchmark achieved by fewer than half of candidates.
                </p>
                <p className="text-[#555574] leading-relaxed text-[15px]">
                  He specialises in periodontics, dental implants, and oral surgery — from treating gum disease to placing implants and performing bone grafting — applying meticulous, evidence-based techniques to achieve lasting, natural-looking results.
                </p>
              </div>

              {/* Pull quote */}
              <blockquote className="relative border-l-[3px] border-[#0D9488] pl-6 py-1">
                <p className="text-[#002C29] font-semibold italic text-[15px] leading-relaxed">
                  &ldquo;Precision, expertise, and compassion — where your smile is the masterpiece in the making.&rdquo;
                </p>
                <cite className="text-[#555574] text-sm mt-2 block not-italic font-medium">— Dr. Mehdi Adibrad, Periodontist &amp; Implant Surgeon</cite>
              </blockquote>

              {/* Credential cards */}
              <div>
                <p className="text-[10px] font-bold text-[#002C29] uppercase tracking-widest mb-3">Credentials &amp; Affiliations</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { Icon: Shield, label: "RCDSO — Active Licence",           sub: "Royal College of Dental Surgeons of Ontario" },
                    { Icon: Award,  label: "Canadian AFK — Top Score",          sub: "Assessment of Fundamental Knowledge exam"    },
                    { Icon: Users,  label: "ODA · CDA Member",                  sub: "Ontario & Canadian Dental Association"       },
                    { Icon: Globe,  label: "NDEB Equivalency — First Attempt",  sub: "National Dental Examining Board of Canada"   },
                  ].map(({ Icon, label, sub }) => (
                    <div key={label} className="flex items-start gap-3 bg-[#F8F8FF] border border-gray-100 rounded-xl px-4 py-3.5">
                      <div className="w-8 h-8 bg-[#0D9488]/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={15} className="text-[#0D9488]" />
                      </div>
                      <div>
                        <p className="text-[#002C29] text-xs font-semibold leading-tight">{label}</p>
                        <p className="text-[#555574] text-[10px] mt-0.5">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats strip */}
              <div className="grid grid-cols-4 gap-4 border-t border-b border-gray-100 py-5">
                {[
                  { value: "10+",     label: "Published Articles" },
                  { value: "500+",    label: "Happy Patients"     },
                  { value: "#1",      label: "AFK Score"          },
                  { value: "24/7",    label: "Emergency Care"     },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <p className="text-xl font-extrabold text-[#0D9488] leading-none">{value}</p>
                    <p className="text-[#555574] text-[10px] font-medium mt-1.5 leading-tight">{label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-2 bg-[#0D9488] text-white font-bold hover:bg-[#09625C] transition-colors shadow-sm shadow-[#0D9488]/20"
                  style={{ borderRadius: "100px", padding: "16px 30px" }}
                >
                  Book a Consultation <ArrowRight size={16} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border-2 border-[#002C29]/15 text-[#002C29] font-semibold hover:border-[#0D9488] hover:text-[#0D9488] transition-colors"
                  style={{ borderRadius: "100px", padding: "14px 26px" }}
                >
                  Full Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[#0D9488] font-bold uppercase text-xs tracking-widest mb-3">
                <Sparkles size={11} /> Our Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002C29] leading-tight max-w-xl">
                Comprehensive Dental Care<br className="hidden md:block" /> Under One Roof
              </h2>
            </div>
            <Link href="/services"
              className="inline-flex items-center gap-2 bg-[#002C29] hover:bg-[#0D9488] text-white text-sm font-semibold transition-colors shrink-0 px-6 py-3 rounded-full">
              View All Services <ArrowRight size={14} />
            </Link>
          </div>

          {/* Cards — full-bleed portrait with overlay */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                title: "General Dentistry",
                category: "Family Care",
                desc: "Routine cleanings, exams, X-rays, and preventive treatments to keep your entire family's smile healthy.",
                image: "/images/service-img-1-1.jpg",
                href: "/services/general-dentistry",
                Icon: Shield,
                accent: "#0D9488",
              },
              {
                title: "Cosmetic Dentistry",
                category: "Smile Design",
                desc: "Porcelain veneers, teeth whitening, and smile makeovers tailored to your unique features.",
                image: "/images/Implant-and-composite-veneers-2.jpg",
                href: "/services/cosmetic-dentistry",
                Icon: Sparkles,
                accent: "#7C3AED",
              },
              {
                title: "Dental Implants",
                category: "Implant Surgery",
                desc: "Same-day implant solutions by Dr. Adibrad — a permanent, natural-looking replacement for missing teeth.",
                image: "/images/PHOTO-2026-02-20-15-20-10-2.jpg",
                href: "/services/dental-implants",
                Icon: Layers,
                accent: "#2563EB",
              },
            ].map((s) => (
              <Link key={s.title} href={s.href}
                className="group relative rounded-3xl overflow-hidden block"
                style={{ aspectRatio: "3/4" }}>

                {/* Photo */}
                <Image
                  src={s.image}
                  alt={`${s.title} at Dentin Family Dentistry Vaughan`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                {/* Top: category pill */}
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur-md text-white px-3 py-1.5 rounded-full border border-white/20"
                    style={{ background: s.accent + "cc" }}>
                    <s.Icon size={11} /> {s.category}
                  </span>
                </div>

                {/* Bottom: text content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold leading-tight mb-2 group-hover:text-[#4ECDC4] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all duration-300"
                    style={{ color: "#4ECDC4" }}>
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom service tags row */}
          <div className="flex flex-wrap gap-2 mt-8 justify-center">
            {["Emergency Care","Endodontics","Oral Surgery","Pediatric Dentistry","Restorative Dentistry","Periodontics"].map((tag) => (
              <Link key={tag} href="/services"
                className="text-xs font-semibold text-[#555574] hover:text-[#0D9488] bg-[#F8F8FF] hover:bg-[#F0F0FF] border border-gray-100 hover:border-[#0D9488]/30 px-4 py-2 rounded-full transition-all duration-200">
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full shadow-md">
            <Image
              src="/images/4d8ccd35-434e-49fd-8ed0-c6bd7b132369-768x625-1.jpg"
              alt="Dentin Family Dentistry clinic — modern dental facility in Vaughan"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">Our Expertise</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002C29] mb-5 leading-tight">
              Committed to Your Oral Health &amp; Smile Aesthetics
            </h2>
            <p className="text-[#555574] leading-relaxed mb-6">
              At Dentin Family Dentistry in Vaughan, our specialist team combines clinical precision with genuine compassion. Every treatment plan is personalised to your goals — whether that&rsquo;s a routine clean or a full-arch implant restoration.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Advanced digital imaging and diagnostic technology",
                "Patient-centred, anxiety-free care environment",
                "Specialist implant surgeon on-site — Dr. Adibrad",
                "All major services available under one roof in Vaughan",
                "Accepting CDCP, most insurance plans, and new patients",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={17} className="text-[#0D9488] shrink-0 mt-0.5" />
                  <span className="text-[#555574] text-sm">{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#0D9488] text-white font-semibold hover:bg-[#09625C] transition-colors"
              style={{ borderRadius: "100px", padding: "16px 28px" }}
            >
              Explore Our Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 px-4 bg-[#002C29] text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">Why Choose Us</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
              Excellence &amp; Trust — Every Appointment
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              From your very first visit, you&rsquo;ll notice the difference. We combine state-of-the-art technology with warm, personalised care so every patient leaves feeling confident in their smile.
            </p>
            <div className="space-y-6 mb-8">
              {[
                {
                  icon: <AlertCircle size={22} className="text-[#0D9488]" />,
                  title: "24 / 7 Emergency Dental Care",
                  desc: "Dental pain doesn't keep office hours. Call (437) 900-2200 any time and we'll prioritise your appointment.",
                },
                {
                  icon: <Star size={22} className="text-[#0D9488]" fill="#0D9488" />,
                  title: "5-Star Patient Reviews",
                  desc: "Consistently rated 5 stars on Google by hundreds of Vaughan patients for care, comfort, and results.",
                },
                {
                  icon: <Shield size={22} className="text-[#0D9488]" />,
                  title: "CDCP & Major Insurance Accepted",
                  desc: "We welcome Canadian Dental Care Plan patients and work with all major dental insurance providers.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-11 h-11 bg-[#0D9488]/20 rounded-full flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 bg-[#0D9488] text-white font-semibold hover:bg-[#09625C] transition-colors"
                style={{ borderRadius: "100px", padding: "16px 28px" }}
              >
                Book Appointment <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold hover:border-white transition-colors"
                style={{ borderRadius: "100px", padding: "14px 28px" }}
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-[9/16] hidden lg:block shadow-xl max-h-[640px]">
            <video
              src="/videos/excellence-reel.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-4 bg-[#F8F8FF]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002C29] leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[#555574] mt-4 max-w-xl mx-auto leading-relaxed">
              Have questions about our services, insurance, or what to expect? We&rsquo;ve answered the most common ones below.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-20 px-4 bg-[#0D9488] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/70">Patient Testimonial</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">
            Real stories of exceptional care &amp; transformative smiles
          </h2>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} fill="white" className="text-white" />
            ))}
          </div>
          <blockquote className="text-lg text-white/90 leading-relaxed mb-6 italic max-w-2xl mx-auto">
            &ldquo;I recently had implants done and I am very satisfied with the very professional staff of this centre. The procedure was excellent and I had no pain at all. The follow-ups were excellent — the team was patient, precise, and responsible. I would like to thank Dr. Adibrad and Dr. Meschi and their incredibly excellent staff.&rdquo;
          </blockquote>
          <div className="font-bold text-white text-lg">Nastaran Shamsi</div>
          <div className="text-white/60 text-sm mt-1">Verified Patient · Google Review</div>
        </div>
      </section>

      {/* ── TRANSFORMATION GALLERY ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">Before &amp; After</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002C29] leading-tight">
              Real Patient Transformations
            </h2>
            <p className="text-[#555574] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              See the life-changing results our Vaughan patients have experienced — from dental implants to cosmetic veneers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                case: "Case 1",
                label: "Implant + Composite Veneers",
                before: { src: "/images/Implant-and-composite-veneers.jpg",   alt: "Before — Implant and composite veneers" },
                after:  { src: "/images/Implant-and-composite-veneers-2.jpg", alt: "After — Implant and composite veneers"  },
              },
              {
                case: "Case 2",
                label: "Single Tooth Implant",
                before: { src: "/images/PHOTO-2026-02-20-15-20-10.jpg",   alt: "Before — missing tooth, implant abutment visible" },
                after:  { src: "/images/PHOTO-2026-02-20-15-20-10-2.jpg", alt: "After — single tooth implant crown restored"       },
              },
            ].map((c) => (
              <div key={c.case} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="px-5 pt-5 pb-3 flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-[#F0F0FF] text-[#0D9488] px-2.5 py-1 rounded-full">{c.case}</span>
                  <span className="text-sm font-semibold text-[#002C29]">{c.label}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 px-4 pb-4">
                  {[c.before, c.after].map((img, j) => (
                    <div key={j} className="relative aspect-[3/4] overflow-hidden rounded-2xl group">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 300px"
                      />
                      <div className={`absolute top-2 left-2 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm ${j === 0 ? "bg-black/60 text-white" : "bg-[#0D9488]/90 text-white"}`}>
                        {j === 0 ? "Before" : "After"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border-2 border-[#0D9488] text-[#0D9488] font-semibold hover:bg-[#0D9488] hover:text-white transition-colors"
              style={{ borderRadius: "100px", padding: "13px 28px" }}
            >
              View Full Gallery <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── APPOINTMENT CTA ── */}
      <section className="py-20 px-4 bg-[#F8F8FF]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">Book Your Visit</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002C29] mb-4 leading-tight">
              Schedule Your Appointment Online
            </h2>
            <p className="text-[#555574] leading-relaxed mb-8">
              Ready to take the next step towards a healthier smile? Book online or call us directly — we&rsquo;ll find a time that works for you.
            </p>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-6">
              <h3 className="text-sm font-bold text-[#002C29] uppercase tracking-widest mb-4">Office Hours</h3>
              <div className="space-y-2.5 text-sm text-[#555574]">
                <div className="flex justify-between">
                  <span className="font-medium text-[#002C29]">Monday – Saturday</span>
                  <span>9:00 AM – 9:00 PM</span>
                </div>
                <div className="h-px bg-gray-100" />
                <div className="flex justify-between">
                  <span className="font-medium text-[#002C29]">Sunday</span>
                  <span>Closed</span>
                </div>
                <div className="h-px bg-gray-100" />
                <div className="flex items-center justify-between text-[#0D9488] font-semibold">
                  <span className="flex items-center gap-1.5"><AlertCircle size={13} /> 24 / 7 Dental Emergency</span>
                  <a href="tel:4379002200" className="hover:underline">(437) 900-2200</a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 bg-[#0D9488] text-white font-semibold hover:bg-[#09625C] transition-colors"
                style={{ borderRadius: "100px", padding: "16px 28px" }}
              >
                Book Appointment <ArrowRight size={15} />
              </Link>
              <a
                href="tel:4379002200"
                className="inline-flex items-center gap-2 border-2 border-[#0D9488] text-[#0D9488] font-semibold hover:bg-[#0D9488] hover:text-white transition-colors"
                style={{ borderRadius: "100px", padding: "14px 28px" }}
              >
                <Phone size={15} /> Call Us
              </a>
            </div>
          </div>

          {/* Mini booking form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#002C29] mb-1">Request an Appointment</h3>
            <p className="text-[#555574] text-sm mb-6">We&rsquo;ll confirm your time by phone within 1 business hour.</p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="First Name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#002C29] placeholder-gray-400" />
                <input type="text" placeholder="Last Name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#002C29] placeholder-gray-400" />
              </div>
              <input type="tel" placeholder="Phone Number" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#002C29] placeholder-gray-400" />
              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#555574]">
                <option value="">Select a Service</option>
                <option>General Dentistry</option>
                <option>Cosmetic Dentistry</option>
                <option>Dental Implants</option>
                <option>Restorative Dentistry</option>
                <option>Oral Surgery</option>
                <option>Endodontics</option>
                <option>Pediatric Dentistry</option>
                <option>Emergency Dental Care</option>
                <option>New Patient Visit</option>
              </select>
              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#555574]">
                <option value="">Preferred Time</option>
                <option>Morning — 9:00 AM to 12:00 PM</option>
                <option>Afternoon — 12:00 PM to 5:00 PM</option>
                <option>Evening — 5:00 PM to 9:00 PM</option>
              </select>
              <button
                type="button"
                className="w-full bg-[#0D9488] text-white font-bold py-3.5 hover:bg-[#09625C] transition-colors text-sm"
                style={{ borderRadius: "100px" }}
              >
                Request Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM REELS ── */}
      <InstagramReels />

      {/* ── PATIENT EDUCATION ── */}
      <section className="py-24 px-4" style={{ background: "linear-gradient(180deg,#ffffff 0%,#F0F0FF 100%)" }}>
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F0F0FF] text-[#0D9488] font-bold uppercase text-xs tracking-widest px-3 py-1.5 rounded-full mb-4">
                <BookOpen size={11} />
                Patient Education
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002C29] leading-tight max-w-xl">
                Dental health tips &amp;<br className="hidden md:block" /> oral care advice
              </h2>
              <p className="text-[#555574] mt-3 text-sm max-w-md leading-relaxed">
                Evidence-based guidance from Dr. Adibrad to help you and your family maintain excellent oral health.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#002C29] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#0D9488] transition-colors shrink-0"
            >
              View All Articles <ArrowRight size={14} />
            </Link>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Essential Tips for a Healthy Smile",
                excerpt: "Maintaining a healthy smile goes beyond brushing twice a day. Learn the top habits that dental professionals recommend for optimal oral health.",
                href: "/essential-tips-for-a-healthy-smile",
                image: "/images/service-img-1-1.jpg",
                date: "September 10, 2024",
                category: "Oral Health Tips",
                readTime: "4 min read",
                accent: "#0D9488",
              },
              {
                title: "The Benefits of Regular Dental Checkups",
                excerpt: "Regular dental checkups are one of the most effective ways to prevent dental disease, detect problems early, and save money on treatment long-term.",
                href: "/benefit-of-regular-dental-checkup",
                image: "/images/PHOTO-2026-02-20-15-20-10.jpg",
                date: "September 10, 2024",
                category: "Preventive Care",
                readTime: "4 min read",
                accent: "#2563EB",
              },
            ].map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: 240 }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  {/* Floating pills on image */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md text-white"
                      style={{ background: `${post.accent}cc` }}>
                      {post.category}
                    </span>
                    <span className="text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-md bg-black/30 text-white/90">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-7">
                  <h3 className="font-bold text-[#002C29] text-xl leading-snug mb-3 group-hover:text-[#0D9488] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#555574] text-sm leading-relaxed flex-1 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                      style={{ color: post.accent }}>
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
