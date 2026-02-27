"use client";

import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { useToast } from "@/components/ui/Toast";
import { mockRates, getRatesSync } from "@/lib/mock/rates";
import { CurrencyRate } from "@/lib/types/rate";
import { AdjustmentHistory, DeltaType, ApplyTo } from "@/lib/types/admin";

const mockHistory: AdjustmentHistory[] = [
  { id: "1", timestamp: "26/02/2026 16:00", scope: "ALL", deltaType: "PERCENT", deltaValue: 0.5, applyTo: "BOTH", appliedBy: "admin" },
  { id: "2", timestamp: "26/02/2026 14:30", scope: "USD", deltaType: "ABSOLUTE", deltaValue: 0.05, applyTo: "BUY", appliedBy: "admin" },
  { id: "3", timestamp: "26/02/2026 12:00", scope: "EUR", deltaType: "PERCENT", deltaValue: -0.3, applyTo: "SELL", appliedBy: "admin" },
  { id: "4", timestamp: "25/02/2026 18:00", scope: "ALL", deltaType: "ABSOLUTE", deltaValue: -0.02, applyTo: "BOTH", appliedBy: "admin" },
  { id: "5", timestamp: "25/02/2026 10:00", scope: "GBP", deltaType: "PERCENT", deltaValue: 1.0, applyTo: "BUY", appliedBy: "admin" },
  { id: "6", timestamp: "24/02/2026 16:00", scope: "JPY", deltaType: "ABSOLUTE", deltaValue: 0.001, applyTo: "SELL", appliedBy: "admin" },
  { id: "7", timestamp: "24/02/2026 09:00", scope: "ALL", deltaType: "PERCENT", deltaValue: -0.1, applyTo: "BOTH", appliedBy: "admin" },
  { id: "8", timestamp: "23/02/2026 15:00", scope: "CNY", deltaType: "ABSOLUTE", deltaValue: 0.03, applyTo: "BUY", appliedBy: "admin" },
  { id: "9", timestamp: "23/02/2026 11:00", scope: "AUD", deltaType: "PERCENT", deltaValue: 0.2, applyTo: "SELL", appliedBy: "admin" },
  { id: "10", timestamp: "22/02/2026 14:00", scope: "ALL", deltaType: "ABSOLUTE", deltaValue: 0.01, applyTo: "BOTH", appliedBy: "admin" },
];

const scopeOptions = [
  { value: "ALL", label: "ทั้งหมด" },
  ...mockRates.map((r) => ({ value: r.code, label: `${r.flag} ${r.code}` })),
];

const deltaTypeOptions = [
  { value: "PERCENT", label: "เปอร์เซ็นต์ (%)" },
  { value: "ABSOLUTE", label: "ค่าคงที่" },
];

const applyToOptions = [
  { value: "BUY", label: "ราคาซื้อ" },
  { value: "SELL", label: "ราคาขาย" },
  { value: "BOTH", label: "ทั้งสอง" },
];

export default function AdminRatesPage() {
  const { showToast } = useToast();
  const rateData = getRatesSync();
  const [rates, setRates] = useState<CurrencyRate[]>([...rateData.rates]);
  const [history, setHistory] = useState<AdjustmentHistory[]>(mockHistory);

  const [scope, setScope] = useState("ALL");
  const [deltaType, setDeltaType] = useState<DeltaType>("PERCENT");
  const [deltaValue, setDeltaValue] = useState("0");
  const [applyTo, setApplyTo] = useState<ApplyTo>("BOTH");

  const handleApply = () => {
    const numDelta = parseFloat(deltaValue);
    if (isNaN(numDelta) || numDelta === 0) {
      showToast("warn", "ค่าไม่ถูกต้อง", "กรุณาระบุค่าที่ต้องการปรับ");
      return;
    }

    setRates((prev) =>
      prev.map((rate) => {
        if (scope !== "ALL" && rate.code !== scope) return rate;
        const adjustBuy = applyTo === "BUY" || applyTo === "BOTH";
        const adjustSell = applyTo === "SELL" || applyTo === "BOTH";

        let newBuy = rate.buy;
        let newSell = rate.sell;

        if (deltaType === "PERCENT") {
          if (adjustBuy) newBuy = rate.buy * (1 + numDelta / 100);
          if (adjustSell) newSell = rate.sell * (1 + numDelta / 100);
        } else {
          if (adjustBuy) newBuy = rate.buy + numDelta;
          if (adjustSell) newSell = rate.sell + numDelta;
        }

        return {
          ...rate,
          buy: Math.round(newBuy * 10000) / 10000,
          sell: Math.round(newSell * 10000) / 10000,
        };
      })
    );

    const newEntry: AdjustmentHistory = {
      id: Date.now().toString(),
      timestamp: new Date().toLocaleString("th-TH"),
      scope,
      deltaType,
      deltaValue: numDelta,
      applyTo,
      appliedBy: "admin",
    };
    setHistory((prev) => [newEntry, ...prev.slice(0, 9)]);

    showToast(
      "success",
      "ปรับเรทสำเร็จ",
      `ปรับ ${scope === "ALL" ? "ทุกสกุลเงิน" : scope} ${deltaType === "PERCENT" ? numDelta + "%" : numDelta} ${applyTo === "BUY" ? "ซื้อ" : applyTo === "SELL" ? "ขาย" : "ทั้งสอง"}`
    );

    setDeltaValue("0");
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-surface-700">
          จัดการอัตราแลกเปลี่ยน
        </h1>
        <p className="text-sm text-surface-700/60 mt-1">
          ดูและปรับอัตราแลกเปลี่ยนเงินตราต่างประเทศ
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Rate Table */}
        <div className="xl:col-span-2">
          <Card padding={false}>
            <div className="px-6 py-4 border-b border-border">
              <h2 className="text-sm font-bold text-surface-700">
                อัตราแลกเปลี่ยนปัจจุบัน
              </h2>
              <p className="text-xs text-surface-700/50 mt-0.5">
                อัปเดตล่าสุด: {rateData.lastUpdated}
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-50">
                    <th className="text-left px-6 py-3 font-semibold text-surface-700/70">
                      สกุลเงิน
                    </th>
                    <th className="text-left px-6 py-3 font-semibold text-surface-700/70">
                      ชื่อ
                    </th>
                    <th className="text-right px-6 py-3 font-semibold text-surface-700/70">
                      ราคาซื้อ
                    </th>
                    <th className="text-right px-6 py-3 font-semibold text-surface-700/70">
                      ราคาขาย
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {rates.map((rate) => (
                    <tr key={rate.code} className="hover:bg-surface-50 transition-colors">
                      <td className="px-6 py-3">
                        <span className="mr-2">{rate.flag}</span>
                        <span className="font-bold">{rate.code}</span>
                      </td>
                      <td className="px-6 py-3 text-surface-700/70">
                        {rate.name}
                      </td>
                      <td className="px-6 py-3 text-right font-mono font-semibold tabular-nums">
                        {rate.buy.toFixed(rate.buy < 1 ? 4 : 2)}
                      </td>
                      <td className="px-6 py-3 text-right font-mono font-semibold tabular-nums">
                        {rate.sell.toFixed(rate.sell < 1 ? 4 : 2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Adjustment Form */}
        <div>
          <Card>
            <h2 className="text-sm font-bold text-surface-700 mb-4">
              ปรับเพิ่ม/ลด เรท
            </h2>
            <div className="space-y-4">
              <Select
                label="ขอบเขต"
                options={scopeOptions}
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                aria-label="เลือกขอบเขตการปรับ"
              />
              <Select
                label="ประเภทการปรับ"
                options={deltaTypeOptions}
                value={deltaType}
                onChange={(e) => setDeltaType(e.target.value as DeltaType)}
                aria-label="เลือกประเภทการปรับ"
              />
              <Input
                label="ค่าที่ปรับ (+/-)"
                type="number"
                step="any"
                value={deltaValue}
                onChange={(e) => setDeltaValue(e.target.value)}
                placeholder="เช่น 0.5 หรือ -0.3"
                aria-label="ค่าที่ต้องการปรับ"
              />
              <Select
                label="ใช้กับ"
                options={applyToOptions}
                value={applyTo}
                onChange={(e) => setApplyTo(e.target.value as ApplyTo)}
                aria-label="เลือกว่าปรับราคาซื้อ ขาย หรือทั้งสอง"
              />
              <Button
                variant="primary"
                fullWidth
                onClick={handleApply}
                aria-label="ปรับเรท"
              >
                Apply
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* History */}
      <div className="mt-8">
        <Card padding={false}>
          <div className="px-6 py-4 border-b border-border">
            <h2 className="text-sm font-bold text-surface-700">
              ประวัติการปรับเรท (10 รายการล่าสุด)
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-50">
                  <th className="text-left px-6 py-3 font-semibold text-surface-700/70">
                    เวลา
                  </th>
                  <th className="text-left px-6 py-3 font-semibold text-surface-700/70">
                    ขอบเขต
                  </th>
                  <th className="text-left px-6 py-3 font-semibold text-surface-700/70">
                    ประเภท
                  </th>
                  <th className="text-right px-6 py-3 font-semibold text-surface-700/70">
                    ค่าที่ปรับ
                  </th>
                  <th className="text-left px-6 py-3 font-semibold text-surface-700/70">
                    ใช้กับ
                  </th>
                  <th className="text-left px-6 py-3 font-semibold text-surface-700/70">
                    โดย
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {history.map((h) => (
                  <tr key={h.id} className="hover:bg-surface-50 transition-colors">
                    <td className="px-6 py-3 text-surface-700/70">{h.timestamp}</td>
                    <td className="px-6 py-3 font-semibold">
                      {h.scope === "ALL" ? "ทั้งหมด" : h.scope}
                    </td>
                    <td className="px-6 py-3">
                      <span
                        className={[
                          "inline-block text-xs font-medium px-2 py-0.5 rounded",
                          h.deltaType === "PERCENT"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-purple-100 text-purple-700",
                        ].join(" ")}
                      >
                        {h.deltaType === "PERCENT" ? "%" : "ABS"}
                      </span>
                    </td>
                    <td
                      className={[
                        "px-6 py-3 text-right font-mono font-semibold",
                        h.deltaValue > 0 ? "text-green-600" : "text-red-500",
                      ].join(" ")}
                    >
                      {h.deltaValue > 0 ? "+" : ""}
                      {h.deltaValue}
                    </td>
                    <td className="px-6 py-3">
                      {h.applyTo === "BUY"
                        ? "ซื้อ"
                        : h.applyTo === "SELL"
                          ? "ขาย"
                          : "ทั้งสอง"}
                    </td>
                    <td className="px-6 py-3 text-surface-700/70">
                      {h.appliedBy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
