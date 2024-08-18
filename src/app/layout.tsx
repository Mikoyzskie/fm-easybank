import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

const publicSans = Public_Sans({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
  title: "easybank",
  description: "Next Generation Digital Banking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} bg-[#fafafa] overflow-x-hidden`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
