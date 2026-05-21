import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { TrackedLink } from "../components/TrackedLink";
import { BETA_URL, POSITIONING_LINE, PRIMARY_CTA_LABEL, pricingSummary } from "../lib/marketing";

export const metadata: Metadata = {
  title: "Checkfront Alternative - ReservKit Booking Platform",
  description:
    "Compare ReservKit with Checkfront when evaluating booking software for direct reservations, Stripe payments, waivers, and operator workflows.",
  keywords: ["Checkfront alternative", "Checkfront competitor", "replace Checkfront"],
  alternates: { canonical: "https://reservkit.com/checkfront-alternative" },
};

const comparison = [
  {
    feature: "Best fit",
    competitor: "Established booking management across many activity categories",
    reservkit: "Direct booking operations for rental and experience operators",
  },
  {
    feature: "Pricing visibility",
    competitor: "Public pricing centers on a monthly subscription plus online booking fee",
    reservkit: pricingSummary,
  },
  {
    feature: "Payments",
    competitor: "Payment options vary by configuration",
    reservkit: "Stripe Connect with payments routed to the operator account",
  },
  {
    feature: "Waivers",
    competitor: "Waiver tooling is part of its feature set",
    reservkit: "Digital waivers included in core operator workflows",
  },
  {
    feature: "Migration",
    competitor: "Migration details depend on account setup",
    reservkit: "Migration Center V1 is available for structured imports",
  },
];

const notFit = [
  "You depend heavily on OTA or reseller marketplace distribution.",
  "You need complex enterprise integrations before the first direct booking flow.",
  "You are not ready to connect Stripe for operator-owned payments.",
  "You do not want to rebuild core availability during onboarding.",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is ReservKit a Checkfront alternative?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ReservKit can be evaluated as a Checkfront alternative for direct booking operations. Operators should verify current Checkfront pricing, limits, and add-ons before comparing tools.",
      },
    },
    {
      "@type": "Question",
      name: "Does ReservKit offer beta access?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ReservKit is available through guided beta access, with temporary 0% ReservKit platform fees for approved operators during onboarding.",
      },
    },
  ],
};

export default function CheckfrontAlternative() {
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
              Checkfront Alternative
            </span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl">
              ReservKit vs. Checkfront for{" "}
              <span className="text-amber">direct booking operations</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              {POSITIONING_LINE} Compare it when you want a focused direct booking workflow with Stripe-powered payments and a cleaner mobile path.
            </p>
            <div className="mt-8">
              <TrackedLink
                href={BETA_URL}
                event="beta_access_cta_clicked"
                properties={{ location: "checkfront_hero" }}
                className="inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-base font-semibold text-navy shadow-lg transition-colors hover:bg-amber-dark"
              >
                {PRIMARY_CTA_LABEL} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </TrackedLink>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16" aria-label="Comparison">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-navy">
              Compare the operator decision points
            </h2>
            <div className="overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <div className="grid grid-cols-3 bg-navy text-sm font-semibold text-white">
                <div className="px-4 py-3">Area</div>
                <div className="border-l border-white/10 px-4 py-3">Checkfront</div>
                <div className="border-l border-white/10 px-4 py-3 text-amber">ReservKit</div>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface)]"}`}
                >
                  <div className="px-4 py-3 font-medium text-navy">{row.feature}</div>
                  <div className="border-l border-[var(--color-border)] px-4 py-3 text-slate-600">
                    {row.competitor}
                  </div>
                  <div className="flex items-start gap-1.5 border-l border-[var(--color-border)] px-4 py-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" aria-hidden="true" />
                    {row.reservkit}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              Provider offerings, pricing, add-ons, and account terms can change. Verify current account terms directly before migration.
            </p>
          </div>
        </section>

        <section className="bg-[var(--color-surface)] px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-navy">
              Where ReservKit is intentionally focused
            </h2>
            <div className="space-y-4 text-slate-700">
              <p>
                ReservKit focuses on direct booking trust: accurate availability, clear checkout,
                waiver evidence, staff visibility, and operator-owned Stripe setup.
              </p>
              <p>
                If you rely on a complex set of legacy integrations, review those needs before
                moving active operations.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-navy">ReservKit may not be the fit if...</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {notFit.map((item) => (
                <div key={item} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Want to compare your current setup?
            </h2>
            <p className="mb-8 text-slate-400">
              Include your current tool and booking volume so we can review the safest onboarding path.
            </p>
            <TrackedLink
              href={BETA_URL}
              event="beta_access_cta_clicked"
              properties={{ location: "checkfront_footer" }}
              className="inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-base font-semibold text-navy transition-colors hover:bg-amber-dark"
            >
              {PRIMARY_CTA_LABEL} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </TrackedLink>
            <p className="mt-4 text-sm text-slate-500">
              Also see{" "}
              <Link href="/fareharbor-alternative" className="text-slate-400 underline hover:text-white">
                FareHarbor alternative
              </Link>{" "}
              and{" "}
              <Link href="/rezdy-alternative" className="text-slate-400 underline hover:text-white">
                Rezdy alternative
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
