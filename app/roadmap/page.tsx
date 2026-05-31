import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/PageShell";
import { CheckCircle2, Zap, Clock, Lightbulb } from "lucide-react";
import { TrackedLink } from "../components/TrackedLink";
import { EARLY_ACCESS_URL, PRIMARY_CTA_LABEL } from "../lib/marketing";

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
  { label: "Booking and checkout", items: ["Public booking pages for configured activities", "Stripe Checkout through the operator's connected Stripe account", "Guest details, selected-time review, and booking confirmation flow", "Call-to-book cutoff handling when online booking is not available"] },
  { label: "Waivers and customer records", items: ["Per-guest digital waiver signing", "Optional drawn signature fields when configured", "Signed waiver evidence display", "Customer booking lookup without requiring a customer account"] },
  { label: "Operator workflows", items: ["Activity setup, availability, booking detail, and operator dashboard workflows", "Staff-facing navigation and day-of workflow polish", "Reports views for revenue and booking review", "Migration Center V1 for structured imports"] },
  { label: "Go-live readiness", items: ["Current public pricing tiers", "Early access request flow", "Pre-launch onboarding path for selected operators", "Public content guard for stale pricing and removed signup language"] },
];

const inProgress = [
  { title: "Cleaner operator onboarding", description: "Continuing to reduce setup friction around Stripe, first activity configuration, availability, waivers, and test bookings." },
  { title: "Better product captures", description: "Adding cleaner screenshots and examples from real configured workflows as early-access operators come online." },
  { title: "Reporting polish", description: "Tightening the reports experience around the views operators use during live operations." },
];

const comingNext = [
  { title: "Calendar sync", description: "Assessing Google Calendar and iCal sync for operators who need availability reflected across tools." },
  { title: "Website embed options", description: "Exploring the best way to place ReservKit booking flows on existing operator websites." },
  { title: "Migration Center expansion", description: "Building on Migration Center V1 with deeper imports, review tools, and source-specific mapping." },
  { title: "Channel blocking", description: "Evaluating availability holds for operators that are moving bookings gradually from other channels." },
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
          <h1 className="text-3xl font-bold text-navy mb-3">What&apos;s shipped, what&apos;s next.</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We build in public. This page is updated as features land.
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
          <h2 className="text-xl font-bold text-white mb-2">Get early access</h2>
          <p className="text-slate-400 text-sm mb-5 max-w-md mx-auto">
            Share your current booking workflow and we will reply with onboarding next steps.
          </p>
          <TrackedLink
            href={EARLY_ACCESS_URL}
            event="early_access_cta_clicked"
            properties={{ location: "roadmap_footer" }}
            className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-2.5 text-sm font-semibold text-navy hover:bg-amber-dark transition-colors"
          >
            {PRIMARY_CTA_LABEL}
          </TrackedLink>
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
