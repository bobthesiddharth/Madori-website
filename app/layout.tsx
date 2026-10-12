import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://madori.example";

export const metadata: Metadata = {
  title: "Madori — Manage your PG, beautifully",
  description: "Your PG, perfectly laid out. Room & bed management, zero-fee direct UPI rent collection, tenant onboarding, and automated receipts.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Madori — Manage your PG, beautifully",
    description: "Your PG, perfectly laid out. Modern room & bed management, direct UPI payments, and automated receipts.",
    url: siteUrl,
    siteName: "Madori",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ colorScheme: 'light' }} className={`${inter.variable} scroll-smooth`}>
      <body style={{ colorScheme: 'light' }} className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
