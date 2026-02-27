"use client";

import React from "react";
import Card from "@/components/ui/Card";
import { getRatesSync } from "@/lib/mock/rates";
import { getNewsSync } from "@/lib/mock/news";

const stats = [
  {
    label: "อัปเดตล่าสุด",
    value: getRatesSync().lastUpdated,
    icon: (
      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "bg-yellow-100",
  },
  {
    label: "สกุลเงินที่ใช้งาน",
    value: `${getRatesSync().rates.length} สกุลเงิน`,
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "bg-green-100",
  },
  {
    label: "จำนวนข่าว",
    value: `${getNewsSync().length} รายการ`,
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    color: "bg-blue-100",
  },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-surface-700">Dashboard</h1>
        <p className="text-sm text-surface-700/60 mt-1">
          ภาพรวมระบบจัดการ SuperRich
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center shrink-0`}
              >
                {stat.icon}
              </div>
              <div>
                <p className="text-xs text-surface-700/60">{stat.label}</p>
                <p className="text-lg font-bold text-surface-700">
                  {stat.value}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Links */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-surface-700 mb-4">
          เมนูด่วน
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="/admin/rates"
            className="flex items-center gap-4 p-4 bg-surface-0 border border-border rounded-xl hover:border-yellow-500 hover:shadow-sm transition-all duration-200 group"
          >
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
              <svg className="w-5 h-5 text-yellow-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-surface-700">
                จัดการอัตราแลกเปลี่ยน
              </p>
              <p className="text-xs text-surface-700/60">
                ปรับเรทซื้อ/ขาย, ดูประวัติ
              </p>
            </div>
          </a>
          <a
            href="/admin/news"
            className="flex items-center gap-4 p-4 bg-surface-0 border border-border rounded-xl hover:border-yellow-500 hover:shadow-sm transition-all duration-200 group"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
              <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-surface-700">
                จัดการข่าวสาร
              </p>
              <p className="text-xs text-surface-700/60">
                เพิ่ม/แก้ไขข่าว, จัดการเนื้อหา
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
