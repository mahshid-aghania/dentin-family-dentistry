import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Award, Users, Star } from "lucide-react";

export const metadata = {
  title: "About Us | Dentin Family Dentistry Vaughan",
  description:
    "Meet Dr. Mehdi Adibrad and the Dentin Family Dentistry team. Serving Vaughan with compassionate dental care, implants, and oral surgery.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#002C29] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#0D9488] text-sm mb-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> / About Us
          </div>
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Learn about our team, our mission, and our commitment to delivering exceptional dental care in Vaughan.
          </p>
        </div>
      </section>

      {/* Dr. Adibrad Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Doctor photo */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-sm mx-auto md:mx-0">
              <Image
                src="/images/drMehdiRad-e1773681597167.jpg"
                alt="Dr Mehdi Adibrad - Head and Implant Surgeon at Dentin Family Dentistry"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-6 right-0 md:right-[-20px] bg-[#0D9488] text-white rounded-2xl px-5 py-4 shadow-lg">
              <div className="text-2xl font-bold">12+</div>
              <div className="text-xs font-medium">Years Experience</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-center bg-black/60 text-white text-xs py-2 rounded-b-3xl">
              Dr Mehdi Adibrad - Head and Implant Surgeon
            </div>
          </div>

          <div>
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">Your Trusted Dentist</div>
            <h2 className="text-3xl font-bold text-[#002C29] mb-5">
              Dr. Mehdi Adibrad — Head &amp; Implant Surgeon
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              Dr. Mehdi Adibrad is a highly skilled and compassionate dentist with over 12 years of experience as
              head instructor at the ConfiDentist Group, where he helped internationally trained dentists achieve
              Canadian licensing.
            </p>
            <p className="text-[#555574] leading-relaxed mb-4">
              Before establishing himself in Canada, Dr. Adibrad built a respected reputation as a periodontist
              and oral surgeon in Iran. He successfully completed the Canadian dental licensing pathway, passing
              the AFK examination and the NDEB Equivalency Process on his first attempt.
            </p>
            <p className="text-[#555574] leading-relaxed mb-6">
              &ldquo;When it comes to dental implants, precision, experience, and advanced technology make all the
              difference.&rdquo; Dr. Adibrad specializes in One-Day Implant solutions using modern techniques,
              careful planning, and high-quality materials.
            </p>

            <div className="space-y-2 mb-6">
              {[
                "Active General Dentistry License (RCDSO)",
                "Ontario Dental Association Member",
                "International Team for Implantology (ITI) Member",
                "NDEB Equivalency Process — First Attempt Pass",
                "AFK Examination Certified",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#555574]">
                  <CheckCircle size={16} className="text-[#0D9488] shrink-0" /> {item}
                </div>
              ))}
            </div>

            <div className="flex justify-start gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#0D9488" className="text-[#0D9488]" />
              ))}
            </div>

            <Link
              href="/appointment"
              className="inline-block bg-[#0D9488] text-white font-semibold hover:bg-[#09625C] transition-colors"
              style={{ borderRadius: "100px", padding: "19px 30px" }}
            >
              Book with Dr. Adibrad
            </Link>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 px-4 bg-[#F0F0FF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">OUR MISSION</div>
            <h2 className="text-3xl font-bold text-[#002C29] mb-3">Our Mission, Vision &amp; Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Award size={32} className="text-[#0D9488]" />,
                title: "Mission",
                text: "To provide compassionate, high-quality dental care that promotes healthy smiles through personalized treatments tailored to each patient.",
              },
              {
                icon: <Star size={32} className="text-[#0D9488]" />,
                title: "Vision",
                text: "To be the most trusted family dental practice in Vaughan, delivering exceptional care through innovation, compassion, and expertise.",
              },
              {
                icon: <Users size={32} className="text-[#0D9488]" />,
                title: "Values",
                text: "We believe in patient-centered care, clinical excellence, ongoing education, and building lasting relationships with every patient we serve.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#002C29] mb-3">{item.title}</h3>
                <p className="text-[#555574] leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">Why Choose Us</div>
            <h2 className="text-3xl font-bold text-[#002C29] mb-6">
              Experience the Dentin Difference
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Accurate Diagnosis",
                  desc: "We use advanced diagnostic tools to identify dental issues early and accurately.",
                },
                {
                  title: "Emergency Services",
                  desc: "Dental emergencies don't wait. Our team is available 24/7 for urgent dental care.",
                },
                {
                  title: "5-Star Reviews",
                  desc: "Our patients love us! We pride ourselves on consistently excellent patient experiences.",
                },
                {
                  title: "Experienced Professionals",
                  desc: "Led by Dr. Adibrad with 12+ years of expertise in implants, surgery, and general dentistry.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#F0F0FF] rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle size={20} className="text-[#0D9488]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#002C29]">{item.title}</h3>
                    <p className="text-[#555574] text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#F8F8FF] rounded-3xl p-8">
            <h3 className="text-xl font-bold text-[#002C29] mb-6">Educational Courses Offered</h3>
            <p className="text-[#555574] text-sm mb-4">
              Dr. Adibrad also offers professional development courses for internationally trained dentists:
            </p>
            <ul className="space-y-3">
              {[
                "Assessment of Fundamental Knowledge (AFK) Course",
                "Assessment of Clinical Judgment (ACJ) Course",
                "NDECC Preparatory Course",
                "AFK & ACJ Bundle",
                "Virtual OSCE Course",
              ].map((course) => (
                <li key={course} className="flex items-center gap-2 text-sm text-[#555574]">
                  <div className="w-1.5 h-1.5 bg-[#0D9488] rounded-full shrink-0" />
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#0D9488] text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Meet Our Team In Person</h2>
        <p className="text-white/80 mb-6 max-w-lg mx-auto">
          Schedule your visit to Dentin Family Dentistry and experience compassionate care firsthand.
        </p>
        <Link
          href="/appointment"
          className="inline-block bg-white text-[#0D9488] font-bold hover:bg-[#002C29] hover:text-white transition-colors"
          style={{ borderRadius: "100px", padding: "19px 30px" }}
        >
          Book an Appointment
        </Link>
      </section>
    </>
  );
}
