import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, Star, Clock, Shield, AlertCircle } from "lucide-react";
import FAQAccordion from "./components/FAQAccordion";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-[#F8F8FF] overflow-hidden py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-[#002C29] leading-tight mb-5">
              Trusted Dentist &amp; Implant Surgeon in Vaughan
            </h1>
            <p className="text-[#555574] text-lg mb-8 leading-relaxed">
              Expert dental care in Vaughan, from routine checkups to advanced dental implants, designed for a healthier, confident smile.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/appointment"
                className="bg-[#0D9488] text-white font-semibold hover:bg-[#09625C] transition-colors"
                style={{ borderRadius: "100px", padding: "19px 30px" }}
              >
                Book Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#0D9488] text-[#0D9488] font-semibold hover:bg-[#0D9488] hover:text-white transition-colors"
                style={{ borderRadius: "100px", padding: "19px 30px" }}
              >
                Enquires
              </Link>
            </div>

            {/* Stats bar */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-100">
                <AlertCircle size={20} className="text-[#0D9488] shrink-0" />
                <div>
                  <div className="font-bold text-[#002C29] text-sm">Emergency Service</div>
                  <div className="text-[#0D9488] text-xs font-semibold">24/7</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-100">
                <CheckCircle size={20} className="text-[#0D9488] shrink-0" />
                <div>
                  <div className="font-bold text-[#002C29] text-sm">Recover Patients</div>
                  <div className="text-[#0D9488] text-xs font-semibold">5k+</div>
                </div>
              </div>
            </div>

            {/* Contact info under hero */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 text-sm text-[#555574]">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#0D9488]" />
                <span>Need Dental Services? <a href="tel:4379002200" className="font-semibold text-[#002C29] hover:text-[#0D9488]">(437) 900-2200</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#0D9488]" />
                <span>Opening Hours Mon to Sat 9:00AM to 9:00PM</span>
              </div>
            </div>
          </div>

          {/* Right image */}
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

      {/* ── ABOUT SECTION ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* Doctor image */}
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src="/images/drMehdiRad-e1773681597167.jpg"
                alt="Dr Mehdi Adibrad - Head and Implant Surgeon at Dentin Family Dentistry"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-3 text-center font-medium">
                Dr Mehdi Adibrad — Head &amp; Implant Surgeon
              </div>
            </div>
            <div className="absolute top-6 right-[-12px] bg-[#0D9488] text-white rounded-2xl px-5 py-3 shadow-lg text-center">
              <div className="text-2xl font-bold">12+</div>
              <div className="text-xs font-medium">Years Exp.</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">ABOUT US</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002C29] mb-5 leading-tight">
              Expert Dentist &amp; Implant Surgeon in Vaughan
            </h2>
            <p className="text-[#555574] leading-relaxed mb-8">
              Dr. Mehdi Adibrad is a top-rated dentist in Vaughan, specializing in precision dentistry and advanced dental care. A graduate with honors from the National University, he offers expert services in cosmetic, restorative, and implant dentistry. With years of experience and a patient-first approach, Dr. Adibrad uses cutting-edge technology to deliver exceptional results.
            </p>

            {/* Progress bars */}
            <div className="space-y-5 mb-8">
              <div>
                <div className="flex justify-between mb-2 text-sm font-semibold text-[#002C29]">
                  <span>Invisalign Treatment Complete</span>
                  <span>95%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0D9488] rounded-full" style={{ width: "95%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-sm font-semibold text-[#002C29]">
                  <span>Patient Satisfaction Rate</span>
                  <span>98%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0D9488] rounded-full" style={{ width: "98%" }} />
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-block bg-[#0D9488] text-white font-semibold hover:bg-[#09625C] transition-colors"
              style={{ borderRadius: "100px", padding: "19px 30px" }}
            >
              More About
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ── */}
      <section className="py-20 px-4 bg-[#F0F0FF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">OUR SERVICES</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002C29] leading-tight max-w-xl">
                Restoring Smiles: Expert Dental Implants &amp; Comprehensive Care
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-block border-2 border-[#0D9488] text-[#0D9488] font-semibold hover:bg-[#0D9488] hover:text-white transition-colors shrink-0"
              style={{ borderRadius: "100px", padding: "14px 28px" }}
            >
              All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "General Dentistry",
                image: "/images/service-img-1-1.jpg",
                href: "/services/general-dentistry",
              },
              {
                title: "Cosmetic Dentistry",
                image: "/images/Screenshot-2026-03-14-at-4.13.07-PM.png",
                href: "/services/cosmetic-dentistry",
              },
              {
                title: "Restorative Dentistry",
                image: "/images/restorative-dentistry.png",
                href: "/services/restorative-dentistry",
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} at Dentin Family Dentistry Vaughan`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#002C29] text-lg mb-2 group-hover:text-[#0D9488] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#555574] text-sm leading-relaxed">
                    We are excited to meet you and provide the best dental care for your family.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE SECTION ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/4d8ccd35-434e-49fd-8ed0-c6bd7b132369-768x625-1.jpg"
                alt="Dentin Family Dentistry clinic team"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mt-8">
              <Image
                src="/images/11.png"
                alt="Dental care expertise at Dentin Family Dentistry"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">EXPERTISE</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002C29] mb-5 leading-tight">
              Commitment to your oral health and smile aesthetics
            </h2>
            <p className="text-[#555574] leading-relaxed mb-6">
              A specialist doctor is available for any need. We are available in 150+ locations with modern facilities and experienced doctors.
            </p>
            <div className="space-y-3">
              {[
                "Advanced dental technology and equipment",
                "Patient-centered compassionate care",
                "Experienced team of dental specialists",
                "Comprehensive services under one roof",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-[#0D9488] shrink-0" />
                  <span className="text-[#555574] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 px-4 bg-[#002C29] text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">WHY CHOOSE US</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
              Excellence results you can trust
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Accurate diagnosis of dental diseases ensures effective treatment plans, helping to maintain oral health and prevent further complications.
            </p>
            <div className="space-y-6 mb-8">
              {[
                {
                  icon: <AlertCircle size={22} className="text-[#0D9488]" />,
                  title: "Emergency Services",
                  desc: "Available 24/7 for urgent dental emergencies, ensuring you get care when you need it most.",
                },
                {
                  icon: <Star size={22} className="text-[#0D9488]" fill="#0D9488" />,
                  title: "Positive Patient Reviews",
                  desc: "Our patients consistently rate us 5 stars for care, professionalism, and results.",
                },
                {
                  icon: <Shield size={22} className="text-[#0D9488]" />,
                  title: "Experienced Professionals",
                  desc: "Led by Dr. Adibrad with 12+ years of expertise in implants, surgery, and general dentistry.",
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
            <Link
              href="/contact"
              className="inline-block bg-[#0D9488] text-white font-semibold hover:bg-[#09625C] transition-colors"
              style={{ borderRadius: "100px", padding: "19px 30px" }}
            >
              Contact Us
            </Link>
          </div>

          {/* Right side image */}
          <div className="relative rounded-3xl overflow-hidden aspect-square hidden lg:block">
            <Image
              src="/images/Screenshot-2025-02-05-at-3.21.38-PM-1.png"
              alt="Dentin Family Dentistry team expertise"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-20 px-4 bg-[#F8F8FF]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">HOW IT WORK</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002C29] leading-tight">
              Everything you need to know about dental care
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ── TESTIMONIAL SECTION ── */}
      <section className="py-20 px-4 bg-[#0D9488] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/80">TESTIMONIAL</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">
            Real stories of exceptional care and transformative smiles
          </h2>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} fill="white" className="text-white" />
            ))}
          </div>
          <blockquote className="text-lg text-white/90 leading-relaxed mb-6 italic max-w-2xl mx-auto">
            &ldquo;I recently had implants done and I am very satisfied with the very professional staff of this center. The procedure was excellent and I had no pain at all... The follow-ups were excellent. The administrators were very patient, precise, and responsible. I would like to thank dear Dr. Adib Rad and dear dr.Meschi and their incredibly excellent staff.&rdquo;
          </blockquote>
          <div className="font-bold text-white">Nastaran Shamsi</div>
          <div className="text-white/60 text-sm mt-1">Verified Patient</div>
        </div>
      </section>

      {/* ── TRANSFORMATION GALLERY ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">SEE THE TRANSFORMATION</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002C29] leading-tight">
              Stunning results that showcase the life changing impact
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: "/images/transformation-img-1.jpg", label: "Before", alt: "Before dental transformation - case 1" },
              { src: "/images/transformation-img-2.jpg", label: "After", alt: "After dental transformation - case 1" },
              { src: "/images/transformation-img-3-1.jpg", label: "Before", alt: "Before dental transformation - case 2" },
              { src: "/images/transformation-img-4-1.jpg", label: "After", alt: "After dental transformation - case 2" },
            ].map((img, i) => (
              <div key={i} className="relative group overflow-hidden rounded-2xl">
                <div className="relative aspect-square">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${img.label === "Before" ? "bg-gray-800/80 text-white" : "bg-[#0D9488] text-white"}`}>
                  {img.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPOINTMENT CTA ── */}
      <section className="py-20 px-4 bg-[#F8F8FF]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">BOOK YOUR APPOINTMENT</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002C29] mb-4 leading-tight">
              Book your dental visit online
            </h2>
            <p className="text-[#555574] leading-relaxed mb-6">
              Ready to take the next step towards a healthier smile? Use our easy online booking system to schedule your dental appointment.
            </p>
            <div className="space-y-2 text-sm text-[#555574] mb-8">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium text-[#002C29]">Monday – Saturday</span>
                <span>9:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium text-[#002C29]">Sunday</span>
                <span>Closed</span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-[#0D9488] font-semibold">
                <Phone size={14} /> 24/7 Emergency: (437) 900-2200
              </div>
            </div>
            <Link
              href="/appointment"
              className="inline-block bg-[#0D9488] text-white font-semibold hover:bg-[#09625C] transition-colors"
              style={{ borderRadius: "100px", padding: "19px 30px" }}
            >
              Book Now
            </Link>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#002C29] mb-6">Request an Appointment</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="First Name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#002C29]" />
                <input type="text" placeholder="Last Name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#002C29]" />
              </div>
              <input type="tel" placeholder="Phone Number" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#002C29]" />
              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#555574]">
                <option value="">Reason For Visit</option>
                <option>Routine Checkup</option>
                <option>New Patient Visit</option>
                <option>Specific Concern</option>
                <option>Emergency</option>
              </select>
              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#555574]">
                <option value="">Choose Time</option>
                <option>10:00 – 11:00</option>
                <option>11:00 – 12:00</option>
                <option>12:00 – 13:00</option>
                <option>13:00 – 14:00</option>
                <option>14:00 – 15:00</option>
              </select>
              <button
                type="button"
                className="w-full bg-[#0D9488] text-white font-bold py-3 hover:bg-[#09625C] transition-colors text-sm"
                style={{ borderRadius: "100px" }}
              >
                Request Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG SECTION ── */}
      <section className="py-20 px-4 bg-[#F0F0FF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">LATEST NEWS</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002C29] leading-tight max-w-xl">
                Latest dental news insights and oral health advice
              </h2>
            </div>
            <Link href="/blog" className="text-[#0D9488] font-semibold hover:text-[#09625C] transition-colors shrink-0 flex items-center gap-1">
              View All Post →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Essential tips for a healthy smile",
                href: "/essential-tips-for-a-healthy-smile",
                date: "September 10, 2024",
                category: "Oral Health Tips",
              },
              {
                title: "Benefit of regular Dental Checkup",
                href: "/benefit-of-regular-dental-checkup",
                date: "September 10, 2024",
                category: "Oral Health Tips",
              },
            ].map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src="/images/post-1-1.jpg"
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-[#F0F0FF] text-[#0D9488] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-[#002C29] text-lg mb-2 group-hover:text-[#0D9488] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <div className="text-[#555574] text-xs">{post.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
