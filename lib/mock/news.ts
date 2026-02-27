import { NewsItem } from "@/lib/types/news";

const mockNews: NewsItem[] = [
  {
    id: "1",
    title: "Around Lifestyle Station Branch (PTT Station, Soi Phetchaburi 31)",
    date: "20 ก.พ. 2026",
    excerpt:
      "SuperRich1965 (Orange) สาขา Around Lifestyle Station (ปั้ม ปตท. ซอยเพชรบุรี 31) โฉมใหม่! พร้อมให้บริการแล้ว! เปิดบริการทุกวัน 10:00 - 19:00 น. แล้วมาแลกเงินกับเรา",
    image: "",
    slug: "around-lifestyle-station-branch",
    category: "ประกาศ",
    content: "SuperRich1965 (Orange) สาขา Around Lifestyle Station",
  },
  {
    id: "2",
    title: "Now Open! SuperRich1965",
    date: "3 ก.พ. 2026",
    excerpt:
      "แลกเงินแรก! ในสถานที่สวยที่สุดในไทย! พบกับ พวกเรา SuperRich1965 สีส้ม สาขาใหม่ล่าสุด ที่พร้อมเปิดให้บริการแล้ววันนี้ MRT...",
    image: "",
    slug: "now-open-superrich1965",
    category: "ประกาศ",
    content: "แลกเงินแรก! ในสถานที่สวยที่สุดในไทย!",
  },
  {
    id: "3",
    title: "SuperRich Money Transfer",
    date: "13 ม.ค. 2026",
    excerpt:
      "SuperRich Money Transfer บริการโอน-รับเงินระหว่างประเทศ ครอบคลุมกว่า 200 ประเทศ ทั่วโลกทันที! กิจกรรมสมัครสมาชิกสุด Exclusive เริ่ม...",
    image: "",
    slug: "superrich-money-transfer",
    category: "โปรโมชั่น",
    content: "SuperRich Money Transfer บริการโอน รับเงินระหว่างประเทศ",
  },
  {
    id: "4",
    title: "SuperRich1965 (Orange) เปิดสาขาใหม่ MRT กำแพงเพชร",
    date: "2 ธ.ค. 2025",
    excerpt:
      "สถิติ MRT กำแพงเพชร (ทางออก 2) เวลา ทำการ: ทุกวันศุกร์ - อาทิตย์ 10:00 น. - 19:00 น. พิเศษ! ลดอัตราค่าโอนเงินให้สมาชิก...",
    image: "",
    slug: "superrich1965-orange-mrt-kamphaengphet",
    category: "ประกาศ",
    content: "SuperRich1965 (Orange) เปิดสาขาใหม่ MRT กำแพงเพชร",
  },
];

export async function getNews(): Promise<NewsItem[]> {
  return mockNews;
}

export function getNewsSync(): NewsItem[] {
  return mockNews;
}

export { mockNews };
