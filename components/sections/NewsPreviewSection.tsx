"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getNews } from "@/lib/mock/news";
import { NewsItem } from "@/lib/types/news";
import Skeleton from "@/components/ui/Skeleton";

function NewsSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-5">
        <Skeleton className="w-full h-[420px] rounded-2xl" />
        <Skeleton className="w-1/3 h-4 mt-4" />
        <Skeleton className="w-3/4 h-5 mt-2" />
        <Skeleton className="w-full h-3 mt-2" />
      </div>
      <div className="lg:col-span-7 space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-4">
            <Skeleton className="w-[180px] h-[120px] rounded-xl shrink-0" />
            <div className="flex-1 space-y-2 py-2">
              <Skeleton className="w-1/4 h-3" />
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-3/4 h-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-[#F26522] text-white">
      {category}
    </span>
  );
}

export default function NewsPreviewSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const data = await getNews();
      setNews(data);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const featured = news[0];
  const sideNews = news.slice(1);

  return (
    <section className="py-16 lg:py-20 bg-[#FFF8F3]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 lg:mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#F26522]">
            ข่าวสาร
          </h2>
          <Link
            href="/news"
            className="text-sm font-medium text-surface-600 hover:text-[#F26522] transition-colors"
          >
            ดูเพิ่มเติม &gt;
          </Link>
        </div>

        {loading ? (
          <NewsSkeleton />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Featured (left column) */}
            {featured && (
              <div className="lg:col-span-7">
                <Link href="/news" className="group block">
                  {/* Featured image */}
                  <div className="w-full h-[280px] sm:h-[340px] lg:h-[420px] bg-border/80 rounded-2xl flex items-center justify-center text-surface-700/40 text-sm font-medium overflow-hidden">
                    600×420
                  </div>

                  {/* Featured info */}
                  <div className="mt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CategoryBadge category={featured.category} />
                      <span className="text-xs text-surface-500">
                        {featured.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#F26522] leading-snug line-clamp-2">
                      {featured.title}
                    </h3>
                    <p className="mt-2 text-sm text-surface-500 leading-relaxed line-clamp-3">
                      {featured.excerpt}
                    </p>
                  </div>
                </Link>
              </div>
            )}

            {/* Side news (right column) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {sideNews.map((item) => (
                <Link
                  key={item.id}
                  href="/news"
                  className="group flex gap-4 rounded-2xl overflow-hidden hover:bg-white/60 transition-colors"
                >
                  {/* Thumbnail */}
                  <div className="w-[160px] sm:w-[200px] h-[120px] sm:h-[140px] shrink-0 bg-border/80 rounded-xl flex items-center justify-center text-surface-700/40 text-xs font-medium overflow-hidden">
                    200×140
                  </div>

                  {/* Info */}
                  <div className="flex-1 py-2 pr-2">
                    <div className="flex items-center gap-2 mb-1.5">
                      <CategoryBadge category={item.category} />
                      <span className="text-xs text-surface-500">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#F26522] leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-surface-500 leading-relaxed line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
