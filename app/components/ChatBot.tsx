"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, X, Send, ChevronDown } from "lucide-react";

type Message = {
  from: "bot" | "user";
  text: string;
  link?: { label: string; href: string };
};

const QUICK_REPLIES = [
  "What are your hours?",
  "How do I book an appointment?",
  "Do you accept insurance?",
  "What services do you offer?",
  "Where are you located?",
  "Do you handle emergencies?",
];

function getBotReply(input: string): Message {
  const msg = input.toLowerCase();

  if (msg.includes("hour") || msg.includes("open") || msg.includes("close") || msg.includes("time")) {
    return {
      from: "bot",
      text: "We're open Monday to Saturday, 9:00 AM – 9:00 PM. We are closed on Sundays. Emergency care is available 24/7 — call us anytime at (437) 900-2200.",
    };
  }

  if (msg.includes("book") || msg.includes("appointment") || msg.includes("schedule") || msg.includes("visit")) {
    return {
      from: "bot",
      text: "You can book an appointment online right here on our website, or call us at (437) 900-2200. We'd love to see you!",
      link: { label: "Book Online →", href: "/appointment" },
    };
  }

  if (msg.includes("insurance") || msg.includes("cdcp") || msg.includes("coverage") || msg.includes("plan")) {
    return {
      from: "bot",
      text: "Yes! We accept most major dental insurance plans and the Canadian Dental Care Plan (CDCP). Contact us to verify your specific coverage before your visit.",
      link: { label: "Contact Us →", href: "/contact" },
    };
  }

  if (msg.includes("service") || msg.includes("offer") || msg.includes("treatment") || msg.includes("provide")) {
    return {
      from: "bot",
      text: "We offer General Dentistry, Cosmetic Dentistry, Dental Implants, Restorative Dentistry, Oral Surgery, Endodontics, Pediatric Dentistry, and 24/7 Emergency Care.",
      link: { label: "View All Services →", href: "/services" },
    };
  }

  if (msg.includes("locat") || msg.includes("address") || msg.includes("where") || msg.includes("direction") || msg.includes("find")) {
    return {
      from: "bot",
      text: "We're located at 3300 Steeles Ave W, Unit #6, Vaughan, ON L4K 2Y4. Easy parking available on-site!",
      link: { label: "Get Directions →", href: "/contact" },
    };
  }

  if (msg.includes("emerg") || msg.includes("urgent") || msg.includes("pain") || msg.includes("broke") || msg.includes("crack")) {
    return {
      from: "bot",
      text: "We offer 24/7 emergency dental care! For urgent situations, call us immediately at (437) 900-2200 and we will prioritize your appointment.",
      link: { label: "Book Emergency →", href: "/services/emergency-dental-care" },
    };
  }

  if (msg.includes("implant")) {
    return {
      from: "bot",
      text: "Dr. Adibrad specializes in One-Day Dental Implants using the latest surgical technology. Book a free consultation to find out if implants are right for you.",
      link: { label: "Learn About Implants →", href: "/services/dental-implants" },
    };
  }

  if (msg.includes("veneer") || msg.includes("whitening") || msg.includes("cosmetic") || msg.includes("smile")) {
    return {
      from: "bot",
      text: "We offer porcelain veneers, teeth whitening, dental bonding, and full smile makeovers. Dr. Adibrad will design a smile that's uniquely yours!",
      link: { label: "Cosmetic Dentistry →", href: "/services/cosmetic-dentistry" },
    };
  }

  if (msg.includes("price") || msg.includes("cost") || msg.includes("how much") || msg.includes("fee")) {
    return {
      from: "bot",
      text: "Treatment costs vary depending on the procedure. We accept most insurance plans and CDCP. Call us at (437) 900-2200 or book a consultation for a personalized quote.",
      link: { label: "Book a Consultation →", href: "/appointment" },
    };
  }

  if (msg.includes("doctor") || msg.includes("dentist") || msg.includes("dr") || msg.includes("adibrad")) {
    return {
      from: "bot",
      text: "Dr. Mehdi Adibrad is our Head & Implant Surgeon with 12+ years of experience. He's a member of the ITI and the Ontario Dental Association.",
      link: { label: "Learn More About Dr. Adibrad →", href: "/about" },
    };
  }

  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey") || msg.includes("good")) {
    return {
      from: "bot",
      text: "Hello! 👋 Welcome to Dentin Family Dentistry. How can I help you today? You can ask me about our services, hours, location, or booking an appointment.",
    };
  }

  if (msg.includes("thank")) {
    return {
      from: "bot",
      text: "You're very welcome! 😊 Is there anything else I can help you with? We look forward to seeing you at Dentin Family Dentistry.",
    };
  }

  return {
    from: "bot",
    text: "I'm not sure I have an answer for that, but our team would love to help! Call us at (437) 900-2200 or send us a message.",
    link: { label: "Contact Us →", href: "/contact" },
  };
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi there! 👋 I'm the Dentin Dental assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = { from: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const reply = getBotReply(trimmed);
      setTyping(false);
      setMessages((prev) => [...prev, reply]);
    }, 900);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") sendMessage(input);
  }

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm shadow-2xl rounded-2xl overflow-hidden flex flex-col bg-white border border-gray-100"
          style={{ height: "480px" }}>

          {/* Header */}
          <div className="bg-[#0D9488] px-5 py-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm">
                D
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Dentin Dental</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-300 rounded-full" />
                  <span className="text-white/80 text-xs">Online · Typically replies instantly</span>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#F8F8FF]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] ${msg.from === "user" ? "" : "flex flex-col gap-1.5"}`}>
                  <div
                    className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
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
                      className="inline-block text-xs font-semibold text-[#0D9488] hover:text-[#09625C] hover:underline transition-colors"
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

          {/* Quick replies */}
          <div className="px-3 py-2 border-t border-gray-100 bg-white flex gap-2 overflow-x-auto shrink-0 scrollbar-hide">
            {QUICK_REPLIES.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="shrink-0 text-xs border border-[#0D9488] text-[#0D9488] rounded-full px-3 py-1.5 hover:bg-[#0D9488] hover:text-white transition-colors whitespace-nowrap"
              >
                {q}
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
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
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
        aria-label="Open chat"
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
