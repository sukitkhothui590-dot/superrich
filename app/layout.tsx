import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import { ToastProvider } from "@/components/ui/Toast";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  variable: "--font-noto-sans-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SuperRich1965 - Money Exchange",
  description: "บริการแลกเปลี่ยนเงินตราต่างประเทศ อัตราดี มั่นใจได้",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={notoSansThai.variable}>
      <body className="font-[family-name:var(--font-noto-sans-thai)]">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
