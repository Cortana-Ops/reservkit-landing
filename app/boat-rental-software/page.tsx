import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageShell } from "../components/PageShell";

export const metadata: Metadata = {
  title: "Boat Rental Booking Software — Payments & Waivers Included",
  description:
    "Manage boat rental bookings, payments, and digital waivers with ReservKit. Stripe-powered. Free to start.",
  keywords: ["boat rental booking software", "boat rental reservation system", "charter booking software", "pontoon rental software"],
  alternates: { canonical: "https://reservkit.com/boat-rental-software" },
};

const APP_URL = "https://app.reservkit.com";

const features = [
  "Online booking page — customers book 24/7",
  "Stripe Connect — payments go directly to your account",
  "Deposit collection at booking, balance at check-in",
  "Per-guest digital liability waivers",
  "Capacity controls per vessel",
  "Duration-based pricing (half day / full day / hourly)",
  "Staff and captain scheduling",
  "SMS reminders to customers before departure",
  "Check-in management and guest tracking",
  "Revenue and booking reports",
];

export default function BoatRentalSoftware() {
  return (
    <PageShell>
      <main>
        {/* Hero */}
        <section className="px-6 py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block mb-4 rounded-full bg-amber-light px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-dark">
              Boat Rental Software
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl leading-tight">
              Boat Rental Booking Software with{" "}
              <span className="text-amber">Stripe Payments &amp; Waivers</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              ReservKit gives boat rental and charter operators a complete booking management
              system. Take online reservations, collect deposits, require digital waivers, and
              manage your captains and crew — all from one platform.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`${APP_URL}/signup`}
                className="inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-base font-semibold text-navy hover:bg-amber-dark transition-colors shadow-lg"
              >
                Start free — no credit card <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/#pricing"
                className="text-sm font-medium text-slate-600 hover:text-navy transition-colors"
              >
                View pricing ↓
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 py-16 bg-white" aria-label="Features for boat rentals">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-navy mb-8 text-center">
              Built for boat rental and charter operators
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 shrink-0" aria-hidden="true" />
                  <span className="text-sm text-slate-700">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why ReservKit */}
        <section className="px-6 py-16 bg-[var(--color-surface)]" aria-label="Why choose ReservKit">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-navy mb-6">
              Why boat rental operators choose ReservKit
            </h2>
            <div className="prose prose-slate max-w-none space-y-4 text-slate-700">
              <p>
                Running a boat rental or charter operation means juggling availability across
                multiple vessels, collecting deposits, getting waivers signed, and coordinating
                captains. Most operators manage this over email and text — which doesn&apos;t scale
                and leaves money on the table.
              </p>
              <p>
                ReservKit gives you a public booking page where customers can select a vessel,
                choose their rental duration, pay online, and receive a waiver link before they
                arrive. Your crew sees their schedule in the staff portal. You see all bookings,
                revenue, and compliance status in one dashboard.
              </p>
              <p>
                ReservKit is free to start — 4% fee, or from $79/month for 2% on Starter. A fraction of what FareHarbor, Peek Pro, and
                similar platforms charge. For a high-revenue charter operation, that difference
                compounds quickly.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 bg-navy">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to take boat rentals online?
            </h2>
            <p className="text-slate-400 mb-8">
              Add your vessels, set your pricing, and share your booking link today.
            </p>
            <Link
              href={`${APP_URL}/signup`}
              className="inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-base font-semibold text-navy hover:bg-amber-dark transition-colors"
            >
              Get started free <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="mt-4 text-sm text-slate-500">
              Also see:{" "}
              <Link href="/kayak-rental-software" className="text-slate-400 underline hover:text-white">
                Kayak rental software
              </Link>{" "}
              ·{" "}
              <Link href="/tour-operator-software" className="text-slate-400 underline hover:text-white">
                Tour operator software
              </Link>
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
