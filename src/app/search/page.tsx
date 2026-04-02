import Navbar from "@/components/Navbar";

const chips = ["All", "Running Shoes", "Training Gear", "Jackets", "Shorts", "Socks", "Accessories", "Sale"];

const featuredCategories = [
  { name: "Running", count: "142 items", bg: "#1A1A18", accent: "#D94F2B" },
  { name: "Training", count: "98 items", bg: "#D94F2B", accent: "#1A1A18" },
  { name: "Outdoor", count: "76 items", bg: "#2B4A3A", accent: "#6FCF97" },
];

const trendingSearches = ["Air Max 2025", "Trail Running", "Compression Tights", "Waterproof Jacket"];

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#F5F4F0] font-['Inter_Tight',system-ui,sans-serif]">
      <Navbar />

      {/* Search Hero */}
      <div className="flex flex-col items-center shrink-0 pt-13 pb-9 bg-[#F5F4F0] px-40" style={{ paddingTop: 52, paddingBottom: 36 }}>
        <div className="tracking-[4px] uppercase mb-4 text-[#D94F2B] font-bold text-[11px] leading-[14px]">
          Discover
        </div>
        <div className="tracking-[-1.5px] uppercase mb-8 text-center text-[#1A1A18] font-black text-[40px] leading-[48px]">
          Find Your Perfect Gear
        </div>
        <div className="flex items-center w-full max-w-[760px] h-14 rounded-sm overflow-clip bg-white border-2 border-[#1A1A18] shrink-0">
          <div className="flex items-center px-5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B6960" strokeWidth="2" style={{ flexShrink: 0 }}>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <div className="flex-1 tracking-[0.3px] text-[#6B6960] text-sm leading-[18px]">
            Search for products, brands, categories...
          </div>
          <div className="h-14 flex items-center px-8 bg-[#1A1A18]">
            <div className="tracking-[2.5px] uppercase text-white font-bold shrink-0 text-[11px] leading-[14px]">
              Search
            </div>
          </div>
        </div>
      </div>

      {/* Category Chips */}
      <div className="flex items-center shrink-0 flex-nowrap pb-8 gap-2.5 px-40 overflow-x-auto">
        {chips.map((chip, i) => {
          const isActive = chip === "All";
          const isSale = chip === "Sale";
          return (
            <div
              key={chip}
              className="rounded-[100px] py-2.5 px-5 shrink-0 cursor-pointer"
              style={{
                background: isActive ? "#1A1A18" : isSale ? "#D94F2B" : "white",
                border: isActive || isSale ? "none" : "1px solid #D0CEC9",
              }}
            >
              <div
                className="tracking-[0.5px] w-max text-xs leading-4"
                style={{
                  color: isActive || isSale ? "white" : "#1A1A18",
                  fontWeight: isActive || isSale ? 600 : 500,
                  letterSpacing: isActive ? "1px" : "0.5px",
                }}
              >
                {chip}
              </div>
            </div>
          );
        })}
      </div>

      {/* Featured Categories Grid */}
      <div className="flex shrink-0 px-40 gap-0.5 mb-0" style={{ height: 340 }}>
        {featuredCategories.map((cat) => (
          <div
            key={cat.name}
            className="flex-1 flex flex-col justify-end relative overflow-clip p-7"
            style={{ background: cat.bg }}
          >
            <div
              className="absolute top-5 right-5 tracking-[3px] uppercase font-bold text-[10px] leading-3"
              style={{ color: cat.accent, opacity: cat.name === "Training" ? 0.6 : 1 }}
            >
              {cat.count}
            </div>
            <div
              className="tracking-[1.5px] uppercase mb-1.5 text-white font-extrabold text-[22px] leading-7"
            >
              {cat.name}
            </div>
            <div className="flex items-center gap-2">
              <div
                className="tracking-[1px] shrink-0 text-[11px] leading-[14px]"
                style={{ color: cat.name === "Training" ? "#FFD4C8" : "#6B6960" }}
              >
                Explore
              </div>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                style={{ flexShrink: 0, stroke: cat.name === "Training" ? "#FFD4C8" : "#6B6960" }}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Trending Searches */}
      <div className="flex items-center shrink-0 py-6 px-40 gap-6 bg-[#F5F4F0] border-t border-[#E8E5DF]">
        <div className="tracking-[3px] uppercase w-max text-[#6B6960] font-bold shrink-0 text-[10px] leading-3">
          Trending:
        </div>
        <div className="flex items-center flex-nowrap gap-3">
          {trendingSearches.map((term, i) => {
            const isHighlighted = i === trendingSearches.length - 1;
            return (
              <div
                key={term}
                className="flex items-center rounded-sm py-2 px-4 gap-1.5 cursor-pointer"
                style={{ background: isHighlighted ? "#D94F2B" : "#E8E5DF" }}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2.5"
                  style={{ flexShrink: 0, stroke: isHighlighted ? "#FFFFFF" : "#6B6960" }}
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <div
                  className="tracking-[0.5px] w-max shrink-0 text-xs leading-4"
                  style={{
                    color: isHighlighted ? "white" : "#1A1A18",
                    fontWeight: isHighlighted ? 600 : 400,
                  }}
                >
                  {term}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
