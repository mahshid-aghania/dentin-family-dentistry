"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQ = { question: string; answer: string };

export default function ArticleFAQ({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3 not-prose">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl overflow-hidden bg-white"
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-[#002C29] hover:bg-[#F0F0FF] transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span>{faq.question}</span>
            <ChevronDown
              size={18}
              className={`text-[#0D9488] shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
            />
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5 text-[#555574] text-sm leading-relaxed border-t border-gray-100 pt-3">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
