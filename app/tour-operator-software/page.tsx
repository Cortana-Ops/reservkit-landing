import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { TrackedLink } from "../components/TrackedLink";
import { BETA_URL, POSITIONING_LINE, PRIMARY_CTA_LABEL, pricingSummary } from "../lib/marketing";

export const metadata: Metadata = {
  title: "Tour Operator Booking Software - Waivers, Payments, Staff",
  description:
    "ReservKit helps tour and activity operators accept online bookings, collect Stripe payments, manage waivers, and coordinate staff.",
  keywords: [
    "tour operator booking software",
    "tour booking system",
    "activity booking software",
    "guided tour reservation software",
  ],
  alternates: { canonical: "https://reservkit.com/tour-operator-software" },
};

const features = [
  "Public booking page for each activity",
  "Guest count selection and add-ons",
  "Stripe payments for full or deposit checkout",
  "Per-guest digital waiver signing",
  "Availability windows and block-out dates",
  "Staff assignment and guide scheduling",
  "Confirmation emails",
  "Check-in with guest list and waiver status",
  "Customer booking lookup",
  "Revenue reports by tour and date range",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is ReservKit available for tour operators?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ReservKit is available to selected tour, activity, and experience operators through guided beta onboarding.",
      },
    },
    {
      "@type": "Question",
      name: "Can tour operators collect deposits and waivers with ReservKit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Operators can collect payment or deposits through Stripe and require per-guest digital waiver signing after booking.",
      },
    },
  ],
};

export default function TourOperatorSoftware() {
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
              Tour Operator Software
            </span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl">
              Tour operator booking software for{" "}
              <span className="text-amber">waivers, payments, and staff</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              {POSITIONING_LINE} Guided tours and experience businesses can sell direct, collect secure payments, gather waivers, and keep staff aligned.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <TrackedLink
                href={BETA_URL}
                event="beta_access_cta_clicked"
                properties={{ location: "tour_operator_hero" }}
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

        <section className="bg-white px-6 py-16" aria-label="Features for tour operators">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-navy">
              Built for direct booking operations
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
              Direct booking software for real tour days
            </h2>
            <div className="space-y-4 text-slate-700">
              <p>
                Tour operators need a booking flow that feels trustworthy for guests and practical
                for guides. ReservKit connects checkout, waiver evidence, staff visibility, and
                mobile check-in in one operator workspace.
              </p>
              <p>
                Approved beta operators receive 0% ReservKit platform fees for 30-60 days.
                Public plan pricing is transparent for planning ahead: {pricingSummary}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-navy px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Want ReservKit for tours?
            </h2>
            <p className="mb-8 text-slate-400">
              Send your business type, booking volume, and current tool so we can reply with onboarding next steps.
            </p>
            <TrackedLink
              href={BETA_URL}
              event="beta_access_cta_clicked"
              properties={{ location: "tour_operator_footer" }}
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
