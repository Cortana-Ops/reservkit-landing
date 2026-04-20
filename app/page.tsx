import Link from "next/link";
import {
  CalendarDays,
  CreditCard,
  FileSignature,
  Users,
  BarChart3,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Star,
  Zap,
} from "lucide-react";

const APP_URL = "https://app.reservkit.com";

// ── Nav ───────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center">
            <CalendarDays className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900">ReservKit</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#for-who" className="hover:text-slate-900 transition-colors">Who It&apos;s For</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={`${APP_URL}/login`}
            className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Log in
          </Link>
          <Link
            href={`${APP_URL}/signup`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
          >
            Start free <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20 sm:py-32">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
          <Zap className="h-3.5 w-3.5 text-amber-500" />
          Built for operators who move fast
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl leading-tight">
          Bookings. Payments. Waivers.{" "}
          <span className="bg-gradient-to-r from-slate-800 to-slate-500 bg-clip-text text-transparent">
            All in one place.
          </span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl max-w-2xl mx-auto">
          ReservKit is the booking platform built for rental operators, tour guides, and experience
          businesses. Take online bookings, collect payment, send waivers, and manage your staff —
          all from your phone.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`${APP_URL}/signup`}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-base font-semibold text-white hover:bg-slate-700 transition-colors shadow-lg shadow-slate-900/20"
          >
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#features"
            className="inline-flex items-center gap-2 text-base font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            See what&apos;s included ↓
          </a>
        </div>
        <p className="mt-4 text-sm text-slate-500">No credit card required · Takes 5 minutes to set up</p>
      </div>
    </section>
  );
}

// ── For Who ───────────────────────────────────────────────────────────────────

const personas = [
  {
    emoji: "🚤",
    title: "Boat & Watersports Rentals",
    body: "Kayaks, jet skis, paddleboards, charters. Manage availability, deposits, and waivers without the spreadsheet chaos.",
  },
  {
    emoji: "🏄",
    title: "Tour & Experience Guides",
    body: "Surf lessons, guided hikes, cooking classes, escape rooms. Let guests book online and pay upfront — no more chasing payments.",
  },
  {
    emoji: "🎿",
    title: "Outdoor Equipment Rentals",
    body: "Bikes, skis, camping gear. Set duration-based pricing, track availability, and send confirmations automatically.",
  },
  {
    emoji: "🎉",
    title: "Event & Party Venues",
    body: "Bounce houses, party rooms, photo booths. Custom add-ons, per-guest pricing, and liability waivers — all built in.",
  },
];

function ForWho() {
  return (
    <section id="for-who" className="px-6 py-24 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built for experience businesses
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            If you rent equipment, lead tours, or run experiences — ReservKit was built for you.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6 hover:border-slate-200 hover:shadow-sm transition-all"
            >
              <div className="text-3xl mb-3">{p.emoji}</div>
              <h3 className="font-semibold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Features ──────────────────────────────────────────────────────────────────

const features = [
  {
    icon: CalendarDays,
    title: "Online Booking",
    body: "A beautiful public booking page your customers can use to pick a date, time, and number of guests — no back-and-forth required.",
    highlight: true,
  },
  {
    icon: CreditCard,
    title: "Stripe Payments",
    body: "Collect full payment or deposits at booking. Stripe Connect routes money directly to your account. We charge a small platform fee.",
    highlight: false,
  },
  {
    icon: FileSignature,
    title: "Digital Waivers",
    body: "Attach liability waivers to any activity. Customers sign from the booking confirmation email. Each guest signs independently.",
    highlight: false,
  },
  {
    icon: Users,
    title: "Staff Scheduling",
    body: "Assign staff to bookings and let your team see their schedule from their phone. Roster view shows the whole team at a glance.",
    highlight: false,
  },
  {
    icon: BarChart3,
    title: "Reports",
    body: "Track revenue, booking volume, and guest counts. Filter by date range to understand what's working and what's not.",
    highlight: false,
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    body: "Designed for operators in the field. Every page works great on a phone — manage bookings, check in guests, and review the schedule on the go.",
    highlight: true,
  },
];

function Features() {
  return (
    <section id="features" className="px-6 py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            ReservKit bundles the tools rental and experience businesses actually use into one
            simple platform.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={`rounded-2xl p-6 transition-all ${
                f.highlight
                  ? "bg-slate-900 text-white"
                  : "bg-white border border-slate-100 hover:border-slate-200 hover:shadow-sm"
              }`}
            >
              <div
                className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                  f.highlight ? "bg-white/10" : "bg-slate-100"
                }`}
              >
                <f.icon
                  className={`h-5 w-5 ${f.highlight ? "text-white" : "text-slate-700"}`}
                />
              </div>
              <h3
                className={`font-semibold mb-2 ${f.highlight ? "text-white" : "text-slate-900"}`}
              >
                {f.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  f.highlight ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Pricing ───────────────────────────────────────────────────────────────────

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    description: "Get started for free. Pay only when you get paid.",
    platformFee: "2% platform fee",
    features: [
      "Unlimited bookings",
      "Online payments",
      "Customer emails",
      "Basic reporting",
      "Up to 2 team members",
    ],
    cta: "Get started free",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$49",
    period: "/mo",
    description: "For businesses scaling up. Lower fees, more power.",
    platformFee: "1% platform fee",
    features: [
      "Everything in Starter",
      "Digital waivers",
      "Staff scheduling",
      "SMS reminders",
      "Up to 10 team members",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Pro",
    price: "$149",
    period: "/mo",
    description: "For high-volume operators who need the lowest fees.",
    platformFee: "0.5% platform fee",
    features: [
      "Everything in Growth",
      "Custom email domain",
      "Dynamic pricing",
      "Priority support",
      "Unlimited team members",
    ],
    cta: "Start free trial",
    highlight: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Start free. Upgrade as you grow. No surprise fees.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 ${
                tier.highlight
                  ? "bg-slate-900 text-white ring-2 ring-slate-900 shadow-2xl shadow-slate-900/20 scale-[1.02]"
                  : "bg-slate-50 border border-slate-100"
              }`}
            >
              {tier.highlight && (
                <div className="mb-4 inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                  <Star className="h-3 w-3 fill-current" /> Most Popular
                </div>
              )}
              <h3
                className={`text-lg font-bold ${tier.highlight ? "text-white" : "text-slate-900"}`}
              >
                {tier.name}
              </h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-extrabold ${tier.highlight ? "text-white" : "text-slate-900"}`}
                >
                  {tier.price}
                </span>
                <span className={`text-sm ${tier.highlight ? "text-slate-300" : "text-slate-500"}`}>
                  {tier.period}
                </span>
              </div>
              <p
                className={`mt-1 text-sm font-medium ${
                  tier.highlight ? "text-amber-300" : "text-slate-500"
                }`}
              >
                + {tier.platformFee}
              </p>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  tier.highlight ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {tier.description}
              </p>
              <ul className="mt-6 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2
                      className={`h-4 w-4 mt-0.5 shrink-0 ${
                        tier.highlight ? "text-green-400" : "text-green-600"
                      }`}
                    />
                    <span className={tier.highlight ? "text-slate-200" : "text-slate-700"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={`${APP_URL}/signup`}
                className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-colors ${
                  tier.highlight
                    ? "bg-white text-slate-900 hover:bg-slate-100"
                    : "bg-slate-900 text-white hover:bg-slate-700"
                }`}
              >
                {tier.cta} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          All plans include a 14-day free trial. No credit card required to start.
        </p>
      </div>
    </section>
  );
}

// ── CTA Banner ────────────────────────────────────────────────────────────────

function CtaBanner() {
  return (
    <section className="px-6 py-20 bg-slate-900">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to stop managing bookings manually?
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Join operators who have streamlined their booking, payment, and waiver workflows with
          ReservKit.
        </p>
        <Link
          href={`${APP_URL}/signup`}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
        >
          Get started free <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-10">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-slate-900 flex items-center justify-center">
            <CalendarDays className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-sm font-semibold text-slate-700">ReservKit</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <Link href="/privacy" className="hover:text-slate-700 transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-slate-700 transition-colors">
            Terms
          </Link>
          <Link href={APP_URL} className="hover:text-slate-700 transition-colors">
            Log in to app
          </Link>
        </div>
        <p className="text-xs text-slate-400">© {new Date().getFullYear()} ReservKit. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ForWho />
        <Features />
        <Pricing />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
