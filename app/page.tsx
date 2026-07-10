import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, Star, Clock, Shield, AlertCircle, Sparkles, Layers, ArrowRight, Globe, Award, Users } from "lucide-react";
import FAQAccordion from "./components/FAQAccordion";

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
          className="absolute inset-0 w-full h-full object-cover"
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
                  src="/images/drMehdiRad-e1773681597167.jpg"
                  alt="Dr. Mehdi Adibrad — Implant Surgeon and Head Dentist at Dentin Family Dentistry, Vaughan Ontario"
                  fill
                  className="object-cover object-top"
                />
                {/* Gradient name strip */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#001A18]/90 via-[#001A18]/40 to-transparent pt-12 pb-5 px-5">
                  <p className="text-white font-bold text-sm">Dr. Mehdi Adibrad</p>
                  <p className="text-white/70 text-xs mt-0.5">Head Dentist &amp; Implant Surgeon · Vaughan, ON</p>
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
                  Dr. Mehdi Adibrad brings over 12 years of clinical expertise in implant surgery, periodontics, and cosmetic dentistry to his patients in Vaughan. Before establishing his practice in Canada, he built a respected career as a periodontist and oral surgeon — and completed the rigorous <strong className="text-[#002C29] font-semibold">NDEB Equivalency Process on his very first attempt</strong>, a benchmark achieved by fewer than half of candidates.
                </p>
                <p className="text-[#555574] leading-relaxed text-[15px]">
                  As an active member of both the <strong className="text-[#002C29] font-semibold">International Team for Implantology (ITI)</strong> and the <strong className="text-[#002C29] font-semibold">Ontario Dental Association</strong>, Dr. Adibrad stays at the leading edge of dental innovation — with a particular focus on One-Day Implant solutions that deliver permanent, natural-looking results.
                </p>
              </div>

              {/* Pull quote */}
              <blockquote className="relative border-l-[3px] border-[#0D9488] pl-6 py-1">
                <p className="text-[#002C29] font-semibold italic text-[15px] leading-relaxed">
                  &ldquo;When it comes to dental implants, precision, experience, and advanced technology make all the difference — and so does genuinely listening to each patient.&rdquo;
                </p>
                <cite className="text-[#555574] text-sm mt-2 block not-italic font-medium">— Dr. Mehdi Adibrad, Head &amp; Implant Surgeon</cite>
              </blockquote>

              {/* Credential cards */}
              <div>
                <p className="text-[10px] font-bold text-[#002C29] uppercase tracking-widest mb-3">Credentials &amp; Affiliations</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { Icon: Shield, label: "RCDSO General Dentistry Licence", sub: "Active licence — Province of Ontario" },
                    { Icon: Globe,  label: "ITI — International Implantology", sub: "International Team for Implantology" },
                    { Icon: Users,  label: "Ontario Dental Association", sub: "ODA member in good standing" },
                    { Icon: Award,  label: "NDEB Equivalency — First Attempt", sub: "National Dental Examining Board of Canada" },
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
                  { value: "12+",  label: "Years Experience" },
                  { value: "500+", label: "Happy Patients"   },
                  { value: "ITI",  label: "Intl. Member"     },
                  { value: "24/7", label: "Emergency Care"   },
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
      <section className="py-20 px-4 bg-[#F0F0FF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">Our Services</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002C29] leading-tight max-w-xl">
                Comprehensive Dental Care Under One Roof
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-[#0D9488] text-[#0D9488] font-semibold hover:bg-[#0D9488] hover:text-white transition-colors shrink-0"
              style={{ borderRadius: "100px", padding: "13px 26px" }}
            >
              View All Services <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "General Dentistry",
                desc: "Routine cleanings, exams, X-rays, and preventive treatments to keep your entire family's smile healthy.",
                image: "/images/service-img-1-1.jpg",
                href: "/services/general-dentistry",
                icon: <Shield size={16} />,
              },
              {
                title: "Cosmetic Dentistry",
                desc: "Porcelain veneers, teeth whitening, dental bonding, and smile makeovers tailored to your unique features.",
                image: "/images/Screenshot-2026-03-14-at-4.13.07-PM.png",
                href: "/services/cosmetic-dentistry",
                icon: <Sparkles size={16} />,
              },
              {
                title: "Dental Implants",
                desc: "Same-day implant solutions by Dr. Adibrad — a permanent, natural-looking replacement for missing teeth.",
                image: "/images/restorative-dentistry.png",
                href: "/services/dental-implants",
                icon: <Layers size={16} />,
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} at Dentin Family Dentistry Vaughan`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-400"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#0D9488] mb-2">
                    {service.icon}
                    <h3 className="font-bold text-[#002C29] text-lg group-hover:text-[#0D9488] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-[#555574] text-sm leading-relaxed mb-4">{service.desc}</p>
                  <span className="text-[#0D9488] text-xs font-semibold flex items-center gap-1 group-hover:underline">
                    Learn More <ArrowRight size={12} />
                  </span>
                </div>
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

          <div className="relative rounded-3xl overflow-hidden aspect-square hidden lg:block shadow-xl">
            <Image
              src="/images/Screenshot-2025-02-05-at-3.21.38-PM-1.png"
              alt="Dentin Family Dentistry Vaughan — state-of-the-art dental facility"
              fill
              className="object-cover"
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { src: "/images/transformation-img-1.jpg", label: "Before", alt: "Before dental transformation — case 1" },
              { src: "/images/transformation-img-2.jpg", label: "After",  alt: "After dental transformation — case 1" },
              { src: "/images/transformation-img-3-1.jpg", label: "Before", alt: "Before dental transformation — case 2" },
              { src: "/images/transformation-img-4-1.jpg", label: "After",  alt: "After dental transformation — case 2" },
            ].map((img, i) => (
              <div key={i} className="relative group overflow-hidden rounded-2xl shadow-sm">
                <div className="relative aspect-square">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm ${img.label === "Before" ? "bg-black/60 text-white" : "bg-[#0D9488]/90 text-white"}`}>
                  {img.label}
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

      {/* ── PATIENT EDUCATION ── */}
      <section className="py-20 px-4 bg-[#F0F0FF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">Patient Education</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002C29] leading-tight max-w-xl">
                Dental health tips &amp; oral care advice
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[#0D9488] font-semibold hover:text-[#09625C] transition-colors shrink-0"
            >
              View All Articles <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Essential Tips for a Healthy Smile",
                excerpt: "Maintaining a healthy smile goes beyond brushing twice a day. Learn the top habits that dental professionals recommend for optimal oral health.",
                href: "/essential-tips-for-a-healthy-smile",
                date: "September 10, 2024",
                category: "Oral Health Tips",
                readTime: "4 min read",
              },
              {
                title: "The Benefits of Regular Dental Checkups",
                excerpt: "Regular dental checkups are one of the most effective ways to prevent dental disease, detect problems early, and save money on treatment long-term.",
                href: "/benefit-of-regular-dental-checkup",
                date: "September 10, 2024",
                category: "Preventive Care",
                readTime: "4 min read",
              },
            ].map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src="/images/post-1-1.jpg"
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block bg-[#F0F0FF] text-[#0D9488] text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-[#002C29] text-lg mb-2 group-hover:text-[#0D9488] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[#555574] text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-[#0D9488] text-xs font-semibold flex items-center gap-1 group-hover:underline">
                      Read Article <ArrowRight size={12} />
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
