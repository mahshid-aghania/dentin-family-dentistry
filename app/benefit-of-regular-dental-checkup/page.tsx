import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Benefit of Regular Dental Checkup | Dentin Family Dentistry Blog",
  description:
    "Discover why regular dental checkups are essential for preventing cavities, gum disease, and costly dental problems. Tips from Dentin Family Dentistry in Vaughan.",
};

export default function RegularDentalCheckupPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a6fb5] to-[#0d4a80] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-200 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link> / Benefit of Regular Dental Checkup
          </div>
          <div className="inline-block bg-green-500/30 text-green-200 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Oral Health Tips
          </div>
          <h1 className="text-4xl font-bold mb-3">Benefit of Regular Dental Checkup</h1>
          <p className="text-blue-200 text-sm">September 10, 2024 · 4 min read</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-gray max-w-none">
            <div className="bg-[#e8f2fc] rounded-2xl p-6 mb-8">
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                &ldquo;Maintain a healthy smile by brushing and flossing daily, visiting the dentist regularly,
                eating a balanced diet, avoiding sugary foods, staying hydrated, and using mouthwash.&rdquo;
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Regular Checkups Matter</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Maintaining a healthy smile requires more than good home hygiene. Regular dental checkups —
              ideally every six months — are one of the most effective ways to prevent dental disease,
              detect problems early, and save money on treatment in the long run.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Brushing and flossing daily removes soft plaque, but over time plaque hardens into calculus
              (tartar) that only a professional cleaning can remove. Left untreated, tartar leads to gum
              disease, bone loss, and eventually tooth loss.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nutrition and Your Oral Health</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              What you eat significantly impacts oral wellness. Calcium and vitamin D from dairy products,
              fruits, and vegetables strengthen your teeth and jawbone. On the other hand, sugary and acidic
              foods accelerate enamel erosion and create an environment where cavity-causing bacteria thrive.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Drinking plenty of water throughout the day naturally rinses away food debris and bacteria,
              maintains saliva production, and helps neutralize acid attacks after meals. It is one of the
              simplest habits you can adopt for better oral health.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits of Professional Dental Care</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                "Early detection of dental issues",
                "Cavity and gum disease prevention",
                "Professional tartar removal",
                "Customized oral hygiene guidance",
                "Oral cancer screening",
                "Restorative treatment planning",
                "Systemic health improvement",
                "Orthodontic evaluations",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-700 bg-[#e8f2fc] rounded-lg p-3">
                  <CheckCircle size={16} className="text-[#1a6fb5] shrink-0" /> {item}
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens at a Dental Checkup?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              During a routine checkup at Dentin Family Dentistry, our team will perform a thorough
              professional cleaning to remove plaque and tartar buildup, followed by a comprehensive
              examination of your teeth, gums, and oral tissues.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We check for signs of cavities, gum disease, cracked teeth, and oral cancer. Dental X-rays,
              taken when clinically appropriate, allow us to detect problems between teeth and below the
              gumline that aren&apos;t visible to the naked eye.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Your visit concludes with personalized recommendations — whether that&apos;s adjusting your brushing
              technique, dietary changes, or scheduling a follow-up treatment. Our goal is to give you the
              knowledge and tools to maintain a healthy smile between visits.
            </p>

            <div className="bg-[#1a6fb5] rounded-2xl p-8 text-white text-center">
              <h3 className="text-xl font-bold mb-2">Book Your Next Checkup</h3>
              <p className="text-blue-100 mb-4">
                Don&apos;t wait for a problem to arise. Schedule your routine cleaning and exam at Dentin Family
                Dentistry in Vaughan today.
              </p>
              <Link
                href="/appointment"
                className="inline-block bg-white text-[#1a6fb5] font-bold px-7 py-3 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition-colors"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-gray-900 mb-4">More Articles</h3>
          <Link
            href="/essential-tips-for-a-healthy-smile"
            className="block border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow group"
          >
            <div className="text-xs text-gray-400 mb-1">Oral Health Tips · 4 min read</div>
            <div className="font-bold text-gray-900 group-hover:text-[#1a6fb5] transition-colors">
              Essential Tips for a Healthy Smile
            </div>
            <div className="text-sm text-gray-500 mt-1">
              The top habits dental professionals recommend for optimal oral health.
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
