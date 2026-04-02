import Navbar from "@/components/Navbar";

const categories = [
  { num: "01", name: "Running", count: "142 products", bg: "#2A2A28", numColor: "#D94F2B", countColor: "#6B6960" },
  { num: "02", name: "Training", count: "98 products", bg: "#252523", numColor: "#D94F2B", countColor: "#6B6960" },
  { num: "03", name: "Outdoor", count: "76 products", bg: "#D94F2B", numColor: "#1A1A18", countColor: "#1A1A18" },
  { num: "04", name: "Apparel", count: "215 products", bg: "#1E1E1C", numColor: "#D94F2B", countColor: "#6B6960" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F4F0] font-['Inter_Tight',system-ui,sans-serif]">
      <Navbar />

      {/* Hero Section */}
      <section className="flex w-full bg-[#1A1A18]" style={{ minHeight: "calc(100vh - 64px)" }}>
        {/* Left content */}
        <div className="flex flex-col justify-center flex-1 px-20 py-16">
          <div className="tracking-[5px] uppercase mb-6 text-[#D94F2B] font-bold text-[11px] leading-[14px]">
            New Collection 2025
          </div>
          <div className="text-[80px] leading-[1] tracking-[-3px] uppercase text-white font-black">
            GEAR UP FOR
          </div>
          <div className="text-[80px] leading-[1] tracking-[-3px] uppercase mb-8 text-[#D94F2B] font-black">
            GREATNESS
          </div>
          <div className="text-[15px] leading-[165%] mb-11 text-[#6B6960]">
            Discover premium athletic gear and apparel<br />engineered for peak performance.
          </div>
          <div className="flex items-center gap-6">
            <a href="/search" className="rounded-sm py-4 px-10 bg-[#D94F2B] hover:bg-[#c44526] transition-colors">
              <span className="tracking-[3px] uppercase text-white font-extrabold text-xs leading-4">
                Shop Now
              </span>
            </a>
            <a href="/search" className="flex items-center gap-2.5">
              <span className="inline-block tracking-[1.5px] uppercase text-[#E8E5DF] font-medium shrink-0 text-xs leading-4">
                Explore
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8E5DF" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right panel */}
        <div className="w-[480px] shrink-0 flex items-center justify-center bg-[#222220]">
          <div
            className="flex items-center justify-center rounded-full border border-[#D94F2B22] shrink-0"
            style={{
              width: 320,
              height: 320,
              background: "linear-gradient(135deg, rgba(217,79,43,0.094) 0%, rgba(217,79,43,0.19) 100%)",
            }}
          >
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="50" cy="50" r="45" stroke="#D94F2B" opacity="0.4" />
              <path d="M30 50 Q50 20 70 50 Q50 80 30 50Z" fill="#D94F2B" opacity="0.6" />
            </svg>
          </div>
        </div>
      </section>

      {/* Categories Strip */}
      <section className="flex w-full" style={{ minHeight: 316 }}>
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex-1 flex flex-col justify-end py-7 px-8 border-r border-[#111110] last:border-r-0"
            style={{ background: cat.bg }}
          >
            <div
              className="tracking-[3px] uppercase mb-2 font-bold text-[10px] leading-3"
              style={{ color: cat.numColor }}
            >
              {cat.num}
            </div>
            <div className="tracking-[2px] uppercase text-white font-extrabold text-xl leading-6">
              {cat.name}
            </div>
            <div
              className="tracking-[1px] mt-1 text-[11px] leading-[14px]"
              style={{ color: cat.countColor, opacity: cat.name === "Outdoor" ? 0.7 : 1 }}
            >
              {cat.count}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
