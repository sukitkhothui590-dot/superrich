"use client";

import { useState } from "react";

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="w-8 h-8 rounded-full bg-[#F26522] text-white flex items-center justify-center hover:bg-[#D9551A] transition-colors"
    >
      {children}
    </a>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("ส่งข้อความเรียบร้อยแล้ว");
  };

  return (
    <>
      {/* Hero */}
      <section className="relative z-0 bg-gradient-to-br from-[#F58A2A] to-[#F26522]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 lg:py-10">
          <div className="relative w-full" style={{ aspectRatio: "1440/185" }}>
            {/* Background size placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/25 font-bold text-3xl sm:text-4xl lg:text-5xl tracking-wider">
                1440×185
              </span>
            </div>
            {/* Foreground text (left) */}
            <div className="absolute inset-0 flex items-start pt-6 sm:pt-8 lg:pt-12">
              <div className="max-w-xl">
                <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-tight text-white">
                  ติดต่อเรา
                </h1>
                <p className="mt-3 text-base sm:text-lg font-medium text-white/90">
                  ส่งข้อความ หรือ ปัญหาของคุณเราจะรีบดำเนินการติดต่อกลับ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-surface-0 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left: Branch info + map */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F26522]">
                สาขาสีลม (สำนักงานใหญ่)
              </h2>
              <p className="mt-2 text-sm sm:text-base text-surface-600">
                เลขที่ 491/5-491/7 ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพฯ 10500
              </p>

              {/* Social icons */}
              <div className="mt-4 flex items-center gap-2.5">
                <SocialIcon>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 10.304C24 4.614 18.627.2 12 .2S0 4.614 0 10.304c0 5.003 4.434 9.192 10.424 9.984.406.088.96.268 1.1.616.126.316.082.81.04 1.128l-.178 1.068c-.054.326-.254 1.276 1.118.696 1.372-.58 7.396-4.356 10.09-7.454C24.22 14.466 24 12.432 24 10.304z" /></svg>
                </SocialIcon>
                <SocialIcon>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </SocialIcon>
                <SocialIcon>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </SocialIcon>
                <SocialIcon>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                </SocialIcon>
                <SocialIcon>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </SocialIcon>
              </div>

              {/* Phone & Google Map */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-start gap-6">
                <div>
                  <div className="flex items-center gap-2 text-[#F26522]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span className="font-bold text-lg">02-057-8888</span>
                  </div>
                  <p className="mt-1 text-xs text-surface-500">
                    จันทร์-เสาร์ เวลา 08.00-17.00น.
                  </p>
                </div>
                <div>
                  <a
                    href="https://maps.google.com/?q=13.7293,100.5413"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#F26522] hover:underline"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="font-bold text-base">Google Map</span>
                  </a>
                  <p className="mt-1 text-xs text-surface-500">
                    ใช้แอพพลิเคชั่นนำทาง
                  </p>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-6 w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#E5E7EB] bg-surface-50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8!2d100.5413!3d13.7293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQzJzQ1LjUiTiAxMDDCsDMyJzI4LjgiRQ!5e0!3m2!1sth!2sth!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SuperRich สาขาสีลม"
                />
              </div>
            </div>

            {/* Right: Contact form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-surface-800">
                ข้อมูลการติดต่อ
              </h2>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                {/* Row: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">
                      ชื่อ - นามสกุล <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="ชื่อ - นามสกุล"
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] px-4 py-2.5 text-sm text-surface-700 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-[#F26522]/30 focus:border-[#F26522] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] px-4 py-2.5 text-sm text-surface-700 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-[#F26522]/30 focus:border-[#F26522] transition-colors"
                    />
                  </div>
                </div>

                {/* Row: Phone + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">
                      หมายเลขโทรศัพท์
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="หมายเลขโทรศัพท์"
                      className="w-full rounded-lg border border-[#E5E7EB] px-4 py-2.5 text-sm text-surface-700 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-[#F26522]/30 focus:border-[#F26522] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">
                      บริษัท
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="บริษัท"
                      className="w-full rounded-lg border border-[#E5E7EB] px-4 py-2.5 text-sm text-surface-700 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-[#F26522]/30 focus:border-[#F26522] transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1.5">
                    ส่งข้อความ หรือ ปัญหาของคุณ
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="ส่งข้อความ หรือปัญหาของคุณ เราจะรีบดำเนินการติดต่อกลับ"
                    rows={6}
                    className="w-full rounded-lg border border-[#E5E7EB] px-4 py-2.5 text-sm text-surface-700 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-[#F26522]/30 focus:border-[#F26522] transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#F26522] text-white font-semibold py-3 text-base hover:bg-[#D9551A] transition-colors"
                >
                  ส่งข้อความ
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
