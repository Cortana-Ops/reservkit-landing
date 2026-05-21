import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../components/PageShell";
import { CheckCircle2 } from "lucide-react";
import { pricingSummary } from "../../lib/marketing";

export const metadata: Metadata = {
  title: "Getting Started Guide",
  description: "Set up your ReservKit account, create your first activity, connect Stripe, and take your first booking in under 30 minutes.",
  alternates: { canonical: "https://reservkit.com/docs/getting-started" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ReservKit", item: "https://reservkit.com" },
    { "@type": "ListItem", position: 2, name: "Documentation", item: "https://reservkit.com/docs" },
    { "@type": "ListItem", position: 3, name: "Getting Started", item: "https://reservkit.com/docs/getting-started" },
  ],
};

const steps = [
  {
    number: "01",
    title: "Request beta access",
    content: [
      "Submit your business name, booking volume, current booking tool, and website or social link from the beta request page.",
      "Approved operators receive guided onboarding to confirm the first production-ready setup steps.",
      pricingSummary,
    ],
  },
  {
    number: "02",
    title: "Set up your organization",
    content: [
      "The onboarding wizard asks for your business name, business type (rental, tour, experience, etc.), and timezone. This information is used on your public booking page and in customer communications.",
      "You can update your organization details at any time from Settings → Organization. Add your logo, set your booking rules (minimum lead time, max advance booking days, cancellation policy), and configure your notification preferences.",
      "If you're running multiple locations or brands, each organization in ReservKit is fully independent — you can create additional organizations from the top-left dropdown after setup.",
    ],
  },
  {
    number: "03",
    title: "Add your first activity",
    content: [
      "Go to Activities and click \"New activity.\" Give it a name, description, and duration. Activities are the bookable products your customers see on your booking page — examples include \"2-Hour Kayak Rental,\" \"Sunset Paddleboard Tour,\" or \"Half-Day Boat Charter.\"",
      "Under the Availability tab, set the days and time windows when this activity can be booked. You can create recurring weekly schedules or block off specific dates.",
      "Under the Pricing tab, set your base price per guest. You can add a deposit amount (collected at booking), configure group pricing tiers, and create add-ons (e.g., wetsuits, life jackets, photography packages).",
      "Under the Waivers tab, attach a liability waiver template if required for your activity. Guests sign digitally after payment — no paper required.",
    ],
  },
  {
    number: "04",
    title: "Connect Stripe",
    content: [
      "Go to Billing and click \"Connect Stripe.\" You'll be redirected to Stripe to create or link your Stripe account. ReservKit uses Stripe Connect, which means payments go directly to your Stripe account — ReservKit never holds your money.",
      "Once connected, your Stripe account status will show \"Connected\" and your public booking page will be live and ready to accept payments.",
      "The platform fee is automatically deducted from each transaction at checkout based on your active plan. Approved beta operators receive 0% ReservKit platform fees for 30-60 days.",
    ],
  },
  {
    number: "05",
    title: "Share your booking link",
    content: [
      "Every organization has a unique public booking link at app.reservkit.com/book/[your-slug]. Share this URL directly with customers, add it to your website, Instagram bio, Google Business profile, or anywhere else you promote your business.",
      "The booking page shows all your published activities, available times, and handles the full checkout flow — guests pick a time, add guests, pay, and receive an automatic email confirmation.",
      "You can also embed the booking widget as an iframe on your existing website. The embed code is available under Settings → Booking Page.",
    ],
  },
];

export default function GettingStarted() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="mx-auto max-w-3xl px-6 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/docs" className="hover:text-navy transition-colors">Documentation</Link>
          <span>/</span>
          <span className="text-navy font-medium">Getting Started</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-3xl font-bold text-navy mb-3">Getting Started with ReservKit</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            From account creation to your first live booking in under 30 minutes. This guide walks you through
            every step of the initial setup.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span>Guided beta access</span>
            <span className="mx-2">·</span>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span>0% platform fee for 30-60 days for approved beta operators</span>
          </div>
        </div>

        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="shrink-0">
                <div className="h-10 w-10 rounded-full bg-amber/10 border-2 border-amber flex items-center justify-center">
                  <span className="text-xs font-bold text-amber">{step.number}</span>
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h2 className="text-xl font-bold text-navy mb-4">{step.title}</h2>
                <div className="space-y-3">
                  {step.content.map((para, i) => (
                    <p key={i} className="text-slate-600 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next steps */}
        <div className="mt-16 border-t border-[var(--color-border)] pt-10">
          <h2 className="text-lg font-bold text-navy mb-5">Next steps</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/docs/bookings-availability"
              className="group rounded-xl border border-[var(--color-border)] p-5 hover:border-amber/40 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-navy group-hover:text-amber transition-colors mb-1">Bookings & Availability →</p>
              <p className="text-sm text-slate-500">Learn how to manage your calendar and handle booking requests.</p>
            </Link>
            <Link
              href="/docs/payments"
              className="group rounded-xl border border-[var(--color-border)] p-5 hover:border-amber/40 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-navy group-hover:text-amber transition-colors mb-1">Payments & Fees →</p>
              <p className="text-sm text-slate-500">Understand pricing, deposits, refunds, and the platform fee structure.</p>
            </Link>
          </div>
          <div className="mt-6">
            <Link href="/docs" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-navy transition-colors">
              ← Back to all documentation
            </Link>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
