import Image from "next/image";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import {
  ArticleHeader,
  TableOfContents,
  AuthorBox,
  RelatedArticles,
  EducationalNote,
  PUBLISHER,
  AUTHOR,
  SITE_URL,
} from "../../components/ArticleUI";

const SLUG = "patient-education/fistula-pimple-on-gum-dental-infection";
const TITLE = "A Pimple or Fistula on the Gum? Don’t Ignore This Sign of Dental Infection";
const SEO_TITLE = "Fistula or Pimple on the Gum: Causes & Treatment | Vaughan Dentist";
const DESCRIPTION =
  "A pimple or fistula on the gum may be a sign of a dental infection. Learn the causes, symptoms and treatment options from Dentin Family Dentistry in Vaughan.";
const CATEGORY = "Patient Education";
const DATE = "September 5, 2026";
const LAST_REVIEWED = "September 5, 2026";
const READ_TIME = "8 min read";
// NOTE: interim placeholder image — replace with a dedicated gum-fistula / dental-infection
// illustration before publishing (see review notes).
const IMAGE = "/images/dental-checkup.png";
const IMAGE_ALT =
  "Dentist reviewing a patient’s gums and teeth during a dental examination in Vaughan";

export const metadata = {
  title: { absolute: SEO_TITLE },
  description: DESCRIPTION,
  keywords: [
    "fistula on gum",
    "pimple on gum",
    "gum boil",
    "dental fistula",
    "dental abscess",
    "tooth infection",
    "draining gum",
    "root canal Vaughan",
    "emergency dentist Vaughan",
  ],
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    type: "article",
    url: `/${SLUG}`,
    title: SEO_TITLE,
    description: DESCRIPTION,
    images: [{ url: IMAGE, alt: IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

const tocItems = [
  { id: "what-is-a-gum-fistula", label: "What Is a Gum Fistula?" },
  { id: "what-causes-a-fistula", label: "What Causes a Fistula on the Gum?" },
  { id: "what-does-it-look-like", label: "What Does a Dental Fistula Look or Feel Like?" },
  { id: "why-stop-hurting", label: "Why Can the Tooth Stop Hurting?" },
  { id: "go-away-on-its-own", label: "Can a Gum Fistula Go Away on Its Own?" },
  { id: "how-diagnosed", label: "How Does a Dentist Diagnose the Problem?" },
  { id: "how-treated", label: "How Is a Dental Fistula Treated?" },
  { id: "antibiotics", label: "Do You Always Need Antibiotics?" },
  { id: "emergency", label: "Is a Dental Fistula an Emergency?" },
  { id: "around-an-implant", label: "What About a Fistula Around a Dental Implant?" },
  { id: "should-you-pop", label: "Should You Pop a Gum Fistula?" },
  { id: "prevention", label: "Can a Dental Fistula Be Prevented?" },
  { id: "we-can-help", label: "We Can Help" },
  { id: "references", label: "References" },
];

/* Reference definitions — labels and destinations preserved exactly as supplied.
   [1] (Prizma) is referenced only in the author's preparation note, which is not
   part of the published article, so it is not listed here. */
const references = [
  {
    id: 2,
    text: "American Association of Endodontists. ENDODONTICS: Colleagues for Excellence.",
    url: "https://www.aae.org/specialty/wp-content/uploads/sites/2/2017/07/endodonticdiagnosisfall2013.pdf",
    label: "aae.org",
  },
  {
    id: 3,
    text: "American Association of Endodontists. Case Challenge (Part 1).",
    url: "https://www.aae.org/specialty/case-challenge-part-1/",
    label: "aae.org",
  },
  {
    id: 4,
    text: "American Dental Association. Dental Infection Antibiotics Guidelines for Pain and Swelling.",
    url: "https://www.ada.org/resources/research/science/evidence-based-dental-research/antibiotics-for-dental-pain-and-swelling",
    label: "ada.org",
  },
  {
    id: 5,
    text: "Choosing Wisely Canada. Dental Toolkit.",
    url: "https://choosingwiselycanada.org/wp-content/uploads/dlm_uploads/2026/02/Dental_Toolkit_Updated_2026-1.pdf",
    label: "choosingwiselycanada.org",
  },
  {
    id: 6,
    text: "Dentin Family Dentistry. Contact Us | Dentin Family Dentistry Vaughan.",
    url: "https://www.dfdentistry.ca/contact",
    label: "dfdentistry.ca",
  },
];

/* Inline citation: preserves the supplied source-name text, linked to its
   entry in the References list (which links out to the verified source URL). */
function Cite({ id, name }: { id: number; name: string }) {
  return (
    <>
      {" "}
      (
      <a href={`#ref-${id}`} className="text-[#0D9488] font-semibold hover:underline">
        {name}
      </a>
      )
    </>
  );
}

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/${SLUG}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/${SLUG}` },
      headline: TITLE,
      description: DESCRIPTION,
      image: `${SITE_URL}${IMAGE}`,
      inLanguage: "en-CA",
      datePublished: "2026-09-05",
      dateModified: "2026-09-05",
      author: {
        "@type": "Person",
        "@id": `${SITE_URL}/about#dr-mehdi-adibrad`,
        name: AUTHOR.name,
        jobTitle: "General Dentist",
        url: `${SITE_URL}${AUTHOR.profilePath}`,
      },
      publisher: {
        "@type": "Dentist",
        name: PUBLISHER.name,
        logo: { "@type": "ImageObject", url: `${SITE_URL}${PUBLISHER.logo}` },
      },
      about: { "@type": "MedicalCondition", name: "Dental abscess (gum fistula / sinus tract)" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/${SLUG}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Patient Education", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: "Gum Fistula & Dental Infection", item: `${SITE_URL}/${SLUG}` },
      ],
    },
  ],
};

export default function GumFistulaArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <ArticleHeader
        title={TITLE}
        breadcrumbTitle="Gum Fistula & Dental Infection"
        category={CATEGORY}
        date={DATE}
        readTime={READ_TIME}
      />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-sm bg-[#e8e8f0]">
            <Image
              src={IMAGE}
              alt={IMAGE_ALT}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-gray max-w-none">
            {/* Intro */}
            <p className="text-[#555574] text-lg leading-relaxed mb-6">
              Have you noticed a small bump, pimple, or opening on your gum that occasionally drains fluid or
              leaves a bad taste in your mouth?
            </p>
            <p className="text-[#555574] leading-relaxed mb-6">
              It may not be painful. In fact, sometimes a tooth that was previously very painful begins to feel
              better once the bump appears.
            </p>
            <p className="text-[#555574] leading-relaxed mb-6">
              That does <em>not</em> necessarily mean the infection has healed.
            </p>
            <p className="text-[#555574] leading-relaxed mb-6">
              A pimple-like lesion on the gum may be a <strong>dental sinus tract, often called a gum fistula or
              gum boil</strong>. It can develop when an infection around the root of a tooth creates a pathway
              through the bone and gum so that fluid or pus can drain into the mouth.
            </p>
            <p className="text-[#555574] leading-relaxed mb-8">
              At <strong>Dentin Family Dentistry in Vaughan</strong>, we recommend having any persistent or
              recurring gum bump examined, even when there is little or no pain.
            </p>

            <TableOfContents items={tocItems} />

            {/* What Is a Gum Fistula? */}
            <h2 id="what-is-a-gum-fistula" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              What Is a Gum Fistula?
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              A dental fistula or sinus tract is a small drainage pathway that may develop when infection is
              present around a tooth or its supporting tissues.
            </p>
            <p className="text-[#555574] leading-relaxed mb-4">
              When bacteria reach the pulp—the soft tissue containing nerves and blood vessels inside a
              tooth—the pulp may eventually become infected and necrotic. Infection can then spread through the
              root canal system into the tissues surrounding the root.
            </p>
            <p className="text-[#555574] leading-relaxed mb-4">
              As pressure develops, the infection may create a pathway through the bone and soft tissue. The
              opening may appear on the gum as a small red, yellow, or white bump.
            </p>
            <p className="text-[#555574] leading-relaxed mb-4">
              Because the infection is draining, pressure may decrease and the tooth can actually become{" "}
              <em>less painful</em>. This is one reason patients sometimes mistakenly believe the problem has
              resolved.
            </p>
            <p className="text-[#555574] leading-relaxed mb-8">
              A draining sinus tract is a classic possible presentation of a tooth with pulp necrosis and a
              chronic apical abscess.
              <Cite id={2} name="American Association of Endodontists" />
            </p>

            {/* What Causes a Fistula on the Gum? */}
            <h2 id="what-causes-a-fistula" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              What Causes a Fistula on the Gum?
            </h2>
            <p className="text-[#555574] leading-relaxed mb-3">
              Several dental problems can lead to a draining sinus tract. Common causes include:
            </p>
            <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-4 space-y-1.5">
              <li><strong>Deep untreated tooth decay</strong></li>
              <li><strong>Pulpal infection or tooth necrosis</strong></li>
              <li>
                A previous{" "}
                <strong>
                  <Link href="/services/endodontics" className="text-[#0D9488] hover:underline">
                    root canal treatment
                  </Link>{" "}
                  that has become reinfected
                </strong>
              </li>
              <li>A cracked or fractured tooth</li>
              <li>Dental trauma</li>
              <li>Infection around the root of a tooth</li>
              <li>Advanced periodontal infection in some cases</li>
              <li>Problems associated with an existing crown or restoration</li>
              <li>
                In some situations, infection or inflammation around a{" "}
                <Link href="/services/dental-implants" className="text-[#0D9488] font-semibold hover:underline">
                  dental implant
                </Link>
              </li>
            </ul>
            <p className="text-[#555574] leading-relaxed mb-4">
              Determining which tooth is responsible is important because the opening in the gum is not always
              located directly beside the source of the infection.
            </p>
            <p className="text-[#555574] leading-relaxed mb-8">
              For example, a sinus tract may drain several millimetres—or occasionally farther—from the infected
              root.
            </p>

            {/* What Does a Dental Fistula Look or Feel Like? */}
            <h2 id="what-does-it-look-like" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              What Does a Dental Fistula Look or Feel Like?
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              A fistula can look different from one person to another.
            </p>
            <p className="text-[#555574] leading-relaxed mb-3">You may notice:</p>
            <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-4 space-y-1.5">
              <li>A small <strong>pimple or bump on the gum</strong></li>
              <li>A red or swollen area</li>
              <li>A tiny opening in the gingiva</li>
              <li>Intermittent drainage</li>
              <li>Pus or a salty/bad-tasting fluid</li>
              <li>An unpleasant taste that seems to come from one particular tooth</li>
              <li>Tenderness when chewing</li>
              <li>Tooth discoloration</li>
              <li>A previously painful tooth that suddenly feels better</li>
              <li>Swelling that disappears and later returns</li>
            </ul>
            <p className="text-[#555574] leading-relaxed mb-4">
              Interestingly, some teeth with chronic draining infections produce <em>very little pain</em>.
            </p>
            <p className="text-[#555574] leading-relaxed mb-8">
              The absence of pain therefore does not guarantee that the tooth is healthy.
            </p>

            {/* Why Can the Tooth Stop Hurting? */}
            <h2 id="why-stop-hurting" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Why Can the Tooth Stop Hurting?
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              This is one of the most confusing things for patients.
            </p>
            <p className="text-[#555574] leading-relaxed mb-4">
              A tooth may initially become very painful as inflammation builds inside and around it. Once the
              pulp dies, the tooth may become less sensitive to temperature.
            </p>
            <p className="text-[#555574] leading-relaxed mb-4">
              If a sinus tract subsequently forms, accumulated inflammatory fluid can drain through the opening
              rather than continuing to build pressure.
            </p>
            <p className="text-[#555574] leading-relaxed mb-4">As a result, you may think:</p>
            <blockquote className="border-l-4 border-[#0D9488] bg-[#F0FBF9] rounded-r-2xl px-5 py-4 mb-4 not-prose">
              <p className="text-[#0f5f58] italic leading-relaxed m-0">
                “It doesn&apos;t hurt anymore, so it must be getting better.”
              </p>
            </blockquote>
            <p className="text-[#555574] leading-relaxed mb-4">
              But the infection at the root can still be present.
            </p>
            <p className="text-[#555574] leading-relaxed mb-8">
              In endodontic terminology, a necrotic tooth with a draining sinus tract may be diagnosed as a{" "}
              <em>chronic apical abscess</em>, depending on the complete clinical and radiographic findings.
              <Cite id={3} name="American Association of Endodontists" />
            </p>

            {/* Can a Gum Fistula Go Away on Its Own? */}
            <h2 id="go-away-on-its-own" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Can a Gum Fistula Go Away on Its Own?
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              The opening can sometimes <em>shrink, close, and then come back</em>.
            </p>
            <p className="text-[#555574] leading-relaxed mb-4">
              That does not necessarily mean the underlying infection has disappeared.
            </p>
            <p className="text-[#555574] leading-relaxed mb-4">
              If the source of the infection remains inside the tooth or around its root, the fistula may recur.
            </p>
            <p className="text-[#555574] leading-relaxed mb-8">
              The goal of dental treatment is therefore not simply to make the bump disappear. The goal is to{" "}
              <em>identify and eliminate the source of infection</em>.
            </p>

            {/* How Does a Dentist Diagnose the Problem? */}
            <h2 id="how-diagnosed" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              How Does a Dentist Diagnose the Problem?
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              At Dentin Family Dentistry, the evaluation may include:
            </p>
            <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-4 space-y-2">
              <li>
                <em>Clinical examination:</em> We examine the tooth, surrounding gum tissue, restorations and the
                location of the drainage tract.
              </li>
              <li>
                <em>Pulp vitality testing:</em> Cold testing or other tests may help determine whether the nerve
                inside the tooth is still vital.
              </li>
              <li>
                <em>Percussion and palpation:</em> The dentist may assess whether the tooth or surrounding tissues
                are tender.
              </li>
              <li>
                <em>Periodontal probing:</em> This can help distinguish an endodontic infection from periodontal
                disease or conditions such as a root fracture.
              </li>
              <li>
                <em>Dental X-rays:</em> A periapical radiograph may reveal bone changes around the root.
              </li>
            </ul>
            <p className="text-[#555574] leading-relaxed mb-4">
              In selected cases, additional imaging such as <em>CBCT</em> may be recommended if conventional
              radiographs do not provide enough information.
            </p>
            <p className="text-[#555574] leading-relaxed mb-8">
              Sometimes the dentist may also trace the sinus tract to help identify which tooth is responsible.
            </p>

            {/* How Is a Dental Fistula Treated? */}
            <h2 id="how-treated" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              How Is a Dental Fistula Treated?
            </h2>
            <p className="text-[#555574] leading-relaxed mb-6">
              Treatment depends on <em>why the fistula developed and whether the tooth can be saved</em>.
            </p>

            <h3 id="root-canal-treatment" className="scroll-mt-24 text-xl font-bold text-[#002C29] mb-3">
              Root Canal Treatment
            </h3>
            <p className="text-[#555574] leading-relaxed mb-4">
              If the tooth is restorable and the infection originates from a necrotic pulp,{" "}
              <strong>
                <Link href="/services/endodontics" className="text-[#0D9488] hover:underline">
                  root canal treatment
                </Link>
              </strong>{" "}
              may allow the tooth to be preserved.
            </p>
            <p className="text-[#555574] leading-relaxed mb-4">
              During root canal treatment, the infected tissue and bacteria are removed from inside the tooth,
              the canal system is disinfected and sealed, and the tooth is subsequently restored.
            </p>
            <p className="text-[#555574] leading-relaxed mb-6">
              Once the source of infection is eliminated, the sinus tract will often heal without needing to be
              surgically removed.
            </p>

            <h3 id="root-canal-retreatment" className="scroll-mt-24 text-xl font-bold text-[#002C29] mb-3">
              Root Canal Retreatment
            </h3>
            <p className="text-[#555574] leading-relaxed mb-4">
              If the affected tooth has already received root canal treatment, the dentist will determine why
              infection has persisted or returned.
            </p>
            <p className="text-[#555574] leading-relaxed mb-3">Possible causes include:</p>
            <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-4 space-y-1.5">
              <li>untreated canal anatomy</li>
              <li>leakage around a restoration or crown</li>
              <li>recurrent decay</li>
              <li>inadequate previous root canal treatment</li>
              <li>fracture</li>
              <li>persistent infection</li>
            </ul>
            <p className="text-[#555574] leading-relaxed mb-6">
              In suitable cases,{" "}
              <strong>
                <Link href="/services/endodontics" className="text-[#0D9488] hover:underline">
                  root canal retreatment
                </Link>
              </strong>{" "}
              may allow the tooth to be saved.
            </p>

            <h3 id="tooth-extraction" className="scroll-mt-24 text-xl font-bold text-[#002C29] mb-3">
              Tooth Extraction
            </h3>
            <p className="text-[#555574] leading-relaxed mb-4">
              If the tooth is severely damaged, fractured, has inadequate remaining tooth structure, or has a
              poor prognosis,{" "}
              <strong>
                <Link href="/services/oral-surgery" className="text-[#0D9488] hover:underline">
                  extraction
                </Link>
              </strong>{" "}
              may be the better option.
            </p>
            <p className="text-[#555574] leading-relaxed mb-8">
              After healing, replacement options such as a{" "}
              <strong>
                <Link href="/services/dental-implants" className="text-[#0D9488] hover:underline">
                  dental implant
                </Link>
                , bridge, or removable prosthesis
              </strong>{" "}
              can be discussed when appropriate.
            </p>

            {/* Do You Always Need Antibiotics? */}
            <h2 id="antibiotics" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Do You Always Need Antibiotics?
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">No.</p>
            <p className="text-[#555574] leading-relaxed mb-4">This is an important point.</p>
            <p className="text-[#555574] leading-relaxed mb-4">
              For many localized pulpal and periapical dental infections in otherwise healthy patients, the
              priority is <em>definitive dental treatment</em>, such as root canal treatment, drainage, or
              extraction—not antibiotics alone. The ADA guideline recommends against routine antibiotics for most
              localized pulpal and periapical conditions when definitive dental treatment is available.
              <Cite id={4} name="American Dental Association" /> Canadian antibiotic-stewardship guidance
              similarly advises against routinely prescribing antibiotics for toothache or a localized dental
              abscess.
              <Cite id={5} name="Choosing Wisely Canada" />
            </p>
            <p className="text-[#555574] leading-relaxed mb-3">
              Antibiotics may become appropriate when there are signs that the infection is{" "}
              <em>spreading or affecting the patient systemically</em>, such as:
            </p>
            <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-4 space-y-1.5">
              <li>fever</li>
              <li>malaise</li>
              <li>increasing facial swelling</li>
              <li>cellulitis</li>
              <li>significant lymph-node involvement</li>
              <li>rapidly progressing infection</li>
              <li>difficulty swallowing</li>
              <li>difficulty breathing</li>
            </ul>
            <p className="text-[#555574] leading-relaxed mb-8">
              The need for antibiotics should therefore be determined after a clinical assessment.
            </p>

            {/* Is a Dental Fistula an Emergency? */}
            <h2 id="emergency" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Is a Dental Fistula an Emergency?
            </h2>
            <p className="text-[#555574] leading-relaxed mb-6">
              A small draining fistula without swelling or systemic symptoms may not require a hospital emergency
              visit, but it <em>does require dental treatment</em> and should not simply be watched indefinitely.
            </p>

            <aside role="note" className="not-prose border-l-4 border-red-500 bg-red-50 rounded-r-2xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle size={20} className="text-red-600 shrink-0" />
                <h3 className="font-bold text-red-800 m-0">Seek urgent dental attention if you develop:</h3>
              </div>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-red-900/90 leading-relaxed">
                <li>rapidly increasing facial swelling</li>
                <li>swelling around the eye or neck</li>
                <li>fever or significant illness</li>
                <li>difficulty swallowing</li>
                <li>difficulty breathing</li>
                <li>severe limitation in opening your mouth</li>
                <li>rapidly worsening pain</li>
              </ul>
              <p className="text-sm text-red-900/90 leading-relaxed mt-3 mb-0">
                Difficulty breathing or swallowing associated with a dental infection requires{" "}
                <strong>immediate emergency medical assessment</strong>.
              </p>
            </aside>

            {/* What About a Fistula Around a Dental Implant? */}
            <h2 id="around-an-implant" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              What About a Fistula Around a Dental Implant?
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              A draining area near an implant should also be examined.
            </p>
            <p className="text-[#555574] leading-relaxed mb-4">
              The cause may be different from infection arising from a natural tooth and can include inflammation
              or infection involving the tissues surrounding the implant, residual infection from a neighbouring
              tooth, or another local problem.
            </p>
            <p className="text-[#555574] leading-relaxed mb-8">
              Early diagnosis is particularly important because progressive inflammation around an implant can
              result in loss of supporting bone.
            </p>

            {/* Should You Pop a Gum Fistula? */}
            <h2 id="should-you-pop" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Should You Pop a Gum Fistula?
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">No.</p>
            <p className="text-[#555574] leading-relaxed mb-4">
              Squeezing or puncturing the area does not remove the source of infection.
            </p>
            <p className="text-[#555574] leading-relaxed mb-4">
              Even if pus drains and the swelling becomes smaller, bacteria may remain within the root canal
              system or surrounding tissues.
            </p>
            <p className="text-[#555574] leading-relaxed mb-8">
              Avoid trying to treat the problem yourself with needles, repeated squeezing, leftover antibiotics,
              or home remedies.
            </p>

            {/* Can a Dental Fistula Be Prevented? */}
            <h2 id="prevention" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Can a Dental Fistula Be Prevented?
            </h2>
            <p className="text-[#555574] leading-relaxed mb-3">
              Not every dental infection can be prevented, but you can substantially reduce your risk by:
            </p>
            <ul className="list-disc pl-6 text-[#555574] leading-relaxed mb-4 space-y-1.5">
              <li>treating cavities before they become deep</li>
              <li>attending regular dental examinations</li>
              <li>obtaining radiographs when clinically indicated</li>
              <li>maintaining good brushing and interdental cleaning</li>
              <li>repairing leaking or fractured restorations</li>
              <li>having dental trauma evaluated promptly</li>
              <li>
                completing recommended root canal and{" "}
                <Link href="/services/restorative-dentistry" className="text-[#0D9488] font-semibold hover:underline">
                  restorative
                </Link>{" "}
                treatment
              </li>
              <li>returning for follow-up when a previously treated tooth develops new symptoms</li>
            </ul>
            <p className="text-[#555574] leading-relaxed mb-8">
              Most importantly, don&apos;t ignore a recurring gum bump simply because it doesn&apos;t hurt.
            </p>

            {/* We Can Help — final CTA */}
            <h2 id="we-can-help" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4">
              Have a Gum Pimple, Bad Taste or Draining Tooth? We Can Help.
            </h2>
            <p className="text-[#555574] leading-relaxed mb-4">
              If you notice a{" "}
              <em>
                pimple on your gum, drainage, an unusual bad taste, swelling, tooth discoloration or discomfort
                when chewing
              </em>
              , it may be a sign of an infection that needs treatment.
            </p>
            <p className="text-[#555574] leading-relaxed mb-6">
              At <strong>Dentin Family Dentistry in Vaughan</strong>, we can assess the source of the problem
              using a clinical examination and appropriate dental imaging and discuss whether the tooth can be
              saved with{" "}
              <Link href="/services/endodontics" className="text-[#0D9488] font-semibold hover:underline">
                root canal treatment
              </Link>{" "}
              or whether another approach would provide a better long-term prognosis.
            </p>

            <section className="not-prose bg-[#0D9488] rounded-2xl p-8 text-white my-8">
              <address className="not-italic mb-6">
                <div className="font-bold text-lg">Dentin Family Dentistry</div>
                <div className="text-white/90">3300 Steeles Ave W, Unit 6</div>
                <div className="text-white/90">Vaughan, Ontario L4K 2Y4</div>
                <a href={PUBLISHER.phoneHref} className="font-bold text-white hover:underline inline-block mt-1">
                  {PUBLISHER.phoneDisplay}
                </a>
              </address>
              <p className="text-white/90 leading-relaxed mb-4">
                We welcome new patients and provide{" "}
                <Link href="/services/emergency-dental-care" className="text-white font-semibold underline">
                  emergency dental care
                </Link>{" "}
                in Vaughan. Dentin Family Dentistry currently lists{" "}
                <Link href="/services/emergency-dental-care" className="text-white font-semibold underline">
                  emergency services
                </Link>
                ,{" "}
                <Link href="/services/endodontics" className="text-white font-semibold underline">
                  endodontic treatment
                </Link>
                ,{" "}
                <Link href="/services/restorative-dentistry" className="text-white font-semibold underline">
                  restorative dentistry
                </Link>{" "}
                and{" "}
                <Link href="/services/oral-surgery" className="text-white font-semibold underline">
                  oral surgery
                </Link>{" "}
                among its services.
                <Cite id={6} name="Dentin Family Dentistry" />
              </p>
              <p className="text-white/90 leading-relaxed italic mb-6">
                Book an appointment if you notice a recurring bump or drainage from your gum—especially if it is
                associated with a discoloured, previously root-canalled, broken or heavily restored tooth.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-2 bg-white text-[#0D9488] font-bold hover:bg-[#002C29] hover:text-white transition-colors"
                  style={{ borderRadius: "100px", padding: "14px 26px" }}
                >
                  Book an Appointment
                </Link>
                <a
                  href={PUBLISHER.phoneHref}
                  className="inline-flex items-center gap-2 border border-white/60 text-white font-semibold hover:bg-white hover:text-[#0D9488] transition-colors"
                  style={{ borderRadius: "100px", padding: "12px 26px" }}
                >
                  {PUBLISHER.phoneDisplay}
                </a>
              </div>
            </section>

            {/* References */}
            <h2 id="references" className="scroll-mt-24 text-2xl font-bold text-[#002C29] mb-4 mt-10">
              References
            </h2>
            <ul className="not-prose space-y-2 text-sm text-[#555574]">
              {references.map((ref) => (
                <li key={ref.id} id={`ref-${ref.id}`} className="scroll-mt-24 leading-relaxed">
                  <span className="font-semibold text-[#002C29]">[{ref.id}]</span> {ref.text}{" "}
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
            </ul>

            <p className="not-prose text-xs text-gray-400 mt-8">
              Written by{" "}
              <Link href="/about" className="text-[#0D9488] font-semibold hover:underline">
                {AUTHOR.name}
              </Link>
              . Last reviewed: {LAST_REVIEWED}.
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
            excerpt:
              "Managing bleeding, swelling and pain, what to eat, healing time, and the warning signs to watch for after surgery.",
          },
          {
            href: "/services/endodontics",
            category: "Our Services",
            readTime: "Service",
            title: "Root Canal & Endodontic Treatment in Vaughan",
            excerpt:
              "How we diagnose and treat infected or abscessed teeth, and when a tooth can be saved with root canal treatment.",
          },
        ]}
      />
    </>
  );
}
