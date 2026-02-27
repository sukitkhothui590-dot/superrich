"use client";

import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { useToast } from "@/components/ui/Toast";
import { mockNews } from "@/lib/mock/news";
import { NewsItem } from "@/lib/types/news";

const categoryOptions = [
  { value: "ประกาศ", label: "ประกาศ" },
  { value: "โปรโมชั่น", label: "โปรโมชั่น" },
  { value: "ข่าวสาร", label: "ข่าวสาร" },
];

const emptyForm = {
  title: "",
  excerpt: "",
  date: "",
  image: "",
  category: "ประกาศ" as NewsItem["category"],
  content: "",
};

export default function AdminNewsPage() {
  const { showToast } = useToast();
  const [newsList, setNewsList] = useState<NewsItem[]>([...mockNews]);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);

  const handleEdit = (item: NewsItem) => {
    setEditing(item.id);
    setForm({
      title: item.title,
      excerpt: item.excerpt,
      date: item.date,
      image: item.image,
      category: item.category,
      content: item.content || "",
    });
  };

  const handleNew = () => {
    setEditing("new");
    setForm(emptyForm);
  };

  const handleSave = () => {
    if (!form.title.trim()) {
      showToast("warn", "กรุณากรอกหัวข้อข่าว");
      return;
    }

    if (editing === "new") {
      const newItem: NewsItem = {
        id: Date.now().toString(),
        title: form.title,
        excerpt: form.excerpt,
        date: form.date || new Date().toLocaleDateString("th-TH"),
        image: form.image,
        slug: form.title.toLowerCase().replace(/\s+/g, "-"),
        category: form.category,
        content: form.content,
      };
      setNewsList((prev) => [newItem, ...prev]);
      showToast("success", "สร้างข่าวสำเร็จ", form.title);
    } else {
      setNewsList((prev) =>
        prev.map((item) =>
          item.id === editing
            ? {
                ...item,
                title: form.title,
                excerpt: form.excerpt,
                date: form.date,
                image: form.image,
                category: form.category,
                content: form.content,
              }
            : item
        )
      );
      showToast("success", "อัปเดตข่าวสำเร็จ", form.title);
    }

    setEditing(null);
    setForm(emptyForm);
  };

  const handleCancel = () => {
    setEditing(null);
    setForm(emptyForm);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-surface-700">จัดการข่าวสาร</h1>
          <p className="text-sm text-surface-700/60 mt-1">
            เพิ่ม แก้ไข และจัดการข่าวสาร
          </p>
        </div>
        {!editing && (
          <Button variant="primary" onClick={handleNew} aria-label="สร้างข่าวใหม่">
            + สร้างข่าวใหม่
          </Button>
        )}
      </div>

      {/* Edit/Create Form */}
      {editing && (
        <Card className="mb-8">
          <h2 className="text-sm font-bold text-surface-700 mb-4">
            {editing === "new" ? "สร้างข่าวใหม่" : "แก้ไขข่าว"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="หัวข้อ"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="ระบุหัวข้อข่าว"
              aria-label="หัวข้อข่าว"
            />
            <Select
              label="หมวดหมู่"
              options={categoryOptions}
              value={form.category}
              onChange={(e) =>
                setForm({
                  ...form,
                  category: e.target.value as NewsItem["category"],
                })
              }
              aria-label="หมวดหมู่ข่าว"
            />
            <Input
              label="วันที่"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              placeholder="เช่น 26 ก.พ. 2026"
              aria-label="วันที่เผยแพร่"
            />
            <Input
              label="URL รูปปก"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              placeholder="https://example.com/image.jpg"
              aria-label="URL รูปปก"
            />
            <div className="md:col-span-2">
              <Input
                label="เนื้อหาย่อ"
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                placeholder="เนื้อหาย่อสำหรับแสดงในหน้ารวม"
                aria-label="เนื้อหาย่อ"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-surface-700 block mb-1.5">
                เนื้อหาเต็ม
              </label>
              <textarea
                className="w-full rounded-lg border border-border bg-surface-0 px-4 py-2.5 text-sm text-surface-700 placeholder:text-surface-700/50 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-colors duration-200 min-h-[120px] resize-y"
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                placeholder="เนื้อหาข่าวเต็ม..."
                aria-label="เนื้อหาเต็ม"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <Button variant="primary" onClick={handleSave} aria-label="บันทึก">
              บันทึก
            </Button>
            <Button variant="outline" onClick={handleCancel} aria-label="ยกเลิก">
              ยกเลิก
            </Button>
          </div>
        </Card>
      )}

      {/* News List */}
      <Card padding={false}>
        <div className="px-6 py-4 border-b border-border">
          <h2 className="text-sm font-bold text-surface-700">
            รายการข่าว ({newsList.length})
          </h2>
        </div>
        <div className="divide-y divide-border">
          {newsList.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 px-6 py-4 hover:bg-surface-50 transition-colors"
            >
              {/* Thumbnail */}
              <div className="w-16 h-16 bg-border rounded-lg flex items-center justify-center shrink-0">
                {item.image ? (
                  <span className="text-[8px] text-surface-700/40 text-center break-all px-1">
                    {item.image.slice(0, 20)}...
                  </span>
                ) : (
                  <span className="text-[10px] text-surface-700/40">
                    No img
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={[
                      "inline-block text-[10px] font-bold px-2 py-0.5 rounded",
                      item.category === "ประกาศ"
                        ? "bg-yellow-100 text-yellow-600"
                        : item.category === "โปรโมชั่น"
                          ? "bg-green-100 text-green-600"
                          : "bg-blue-100 text-blue-600",
                    ].join(" ")}
                  >
                    {item.category}
                  </span>
                  <span className="text-xs text-surface-700/50">
                    {item.date}
                  </span>
                </div>
                <p className="text-sm font-semibold text-surface-700 truncate">
                  {item.title}
                </p>
                <p className="text-xs text-surface-700/60 truncate">
                  {item.excerpt}
                </p>
              </div>

              {/* Actions */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleEdit(item)}
                aria-label={`แก้ไข ${item.title}`}
              >
                แก้ไข
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
