import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { PageShell } from "../components/PageShell";

export const metadata: Metadata = {
  title: "Best FareHarbor Alternative in 2026 — ReservKit",
  description:
    "Switch from FareHarbor to ReservKit — lower platform fees (from 4% free vs 6%+), modern UX, digital waivers, and no contract. Free to start with a 14-day trial.",
  keywords: ["FareHarbor alternative", "FareHarbor competitor", "FareHarbor replacement", "cheaper than FareHarbor"],
  alternates: { canonical: "https://reservkit.com/fareharbor-alternative" },
};

const APP_URL = "https://app.reservkit.com";

const comparison = [
  { feature: "Platform fee", fareharbor: "6%+ per booking", reservkit: "4% Free / 2% Starter ($79/mo)" },
  { feature: "Monthly subscription", fareharbor: "Required (varies)", reservkit: "$0 — Free plan (50 bookings/mo)" },
  { feature: "Contract required", fareharbor: "Yes — annual contract", reservkit: "No contract" },
  { feature: "Setup fee", fareharbor: "Yes", reservkit: "None" },
  { feature: "Digital waivers", fareharbor: "Add-on cost", reservkit: "Included (all plans)" },
  { feature: "Staff scheduling", fareharbor: "Limited", reservkit: "Full scheduling + portal" },
  { feature: "Mobile app experience", fareharbor: "Dated UI", reservkit: "Mobile-first design" },
  { feature: "Stripe Connect", fareharbor: "No — FareHarbor holds funds", reservkit: "Yes — direct to your bank" },
  { feature: "Setup time", fareharbor: "Days with onboarding rep", reservkit: "5 minutes, self-serve" },
  { feature: "Customer support", fareharbor: "Phone during business hours", reservkit: "Email + docs" },
];

const reasons = [
  {
    title: "Keep 4–5% more revenue on every booking",
    body: "FareHarbor charges 6% or more per booking — some operators report up to 9% depending on their plan. ReservKit's Free plan charges 4%, and the Starter plan ($79/mo) drops it to 2%. On $10,000/month in bookings, that's $400–$700 per month back in your pocket.",
  },
  {
    title: "No contracts, no setup fees",
    body: "FareHarbor requires signing an annual contract and often charges setup fees. ReservKit is month-to-month on paid plans and free to start with a 14-day Growth trial. Try it today and upgrade only if it works for you.",
  },
  {
    title: "Your money — your bank account",
    body: "FareHarbor holds booking revenue and pays out periodically. ReservKit uses Stripe Connect — funds from bookings go directly to your connected Stripe account, typically within 2 business days.",
  },
  {
    title: "Modern, mobile-first interface",
    body: "ReservKit was built from the ground up for operators in the field. Every page works great on a phone. The booking experience for your customers is fast, clean, and doesn't feel like it was built in 2012.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do ReservKit and FareHarbor platform fees compare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FareHarbor charges 6% or more per booking — some operators report up to 9%. ReservKit's Free plan charges 4% per booking with no monthly fee. The Starter plan ($79/month) drops the fee to 2%. On $10,000/month in bookings, that's $400–$700 more in your pocket every month.",
      },
    },
    {
      "@type": "Question",
      name: "Does ReservKit require a contract like FareHarbor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. ReservKit is month-to-month on all paid plans and free to start. FareHarbor typically requires an annual contract and often charges setup fees. You can cancel ReservKit at any time.",
      },
    },
    {
      "@type": "Question",
      name: "How do I switch from FareHarbor to ReservKit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Create a free ReservKit account, set up your activities (takes about 5 minutes), and connect Stripe to receive direct payouts. You can run both platforms in parallel during the transition so you never miss a booking.",
      },
    },
  ],
};

export default function FareHarborAlternative() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        {/* Hero */}
        <section className="px-6 py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block mb-4 rounded-full bg-amber-light px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-dark">
              FareHarbor Alternative
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl leading-tight">
              The Best FareHarbor Alternative —{" "}
              <span className="text-amber">Lower Fees, Modern UX</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              ReservKit gives rental operators and tour guides everything FareHarbor offers — at a
              fraction of the cost. No contracts, no setup fees, and your money goes straight to
              your Stripe account.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`${APP_URL}/login?signup=true`}
                className="inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-base font-semibold text-navy hover:bg-amber-dark transition-colors shadow-lg"
              >
                Start free — no credit card <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="px-6 py-16 bg-white" aria-label="Feature comparison">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-navy mb-8 text-center">
              ReservKit vs FareHarbor — side by side
            </h2>
            <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden">
              <div className="grid grid-cols-3 bg-navy text-white text-sm font-semibold">
                <div className="px-4 py-3">Feature</div>
                <div className="px-4 py-3 border-l border-white/10">FareHarbor</div>
                <div className="px-4 py-3 border-l border-white/10 text-amber">ReservKit</div>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface)]"}`}
                >
                  <div className="px-4 py-3 font-medium text-navy">{row.feature}</div>
                  <div className="px-4 py-3 border-l border-[var(--color-border)] text-slate-600 flex items-start gap-1.5">
                    <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                    {row.fareharbor}
                  </div>
                  <div className="px-4 py-3 border-l border-[var(--color-border)] text-slate-700 flex items-start gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" aria-hidden="true" />
                    {row.reservkit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reasons */}
        <section className="px-6 py-16 bg-[var(--color-surface)]" aria-label="Reasons to switch">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-navy mb-8 text-center">
              Why operators switch from FareHarbor to ReservKit
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((r) => (
                <div key={r.title} className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
                  <h3 className="font-bold text-navy mb-2">{r.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 bg-navy">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to switch from FareHarbor?
            </h2>
            <p className="text-slate-400 mb-8">
              Set up in 5 minutes. No contract. No setup fee. Start free today.
            </p>
            <Link
              href={`${APP_URL}/login?signup=true`}
              className="inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-base font-semibold text-navy hover:bg-amber-dark transition-colors"
            >
              Get started free <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="mt-4 text-sm text-slate-500">
              Also see:{" "}
              <Link href="/rezdy-alternative" className="text-slate-400 underline hover:text-white">Rezdy alternative</Link>{" "}
              ·{" "}
              <Link href="/checkfront-alternative" className="text-slate-400 underline hover:text-white">Checkfront alternative</Link>
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
