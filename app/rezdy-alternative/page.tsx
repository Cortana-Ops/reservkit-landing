import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { TrackedLink } from "../components/TrackedLink";
import { BETA_URL, PRIMARY_CTA_LABEL, pricingSummary } from "../lib/marketing";

export const metadata: Metadata = {
  title: "Rezdy Alternative - Modern Booking Software for Operators",
  description:
    "Compare ReservKit with Rezdy when evaluating direct booking software for tours, rentals, payments, waivers, and staff workflows.",
  keywords: ["Rezdy alternative", "Rezdy competitor", "Rezdy replacement"],
  alternates: { canonical: "https://reservkit.com/rezdy-alternative" },
};

const comparison = [
  {
    feature: "Best fit",
    competitor: "Tours and activities with marketplace and reseller workflows",
    reservkit: "Direct booking operations for rentals and experiences",
  },
  {
    feature: "Pricing visibility",
    competitor: "Verify current subscription, booking, and channel terms with Rezdy",
    reservkit: pricingSummary,
  },
  {
    feature: "Payments",
    competitor: "Payment processor support depends on account configuration",
    reservkit: "Stripe Connect with operator-owned Stripe accounts",
  },
  {
    feature: "Waivers",
    competitor: "Confirm native and third-party waiver options",
    reservkit: "Digital waiver workflows built into setup",
  },
  {
    feature: "Migration",
    competitor: "Export scope depends on the existing account",
    reservkit: "Migration Center V1 is available for structured imports",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is ReservKit a Rezdy alternative?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ReservKit can be evaluated as a Rezdy alternative for operators focused on direct booking, Stripe payments, waivers, and staff workflows.",
      },
    },
    {
      "@type": "Question",
      name: "How does ReservKit pricing work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ReservKit beta access is invite-only with temporary 0% platform fee access. Public plans are Free, Starter, Growth, Pro, and Enterprise with published subscription and platform-fee terms.",
      },
    },
  ],
};

export default function RezdyAlternative() {
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
              Rezdy Alternative
            </span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl">
              Evaluating ReservKit as a <span className="text-amber">Rezdy alternative</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              ReservKit is a controlled-beta booking platform for operators who want direct
              bookings, clear checkout, Stripe payments, and practical staff workflows.
            </p>
            <div className="mt-8">
              <TrackedLink
                href={BETA_URL}
                event="beta_access_cta_clicked"
                properties={{ location: "rezdy_hero" }}
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
              Compare fit, not just feature lists
            </h2>
            <div className="overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <div className="grid grid-cols-3 bg-navy text-sm font-semibold text-white">
                <div className="px-4 py-3">Area</div>
                <div className="border-l border-white/10 px-4 py-3">Rezdy</div>
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
              Verify competitor pricing, channel fees, add-ons, and integration terms directly
              before switching systems.
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
                ReservKit is not trying to be every marketplace, reseller, and enterprise workflow
                at once. The beta is focused on direct operator booking, payment, waiver, and staff
                workflows.
              </p>
              <p>
                That focus is useful for smaller teams that want less setup overhead and a clearer
                booking experience, but operators should still verify any integration needs before
                migration.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-navy px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Want to evaluate ReservKit against Rezdy?
            </h2>
            <p className="mb-8 text-slate-400">
              Share your current setup, booking volume, and migration needs in the beta request.
            </p>
            <TrackedLink
              href={BETA_URL}
              event="beta_access_cta_clicked"
              properties={{ location: "rezdy_footer" }}
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
              <Link href="/checkfront-alternative" className="text-slate-400 underline hover:text-white">
                Checkfront alternative
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
