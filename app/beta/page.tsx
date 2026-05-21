import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { BetaRequestForm } from "../components/BetaRequestForm";

export const metadata: Metadata = {
  title: "Request Beta Access",
  description:
    "Request invite-only beta access to ReservKit for rental, tour, and experience operators.",
};

const fitSignals = [
  "You take reservations for rentals, tours, classes, or experiences.",
  "You want direct online bookings and Stripe-powered payment collection.",
  "You can test with real operating workflows and share concrete feedback.",
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
              Invite-only beta
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
              Request beta access to ReservKit
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              We are opening ReservKit carefully with operators who can run real booking workflows and tell us what needs to be sharper before a broader launch.
            </p>
            <div className="mt-8 space-y-3">
              {fitSignals.map((signal) => (
                <div key={signal} className="flex gap-3 rounded-xl bg-white p-4 text-sm text-slate-700 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-500">
              Beta access is temporarily 0% ReservKit platform fee. Stripe processing still applies. We will follow up by email if your use case is a good fit for this wave.
            </p>
          </section>

          <BetaRequestForm />
        </div>
      </div>
    </main>
  );
}
