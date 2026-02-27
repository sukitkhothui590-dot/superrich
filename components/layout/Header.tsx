"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { key: "home", href: "/", label: "หน้าแรก", hasDropdown: false as const },
  {
    key: "rate",
    href: "/exchange-rate",
    label: "อัตราแลกเปลี่ยน",
    hasDropdown: true as const,
    dropdownItems: [
      { href: "/exchange-rate", label: "อัตราแลกเปลี่ยน" },
      { href: "/trip-budget-guide", label: "Trip Budget Guide" },
    ],
  },
  { key: "branches", href: "/branches", label: "สาขาทั้งหมด", hasDropdown: false as const },
  {
    key: "services",
    href: "/services",
    label: "บริการของเรา",
    hasDropdown: true as const,
    dropdownItems: [
      { href: "/spr-money-exchange", label: "SPR Money Exchange" },
      { href: "/services", label: "SPR Online Booking" },
      { href: "/services", label: "SPR Money Transfer" },
    ],
  },
  { key: "news", href: "/news", label: "ข่าวสาร", hasDropdown: false as const },
  {
    key: "contact",
    href: "/contact",
    label: "ติดต่อเรา",
    hasDropdown: true as const,
    dropdownItems: [
      { href: "/contact", label: "ติดต่อเรา" },
      { href: "/about", label: "เกี่ยวกับเรา" },
      { href: "/faq", label: "คำถามที่พบบ่อย" },
    ],
  },
] as const;

function ChevronDown({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function PhoneIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function LineIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 10.304C24 4.614 18.627.2 12 .2S0 4.614 0 10.304c0 5.003 4.434 9.192 10.424 9.984.406.088.96.268 1.1.616.126.316.082.81.04 1.128l-.178 1.068c-.054.326-.254 1.276 1.118.696 1.372-.58 7.396-4.356 10.09-7.454C24.22 14.466 24 12.432 24 10.304zM8.004 13.08a.444.444 0 01-.442.442H4.758a.442.442 0 01-.442-.442V8.112c0-.244.198-.442.442-.442.244 0 .442.198.442.442v4.526h2.362c.244 0 .442.198.442.442zm1.662 0c0 .244-.198.442-.442.442a.444.444 0 01-.442-.442V8.112c0-.244.198-.442.442-.442.244 0 .442.198.442.442v4.968zm5.086 0c0 .194-.114.37-.292.448a.426.426 0 01-.15.028.44.44 0 01-.354-.18L11.37 10.2v2.88c0 .244-.198.442-.442.442a.444.444 0 01-.442-.442V8.112c0-.194.114-.37.292-.448a.438.438 0 01.504.152l2.586 3.176V8.112c0-.244.198-.442.442-.442.244 0 .442.198.442.442v4.968zm3.734-3.528a.444.444 0 01-.442.442h-1.386v.876h1.386c.244 0 .442.198.442.442s-.198.442-.442.442h-1.386v.876h1.386c.244 0 .442.198.442.442s-.198.442-.442.442H16.6a.442.442 0 01-.442-.442V8.112c0-.244.198-.442.442-.442h1.886c.244 0 .442.198.442.442s-.198.442-.442.442H17.04v.876h1.446c.244 0 .442.198.442.442z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdownKey, setOpenDropdownKey] = useState<string | null>(null);
  const [openMobileDropdownKey, setOpenMobileDropdownKey] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdownKey(null);
    setOpenMobileDropdownKey(null);
  }, [pathname]);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 transition-shadow duration-300",
          scrolled ? "shadow-lg" : "",
        ].join(" ")}
      >
        {/* Top info bar */}
        <div className="hidden lg:block bg-surface-0 border-b border-border relative z-20">
          <div className="max-w-7xl mx-auto px-6 py-1.5 flex justify-between items-center text-[14px] text-orange-600">
            <span>บริษัท ซุปเปอร์ริช เคอเรนซี่ เอ็กซ์เชนจ์ (1965) จำกัด</span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <PhoneIcon className="w-3.5 h-3.5 text-orange-500" />
                02-057-8888
              </span>
              <span className="flex items-center gap-1.5">
                <LineIcon className="w-4 h-4 text-orange-500" />
                LINE : @SuperRich
              </span>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="bg-orange-500 relative z-10">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="flex items-center h-16 lg:h-[72px] gap-1">
              {/* Logo */}
              <Link href="/" aria-label="กลับหน้าแรก" className="shrink-0 flex items-center gap-2.5 mr-2">
                <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white flex items-center justify-center shrink-0">
                  <span className="text-orange-500 font-black text-sm lg:text-base tracking-tight">SPR</span>
                </div>
                <div className="hidden sm:block leading-tight">
                  <div className="text-white font-bold text-base lg:text-[18px] tracking-wide">SuperRich</div>
                  <div className="text-white/80 text-[12px] lg:text-[13px]">Currency Exchange</div>
                </div>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-0.5" aria-label="เมนูหลัก">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const isOpen = openDropdownKey === link.key;

                  if (!link.hasDropdown) {
                    return (
                      <Link
                        key={link.key}
                        href={link.href}
                        className="flex items-center gap-1 px-3 py-2 whitespace-nowrap"
                      >
                        <span
                          className={[
                            "text-base transition-colors duration-200 border-b-2",
                            isActive
                              ? "text-white font-bold border-white"
                              : "text-white/85 font-medium border-transparent hover:text-white hover:border-white/50",
                          ].join(" ")}
                        >
                          {link.label}
                        </span>
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={link.key}
                      className="relative"
                      onMouseEnter={() => setOpenDropdownKey(link.key)}
                    >
                      <button
                        type="button"
                        className="flex items-center gap-1 px-3 py-2 whitespace-nowrap"
                        onClick={() => setOpenDropdownKey(isOpen ? null : link.key)}
                      >
                        <span
                          className={[
                            "text-base transition-colors duration-200 border-b-2",
                            isActive
                              ? "text-white font-bold border-white"
                              : "text-white/85 font-medium border-transparent hover:text-white hover:border-white/50",
                          ].join(" ")}
                        >
                          {link.label}
                        </span>
                        <ChevronDown
                          className={[
                            "w-3 h-3 text-white/70 transition-transform duration-150",
                            isOpen ? "rotate-180" : "",
                          ].join(" ")}
                        />
                      </button>

                      {link.dropdownItems && isOpen && (
                        <div
                          className="absolute left-2 top-full mt-1 w-52 bg-white rounded-xl border border-border shadow-lg py-1"
                          onMouseLeave={() => setOpenDropdownKey(null)}
                        >
                          {link.dropdownItems.map((item, index) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className={[
                                "block px-4 py-2.5 text-sm",
                                index === 0
                                  ? "text-surface-700 font-semibold bg-surface-50"
                                  : "text-surface-600 hover:bg-surface-50",
                              ].join(" ")}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Mobile Hamburger */}
              <button
                className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "ปิดเมนู" : "เปิดเมนู"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav
            className="absolute top-0 right-0 w-72 h-full bg-surface-0 shadow-xl flex flex-col animate-[slideInRight_0.3s_ease-out]"
            aria-label="เมนูมือถือ"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-orange-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <span className="text-orange-500 font-black text-[12px]">SPR</span>
                </div>
                <span className="text-white font-bold text-base">SuperRich</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="ปิดเมนู"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Drawer Nav Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const isOpen = openMobileDropdownKey === link.key;

                if (!link.hasDropdown) {
                  return (
                    <Link
                      key={link.key}
                      href={link.href}
                      className={[
                        "flex items-center justify-between px-4 py-3 rounded-lg text-base transition-colors duration-200",
                        isActive
                          ? "bg-orange-500/10 text-orange-500 font-bold"
                          : "text-surface-700 font-medium hover:bg-surface-50",
                      ].join(" ")}
                    >
                      <span>{link.label}</span>
                    </Link>
                  );
                }

                return (
                  <div key={link.key} className="space-y-1">
                    <button
                      type="button"
                      className={[
                        "w-full flex items-center justify-between px-4 py-3 rounded-lg text-base transition-colors duration-200",
                        "text-surface-700 font-medium hover:bg-surface-50",
                      ].join(" ")}
                      onClick={() =>
                        setOpenMobileDropdownKey(isOpen ? null : link.key)
                      }
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={[
                          "w-3.5 h-3.5 text-surface-700/60 transition-transform duration-150",
                          isOpen ? "rotate-180" : "",
                        ].join(" ")}
                      />
                    </button>
                    {isOpen && link.dropdownItems && (
                      <div className="ml-4 pl-3 border-l border-border space-y-1">
                        {link.dropdownItems.map((item, index) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className={[
                              "block px-3 py-2 rounded-md text-sm",
                              index === 0
                                ? "text-surface-700 font-semibold bg-surface-50"
                                : "text-surface-600 hover:bg-surface-50",
                            ].join(" ")}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Drawer Bottom (contact only) */}
            <div className="p-4 border-t border-border">
              <div className="text-[14px] text-orange-600 space-y-1">
                <p className="flex items-center gap-1.5">
                  <PhoneIcon className="w-3.5 h-3.5 text-orange-500" />
                  02-057-8888
                </p>
                <p className="flex items-center gap-1.5">
                  <LineIcon className="w-4 h-4 text-orange-500" />
                  LINE : @SuperRich
                </p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

