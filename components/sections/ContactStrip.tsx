import React from "react";
import Button from "@/components/ui/Button";

export default function ContactStrip() {
  return (
    <section className="bg-yellow-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16 lg:py-20">
        <div className="flex flex-col items-center text-center min-h-[180px] justify-center gap-5">
          <h2 className="text-2xl lg:text-3xl font-bold text-surface-700">
            สนใจบริการของเรา?
          </h2>
          <p className="text-surface-700/70 max-w-md">
            ติดต่อเราได้ทุกวัน เพื่อสอบถามข้อมูลเพิ่มเติม
            <br />
            หรือนัดหมายแลกเปลี่ยนเงินตรา
          </p>
          <div className="flex items-center gap-3 text-surface-700/70">
            <span className="text-lg">📞</span>
            <span className="text-lg font-semibold text-surface-700">
              02-057-8888
            </span>
          </div>
          <Button
            variant="primary"
            size="lg"
            href="/contact"
            aria-label="ติดต่อเรา"
          >
            ติดต่อเรา
          </Button>
        </div>
      </div>
    </section>
  );
}
