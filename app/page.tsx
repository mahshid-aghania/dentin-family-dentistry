import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, Star, Clock, Shield, AlertCircle, Sparkles, Layers, ArrowRight } from "lucide-react";
import FAQAccordion from "./components/FAQAccordion";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-[#F8F8FF] overflow-hidden py-16 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-[#0D9488]/10 text-[#0D9488] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Shield size={12} /> Vaughan&rsquo;s Trusted Dental Practice
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#002C29] leading-tight mb-5">
              Expert Dentist &amp; Implant Surgeon in Vaughan
            </h1>
            <p className="text-[#555574] text-lg mb-8 leading-relaxed">
              From routine checkups to advanced dental implants and full smile makeovers — Dentin Family Dentistry delivers compassionate, high-quality care for every patient.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/appointment"
                className="bg-[#0D9488] text-white font-semibold hover:bg-[#09625C] transition-colors"
                style={{ borderRadius: "100px", padding: "16px 28px" }}
              >
                Book Appointment
              </Link>
              <a
                href="tel:4379002200"
                className="flex items-center gap-2 border-2 border-[#002C29] text-[#002C29] font-semibold hover:bg-[#002C29] hover:text-white transition-colors"
                style={{ borderRadius: "100px", padding: "14px 28px" }}
              >
                <Phone size={15} /> (437) 900-2200
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-100">
                <AlertCircle size={20} className="text-[#0D9488] shrink-0" />
                <div>
                  <div className="font-bold text-[#002C29] text-sm">24 / 7 Emergency Care</div>
                  <div className="text-[#555574] text-xs">Same-day urgent appointments</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-100">
                <div className="flex gap-0.5 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#0D9488" className="text-[#0D9488]" />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-[#002C29] text-sm">5-Star Google Reviews</div>
                  <div className="text-[#555574] text-xs">500+ happy patients</div>
                </div>
              </div>
            </div>

            {/* Hours strip */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 text-sm text-[#555574]">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#0D9488] shrink-0" />
                <span>Mon – Sat: 9:00 AM – 9:00 PM &nbsp;·&nbsp; Sunday: Closed</span>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5]">
              <Image
                src="/images/Screenshot-2025-01-27-at-7.00-Photoroom-1.png"
                alt="Dental smile transformation at Dentin Family Dentistry Vaughan"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT / DOCTOR ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* Doctor image */}
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src="/images/drMehdiRad-e1773681597167.jpg"
                alt="Dr Mehdi Adibrad — Head and Implant Surgeon at Dentin Family Dentistry Vaughan"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/55 text-white text-xs py-3 text-center font-medium tracking-wide">
                Dr. Mehdi Adibrad — Head &amp; Implant Surgeon
              </div>
            </div>
            <div className="absolute top-6 right-[-12px] bg-[#0D9488] text-white rounded-2xl px-5 py-3 shadow-lg text-center">
              <div className="text-2xl font-bold">12+</div>
              <div className="text-xs font-medium">Years Exp.</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">About Dr. Adibrad</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002C29] mb-5 leading-tight">
              Vaughan&rsquo;s Expert Dentist &amp; Implant Surgeon
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              Dr. Mehdi Adibrad is a highly skilled and compassionate dentist with over 12 years of experience. Before establishing himself in Canada, he built a respected reputation as a periodontist and oral surgeon, successfully completing the NDEB Equivalency Process on his first attempt.
            </p>
            <p className="text-[#555574] leading-relaxed mb-8">
              As a member of the Ontario Dental Association and the International Team for Implantology (ITI), Dr. Adibrad specializes in One-Day Dental Implants using the latest surgical technology and a patient-first approach.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "Active RCDSO General Dentistry Licence",
                "Ontario Dental Association Member",
                "ITI (Implantology) Member",
                "NDEB Equivalency — First Attempt Pass",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-[#555574]">
                  <CheckCircle size={15} className="text-[#0D9488] shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>

            {/* Progress bars */}
            <div className="space-y-4 mb-8">
              {[
                { label: "Patient Satisfaction Rate", value: 98 },
                { label: "Successful Implant Procedures", value: 95 },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="flex justify-between mb-1.5 text-sm font-semibold text-[#002C29]">
                    <span>{label}</span><span>{value}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0D9488] rounded-full" style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#0D9488] text-white font-semibold hover:bg-[#09625C] transition-colors"
              style={{ borderRadius: "100px", padding: "16px 28px" }}
            >
              About Dr. Adibrad <ArrowRight size={16} />
            </Link>
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
