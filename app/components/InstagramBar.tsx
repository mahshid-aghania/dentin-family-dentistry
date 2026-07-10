import Link from "next/link";

function IgIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function InstagramBar() {
  return (
    <a
      href="https://www.instagram.com/dentin_family_dentistry/"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between px-5 py-3.5 w-full transition-opacity hover:opacity-90"
      style={{
        background: "linear-gradient(90deg,#833ab4,#fd1d1d,#fcb045)",
      }}
      aria-label="Follow Dentin Family Dentistry on Instagram"
    >
      <div className="flex items-center gap-2.5 text-white">
        <IgIcon size={18} />
        <span className="text-sm font-semibold tracking-wide">@dentin_family_dentistry</span>
      </div>
      <span className="text-white text-sm font-semibold flex items-center gap-1.5">
        Follow on Instagram
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </a>
  );
}
