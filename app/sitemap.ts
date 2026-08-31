import type { MetadataRoute } from "next";
import { allArticlePaths, getArticle, snapshotISO } from "./content/articles";

const SITE = "https://www.dfdentistry.ca";

const staticPaths: string[] = [
  "/",
  "/about",
  "/services",
  "/services/general-dentistry",
  "/services/cosmetic-dentistry",
  "/services/dental-implants",
  "/services/dental-implants/cost",
  "/services/dental-implants/full-mouth",
  "/services/dental-implants/single-tooth",
  "/services/dental-implants/implant-supported-dentures",
  "/services/restorative-dentistry",
  "/services/oral-surgery",
  "/services/endodontics",
  "/services/pediatric-dentistry",
  "/services/emergency-dental-care",
  "/services/periodontics",
  "/services/periodontics/scaling-and-root-planing",
  "/services/periodontics/gum-grafting",
  "/services/periodontics/bone-grafting",
  "/services/periodontics/crown-lengthening",
  "/porcelain-veneers-vaughan",
  "/professional-teeth-cleaning-vaughan",
  "/cdcp-vaughan",
  "/gallery",
  "/blog",
  "/contact",
  "/appointment",
  "/benefit-of-regular-dental-checkup",
  "/essential-tips-for-a-healthy-smile",
  "/blog/dental-implant-post-operative-instructions",
  "/blog/why-dental-implants-are-better",
  "/blog/dental-implant-procedure-step-by-step",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries = staticPaths.map((p) => ({
    url: `${SITE}${p}`,
    lastModified: now,
  }));
  const articleEntries = allArticlePaths().map((p) => {
    const a = getArticle(p)!;
    const iso = snapshotISO(a.snapshot);
    return { url: `${SITE}${p}`, lastModified: iso ? new Date(iso) : now };
  });
  return [...staticEntries, ...articleEntries];
}
