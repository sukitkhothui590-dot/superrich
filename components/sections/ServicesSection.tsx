"use client";

import React, { useRef } from "react";
import { mockServices } from "@/lib/mock/services";
import Button from "@/components/ui/Button";

export default function ServicesSection() {
  const rowRef = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (direction: "left" | "right") => {
    const container = rowRef.current;
    if (!container) return;
    const cardWidth = 310; // approx lg width
    const amount = cardWidth * 2;
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="pt-40 pb-16 lg:pt-64 lg:pb-20 bg-surface-0">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section heading aligned to the right like reference */}
        <div className="flex items-baseline justify-between mb-8 lg:mb-10">
          <div />
          <div className="text-right">
            <p className="text-lg lg:text-xl font-semibold text-surface-600">
              ขั้นตอนการรับบริการ
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#F26522]">
              All Services
            </h2>
          </div>
        </div>

        {/* Services cards row */}
        <div className="relative">
          {/* Left arrow */}
          <button
            type="button"
            className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#F26522] items-center justify-center cursor-pointer hover:bg-surface-50 z-10"
            aria-label="บริการก่อนหน้า"
            onClick={() => scrollByCards("left")}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M10 4L6 8L10 12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            type="button"
            className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#F26522] items-center justify-center cursor-pointer hover:bg-surface-50 z-10"
            aria-label="บริการถัดไป"
            onClick={() => scrollByCards("right")}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            ref={rowRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto pb-2 no-scrollbar"
          >
          {mockServices.map((service) => (
            <div
              key={service.id}
              className="flex-shrink-0 w-[270px] sm:w-[290px] lg:w-[310px] rounded-2xl bg-white overflow-hidden"
            >
              {/* Top image placeholder */}
              <div className="h-[130px] sm:h-[140px] bg-border/80 flex items-center justify-center text-surface-700/40 text-xs font-medium">
                400×260
              </div>

              {/* Orange content area */}
              <div className="bg-[#F26522] text-white px-6 py-6 flex flex-col h-[230px]">
                <div className="flex-1">
                  <h3 className="text-lg font-bold leading-snug mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium mb-1 opacity-90">
                    {service.titleTh}
                  </p>
                  <p className="text-sm leading-relaxed opacity-90">
                    {service.description}
                  </p>
                </div>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    href={service.link}
                    aria-label={`ดูเพิ่มเติม ${service.title}`}
                    className="w-full border-white text-white hover:bg-white/10"
                  >
                    ดูเพิ่มเติม
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* Coming soon card */}
          <div className="flex-shrink-0 w-[270px] sm:w-[290px] lg:w-[310px] rounded-2xl bg-gradient-to-br from-[#F58A2A] to-[#F26522] flex items-center justify-center">
            <span className="text-white text-lg sm:text-xl font-semibold">
              Coming Soon
            </span>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
