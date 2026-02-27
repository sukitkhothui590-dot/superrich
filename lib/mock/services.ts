import { ServiceItem } from "@/lib/types/service";

const mockServices: ServiceItem[] = [
  {
    id: "1",
    title: "SuperRich Money Exchange",
    titleTh: "แลกเงิน",
    description: "เรทดี เชื่อถือได้ แลกเงินปลีกโตเรา",
    icon: "",
    link: "/services",
  },
  {
    id: "2",
    title: "SuperRich Online Booking",
    titleTh: "จองเงินออนไลน์",
    description: "จองง่าย สะดวกสบาย นัดรับหน้าสาขา ใกล้คุณ",
    icon: "",
    link: "/services",
  },
  {
    id: "3",
    title: "SuperRich Money Transfer",
    titleTh: "โอนเงินระหว่างประเทศ",
    description: "โอนเงินที่ไหนก็โอนถึงได้ รวดเร็ว ปลอดภัยไร้กังวล",
    icon: "",
    link: "/services",
  },
];

export async function getServices(): Promise<ServiceItem[]> {
  return mockServices;
}

export function getServicesSync(): ServiceItem[] {
  return mockServices;
}

export { mockServices };
