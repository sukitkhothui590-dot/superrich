import BranchNearbySection from "@/components/sections/BranchNearbySection";

const steps = [
  {
    step: "01",
    title: "เตรียมเอกสาร",
    desc: "เตรียมบัตรประชาชน หรือหนังสือเดินทางตัวจริง สำหรับแสดงต่อเจ้าหน้าที่ก่อนทำรายการ",
  },
  {
    step: "02",
    title: "เลือกสาขาที่สะดวก",
    desc: "ตรวจสอบสาขาใกล้คุณ หรือจองล่วงหน้าผ่านระบบออนไลน์เพื่อความรวดเร็ว",
  },
  {
    step: "03",
    title: "ตรวจสอบอัตราแลกเปลี่ยน",
    desc: "เช็คอัตราแลกเปลี่ยนล่าสุดบนเว็บไซต์หรือที่สาขา ก่อนทำรายการทุกครั้ง",
  },
  {
    step: "04",
    title: "ยื่นเอกสารและเงินที่เคาน์เตอร์",
    desc: "แสดงเอกสารและแจ้งสกุลเงินที่ต้องการ พร้อมจำนวนเงินที่ต้องการแลก",
  },
  {
    step: "05",
    title: "รับเงินตราต่างประเทศ",
    desc: "เจ้าหน้าที่จะทำรายการและส่งมอบเงินตราต่างประเทศ พร้อมใบเสร็จรับเงิน",
  },
  {
    step: "06",
    title: "ตรวจนับเงินก่อนออกจากเคาน์เตอร์",
    desc: "กรุณาตรวจนับจำนวนเงินให้ครบถ้วน และตรวจสอบใบเสร็จก่อนออกจากสาขา",
  },
];

export default function SprMoneyExchangePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative z-0 bg-gradient-to-br from-[#F58A2A] to-[#F26522]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 lg:py-10">
          <div className="relative w-full" style={{ aspectRatio: "1440/560" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/25 font-bold text-3xl sm:text-4xl lg:text-5xl tracking-wider">
                1440×560
              </span>
            </div>

            <div className="absolute inset-0 flex items-start pt-6 sm:pt-10 lg:pt-14">
              <div className="max-w-xl">
                <p className="text-sm font-semibold tracking-[0.16em] uppercase text-white/80">
                  SuperRich
                </p>
                <h1 className="mt-1 text-3xl sm:text-4xl lg:text-[48px] font-extrabold leading-tight text-white">
                  Money Exchange
                </h1>
                <p className="mt-2 text-base sm:text-lg font-medium text-white/90">
                  บริการแลกเปลี่ยนเงินตราต่างประเทศ
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Overlapping info card */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1/2 z-10 flex justify-center px-4">
          <div className="pointer-events-auto w-full max-w-2xl rounded-2xl bg-white shadow-[0_16px_40px_rgba(15,23,42,0.16)] px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F26522]">
              SPR Money Exchange
            </h2>
            <p className="mt-1 text-sm text-surface-500">
              บริการแลกเปลี่ยนเงินตราต่างประเทศ
            </p>
            <p className="mt-3 text-sm sm:text-base text-surface-600 leading-relaxed">
              SuperRich Currency Exchange (1965) ให้บริการแลกเปลี่ยนเงินตราต่างประเทศมากกว่า 40 สกุลเงิน
              ด้วยอัตราแลกเปลี่ยนที่แข่งขันได้และโปร่งใส ผ่านสาขาที่ครอบคลุมทั่วกรุงเทพฯ
              พร้อมทีมงานมืออาชีพที่พร้อมให้คำแนะนำและดูแลทุกรายการอย่างใส่ใจ
            </p>
          </div>
        </div>
      </section>

      {/* Spacer for overlapping card */}
      <div className="h-24 sm:h-28 lg:h-32 bg-surface-0" />

      {/* Steps section */}
      <section className="bg-surface-0 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <h2 className="text-center text-lg sm:text-xl font-bold text-surface-800 mb-8 lg:mb-10">
            ขั้นตอนการเข้ารับบริการแลกเปลี่ยนเงินตราต่างประเทศ
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((s) => (
              <div key={s.step} className="group">
                {/* Image placeholder */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface-100 border border-[#E5E7EB] flex items-center justify-center">
                  <span className="text-surface-300 font-bold text-xl tracking-wider">
                    480×360
                  </span>
                </div>
                {/* Step info */}
                <div className="mt-4">
                  <p className="flex items-center gap-2 text-[#F26522] font-bold text-sm">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#F26522] text-white text-[10px] font-bold">
                      ✓
                    </span>
                    Step {s.step}
                  </p>
                  <h3 className="mt-1.5 text-base font-bold text-surface-800">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-surface-500 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exchange Rates CTA Banner */}
      <section className="relative z-0 overflow-hidden">
        <div className="relative w-full" style={{ aspectRatio: "1440/400" }}>
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F58A2A]/90 to-[#F26522]/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/15 font-bold text-3xl sm:text-4xl lg:text-5xl tracking-wider">
              1440×400
            </span>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 lg:px-6 w-full">
              <div className="max-w-lg ml-auto text-right">
                <p className="text-sm font-semibold tracking-[0.16em] uppercase text-white/80">
                  SuperRich
                </p>
                <h2 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Exchange Rates
                </h2>
                <p className="mt-2 text-sm sm:text-base text-white/90">
                  ตรวจสอบอัตราแลกเปลี่ยนเงินตราต่างประเทศ อัปเดตทุกวัน
                </p>
                <a
                  href="/exchange-rate"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border-2 border-white text-white text-sm font-semibold px-5 py-2.5 hover:bg-white hover:text-[#F26522] transition-colors"
                >
                  ดูอัตราแลกเปลี่ยน
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch nearby */}
      <BranchNearbySection />
    </>
  );
}


