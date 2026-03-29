import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "仕事受けるべき？チェッカー",
  description: "実質時給で仕事の採算を判定するアプリ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
