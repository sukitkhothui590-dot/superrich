"use client";

export default function AboutPage() {
  return (
    <>
      {/* Hero - 1440/560 */}
      <section className="relative z-0 bg-gradient-to-br from-[#0F766E] to-[#0F766E]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 lg:py-10">
          <div className="relative w-full" style={{ aspectRatio: "1440/560" }}>
            {/* Background size placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/25 font-bold text-3xl sm:text-4xl lg:text-5xl tracking-wider">
                1440×560
              </span>
            </div>

            {/* Foreground text */}
            <div className="absolute inset-0 flex items-start pt-6 sm:pt-8 lg:pt-12">
              <div className="max-w-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-tight text-white">
                  เกี่ยวกับเรา
                </h1>
                <p className="mt-3 text-sm sm:text-base lg:text-lg font-medium text-white/90">
                  บริษัท ซุปเปอร์ริช เคอเรนซี่ เอ็กซ์เชนจ์ (1965) จำกัด เป็นผู้ให้บริการแลกเปลี่ยนเงินตราต่างประเทศ
                  ที่ได้รับความไว้วางใจจากลูกค้าทั้งในประเทศและต่างประเทศมายาวนาน ด้วยอัตราแลกเปลี่ยนที่คุ้มค่า
                  และการบริการที่เป็นมืออาชีพ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: History + main image + highlight stat */}
      <section className="bg-surface-0 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] gap-10 lg:gap-14 items-start">
          {/* Left image placeholder */}
          <div>
            <div className="rounded-2xl overflow-hidden bg-surface-50 border border-[#E5E7EB] aspect-[4/3] flex items-center justify-center">
              <span className="text-surface-300 font-bold text-2xl sm:text-3xl tracking-wider">
                720×540
              </span>
            </div>
          </div>

          {/* Right content */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F766E]">
              ประวัติการก่อตั้งและเป้าหมาย
            </h2>
            <p className="mt-3 text-sm sm:text-base text-surface-700 leading-relaxed">
              ซุปเปอร์ริช (1965) เริ่มต้นจากธุรกิจแลกเปลี่ยนเงินตราต่างประเทศขนาดเล็กในย่านใจกลางเมืองกรุงเทพฯ
              และเติบโตอย่างต่อเนื่องจนกลายเป็นหนึ่งในผู้นำด้านการแลกเปลี่ยนเงินตราต่างประเทศของประเทศไทย
              ด้วยประสบการณ์ยาวนานและการพัฒนาบริการอย่างไม่หยุดยั้ง
            </p>
            <p className="mt-3 text-sm sm:text-base text-surface-700 leading-relaxed">
              เรามุ่งมั่นที่จะมอบอัตราแลกเปลี่ยนที่คุ้มค่า โปร่งใส และปลอดภัย พร้อมยกระดับมาตรฐานการให้บริการ
              เพื่อสร้างประสบการณ์ที่ดีที่สุดให้กับลูกค้าทุกคน ทั้งนักท่องเที่ยว นักธุรกิจ และองค์กรชั้นนำ
            </p>

            <div className="mt-6 inline-flex items-center gap-4 rounded-2xl bg-[#FFF3E8] px-5 py-4">
              <div className="flex flex-col">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#0F766E] leading-none">
                  60+
                </span>
                <span className="mt-1 text-sm font-semibold text-surface-700">
                  ปีแห่งประสบการณ์
                </span>
                <span className="text-xs text-surface-500">
                  ในธุรกิจแลกเปลี่ยนเงินตราต่างประเทศ
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Metrics cards */}
      <section className="bg-white py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          {/* Section title */}
          <div className="text-center mb-10">
            <p className="text-lg sm:text-xl font-semibold text-surface-700">
              ความแข็งแกร่งของ
            </p>
            <p className="text-xl sm:text-2xl font-bold text-[#0F766E]">
              ซุปเปอร์ริช (1965) สีส้ม
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {/* Card 1 - 60+ ปี */}
            <div className="rounded-2xl border border-[#F0E0D0] bg-white overflow-hidden shadow-sm">
              <div className="bg-gradient-to-br from-[#0F766E] to-[#0F766E] px-5 py-7 text-center text-white">
                <p className="text-sm font-semibold tracking-wide">ประสบการณ์กว่า</p>
                <p className="mt-1 text-5xl font-extrabold leading-none">
                  60<span className="text-3xl align-top">+</span>
                </p>
                <p className="mt-1 text-base font-semibold">ปี</p>
              </div>
              <div className="px-5 py-5 text-center">
                <p className="text-sm font-bold text-[#0F766E] mb-2">ตั้งเดิม</p>
                <p className="text-xs text-surface-500 leading-relaxed">
                  ด้วยประสบการณ์กว่า 60 ปี
                  ซุปเปอร์ริชได้กลายเป็นผู้นำด้านการแลกเปลี่ยนเงินตราในประเทศไทยที่ได้รับความไว้วางใจจากลูกค้าตลอดมา
                </p>
              </div>
            </div>

            {/* Card 2 - 40+ สาขา */}
            <div className="rounded-2xl border border-[#F0E0D0] bg-white overflow-hidden shadow-sm">
              <div className="bg-gradient-to-br from-[#0F766E] to-[#0F766E] px-5 py-7 text-center text-white">
                <p className="text-sm font-semibold tracking-wide">สาขามากกว่า</p>
                <p className="mt-1 text-5xl font-extrabold leading-none">
                  40<span className="text-3xl align-top">+</span>
                </p>
                <p className="mt-1 text-base font-semibold">สาขา</p>
              </div>
              <div className="px-5 py-5 text-center">
                <p className="text-sm font-bold text-[#0F766E] mb-2">ครอบคลุม</p>
                <p className="text-xs text-surface-500 leading-relaxed">
                  มีสาขามากกว่า 40 สาขา ในพื้นที่หลักกรุงเทพฯ
                  เพื่อลูกค้าเข้าถึงบริการของเราได้อย่างสะดวกและรวดเร็ว
                </p>
              </div>
            </div>

            {/* Card 3 - บริการด้วยใจ (SPR logo) */}
            <div className="rounded-2xl border border-[#F0E0D0] bg-white overflow-hidden shadow-sm">
              <div className="bg-gradient-to-br from-[#0F766E] to-[#0F766E] px-5 py-7 text-center text-white flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-2">
                  <span className="text-[#0F766E] font-black text-sm">SPR</span>
                </div>
                <p className="text-xs font-medium tracking-wide">SuperRich</p>
                <p className="text-[10px] text-white/80">Currency Exchange</p>
                <p className="mt-1.5 text-lg font-extrabold">บริการด้วยใจ</p>
              </div>
              <div className="px-5 py-5 text-center">
                <p className="text-sm font-bold text-[#0F766E] mb-2">บริการเด่น</p>
                <p className="text-xs text-surface-500 leading-relaxed">
                  ซุปเปอร์ริชพร้อมบริการและให้คำแนะนำด้วยความจริงใจ
                  เพื่อให้ลูกค้าได้รับประสบการณ์ที่ดีที่สุดทุกครั้งที่มาใช้บริการ
                </p>
              </div>
            </div>

            {/* Card 4 - 380+ คน */}
            <div className="rounded-2xl border border-[#F0E0D0] bg-white overflow-hidden shadow-sm">
              <div className="bg-gradient-to-br from-[#0F766E] to-[#0F766E] px-5 py-7 text-center text-white">
                <p className="text-sm font-semibold tracking-wide">พนักงานมากกว่า</p>
                <p className="mt-1 text-5xl font-extrabold leading-none">
                  380<span className="text-3xl align-top">+</span>
                </p>
                <p className="mt-1 text-base font-semibold">คน</p>
              </div>
              <div className="px-5 py-5 text-center">
                <p className="text-sm font-bold text-[#0F766E] mb-2">มืออาชีพ</p>
                <p className="text-xs text-surface-500 leading-relaxed">
                  พนักงานมากกว่า 300 คน ที่ต้องผ่านการฝึกอบรมมีความเชี่ยวชาญด้านการแลกเปลี่ยนเงินตราต่างประเทศ
                  ทำให้มั่นใจในทุกการทำธุรกรรม
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Vision of chairman */}
      <section className="bg-gradient-to-r from-[#0F766E] to-[#0F766E] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              วิสัยทัศน์ของประธานกรรมการ
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed">
              เราเชื่อว่าการแลกเปลี่ยนเงินตราต่างประเทศไม่ใช่แค่การเปลี่ยนตัวเลขบนธนบัตร
              แต่คือการเชื่อมต่อโอกาสของผู้คนทั่วโลก ซุปเปอร์ริช (1965) จึงมุ่งมั่นพัฒนาบริการที่โปร่งใส
              เป็นธรรม และทันสมัย เพื่อให้ลูกค้าทุกคนสามารถเดินทาง ทำธุรกิจ และใช้ชีวิตได้อย่างมั่นใจ
            </p>
            <p className="mt-3 text-sm sm:text-base text-white/90 leading-relaxed">
              เราจะเดินหน้าสร้างมาตรฐานใหม่ของธุรกิจแลกเปลี่ยนเงินตราต่างประเทศในประเทศไทย
              พร้อมทั้งขยายเครือข่ายการให้บริการให้ครอบคลุมและเข้าถึงได้ง่ายยิ่งขึ้น
            </p>
            <div className="mt-5">
              <p className="text-sm font-semibold text-white">
                คุณนิธิ – ตัวแทนวิสัยทัศน์องค์กร
              </p>
              <p className="text-xs text-white/80">
                ประธานกรรมการ บริษัท ซุปเปอร์ริช เคอเรนซี่ เอ็กซ์เชนจ์ (1965) จำกัด
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden bg-white/5 border border-white/40 flex items-center justify-center aspect-[3/4]">
              <span className="text-white/60 font-bold text-2xl tracking-wider">
                400×520
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Bottom CTA cards */}
      <section className="bg-surface-0 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <a
            href="/exchange-rate"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0F766E] to-[#0F766E] px-6 py-8 sm:px-8 sm:py-9 text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
              SuperRich
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold">
              Exchange rate
            </h3>
            <p className="mt-2 text-sm sm:text-base text-white/90 max-w-sm">
              ตรวจสอบอัตราแลกเปลี่ยนสกุลเงินต่างประเทศแบบเรียลไทม์ อัปเดตทุกวันด้วยข้อมูลจากสาขาซุปเปอร์ริช
            </p>
            <span className="mt-4 inline-flex items-center text-sm font-semibold">
              ดูรายละเอียด
              <svg
                className="ml-2 w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>

          <a
            href="/services"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0F766E] to-[#0F766E] px-6 py-8 sm:px-8 sm:py-9 text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
              SuperRich
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold">
              Online Booking
            </h3>
            <p className="mt-2 text-sm sm:text-base text-white/90 max-w-sm">
              วางแผนแลกเงินล่วงหน้าอย่างสะดวกสบาย เลือกสกุลเงินและสาขารับเงินได้ตามต้องการผ่านระบบจองออนไลน์
            </p>
            <span className="mt-4 inline-flex items-center text-sm font-semibold">
              ดูรายละเอียด
              <svg
                className="ml-2 w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}

