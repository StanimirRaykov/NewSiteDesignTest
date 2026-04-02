import Navbar from "@/components/Navbar";

const navItems = [
  { label: "Account", active: true },
  { label: "Orders", active: false },
  { label: "Addresses", active: false },
  { label: "Payment Methods", active: false },
  { label: "Notifications", active: false },
  { label: "Privacy", active: false },
  { label: "Help & Support", active: false },
];

export default function SettingsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F4F0] font-['Inter_Tight',system-ui,sans-serif]">
      <Navbar />
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <div className="w-[280px] shrink-0 py-10 bg-[#1A1A18]">
          <div className="mb-8 px-8">
            <div className="tracking-[3px] uppercase text-[#6B6960] font-bold text-[10px] leading-3">
              Settings
            </div>
          </div>
          {navItems.map((item) =>
            item.active ? (
              <div
                key={item.label}
                className="flex items-center py-3.5 px-8 gap-3 bg-[#D94F2B]"
                style={{ borderLeft: "3px solid #FF6B47" }}
              >
                <div className="tracking-[1px] text-white font-semibold shrink-0 text-[13px] leading-4">
                  {item.label}
                </div>
              </div>
            ) : (
              <div key={item.label} className="flex items-center py-3.5 px-8 gap-3 hover:bg-[#252523] cursor-pointer">
                <div className="tracking-[1px] text-[#6B6960] shrink-0 text-[13px] leading-4">
                  {item.label}
                </div>
              </div>
            )
          )}
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col py-13 px-16 bg-[#F5F4F0]" style={{ paddingTop: 52, paddingBottom: 52 }}>
          <div className="tracking-[-0.5px] mb-2 text-[#1A1A18] font-extrabold text-[28px] leading-[34px]">
            Account Settings
          </div>
          <div className="tracking-[0.5px] mb-12 text-[#6B6960] text-[13px] leading-4">
            Manage your profile and preferences
          </div>

          {/* Avatar + Name */}
          <div className="flex items-start gap-12">
            <div className="flex items-center justify-center shrink-0 rounded-full bg-[#E8E5DF] border-2 border-[#D0CEC9]" style={{ width: 96, height: 96 }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6B6960" strokeWidth="1.5" style={{ flexShrink: 0 }}>
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="flex flex-col pt-2 gap-1.5">
              <div className="text-[#1A1A18] font-bold text-lg leading-[22px]">Alex Mitchell</div>
              <div className="text-[#6B6960] text-[13px] leading-4">alex.mitchell@example.com</div>
              <div className="tracking-[1px] uppercase mt-1 text-[#D94F2B] font-semibold text-[11px] leading-[14px] cursor-pointer hover:underline">
                Change Photo
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-[#E8E5DF] shrink-0 my-9" />

          {/* Form */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              <div className="flex flex-col flex-1 gap-2">
                <div className="tracking-[1.5px] uppercase text-[#1A1A18] font-semibold text-[11px] leading-[14px]">
                  First Name
                </div>
                <div className="h-12 flex items-center rounded-sm px-4 bg-white border border-[#E8E5DF] shrink-0">
                  <div className="text-[#1A1A18] shrink-0 text-sm leading-[18px]">Alex</div>
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <div className="tracking-[1.5px] uppercase text-[#1A1A18] font-semibold text-[11px] leading-[14px]">
                  Last Name
                </div>
                <div className="h-12 flex items-center rounded-sm px-4 bg-white border border-[#E8E5DF] shrink-0">
                  <div className="text-[#1A1A18] shrink-0 text-sm leading-[18px]">Mitchell</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="tracking-[1.5px] uppercase text-[#1A1A18] font-semibold text-[11px] leading-[14px]">
                Email Address
              </div>
              <div className="h-12 flex items-center rounded-sm px-4 bg-white border border-[#E8E5DF] shrink-0">
                <div className="text-[#1A1A18] shrink-0 text-sm leading-[18px]">alex.mitchell@example.com</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="tracking-[1.5px] uppercase text-[#1A1A18] font-semibold text-[11px] leading-[14px]">
                Phone Number
              </div>
              <div className="h-12 flex items-center rounded-sm px-4 bg-white border border-[#E8E5DF] shrink-0">
                <div className="text-[#6B6960] shrink-0 text-sm leading-[18px]">+1 (555) 000-0000</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex mt-8 gap-4">
            <button className="rounded-sm py-4 px-9 bg-[#D94F2B] hover:bg-[#c44526] transition-colors cursor-pointer">
              <span className="tracking-[2.5px] uppercase text-white font-bold text-xs leading-4">
                Save Changes
              </span>
            </button>
            <button className="rounded-sm py-4 px-7 border border-[#D0CEC9] hover:bg-[#E8E5DF] transition-colors cursor-pointer">
              <span className="tracking-[2px] uppercase text-[#1A1A18] font-semibold text-xs leading-4">
                Cancel
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
