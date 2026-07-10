"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function IgIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const REELS = [
  "DZvgqjsJByB",
  "DZp4KIyM4sA",
  "DZav4zuJ_a7",
  "DYFmNYWpwKH",
  "DXfDj4Dieye",
  "DXPXRWPjr8P",
  "DXE5AbjDiZP",
];

const CARD_W = 280;
const GAP    = 16;
const STEP   = CARD_W + GAP;

export default function InstagramReels() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function scrollDir(dir: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? STEP : -STEP, behavior: "smooth" });
  }

  function onScroll() {
    const el = scrollRef.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / STEP));
  }

  return (
    <section className="py-20 px-4 overflow-hidden" style={{ background: "#001A18" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <a
              href="https://www.instagram.com/dentin_family_dentistry/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-xs font-semibold uppercase tracking-widest mb-3 transition-colors"
            >
              <IgIcon size={12} />
              @dentin_family_dentistry
            </a>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Watch Us in{" "}
              <span style={{
                background: "linear-gradient(90deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Action
              </span>
            </h2>
            <p className="text-white/50 text-sm mt-2">
              Real patients. Real results. Follow our latest reels.
            </p>
          </div>

          {/* Nav arrows */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => scrollDir("left")}
              disabled={active === 0}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Previous reel"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollDir("right")}
              disabled={active >= REELS.length - 1}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Next reel"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="flex gap-4 overflow-x-auto pb-2 no-scrollbar"
        >
          {REELS.map((id, i) => (
            <div
              key={id}
              className="shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-black shadow-xl"
              style={{ width: CARD_W, height: 498 }}
            >
              <iframe
                src={`https://www.instagram.com/reel/${id}/embed/`}
                width={CARD_W}
                height={498}
                frameBorder={0}
                scrolling="no"
                allow="encrypted-media; autoplay"
                loading={i < 3 ? "eager" : "lazy"}
                title={`Dentin Family Dentistry — Instagram Reel ${i + 1}`}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {REELS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                scrollRef.current?.scrollTo({ left: i * STEP, behavior: "smooth" });
                setActive(i);
              }}
              className={`rounded-full transition-all duration-200 ${
                i === active ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to reel ${i + 1}`}
            />
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-7">
          <a
            href="https://www.instagram.com/dentin_family_dentistry/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-7 py-3 rounded-full transition-colors"
          >
            <IgIcon size={15} />
            Follow @dentin_family_dentistry
          </a>
        </div>
      </div>
    </section>
  );
}
