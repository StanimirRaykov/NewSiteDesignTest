import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-16 h-16 bg-[#1A1A18] sticky top-0 z-50">
      <Link href="/" className="tracking-[5px] text-white font-['Inter_Tight',system-ui,sans-serif] font-black shrink-0 text-[22px] leading-7">
        APEX
      </Link>
      <div className="flex items-center gap-10">
        {(["Shop", "Categories"] as const).map((item) => (
          <Link
            key={item}
            href={item === "Shop" ? "/search" : "#"}
            className="tracking-[2.5px] uppercase text-[#E8E5DF] font-['Inter_Tight',system-ui,sans-serif] font-semibold shrink-0 text-xs leading-4 hover:text-white transition-colors"
          >
            {item}
          </Link>
        ))}
        <Link href="#" className="tracking-[2.5px] uppercase text-[#D94F2B] font-['Inter_Tight',system-ui,sans-serif] font-semibold shrink-0 text-xs leading-4">
          Sale
        </Link>
        <Link href="#" className="tracking-[2.5px] uppercase text-[#E8E5DF] font-['Inter_Tight',system-ui,sans-serif] font-semibold shrink-0 text-xs leading-4 hover:text-white transition-colors">
          About
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/search" aria-label="Search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8E5DF" strokeWidth="1.8" style={{ flexShrink: 0 }}>
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </Link>
        <Link href="#" aria-label="Cart">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8E5DF" strokeWidth="1.8" style={{ flexShrink: 0 }}>
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
        </Link>
        <Link href="/settings" aria-label="Account">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8E5DF" strokeWidth="1.8" style={{ flexShrink: 0 }}>
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </Link>
      </div>
    </nav>
  );
}
