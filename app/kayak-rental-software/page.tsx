import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { TrackedLink } from "../components/TrackedLink";
import { EARLY_ACCESS_URL, POSITIONING_LINE, PRIMARY_CTA_LABEL, pricingSummary } from "../lib/marketing";

export const metadata: Metadata = {
  title: "Kayak Rental Booking Software - Online Reservations & Waivers",
  description:
    "ReservKit helps kayak and paddleboard rental operators take online reservations, collect Stripe payments, and manage digital waivers.",
  keywords: [
    "kayak rental booking software",
    "kayak rental reservation system",
    "online kayak rental booking",
    "kayak rental management software",
  ],
  alternates: { canonical: "https://reservkit.com/kayak-rental-software" },
};

const features = [
  "Public booking page for rentals and tours",
  "Stripe payments for full price or deposits",
  "Per-guest digital liability waiver signing",
  "Availability windows and booking cutoffs",
  "Duration-based rental pricing",
  "Staff scheduling and roster visibility",
  "Customer confirmation emails",
  "Mobile check-in and guest tracking",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is ReservKit accepting kayak rental operators?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ReservKit is available to selected kayak, paddleboard, and watersports rental operators through pre-launch early access.",
      },
    },
    {
      "@type": "Question",
      name: "Can ReservKit collect deposits and waivers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Operators can collect payment or deposits through Stripe and require per-guest digital waivers after booking.",
      },
    },
  ],
};

export default function KayakRentalSoftware() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <section className="bg-gradient-to-b from-slate-50 to-white px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-4 inline-block rounded-full bg-amber-light px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-dark">
              Kayak Rental Software
            </span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl">
              Kayak rental booking software for{" "}
              <span className="text-amber">reservations, payments, and waivers</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              {POSITIONING_LINE} Kayak and paddleboard rental operators can move from phone calls, spreadsheets, and paper waivers into a cleaner online booking flow.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <TrackedLink
                href={EARLY_ACCESS_URL}
                event="early_access_cta_clicked"
                properties={{ location: "kayak_rental_hero" }}
                className="inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-base font-semibold text-navy shadow-lg transition-colors hover:bg-amber-dark"
              >
                {PRIMARY_CTA_LABEL} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </TrackedLink>
              <Link
                href="/pricing"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-navy"
              >
                View pricing ↓
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16" aria-label="Features for kayak rentals">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-navy">
              Built for watersports rental workflows
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-surface)] px-6 py-16" aria-label="Why choose ReservKit">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-navy">
              Online booking for seasonal rental teams
            </h2>
            <div className="space-y-4 text-slate-700">
              <p>
                Rental operators need simple availability, clear customer details, signed waivers,
                and payment records that match what happened at the launch site. ReservKit starts
                with a focused setup path for the first activity you want customers to book online.
              </p>
              <p>
                Early-access operators get hands-on setup for the first live booking flow.
                Public pricing is documented here: {pricingSummary}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-navy px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Ready to use ReservKit for kayak rentals?
            </h2>
            <p className="mb-8 text-slate-400">
              Tell us about your rental volume, seasonality, and current booking tool.
            </p>
            <TrackedLink
              href={EARLY_ACCESS_URL}
              event="early_access_cta_clicked"
              properties={{ location: "kayak_rental_footer" }}
              className="inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-base font-semibold text-navy transition-colors hover:bg-amber-dark"
            >
              {PRIMARY_CTA_LABEL} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </TrackedLink>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
