import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Mail, Settings, WalletCards } from "lucide-react";
import { BetaRequestForm } from "../components/BetaRequestForm";

export const metadata: Metadata = {
  title: "Request Beta Access — ReservKit",
  description:
    "ReservKit is onboarding a limited number of operators with guided setup and temporary 0% platform fees. Tell us about your business.",
};

const included = [
  {
    icon: Settings,
    title: "Guided setup",
    body: "We walk through Stripe, your first activity, availability, and waivers together.",
  },
  {
    icon: WalletCards,
    title: "0% platform fees for 30 days",
    body: "Stripe processing still applies. ReservKit's fee is waived for the first 30 days.",
  },
  {
    icon: Mail,
    title: "Direct support",
    body: "Not a ticket queue. A real reply from the team.",
  },
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
              We onboard you personally. You take a real booking by the end of the session.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              We are personally onboarding a limited number of operators right now. You get guided setup, 0% ReservKit platform fees for 30 days, and a direct line — not a ticket queue — if something is not working.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              Tell us what you operate and how bookings work today. We reply within one business day.
            </p>
            <div className="mt-8 grid gap-3">
              {included.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 rounded-xl bg-white p-4 text-sm text-slate-700 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-light text-amber-dark">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="font-bold text-navy">{item.title}</h2>
                      <p className="mt-1 leading-relaxed text-slate-600">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-sm">
              <h2 className="font-bold text-navy">What happens next</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-5">
                {nextSteps.map((step, index) => (
                  <div key={step} className="rounded-xl bg-[var(--color-surface)] p-3 text-sm font-semibold text-slate-700">
                    <span className="mb-2 flex items-center gap-1 text-xs font-bold text-amber-dark">
                      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      0{index + 1}
                    </span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <BetaRequestForm />
        </div>
      </div>
    </main>
  );
}
