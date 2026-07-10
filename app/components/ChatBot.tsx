"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, X, Send, ChevronDown, Phone } from "lucide-react";

type Message = {
  from: "bot" | "user";
  text: string;
  link?: { label: string; href: string };
};

const QUICK_REPLIES = [
  { label: "🦷 Learn About Implants", text: "Tell me about dental implants" },
  { label: "📅 Book an Appointment", text: "I want to book an appointment" },
  { label: "🚨 I Have an Emergency", text: "I have a dental emergency" },
  { label: "💳 Insurance / CDCP", text: "Do you accept CDCP or my insurance?" },
  { label: "❓ Something Else", text: "What else can you help with?" },
];

const BUBBLE_TEXT =
  "🦷 Questions about implants, veneers, or your first visit? Ask me anything — I'm here 24/7.";

function getBotReply(input: string): Message {
  const msg = input.toLowerCase();

  // Greeting
  if (/\b(hello|hi|hey|good (morning|afternoon|evening))\b/.test(msg)) {
    return {
      from: "bot",
      text: "Hi there! 😊 I'm Denny, your virtual assistant at Dentin Family Dentistry. I can help with implants, bookings, insurance, and more. What's on your mind?",
    };
  }

  // Thanks
  if (/\bthank/.test(msg)) {
    return {
      from: "bot",
      text: "You're very welcome! 😊 If anything else comes up, I'm here. We look forward to welcoming you at Dentin Family Dentistry.",
    };
  }

  // Booking / yes / ready
  if (
    /\b(book|appointment|schedule|consult|ready to book|i want to book|let.s book|sounds good)\b/.test(msg) ||
    msg === "yes" || msg === "yes please"
  ) {
    return {
      from: "bot",
      text: "Great choice! You can book instantly online, or call/text us at (437) 900-2200 and the team will get you in as soon as possible. Would mornings or evenings work better for you this week?",
      link: { label: "📅 Book Now →", href: "/appointment" },
    };
  }

  // Emergency — potential life-threatening (check first)
  if (
    msg.includes("emerg") ||
    msg.includes("urgent") ||
    msg.includes("severe pain") ||
    msg.includes("knocked out") ||
    msg.includes("abscess") ||
    msg.includes("swelling") ||
    msg.includes("trauma") ||
    msg.includes("broke") ||
    msg.includes("crack") ||
    msg.includes("lost filling") ||
    msg.includes("broken tooth") ||
    /\b(pain|ache|hurt)\b/.test(msg)
  ) {
    if (
      msg.includes("throat") ||
      msg.includes("breath") ||
      msg.includes("swallow") ||
      msg.includes("unconscious")
    ) {
      return {
        from: "bot",
        text: "⚠️ This sounds like a potential medical emergency. Please call 911 or go to your nearest emergency room immediately — facial swelling affecting breathing or swallowing needs urgent hospital care right away.",
      };
    }
    return {
      from: "bot",
      text: "We offer 24/7 emergency dental care. If you're in pain or have a dental injury, please call us right now at (437) 900-2200 — we hold appointment slots specifically for urgent cases and will prioritize you.",
      link: { label: "🚨 Emergency Care →", href: "/services/emergency-dental-care" },
    };
  }

  // Implants — detailed walkthrough
  if (msg.includes("implant")) {
    return {
      from: "bot",
      text: "Dental implants replace a missing tooth root with a small titanium post in the jawbone, then top it with a custom crown that looks and functions just like a natural tooth.\n\nThe general process:\n\n• Consultation & scan — assess bone and plan placement\n• Implant post placed under local anaesthesia\n• Healing period while it fuses with the bone\n• Custom crown attached to complete your smile\n\nSome patients qualify for same-day solutions — that's confirmed at your in-person consult. Want to find out if you're a candidate?",
      link: { label: "Learn More About Implants →", href: "/services/dental-implants" },
    };
  }

  // Veneers / cosmetic / whitening / smile
  if (
    msg.includes("veneer") ||
    msg.includes("whiten") ||
    msg.includes("cosmetic") ||
    msg.includes("smile") ||
    msg.includes("makeover") ||
    msg.includes("bonding")
  ) {
    return {
      from: "bot",
      text: "We offer porcelain veneers, professional whitening, dental bonding, and full smile makeovers. Dr. Adibrad designs each smile around your features so results look natural, not overdone. A free cosmetic consultation is a great place to start — no pressure.",
      link: { label: "Cosmetic Dentistry →", href: "/services/cosmetic-dentistry" },
    };
  }

  // Insurance / CDCP
  if (
    msg.includes("insurance") ||
    msg.includes("cdcp") ||
    msg.includes("coverage") ||
    msg.includes("covered") ||
    msg.includes("plan") ||
    msg.includes("benefit")
  ) {
    return {
      from: "bot",
      text: "We accept the Canadian Dental Care Plan (CDCP) and most major private dental insurance plans. We'll verify your specific coverage before your visit so there are no surprises. Want to get booked in?",
      link: { label: "Contact Us to Verify Coverage →", href: "/contact" },
    };
  }

  // Hours
  if (
    msg.includes("hour") ||
    msg.includes("open") ||
    msg.includes("close") ||
    msg.includes("time") ||
    /\bwhen\b/.test(msg)
  ) {
    return {
      from: "bot",
      text: "We're open Monday to Saturday, 9:00 AM – 9:00 PM. We're closed on Sundays. For dental emergencies, we're available 24/7 — call us any time at (437) 900-2200.",
    };
  }

  // Location / directions
  if (
    msg.includes("locat") ||
    msg.includes("address") ||
    msg.includes("direction") ||
    msg.includes("find us") ||
    msg.includes("vaughan") ||
    /\bwhere\b/.test(msg)
  ) {
    return {
      from: "bot",
      text: "We're at 3300 Steeles Ave W, Unit #6, Vaughan, ON L4K 2Y4 — with easy on-site parking. Want to book a visit?",
      link: { label: "Get Directions →", href: "/contact" },
    };
  }

  // Cost / pricing
  if (
    msg.includes("price") ||
    msg.includes("cost") ||
    msg.includes("how much") ||
    msg.includes("fee") ||
    msg.includes("afford") ||
    msg.includes("payment") ||
    msg.includes("quote")
  ) {
    return {
      from: "bot",
      text: "Treatment costs vary depending on your specific case, so a rough number would be misleading. What I can say: we accept CDCP and most major insurance plans, and you'll get a transparent, personalized quote after your consultation — no commitment required.",
      link: { label: "Book a Free Consultation →", href: "/appointment" },
    };
  }

  // Doctor / Dr. Adibrad
  if (
    msg.includes("doctor") ||
    msg.includes("dentist") ||
    /\bdr\b/.test(msg) ||
    msg.includes("adibrad") ||
    msg.includes("surgeon")
  ) {
    return {
      from: "bot",
      text: "Dr. Mehdi Adibrad is our Head & Implant Surgeon with 12+ years of experience. He's a member of the ITI (International Team for Implantology) and the Ontario Dental Association, and passed his NDEB equivalency on the first attempt. Patients consistently describe his care as thorough, calm, and patient-first.",
      link: { label: "Meet Dr. Adibrad →", href: "/about" },
    };
  }

  // Services list
  if (
    msg.includes("service") ||
    msg.includes("offer") ||
    msg.includes("treatment") ||
    msg.includes("what do you")
  ) {
    return {
      from: "bot",
      text: "We offer a full range of dental care under one roof in Vaughan:\n\n• General & Preventive Dentistry\n• Cosmetic Dentistry (veneers, whitening)\n• Dental Implants\n• Restorative (crowns, bridges, dentures)\n• Endodontics (root canals)\n• Oral Surgery\n• Pediatric Dentistry\n• 24/7 Emergency Care\n\nYou rarely need to be referred elsewhere.",
      link: { label: "View All Services →", href: "/services" },
    };
  }

  // New patient / first visit
  if (
    msg.includes("new patient") ||
    msg.includes("first visit") ||
    msg.includes("first time") ||
    msg.includes("first appointment")
  ) {
    return {
      from: "bot",
      text: "Welcome! Your first visit usually includes a comprehensive exam, digital X-rays, and a conversation with Dr. Adibrad about your goals and any concerns. It's relaxed and no-pressure — and we're currently accepting new patients. Would mornings or evenings work better for you?",
      link: { label: "Book Your First Visit →", href: "/appointment" },
    };
  }

  // What else / something else / help
  if (
    msg.includes("something else") ||
    msg.includes("what else") ||
    msg.includes("what can you") ||
    /\bhelp\b/.test(msg)
  ) {
    return {
      from: "bot",
      text: "Here's what I can help with:\n\n• Dental implants — process, eligibility, timeline\n• Booking a consultation or appointment\n• Hours, location, and directions\n• Insurance and CDCP coverage\n• Cosmetic dentistry options\n• Emergency dental care\n\nWhat would you like to know?",
    };
  }

  // Fallback
  return {
    from: "bot",
    text: "That's a great question for our clinical team. For the most accurate answer, call or text us at (437) 900-2200 or send a note via our contact page — we typically respond within one business hour.",
    link: { label: "Contact Us →", href: "/contact" },
  };
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi! I'm Denny 👋, your virtual assistant at Dentin Family Dentistry. I can help with implants, bookings, insurance, or anything dental. What's on your mind?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Proactive bubble — show after 6 seconds
  useEffect(() => {
    const t = setTimeout(() => {
      if (!open && !bubbleDismissed) setShowBubble(true);
    }, 6000);
    return () => clearTimeout(t);
  }, [open, bubbleDismissed]);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setShowBubble(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function dismissBubble() {
    setShowBubble(false);
    setBubbleDismissed(true);
  }

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, getBotReply(trimmed)]);
    }, 950);
  }

  return (
    <>
      {/* Proactive bubble */}
      {showBubble && !open && (
        <div
          className="fixed z-50 right-4 sm:right-6"
          style={{ bottom: "90px" }}
        >
          <div
            className="relative bg-white border border-gray-100 rounded-2xl rounded-br-sm shadow-xl px-4 py-3 max-w-[260px] text-sm text-[#002C29] leading-snug animate-[slideUp_0.3s_ease-out]"
          >
            <button
              onClick={dismissBubble}
              className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
              aria-label="Dismiss"
            >
              <X size={10} />
            </button>
            {BUBBLE_TEXT}
          </div>
          {/* Tail */}
          <div className="absolute right-5 bottom-[-6px] w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45" />
        </div>
      )}

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm shadow-2xl rounded-2xl overflow-hidden flex flex-col bg-white border border-gray-100"
          style={{ height: "500px" }}
        >
          {/* Header */}
          <div className="bg-[#002C29] px-5 py-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0D9488] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                D
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Denny</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-white/70 text-xs">Virtual Dental Assistant · 24/7</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:4379002200"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Call us"
              >
                <Phone size={16} />
              </a>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#F8F8FF]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[82%] ${msg.from === "bot" ? "flex flex-col gap-1.5" : ""}`}>
                  <div
                    className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                      msg.from === "user"
                        ? "bg-[#0D9488] text-white rounded-tr-sm"
                        : "bg-white text-[#002C29] shadow-sm border border-gray-100 rounded-tl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.link && (
                    <Link
                      href={msg.link.href}
                      className="inline-block text-xs font-semibold text-[#0D9488] hover:text-[#09625C] hover:underline transition-colors ml-1"
                      onClick={() => setOpen(false)}
                    >
                      {msg.link.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="bg-white shadow-sm border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-[#0D9488] rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick-reply chips */}
          <div className="px-3 py-2 border-t border-gray-100 bg-white flex gap-2 overflow-x-auto shrink-0">
            {QUICK_REPLIES.map((q) => (
              <button
                key={q.label}
                onClick={() => sendMessage(q.text)}
                className="shrink-0 text-xs border border-[#0D9488]/50 text-[#0D9488] rounded-full px-3 py-1.5 hover:bg-[#0D9488] hover:text-white transition-colors whitespace-nowrap"
              >
                {q.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-gray-100 bg-white flex gap-2 items-center shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Ask Denny anything..."
              className="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-[#002C29] placeholder-gray-400"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim()}
              className="w-9 h-9 bg-[#0D9488] hover:bg-[#09625C] disabled:bg-gray-200 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors shrink-0"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-4 sm:right-6 z-50 w-14 h-14 bg-[#0D9488] hover:bg-[#09625C] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? <ChevronDown size={22} /> : <MessageCircle size={22} />}
        {!open && unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
            {unread}
          </span>
        )}
      </button>
    </>
  );
}
