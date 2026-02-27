import Link from "next/link";
import { getNewsSync } from "@/lib/mock/news";

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-[#0F766E] text-white">
      {category}
    </span>
  );
}

const PAGE_SIZE = 6;

export default function NewsPage() {
  const allNews = getNewsSync();
  const currentPage = 1;
  const pageCount = Math.max(1, Math.ceil(allNews.length / PAGE_SIZE));
  const items = allNews.slice(0, PAGE_SIZE);

  return (
    <>
      {/* Orange hero with background image placeholder */}
      <section className="bg-gradient-to-br from-[#0F766E] to-[#0F766E]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 lg:py-10">
          <div className="relative w-full" style={{ aspectRatio: "1440/400" }}>
            {/* Background size placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/25 font-bold text-3xl sm:text-4xl lg:text-5xl tracking-wider">
                1440×400
              </span>
            </div>

            {/* Foreground text (left) */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl">
                <p className="text-sm font-semibold tracking-[0.16em] uppercase text-white">
                  SuperRich
                </p>
                <h1 className="mt-1 text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-tight text-white">
                  News
                </h1>
                <p className="mt-3 text-base sm:text-lg font-medium text-white/90">
                  แหล่งข่าวสารและข้อมูล
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News cards grid */}
      <section className="bg-surface-0 pb-16 pt-10 lg:pt-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {items.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl shadow-[0_10px_24px_rgba(15,23,42,0.15)] overflow-hidden flex flex-col"
              >
                {/* Image placeholder */}
                <div className="w-full h-[190px] sm:h-[210px] bg-border/80 flex items-center justify-center text-surface-700/40 text-xs font-medium">
                  400×220
                </div>

                {/* Body */}
                <div className="px-4 pt-4 pb-3 sm:px-5 sm:pt-5 sm:pb-3 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <CategoryBadge category={item.category} />
                    <span className="text-[11px] text-surface-500">
                      {item.date}
                    </span>
                  </div>
                  <h2 className="text-sm sm:text-base font-bold text-surface-700 leading-snug line-clamp-2 mb-1.5">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-surface-600 leading-relaxed line-clamp-3 flex-1">
                    {item.excerpt}
                  </p>
                </div>

                {/* Bottom button full width */}
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 bg-white">
                  <Link
                    href="#"
                    className="w-full inline-flex items-center justify-center rounded-lg bg-[#0F766E] text-white text-xs sm:text-sm font-semibold py-2.5 hover:bg-[#0B5A53] transition-colors"
                  >
                    ดูเพิ่มเติม
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination (static, page 1) */}
          <div className="mt-10 flex items-center justify-between text-sm">
            {/* Prev button (left) */}
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-[#0F766E] text-[#0F766E] bg-white px-4 py-1.5 shadow-sm cursor-default"
              aria-disabled="true"
            >
              <span className="text-xs">←</span>
              <span className="text-sm">ก่อนหน้า</span>
            </button>

            {/* Center page numbers */}
            <div className="flex items-center gap-2 text-surface-500">
              <button
                type="button"
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-surface-50"
                aria-disabled="true"
              >
                «
              </button>
              <button
                type="button"
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-surface-50"
                aria-disabled="true"
              >
                ‹
              </button>
              {Array.from({ length: pageCount }).map((_, idx) => {
                const page = idx + 1;
                const isActive = page === currentPage;
                return (
                  <button
                    key={page}
                    type="button"
                    className={[
                      "w-7 h-7 flex items-center justify-center rounded-full text-sm font-medium",
                      isActive
                        ? "bg-[#FEEFE4] text-[#0F766E]"
                        : "text-surface-500 hover:bg-surface-50",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {page}
                  </button>
                );
              })}
              <button
                type="button"
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-surface-50 text-surface-500"
              >
                ›
              </button>
              <button
                type="button"
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-surface-50 text-surface-500"
              >
                »
              </button>
            </div>

            {/* Next button (right) */}
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-[#0F766E] text-[#0F766E] bg-white px-4 py-1.5 shadow-sm"
            >
              <span className="text-sm">ถัดไป</span>
              <span className="text-xs">→</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
