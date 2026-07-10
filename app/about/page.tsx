import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Award, Users, Star, ArrowRight, Phone, Shield } from "lucide-react";

export const metadata = {
  title: "About Us | Dentin Family Dentistry Vaughan",
  description:
    "Meet Dr. Mehdi Adibrad — Head & Implant Surgeon at Dentin Family Dentistry in Vaughan. 12+ years of experience in implants, cosmetic, and restorative dentistry.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#002C29] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#0D9488] text-sm mb-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30 mx-2">/</span>
            About Us
          </div>
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Meet our team, learn about our philosophy, and discover why hundreds of Vaughan families trust Dentin Family Dentistry with their smiles.
          </p>
        </div>
      </section>

      {/* Dr. Adibrad */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* Doctor photo */}
          <div className="relative max-w-sm mx-auto md:mx-0">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src="/images/drMehdiRad-e1773681597167.jpg"
                alt="Dr Mehdi Adibrad — Head and Implant Surgeon at Dentin Family Dentistry Vaughan"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/55 text-white text-xs py-3 text-center font-medium tracking-wide">
                Dr. Mehdi Adibrad — Head &amp; Implant Surgeon
              </div>
            </div>
            <div className="absolute top-6 right-[-12px] bg-[#0D9488] text-white rounded-2xl px-5 py-4 shadow-lg text-center">
              <div className="text-2xl font-bold">12+</div>
              <div className="text-xs font-medium">Years Exp.</div>
            </div>
          </div>

          <div>
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">Your Trusted Dentist</div>
            <h2 className="text-3xl font-bold text-[#002C29] mb-5 leading-tight">
              Dr. Mehdi Adibrad — Head &amp; Implant Surgeon
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              Dr. Mehdi Adibrad is a highly skilled and compassionate dentist with over 12 years of experience. Before establishing himself in Canada, he built a respected reputation as a periodontist and oral surgeon, and served as head instructor at the ConfiDentist Group — helping internationally trained dentists achieve Canadian licensing.
            </p>
            <p className="text-[#555574] leading-relaxed mb-6">
              &ldquo;When it comes to dental implants, precision, experience, and advanced technology make all the difference.&rdquo; Dr. Adibrad specializes in One-Day Implant solutions using meticulous planning and high-quality materials.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {[
                "Active General Dentistry Licence (RCDSO)",
                "Ontario Dental Association Member",
                "International Team for Implantology (ITI)",
                "NDEB Equivalency — First Attempt Pass",
                "AFK Examination Certified",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-[#555574]">
                  <CheckCircle size={15} className="text-[#0D9488] shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex justify-start gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={17} fill="#0D9488" className="text-[#0D9488]" />
              ))}
              <span className="text-sm text-[#555574] ml-2">5-Star Google Reviews</span>
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
                <Phone size={15} /> (437) 900-2200
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 px-4 bg-[#F0F0FF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">Our Foundation</div>
            <h2 className="text-3xl font-bold text-[#002C29] mb-3">Our Mission, Vision &amp; Values</h2>
            <p className="text-[#555574] max-w-xl mx-auto text-sm leading-relaxed">
              Everything we do at Dentin Family Dentistry is guided by a clear purpose — improving lives through exceptional oral health care.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Award size={32} className="text-[#0D9488]" />,
                title: "Mission",
                text: "To provide compassionate, high-quality dental care that promotes healthy smiles through personalised treatments tailored to each patient's unique needs.",
              },
              {
                icon: <Star size={32} className="text-[#0D9488]" />,
                title: "Vision",
                text: "To be the most trusted family dental practice in Vaughan — delivering exceptional care through clinical innovation, genuine compassion, and lasting relationships.",
              },
              {
                icon: <Users size={32} className="text-[#0D9488]" />,
                title: "Values",
                text: "Patient-centred care, clinical excellence, continuous education, transparency, and building meaningful relationships with every patient we serve.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#F0F0FF] rounded-full flex items-center justify-center mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#002C29] mb-3">{item.title}</h3>
                <p className="text-[#555574] leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">Why Choose Us</div>
            <h2 className="text-3xl font-bold text-[#002C29] mb-6 leading-tight">
              The Dentin Difference
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "Advanced Diagnostic Technology",
                  desc: "Digital X-rays, intraoral cameras, and precision planning tools for accurate diagnosis and treatment.",
                },
                {
                  title: "24 / 7 Emergency Dental Care",
                  desc: "Dental emergencies don't keep office hours. Call us any time at (437) 900-2200 and we'll prioritise your case.",
                },
                {
                  title: "CDCP & Major Insurance Accepted",
                  desc: "We're proud to accept the Canadian Dental Care Plan and work with all major dental insurance providers.",
                },
                {
                  title: "Experienced Implant Specialist On-Site",
                  desc: "Dr. Adibrad — an ITI member with 12+ years of surgical expertise — performs all implant procedures at our Vaughan clinic.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#F0F0FF] rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle size={19} className="text-[#0D9488]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#002C29]">{item.title}</h3>
                    <p className="text-[#555574] text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Educational courses */}
          <div className="bg-[#F8F8FF] rounded-3xl p-8 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Shield size={16} className="text-[#0D9488]" />
              <span className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest">Education & Training</span>
            </div>
            <h3 className="text-xl font-bold text-[#002C29] mb-3">Professional Development Courses</h3>
            <p className="text-[#555574] text-sm mb-5 leading-relaxed">
              Dr. Adibrad also offers licensing preparation courses for internationally trained dentists seeking Canadian credentials:
            </p>
            <ul className="space-y-3">
              {[
                "Assessment of Fundamental Knowledge (AFK) Course",
                "Assessment of Clinical Judgment (ACJ) Course",
                "NDECC Preparatory Course",
                "AFK & ACJ Bundle",
                "Virtual OSCE Course",
              ].map((course) => (
                <li key={course} className="flex items-start gap-2.5 text-sm text-[#555574]">
                  <div className="w-1.5 h-1.5 bg-[#0D9488] rounded-full shrink-0 mt-1.5" />
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#002C29] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-1">Accepting New Patients</p>
            <h2 className="text-2xl md:text-3xl font-bold">Meet Our Team In Person</h2>
            <p className="text-gray-300 mt-2 max-w-lg">
              Schedule your first visit to Dentin Family Dentistry and experience the difference compassionate care makes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 bg-[#0D9488] text-white font-bold hover:bg-[#09625C] transition-colors"
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
      </section>
    </>
  );
}
