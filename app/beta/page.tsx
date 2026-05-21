import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { BetaRequestForm } from "../components/BetaRequestForm";
import { POSITIONING_LINE } from "../lib/marketing";

export const metadata: Metadata = {
  title: "Get Guided Beta Access",
  description:
    "Get guided beta access to ReservKit booking software for rental, tour, and experience operators.",
};

const fitSignals = [
  "Tell us about your business and current booking workflow.",
  "We reply by email with next steps for onboarding.",
  "Setup starts with Stripe, one activity, availability, and a test booking.",
];

const nextSteps = [
  "Review your request",
  "Confirm Stripe setup",
  "Configure your first activity",
  "Set availability",
  "Run a test booking",
];

export default function BetaPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)] px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-navy">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to ReservKit
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(26rem,1fr)] lg:items-start">
          <section className="pt-4">
            <div className="inline-flex rounded-full border border-amber/30 bg-amber-light px-4 py-1.5 text-sm font-semibold text-amber-dark">
              Guided beta access
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
              Get guided beta access
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              {POSITIONING_LINE} Tell us about your business so we can help set up the right booking flow.
            </p>
            <div className="mt-8 space-y-3">
              {fitSignals.map((signal) => (
                <div key={signal} className="flex gap-3 rounded-xl bg-white p-4 text-sm text-slate-700 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-sm">
              <h2 className="font-bold text-navy">What happens next</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-5">
                {nextSteps.map((step, index) => (
                  <div key={step} className="rounded-xl bg-[var(--color-surface)] p-3 text-sm font-semibold text-slate-700">
                    <span className="mb-2 block text-xs font-bold text-amber-dark">0{index + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-500">
              Approved beta operators get 0% ReservKit platform fees for 30-60 days. Stripe processing still applies.
            </p>
          </section>

          <BetaRequestForm />
        </div>
      </div>
    </main>
  );
}
