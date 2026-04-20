import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageShell } from "../components/PageShell";

export const metadata: Metadata = {
  title: "Kayak Rental Booking Software — Online Reservations & Waivers",
  description:
    "Take kayak rental bookings online with ReservKit. Online reservations, Stripe payments, digital waivers, and staff scheduling — free to start.",
  keywords: ["kayak rental booking software", "kayak rental reservation system", "online kayak rental booking", "kayak rental management software"],
  alternates: { canonical: "https://reservkit.com/kayak-rental-software" },
};

const APP_URL = "https://app.reservkit.com";

const features = [
  "Online booking page your customers can use 24/7",
  "Stripe payments — full price or deposits at booking",
  "Per-guest digital liability waiver signing",
  "Real-time availability calendar",
  "Rental duration pricing (1 hour, half day, full day)",
  "Staff scheduling and roster management",
  "SMS reminders 24 hours before rental",
  "Check-in and guest management from your phone",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What features does ReservKit include for kayak rental businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ReservKit includes online booking, Stripe payments, per-guest digital liability waivers, real-time availability calendar, duration-based pricing, staff scheduling, SMS reminders, and check-in management — all in one platform.",
      },
    },
    {
      "@type": "Question",
      name: "How much does ReservKit cost for a kayak rental business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ReservKit has a Free plan with no monthly fee — just a 4% platform fee per booking. The Starter plan is $79/month with a 2% fee. Every new account gets a free 14-day Growth trial. No contract required.",
      },
    },
    {
      "@type": "Question",
      name: "Can I collect deposits and require waivers for kayak rentals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can collect full payment or a deposit at booking, with the balance due at check-in. Digital liability waivers are included on all plans — guests sign per-person via a unique link after booking.",
      },
    },
  ],
};

export default function KayakRentalSoftware() {
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
              Kayak Rental Software
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl leading-tight">
              Kayak Rental Booking Software —{" "}
              <span className="text-amber">Online Reservations &amp; Waivers</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              ReservKit gives kayak and paddleboard rental operators a complete online booking
              system — reservations, Stripe payments, digital liability waivers, and staff
              scheduling. Take bookings 24/7 without phone calls.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`${APP_URL}/login?signup=true`}
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
        <section className="px-6 py-16 bg-white" aria-label="Features for kayak rentals">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-navy mb-8 text-center">
              Everything a kayak rental business needs
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
              Why kayak rental operators choose ReservKit
            </h2>
            <div className="prose prose-slate max-w-none space-y-4 text-slate-700">
              <p>
                Most kayak and paddleboard rental operators are still managing bookings over the
                phone, chasing payments on Venmo, and printing paper waivers. ReservKit replaces all
                of that with a single platform that works from your phone.
              </p>
              <p>
                Your customers get a beautiful booking page they can use 24/7 — pick a date, choose
                a rental duration, pay online, and sign their waiver before they arrive. You get a
                full dashboard showing upcoming rentals, staff assignments, and revenue reports.
              </p>
              <p>
                Compared to legacy platforms like FareHarbor, ReservKit is free to start — 4% fee, or from $79/month
                for 2% on the Starter plan. Significantly lower than the 6%+ that most competitors take. More of each
                booking stays in your business.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 bg-navy">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to take kayak rentals online?
            </h2>
            <p className="text-slate-400 mb-8">
              Set up your first activity and take your first online booking in under 5 minutes.
            </p>
            <Link
              href={`${APP_URL}/login?signup=true`}
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
