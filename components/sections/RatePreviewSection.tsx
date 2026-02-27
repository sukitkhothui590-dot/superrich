"use client";

import React, { useState, useEffect } from "react";
import { getRates } from "@/lib/mock/rates";
import { RateData } from "@/lib/types/rate";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Skeleton from "@/components/ui/Skeleton";
import Select from "@/components/ui/Select";

const branchOptions = [
  { value: "ratchadamri-1", label: "Ratchadamri 1 (ราชดำริ 1)" },
  { value: "silom", label: "Silom (สีลม)" },
  { value: "central-world", label: "Central World (เซ็นทรัลเวิลด์)" },
];

function RateSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 py-2">
          <Skeleton className="w-8 h-8" rounded />
          <Skeleton className="w-24 h-4" />
          <div className="flex-1" />
          <Skeleton className="w-16 h-4" />
          <Skeleton className="w-16 h-4" />
        </div>
      ))}
    </div>
  );
}

export default function RatePreviewSection() {
  const [data, setData] = useState<RateData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const result = await getRates();
      setData(result);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 lg:py-20 bg-surface-0">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-surface-700">
              อัตราแลกเปลี่ยนล่าสุด
            </h2>
            <p className="text-sm text-surface-700/60 mt-1">
              อัตราแลกเปลี่ยนเงินตราต่างประเทศ
            </p>
          </div>
          <div className="w-full lg:w-64">
            <Select
              options={branchOptions}
              aria-label="เลือกสาขา"
            />
          </div>
        </div>

        <Card padding={false}>
          {loading ? (
            <div className="p-6">
              <RateSkeleton />
            </div>
          ) : data ? (
            <>
              {/* Table Header */}
              <div className="grid grid-cols-[auto_1fr_auto_auto] md:grid-cols-[auto_1fr_1fr_auto_auto] gap-4 px-6 py-3 bg-yellow-500 text-white text-sm font-semibold rounded-t-xl">
                <div className="w-8" />
                <div>สกุลเงิน</div>
                <div className="hidden md:block" />
                <div className="text-right">SPR ซื้อ</div>
                <div className="text-right">SPR ขาย</div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-border">
                {data.rates.map((rate) => (
                  <div
                    key={rate.code}
                    className="grid grid-cols-[auto_1fr_auto_auto] md:grid-cols-[auto_1fr_1fr_auto_auto] gap-4 px-6 py-3.5 items-center hover:bg-surface-50 transition-colors"
                  >
                    <div className="text-2xl w-8">{rate.flag}</div>
                    <div>
                      <span className="font-bold text-surface-700">
                        {rate.code}
                      </span>
                      <span className="hidden sm:inline text-surface-700/60 ml-2 text-sm">
                        {rate.name}
                      </span>
                    </div>
                    <div className="hidden md:block" />
                    <div className="text-right font-semibold text-surface-700 tabular-nums">
                      {rate.buy.toFixed(rate.buy < 1 ? 4 : 2)}
                    </div>
                    <div className="text-right font-semibold text-surface-700 tabular-nums">
                      {rate.sell.toFixed(rate.sell < 1 ? 4 : 2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <p className="text-xs text-surface-700/50">
                  *อัตราข้อมูลล่าสุด: {data.lastUpdated}
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  href="/exchange-rate"
                  aria-label="ดูอัตราแลกเปลี่ยนทั้งหมด"
                >
                  ดูทั้งหมด →
                </Button>
              </div>
            </>
          ) : null}
        </Card>
      </div>
    </section>
  );
}
