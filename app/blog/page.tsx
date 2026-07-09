import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog | Dentin Family Dentistry Vaughan",
  description:
    "Dental health tips, news, and articles from Dentin Family Dentistry in Vaughan.",
};

const posts = [
  {
    title: "Essential Tips for a Healthy Smile",
    excerpt:
      "Maintaining a healthy smile goes beyond brushing twice a day. Learn the top habits that dental professionals recommend for optimal oral health.",
    date: "2024-09-10",
    category: "Oral Health Tips",
    readTime: "4 min read",
    href: "/essential-tips-for-a-healthy-smile",
    image: "/images/post-1-1.jpg",
  },
  {
    title: "Benefit of Regular Dental Checkup",
    excerpt:
      "Regular dental checkups are one of the most effective ways to prevent dental disease, detect problems early, and save money on treatment in the long run.",
    date: "2024-09-10",
    category: "Oral Health Tips",
    readTime: "4 min read",
    href: "/benefit-of-regular-dental-checkup",
    image: "/images/post-1-1.jpg",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#002C29] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#0D9488] text-sm mb-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> / Blog
          </div>
          <h1 className="text-4xl font-bold">Dental Health Blog</h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Tips, guides, and news to help you maintain a healthy, beautiful smile.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest mb-3">LATEST NEWS</div>
            <h2 className="text-3xl font-bold text-[#002C29]">Latest dental news insights and oral health advice</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.title} href={post.href}>
                <article className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group h-full bg-white">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#F0F0FF] text-[#0D9488]">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h2 className="font-bold text-[#002C29] text-lg mb-2 group-hover:text-[#0D9488] transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-[#555574] text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {new Date(post.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
                      </span>
                      <span className="text-[#0D9488] text-sm font-semibold group-hover:underline">Read More →</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F0F0FF] text-center">
        <h2 className="text-2xl font-bold text-[#002C29] mb-3">Have a Dental Question?</h2>
        <p className="text-[#555574] mb-6 max-w-md mx-auto">
          Can&apos;t find what you&apos;re looking for? Contact our team — we&apos;re happy to help.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#0D9488] text-white font-semibold hover:bg-[#09625C] transition-colors"
          style={{ borderRadius: "100px", padding: "19px 30px" }}
        >
          Contact Us
        </Link>
      </section>
    </>
  );
}
