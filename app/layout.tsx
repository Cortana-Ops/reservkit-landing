import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PostHogProvider } from "./components/PostHogProvider";
import { METADATA_DESCRIPTION } from "./lib/marketing";
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
    default: "ReservKit — Direct booking software for rental and experience operators",
    template: "%s — ReservKit",
  },
  description: METADATA_DESCRIPTION,
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
    title: "ReservKit — Direct booking software for rental and experience operators",
    description: METADATA_DESCRIPTION,
    url: "https://reservkit.com",
    siteName: "ReservKit",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReservKit — Direct booking software for rental and experience operators",
    description: METADATA_DESCRIPTION,
    images: ["https://reservkit.com/opengraph-image.png"],
  },
  verification: {
    google: "h40_sJX1Bf3VAdnC_XZ1ReQJpJjvavm59de2vbwLFFI",
  },
  icons: {
    apple: [{ url: "/logo.png?v=2", type: "image/png" }],
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
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    description: "Limited beta onboarding with 0% platform fee for 30 days for approved operators.",
  },
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
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
