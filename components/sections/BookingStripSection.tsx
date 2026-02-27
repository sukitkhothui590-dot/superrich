"use client";

import React from "react";

export default function BookingStripSection() {
  return (
    <section className="bg-gradient-to-r from-[#0F766E] to-[#0F766E]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="relative min-h-[185px]">
          {/* Centered placeholder text for background image size */}
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[11px] md:text-xs font-medium text-white/60">
            1440×185
          </span>

          <div className="relative z-10 flex justify-between items-center min-h-[185px]">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                SPR Online Booking
              </h2>
              <p className="mt-1 text-sm md:text-base font-medium">
                จองง่าย รวดเร็ว รอรับที่สาขาได้เลย
              </p>
            </div>
            <div className="hidden md:flex items-center">
              <button
                type="button"
                className="px-6 py-2 rounded-lg bg-white text-[#0F766E] text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                จองเลย
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

