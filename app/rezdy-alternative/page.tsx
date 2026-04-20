import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { PageShell } from "../components/PageShell";

export const metadata: Metadata = {
  title: "Rezdy Alternative — Modern Booking Software for Operators",
  description:
    "Looking for a Rezdy alternative? ReservKit offers simpler setup, Stripe-powered payments, lower fees, and a mobile-first experience. Free to start.",
  keywords: ["Rezdy alternative", "Rezdy competitor", "better than Rezdy", "Rezdy replacement"],
  alternates: { canonical: "https://reservkit.com/rezdy-alternative" },
};

const APP_URL = "https://app.reservkit.com";

const comparison = [
  { feature: "Monthly cost", rezdy: "From $49/mo (Starter)", reservkit: "$0 — Free plan + 14-day trial" },
  { feature: "Per-booking commission", rezdy: "0% own channel, 3–6% via agents", reservkit: "4% Free / 2% Starter ($79/mo)" },
  { feature: "Setup complexity", rezdy: "Complex — steep learning curve", reservkit: "5-minute self-serve setup" },
  { feature: "Digital waivers", rezdy: "Add-on / third-party", reservkit: "Built in (Growth+)" },
  { feature: "Stripe Connect", rezdy: "Stripe or Braintree", reservkit: "Stripe Connect direct" },
  { feature: "Staff scheduling", rezdy: "Basic", reservkit: "Full staff portal + scheduling" },
  { feature: "Mobile experience", rezdy: "Functional but dated", reservkit: "Mobile-first design" },
  { feature: "Customer portal", rezdy: "Limited", reservkit: "Full customer portal" },
];

export default function RezdyAlternative() {
  return (
    <PageShell>
      <main>
        {/* Hero */}
        <section className="px-6 py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block mb-4 rounded-full bg-amber-light px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-dark">
              Rezdy Alternative
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl leading-tight">
              Rezdy Alternative —{" "}
              <span className="text-amber">Simpler Setup, Stripe-Powered Payments</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              ReservKit is a modern Rezdy alternative built for operators who want a clean,
              simple booking platform without the complexity and subscription cost. Free to start,
              with Stripe payments direct to your account.
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

        {/* Comparison */}
        <section className="px-6 py-16 bg-white" aria-label="Feature comparison">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-navy mb-8 text-center">
              ReservKit vs Rezdy — side by side
            </h2>
            <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden">
              <div className="grid grid-cols-3 bg-navy text-white text-sm font-semibold">
                <div className="px-4 py-3">Feature</div>
                <div className="px-4 py-3 border-l border-white/10">Rezdy</div>
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
                    {row.rezdy}
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
              Why operators choose ReservKit over Rezdy
            </h2>
            <div className="prose prose-slate max-w-none space-y-4 text-slate-700">
              <p>
                Rezdy is a capable platform but comes with a learning curve, mandatory monthly
                subscription starting at $79, and additional costs for features like waivers. For
                smaller rental and tour businesses, that overhead adds up before you&apos;ve taken a
                single booking.
              </p>
              <p>
                ReservKit&apos;s Free plan is $0 with a 4% fee. Upgrade to Starter ($79/mo) for 2%.
                There&apos;s no subscription until you choose to upgrade. Setup takes about 5 minutes, not days.
                And every feature — from waivers to staff scheduling to customer portals — is built
                into the platform, not sold as an add-on.
              </p>
              <p>
                If you&apos;re a rental operator or tour guide who wants a clean, modern booking
                experience for your customers and an easy-to-use dashboard for your team, ReservKit
                is the more straightforward choice.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 bg-navy">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Try ReservKit free today
            </h2>
            <p className="text-slate-400 mb-8">No subscription required. 5-minute setup.</p>
            <Link
              href={`${APP_URL}/login?signup=true`}
              className="inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-base font-semibold text-navy hover:bg-amber-dark transition-colors"
            >
              Get started free <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="mt-4 text-sm text-slate-500">
              Also see:{" "}
              <Link href="/fareharbor-alternative" className="text-slate-400 underline hover:text-white">FareHarbor alternative</Link>{" "}
              ·{" "}
              <Link href="/checkfront-alternative" className="text-slate-400 underline hover:text-white">Checkfront alternative</Link>
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
