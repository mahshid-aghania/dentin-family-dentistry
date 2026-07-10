"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, ExternalLink } from "lucide-react";

const REELS = [
  { id: "DZvgqjsJByB", label: "Smile Transformation",   tag: "Cosmetic"   },
  { id: "DZp4KIyM4sA", label: "Implant Results",         tag: "Implants"   },
  { id: "DZav4zuJ_a7", label: "Patient Experience",       tag: "Care"       },
  { id: "DYFmNYWpwKH", label: "Before & After",           tag: "Results"    },
  { id: "DXfDj4Dieye", label: "Dental Tips",              tag: "Education"  },
  { id: "DXPXRWPjr8P", label: "Our Clinic",               tag: "Tour"       },
  { id: "DXE5AbjDiZP", label: "Smile Makeover",           tag: "Cosmetic"   },
];

// Each card: [glow color, base dark]
const CARD_COLORS = [
  { glow: "#0D9488", base: "#001A18" },  // teal (brand)
  { glow: "#7C3AED", base: "#0D0619" },  // purple
  { glow: "#2563EB", base: "#060D1A" },  // blue
  { glow: "#E11D48", base: "#1A0610" },  // rose
  { glow: "#D97706", base: "#1A0E00" },  // amber
  { glow: "#059669", base: "#001A0D" },  // emerald
  { glow: "#0284C7", base: "#031120" },  // sky
];

const CARD_W = 220;
const GAP    = 16;
const STEP   = CARD_W + GAP;

function IgIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function InstagramReels() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function scrollDir(dir: "left" | "right") {
    scrollRef.current?.scrollBy({ left: dir === "right" ? STEP : -STEP, behavior: "smooth" });
  }

  function onScroll() {
    const el = scrollRef.current;
    if (el) setActive(Math.round(el.scrollLeft / STEP));
  }

  return (
    <section className="py-20 px-4 overflow-hidden" style={{ background: "#001A18" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <a
              href="https://www.instagram.com/dentin_family_dentistry/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/40 hover:text-white text-xs font-semibold uppercase tracking-widest mb-3 transition-colors"
            >
              <IgIcon size={12} /> @dentin_family_dentistry
            </a>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Watch Us in{" "}
              <span style={{
                background: "linear-gradient(90deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Action
              </span>
            </h2>
            <p className="text-white/40 text-sm mt-2">Real patients. Real results. Tap a card to watch.</p>
          </div>

          <div className="flex gap-2 shrink-0">
            <button onClick={() => scrollDir("left")} disabled={active === 0}
              className="w-10 h-10 bg-white/8 hover:bg-white/15 disabled:opacity-25 disabled:cursor-not-allowed rounded-full flex items-center justify-center text-white transition-colors border border-white/10">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scrollDir("right")} disabled={active >= REELS.length - 1}
              className="w-10 h-10 bg-white/8 hover:bg-white/15 disabled:opacity-25 disabled:cursor-not-allowed rounded-full flex items-center justify-center text-white transition-colors border border-white/10">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={scrollRef} onScroll={onScroll}
          className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          {REELS.map(({ id, label, tag }, i) => {
            const { glow, base } = CARD_COLORS[i % CARD_COLORS.length];
            return (
              <a
                key={id}
                href={`https://www.instagram.com/reel/${id}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 group relative rounded-3xl overflow-hidden flex flex-col justify-between"
                style={{
                  width: CARD_W,
                  height: 390,
                  background: base,
                  boxShadow: `0 0 0 1px ${glow}33`,
                }}
              >
                {/* Colored radial glow — unique per card */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 160px 160px at 50% 45%, ${glow}30 0%, transparent 70%)` }} />

                {/* Hover: brighten glow */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `radial-gradient(ellipse 180px 180px at 50% 45%, ${glow}50 0%, transparent 70%)` }} />

                {/* Subtle dot-grid texture */}
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

                {/* Top: tag + IG icon */}
                <div className="relative flex items-center justify-between px-4 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{tag}</span>
                  <IgIcon size={14} />
                </div>

                {/* Centre: play button */}
                <div className="relative flex flex-col items-center justify-center flex-1 gap-3">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${glow}22`, border: `2px solid ${glow}55` }}>
                    <Play size={24} className="text-white/70 group-hover:text-white transition-colors ml-1" fill="currentColor" />
                  </div>
                  <span className="text-white/30 text-[10px] uppercase tracking-widest group-hover:text-white/60 transition-colors">
                    Watch on Instagram
                  </span>
                </div>

                {/* Bottom: label */}
                <div className="relative px-4 pb-5">
                  <div className="h-px bg-white/8 mb-3" />
                  <div className="flex items-end justify-between gap-2">
                    <p className="text-white text-sm font-semibold leading-tight">{label}</p>
                    <ExternalLink size={13} className="text-white/30 group-hover:text-white/60 transition-colors shrink-0 mb-0.5" />
                  </div>
                  <p className="text-white/30 text-[10px] mt-1">@dentin_family_dentistry</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {REELS.map((_, i) => (
            <button key={i}
              onClick={() => { scrollRef.current?.scrollTo({ left: i * STEP, behavior: "smooth" }); setActive(i); }}
              className={`rounded-full transition-all duration-200 ${i === active ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/20 hover:bg-white/50"}`}
              aria-label={`Reel ${i + 1}`}
            />
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/dentin_family_dentistry/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white border border-white/15 hover:border-white/40 px-7 py-3 rounded-full transition-all duration-200"
          >
            <IgIcon size={15} />
            Follow @dentin_family_dentistry
          </a>
        </div>
      </div>
    </section>
  );
}
