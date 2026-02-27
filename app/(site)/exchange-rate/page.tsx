import { getRatesSync } from "@/lib/mock/rates";
import BranchNearbySection from "@/components/sections/BranchNearbySection";
import ExchangeWidget from "@/components/exchange/ExchangeWidget";

const countryMap: Record<string, string> = {
  USD: "us", EUR: "eu", GBP: "gb", CNY: "cn", AUD: "au", JPY: "jp",
  SGD: "sg", HKD: "hk", CHF: "ch", MYR: "my", NZD: "nz", CAD: "ca",
  TWD: "tw", KRW: "kr", PHP: "ph", INR: "in", AED: "ae", SAR: "sa",
  BHD: "bh", KWD: "kw",
};

function CurrencyFlag({ code }: { code: string }) {
  const country = countryMap[code] ?? "un";
  return (
    <div className="w-9 h-9 rounded-full bg-surface-0 flex items-center justify-center shadow-[0_0_0_1px_rgba(15,23,42,0.08)] shrink-0">
      <img
        src={`https://flagcdn.com/w40/${country}.png`}
        srcSet={`https://flagcdn.com/w80/${country}.png 2x`}
        alt={code}
        className="w-8 h-8 rounded-full object-cover"
      />
    </div>
  );
}

function fmtRate(v: number) {
  if (v < 0.1) return v.toFixed(4);
  if (v < 10) return v.toFixed(3);
  return v.toFixed(2);
}

export default function ExchangeRatePage() {
  const data = getRatesSync();

  return (
    <>
      {/* Hero banner */}
      <section className="relative z-0 bg-gradient-to-br from-[#0F766E] to-[#0F766E]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 lg:py-10">
          <div className="relative w-full" style={{ aspectRatio: "1440/560" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/25 font-bold text-3xl sm:text-4xl lg:text-5xl tracking-wider">
                1440×560
              </span>
            </div>

            <div className="absolute inset-0 flex items-start pt-6 sm:pt-8 lg:pt-12">
              <div className="max-w-xl">
                <p className="text-sm font-semibold tracking-[0.16em] uppercase text-white">
                  SuperRich
                </p>
                <h1 className="mt-1 text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-tight text-white">
                  Exchange rate
                </h1>
                <p className="mt-2 text-base sm:text-lg font-medium text-white/90">
                  อัตราแลกเปลี่ยน เงินตราต่างประเทศ
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-[240px] sm:top-[255px] lg:top-[270px] z-30 flex justify-start">
          <div className="w-full max-w-[920px] px-4 sm:pl-36 lg:pl-64 xl:pl-84">
            <ExchangeWidget />
          </div>
        </div>
      </section>

      {/* Rates table */}
      <section className="bg-surface-0 pt-48 pb-10 lg:pt-60 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 lg:mb-8">
            <div className="order-2 md:order-1 text-xs md:text-sm text-surface-500">
              <p>
                * ราคาข้อมูลล่าสุด:{" "}
                <span className="font-semibold text-surface-700">
                  {data.lastUpdated}
                </span>
              </p>
            </div>

            <div className="order-1 md:order-2 md:text-right">
              <h2 className="mt-1 text-base md:text-lg font-semibold text-surface-600">
                เรทถูกราคาดี แลกเงินไว้ใจเรา
              </h2>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0F766E] leading-tight">
                ตารางเรทค่าเงิน
              </h2>
              <p className="mt-1 text-sm md:text-base text-surface-600">
                ตรวจสอบค่าเงินต่างประเทศอัปเดตล่าสุด
              </p>
            </div>
          </div>

          {/* Table card */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_30px_rgba(15,23,42,0.16)]">
            {/* Orange header */}
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_100px] gap-x-2 px-6 py-3.5 bg-[#0F766E] text-white text-sm font-semibold">
              <div>ชื่อสกุลเงิน</div>
              <div className="text-right">ธนบัตร</div>
              <div className="text-right">
                SPR ซื้อ <span className="inline-block text-white/80">①</span>
              </div>
              <div className="text-right">
                SPR ขาย <span className="inline-block text-white/80">②</span>
              </div>
              <div />
            </div>

            {/* Body */}
            <div>
              {data.rates.map((rate, rIdx) => {
                const denoms = rate.denominations ?? [
                  { denom: "—", buy: rate.buy, sell: rate.sell },
                ];

                return (
                  <div
                    key={rate.code}
                    className={rIdx > 0 ? "border-t border-[#E5E7EB]" : ""}
                  >
                    {denoms.map((d, dIdx) => {
                      const isFirst = dIdx === 0;
                      return (
                        <div
                          key={`${rate.code}-${dIdx}`}
                          className={[
                            "grid grid-cols-[2fr_1fr_1fr_1fr_100px] gap-x-2 px-6 items-center text-sm",
                            isFirst ? "py-3" : "py-2",
                            dIdx > 0 ? "border-t border-[#F5F5F5]" : "",
                            "hover:bg-[#FFF7F2] transition-colors",
                          ].join(" ")}
                        >
                          {/* Currency info — first row only */}
                          {isFirst ? (
                            <div className="flex items-center gap-3">
                              <CurrencyFlag code={rate.code} />
                              <div>
                                <span className="font-bold text-surface-800 text-lg leading-tight">
                                  {rate.code}
                                </span>
                                <span className="ml-2 text-xs text-surface-400">
                                  {rate.name}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div />
                          )}

                          {/* Denomination */}
                          <div className="text-right text-sm text-surface-700 tabular-nums font-medium">
                            {d.denom}
                          </div>

                          {/* Buy */}
                          <div className="text-right font-semibold text-[#0F766E] tabular-nums text-sm">
                            {fmtRate(d.buy)}
                          </div>

                          {/* Sell */}
                          <div className="text-right font-semibold text-[#0F766E] tabular-nums text-sm">
                            {fmtRate(d.sell)}
                          </div>

                          {/* Button — first row only */}
                          <div className="flex justify-end">
                            {isFirst ? (
                              <button
                                type="button"
                                className="inline-flex items-center gap-1 rounded-lg bg-[#0F766E] text-white text-xs font-semibold px-3.5 py-1.5 hover:bg-[#0B5A53] transition-colors"
                              >
                                คำนวณ
                                <svg
                                  className="w-3 h-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </button>
                            ) : null}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

          </div>

          {/* หมายเหตุ card */}
          <div className="mt-8 rounded-xl border border-[#E5E7EB] border-t-[3px] border-t-[#0F766E] bg-white px-6 py-5">
            <h3 className="text-sm font-bold text-surface-800 mb-3">หมายเหตุ</h3>
            <ol className="list-decimal list-inside space-y-1.5 text-xs sm:text-sm text-surface-600 leading-relaxed">
              <li>
                อัตราแลกเปลี่ยนเงินตราต่างประเทศที่ปรากฏบนเว็บไซต์เป็นเพียงอัตราแลกเปลี่ยน ณ เวลานั้น
                ซึ่งมีความผันผวนและเปลี่ยนแปลงได้ตลอดเวลา บริษัทฯ
                ขอสงวนสิทธิ์ในการเปลี่ยนแปลงอัตราแลกเปลี่ยนโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
              </li>
              <li>
                ดุลพินิจในการพิจารณารับซื้อ / ขายเงินตราต่างประเทศสกุลเงินใดๆ เป็นไปตามที่ บริษัทฯ
                เป็นผู้กำหนด
              </li>
              <li>
                โปรดติดต่อสาขาที่ให้บริการของ บริษัทฯ
                เพื่อตรวจสอบสกุลเงินตราต่างประเทศและเงื่อนไขที่บริษัทฯ รับซื้อ / ขาย
                ก่อนเข้าทำธุรกรรมทุกครั้ง
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Nearby branch section */}
      <BranchNearbySection />
    </>
  );
}
