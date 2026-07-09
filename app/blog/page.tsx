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
  },
  {
    title: "Benefit of Regular Dental Checkup",
    excerpt:
      "Regular dental checkups are one of the most effective ways to prevent dental disease, detect problems early, and save money on treatment in the long run.",
    date: "2024-09-10",
    category: "Oral Health Tips",
    readTime: "4 min read",
    href: "/benefit-of-regular-dental-checkup",
  },
];

const categoryColors: Record<string, string> = {
  "Oral Health Tips": "bg-green-100 text-green-700",
  "Dental Implants": "bg-blue-100 text-blue-700",
  "Patient Guide": "bg-purple-100 text-purple-700",
  "Insurance & Coverage": "bg-yellow-100 text-yellow-700",
  "Cosmetic Dentistry": "bg-pink-100 text-pink-700",
  "Pediatric Dentistry": "bg-orange-100 text-orange-700",
};


export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a6fb5] to-[#0d4a80] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-blue-200 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link> / Blog
          </div>
          <h1 className="text-4xl font-bold">Dental Health Blog</h1>
          <p className="text-blue-100 mt-2 max-w-xl">
            Tips, guides, and news to help you maintain a healthy, beautiful smile.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.title} href={post.href}>
                <article className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group h-full">
                  <div className="bg-[#e8f2fc] aspect-video flex items-center justify-center text-5xl">
                    🦷
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[post.category] || "bg-gray-100 text-gray-600"}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h2 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#1a6fb5] transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {new Date(post.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
                      </span>
                      <span className="text-[#1a6fb5] text-sm font-semibold group-hover:underline">Read More →</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#e8f2fc] text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Have a Dental Question?</h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Can&apos;t find what you&apos;re looking for? Contact our team — we&apos;re happy to help.
        </p>
        <Link
          href="/contact"
          className="bg-[#1a6fb5] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#145a95] transition-colors inline-block"
        >
          Contact Us
        </Link>
      </section>
    </>
  );
}
