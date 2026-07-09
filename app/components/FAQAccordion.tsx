"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most major dental insurance plans, including the Canadian Dental Care Plan (CDCP). Please contact us at (437) 900-2200 to verify your specific coverage before your appointment.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide a full range of dental services including general dentistry, cosmetic dentistry (veneers, whitening), restorative treatments (crowns, bridges, implants), oral surgery, endodontics, pediatric dentistry, and 24/7 emergency dental care.",
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "We recommend visiting the dentist every six months for routine cleanings and exams. Patients with gum disease or a history of cavities may need more frequent visits — Dr. Adibrad will advise what's right for you.",
  },
  {
    question: "What can I expect during my first visit?",
    answer:
      "Your first visit includes a comprehensive oral exam, digital X-rays if needed, a professional cleaning, and a full treatment plan discussion. We take time to understand your goals in a comfortable, judgment-free environment.",
  },
  {
    question: "Do you offer emergency dental care?",
    answer:
      "Yes. We offer 24/7 emergency dental care for toothaches, broken teeth, lost fillings, swelling, and dental trauma. Call us immediately at (437) 900-2200 and we will prioritize your appointment.",
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
            <div className="px-6 pb-5 text-[#555574] text-sm leading-relaxed border-t border-gray-100 pt-3">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
