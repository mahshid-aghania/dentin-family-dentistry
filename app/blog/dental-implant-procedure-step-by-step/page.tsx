import Image from "next/image";
import Link from "next/link";
import {
  ArticleHeader,
  TableOfContents,
  ArticleCTA,
  AuthorBox,
  RelatedArticles,
  EducationalNote,
  ArticleSchema,
} from "../../components/ArticleUI";
import ArticleFAQ, { type FAQ } from "../../components/ArticleFAQ";

const SLUG = "dental-implant-procedure-step-by-step";
const TITLE = "Dental Implant Procedure Step by Step: Process, Stages and Timeline";
const DESCRIPTION =
  "A step-by-step guide to the dental implant procedure in Vaughan — consultation, surgery, osseointegration, crown, and timeline — from Dr. Mehdi Adibrad.";
const CATEGORY = "Dental Implants";
const DATE = "August 22, 2026";
const READ_TIME = "10 min read";
const IMAGE = "/images/dental-implant-procedure-steps.png";

export const metadata = {
  title: { absolute: "Dental Implant Procedure Step by Step: Stages & Timeline" },
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    type: "article",
    url: `/blog/${SLUG}`,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: IMAGE, alt: "3D model showing a dental implant placed in the jaw among natural teeth" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Implant Procedure Step by Step: Stages & Timeline",
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

const faqs: FAQ[] = [
  {
    question: "How long does a dental implant take from start to finish?",
    answer:
      "For a straightforward case, the dental implant timeline is usually about 5 to 8 months, most of which is quiet healing time rather than appointments. Cases that need bone grafting can take roughly 9 to 14 months. Some patients qualify for immediate or same-day approaches, while others need staged treatment — your plan depends on your individual situation.",
  },
  {
    question: "What is osseointegration?",
    answer:
      "Osseointegration is the natural process where bone cells grow onto and around the titanium implant, fusing it firmly to the jaw. This is what gives a dental implant its stability. It happens silently beneath the gum over roughly 3 to 6 months and is influenced by bone density, general health, and habits such as smoking.",
  },
  {
    question: "What should I expect during dental implant surgery?",
    answer:
      "The area is fully numbed with local anaesthetic, and sedation is available for anxious patients. The implant is placed into the jawbone, and the gum is closed over or around it. Most patients say implant surgery is more comfortable than they expected — you should feel pressure but not pain. Placement typically takes 1 to 2 hours depending on complexity.",
  },
  {
    question: "Is the dental implant procedure painful?",
    answer:
      "The procedure itself is done under local anaesthesia, so you should not feel pain during placement. Afterward, mild to moderate soreness for a few days is normal and is usually well managed with recommended pain relief. Most people return to normal activities within 1 to 3 days.",
  },
  {
    question: "Do I need a consultation before getting an implant?",
    answer:
      "Yes. A dental implant consultation includes an exam, imaging (often a 3D CBCT scan), and a review of your medical history so your dentist can confirm whether implants suit you and design a treatment plan. You can book a dental implant consultation in Vaughan with Dr. Mehdi Adibrad to get started.",
  },
];

const tocItems = [
  { id: "how-implants-work", label: "How dental implants work" },
  { id: "step-1", label: "1. Consultation & imaging" },
  { id: "step-2", label: "2. Extraction / preparation" },
  { id: "step-3", label: "3. Bone grafting (if needed)" },
  { id: "step-4", label: "4. Implant placement" },
  { id: "step-5", label: "5. Osseointegration" },
  { id: "step-6", label: "6. Abutment placement" },
  { id: "step-7", label: "7. Scan or impressions" },
  { id: "step-8", label: "8. Crown & final placement" },
  { id: "step-9", label: "9. Long-term care" },
  { id: "timeline", label: "Full timeline" },
  { id: "faq", label: "FAQs" },
];

function Step({
  id,
  n,
  title,
  timeline,
  children,
}: {
  id: string;
  n: number;
  title: string;
  timeline: string;
  children: React.ReactNode;
}) {
  return (
    <div className="scroll-mt-24 mb-8" id={id}>
      <div className="flex items-center gap-3 mb-3">
        <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0D9488] text-white font-bold text-sm shrink-0">
          {n}
        </span>
        <h2 className="text-2xl font-bold text-[#002C29] m-0">{title}</h2>
      </div>
      {children}
      <p className="not-prose text-xs font-semibold text-[#0D9488] bg-[#F0FBF9] inline-block px-3 py-1 rounded-full mt-1">
        Typical timing: {timeline}
      </p>
    </div>
  );
}

const timelineRows = [
  ["Consultation & imaging", "Week 1"],
  ["Preparatory procedures (if needed)", "Weeks 2–8 (extraction) or up to 6 months (grafting)"],
  ["Implant placement surgery", "Day of surgery"],
  ["Osseointegration (healing)", "3–6 months"],
  ["Abutment placement", "1 visit + 2–4 weeks healing"],
  ["Scan/impressions & crown fabrication", "2–3 weeks"],
  ["Final crown placement", "Final appointment"],
];

export default function ImplantStepByStepPage() {
  return (
    <>
      <ArticleSchema
        slug={SLUG}
        headline={TITLE}
        description={DESCRIPTION}
        image={IMAGE}
        datePublished="2026-08-22"
        dateModified="2026-08-22"
        breadcrumbTitle="Dental Implant Procedure Step by Step"
        faqs={faqs}
      />

      <ArticleHeader
        title={TITLE}
        breadcrumbTitle="Implant Procedure Step by Step"
        category={CATEGORY}
        date={DATE}
        readTime={READ_TIME}
      />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-sm bg-[#e8e8f0]">
            <Image
              src={IMAGE}
              alt="Educational 3D model of a dental implant post placed in the jaw beside natural teeth"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain bg-white p-4"
              priority
            />
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-[#555574] text-lg leading-relaxed mb-6">
              If you&apos;re considering an implant, one of the most common questions is simple: what actually happens
              during the process? The good news is that the dental implant procedure is well-established and
              predictable. This step-by-step guide walks you through the full dental implant process — from your first
              consultation to the day you leave with your final tooth.
            </p>
            <p className="text-[#555574] leading-relaxed mb-8">
              Understanding how dental implants work and the stages of a dental implant can ease a lot of anxiety.
              Remember that treatment time varies from person to person: some patients qualify for immediate or
              same-day approaches, while others need staged treatment and additional healing.
            </p>

            <TableOfContents items={tocItems} />

            <h2 id="how-implants-work" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              How Dental Implants Work
            </h2>
            <p className="text-[#555574] leading-relaxed mb-8">
              A dental implant replaces a missing tooth in two parts: a titanium post that acts as an artificial root,
              and a custom crown on top. The post is placed into the jawbone, where it gradually fuses with the bone to
              form a stable foundation. Because a dental implant is a multi-stage process that unfolds over several
              months, your body has time to heal and integrate the implant securely before the final tooth is attached.
            </p>

            <Step id="step-1" n={1} title="Consultation, Examination and Imaging" timeline="1 appointment, ~45–90 minutes">
              <p className="text-[#555574] leading-relaxed mb-3">
                The journey begins with a dental implant consultation. This appointment is about understanding your
                situation and confirming whether implants are a good fit. It typically includes:
              </p>
              <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-3 space-y-1">
                <li>A complete dental exam with X-rays and, in most cases, a 3D CBCT scan of your jaw</li>
                <li>Assessment of your bone density and volume, which are essential for support</li>
                <li>Evaluation of gum health — active gum disease is treated before placement</li>
                <li>Review of your medical history and any medications that affect healing</li>
                <li>A discussion of your goals and all available treatment options</li>
              </ul>
              <p className="text-[#555574] leading-relaxed">
                You&apos;ll receive a personalized plan outlining the steps, timeline, and cost for your case.
              </p>
            </Step>

            <Step id="step-2" n={2} title="Tooth Extraction or Preparatory Procedures" timeline="Extractions heal in ~4–8 weeks">
              <p className="text-[#555574] leading-relaxed mb-3">
                Not everyone needs preparatory work, but some do. If a damaged or failing tooth is still present, it
                must be removed before (or sometimes at the same time as) implant placement. In select cases, an
                immediate implant can be placed right after extraction — your dentist will advise whether that&apos;s
                appropriate for you.
              </p>
              <p className="text-[#555574] leading-relaxed">
                Active periodontal (gum) disease is also treated and controlled first, because placing an implant in an
                unhealthy environment increases the risk of failure.
              </p>
            </Step>

            <Step id="step-3" n={3} title="Bone Grafting When Clinically Necessary" timeline="~4–6 months to mature (when needed)">
              <p className="text-[#555574] leading-relaxed mb-3">
                If your jawbone lacks enough density or volume, a bone graft may be recommended to build up the area.
                Bone grafting is common and highly successful, and it adds healing time to the overall process — usually
                a few months for the graft to mature before the implant is placed.
              </p>
              <p className="text-[#555574] leading-relaxed">
                Grafting and related procedures are part of our{" "}
                <Link href="/services/oral-surgery" className="text-[#0D9488] font-semibold hover:underline">oral surgery services</Link>{" "}
                and are planned carefully around your treatment.
              </p>
            </Step>

            <Step id="step-4" n={4} title="Surgical Placement of the Implant" timeline="1–2 hours depending on complexity">
              <p className="text-[#555574] leading-relaxed mb-3">
                This is the central step, and it&apos;s helpful to know what to expect during implant surgery. The area
                is fully numbed with local anaesthetic, and sedation options are available for anxious patients. The
                dentist makes a small opening in the gum, prepares a precise channel in the bone, and gently places the
                titanium implant post. The gum is then closed over or around the implant.
              </p>
              <p className="text-[#555574] leading-relaxed">
                You should feel pressure and some vibration, but not pain. Many patients say implant surgery was more
                comfortable than they expected — often comparing it to a routine extraction.
              </p>
            </Step>

            <Step id="step-5" n={5} title="Osseointegration and Healing" timeline="3–6 months">
              <p className="text-[#555574] leading-relaxed mb-3">
                After placement, a remarkable process called osseointegration begins. Bone cells grow onto and around
                the surface of the implant, fusing it firmly to the jaw. This osseointegration of the dental implant is
                what gives it exceptional stability.
              </p>
              <ul className="list-disc pl-6 text-[#555574] leading-relaxed">
                <li>You won&apos;t feel it happening — it&apos;s a silent, internal process</li>
                <li>It typically takes 3 to 6 months, depending on your bone and general health</li>
                <li>Smoking and some medical conditions can slow it down</li>
                <li>A temporary tooth can often be worn so you&apos;re not left with a gap</li>
              </ul>
            </Step>

            <Step id="step-6" n={6} title="Abutment Placement" timeline="1 short visit + 2–4 weeks gum healing">
              <p className="text-[#555574] leading-relaxed mb-3">
                Once osseointegration is confirmed, a small connector called an abutment is attached to the top of the
                implant. It sits just above the gumline and forms the foundation for your crown. If the gum has healed
                over the implant, a minor procedure under local anaesthetic exposes the top first.
              </p>
              <p className="text-[#555574] leading-relaxed">
                In some cases the abutment is placed at the same time as the implant (a one-stage approach). Your
                dentist will determine which method suits you.
              </p>
            </Step>

            <Step id="step-7" n={7} title="Digital Scan or Impressions" timeline="1 appointment">
              <p className="text-[#555574] leading-relaxed">
                With the abutment in place and gums healed, your dentist takes either traditional impressions (moulds)
                or a digital scan using an intraoral scanner — a fast, comfortable, and highly accurate method. These
                records capture the exact shape and bite needed to craft a crown that fits and looks natural.
              </p>
            </Step>

            <Step id="step-8" n={8} title="Crown Fabrication and Final Placement" timeline="2–3 weeks fabrication + final visit">
              <p className="text-[#555574] leading-relaxed mb-3">
                Your records are sent to a dental laboratory, where a technician crafts your crown to match the colour,
                shape, and size of your surrounding teeth. Fabrication usually takes 2 to 3 weeks.
              </p>
              <p className="text-[#555574] leading-relaxed">
                At the final appointment, the crown is secured to the abutment with a small screw or dental cement. Your
                dentist checks the fit, shape, colour, and bite, makes any adjustments, and completes your new tooth.
                For most patients, this moment brings a real sense of completion.
              </p>
            </Step>

            <Step id="step-9" n={9} title="Long-Term Implant Care" timeline="Ongoing, for the life of the implant">
              <p className="text-[#555574] leading-relaxed mb-3">
                Caring for an implant is straightforward and much like caring for natural teeth:
              </p>
              <ul className="list-disc pl-6 text-[#555574] leading-relaxed">
                <li>Brush twice daily with a soft-bristled toothbrush</li>
                <li>Floss daily — implant-specific floss or a water flosser works well</li>
                <li>Attend regular checkups and professional cleanings</li>
                <li>Avoid biting very hard objects like ice or pen caps</li>
              </ul>
            </Step>

            <h2 id="timeline" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Full Dental Implant Timeline
            </h2>
            <p className="text-[#555574] leading-relaxed mb-5">
              Here&apos;s how the stages of a dental implant typically fit together. Remember, most of this time is
              simply healing while you go about your daily life.
            </p>
            <div className="not-prose overflow-x-auto mb-4">
              <table className="w-full table-fixed border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#002C29] text-white">
                    <th className="w-1/2 text-left font-semibold p-3 rounded-tl-xl align-top break-words">Stage</th>
                    <th className="w-1/2 text-left font-semibold p-3 rounded-tr-xl align-top break-words">Typical timing</th>
                  </tr>
                </thead>
                <tbody>
                  {timelineRows.map(([stage, timing], i) => (
                    <tr key={stage} className={i % 2 === 0 ? "bg-[#F8F8FF]" : "bg-white"}>
                      <th scope="row" className="text-left font-semibold text-[#002C29] p-3 align-top break-words">{stage}</th>
                      <td className="p-3 align-top text-[#555574] break-words">{timing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[#555574] leading-relaxed mb-8">
              A straightforward case often takes about 5 to 8 months in total, while cases needing bone grafting may
              take 9 to 14 months. How long a dental implant takes for you depends on your specific plan — which is
              exactly what your consultation is designed to clarify.
            </p>

            <ArticleCTA
              body="Ready to find out what your treatment plan and timeline would look like? Book a dental implant consultation in Vaughan with Dr. Mehdi Adibrad — welcoming patients from across the north Toronto area, including Thornhill, Richmond Hill, and Woodbridge."
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
            href: "/blog/why-dental-implants-are-better",
            category: "Dental Implants",
            readTime: "8 min read",
            title: "Why Dental Implants Are Better: Implants vs Dentures and Bridges",
            excerpt: "How implants compare with dentures and bridges on stability, bone health, longevity, and cost.",
          },
          {
            href: "/blog/dental-implant-post-operative-instructions",
            category: "Dental Implants",
            readTime: "9 min read",
            title: "Dental Implant Post-Operative Instructions",
            excerpt: "A practical recovery and aftercare guide for the days and weeks after implant surgery.",
          },
        ]}
      />
    </>
  );
}
