import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, PhoneCall, Info } from "lucide-react";
import {
  ArticleHeader,
  TableOfContents,
  ArticleCTA,
  AuthorBox,
  RelatedArticles,
  EducationalNote,
  ArticleSchema,
  PUBLISHER,
} from "../../components/ArticleUI";
import ArticleFAQ, { type FAQ } from "../../components/ArticleFAQ";

const SLUG = "dental-implant-post-operative-instructions";
const TITLE = "Dental Implant Post-Operative Instructions: A Complete Recovery Guide";
const DESCRIPTION =
  "Dental implant post-operative instructions from Dentin Family Dentistry in Vaughan: manage bleeding, swelling and pain, eating, hygiene and warning signs.";
const CATEGORY = "Dental Implants";
const DATE = "August 22, 2026";
const LAST_REVIEWED = "August 22, 2026";
const READ_TIME = "9 min read";
const IMAGE = "/images/dental-implant-recovery-aftercare.jpg";

export const metadata = {
  title: { absolute: "Dental Implant Post-Operative Instructions | Vaughan" },
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    type: "article",
    url: `/blog/${SLUG}`,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: IMAGE, alt: "Patient resting comfortably during dental implant recovery at a Vaughan dental clinic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Implant Post-Operative Instructions | Vaughan",
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

const faqs: FAQ[] = [
  {
    question: "How long does dental implant recovery take?",
    answer:
      "Early soft-tissue soreness and swelling often ease over the first several days to a couple of weeks, but this varies from person to person. Bone healing and osseointegration take longer and happen beneath the surface. Your clinician will confirm the timeline that applies to your case.",
  },
  {
    question: "When can I eat normally after implant surgery?",
    answer:
      "Start with soft, nourishing foods and reintroduce firmer textures gradually as comfort allows, chewing away from the surgical side. There is no single date by which everyone returns to a normal diet — follow your comfort and any specific restrictions you were given, especially after bone grafting or same-day restorations.",
  },
  {
    question: "How much swelling is normal after a dental implant?",
    answer:
      "Some swelling is common in the first days, but there is no fixed amount that counts as normal. Swelling that increases after it had started to settle, spreads in the face or neck, or comes with fever or feeling unwell should be assessed rather than managed at home.",
  },
  {
    question: "When can I brush the implant area?",
    answer:
      "Avoid brushing directly on the surgical site for the first day and be gentle around it afterward, following your clinician's instructions. The rest of your teeth can usually be brushed gently with a soft-bristled brush.",
  },
  {
    question: "Can I exercise after implant surgery?",
    answer:
      "Keep activity light at first and ease back into exercise gradually, since exertion can increase bleeding and swelling. If you received sedation, avoid driving and strenuous activity until it has fully worn off and you have been cleared.",
  },
  {
    question: "Does feeling comfortable mean the implant has healed completely?",
    answer:
      "No. Comfort and osseointegration are different things — an implant can feel fine while bone integration is still underway beneath the gum. Only your clinician can confirm the implant is ready for its final restoration.",
  },
  {
    question: "When should I contact my dentist after implant surgery?",
    answer:
      "Contact your dental team any time symptoms are worsening, bleeding won't settle, you notice signs of infection, a component feels loose, or you're simply concerned. For difficulty breathing or swallowing, rapidly spreading facial or neck swelling, or a severe allergic reaction, seek emergency care and call 911.",
  },
];

const tocItems = [
  { id: "what-to-expect", label: "What to expect" },
  { id: "first-24-hours", label: "Your first 24 hours" },
  { id: "bleeding", label: "Managing bleeding" },
  { id: "swelling", label: "Swelling & bruising" },
  { id: "pain", label: "Pain management" },
  { id: "eating", label: "What to eat" },
  { id: "oral-hygiene", label: "Oral hygiene & rinsing" },
  { id: "activity", label: "Activity & returning to work" },
  { id: "smoking", label: "Smoking, vaping & alcohol" },
  { id: "sutures", label: "Sutures & follow-up" },
  { id: "healing-timeline", label: "Healing timeline" },
  { id: "warning-signs", label: "Warning signs" },
  { id: "faq", label: "FAQs" },
  { id: "references", label: "References" },
];

const references = [
  {
    id: 1,
    text: "Canadian Dental Association. Care After Minor Oral Surgery.",
    url: "https://www.cda-adc.ca/en/oral_health/talk/procedures/oral_surgery/",
    label: "cda-adc.ca",
  },
  {
    id: 2,
    text: "Canadian Dental Association. Dental Implants.",
    url: "https://www.cda-adc.ca/en/oral_health/procedures/dental_implants/",
    label: "cda-adc.ca",
  },
  {
    id: 3,
    text: "Efficacy of chlorhexidine rinses after periodontal or implant surgery: a systematic review. PubMed.",
    url: "https://pubmed.ncbi.nlm.nih.gov/30535817/",
    label: "pubmed.ncbi.nlm.nih.gov",
  },
  {
    id: 4,
    text: "Efficacy of chlorhexidine after oral surgery procedures: a systematic review and meta-analysis. Antibiotics 2023;12(10):1552.",
    url: "https://www.mdpi.com/2079-6382/12/10/1552",
    label: "mdpi.com",
  },
  {
    id: 5,
    text: "Royal College of Surgeons of England, Faculty of Dental Surgery. Clinical Guidelines.",
    url: "https://www.rcseng.ac.uk/dental-faculties/fds/publications-guidelines/clinical-guidelines/",
    label: "rcseng.ac.uk",
  },
  {
    id: 6,
    text: "Cochrane Library. Antibiotics at dental implant placement to prevent complications.",
    url: "https://www.cochranelibrary.com/",
    label: "cochranelibrary.com",
  },
  {
    id: 7,
    text: "Health Canada. Smoking and tobacco.",
    url: "https://www.canada.ca/en/health-canada/services/smoking-tobacco.html",
    label: "canada.ca",
  },
];

function Cite({ ids }: { ids: number[] }) {
  return (
    <sup className="whitespace-nowrap">
      {ids.map((n, i) => (
        <span key={n}>
          <a href={`#ref-${n}`} className="text-[#0D9488] font-semibold no-underline hover:underline">
            [{n}]
          </a>
          {i < ids.length - 1 ? <span className="text-[#0D9488]" /> : null}
        </span>
      ))}
    </sup>
  );
}

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
              alt="Patient resting comfortably during dental implant recovery at a Vaughan dental clinic"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-[#555574] text-lg leading-relaxed mb-6">
              The days after implant surgery are when careful aftercare matters most. How you protect the surgical
              site, manage discomfort, eat, and keep the area clean can all influence how comfortable your recovery
              feels. These <strong>dental implant post-operative instructions</strong> explain what commonly happens
              after surgery and how to care for yourself — while making clear that your own recovery may look different
              from anyone else&apos;s.
            </p>

            {/* Visible medical disclaimer — placed immediately after the introduction */}
            <aside role="note" className="not-prose border-l-4 border-[#0D9488] bg-[#F0FBF9] rounded-r-2xl p-5 mb-10">
              <div className="flex items-start gap-2.5">
                <Info size={20} className="text-[#0D9488] shrink-0 mt-0.5" />
                <p className="text-sm text-[#0f5f58] leading-relaxed m-0">
                  <strong>Important:</strong> This article provides general educational information and does not replace
                  the personalized instructions given by your treating dentist or surgeon. Your procedure and medical
                  history may require different care. If your clinician&apos;s instructions differ from this guide,
                  follow your clinician&apos;s instructions.
                </p>
              </div>
            </aside>

            <TableOfContents items={tocItems} />

            <h2 id="what-to-expect" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              What to Expect After Dental Implant Surgery
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              Some discomfort and minor swelling are common parts of early healing, but their severity and duration
              vary considerably from person to person.<Cite ids={[1]} /> Factors such as the number of implants placed,
              whether bone grafting or a sinus procedure was performed, whether a temporary restoration was fitted the
              same day, and your general health all shape how recovery feels.
            </p>
            <p className="text-[#555574] leading-relaxed mb-3">Symptoms that can occur include:</p>
            <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-4 space-y-1">
              <li>Mild bleeding or blood-tinged saliva</li>
              <li>Swelling of the gum, cheek, or jaw</li>
              <li>Bruising of the skin near the surgical area</li>
              <li>Tenderness or discomfort around the site</li>
              <li>Temporary difficulty chewing or opening the mouth fully</li>
            </ul>
            <p className="text-[#555574] leading-relaxed mb-8">
              For many people these ease over the first several days, but that is a general pattern rather than a rule.
              If symptoms are worsening rather than improving, that is a reason to contact your dental team.<Cite ids={[1]} />
            </p>

            <h2 id="first-24-hours" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Your First 24 Hours After Implant Surgery
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              The first day is largely about protecting the blood clot that forms over the site. Use this as a quick
              checklist, and always defer to any written instructions you were given.
            </p>
            <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-8 space-y-1.5">
              <li><strong>Gauze:</strong> bite gently but firmly on the gauze pad as directed to help control oozing.</li>
              <li><strong>Rest:</strong> keep the day light and avoid overexertion.</li>
              <li><strong>Head elevation:</strong> prop your head up, including when lying down.</li>
              <li><strong>Rinsing:</strong> avoid vigorous rinsing for the first 24 hours.</li>
              <li><strong>Spitting:</strong> avoid forceful spitting, which can disturb the clot.</li>
              <li><strong>The surgical site:</strong> don&apos;t probe it with your tongue, fingers, or a toothbrush.</li>
              <li><strong>Food and hydration:</strong> choose soft, cool foods and sip fluids to stay hydrated.</li>
              <li><strong>Straws:</strong> avoid straws — suction can dislodge the clot.</li>
              <li><strong>Hot foods and drinks:</strong> avoid these initially, as heat can aggravate the area.</li>
              <li><strong>Physical activity:</strong> keep activity gentle.</li>
              <li><strong>Driving after sedation:</strong> if you received sedation, do not drive; arrange for someone to take you home and stay with you as advised.</li>
              <li><strong>Individualized instructions:</strong> where your clinician&apos;s directions differ from this list, follow theirs.</li>
            </ul>

            <h2 id="bleeding" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Managing Bleeding
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              A small amount of oozing or pink-tinged saliva during the first day is common.<Cite ids={[1]} /> Firm,
              steady pressure on fresh gauze for the period your clinician recommends is the usual first step. Avoid the
              behaviours that disturb the site — forceful rinsing, spitting, straws, and poking the area.
            </p>
            <p className="text-[#555574] leading-relaxed mb-4">
              Bleeding that is heavy, does not settle with gauze pressure, or restarts significantly is a reason to
              contact the dental office promptly.
            </p>
            <p className="text-[#555574] leading-relaxed mb-8">
              <strong>If you take an anticoagulant or antiplatelet medication</strong> (a &ldquo;blood thinner&rdquo;),
              you may notice more oozing. Do <strong>not</strong> stop or change any prescribed medication on your own —
              tell your dental team about your medications and follow the plan agreed with your prescriber and dentist.
            </p>

            <h2 id="swelling" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Managing Swelling and Bruising
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              Swelling and some bruising can appear in the first couple of days and vary widely between patients.<Cite ids={[1]} />{" "}
              Where a cold compress is advised, apply it to the outside of the face in comfortable intervals, keeping a
              cloth between the ice and your skin to protect it, and keep your head elevated.
            </p>
            <p className="text-[#555574] leading-relaxed mb-8">
              There is no single &ldquo;normal&rdquo; amount of swelling. Swelling that is increasing after it had
              started to settle, is accompanied by fever or feeling unwell, or is spreading in the face or neck should
              be assessed rather than managed at home.
            </p>

            <h2 id="pain" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Dental Implant Pain Management
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              Follow the specific instructions your clinician gave you, and take only medications that are safe for you
              personally.
            </p>
            <p className="text-[#555574] leading-relaxed mb-4">
              Take medication only as directed by your treating dental professional. Before using an over-the-counter
              pain reliever, confirm that it is appropriate for you — particularly if you have allergies,
              gastrointestinal disease, kidney or liver disease, a bleeding condition, are pregnant, or take
              anticoagulants or other medications. Avoid taking two products that contain the same active ingredient,
              and follow all precautions on prescription medication.
            </p>
            <p className="text-[#555574] leading-relaxed mb-4">
              Discomfort that steadily worsens instead of improving, or that is not controlled by what your clinician
              recommended, should be assessed.
            </p>
            <p className="text-[#555574] leading-relaxed mb-8">
              <strong>About antibiotics:</strong> antibiotics are not automatically appropriate for every implant
              patient, and current guidance emphasizes using them only when genuinely needed.<Cite ids={[6, 7]} /> Take
              antibiotics only if they are prescribed to you, and follow the prescriber&apos;s directions. If you
              suspect a reaction to any medication, seek professional advice promptly. Difficulty breathing, or swelling
              of the face or throat, can signal a severe allergic reaction and requires emergency care.
            </p>

            <h2 id="eating" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              What to Eat After Dental Implant Surgery
            </h2>
            <p className="text-[#555574] leading-relaxed mb-5">
              Good nutrition supports healing, so the goal is soft, nourishing food rather than a restrictive liquid
              diet.
            </p>
            <div className="not-prose grid sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#F0F0FF] rounded-2xl p-5">
                <div className="font-bold text-[#002C29] mb-2 text-sm">First 24 hours</div>
                <p className="text-sm text-[#555574] leading-relaxed">Soft, cool or lukewarm foods and plenty of fluids — spooned smoothies, yogurt, blended soups that aren&apos;t hot, and apple sauce.</p>
              </div>
              <div className="bg-[#F0F0FF] rounded-2xl p-5">
                <div className="font-bold text-[#002C29] mb-2 text-sm">First several days</div>
                <p className="text-sm text-[#555574] leading-relaxed">Soft foods needing little chewing — scrambled eggs, mashed potato, oatmeal, soft cooked fish, well-cooked pasta, avocado, bananas.</p>
              </div>
              <div className="bg-[#F0F0FF] rounded-2xl p-5">
                <div className="font-bold text-[#002C29] mb-2 text-sm">Gradual return</div>
                <p className="text-sm text-[#555574] leading-relaxed">Reintroduce firmer textures as comfort allows, on a timeline that suits you rather than a fixed date.</p>
              </div>
            </div>
            <p className="text-[#555574] leading-relaxed mb-8">
              Try to chew away from the surgical side, and avoid hard, crunchy, chewy, spicy, or very hot foods while
              the area is tender. If you had{" "}
              <Link href="/services/oral-surgery" className="text-[#0D9488] font-semibold hover:underline">bone grafting</Link>,
              an immediate-load (same-day) restoration, or full-arch treatment, your dietary restrictions may be
              stricter and last longer — follow the specific advice you were given.
            </p>

            <h2 id="oral-hygiene" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Oral Hygiene and Rinsing
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              Keeping plaque under control supports healing, but the healing surgical site needs a gentler approach than
              the rest of your mouth.<Cite ids={[1]} />
            </p>
            <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-4 space-y-1.5">
              <li><strong>First 24 hours:</strong> avoid brushing directly on the surgical site and avoid forceful rinsing.</li>
              <li><strong>After the first day:</strong> you can usually resume gentle brushing of the other teeth with a soft brush, taking care around the site.</li>
              <li><strong>Salt-water rinsing:</strong> gentle warm salt-water rinses are commonly advised, but follow the timing and technique your clinician recommends rather than a generic rule.</li>
              <li><strong>Chlorhexidine:</strong> use a chlorhexidine mouth rinse only if it is recommended or prescribed to you. Some studies suggest it may reduce certain complications after oral and implant surgery, though the evidence has limitations and it can cause temporary tooth staining and taste changes.<Cite ids={[3, 4]} /></li>
              <li><strong>Avoid vigorous rinsing</strong> early on, which can disturb the clot.</li>
            </ul>
            <p className="text-[#555574] leading-relaxed mb-8">
              It helps to separate two different things: care of the healing surgical site in the early weeks, and
              long-term implant maintenance — daily cleaning around the implant plus regular professional check-ups —
              once healing is complete.<Cite ids={[2]} />
            </p>

            <h2 id="activity" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Physical Activity and Returning to Work
            </h2>
            <p className="text-[#555574] leading-relaxed mb-8">
              Rest supports early healing. Strenuous exercise, heavy lifting, and repeated bending can increase bleeding
              and swelling, so ease back into activity gradually. When you can return to work depends on your job, the
              extent of your surgery, and how you feel — some people manage light or desk-based work quickly, while more
              physical roles or more involved surgery may need longer. If you received sedation, do not drive or operate
              machinery until it has fully worn off and you have been cleared to do so.
            </p>

            <h2 id="smoking" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Smoking, Vaping, Cannabis, and Alcohol
            </h2>
            <p className="text-[#555574] leading-relaxed mb-8">
              Smoking is associated with poorer wound healing and is a recognized risk factor for oral-health and
              healing problems.<Cite ids={[7]} /> Vaping, smoking cannabis, and drinking alcohol may also affect
              bleeding, dry the mouth, interact with medications, or interfere with healing, and can be relevant to how
              well an implant integrates over time. Avoiding these during recovery — and reducing smoking more generally
              — supports healing.<Cite ids={[1, 7]} /> If you&apos;d like help to stop smoking, your dental or medical
              team can point you to support.
            </p>

            <h2 id="sutures" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Sutures and Follow-Up Appointments
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              You may have <strong>absorbable sutures</strong>, which dissolve on their own, or{" "}
              <strong>non-absorbable sutures</strong>, which are removed at a follow-up visit. Either way, do not pull,
              cut, or adjust your own sutures. If a suture feels loose, catches, or becomes uncomfortable, contact the
              office rather than dealing with it yourself.
            </p>
            <p className="text-[#555574] leading-relaxed mb-8">
              Follow-up schedules vary depending on the procedure and the clinician&apos;s plan, so attend the
              appointments your dental team recommends — these visits are how healing is checked and any issues are
              caught early.
            </p>

            <h2 id="healing-timeline" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Dental Implant Recovery and Healing Timeline
            </h2>
            <p className="text-[#555574] leading-relaxed mb-5">
              The stages below are <strong>general</strong> and are not a personal schedule. Two people who had the same
              procedure can heal at different rates.
            </p>
            <div className="not-prose overflow-x-auto mb-4">
              <table className="w-full table-fixed border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#002C29] text-white">
                    <th className="w-[28%] text-left font-semibold p-3 rounded-tl-xl align-top break-words">General stage</th>
                    <th className="w-[38%] text-left font-semibold p-3 align-top break-words">What may occur</th>
                    <th className="w-[34%] text-left font-semibold p-3 rounded-tr-xl align-top break-words">Patient-care priority</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["First 24 hours", "Blood-tinged saliva; swelling begins; freezing wears off", "Protect the clot, use gauze as directed, rest, hydrate"],
                    ["Days 2–3", "Swelling/bruising may be most noticeable for some", "Cold compress if advised, elevation, soft foods"],
                    ["Rest of week 1", "Discomfort and swelling often begin to ease", "Gentle hygiene, continue soft diet"],
                    ["Early tissue healing (first weeks)", "Gum tissue closes; sutures dissolve or are removed", "Attend review; avoid trauma to the site"],
                    ["Osseointegration (varies)", "Bone integrates with the implant — an internal process you don’t feel", "Follow maintenance; don’t judge healing by comfort"],
                    ["Restorative phase", "Abutment and final restoration placed once integration is confirmed", "Attend restorative appointments"],
                  ].map(([stage, occur, priority], i) => (
                    <tr key={stage} className={i % 2 === 0 ? "bg-[#F8F8FF]" : "bg-white"}>
                      <th scope="row" className="text-left font-semibold text-[#002C29] p-3 align-top break-words">{stage}</th>
                      <td className="p-3 align-top text-[#555574] break-words">{occur}</td>
                      <td className="p-3 align-top text-[#555574] break-words">{priority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[#555574] leading-relaxed mb-8">
              Importantly, <strong>feeling comfortable does not mean osseointegration is complete.</strong> Early
              soft-tissue recovery, everyday comfort, bone healing, and final restoration are separate milestones, and
              only your clinician can confirm when the implant is ready for its{" "}
              <Link href="/services/restorative-dentistry" className="text-[#0D9488] font-semibold hover:underline">final restoration</Link>.<Cite ids={[2]} />{" "}
              For a fuller walkthrough of each stage, see our{" "}
              <Link href="/blog/dental-implant-procedure-step-by-step" className="text-[#0D9488] font-semibold hover:underline">step-by-step guide to the dental implant procedure</Link>.
            </p>

            <h2 id="warning-signs" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-5">
              Warning Signs: When to Contact the Dental Office
            </h2>

            {/* Tier 1 — contact office promptly */}
            <aside role="note" className="not-prose border-l-4 border-amber-400 bg-amber-50 rounded-r-2xl p-6 mb-5">
              <div className="flex items-center gap-2 mb-3">
                <PhoneCall size={20} className="text-amber-600 shrink-0" />
                <h3 className="font-bold text-amber-800 m-0">Contact the dental office promptly</h3>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm text-amber-900/90 leading-relaxed">
                <li>Pain or swelling that is worsening rather than improving</li>
                <li>Bleeding that persists despite following your instructions</li>
                <li>Fever or other symptoms of infection</li>
                <li>Pus, unpleasant discharge, or a worsening bad taste</li>
                <li>A loose implant component or temporary restoration</li>
                <li>The wound opening up</li>
                <li>Altered sensation (numbness or tingling) that persists or is unexpected</li>
                <li>Being unable to eat or drink adequately</li>
                <li>Side effects you think may be from a medication</li>
              </ul>
              <p className="text-sm text-amber-900/90 leading-relaxed mt-3 mb-0">
                You can reach our Vaughan clinic at{" "}
                <a href={PUBLISHER.phoneHref} className="font-semibold underline">{PUBLISHER.phoneDisplay}</a>{" "}
                or through our{" "}
                <Link href="/contact" className="font-semibold underline">contact page</Link>.
              </p>
            </aside>

            {/* Tier 2 — emergency */}
            <aside role="note" className="not-prose border-l-4 border-red-500 bg-red-50 rounded-r-2xl p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle size={20} className="text-red-600 shrink-0" />
                <h3 className="font-bold text-red-800 m-0">Seek urgent or emergency medical care</h3>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm text-red-900/90 leading-relaxed">
                <li>Difficulty breathing</li>
                <li>Difficulty swallowing</li>
                <li>Rapidly increasing swelling of the face or neck</li>
                <li>Signs of a severe allergic reaction</li>
                <li>Uncontrolled bleeding</li>
                <li>Any symptom you believe is a medical emergency</li>
              </ul>
              <p className="text-sm text-red-900/90 leading-relaxed mt-3 mb-0">
                <strong>If you are in Canada and the situation is life-threatening, call 911.</strong>
              </p>
            </aside>

            <ArticleCTA
              body="If you had implant surgery at Dentin Family Dentistry in Vaughan, follow the personalized instructions your dentist gave you and contact the clinic with any concerns. Considering treatment? Request an individualized dental implant consultation in Vaughan."
            />

            <h2 id="faq" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-5">
              Frequently Asked Questions
            </h2>
            <ArticleFAQ faqs={faqs} />

            <h2 id="references" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4 mt-10">
              References
            </h2>
            <ol className="not-prose list-decimal pl-6 space-y-2 text-sm text-[#555574]">
              {references.map((ref) => (
                <li key={ref.id} id={`ref-${ref.id}`} className="scroll-mt-24 leading-relaxed">
                  {ref.text}{" "}
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[#0D9488] font-semibold hover:underline break-words"
                  >
                    {ref.label}
                  </a>
                </li>
              ))}
            </ol>

            <p className="not-prose text-xs text-gray-400 mt-8">
              Written by{" "}
              <Link href="/about" className="text-[#0D9488] font-semibold hover:underline">Dr. Mehdi Adibrad</Link>.
              Last reviewed: {LAST_REVIEWED}.
            </p>

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
