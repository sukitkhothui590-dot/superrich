"use client";

import React, { useState } from "react";
import Link from "next/link";

const branches = [
  {
    id: "silom",
    name: "สีลม",
    address: "เลขที่ 491/5-491/7 อาคารสีลมพลาซ่า ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพ 10500",
    hours: "09:00 – 20:00",
    status: "เปิดบริการ",
    note: "อาคารสีลมพลาซ่า ชั้น 1 ใกล้กับธนาคารกรุงไทย สาขาสีลม",
    contact: "LINE : @SuperRich",
    lat: 13.7262,
    lng: 100.5234,
    mapQuery: "SuperRich+Exchange+Silom+Plaza",
  },
  {
    id: "ratchadamri",
    name: "ราชดำริ 1",
    address: "เลขที่ 45 ราชดำริ ซอย 1 แขวงลุมพินี เขตปทุมวัน กรุงเทพ 10330",
    hours: "09:00 – 18:00",
    status: "เปิดบริการ",
    note: "ใกล้กับแยกราชดำริ ฝั่งตรงข้ามเซ็นทรัลเวิลด์",
    contact: "LINE : @SuperRich",
    lat: 13.7466,
    lng: 100.5391,
    mapQuery: "SuperRich+1965+Ratchadamri",
  },
  {
    id: "central-world",
    name: "เซ็นทรัลเวิลด์",
    address: "เลขที่ 999/9 ราชดำริ แขวงปทุมวัน เขตปทุมวัน กรุงเทพ 10330",
    hours: "10:00 – 21:00",
    status: "เปิดบริการ",
    note: "ชั้น 1 โซน Beacon ใกล้ทางเข้าฝั่ง BTS ชิดลม",
    contact: "LINE : @SuperRich",
    lat: 13.7466,
    lng: 100.5393,
    mapQuery: "SuperRich+1965+Central+World",
  },
];

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function BranchNearbySection() {
  const [selected, setSelected] = useState(branches[0]);
  const [open, setOpen] = useState(false);

  return (
    <section className="py-16 lg:py-20 bg-surface-0">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 lg:mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F766E]">
            สาขาใกล้คุณ
          </h2>
          <Link
            href="/branches"
            className="text-sm font-medium text-surface-600 hover:text-[#0F766E] transition-colors"
          >
            ดูเพิ่มเติม &gt;
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Map placeholder (left) */}
          <div className="lg:col-span-7">
            <div className="w-full h-[350px] sm:h-[440px] lg:h-[520px] rounded-2xl overflow-hidden">
              <iframe
                title={`แผนที่สาขา ${selected.name}`}
                src={`https://www.google.com/maps?q=${selected.mapQuery}&output=embed`}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Branch info (right) */}
          <div className="lg:col-span-5">
            {/* Branch selector dropdown */}
            <div className="relative mb-6">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="w-full flex items-center justify-between rounded-xl border border-[#EFF0F2] bg-white px-4 py-3 text-[14px] cursor-pointer hover:border-[#0F766E] transition-colors"
              >
                <span className="text-surface-500">เลือกสาขาที่ท่านต้องการ</span>
                <ChevronDown className={`w-4 h-4 text-[#0F766E] transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
              </button>
              {open && (
                <div className="absolute z-20 mt-1 w-full rounded-xl border border-[#EFF0F2] bg-white shadow-lg overflow-hidden">
                  {branches.map((branch) => (
                    <button
                      key={branch.id}
                      type="button"
                      className={[
                        "w-full text-left px-4 py-3 text-[14px] hover:bg-[#FFF7F2] cursor-pointer transition-colors",
                        selected.id === branch.id ? "text-[#0F766E] font-semibold bg-[#FFF7F2]" : "text-surface-700",
                      ].join(" ")}
                      onClick={() => {
                        setSelected(branch);
                        setOpen(false);
                      }}
                    >
                      {branch.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Branch details */}
            <div>
              <h3 className="text-xl font-bold text-surface-700 mb-4">
                {selected.name}
              </h3>

              <div className="space-y-3 text-[14px]">
                <div>
                  <span className="font-semibold text-[#0F766E]">ที่อยู่</span>
                  <p className="mt-0.5 text-surface-600 leading-relaxed">{selected.address}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#0F766E]">เวลาทำการ</span>
                  <p className="mt-0.5 text-surface-600">{selected.hours}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#0F766E]">สถานะ</span>
                  <p className="mt-0.5 text-surface-600">{selected.status}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#0F766E]">จุดสังเกต</span>
                  <p className="mt-0.5 text-surface-600 leading-relaxed">{selected.note}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#0F766E]">ช่องทางการติดต่อ</span>
                  <p className="mt-0.5 text-surface-600">{selected.contact}</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-6 space-y-3">
                <button
                  type="button"
                  className="w-full py-3 rounded-xl bg-[#0F766E] text-white text-sm font-semibold hover:bg-[#0B5A53] transition-colors"
                >
                  ติดต่อผ่าน LINE
                </button>
                <button
                  type="button"
                  className="w-full py-3 rounded-xl border border-[#0F766E] text-[#0F766E] text-sm font-semibold bg-white hover:bg-[#FFF7F2] transition-colors"
                >
                  เปิดแผนที่
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
