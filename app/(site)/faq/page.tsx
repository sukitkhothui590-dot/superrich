"use client";

import { useState } from "react";

const faqs = [
  {
    question: "อัตราแลกเปลี่ยนบนเว็บไซต์เป็นอัตราอัปเดตล่าสุดหรือไม่?",
    answer:
      "อัตราแลกเปลี่ยนที่เราแสดงบนเว็บไซต์คืออัตราแบบเรียลไทม์ ซึ่งจะมีการอัปเดตตามสภาวะตลาดอย่างต่อเนื่อง อย่างไรก็ตาม อัตราอาจมีการเปลี่ยนแปลงได้ในแต่ละช่วงเวลา ดังนั้น แนะนำให้ลูกค้าตรวจสอบอัตรากับสาขาที่ต้องการใช้บริการอีกครั้งก่อนทำรายการ",
  },
  {
    question: "เอกสารที่ต้องใช้สำหรับการแลกเงินมีอะไรบ้าง?",
    answer:
      "สำหรับลูกค้าบุคคลธรรมดา กรุณานำบัตรประชาชน หรือหนังสือเดินทางตัวจริงมาแสดงต่อเจ้าหน้าที่ทุกครั้งก่อนทำรายการซื้อ-ขายธนบัตรต่างประเทศ สำหรับนิติบุคคลอาจต้องใช้เอกสารเพิ่มเติม กรุณาติดต่อสาขาเพื่อสอบถามรายละเอียด",
  },
  {
    question: "การซื้อ-ขายเงินตราต่างประเทศที่ SuperRich 1965 มีข้อจำกัดในการแลกเงินหรือไม่?",
    answer:
      "การแลกเงินมีข้อจำกัดตามนโยบายของบริษัทและกฎหมายที่เกี่ยวข้อง เช่น จำนวนเงินสูงสุดต่อรายการหรือต่อวัน อาจแตกต่างกันตามสกุลเงินและประเภทลูกค้า กรุณาสอบถามเงื่อนไขล่าสุดที่สาขาก่อนทำรายการ",
  },
  {
    question: "สามารถชำระเงินสำหรับการแลกเงินผ่านช่องทางใดได้บ้าง?",
    answer:
      "โดยทั่วไปลูกค้าสามารถชำระด้วยเงินสด (บาทไทย) ณ สาขา บางสาขาอาจรองรับช่องทางอื่นเพิ่มเติม กรุณาตรวจสอบกับสาขาที่ต้องการใช้บริการหรือโทร 02-057-8888",
  },
  {
    question: "การแลกเงินที่ SuperRich1965 มีค่าธรรมเนียมหรือค่าคอมมิชชั่นหรือไม่?",
    answer:
      "อัตราที่แสดงเป็นอัตราซื้อ-ขายที่รวมค่าบริการแล้ว โดยไม่มีค่าธรรมเนียมแยกเพิ่มสำหรับการแลกเงินทั่วไป สำหรับบริการพิเศษอาจมีเงื่อนไขต่างกัน กรุณาสอบถามที่สาขา",
  },
  {
    question: "สามารถชำระเงินด้วยบัตรเครดิตหรือบัตรเดบิตได้หรือไม่?",
    answer:
      "การชำระสำหรับการแลกเงินที่สาขาโดยทั่วไปใช้เงินสด (บาทไทย) การใช้บัตรเครดิตหรือบัตรเดบิตอาจใช้ได้ในบางสาขาหรือบริการ กรุณาติดต่อสาขาที่ต้องการใช้บริการเพื่อยืนยัน",
  },
  {
    question: "การสั่งจองเงินเพื่อซื้อ-ขายเงินตราต่างประเทศล่วงหน้ามีขั้นตอนอย่างไรบ้าง?",
    answer:
      "ลูกค้าสามารถติดต่อสาขาที่ต้องการใช้บริการเพื่อสอบถามอัตราและจำนวนเงินที่ต้องการจอง จากนั้นเจ้าหน้าที่จะแจ้งขั้นตอนการจอง ระยะเวลา และเงื่อนไขการรับเงิน กรุณาติดต่อ Call Center 02-057-8888 หรือสาขาโดยตรง",
  },
  {
    question: "SuperRich Currency Exchange (1965) มีช่องทางการติดต่อใดบ้าง?",
    answer:
      "ติดต่อได้ที่ Call Center 02-057-8888, LINE Official @SuperRich, เว็บไซต์แบบฟอร์มติดต่อเรา และช่องทางโซเชียลมีเดีย (Facebook, Instagram ฯลฯ) รวมถึงเดินทางไปที่สาขาโดยตรง",
  },
  {
    question: "SuperRich Currency Exchange (1965) มีสาขาที่ไหนบ้าง และเปิด-ปิดกี่โมง?",
    answer:
      "เรามีหลายสาขาในกรุงเทพฯ และต่างจังหวัด รวมถึงสนามบิน สาขาหลักเช่น สีลม ราชดำริ เป็นต้น เวลาทำการโดยทั่วไปวันจันทร์-เสาร์ ประมาณ 08.00–17.00 น. แต่ละสาขาอาจแตกต่างกัน กรุณาดูรายละเอียดที่หน้า \"สาขาทั้งหมด\" หรือโทร 02-057-8888",
  },
  {
    question: "อัตราแลกเปลี่ยนของแต่ละสาขาเท่ากันหรือไม่?",
    answer:
      "อัตราอาจแตกต่างกันเล็กน้อยระหว่างสาขาตามสภาวะตลาดและความพร้อมของสกุลเงิน แนะนำให้ตรวจสอบอัตราล่าสุดของสาขาที่จะใช้บริการผ่านเว็บไซต์หรือโทรสอบถามสาขา",
  },
  {
    question: "มีสาขาที่ใกล้สนามบินดอนเมืองไหม?",
    answer:
      "เรามีจุดให้บริการในพื้นที่สนามบินและใกล้สนามบินหลายแห่ง รวมถึงดอนเมือง กรุณาดูรายชื่อสาขาและที่อยู่ในหน้า \"สาขาทั้งหมด\" หรือค้นหา \"SuperRich สนามบินดอนเมือง\" เพื่อดูเวลาทำการและที่ตั้ง",
  },
  {
    question: "SuperRich Currency Exchange (1965) มีบริการโอนเงินไปต่างประเทศไหม?",
    answer:
      "บริการหลักของเราคือการแลกเปลี่ยนเงินตราต่างประเทศ ณ สาขา สำหรับการโอนเงินระหว่างประเทศ กรุณาติดต่อสาขาหรือ Call Center 02-057-8888 เพื่อสอบถามบริการที่มีในปัจจุบัน",
  },
  {
    question: "สามารถแลกเงินสกุลใดบ้างที่ SuperRich Currency Exchange (1965)?",
    answer:
      "เรารองรับสกุลเงินหลักหลายสกุล เช่น USD, EUR, GBP, JPY, CNY, AUD, SGD, HKD, CHF และอื่นๆ รายการสกุลเงินและอัตราอาจแตกต่างตามสาขา กรุณาตรวจสอบที่หน้า \"อัตราแลกเปลี่ยน\" หรือสอบถามสาขา",
  },
  {
    question: "หากต้องการเปลี่ยนแปลงการจองเงิน ต้องทำอย่างไร?",
    answer:
      "กรุณาติดต่อสาขาที่ทำการจองหรือ Call Center 02-057-8888 เพื่อแจ้งความประสงค์เปลี่ยนวันรับ จำนวน หรือยกเลิกการจอง เงื่อนไขอาจขึ้นอยู่กับนโยบายของสาขาและระยะเวลาที่เหลือ",
  },
  {
    question: "SuperRich 1965 มีบริการจัดส่งเงินหรือไม่?",
    answer:
      "โดยทั่วไปการรับเงินที่จองจะต้องรับ ณ สาขาที่ทำการจอง สำหรับบริการจัดส่งหรือการรับที่จุดอื่น กรุณาสอบถามกับสาขาหรือ Call Center 02-057-8888 เนื่องจากอาจมีในบางช่วงหรือบางโปรโมชัน",
  },
  {
    question: "รับแลกเงินเหรียญต่างประเทศหรือไม่?",
    answer:
      "เรารับซื้อ-ขายธนบัตรเป็นหลัก การรับเหรียญต่างประเทศอาจมีจำกัดหรืออัตราต่างจากธนบัตร กรุณาสอบถามที่สาขาว่ามีบริการรับเหรียญสกุลใดบ้างและอัตราปัจจุบัน",
  },
  {
    question: "เวลาทำการเปิดให้ใช้บริการแลกเปลี่ยนเป็นเวลาใด?",
    answer:
      "โดยทั่วไปสาขาหลักจะเปิดให้บริการวันจันทร์-เสาร์ เวลาประมาณ 08.00–17.00 น. สาขาในสนามบินหรือจุดอื่นอาจเปิดยาวขึ้น เวลาทำการอาจแตกต่างกันในแต่ละสาขา กรุณาตรวจสอบข้อมูลล่าสุดที่หน้ารายละเอียดสาขา",
  },
  {
    question: "สามารถจองอัตราแลกเปลี่ยนล่วงหน้าได้หรือไม่?",
    answer:
      "ลูกค้าสามารถติดต่อสอบถามอัตราและเงื่อนไขการจองได้ที่สาขาที่ต้องการใช้บริการ โดยเงื่อนไขจะขึ้นอยู่กับนโยบายของแต่ละช่วงเวลา และอาจมีการวางเงินมัดจำหรือยืนยันการจองตามที่สาขาแจ้ง",
  },
  {
    question: "หากต้องการสอบถามข้อมูลเพิ่มเติมสามารถติดต่อช่องทางใดได้บ้าง?",
    answer:
      "ลูกค้าสามารถติดต่อได้ผ่านสาขาใกล้บ้าน, Call Center 02-057-8888, LINE Official @SuperRich, แบบฟอร์มติดต่อเราบนเว็บไซต์ และช่องทางโซเชียลมีเดียของบริษัท",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Hero - 1440/185 */}
      <section className="relative z-0 bg-gradient-to-br from-[#F58A2A] to-[#F26522]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6 lg:py-8">
          <div className="relative w-full" style={{ aspectRatio: "1440/185" }}>
            {/* Background size placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/25 font-bold text-2xl sm:text-3xl lg:text-4xl tracking-wider">
                1440×185
              </span>
            </div>
            {/* Foreground text (left) */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
                  SPR FAQ
                </h1>
                <p className="mt-1 text-base sm:text-lg font-medium text-white/90">
                  คำถามที่พบบ่อย
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-surface-0 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F26522]">
            คำถามที่พบบ่อย
          </h2>
          <p className="mt-2 text-sm sm:text-base text-surface-600 max-w-2xl">
            รวบรวมคำถามยอดนิยมเกี่ยวกับการแลกเปลี่ยนเงินตรา อัตราแลกเปลี่ยน เอกสารที่ใช้บริการ สั่งซื้อเงินตรา
            ข้อมูลสาขา ช่องทางการติดต่อ ฯลฯ
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.4fr)] gap-8 lg:gap-10 items-start">
            {/* Left: Image + CTA card */}
            <div>
              <div className="rounded-2xl overflow-hidden bg-[#F58A2A] aspect-[3/4] relative flex items-center justify-center">
                <span className="text-white/40 font-bold text-2xl sm:text-3xl tracking-wider">
                  480×540
                </span>
              </div>

              <div className="mt-4 rounded-2xl bg-white shadow-[0_8px_20px_rgba(15,23,42,0.12)] px-6 py-5">
                <h3 className="text-base sm:text-lg font-bold text-surface-800">
                  ยังมีข้อสงสัยเพิ่มเติม?
                </h3>
                <p className="mt-1.5 text-sm text-surface-600">
                  หากไม่พบคำถามที่ต้องการ คุณสามารถติดต่อทีมงานของเราได้ทันทีผ่านแบบฟอร์มการติดต่อหรือช่องทางอื่นๆ
                </p>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#F26522] text-white text-sm font-semibold px-5 py-2.5 hover:bg-[#D9551A] transition-colors"
                >
                  ติดต่อเรา
                </button>
              </div>
            </div>

            {/* Right: FAQ Accordion */}
            <div className="bg-white rounded-2xl shadow-[0_10px_24px_rgba(15,23,42,0.12)] divide-y divide-[#E5E7EB]">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.question}>
                    <button
                      type="button"
                      className="w-full flex items-center gap-3 px-5 sm:px-6 py-4 text-left hover:bg-surface-50 transition-colors"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF3E8] text-[#F26522] flex-shrink-0">
                        <span className="font-bold text-base">Q</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm sm:text-base font-semibold text-surface-800">
                          {item.question}
                        </p>
                      </div>
                      <svg
                        className={`w-4 h-4 text-surface-400 flex-shrink-0 transition-transform duration-150 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-4 text-sm text-surface-600 leading-relaxed bg-surface-0">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
