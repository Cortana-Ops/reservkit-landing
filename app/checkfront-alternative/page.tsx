import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { TrackedLink } from "../components/TrackedLink";
import { BETA_URL, PRIMARY_CTA_LABEL, pricingSummary } from "../lib/marketing";

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
    reservkit: "Focused beta for direct rental and experience operators",
  },
  {
    feature: "Pricing visibility",
    competitor: "Verify current plan pricing, limits, and add-ons with Checkfront",
    reservkit: pricingSummary,
  },
  {
    feature: "Payments",
    competitor: "Supports common payment processors depending on configuration",
    reservkit: "Stripe Connect with payments routed to the operator account",
  },
  {
    feature: "Waivers",
    competitor: "Confirm included capabilities and any add-on requirements",
    reservkit: "Digital waivers included in core operator workflows",
  },
  {
    feature: "Migration",
    competitor: "Export format and history depend on account setup",
    reservkit: "Migration Center V1 is available for structured imports",
  },
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
        text: "Yes. ReservKit is currently controlled beta access by request, with temporary 0% platform fee access for approved beta operators.",
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
              Evaluating ReservKit as a{" "}
              <span className="text-amber">Checkfront alternative</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              ReservKit is a controlled-beta booking platform for operators who want direct
              bookings, Stripe-powered payments, waivers, and a cleaner mobile workflow.
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
              Compare current plan terms carefully
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
              Competitor plan details can change. Verify current public pages, invoices, add-ons,
              and account terms before deciding whether to migrate.
            </p>
          </div>
        </section>

        <section className="bg-[var(--color-surface)] px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-navy">
              Where ReservKit is intentionally narrower
            </h2>
            <div className="space-y-4 text-slate-700">
              <p>
                This beta is focused on direct booking trust: accurate availability, clear checkout,
                waiver evidence, staff visibility, and operator-owned Stripe setup.
              </p>
              <p>
                If you rely on a complex set of legacy integrations, review those needs before
                moving active operations.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-navy px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Want to compare your current setup?
            </h2>
            <p className="mb-8 text-slate-400">
              Include your current tool and booking volume in the beta request.
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
