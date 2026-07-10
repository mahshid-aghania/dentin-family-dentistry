"use client";

import Image from "next/image";
import { useState } from "react";

const cases = [
  {
    tab: "Implant and Composite Veneers",
    title: "Dental Implant: Implant and Composite Veneers",
    pairs: [
      {
        before: { src: "/images/Implant-and-composite-veneers.jpg", alt: "Implant and Composite Veneers — Before" },
        after:  { src: "/images/Implant-and-composite-veneers-2.jpg", alt: "Implant and Composite Veneers — After" },
      },
    ],
  },
  {
    tab: "Implant",
    title: "Implant",
    pairs: [
      {
        before: { src: "/images/Implant-and-Laminate-Veneers.jpg", alt: "Implant — Before" },
        after:  { src: "/images/Implant-and-Laminate-Veneers-2.jpg", alt: "Implant — After" },
      },
      {
        before: { src: "/images/PHOTO-2026-02-20-15-20-10.jpg", alt: "Implant case 2 — Before" },
        after:  { src: "/images/PHOTO-2026-02-20-15-20-10-2.jpg", alt: "Implant case 2 — After" },
      },
    ],
  },
  {
    tab: "Implant and Laminate Veneers",
    title: "Implant and Laminate Veneers",
    pairs: [
      {
        before: { src: "/images/Implant-and-Laminate-Veneers-after.jpg", alt: "Implant and Laminate Veneers — Before" },
        after:  { src: "/images/Implant-and-Laminate-Veneers-new.jpg", alt: "Implant and Laminate Veneers — After" },
      },
    ],
  },
];

export default function GalleryTabs() {
  const [active, setActive] = useState(0);
  const current = cases[active];

  return (
    <>
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {cases.map((c, i) => (
          <button
            key={c.tab}
            onClick={() => setActive(i)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors ${
              active === i
                ? "bg-[#0D9488] text-white border-[#0D9488]"
                : "bg-white text-[#002C29] border-gray-300 hover:border-[#0D9488] hover:text-[#0D9488]"
            }`}
          >
            {c.tab}
          </button>
        ))}
      </div>

      {/* Case title */}
      <h2 className="text-2xl font-bold text-[#002C29] mb-6">{current.title}</h2>

      {/* Before / After column headers */}
      <div className="grid grid-cols-2 gap-4 mb-3">
        <div className="text-center font-bold text-[#002C29] text-lg">Before</div>
        <div className="text-center font-bold text-[#002C29] text-lg">After</div>
      </div>

      {/* Image pairs */}
      <div className="space-y-4">
        {current.pairs.map((pair, i) => (
          <div key={i} className="grid grid-cols-2 gap-4">
            <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg">
              <Image
                src={pair.before.src}
                alt={pair.before.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 600px"
              />
            </div>
            <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg">
              <Image
                src={pair.after.src}
                alt={pair.after.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 600px"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
