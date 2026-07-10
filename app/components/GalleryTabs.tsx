"use client";

import Image from "next/image";
import { useState } from "react";

const cases = [
  {
    tab: "Implant & Composite Veneers",
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
    tab: "Implant & Laminate Veneers",
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
      {/* Section label */}
      <div className="text-center mb-3">
        <span className="text-[#0D9488] font-semibold uppercase text-xs tracking-widest">
          Patient Transformations
        </span>
      </div>
      <h2 className="text-3xl font-bold text-[#002C29] text-center mb-2">
        See the Difference
      </h2>
      <p className="text-[#555574] text-center max-w-xl mx-auto mb-10 text-sm leading-relaxed">
        Real before &amp; after results from our implant, veneer, and smile makeover patients in Vaughan.
      </p>

      {/* Tab bar */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-[#F0F0FF] rounded-full p-1.5 gap-1 flex-wrap justify-center">
          {cases.map((c, i) => (
            <button
              key={c.tab}
              onClick={() => setActive(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                active === i
                  ? "bg-[#0D9488] text-white shadow-md"
                  : "text-[#555574] hover:text-[#002C29]"
              }`}
            >
              {c.tab}
            </button>
          ))}
        </div>
      </div>

      {/* Case title */}
      <p className="text-center text-[#002C29] font-semibold text-lg mb-8 tracking-tight">
        {current.title}
      </p>

      {/* Before / After column headers */}
      <div className="grid grid-cols-2 gap-4 mb-3 max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gray-400 inline-block" />
          <span className="font-bold text-[#555574] uppercase text-xs tracking-widest">Before</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#0D9488] inline-block" />
          <span className="font-bold text-[#0D9488] uppercase text-xs tracking-widest">After</span>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-5xl mx-auto mb-4 h-px bg-gray-100" />

      {/* Image pairs */}
      <div className="space-y-4 max-w-5xl mx-auto">
        {current.pairs.map((pair, i) => (
          <div key={i} className="grid grid-cols-2 gap-3 sm:gap-6">
            {/* Before */}
            <div className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl shadow-sm group">
              <Image
                src={pair.before.src}
                alt={pair.before.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 600px"
              />
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Before
              </div>
            </div>

            {/* After */}
            <div className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl shadow-sm group">
              <Image
                src={pair.after.src}
                alt={pair.after.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 600px"
              />
              <div className="absolute top-3 left-3 bg-[#0D9488]/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                After
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tab dots indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {cases.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === i ? "bg-[#0D9488] w-6" : "bg-gray-300 w-2 hover:bg-gray-400"
            }`}
            aria-label={`Go to case ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
