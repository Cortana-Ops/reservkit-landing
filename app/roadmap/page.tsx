import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/PageShell";
import { CheckCircle2, Zap, Clock, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Roadmap",
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
  { label: "v1.0 — Core platform", items: ["Online booking page with Stripe payments", "Activity management with time slots", "Customer booking confirmation emails", "Booking management dashboard"] },
  { label: "v1.1 — Staff & waivers", items: ["Digital liability waivers (per-guest signing)", "Staff portal with role-based access", "Staff task management", "Calendar view for all bookings"] },
  { label: "v1.2 — Payments & billing", items: ["Stripe Connect for direct payouts", "Deposits at booking, balance on arrival", "Coupon / discount codes", "Platform subscription billing (Starter, Growth, Pro)"] },
  { label: "v1.3 — Customer experience", items: ["Customer portal for viewing past bookings", "Tipping at checkout", "Dynamic pricing tiers per group size", "Add-on products (equipment, upgrades)"] },
  { label: "v1.4 — Free tier + mobile", items: ["Free plan (4% fee, 50 bookings/month)", "14-day Growth trial for all new accounts", "Full mobile responsive overhaul", "Stripe Connect OAuth flow fix"] },
];

const inProgress = [
  { title: "SMS reminders", description: "24-hour pre-trip text message reminder with waiver link. Powered by Twilio — configurable per organization." },
  { title: "Booking widget embed", description: "Drop the ReservKit booking experience as an iframe on your existing website in under 2 minutes." },
  { title: "Multi-location support", description: "Run multiple locations or brands under one login with org-level switching and consolidated reporting." },
  { title: "Stripe billing portal self-service", description: "Let customers manage their own subscription from a branded Stripe portal — no support tickets needed." },
];

const comingNext = [
  { title: "Analytics & revenue forecasting", description: "Deeper reports — month-over-month trends, peak hour analysis, revenue per activity, and booking lead-time insights." },
  { title: "Automated follow-up emails", description: "Post-trip review requests, re-booking nudges, and seasonal promotions sent automatically based on booking history." },
  { title: "Group booking & capacity management", description: "Block-book multiple slots for large groups, corporate events, and tour packages with dynamic capacity rules." },
  { title: "Public API", description: "REST API for connecting ReservKit to your own website, POS, or CRM. Full documentation included." },
  { title: "Instagram DM booking", description: "Capture booking intent from Instagram DMs with automated keyword detection and smart response routing." },
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

        <div className="mt-10 text-center">
          <Link href="/changelog" className="text-sm text-slate-500 hover:text-navy transition-colors">
            View full changelog →
          </Link>
        </div>
      </main>
    </PageShell>
  );
}
