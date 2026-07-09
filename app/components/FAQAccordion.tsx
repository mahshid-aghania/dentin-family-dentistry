"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major dental insurance plans. Please contact us to verify your coverage.",
  },
  {
    question: "What services do you offer?",
    answer: "We provide a full range of dental services focused on restoring and maintaining healthy, confident smiles.",
  },
  {
    question: "How often should I visit the dentist?",
    answer: "Visit the dentist every six months to keep your smile healthy and strong.",
  },
  {
    question: "What can I expect during my first visit?",
    answer: "Yes, we accept most major dental insurance plans. Please contact us to verify your coverage.",
  },
  {
    question: "Do you offer emergency dental care?",
    answer: "Yes, we accept most major dental insurance plans. Please contact us to verify your coverage.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl overflow-hidden bg-white"
        >
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-[#002C29] hover:bg-[#F0F0FF] transition-colors"
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
            <div className="px-6 pb-4 text-[#555574] text-sm leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
