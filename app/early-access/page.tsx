import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ClipboardCheck, CreditCard, FileSignature, LifeBuoy, Route, WalletCards } from "lucide-react";
import { EarlyAccessRequestForm } from "../components/EarlyAccessRequestForm";

export const metadata: Metadata = {
  title: "Request Early Access",
  description:
    "ReservKit is onboarding a limited number of operators before public launch. Tell us about your business and first booking flow.",
  alternates: { canonical: "https://reservkit.com/early-access" },
};

const included = [
  {
    icon: Route,
    title: "One working booking flow",
    body: "We configure one real activity, booking link, availability, cutoff rules, and a test booking before you share it.",
  },
  {
    icon: WalletCards,
    title: "Clear plan fit before launch",
    body: "We review your booking volume, current platform, and operating needs before you move live traffic.",
  },
  {
    icon: LifeBuoy,
    title: "Direct support",
    body: "Not a ticket queue. A real reply from the team.",
  },
];

const setupTogether = [
  {
    icon: CreditCard,
    title: "Stripe payments",
    body: "Connect your Stripe account so customer payments and payouts stay tied to your business.",
  },
  {
    icon: FileSignature,
    title: "Waiver evidence and damage deposits",
    body: "Attach waiver requirements and refundable damage deposits to the booking flow instead of handling them separately.",
  },
  {
    icon: ClipboardCheck,
    title: "Day-of readiness",
    body: "Confirm the operator record shows payment, guest count, waiver status, notes, and check-in context.",
  },
];

const goodFit = [
  "You run rentals, tours, watersports, equipment, classes, or guided experiences.",
  "You want direct bookings without guessing what the platform costs later.",
  "You need payments, waiver evidence, refundable damage deposits, and day-of operations in one workflow.",
  "You are switching from phone bookings, spreadsheets, FareHarbor, Peek, Checkfront, Rezdy, or a custom form.",
];

const nextSteps = [
  "Review your request",
  "Reply within one business day",
  "Schedule guided setup",
  "Configure your first flow",
  "Run a test booking",
];

export default function EarlyAccessPage() {
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
              Pre-launch early access
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
              Get early access to a real ReservKit booking flow before public launch.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              We personally help qualified operators set up one activity, Stripe payments, availability, waiver evidence, refundable damage deposits, and a test booking before they send customers to ReservKit.
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
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <section className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-sm">
                <h2 className="font-bold text-navy">Good fit for early access</h2>
                <ul className="mt-4 space-y-3">
                  {goodFit.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-sm">
                <h2 className="font-bold text-navy">What we set up together</h2>
                <div className="mt-4 grid gap-3">
                  {setupTogether.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-surface)] text-amber-dark">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-navy">{item.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.body}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
            <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-sm">
              <h2 className="font-bold text-navy">What happens after you apply</h2>
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

          <EarlyAccessRequestForm />
        </div>
      </div>
    </main>
  );
}
