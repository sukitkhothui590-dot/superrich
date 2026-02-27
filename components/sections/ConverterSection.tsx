"use client";

import React, { useState, useMemo } from "react";
import { mockRates } from "@/lib/mock/rates";
import { useToast } from "@/components/ui/Toast";
import Card from "@/components/ui/Card";
import Select from "@/components/ui/Select";
import Input from "@/components/ui/Input";

const currencyOptions = [
  { value: "THB", label: "🇹🇭 THB - Thai Baht" },
  ...mockRates.map((r) => ({
    value: r.code,
    label: `${r.flag} ${r.code} - ${r.name}`,
  })),
];

export default function ConverterSection() {
  const { showToast } = useToast();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("THB");
  const [amount, setAmount] = useState("1000");

  const result = useMemo(() => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) return null;

    if (fromCurrency === "THB" && toCurrency === "THB") return numAmount;

    if (fromCurrency === "THB") {
      const toRate = mockRates.find((r) => r.code === toCurrency);
      if (!toRate) return null;
      return numAmount / toRate.sell;
    }

    if (toCurrency === "THB") {
      const fromRate = mockRates.find((r) => r.code === fromCurrency);
      if (!fromRate) return null;
      return numAmount * fromRate.buy;
    }

    const fromRate = mockRates.find((r) => r.code === fromCurrency);
    const toRate = mockRates.find((r) => r.code === toCurrency);
    if (!fromRate || !toRate) return null;
    return (numAmount * fromRate.buy) / toRate.sell;
  }, [fromCurrency, toCurrency, amount]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleConvert = () => {
    if (result === null) {
      showToast(
        "warn",
        "ไม่สามารถคำนวณได้",
        "ไม่พบอัตราแลกเปลี่ยนสำหรับสกุลเงินที่เลือก กรุณาเลือกสกุลเงินอื่น"
      );
    }
  };

  const formatResult = (val: number) => {
    if (toCurrency === "JPY") return val.toFixed(0);
    return val.toLocaleString("th-TH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <section className="py-16 lg:py-20 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-surface-700">
            คำนวณอัตราแลกเปลี่ยน
          </h2>
          <p className="text-sm text-surface-700/60 mt-1">
            คำนวณจำนวนเงินที่ต้องการแลกเปลี่ยนได้ทันที
          </p>
        </div>

        <Card className="max-w-[600px] mx-auto">
          <div className="space-y-5">
            {/* From */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Select
                label="จากสกุลเงิน"
                options={currencyOptions}
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                aria-label="เลือกสกุลเงินต้นทาง"
              />
              <Input
                label="จำนวนเงิน"
                type="number"
                min="0"
                step="any"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="ระบุจำนวน"
                aria-label="จำนวนเงินที่ต้องการแลก"
              />
            </div>

            {/* Swap Button */}
            <div className="flex justify-center">
              <button
                onClick={handleSwap}
                className="p-2.5 rounded-full border border-border hover:bg-yellow-100 hover:border-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600"
                aria-label="สลับสกุลเงิน"
              >
                <svg
                  className="w-5 h-5 text-surface-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  />
                </svg>
              </button>
            </div>

            {/* To */}
            <Select
              label="เป็นสกุลเงิน"
              options={currencyOptions}
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              aria-label="เลือกสกุลเงินปลายทาง"
            />

            {/* Result */}
            <div className="bg-surface-50 rounded-xl p-5 border border-border">
              <p className="text-xs text-surface-700/60 mb-1">ผลลัพธ์โดยประมาณ</p>
              <div className="text-3xl font-bold text-yellow-600">
                {result !== null ? (
                  <>
                    {formatResult(result)}{" "}
                    <span className="text-lg font-semibold text-surface-700/60">
                      {toCurrency}
                    </span>
                  </>
                ) : (
                  <span className="text-surface-700/30">—</span>
                )}
              </div>
              <p className="text-xs text-surface-700/40 mt-2">
                อัตราแลกเปลี่ยนอัปเดตทุก 1 ชั่วโมง
              </p>
            </div>

            <button
              onClick={handleConvert}
              className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
              aria-label="คำนวณอัตราแลกเปลี่ยน"
            >
              คำนวณ
            </button>
          </div>
        </Card>
      </div>
    </section>
  );
}
