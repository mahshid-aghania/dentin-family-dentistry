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
    date: "2024-06-15",
    category: "Oral Health Tips",
    readTime: "4 min read",
  },
  {
    title: "Dental Implants vs. Bridges: Which Is Right for You?",
    excerpt:
      "Both implants and bridges can replace missing teeth effectively. Understand the differences, benefits, and which option suits your specific needs.",
    date: "2024-05-22",
    category: "Dental Implants",
    readTime: "5 min read",
  },
  {
    title: "What to Expect During Your First Dental Visit",
    excerpt:
      "New to Dentin Family Dentistry? Here's a complete guide to what happens during your first appointment, from check-in to treatment planning.",
    date: "2024-04-10",
    category: "Patient Guide",
    readTime: "3 min read",
  },
  {
    title: "The Canadian Dental Care Plan (CDCP) Explained",
    excerpt:
      "We now accept the CDCP! Learn who qualifies, what's covered, and how to use your CDCP benefits at our Vaughan dental office.",
    date: "2024-03-28",
    category: "Insurance & Coverage",
    readTime: "4 min read",
  },
  {
    title: "Porcelain Veneers: Transform Your Smile in Two Visits",
    excerpt:
      "Porcelain veneers are one of the most popular cosmetic dental treatments. Discover the process, benefits, and whether you're a good candidate.",
    date: "2024-02-14",
    category: "Cosmetic Dentistry",
    readTime: "5 min read",
  },
  {
    title: "Children's Dental Health: Starting Early for a Lifetime of Smiles",
    excerpt:
      "Good dental habits start in childhood. Learn how to care for your child's teeth from infancy through adolescence and when to schedule their first dental visit.",
    date: "2024-01-20",
    category: "Pediatric Dentistry",
    readTime: "4 min read",
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
              <article key={post.title} className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group">
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
