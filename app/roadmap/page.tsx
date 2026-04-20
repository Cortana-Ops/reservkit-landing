import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/PageShell";
import { CheckCircle2, Zap, Clock, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Product Roadmap",
  description: "See what we've shipped, what's in progress, and what's coming next for ReservKit — the booking platform for rental operators and experience businesses.",
  alternates: { canonical: "https://reservkit.com/roadmap" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ReservKit", item: "https://reservkit.com" },
    { "@type": "ListItem", position: 2, name: "Roadmap", item: "https://reservkit.com/roadmap" },
  ],
};

const shipped = [
  { label: "Phase 1 — Core platform", items: ["Online booking page with Stripe payments", "Activity management with time slots", "Customer booking confirmation emails", "Booking management dashboard"] },
  { label: "Phase 2 — Staff & waivers", items: ["Digital liability waivers (per-guest signing)", "Staff portal with role-based access", "Staff task management", "Calendar view for all bookings"] },
  { label: "Phase 3 — Payments & billing", items: ["Stripe Connect for direct payouts", "Deposits at booking, balance on arrival", "Coupon / discount codes", "Platform subscription billing (Starter, Growth, Pro)"] },
  { label: "Phase 4 — Customer experience", items: ["Customer portal for viewing past bookings", "Tipping at checkout", "Dynamic pricing tiers per group size", "Add-on products (equipment, upgrades)"] },
  { label: "Phase 5 — Free tier, mobile & tools", items: ["Free plan (4% fee, 50 bookings/month)", "14-day Growth trial for all new accounts", "Full mobile responsive overhaul", "SMS reminders (24hr pre-trip, Growth plan+)", "Booking widget embed — iframe for your existing site", "Stripe billing portal — manage subscription in-app", "Automated review request emails post-trip"] },
];

const inProgress = [
  { title: "Multi-location consolidated reporting", description: "Operators with multiple locations or brands can already switch between organizations. Full cross-org analytics dashboard and consolidated revenue reporting is next." },
];

const comingNext = [
  { title: "Google Calendar & iCal sync", description: "Two-way sync with Google Calendar, Apple Calendar, and any iCal-compatible app — availability always in one place." },
  { title: "FareHarbor / Rezdy import tool", description: "Migrate your existing activities, bookings, and customer history in one click. Switch without starting from scratch." },
  { title: "Group booking & capacity blocks", description: "Block-book multiple slots for corporate events, tour packages, and large groups with dynamic capacity and pricing rules." },
  { title: "Public REST API", description: "Connect ReservKit to your own website, POS, or CRM. Full developer documentation included." },
  { title: "Affiliate & referral tracking", description: "Give guides, influencers, and partners unique referral links with commission tracking built in." },
];

export default function Roadmap() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12 max-w-2xl">
          <h1 className="text-3xl font-bold text-navy mb-3">ReservKit Roadmap</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            What we&apos;ve shipped, what we&apos;re building right now, and where we&apos;re headed next.
            We build in public — this page is updated as features land.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Have a feature request? Email us at{" "}
            <a href="mailto:hello@reservkit.com" className="text-amber hover:underline">hello@reservkit.com</a>
          </p>
        </div>

        {/* Shipped */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-9 w-9 rounded-xl bg-green-50 flex items-center justify-center">
              <CheckCircle2 className="h-5 w-5 text-green-600" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-navy">Shipped</h2>
          </div>
          <div className="space-y-5">
            {shipped.map((release) => (
              <div key={release.label} className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
                <p className="font-bold text-navy mb-3">{release.label}</p>
                <ul className="space-y-1.5">
                  {release.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* In progress */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
              <Zap className="h-5 w-5 text-amber" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-navy">In Progress</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {inProgress.map((item) => (
              <div key={item.title} className="rounded-2xl border border-amber/30 bg-amber/5 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4 text-amber shrink-0" aria-hidden="true" />
                  <p className="font-semibold text-navy text-sm">{item.title}</p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Coming next */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-9 w-9 rounded-xl bg-navy/10 flex items-center justify-center">
              <Lightbulb className="h-5 w-5 text-navy" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-navy">Coming Next</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {comingNext.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[var(--color-border)] bg-white p-5">
                <p className="font-semibold text-navy text-sm mb-2">{item.title}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-2xl bg-navy p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Start free while we build</h2>
          <p className="text-slate-400 text-sm mb-5 max-w-md mx-auto">
            Every new account gets a 14-day Growth trial. No credit card required.
            You can be taking online bookings today.
          </p>
          <Link
            href="https://app.reservkit.com/login?signup=true"
            className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-2.5 text-sm font-semibold text-navy hover:bg-amber-dark transition-colors"
          >
            Get started free
          </Link>
        </div>

        <div className="mt-10 text-center space-y-3">
          <Link href="/changelog" className="text-sm text-slate-500 hover:text-navy transition-colors">
            View full changelog →
          </Link>
          <div className="flex items-center justify-center gap-6 mt-3">
            <Link href="/docs" className="text-sm text-slate-400 hover:text-navy transition-colors">
              Explore the docs →
            </Link>
            <Link href="/blog" className="text-sm text-slate-400 hover:text-navy transition-colors">
              Read the blog →
            </Link>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
