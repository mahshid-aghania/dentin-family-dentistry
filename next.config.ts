import type { NextConfig } from "next";

/**
 * Legacy WordPress → new site 301 redirect map.
 *
 * The site was migrated from WordPress to Next.js. The old pretty permalinks
 * (recovered from the Internet Archive) previously earned rankings and backlinks
 * but returned 404 after the migration. Each legacy URL is mapped to the closest
 * live equivalent so ranking signals and link equity are preserved.
 *
 * Sources are listed WITHOUT a trailing slash — Next.js normalizes the trailing
 * slash first (308), then these rules match. `permanent: true` emits a 308,
 * which Google treats as a permanent (301-equivalent) redirect.
 *
 * NOTE: several targets are hub pages because dedicated legacy pages (e.g. implant
 * cost, full-mouth, CDCP) have not yet been rebuilt. When those pages are created,
 * repoint the relevant sources to them.
 */
const redirectGroups: Record<string, string[]> = {
  "/services/dental-implants": [
    "/dental-implants",
    "/best-dental-implants-vaughan",
    "/best-type-of-tooth-implants-north-york",
    "/dental-implant-surgery-vaughan",
    "/types-of-dental-implants",
    "/dental-implants-faq",
    "/after-dental-implant-surgery",
    "/after-implant-placement",
    "/failing-dental-implants",
    "/government-grants-for-dental-implants-canada",
    "/500-off-on-fully-guided-dental-implants",
    "/choosing-the-best-dental-implant-dentist",
    "/choosing-the-right-dental-implant-office",
    "/finding-the-best-tooth-implant-services-nearby",
    "/top-dental-implants-a-comprehensive-guide",
  ],
  "/services/dental-implants/cost": ["/cost-of-dental-implants", "/implant-cost"],
  "/services/dental-implants/full-mouth": ["/full-mouth-dental-implants-vaughan"],
  "/services/dental-implants/single-tooth": ["/single-tooth-implant"],
  "/services/dental-implants/implant-supported-dentures": [
    "/implant-dentures-in-vaughan",
    "/bar-attachment-denture",
  ],
  "/services/oral-surgery": [
    "/impacted-canine-tooth-extraction",
    "/wisdom-teeth-removal",
    "/tooth-extractions",
    "/after-tooth-extractions",
  ],
  "/services/periodontics": [
    "/periodontal-services-vaughan",
    "/periodontal-services",
    "/gum-disease-treatment-in-vaughan",
    "/osseous-surgery-vaughan",
    "/causes-of-periodontal-disease",
    "/types-of-periodontal-disease",
    "/signs-symptoms-of-periodontal-disease",
    "/periodontal-disease-and-osteoporosis",
    "/what-is-a-periodontist",
    "/when-to-see-a-periodontist",
  ],
  "/services/periodontics/scaling-and-root-planing": ["/scaling-and-root-planing"],
  "/services/periodontics/gum-grafting": [
    "/gum-recession",
    "/gum-grafting-cost",
    "/gum-graft-cost-for-4-teeth",
    "/gingival-graft-cost",
    "/gum-augmentation-surgery-benefits",
  ],
  "/services/periodontics/bone-grafting": [
    "/bone-grafting-in-vaughan",
    "/osseous-surgery-with-bone-graft",
  ],
  "/services/periodontics/crown-lengthening": ["/crown-lengthening-in-vaughan"],
  "/services/emergency-dental-care": [
    "/dental-emergency",
    "/front-broken-teeth",
    "/fix-a-broken-front-tooth",
  ],
  "/services/endodontics": [
    "/root-canal-therapy",
    "/root-canal-cracked-tooth-syndrome",
    "/cracked-cusp-causes-and-treatments",
    "/does-a-cracked-tooth-need-to-be-pulled",
    "/pulling-a-cracked-tooth",
    "/the-causes-of-fractured-tooth-roots",
    "/hairline-fractures-in-teeth",
  ],
  "/services/cosmetic-dentistry": [
    "/cosmetic-dentistry",
    "/dental-veneers",
    "/teeth-whitening-in-toronto",
    "/teeth-whitening-in-brampton",
    "/get-1000-off-your-invisalign",
    "/services/invisalign",
  ],
  "/porcelain-veneers-vaughan": [],
  "/services/restorative-dentistry": [
    "/crowns-bridges-dentures",
    "/what-are-dental-crowns-made-of",
    "/what-to-do-if-your-dental-cap-breaks",
    "/teeth-filling",
  ],
  "/services/general-dentistry": [
    "/dental-cleanings-checkups",
    "/oral-hygiene-aids",
    "/dental-digital-x-rays-3",
    "/dentistry-faq",
    "/family-dentistry-services",
    "/dental-services",
    "/services-2",
    "/services-2/cosmetic-dentistry",
    "/services-2/emergency-dental-care",
    "/services-2/general-dentistry",
    "/services-2/restorative-dentistry",
    "/services/cleanings-and-prevention",
    "/services/dental-emergencies",
    "/services/prosthodontics",
    "/services/restorations",
    "/temporomandibular-joints-tmj",
    "/tmj-disorders-symptoms-causes",
    "/bruxism",
  ],
  "/cdcp-vaughan": [
    "/cdcp-in-vaughan",
    "/cdcp-markham",
    "/cdcp-northyork",
    "/cdcp-richmondhill",
    "/cdcp-toronto",
    "/cdcp-woodbridge",
    "/cdcp-calculator",
    "/is-dental-covered-by-ohip-ontario-2025",
    "/no-insurance",
  ],
  "/services": [
    "/faq",
  ],
  "/about": [
    "/about-us",
    "/about-us-2",
    "/about-us/dr-mehdi-adibrad",
    "/dr-mehdi-adibrad",
    "/dr-adibrad",
    "/dr-faramak-shaer",
    "/dr-farokh-asefzadeh",
    "/dr-maleki",
    "/doctor",
  ],
  "/contact": ["/contact-us", "/patient-forms"],
  "/appointment": ["/appointment-request", "/book-appointment"],
  "/gallery": ["/before-and-afters", "/gallery-10"],
  "/blog": [
    "/blog-2",
    "/blogs",
    "/related-articles",
    "/news-promotion",
    "/promotions",
    "/covid-19",
  ],
};

/**
 * Additional redirects for legacy content URLs found in the post-migration
 * 404 audit (old blog/portfolio posts and stray pages) → closest relevant
 * destination. Kept separate so destination keys may repeat those above.
 * (Pure WordPress theme-demo junk — /category/*, /tag/*, date archives, fake
 * demo doctor/portfolio filler — is intentionally left to 404.)
 */
const additionalRedirects: Record<string, string[]> = {
  "/services/dental-implants": ["/blog/get-the-perfect-smile-with-dental-implants-in-toronto"],
  "/services/periodontics": [
    "/blog/peridontics",
    "/blog/periodontal-diseases",
    "/portfolio/causes-and-treatment-of-gingivitis",
  ],
  "/services/oral-surgery": [
    "/blog/5-reasons-why-you-may-need-a-tooth-extraction-from-dentist-in-vaughan",
    "/blog/surgical-instruction",
  ],
  "/services/restorative-dentistry": [
    "/offering-molar-crown-in-north-york",
    "/portfolio/dental-bridge-everything-you-need-to-know",
  ],
  "/services/emergency-dental-care": ["/what-to-do-if-your-tooth-chips"],
  "/professional-teeth-cleaning-vaughan": ["/blog/cleanings-and-preventions"],
  "/blog/dental-implant-post-operative-instructions": ["/post-op"],
  "/blog": [
    "/what-is-the-soft-palate",
    "/portfolio/what-is-the-soft-palate",
    "/portfolio/do-braces-hurt-what-to-expect",
    "/portfolio/everything-you-need-to-know-about-fluoride-treatment",
    "/portfolio/what-to-know-about-antibiotics-and-tooth-infections",
    "/portfolio/what-to-know-about-glossitis",
    "/portfolio/why-does-my-tooth-still-hurt-after-a-filling",
  ],
};

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    const groups = [
      ...Object.entries(redirectGroups),
      ...Object.entries(additionalRedirects),
    ];
    return groups.flatMap(([destination, sources]) =>
      sources.map((source) => ({ source, destination, permanent: true }))
    );
  },
};

export default nextConfig;
