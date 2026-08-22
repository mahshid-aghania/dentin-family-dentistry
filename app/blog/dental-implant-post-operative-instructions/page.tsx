import Image from "next/image";
import Link from "next/link";
import { CheckCircle, XCircle } from "lucide-react";
import {
  ArticleHeader,
  TableOfContents,
  WarningCallout,
  ArticleCTA,
  AuthorBox,
  RelatedArticles,
  EducationalNote,
  ArticleSchema,
} from "../../components/ArticleUI";
import ArticleFAQ, { type FAQ } from "../../components/ArticleFAQ";

const SLUG = "dental-implant-post-operative-instructions";
const TITLE = "Dental Implant Post-Operative Instructions: Recovery and Aftercare Guide";
const DESCRIPTION =
  "Dental implant aftercare guide from Dr. Mehdi Adibrad in Vaughan: manage bleeding, swelling and pain, what to eat, healing time, and warning signs to watch for.";
const CATEGORY = "Dental Implants";
const DATE = "August 22, 2026";
const READ_TIME = "9 min read";
const IMAGE = "/images/dental-implant-recovery-aftercare.jpg";

export const metadata = {
  title: { absolute: "Dental Implant Aftercare & Recovery Guide | Vaughan" },
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    type: "article",
    url: `/blog/${SLUG}`,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: IMAGE, alt: "Patient recovering comfortably after dental implant surgery in Vaughan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Implant Aftercare & Recovery Guide",
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

const faqs: FAQ[] = [
  {
    question: "How long does dental implant recovery take?",
    answer:
      "Most patients feel noticeably better within 3 to 7 days, and close to normal by the two-week mark. Beneath the surface, the implant continues to fuse with the jawbone (osseointegration) over roughly 3 to 6 months. Your total dental implant healing time depends on your bone density, general health, and whether bone grafting was needed.",
  },
  {
    question: "What can I eat after dental implant surgery?",
    answer:
      "For the first day, stick to cool liquids and very soft foods such as water, broth, smoothies (no straw), yogurt, and applesauce. Move to soft foods like mashed potatoes, scrambled eggs, and oatmeal for the first week, then gradually return to your normal diet as comfort allows. Avoid hard, crunchy, spicy, or very hot foods while you heal.",
  },
  {
    question: "How do I control bleeding after a dental implant?",
    answer:
      "Light bleeding or pink saliva is normal for the first 24 hours. Bite firmly on the gauze pad for 30 to 60 minutes, replace it if needed, keep your head elevated, and avoid spitting, rinsing hard, or using a straw. If heavy bleeding does not slow after two or three rounds of gauze pressure, contact our Vaughan clinic.",
  },
  {
    question: "When can I brush my teeth after implant surgery?",
    answer:
      "Avoid brushing the surgical site and forceful rinsing for the first 24 hours. After that, gently brush your other teeth, rinse with warm salt water 3 to 4 times a day, and use a soft-bristled toothbrush. From about day 3 you can very gently clean around the implant site. Always follow the specific instructions Dr. Adibrad gives you.",
  },
  {
    question: "Is it normal to have pain after a dental implant?",
    answer:
      "Mild to moderate soreness for a few days is expected and is usually well managed with the medication your dentist recommends. Take pain relief before the freezing wears off rather than waiting for pain to build. Contact us if severe pain is not controlled by medication or worsens after 72 hours.",
  },
];

const tocItems = [
  { id: "what-to-expect", label: "What to expect after surgery" },
  { id: "first-24-hours", label: "The first 24 hours" },
  { id: "bleeding", label: "Managing bleeding" },
  { id: "swelling", label: "Managing swelling" },
  { id: "pain", label: "Pain management" },
  { id: "eating", label: "What to eat" },
  { id: "oral-hygiene", label: "Oral hygiene" },
  { id: "activity", label: "Activity, smoking & alcohol" },
  { id: "follow-up", label: "Follow-up appointments" },
  { id: "healing-timeline", label: "Healing timeline" },
  { id: "warning-signs", label: "Warning signs" },
  { id: "faq", label: "FAQs" },
];

const dos = [
  "Rest and keep your head elevated for the first day or two",
  "Take prescribed or recommended medication as directed",
  "Use cold compresses in 20-minutes-on, 20-minutes-off cycles",
  "Eat soft, nourishing foods and stay hydrated",
  "Start gentle warm salt-water rinses after the first 24 hours",
];

const donts = [
  "Don't spit forcefully, rinse hard, or drink through a straw",
  "Don't smoke or use tobacco — it slows healing significantly",
  "Don't drink alcohol for 48–72 hours or while on medication",
  "Don't do strenuous exercise for the first 3–5 days",
  "Don't disturb the surgical site with your tongue or fingers",
];

export default function ImplantPostOpPage() {
  return (
    <>
      <ArticleSchema
        slug={SLUG}
        headline={TITLE}
        description={DESCRIPTION}
        image={IMAGE}
        datePublished="2026-08-22"
        dateModified="2026-08-22"
        breadcrumbTitle="Dental Implant Aftercare"
        faqs={faqs}
      />

      <ArticleHeader
        title={TITLE}
        breadcrumbTitle="Dental Implant Aftercare"
        category={CATEGORY}
        date={DATE}
        readTime={READ_TIME}
      />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-sm bg-[#e8e8f0]">
            <Image
              src={IMAGE}
              alt="Relaxed patient smiling after dental implant treatment at a Vaughan dental clinic"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-[#555574] text-lg leading-relaxed mb-6">
              You&apos;ve just completed your dental implant surgery — an important step toward a healthier, more
              complete smile. What you do in the hours and days that follow plays a major role in how smoothly you
              heal. This dental implant aftercare guide explains what to expect and how to care for yourself during
              recovery, so you feel confident and prepared at every stage.
            </p>
            <p className="text-[#555574] leading-relaxed mb-8">
              These are general dental implant post-operative instructions. They do not replace the personalized
              guidance you receive from your surgeon. If the instructions Dr. Adibrad gives you differ from anything
              here, always follow his advice for your specific case.
            </p>

            <TableOfContents items={tocItems} />

            <h2 id="what-to-expect" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              What to Expect After Dental Implant Surgery
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              It is completely normal to experience some discomfort, swelling, and minor bleeding after your
              procedure. These are natural parts of dental implant recovery as your body begins to heal. Most patients
              find that symptoms peak within the first 48 to 72 hours and then gradually improve.
            </p>
            <p className="text-[#555574] leading-relaxed mb-4">Common post-operative symptoms include:</p>
            <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-6 space-y-1">
              <li>Mild to moderate soreness around the implant site</li>
              <li>Swelling of the gums, jaw, or cheek</li>
              <li>Light bleeding or oozing from the surgical area</li>
              <li>Some bruising of the skin near the jaw or neck</li>
              <li>Slight difficulty opening your mouth fully</li>
            </ul>
            <p className="text-[#555574] leading-relaxed mb-8">
              These experiences should not cause alarm. However, if you notice severe or worsening pain after 72
              hours, heavy uncontrolled bleeding, a fever above 38&nbsp;°C (100.4&nbsp;°F), or pus around the implant,
              contact our office promptly.
            </p>

            <h2 id="first-24-hours" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              The First 24 Hours: Dental Implant Do&apos;s and Don&apos;ts
            </h2>
            <p className="text-[#555574] leading-relaxed mb-6">
              The first day sets the tone for your recovery. Protecting the blood clot that forms over the implant is
              essential for healing. Here are the key dental implant do&apos;s and don&apos;ts for the first 24 hours.
            </p>
            <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#F0FBF9] border border-[#0D9488]/20 rounded-2xl p-5">
                <div className="font-bold text-[#0D9488] mb-3">Do</div>
                <ul className="space-y-2">
                  {dos.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-[#555574]">
                      <CheckCircle size={16} className="text-[#0D9488] shrink-0 mt-0.5" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                <div className="font-bold text-red-700 mb-3">Don&apos;t</div>
                <ul className="space-y-2">
                  {donts.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-[#555574]">
                      <XCircle size={16} className="text-red-500 shrink-0 mt-0.5" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 id="bleeding" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Managing Bleeding After a Dental Implant
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              Some bleeding or a little redness in your saliva is normal for the first 24 hours. To keep bleeding after
              a dental implant under control:
            </p>
            <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-4 space-y-1">
              <li>Bite firmly on the gauze pad placed by your surgeon for 30 to 60 minutes.</li>
              <li>If bleeding continues, replace it with a fresh, damp gauze pad and bite for another 30 minutes.</li>
              <li>Avoid spitting, vigorous rinsing, or using a straw — suction can dislodge the clot and delay healing.</li>
              <li>Keep your head elevated, propping up with extra pillows when lying down.</li>
            </ul>
            <p className="text-[#555574] leading-relaxed mb-8">
              If bleeding is heavy or does not slow after two to three rounds of gauze pressure, call our Vaughan clinic
              right away.
            </p>

            <h2 id="swelling" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Managing Swelling After a Dental Implant
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              Swelling after a dental implant is one of the most common experiences and usually peaks around the second
              or third day before gradually settling. To reduce it:
            </p>
            <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-8 space-y-1">
              <li>Apply an ice pack to the outside of your face in 20-minute on / 20-minute off cycles for the first 24 to 48 hours.</li>
              <li>After 48 hours, switch to a warm compress to support circulation and ease residual swelling.</li>
              <li>Keep your head elevated as much as possible, even while sleeping.</li>
              <li>Avoid strenuous physical activity for the first 3 to 5 days.</li>
            </ul>

            <h2 id="pain" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Dental Implant Pain Management
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              Effective dental implant pain management starts before the discomfort does. Your dentist may prescribe
              medication or recommend over-the-counter options — take them exactly as directed.
            </p>
            <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-4 space-y-1">
              <li>Take pain relief before the local anaesthetic (freezing) wears off — don&apos;t wait for pain to build.</li>
              <li>Ibuprofen (Advil, Motrin) can help reduce both pain and inflammation — take it with food.</li>
              <li>If antibiotics were prescribed, finish the full course even once you feel better.</li>
              <li>Avoid aspirin, which can thin the blood and increase bleeding.</li>
            </ul>
            <p className="text-[#555574] leading-relaxed mb-8">
              Many patients find implant discomfort is more manageable than they expected. Everyone is different,
              though — if your pain feels out of proportion or is not easing, let us know.
            </p>

            <h2 id="eating" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              What to Eat After Dental Implant Surgery
            </h2>
            <p className="text-[#555574] leading-relaxed mb-6">
              Knowing what to eat after dental implant surgery protects the surgical site and supports tissue repair.
              Ease back into your normal diet gradually.
            </p>
            <div className="not-prose grid sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#F0F0FF] rounded-2xl p-5">
                <div className="font-bold text-[#002C29] mb-2 text-sm">Day 1 — Liquids</div>
                <p className="text-sm text-[#555574] leading-relaxed">Water, broth, smoothies, protein shakes, and cool soups. Avoid straws entirely.</p>
              </div>
              <div className="bg-[#F0F0FF] rounded-2xl p-5">
                <div className="font-bold text-[#002C29] mb-2 text-sm">Days 2–7 — Soft foods</div>
                <p className="text-sm text-[#555574] leading-relaxed">Yogurt, applesauce, mashed potatoes, scrambled eggs, oatmeal, soft pasta, avocado, and bananas.</p>
              </div>
              <div className="bg-[#F0F0FF] rounded-2xl p-5">
                <div className="font-bold text-[#002C29] mb-2 text-sm">Week 2+ — Reintroduce</div>
                <p className="text-sm text-[#555574] leading-relaxed">Softer cooked meats, soft bread, and cooked vegetables — returning to normal as comfort allows.</p>
              </div>
            </div>
            <p className="text-[#555574] leading-relaxed mb-3">During healing, try to avoid:</p>
            <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-8 space-y-1">
              <li>Hard, crunchy, or chewy foods (chips, nuts, raw carrots, steak)</li>
              <li>Spicy or acidic foods that can irritate the gum tissue</li>
              <li>Hot beverages for the first 24 hours</li>
              <li>Alcohol for at least 48 to 72 hours, or while taking prescribed medication</li>
              <li>Smoking or tobacco, which significantly impairs healing and raises implant failure risk</li>
            </ul>

            <h2 id="oral-hygiene" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Oral Hygiene and Dental Implant Post-Operative Care
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              Gentle, consistent cleaning is central to good dental implant post-operative care and helps prevent
              infection.
            </p>
            <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-8 space-y-1">
              <li><strong>First 24 hours:</strong> do not brush the implant site directly and avoid forceful rinsing.</li>
              <li><strong>After 24 hours:</strong> gently rinse with warm salt water (½ teaspoon of salt in 8&nbsp;oz of warm water) 3 to 4 times daily, especially after meals, and resume gentle brushing of your other teeth with a soft-bristled brush.</li>
              <li><strong>From day 3:</strong> you may very gently clean around the implant site with light strokes and continue salt-water rinses. If a chlorhexidine rinse was prescribed, use it as directed.</li>
              <li>Avoid alcohol-based mouthwashes early on, as they can irritate the surgical site.</li>
            </ul>

            <h2 id="activity" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Activity, Smoking, and Alcohol
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              Rest matters most in the first 24 to 48 hours. Avoid strenuous exercise, heavy lifting, and intense
              activity for at least 3 to 5 days, since exertion raises blood pressure and can increase bleeding and
              swelling. Most people return to desk work or light activity the next day, and resume workouts once their
              dentist gives the go-ahead.
            </p>
            <p className="text-[#555574] leading-relaxed mb-8">
              Smoking is one of the most significant risk factors for implant complications. Tobacco reduces blood flow
              to the gums, which impairs healing and the implant&apos;s ability to fuse with the bone. Avoid smoking or
              tobacco for at least two weeks — ideally longer — and avoid alcohol for 48 to 72 hours, or entirely while
              taking antibiotics or prescription pain medication.
            </p>

            <h2 id="follow-up" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Follow-Up Appointments and Dental Implant Care Tips
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              Follow-up visits are a key part of your dental implant care. At these appointments we check your healing,
              remove sutures if needed, and monitor the implant site. Typical reviews happen at 1 to 2 weeks, then
              around the 3-month and 6-month marks.
            </p>
            <p className="text-[#555574] leading-relaxed mb-8">
              A few simple dental implant care tips make recovery smoother: keep your follow-up appointments, report
              any concerns between visits rather than waiting, stay hydrated, and be patient with soft foods. It is
              always better to call than to wonder.
            </p>

            <h2 id="healing-timeline" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Dental Implant Healing Time: What to Expect
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              Understanding the dental implant healing time helps set realistic expectations:
            </p>
            <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-6 space-y-1">
              <li><strong>Days 1–3:</strong> peak swelling and discomfort — rest and follow your instructions closely.</li>
              <li><strong>Days 4–7:</strong> noticeable improvement in swelling and soreness.</li>
              <li><strong>Week 2:</strong> most patients feel close to normal and return to regular activities.</li>
              <li><strong>Months 3–6:</strong> osseointegration — the implant quietly fuses with the jawbone beneath the surface.</li>
              <li><strong>Months 4–6 (up to 12):</strong> placement of the abutment and final crown to complete your new tooth.</li>
            </ul>
            <p className="text-[#555574] leading-relaxed mb-8">
              Full integration varies from person to person depending on bone density, general health, and whether bone
              grafting was needed. Your <Link href="/services/dental-implants" className="text-[#0D9488] font-semibold hover:underline">dental implant treatment plan</Link>{" "}
              will outline the timeline for your specific case.
            </p>

            <h2 id="warning-signs" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Warning Signs: When to Contact the Clinic
            </h2>
            <WarningCallout>
              <p className="mb-2">Complications are uncommon, but contact our clinic promptly if you notice:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Severe, worsening pain that isn&apos;t controlled by medication</li>
                <li>A fever above 38&nbsp;°C (100.4&nbsp;°F)</li>
                <li>Excessive or uncontrolled bleeding</li>
                <li>Pus or discharge from the implant site</li>
                <li>An implant that feels loose or has shifted</li>
                <li>Numbness or tingling that does not resolve</li>
              </ul>
            </WarningCallout>

            <ArticleCTA
              body="If you have questions during your recovery, our team is here to help. You can also book a dental implant consultation in Vaughan with Dr. Mehdi Adibrad — conveniently located for patients near Toronto, Thornhill, Richmond Hill, and Woodbridge."
            />

            <h2 id="faq" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-5">
              Frequently Asked Questions
            </h2>
            <ArticleFAQ faqs={faqs} />

            <AuthorBox />
            <EducationalNote />
          </div>
        </div>
      </section>

      <RelatedArticles
        items={[
          {
            href: "/blog/dental-implant-procedure-step-by-step",
            category: "Dental Implants",
            readTime: "10 min read",
            title: "Dental Implant Procedure Step by Step",
            excerpt: "Every stage of the implant process — from consultation and surgery to osseointegration and your final crown.",
          },
          {
            href: "/blog/why-dental-implants-are-better",
            category: "Dental Implants",
            readTime: "8 min read",
            title: "Why Dental Implants Are Better: Implants vs Dentures and Bridges",
            excerpt: "How implants compare with dentures and bridges on stability, bone health, longevity, and cost.",
          },
        ]}
      />
    </>
  );
}
