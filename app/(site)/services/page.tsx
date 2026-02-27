import Button from "@/components/ui/Button";

export default function ServicesPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-surface-700 mb-2">
        บริการของเรา
      </h1>
      <p className="text-surface-700/60 mb-6">
        หน้านี้กำลังอยู่ระหว่างการพัฒนา จะเปิดให้บริการเร็วๆ นี้
      </p>
      <Button variant="secondary" href="/" aria-label="กลับหน้าแรก">
        ← กลับหน้าแรก
      </Button>
    </div>
  );
}
