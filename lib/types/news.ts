export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
  category: "ประกาศ" | "โปรโมชั่น" | "ข่าวสาร";
  content?: string;
}
