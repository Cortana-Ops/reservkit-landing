import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { TrackedLink } from "../components/TrackedLink";
import { BETA_URL, POSITIONING_LINE, PRIMARY_CTA_LABEL, pricingSummary } from "../lib/marketing";

export const metadata: Metadata = {
  title: "Boat Rental Booking Software - Payments & Waivers Included",
  description:
    "Boat rental booking software for direct reservations, Stripe payments, digital waivers, staff visibility, and guided beta onboarding.",
  keywords: [
    "boat rental booking software",
    "boat rental reservation system",
    "charter booking software",
    "pontoon rental software",
  ],
  alternates: { canonical: "https://reservkit.com/boat-rental-software" },
};

const features = [
  "Online booking page for rentals and charters",
  "Stripe Connect payments to the operator account",
  "Deposit collection at booking",
  "Per-guest digital liability waivers",
  "Capacity controls for vessels and time slots",
  "Duration-based pricing for hourly, half-day, or full-day rentals",
  "Staff and captain scheduling",
  "Check-in management and guest tracking",
  "Revenue and booking reports",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is ReservKit available for boat rental businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ReservKit is available to selected boat rental and charter operators through guided beta onboarding. Approved operators receive setup help and temporary 0% ReservKit platform fees during onboarding.",
      },
    },
    {
      "@type": "Question",
      name: "Does ReservKit support deposits and digital waivers for boat rentals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Operators can collect a deposit at booking and attach digital waiver requirements so guests sign before arrival.",
      },
    },
  ],
};

export default function BoatRentalSoftware() {
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
              Boat Rental Software
            </span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl">
              Boat rental booking software with{" "}
              <span className="text-amber">Stripe payments and waivers</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              {POSITIONING_LINE} Boat rental teams can manage reservations, deposits, guest waivers, staff assignments, and check-in without stitching together separate tools.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <TrackedLink
                href={BETA_URL}
                event="beta_access_cta_clicked"
                properties={{ location: "boat_rental_hero" }}
                className="inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-base font-semibold text-navy shadow-lg transition-colors hover:bg-amber-dark"
              >
                {PRIMARY_CTA_LABEL} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </TrackedLink>
              <Link
                href="/#pricing"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-navy"
              >
                View pricing ↓
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16" aria-label="Features for boat rentals">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-navy">
              Built for boat rental and charter workflows
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
              Go live with a first boat rental flow
            </h2>
            <div className="space-y-4 text-slate-700">
              <p>
                Boat rental operations depend on accurate capacity, clear deposits, signed waivers,
                and staff who know what is leaving the dock next. ReservKit onboarding starts with
                one configured activity and a test booking before you widen usage.
              </p>
              <p>
                Approved beta operators get temporary 0% ReservKit platform fees during onboarding.
                Public pricing remains transparent:
                {` ${pricingSummary}`}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-navy px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Want ReservKit for boat rentals?
            </h2>
            <p className="mb-8 text-slate-400">
              Share your current booking workflow and we will reply with guided onboarding next steps.
            </p>
            <TrackedLink
              href={BETA_URL}
              event="beta_access_cta_clicked"
              properties={{ location: "boat_rental_footer" }}
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
