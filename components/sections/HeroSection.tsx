"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { getRatesSync } from "@/lib/mock/rates";

const slides = [
  { id: 1, width: 1440, height: 560, label: "โปรโมชั่นแลกเปลี่ยนเงิน" },
  { id: 2, width: 1440, height: 560, label: "อัตราแลกเปลี่ยนวันนี้" },
  { id: 3, width: 1440, height: 560, label: "สมัครสมาชิกรับสิทธิพิเศษ" },
  { id: 4, width: 1440, height: 560, label: "บริการจัดส่งเงินถึงบ้าน" },
  { id: 5, width: 1440, height: 560, label: "สาขาใหม่เปิดให้บริการ" },
];

const AUTOPLAY_MS = 4000;

function ArrowLeft({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function SmallChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TinyArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0.898438 4.98568L10.3041 4.98568M10.3041 4.98568L6.88387 8.40592M10.3041 4.98568L6.88387 1.56543M0.898438 13.5363L14.5794 13.5363M14.5794 13.5363L11.1592 16.9565M14.5794 13.5363L11.1592 10.116"
        stroke="#F26522"
        strokeWidth="1.78935"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusMinusIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1.5"
        y="1.5"
        width="13"
        height="13"
        rx="3"
        stroke="#A7ADB6"
        strokeWidth="1.3"
      />
      <path
        d="M5 7.99996H11"
        stroke="#A7ADB6"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M8 5.00003V11"
        stroke="#A7ADB6"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function getCurrencyCountryCode(code: string): string {
  switch (code) {
    case "USD":
      return "us";
    case "EUR":
      return "eu";
    case "GBP":
      return "gb";
    case "CNY":
      return "cn";
    case "AUD":
      return "au";
    case "JPY":
      return "jp";
    case "SGD":
      return "sg";
    case "HKD":
      return "hk";
    case "THB":
      return "th";
    default:
      return "un";
  }
}

function CurrencyFlag({ code }: { code: string }) {
  const country = getCurrencyCountryCode(code);
  return (
    <div className="w-8 h-8 rounded-full bg-surface-50 flex items-center justify-center shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
      <img
        src={`https://flagcdn.com/w40/${country}.png`}
        srcSet={`https://flagcdn.com/w80/${country}.png 2x`}
        alt={code}
        className="w-7 h-7 rounded-full object-cover"
      />
    </div>
  );
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [activeTab, setActiveTab] = useState<"rate" | "calc">("rate");
  const [calcMode, setCalcMode] = useState<"toTHB" | "fromTHB">("toTHB");
  const [fromCode, setFromCode] = useState("USD");
  const [toCode, setToCode] = useState("THB");
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const rateData = getRatesSync();
  const topRates = rateData.rates.slice(0, 6);
  const usdRate = rateData.rates.find((r) => r.code === "USD");

  const handleSelectFromTable = (code: string) => {
    setActiveTab("calc");
    setCalcMode("toTHB");
    setFromCode(code);
    setToCode("THB");
    setFromOpen(false);
    setToOpen(false);
  };

  const goTo = useCallback((idx: number) => {
    setCurrent((idx + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, current]);

  return (
    <section
      className="relative z-0 w-full bg-orange-50"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="โปรโมชั่นและข่าวสาร"
    >
      {/* Slides wrapper — overflow-hidden clips off-screen slides */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className="w-full shrink-0"
              role="group"
              aria-roledescription="slide"
              aria-label={`สไลด์ ${idx + 1} จาก ${slides.length}`}
            >
              <div className="relative w-full" style={{ aspectRatio: `${slide.width}/${slide.height}` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 flex flex-col items-center justify-center gap-3">
                  <span className="text-white/30 font-bold text-4xl sm:text-5xl lg:text-6xl tracking-wider">
                    {slide.width} × {slide.height}
                  </span>
                  <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl drop-shadow-sm">
                    {slide.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating exchange widget (left, on top layer, adjusted slightly upward) */}
      <div className="pointer-events-none absolute inset-x-0 top-[340px] sm:top-[370px] lg:top-[385px] z-30 flex justify-start">
        <div className="w-full max-w-[920px] px-4 sm:pl-36 lg:pl-64 xl:pl-84">
          <div className="pointer-events-auto">
            {/* Tabs */}
            <div className="inline-flex rounded-t-2xl overflow-hidden text-[14px] ml-3 sm:ml-4">
              <button
                type="button"
                onClick={() => setActiveTab("rate")}
                className={[
                  "px-6 py-2 font-medium transition-colors cursor-pointer",
                  activeTab === "rate"
                    ? "bg-[#F26522] text-white"
                    : "bg-[#FFE6D7] text-[#F26522]",
                ].join(" ")}
              >
                อัตราแลกเปลี่ยน
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("calc")}
                className={[
                  "px-6 py-2 font-medium transition-colors cursor-pointer",
                  activeTab === "calc"
                    ? "bg-[#F26522] text-white"
                    : "bg-[#F4F5F7] text-surface-500",
                ].join(" ")}
              >
                คำนวณอัตรา
              </button>
            </div>

            {/* Card */}
            <div className="bg-white rounded-2xl shadow-[0_18px_35px_rgba(15,23,42,0.18)] px-6 pt-5 pb-6 sm:px-7 sm:pt-6 sm:pb-7 lg:px-8 lg:pt-7 lg:pb-8">
              {activeTab === "rate" ? (
                <>
                  {/* Title (branch selector removed) */}
                  <div className="flex items-start justify-start gap-4">
                    <div className="min-w-0">
                      <div className="text-[1.45rem] font-bold text-surface-700 leading-snug">
                        อัตราแลกเปลี่ยนล่าสุด
                      </div>
                      <p className="mt-1 text-[14px] font-medium text-surface-700/80">
                        อันดับอัตราแลกเปลี่ยนค่าเงิน
                      </p>
                    </div>
                  </div>

                  {/* Last updated + link */}
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[12px] text-surface-400">
                    <span>
                      *ราคาข้อมูลล่าสุด:{" "}
                      <span className="font-medium text-surface-600">
                        {rateData.lastUpdated}
                      </span>
                    </span>
                    <Link
                      href="/exchange-rate"
                      className="inline-flex items-center gap-1 text-[13px] text-orange-600 hover:text-orange-700 underline decoration-1 underline-offset-2"
                    >
                      <span>ดูค่าเงินทั้งหมด</span>
                      <TinyArrowRight />
                    </Link>
                  </div>

                  {/* Rates table */}
                  <div className="mt-5 rounded-2xl border border-[#EFF0F2] overflow-hidden bg-surface-0">
                    <div className="flex items-center px-4 py-2.5 text-[13px] font-semibold text-white bg-[#F26522]">
                      <span className="flex-1">ชื่อสกุลเงิน</span>
                      <span className="w-10" />
                      <span className="w-20 text-right">SPR ซื้อ</span>
                      <span className="w-20 text-right">SPR ขาย</span>
                    </div>
                    <div className="overflow-hidden">
                      {topRates.map((rate) => (
                        <div
                          key={rate.code}
                          className="flex items-center px-4 py-2.5 text-[13px] border-t border-[#EFF0F2] hover:bg-[#FFF7F2] cursor-pointer"
                          onClick={() => handleSelectFromTable(rate.code)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              handleSelectFromTable(rate.code);
                            }
                          }}
                        >
                          <div className="flex-1 flex items-center gap-3">
                            <CurrencyFlag code={rate.code} />
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-surface-700">
                                {rate.code}
                              </span>
                              <span className="text-xs text-surface-500">
                                {rate.name}
                              </span>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="w-8 h-8 rounded-md bg-surface-0 border border-[#EFF0F2] flex items-center justify-center mr-1 hover:bg-[#F4F5F7] transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectFromTable(rate.code);
                            }}
                            aria-label={`คำนวณอัตราสำหรับ ${rate.code}`}
                          >
                            <PlusMinusIcon className="w-4 h-4" />
                          </button>
                          <div className="w-20 text-right text-sm font-semibold text-[#F26522]">
                            {rate.buy.toFixed(2)}
                          </div>
                          <div className="w-20 text-right text-sm font-semibold text-[#F26522]">
                            {rate.sell.toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Calculator title */}
                  <div className="text-center sm:text-left mb-4 sm:mb-5">
                    <div className="text-[1.45rem] font-bold text-surface-700 leading-snug">
                      คำนวณอัตราแลกเปลี่ยน
                    </div>
                    <p className="mt-1 text-[14px] font-medium text-surface-700/80">
                      เลือกสกุลเงินเพื่อคำนวณค่าเงินที่ต้องการ
                    </p>
                  </div>

                  {/* Inner mode tabs */}
                  <div className="inline-flex rounded-full bg-[#F4F5F7] p-1 text-[13px] mb-5">
                    <button
                      type="button"
                      onClick={() => setCalcMode("toTHB")}
                      className={[
                        "px-4 py-1.5 rounded-full font-medium transition-colors cursor-pointer",
                        calcMode === "toTHB"
                          ? "bg-[#F26522] text-white"
                          : "text-surface-600",
                      ].join(" ")}
                    >
                      แลกเป็นเงินบาท
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalcMode("fromTHB")}
                      className={[
                        "px-4 py-1.5 rounded-full font-medium transition-colors cursor-pointer",
                        calcMode === "fromTHB"
                          ? "bg-[#F26522] text-white"
                          : "text-surface-600",
                      ].join(" ")}
                    >
                      แลกเป็นเงินต่างประเทศ
                    </button>
                  </div>

                  {/* Calculator card */}
                  <div className="mt-2 rounded-2xl border border-[#EFF0F2] bg-surface-0 px-4 py-5 sm:px-6 sm:py-6">
                    {/* Currency row */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6">
                      <div className="relative flex-1">
                        <button
                          type="button"
                          onClick={() => {
                            setFromOpen((v) => !v);
                            setToOpen(false);
                          }}
                          className="w-full flex items-center justify-between rounded-xl border border-[#DDE0E5] bg-white px-4 py-3 text-[14px] cursor-pointer hover:border-[#F26522] transition-colors"
                        >
                          <span className="flex items-center gap-2.5">
                            <CurrencyFlag code={fromCode} />
                            <span className="font-semibold text-surface-700">
                              {fromCode}
                            </span>
                          </span>
                          <SmallChevronDown className="w-3.5 h-3.5 text-surface-400" />
                        </button>
                        {fromOpen && (
                          <div className="absolute z-30 mt-1 w-full rounded-xl border border-[#EFF0F2] bg-white shadow-lg max-h-64 overflow-auto">
                            {rateData.rates.map((rate) => (
                              <button
                                key={rate.code}
                                type="button"
                                className="w-full flex items-center justify-between px-3 py-2.5 text-[13px] hover:bg-[#FFF7F2] cursor-pointer"
                                onClick={() => {
                                  setFromCode(rate.code);
                                  setFromOpen(false);
                                }}
                              >
                                <span className="flex items-center gap-2.5">
                                  <CurrencyFlag code={rate.code} />
                                  <span className="font-semibold text-surface-700">
                                    {rate.code}
                                  </span>
                                  <span className="text-[12px] text-surface-500">
                                    {rate.name}
                                  </span>
                                </span>
                              </button>
                            ))}
                            <button
                              type="button"
                              className="w-full flex items-center gap-2.5 px-3 py-2.5 text-[13px] hover:bg-[#FFF7F2] cursor-pointer border-t border-[#EFF0F2]"
                              onClick={() => {
                                setFromCode("THB");
                                setFromOpen(false);
                              }}
                            >
                              <CurrencyFlag code="THB" />
                              <span className="font-semibold text-surface-700">
                                THB
                              </span>
                              <span className="text-[12px] text-surface-500">
                                Thai Baht
                              </span>
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="w-9 h-9 rounded-full bg-[#F26522] text-white flex items-center justify-center shadow-md">
                          <span className="text-lg leading-none">→</span>
                        </div>
                      </div>

                      <div className="relative flex-1">
                        <button
                          type="button"
                          onClick={() => {
                            setToOpen((v) => !v);
                            setFromOpen(false);
                          }}
                          className="w-full flex items-center justify-between rounded-xl border border-[#DDE0E5] bg-white px-4 py-3 text-[14px] cursor-pointer hover:border-[#F26522] transition-colors"
                        >
                          <span className="flex items-center gap-2.5">
                            <CurrencyFlag code={toCode} />
                            <span className="font-semibold text-surface-700">
                              {toCode}
                            </span>
                          </span>
                          <SmallChevronDown className="w-3.5 h-3.5 text-surface-400" />
                        </button>
                        {toOpen && (
                          <div className="absolute z-30 mt-1 w-full rounded-xl border border-[#EFF0F2] bg-white shadow-lg max-h-64 overflow-auto">
                            {rateData.rates.map((rate) => (
                              <button
                                key={rate.code}
                                type="button"
                                className="w-full flex items-center justify-between px-3 py-2.5 text-[13px] hover:bg-[#FFF7F2] cursor-pointer"
                                onClick={() => {
                                  setToCode(rate.code);
                                  setToOpen(false);
                                }}
                              >
                                <span className="flex items-center gap-2.5">
                                  <CurrencyFlag code={rate.code} />
                                  <span className="font-semibold text-surface-700">
                                    {rate.code}
                                  </span>
                                  <span className="text-[12px] text-surface-500">
                                    {rate.name}
                                  </span>
                                </span>
                              </button>
                            ))}
                            <button
                              type="button"
                              className="w-full flex items-center gap-2.5 px-3 py-2.5 text-[13px] hover:bg-[#FFF7F2] cursor-pointer border-t border-[#EFF0F2]"
                              onClick={() => {
                                setToCode("THB");
                                setToOpen(false);
                              }}
                            >
                              <CurrencyFlag code="THB" />
                              <span className="font-semibold text-surface-700">
                                THB
                              </span>
                              <span className="text-[12px] text-surface-500">
                                Thai Baht
                              </span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Amount inputs */}
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] text-surface-600 mb-1.5">
                          ระบุจำนวน
                        </label>
                        <input
                          type="number"
                          className="w-full rounded-xl border border-[#DDE0E5] bg-white px-4 py-2.5 text-[14px] text-surface-700 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-[#F26522]/70 focus:border-[#F26522]"
                          placeholder="ระบุจำนวน"
                        />
                      </div>
                      <div>
                        <label className="block text-[13px] text-surface-600 mb-1.5">
                          ระบุจำนวน
                        </label>
                        <input
                          type="number"
                          className="w-full rounded-xl border border-[#DDE0E5] bg-white px-4 py-2.5 text-[14px] text-surface-700 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-[#F26522]/70 focus:border-[#F26522]"
                          placeholder="ระบุจำนวน"
                        />
                      </div>
                    </div>

                    {/* Rate display */}
                    <div className="mt-5 text-center">
                      <div className="text-[14px] font-semibold text-[#F26522]">
                        อัตราการแลกเปลี่ยน
                      </div>
                      <div className="mt-1 text-[15px] font-bold text-surface-700">
                        {usdRate
                          ? `1 USD = ${usdRate.buy.toFixed(2)} THB`
                          : "—"}
                      </div>
                      <p className="mt-2 text-[12px] text-surface-500">
                        หมายเหตุ อัตราแลกเปลี่ยนอาจมีการเปลี่ยนแปลง กรุณาตรวจสอบที่หน้าสาขา
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer"
        aria-label="สไลด์ก่อนหน้า"
      >
        <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer"
        aria-label="สไลด์ถัดไป"
      >
        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
      </button>

      {/* Dots */}
      <div
        className="absolute bottom-4 sm:bottom-6 flex items-center gap-2"
        style={{ right: 180 }}
      >
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goTo(idx)}
            className={[
              "rounded-full transition-all duration-300 cursor-pointer",
              idx === current
                ? "w-8 h-3 bg-white"
                : "w-3 h-3 bg-white/50 hover:bg-white/70",
            ].join(" ")}
            aria-label={`ไปสไลด์ ${idx + 1}`}
            aria-current={idx === current ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
