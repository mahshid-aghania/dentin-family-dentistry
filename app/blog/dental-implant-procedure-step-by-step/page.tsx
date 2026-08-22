import Image from "next/image";
import Link from "next/link";
import { Info } from "lucide-react";
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
const TITLE = "Dental Implant Procedure Step by Step: What to Expect";
const DESCRIPTION =
  "A step-by-step guide to the dental implant procedure — consultation, imaging, surgery, osseointegration and your final restoration — from Dentin Family Dentistry, Vaughan.";
const CATEGORY = "Dental Implants";
const DATE = "August 22, 2026";
const LAST_REVIEWED = "August 22, 2026";
const READ_TIME = "12 min read";
const IMAGE = "/images/dental-implant-procedure-steps.png";

export const metadata = {
  title: { absolute: "Dental Implant Procedure Step by Step | Vaughan" },
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
    title: "Dental Implant Procedure Step by Step | Vaughan",
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

const faqs: FAQ[] = [
  {
    question: "How long does the dental implant procedure take?",
    answer:
      "It varies. Because healing time is built into treatment, the process often spans several months from consultation to the final restoration. Straightforward cases can be shorter, while cases that need extractions or bone grafting take longer. Some selected cases use immediate approaches. Your dentist will estimate a timeline for your situation.",
  },
  {
    question: "How long does dental implant surgery take?",
    answer:
      "Placing a single implant is often a relatively short appointment, but the actual time depends on the number of implants, whether grafting is done at the same time, and the complexity of the case. Your dentist can give you a realistic idea in advance.",
  },
  {
    question: "Is dental implant surgery painful?",
    answer:
      "Local anaesthesia is used to control pain during the procedure, so you should not feel sharp pain while the implant is placed, though you may notice pressure or vibration. Discomfort afterward varies from person to person and is usually manageable. Pain that is severe, persistent, or worsening should be assessed by your dental team.",
  },
  {
    question: "How long does osseointegration take?",
    answer:
      "Osseointegration — the bone healing around the implant — has traditionally been estimated at a few months, but this is a general estimate rather than a fixed rule. Timing varies with bone quality, the site, whether grafting was done, your general health, and the loading protocol. Your dentist confirms when the implant is ready to be restored.",
  },
  {
    question: "Does everyone need a bone graft for a dental implant?",
    answer:
      "No. Bone grafting is case-dependent and is considered when the available bone volume or quality is not adequate to support an implant. Whether it is needed — and how extensive it is — depends on your imaging and clinical assessment.",
  },
  {
    question: "Can the implant and a temporary tooth be placed on the same day?",
    answer:
      "Sometimes, in selected cases where there is adequate implant stability and suitable bone and gum conditions. Immediate restoration or loading is not appropriate for everyone, and a same-day temporary tooth is not the same as the final restoration. Your dentist will determine whether this is suitable for you.",
  },
  {
    question: "When is the final crown, bridge, or denture attached?",
    answer:
      "The final restoration is placed once your dentist confirms the implant has integrated and the tissues are ready. The timing varies between patients, and the restorative phase may take more than one appointment to check fit, bite, and appearance.",
  },
  {
    question: "How long can a dental implant last?",
    answer:
      "Many implants last for many years with good oral hygiene and regular professional maintenance, but longevity varies and cannot be guaranteed. An implant itself cannot develop a cavity, but the surrounding gum and bone can develop inflammatory disease, and restorations can have mechanical complications over time.",
  },
];

const tocItems = [
  { id: "how-it-works", label: "How implants work" },
  { id: "step-1", label: "1. Consultation" },
  { id: "step-2", label: "2. Imaging & assessment" },
  { id: "step-3", label: "3. Treatment planning" },
  { id: "step-4", label: "4. Treating oral health issues" },
  { id: "step-5", label: "5. Extraction, if required" },
  { id: "step-6", label: "6. Bone grafting, if required" },
  { id: "step-7", label: "7. Implant placement" },
  { id: "step-8", label: "8. Early recovery" },
  { id: "step-9", label: "9. Osseointegration" },
  { id: "step-10", label: "10. Abutment" },
  { id: "step-11", label: "11. Scan or impression" },
  { id: "step-12", label: "12. Final restoration" },
  { id: "step-13", label: "13. Long-term maintenance" },
  { id: "timeline", label: "Timeline overview" },
  { id: "immediate", label: "Immediate & same-day implants" },
  { id: "pain", label: "Is it painful?" },
  { id: "risks", label: "Risks & complications" },
  { id: "candidacy", label: "Who may be evaluated" },
  { id: "questions", label: "Questions to ask" },
  { id: "faq", label: "FAQs" },
  { id: "references", label: "References" },
];

const references = [
  { id: 1, text: "Canadian Dental Association. Dental Implants.", url: "https://www.cda-adc.ca/en/oral_health/procedures/dental_implants/", label: "cda-adc.ca" },
  { id: 2, text: "Canadian Dental Association. Care After Minor Oral Surgery.", url: "https://www.cda-adc.ca/en/oral_health/talk/procedures/oral_surgery/", label: "cda-adc.ca" },
  { id: 3, text: "Mayo Clinic. Dental implant surgery.", url: "https://www.mayoclinic.org/tests-procedures/dental-implant-surgery/about/pac-20384622", label: "mayoclinic.org" },
  { id: 4, text: "International Team for Implantology (ITI). Consensus statements: implant placement and loading protocols.", url: "https://academy.iti.org/academy/consensus-database/consensus-statement/-/consensus/implant-placement-and-loading-protocols/1802", label: "academy.iti.org" },
  { id: 5, text: "Cochrane Library. Antibiotics at dental implant placement to prevent complications.", url: "https://www.cochranelibrary.com/", label: "cochranelibrary.com" },
  { id: 6, text: "Health Canada. Smoking and tobacco.", url: "https://www.canada.ca/en/health-canada/services/smoking-tobacco.html", label: "canada.ca" },
];

function Cite({ ids }: { ids: number[] }) {
  return (
    <sup className="whitespace-nowrap">
      {ids.map((n) => (
        <a key={n} href={`#ref-${n}`} className="text-[#0D9488] font-semibold no-underline hover:underline">
          [{n}]
        </a>
      ))}
    </sup>
  );
}

function Step({ id, n, title, children }: { id: string; n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="scroll-mt-24 mb-8" id={id}>
      <div className="flex items-center gap-3 mb-3">
        <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0D9488] text-white font-bold text-sm shrink-0">{n}</span>
        <h2 className="text-2xl font-bold text-[#002C29] m-0">{title}</h2>
      </div>
      {children}
    </div>
  );
}

const timelineRows: [string, string, string, string][] = [
  ["Consultation & assessment", "History, examination, imaging, and discussion of options", "Usually one or more early appointments", "Complexity of the case; whether records already exist"],
  ["Preparatory treatment", "Treating gum disease, decay, or other issues first", "Varies", "Extent of existing oral health problems"],
  ["Extraction", "Removing a failing tooth when present", "Sometimes same visit as placement", "Infection, bone and gum condition"],
  ["Bone grafting / site development", "Building or preserving bone when needed", "May be same-day or a separate stage with added healing", "Amount of bone needed; graft type"],
  ["Implant placement", "Surgically placing the implant", "A focused surgical appointment", "Number of implants; grafting; anatomy"],
  ["Early recovery", "Swelling, tenderness, soft diet, hygiene care", "Days", "Procedure extent; individual healing"],
  ["Osseointegration", "Bone heals around the implant", "A general estimate of a few months; protocols vary", "Bone quality, site, health, smoking, loading protocol"],
  ["Abutment / soft-tissue stage", "Connecting piece and gum shaping, when applicable", "One short visit, when a separate stage is needed", "One-stage vs. two-stage approach"],
  ["Scan or impression", "Digital scan or impression and bite records", "One appointment", "Restoration type"],
  ["Final restoration", "Fitting the crown, bridge, or denture", "May take more than one visit", "Fit, bite, and appearance checks"],
  ["Maintenance", "Ongoing cleaning and monitoring", "Lifelong, at individualized intervals", "Personal risk factors and restoration design"],
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
              Implant treatment can sound complicated because the dental implant procedure step by step may involve
              several surgical, healing, and restorative stages spread over time. The good news is that each stage has a
              clear purpose. This guide walks through what commonly happens — from your first consultation to long-term
              maintenance — while being honest that not every patient follows exactly the same path.
            </p>
            <p className="text-[#555574] leading-relaxed mb-6">
              Some stages may be combined, some may not be needed at all, and additional procedures are sometimes
              required. In selected cases an implant can be placed or even restored sooner than the traditional
              sequence suggests. The right plan always depends on the clinical findings for your mouth.
            </p>

            {/* Visible medical disclaimer */}
            <aside role="note" className="not-prose border-l-4 border-[#0D9488] bg-[#F0FBF9] rounded-r-2xl p-5 mb-10">
              <div className="flex items-start gap-2.5">
                <Info size={20} className="text-[#0D9488] shrink-0 mt-0.5" />
                <p className="text-sm text-[#0f5f58] leading-relaxed m-0">
                  <strong>Important:</strong> This article provides general educational information and does not replace
                  an examination, diagnosis, or personalized treatment plan from a qualified dental professional. Dental
                  implant procedures and timelines vary according to oral health, bone anatomy, medical history,
                  treatment complexity, and individual healing.
                </p>
              </div>
            </aside>

            <TableOfContents items={tocItems} />

            <h2 id="how-it-works" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">How Dental Implants Work</h2>
            <p className="text-[#555574] leading-relaxed mb-8">
              A dental implant replaces a missing tooth in two parts: a small post placed into the jawbone that acts as
              an artificial root, and a restoration — a crown, bridge, or denture — attached on top. Over time the bone
              heals around the post to hold it in place, a process called osseointegration.<Cite ids={[1, 3]} /> Because
              that healing takes time, implant treatment usually unfolds in stages rather than a single visit.
            </p>

            <Step id="step-1" n={1} title="Dental Implant Consultation">
              <p className="text-[#555574] leading-relaxed mb-3">
                A dental implant consultation is a conversation as much as an examination. Your dentist will want to
                understand your concerns and goals, and review your dental and medical history, current medications and
                allergies, and habits such as smoking or vaping — all of which can affect healing and planning.<Cite ids={[6]} />
              </p>
              <p className="text-[#555574] leading-relaxed">
                They will examine your teeth, gums, bite, and the area of the missing tooth, and discuss both implants
                and appropriate alternatives. Giving a complete and accurate medical history matters, because it helps
                your dentist plan safely. A consultation is a starting point — it does not automatically mean an implant
                is the right choice for you.
              </p>
            </Step>

            <Step id="step-2" n={2} title="Diagnostic Imaging and Clinical Assessment">
              <p className="text-[#555574] leading-relaxed mb-3">
                To plan an implant, your dentist needs to see what is beneath the surface. Depending on the case, this
                may involve dental X-rays, a panoramic radiograph, three-dimensional (CBCT) imaging, intraoral scans or
                impressions, and photographs. Not every patient needs every type of imaging.
              </p>
              <p className="text-[#555574] leading-relaxed">
                These records help assess gum and periodontal health, the height and width of available bone, and the
                position of nearby roots, nerves, blood vessels, and the sinus, as well as your bite and the space
                available for a restoration.<Cite ids={[3]} /> The specific tools used depend on your dentist&apos;s
                assessment of your case.
              </p>
            </Step>

            <Step id="step-3" n={3} title="Personalized Treatment Planning">
              <p className="text-[#555574] leading-relaxed mb-3">
                With the findings in hand, your dentist develops a plan tailored to you. That plan considers whether an
                implant is appropriate at all, the number and position of any implants, the timing of placement and
                loading, whether an extraction or bone or soft-tissue grafting is needed, the type of temporary and
                final restoration, the appointments involved, and the risks, alternatives, costs, and limitations.
              </p>
              <p className="text-[#555574] leading-relaxed mb-3">
                This is also where informed consent comes in — a chance to ask questions before deciding. Reasonable
                alternatives are part of the conversation, and may include no treatment, a removable partial or complete
                denture, a tooth-supported bridge, a resin-bonded bridge in suitable cases, or another restorative
                approach. You can read a patient-friendly comparison in our guide to{" "}
                <Link href="/blog/why-dental-implants-are-better" className="text-[#0D9488] font-semibold hover:underline">implants versus dentures and bridges</Link>.
              </p>
              <p className="text-[#555574] leading-relaxed">
                Implants are an excellent option for many people, but they are not universally superior — the best
                choice depends on your priorities, health, and circumstances.
              </p>
            </Step>

            <Step id="step-4" n={4} title="Treating Existing Oral Health Problems">
              <p className="text-[#555574] leading-relaxed">
                Sometimes other issues are addressed before an implant is placed — for example active periodontal (gum)
                disease, tooth decay, dental infections, poor plaque control, or an unstable bite.<Cite ids={[1]} /> The
                aim is to place the implant into a healthy, stable environment. Timing and treatment requirements vary,
                and having an oral-health problem now does not necessarily rule out implant treatment later.
              </p>
            </Step>

            <Step id="step-5" n={5} title="Tooth Extraction, If Required">
              <p className="text-[#555574] leading-relaxed mb-3">
                If a damaged tooth is still in place, it may need to be removed. In some cases an implant can be placed
                at the same appointment as the extraction; in others, early, delayed, or conventional placement is more
                appropriate. Case selection depends on the anatomy, infection control, and the condition of the soft
                tissue and bone, and on achieving enough implant stability.<Cite ids={[4]} />
              </p>
              <p className="text-[#555574] leading-relaxed mb-2">It helps to know the terms clinicians use:</p>
              <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-3 space-y-1">
                <li><strong>Immediate placement:</strong> the implant is placed at the same visit as the extraction.</li>
                <li><strong>Early placement:</strong> placement after a period of initial soft-tissue or partial bone healing.</li>
                <li><strong>Delayed (conventional) placement:</strong> placement after the socket has healed more fully.</li>
                <li><strong>Immediate restoration / loading:</strong> attaching a temporary or functional tooth soon after placement, in selected cases.</li>
                <li><strong>Conventional loading:</strong> attaching the restoration after a healing period.</li>
              </ul>
              <p className="text-[#555574] leading-relaxed">
                Importantly, immediate <em>placement</em> does not automatically mean an immediate final <em>tooth</em>.<Cite ids={[4]} />
              </p>
            </Step>

            <Step id="step-6" n={6} title="Bone Grafting or Site Development, If Required">
              <p className="text-[#555574] leading-relaxed mb-3">
                Implants need adequate bone volume and quality for support, so when bone is lacking, a graft may be
                considered.<Cite ids={[3]} /> Approaches include socket or ridge preservation, guided bone regeneration,
                and — for some upper-jaw sites — sinus augmentation. Smaller grafts are sometimes done at the same time
                as implant placement, while larger ones are completed as a separate stage that adds healing time.
              </p>
              <p className="text-[#555574] leading-relaxed">
                Grafting is not always required, and no procedure is guaranteed to succeed. Whether it is needed depends
                on your imaging and clinical findings.
              </p>
            </Step>

            <Step id="step-7" n={7} title="Dental Implant Placement">
              <p className="text-[#555574] leading-relaxed mb-3">
                On the day of surgery, the area is numbed with local anaesthesia, and sedation may be an option in
                appropriate cases. Your dentist accesses the implant site, prepares the bed in the bone, and places the
                implant, then fits a cover screw or a healing abutment and places sutures if needed. A temporary
                restoration is sometimes provided, and you will receive postoperative instructions.<Cite ids={[2]} />
              </p>
              <p className="text-[#555574] leading-relaxed">
                Local anaesthesia is intended to control pain during the procedure. You may still notice pressure or
                vibration, and the amount of discomfort afterward varies from person to person. The length of surgery
                depends on the number of implants and the complexity of the case, so there is no single &ldquo;typical&rdquo;
                duration that fits everyone.
              </p>
            </Step>

            <Step id="step-8" n={8} title="Early Recovery After Implant Surgery">
              <p className="text-[#555574] leading-relaxed mb-3">
                In the first days, some swelling, minor bleeding, bruising, and tenderness can occur, and a soft diet
                with gentle oral hygiene is usually recommended.<Cite ids={[2]} /> Activity is kept light at first, and
                follow-up care helps check healing. Worsening pain or swelling, persistent bleeding, or signs of
                infection should be assessed.
              </p>
              <p className="text-[#555574] leading-relaxed">
                For a detailed guide, read{" "}
                <Link href="/blog/dental-implant-post-operative-instructions" className="text-[#0D9488] font-semibold hover:underline">Dentin Family Dentistry&apos;s dental implant post-operative instructions</Link>.
              </p>
            </Step>

            <Step id="step-9" n={9} title="Osseointegration">
              <p className="text-[#555574] leading-relaxed mb-3">
                Osseointegration is the process by which bone heals against the surface of the implant, gradually giving
                it the stability needed to support a restoration.<Cite ids={[1, 3]} /> A key point often misunderstood:
                feeling comfortable is not the same as being fully integrated. Symptom recovery and bone healing are
                different milestones, and only your dentist can confirm the implant is ready to restore.
              </p>
              <p className="text-[#555574] leading-relaxed">
                Healing time varies with bone characteristics, implant stability, the treatment location, any grafting,
                smoking, systemic health, and the loading protocol. A few months is a traditional general estimate, but
                contemporary protocols vary, and it should not be treated as a universal requirement.<Cite ids={[3, 4]} />
              </p>
            </Step>

            <Step id="step-10" n={10} title="Abutment Placement, When Applicable">
              <p className="text-[#555574] leading-relaxed">
                An abutment is the connecting piece between the implant and the restoration. Depending on the approach,
                it may be placed during the implant surgery, at a later appointment, or as part of the final restorative
                process. In a two-stage approach, a minor procedure exposes the implant and a healing abutment shapes
                the gum; in a one-stage approach this is done at placement. Not every patient needs a separate abutment
                surgery.
              </p>
            </Step>

            <Step id="step-11" n={11} title="Digital Scan or Impression">
              <p className="text-[#555574] leading-relaxed">
                Once the tissues are ready, your dentist captures the details needed to make your restoration using a
                digital scan or a traditional impression, along with bite records and shade selection. A temporary
                restoration may be worn while the final one is made in a dental laboratory. Both digital and
                conventional techniques can produce excellent results; the right choice depends on the case.
              </p>
            </Step>

            <Step id="step-12" n={12} title="Placement of the Final Crown, Bridge, or Denture">
              <p className="text-[#555574] leading-relaxed mb-3">
                The final restoration depends on how many teeth are being replaced — a single implant crown, an
                implant-supported bridge, or an implant-retained or implant-supported denture. Restorations may be
                screw-retained or cement-retained, and your dentist checks the fit, appearance, bite, and contacts,
                making adjustments as needed.
              </p>
              <p className="text-[#555574] leading-relaxed">
                This phase can take more than one appointment to get right, and not every final restoration is a single
                crown. You can see the range of options on our{" "}
                <Link href="/services/dental-implants" className="text-[#0D9488] font-semibold hover:underline">dental implants page</Link>{" "}
                and in our{" "}
                <Link href="/services/restorative-dentistry" className="text-[#0D9488] font-semibold hover:underline">restorative dentistry</Link> services.
              </p>
            </Step>

            <Step id="step-13" n={13} title="Follow-Up and Long-Term Implant Maintenance">
              <p className="text-[#555574] leading-relaxed mb-3">
                Treatment does not end when the final tooth is attached. Implants are maintained with regular dental
                examinations, professional cleaning at individualized intervals, daily plaque control, and careful
                cleaning around the restoration, while your dentist monitors the health of the surrounding gum and
                bone.<Cite ids={[1]} />
              </p>
              <p className="text-[#555574] leading-relaxed">
                An implant cannot develop a cavity, but the tissues around it can develop inflammatory (peri-implant)
                disease, and restorations can experience mechanical complications. Report any looseness, discomfort,
                bleeding, swelling, or change in your bite. The right cleaning tools depend on the design of your
                restoration, so ask your dental team what suits yours.
              </p>
            </Step>

            <h2 id="timeline" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">Dental Implant Timeline: A General Overview</h2>
            <div className="not-prose overflow-x-auto mb-3">
              <table className="w-full table-fixed border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#002C29] text-white">
                    <th className="w-[22%] text-left font-semibold p-3 rounded-tl-xl align-top break-words">Treatment stage</th>
                    <th className="w-[30%] text-left font-semibold p-3 align-top break-words">What may happen</th>
                    <th className="w-[24%] text-left font-semibold p-3 align-top break-words">General timing</th>
                    <th className="w-[24%] text-left font-semibold p-3 rounded-tr-xl align-top break-words">Why timing may change</th>
                  </tr>
                </thead>
                <tbody>
                  {timelineRows.map((r, i) => (
                    <tr key={r[0]} className={i % 2 === 0 ? "bg-[#F8F8FF]" : "bg-white"}>
                      <th scope="row" className="text-left font-semibold text-[#002C29] p-3 align-top break-words">{r[0]}</th>
                      <td className="p-3 align-top text-[#555574] break-words">{r[1]}</td>
                      <td className="p-3 align-top text-[#555574] break-words">{r[2]}</td>
                      <td className="p-3 align-top text-[#555574] break-words">{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="not-prose text-xs text-gray-500 bg-[#F0F0FF] rounded-xl p-4 mb-8">
              This timeline is a general educational overview, not a treatment estimate. Some stages may be combined,
              omitted, or extended depending on the individual case.
            </p>

            <h2 id="immediate" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">Immediate and Same-Day Dental Implants</h2>
            <p className="text-[#555574] leading-relaxed mb-3">
              &ldquo;Same-day&rdquo; implants are often discussed, but a few different ideas hide behind that phrase, and
              they do not mean the same thing:<Cite ids={[4]} />
            </p>
            <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-3 space-y-1">
              <li><strong>Immediate placement</strong> — placing the implant at the same visit as an extraction.</li>
              <li><strong>Immediate restoration</strong> — attaching a temporary tooth that is kept out of heavy biting.</li>
              <li><strong>Immediate loading</strong> — attaching a tooth that takes on functional bite forces early.</li>
            </ul>
            <p className="text-[#555574] leading-relaxed mb-8">
              These approaches can be appropriate in carefully selected cases — for example when there is good primary
              implant stability and suitable bone, soft tissue, and bite conditions.<Cite ids={[4]} /> They can reduce
              the number of stages, but they are not right for everyone, and conventional, staged treatment is sometimes
              the safer choice. A same-day temporary tooth does not necessarily mean the permanent restoration is
              delivered that day. Whether an immediate approach suits you is a clinical decision made after assessment.
            </p>

            <h2 id="pain" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">Is Dental Implant Surgery Painful?</h2>
            <p className="text-[#555574] leading-relaxed mb-8">
              Local anaesthesia is used during surgery to control pain, so you should not feel sharp pain while the
              implant is placed — though sensations such as pressure or vibration are common. Discomfort afterward
              varies with the complexity of the procedure and from person to person, and is usually manageable. Pain
              that is severe, persistent, or worsening rather than improving should be assessed. Any medication advice
              should come from your treating dentist based on your health and history.
            </p>

            <h2 id="risks" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">Potential Risks and Complications</h2>
            <p className="text-[#555574] leading-relaxed mb-3">
              Dental implants are a well-established treatment, but like any procedure they carry some risk. Possible
              complications can include:<Cite ids={[3]} />
            </p>
            <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-3 space-y-1">
              <li>Infection at the implant site</li>
              <li>Delayed healing or implant failure and loss</li>
              <li>Nerve-related symptoms, such as altered sensation</li>
              <li>Sinus-related complications in relevant upper-jaw cases</li>
              <li>Injury to nearby teeth or structures</li>
              <li>Gum recession or aesthetic concerns</li>
              <li>Peri-implant (gum and bone) disease</li>
              <li>Mechanical complications with the restoration</li>
              <li>A need for additional treatment</li>
            </ul>
            <p className="text-[#555574] leading-relaxed mb-8">
              Individual risk depends on the treatment site, the procedure, your health and habits, ongoing
              maintenance, and the complexity of the case. Your dentist can explain the risks that are most relevant to
              your situation.
            </p>

            <h2 id="candidacy" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">Who May Be Evaluated for Dental Implants?</h2>
            <p className="text-[#555574] leading-relaxed mb-3">
              Suitability for implants is decided through an individualized assessment, not a checklist. Factors your
              dentist may weigh include:
            </p>
            <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-3 space-y-1">
              <li>One or more missing teeth and your restorative goals</li>
              <li>Completed jaw growth</li>
              <li>Gum health and history of periodontal disease</li>
              <li>Bone anatomy and volume</li>
              <li>Oral hygiene and plaque control</li>
              <li>Smoking or vaping<Cite ids={[6]} /></li>
              <li>Control of conditions such as diabetes, and relevant medications</li>
              <li>Any previous radiation treatment to the jaws</li>
              <li>Willingness to attend follow-up and maintenance appointments</li>
            </ul>
            <p className="text-[#555574] leading-relaxed mb-8">
              Having one of these factors does not automatically rule you out; many can be managed as part of planning.
              The only way to know is a personalized evaluation.
            </p>

            <h2 id="questions" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">Questions to Ask at Your Consultation</h2>
            <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-8 space-y-1">
              <li>What treatment options are appropriate for me, and what are the alternatives?</li>
              <li>Do I need additional imaging, an extraction, or a bone graft?</li>
              <li>When could the implant be placed, and would immediate placement or loading suit my case?</li>
              <li>What temporary tooth options are available while I heal?</li>
              <li>What are the main risks in my situation?</li>
              <li>How many appointments might be involved, and what is included in the estimate?</li>
              <li>What maintenance will I need afterward?</li>
              <li>Who will perform each stage of treatment, and what experience is relevant to my care?</li>
            </ul>

            <h2 id="faq" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-5">Frequently Asked Questions</h2>
            <ArticleFAQ faqs={faqs} />

            <h2 id="considering-vaughan" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4 mt-10">Considering Dental Implants in Vaughan?</h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              If you are exploring implants, an individualized examination is the first step. The dental team at{" "}
              <strong>Dentin Family Dentistry</strong> (3300 Steeles Avenue West, Unit 6, Vaughan, Ontario) can assess
              your oral health, discuss appropriate tooth-replacement options, and explain the potential treatment
              stages for your situation. We welcome patients from Vaughan and neighbouring communities including
              Thornhill, Richmond Hill, and Woodbridge.
            </p>

            <ArticleCTA
              body="Book a dental implant consultation in Vaughan with Dentin Family Dentistry to discuss your options and the treatment stages that would apply to your case."
            />

            <h2 id="references" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">References</h2>
            <ol className="not-prose list-decimal pl-6 space-y-2 text-sm text-[#555574]">
              {references.map((ref) => (
                <li key={ref.id} id={`ref-${ref.id}`} className="scroll-mt-24 leading-relaxed">
                  {ref.text}{" "}
                  <a href={ref.url} target="_blank" rel="noopener noreferrer nofollow" className="text-[#0D9488] font-semibold hover:underline break-words">
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
            href: "/blog/dental-implant-post-operative-instructions",
            category: "Dental Implants",
            readTime: "9 min read",
            title: "Dental Implant Post-Operative Instructions",
            excerpt: "A practical recovery and aftercare guide for the days and weeks after implant surgery.",
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
