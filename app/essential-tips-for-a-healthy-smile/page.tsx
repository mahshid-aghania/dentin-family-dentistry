import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Essential Tips for a Healthy Smile | Dentin Family Dentistry Blog",
  description:
    "Maintain a healthy smile with expert advice from Dentin Family Dentistry. Learn the top habits dental professionals recommend for optimal oral health.",
};

export default function EssentialTipsPage() {
  return (
    <>
      <section className="bg-[#002C29] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-gray-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link> / Essential Tips for a Healthy Smile
          </div>
          <div className="inline-block bg-green-500/30 text-green-200 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Oral Health Tips
          </div>
          <h1 className="text-4xl font-bold mb-3">Essential Tips for a Healthy Smile</h1>
          <p className="text-gray-300 text-sm">September 10, 2024 · 4 min read</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-gray max-w-none">
            <div className="bg-[#F0F0FF] rounded-2xl p-6 mb-8">
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                Maintaining a healthy smile requires consistent care and good habits. Brush and floss daily
                to remove plaque and prevent cavities — but great oral health goes beyond just the basics.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Daily Oral Hygiene Habits</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The foundation of a healthy smile is a consistent daily routine. Brushing twice a day with
              fluoride toothpaste removes the plaque and bacteria that cause cavities and gum disease. Use a
              soft-bristled toothbrush and spend at least two minutes brushing all surfaces of your teeth.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Flossing once a day is equally important. Dental floss reaches the interdental spaces that a
              toothbrush simply cannot access — areas where plaque builds up and cavities often begin. If
              traditional floss is difficult to use, interdental brushes or water flossers are excellent
              alternatives.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Role of Nutrition in Oral Health</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              What you eat has a significant impact on the health of your teeth and gums. Calcium and
              vitamin D — found in dairy products, leafy greens, and fortified foods — strengthen tooth
              enamel and the supporting bone structure.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Conversely, sugary and acidic foods and beverages accelerate tooth decay and enamel erosion.
              Limit soft drinks, fruit juices, candy, and processed snacks. When you do consume them, rinse
              your mouth with water afterward and wait 30 minutes before brushing to avoid spreading acid
              across your enamel.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Maintaining Oral Health</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Good oral hygiene does more than give you a confident smile — it protects your overall health.
              Research links periodontal (gum) disease to heart disease, diabetes, and other systemic
              conditions. Keeping your mouth healthy helps keep your body healthy.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                "Early detection of dental problems",
                "Prevention of cavities and gum disease",
                "Professional cleanings to remove tartar",
                "Customized oral health guidance",
                "Restorative treatment when needed",
                "Overall systemic health improvement",
                "Orthodontic evaluations",
                "Fresh breath and confidence",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-700 bg-[#F0F0FF] rounded-lg p-3">
                  <CheckCircle size={16} className="text-[#0D9488] shrink-0" /> {item}
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Regular Dental Visits Are Essential</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Even with a perfect home routine, professional dental cleanings and exams are irreplaceable.
              We recommend visiting the dentist every six months. Our team removes calcified tartar that
              cannot be brushed away, screens for early signs of cavities, gum disease, and oral cancer, and
              provides personalized guidance for your specific needs.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Staying hydrated is another simple but powerful habit. Water rinses away food particles and
              bacteria, neutralizes acids, and supports saliva production — your mouth&apos;s natural defence
              mechanism. Aim for at least 8 glasses of water a day, and consider using an antibacterial
              mouthwash as part of your evening routine.
            </p>

            <div className="bg-[#0D9488] rounded-2xl p-8 text-white text-center">
              <h3 className="text-xl font-bold mb-2">Ready to Protect Your Smile?</h3>
              <p className="text-gray-300 mb-4">
                Book a cleaning and exam at Dentin Family Dentistry in Vaughan today.
              </p>
              <Link
                href="/appointment"
                className="inline-block bg-white text-[#0D9488] font-bold px-7 py-3 rounded-full hover:bg-[#002C29] hover:text-white transition-colors"
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
            href="/benefit-of-regular-dental-checkup"
            className="block border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow group"
          >
            <div className="text-xs text-gray-400 mb-1">Oral Health Tips · 4 min read</div>
            <div className="font-bold text-gray-900 group-hover:text-[#0D9488] transition-colors">
              Benefit of Regular Dental Checkup
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Discover why regular dental checkups are the key to preventing costly dental problems.
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
