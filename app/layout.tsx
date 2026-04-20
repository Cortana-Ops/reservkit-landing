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
  metadataBase: new URL("https://reservkit.com"),
  title: {
    default: "ReservKit — Booking Software for Rental & Experience Businesses",
    template: "%s — ReservKit",
  },
  description:
    "Online booking, payments, waivers, staff scheduling, and reports — built for rental operators, tour guides, and experience businesses. Free to start.",
  keywords: [
    "booking software",
    "rental booking software",
    "activity booking software",
    "tour operator software",
    "experience business booking",
    "online reservation system",
    "waiver management software",
    "boat rental software",
    "kayak rental software",
    "outdoor activity booking",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://reservkit.com" },
  openGraph: {
    title: "ReservKit — Booking Software for Rental & Experience Businesses",
    description:
      "Online booking, payments, waivers, and staff tools built for rental operators and experience businesses. Free to start.",
    url: "https://reservkit.com",
    siteName: "ReservKit",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReservKit — Booking Software for Rental & Experience Businesses",
    description:
      "Online booking, payments, waivers, and staff tools for rental operators. Free to start.",
    images: ["https://reservkit.com/opengraph-image.png"],
  },
  verification: {
    google: "h40_sJX1Bf3VAdnC_XZ1ReQJpJjvavm59de2vbwLFFI",
  },
  icons: {
    apple: "/apple-icon",
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ReservKit",
  description:
    "Online booking, payments, waivers, staff scheduling, and reports for rental operators and experience businesses.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  featureList: [
    "Online Booking",
    "Stripe Payments",
    "Digital Waivers",
    "Staff Scheduling",
    "Reports & Analytics",
    "Customer Portal",
    "SMS Reminders",
    "Check-In Management",
    "Dynamic Pricing",
    "Coupon Codes",
  ],
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://reservkit.com",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ReservKit",
  url: "https://reservkit.com",
  logo: "https://reservkit.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@reservkit.com",
    contactType: "customer support",
    availableLanguage: "English",
  },
  sameAs: [
    "https://twitter.com/reservkit",
    "https://linkedin.com/company/reservkit",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ReservKit",
  url: "https://reservkit.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
