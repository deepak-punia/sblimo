import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SB LIMO",
  description: "Whether it's a special occasion, corporate event, or a stylish ride to the airport, our premium limousine services promise unparalleled comfort, discretion, and style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}</body>
    </html>
  );
}
