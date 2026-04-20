import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReservKit — Booking Software for Rental & Experience Businesses",
  description:
    "Online booking, payments, waivers, staff scheduling, and reports — built for rental operators, tour guides, and experience businesses.",
  openGraph: {
    title: "ReservKit",
    description: "Booking platform built for rental operators and experience businesses.",
    url: "https://reservkit.com",
    siteName: "ReservKit",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
