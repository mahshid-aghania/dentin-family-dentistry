import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Patient Education | Dentin Family Dentistry Vaughan",
  description:
    "Dental health tips, oral care guides, and news from Dentin Family Dentistry in Vaughan. Stay informed and keep your smile healthy.",
};

const posts = [
  {
    title: "Essential Tips for a Healthy Smile",
    excerpt:
      "Maintaining a healthy smile goes beyond brushing twice a day. Learn the top habits that dental professionals recommend for optimal oral health — from flossing technique to diet choices.",
    date: "September 10, 2024",
    category: "Oral Health Tips",
    readTime: "4 min read",
    href: "/essential-tips-for-a-healthy-smile",
    image: "/images/post-1-1.jpg",
  },
  {
    title: "The Benefits of Regular Dental Checkups",
    excerpt:
      "Regular dental checkups are one of the most effective ways to prevent dental disease, detect problems early, and save money on treatment in the long run.",
    date: "September 10, 2024",
    category: "Preventive Care",
    readTime: "4 min read",
    href: "/benefit-of-regular-dental-checkup",
    image: "/images/post-1-1.jpg",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#002C29] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#0D9488] text-sm mb-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30 mx-2">/</span>
            Patient Education
          </div>
          <h1 className="text-4xl font-bold">Patient Education</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Dental health tips, oral care guides, and practice news — helping you stay informed and keep your smile at its best.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">Latest Articles</div>
            <h2 className="text-3xl font-bold text-[#002C29] mb-3">Dental Health Insights &amp; Oral Care Advice</h2>
            <p className="text-[#555574] max-w-xl mx-auto text-sm leading-relaxed">
              Our team shares practical, evidence-based guidance to help you and your family maintain healthy teeth and gums for life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {posts.map((post) => (
              <Link key={post.title} href={post.href}>
                <article className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 group h-full bg-white">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F0F0FF] text-[#0D9488]">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h2 className="font-bold text-[#002C29] text-lg mb-2 group-hover:text-[#0D9488] transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-[#555574] text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{post.date}</span>
                      <span className="text-[#0D9488] text-xs font-semibold inline-flex items-center gap-1 group-hover:underline">
                        Read Article <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#002C29] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-1">We&apos;re Here to Help</p>
            <h2 className="text-2xl md:text-3xl font-bold">Have a Dental Question?</h2>
            <p className="text-gray-300 mt-2 max-w-lg">
              Can&apos;t find what you&apos;re looking for? Our team is happy to answer any questions about your oral health or our services.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0D9488] text-white font-bold hover:bg-[#09625C] transition-colors"
              style={{ borderRadius: "100px", padding: "16px 28px" }}
            >
              Contact Us <ArrowRight size={15} />
            </Link>
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold hover:border-white transition-colors"
              style={{ borderRadius: "100px", padding: "14px 28px" }}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
