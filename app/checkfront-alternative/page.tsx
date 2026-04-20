import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { PageShell } from "../components/PageShell";

export const metadata: Metadata = {
  title: "Checkfront Alternative — ReservKit Booking Platform",
  description:
    "Replace Checkfront with ReservKit — simpler pricing, no minimum spend, Stripe Connect, digital waivers, and a mobile-first experience. Free to start.",
  keywords: ["Checkfront alternative", "Checkfront competitor", "replace Checkfront", "cheaper than Checkfront"],
  alternates: { canonical: "https://reservkit.com/checkfront-alternative" },
};

const APP_URL = "https://app.reservkit.com";

const comparison = [
  { feature: "Starting price", checkfront: "$125+/mo (Soho plan)", reservkit: "$0 — Free plan + 14-day trial" },
  { feature: "Platform fee", checkfront: "None, but high subscription", reservkit: "4% (Free) or 2% on Starter ($79/mo)" },
  { feature: "Contract", checkfront: "Annual plans required for best rates", reservkit: "No contract, month-to-month" },
  { feature: "Digital waivers", checkfront: "Add-on", reservkit: "Built in (Growth+)" },
  { feature: "Stripe Connect", checkfront: "Stripe or Braintree", reservkit: "Stripe Connect — direct payouts" },
  { feature: "Mobile experience", checkfront: "Desktop-first", reservkit: "Mobile-first design" },
  { feature: "Setup time", checkfront: "Days with onboarding", reservkit: "5-minute self-serve" },
  { feature: "Staff scheduling", checkfront: "Add-on (Checkfront+)", reservkit: "Included (Growth+)" },
];

export default function CheckfrontAlternative() {
  return (
    <PageShell>
      <main>
        {/* Hero */}
        <section className="px-6 py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block mb-4 rounded-full bg-amber-light px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-dark">
              Checkfront Alternative
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl leading-tight">
              Checkfront Alternative —{" "}
              <span className="text-amber">No Monthly Minimum, Free to Start</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              ReservKit is a modern Checkfront alternative for rental operators and experience
              businesses. Start free — no $125/month subscription, no contract, no setup fee.
              Payments go directly to your Stripe account.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`${APP_URL}/signup`}
                className="inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-base font-semibold text-navy hover:bg-amber-dark transition-colors shadow-lg"
              >
                Start free — no credit card <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="px-6 py-16 bg-white" aria-label="Feature comparison">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-navy mb-8 text-center">
              ReservKit vs Checkfront — side by side
            </h2>
            <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden">
              <div className="grid grid-cols-3 bg-navy text-white text-sm font-semibold">
                <div className="px-4 py-3">Feature</div>
                <div className="px-4 py-3 border-l border-white/10">Checkfront</div>
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
                    {row.checkfront}
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

        {/* Why switch */}
        <section className="px-6 py-16 bg-[var(--color-surface)]">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-navy mb-6">
              Why operators choose ReservKit over Checkfront
            </h2>
            <div className="prose prose-slate max-w-none space-y-4 text-slate-700">
              <p>
                Checkfront&apos;s entry-level plan starts at $125/month — before you&apos;ve taken
                a single booking. For seasonal operators or businesses just getting started with
                online booking, that&apos;s a significant overhead cost with no guarantee of ROI.
              </p>
              <p>
                ReservKit starts at $0 — the Free plan charges a 4% fee with 50 bookings/month. If you have
                a slow month, you pay nothing. There&apos;s no contract, no setup fee, and no
                minimum spend. Upgrade to Starter ($79/mo) for 2% fees and more features.
              </p>
              <p>
                ReservKit is also built mobile-first — designed for operators who manage their
                business from a phone in the field, not a desktop in an office. The customer
                booking experience is clean, fast, and works on any device.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 bg-navy">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Switch from Checkfront — start free today
            </h2>
            <p className="text-slate-400 mb-8">No monthly minimum. No contract. 5-minute setup.</p>
            <Link
              href={`${APP_URL}/signup`}
              className="inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-base font-semibold text-navy hover:bg-amber-dark transition-colors"
            >
              Get started free <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="mt-4 text-sm text-slate-500">
              Also see:{" "}
              <Link href="/fareharbor-alternative" className="text-slate-400 underline hover:text-white">FareHarbor alternative</Link>{" "}
              ·{" "}
              <Link href="/rezdy-alternative" className="text-slate-400 underline hover:text-white">Rezdy alternative</Link>
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
