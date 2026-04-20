import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/PageShell";

export const metadata: Metadata = {
  title: "Changelog",
  description: "What's new in ReservKit — feature releases, improvements, and fixes.",
  alternates: { canonical: "https://reservkit.com/changelog" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ReservKit", item: "https://reservkit.com" },
    { "@type": "ListItem", position: 2, name: "Changelog", item: "https://reservkit.com/changelog" },
  ],
};

type ReleaseTag = "Added" | "Changed" | "Fixed" | "Security";

interface Release {
  version: string;
  date: string;
  items: { tag: ReleaseTag; text: string }[];
}

const releases: Release[] = [
  {
    version: "v1.4",
    date: "April 2026",
    items: [
      { tag: "Added", text: "Per-guest digital waiver signing with real-time compliance dashboard" },
      { tag: "Added", text: "SMS reminders sent 24 hours before booking (Growth plan+)" },
      { tag: "Added", text: "Dynamic pricing rules — set surge pricing by date or day of week" },
      { tag: "Added", text: "Staff portal with mobile-optimized schedule view" },
      { tag: "Changed", text: "Booking modal redesigned to step-based flow — faster for guests" },
      { tag: "Fixed", text: "Calendar revenue totals now include tips and fees correctly" },
    ],
  },
  {
    version: "v1.3",
    date: "March 2026",
    items: [
      { tag: "Added", text: "Stripe Connect for all new organizations — money goes directly to your account" },
      { tag: "Added", text: "Customer portal — guests can view and manage their bookings" },
      { tag: "Added", text: "Coupon code support with percentage and flat discounts" },
      { tag: "Added", text: "Partial refund support from the bookings dashboard" },
      { tag: "Changed", text: "Reports page overhauled with date-range filtering and export" },
      { tag: "Fixed", text: "Check-in page now shows correct guest count on mobile" },
    ],
  },
  {
    version: "v1.2",
    date: "February 2026",
    items: [
      { tag: "Added", text: "Staff scheduling — assign team members to bookings" },
      { tag: "Added", text: "Activity add-ons — sell gear, insurance, or extras at booking" },
      { tag: "Added", text: "Deposit rules — collect a percentage upfront, rest at check-in" },
      { tag: "Changed", text: "Availability calendar improved with drag-to-block date ranges" },
      { tag: "Fixed", text: "Settings tabs now scroll correctly on mobile" },
      { tag: "Security", text: "JWT validation hardened on all API routes" },
    ],
  },
  {
    version: "v1.1",
    date: "January 2026",
    items: [
      { tag: "Added", text: "Public booking page — shareable link for each activity" },
      { tag: "Added", text: "Stripe payment collection at booking" },
      { tag: "Added", text: "Booking confirmation and reminder emails" },
      { tag: "Added", text: "Team member invites by email" },
      { tag: "Changed", text: "Activity form redesigned with tabbed interface" },
    ],
  },
  {
    version: "v1.0",
    date: "December 2025",
    items: [
      { tag: "Added", text: "Initial release — ReservKit public beta" },
      { tag: "Added", text: "Activity management, availability calendar, and basic booking flow" },
      { tag: "Added", text: "Operator dashboard with booking list and status management" },
    ],
  },
];

const tagColors: Record<ReleaseTag, string> = {
  Added: "bg-green-100 text-green-800",
  Changed: "bg-blue-100 text-blue-800",
  Fixed: "bg-amber-100 text-amber-800",
  Security: "bg-red-100 text-red-800",
};

export default function Changelog() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-navy mb-2">Changelog</h1>
          <p className="text-lg text-slate-600">
            What&apos;s new in ReservKit — features, improvements, and fixes.
          </p>
        </div>

        <div className="space-y-12">
          {releases.map((release, idx) => (
            <article key={release.version}>
              <div className="flex items-baseline gap-4 mb-5">
                <h2 className="text-xl font-bold text-navy">{release.version}</h2>
                <span className="text-sm text-slate-500">{release.date}</span>
                {idx === 0 && (
                  <span className="rounded-full bg-amber px-2.5 py-0.5 text-xs font-bold text-navy">
                    Latest
                  </span>
                )}
              </div>
              <ul className="space-y-2.5 pl-0">
                {release.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 shrink-0 rounded px-1.5 py-0.5 text-xs font-semibold ${tagColors[item.tag]}`}
                    >
                      {item.tag}
                    </span>
                    <span className="text-sm text-slate-700 leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
              {idx < releases.length - 1 && (
                <div className="mt-12 border-b border-[var(--color-border)]" />
              )}
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] p-8 text-center">
          <h2 className="text-lg font-bold text-navy mb-2">Have a feature request?</h2>
          <p className="text-sm text-slate-600 mb-4">
            Vote on upcoming features or submit your own ideas.
          </p>
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
          >
            View Roadmap
          </Link>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          <Link href="/" className="text-amber hover:text-amber-dark transition-colors">
            ← Back to ReservKit
          </Link>
        </p>
      </main>
    </PageShell>
  );
}
