import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageShell } from "../components/PageShell";

export const metadata: Metadata = {
  title: "Tour Operator Booking Software — Waivers, Payments, Staff",
  description:
    "Accept tour bookings online with automatic payments, digital waivers, and staff scheduling. ReservKit is free to start.",
  keywords: ["tour operator booking software", "tour booking system", "activity booking software", "guided tour reservation software"],
  alternates: { canonical: "https://reservkit.com/tour-operator-software" },
};

const APP_URL = "https://app.reservkit.com";

const features = [
  "Branded public booking page per activity",
  "Guest count selection and add-on upsells",
  "Stripe payments — full or deposit at booking",
  "Per-guest digital waiver signing",
  "Availability calendar with block-out dates",
  "Staff assignment and guide scheduling",
  "Automatic confirmation and reminder emails",
  "Check-in with guest list and waiver status",
  "Customer portal for booking management",
  "Revenue reports by tour and date range",
];

export default function TourOperatorSoftware() {
  return (
    <PageShell>
      <main>
        {/* Hero */}
        <section className="px-6 py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block mb-4 rounded-full bg-amber-light px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-dark">
              Tour Operator Software
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl leading-tight">
              Tour Operator Booking Software —{" "}
              <span className="text-amber">Waivers, Payments &amp; Staff</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              ReservKit is the booking platform built for tour operators, activity guides, and
              experience businesses. Sell tours online, collect payments, get waivers signed, and
              manage your guides — all from one platform.
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
        <section className="px-6 py-16 bg-white" aria-label="Features for tour operators">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-navy mb-8 text-center">
              Everything tour operators need to sell and manage experiences
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
              Built for tour operators, not big OTAs
            </h2>
            <div className="prose prose-slate max-w-none space-y-4 text-slate-700">
              <p>
                Online travel agencies like Viator and TripAdvisor Experiences take 20–30% of each
                booking. Platforms like FareHarbor take 6%+. ReservKit gives you a direct booking
                platform with a 2% fee on Starter — keeping dramatically more revenue in your
                business.
              </p>
              <p>
                Your customers book directly through your branded page, pay securely via Stripe, and
                receive waiver links for every guest. Your guides see their schedule. You see
                everything — bookings, revenue, waivers, staff — in one mobile-friendly dashboard.
              </p>
              <p>
                Whether you run surf lessons, guided hikes, cooking classes, escape rooms, or any
                other experience, ReservKit handles the operational complexity so you can focus on
                delivering the experience.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 bg-navy">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to sell tours online?
            </h2>
            <p className="text-slate-400 mb-8">
              Set up your first experience, connect Stripe, and take your first booking today.
            </p>
            <Link
              href={`${APP_URL}/signup`}
              className="inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-base font-semibold text-navy hover:bg-amber-dark transition-colors"
            >
              Get started free <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="mt-4 text-sm text-slate-500">
              Also see:{" "}
              <Link href="/boat-rental-software" className="text-slate-400 underline hover:text-white">
                Boat rental software
              </Link>{" "}
              ·{" "}
              <Link href="/fareharbor-alternative" className="text-slate-400 underline hover:text-white">
                FareHarbor alternative
              </Link>
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
