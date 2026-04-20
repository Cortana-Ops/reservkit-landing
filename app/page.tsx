import Link from "next/link";
import Image from "next/image";
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
  Quote,
  Shield,
  Clock,
} from "lucide-react";
import Nav from "./components/Nav";

const APP_URL = "https://app.reservkit.com";
const SIGNUP_URL = `${APP_URL}/login?signup=true`;

// ── FAQ schema for rich results ───────────────────────────────────────────────

const faqItems = [
  {
    q: "Is ReservKit free to start?",
    a: "Yes — sign up and get a 14-day free trial of our Growth plan, no credit card required. After your trial, you stay on the Free plan: 50 bookings/month with a 4% platform fee. Upgrade any time to unlock waivers, staff tools, and lower fees.",
  },
  {
    q: "How does payment work for my customers?",
    a: "Customers pay securely at booking via Stripe. Funds go directly to your connected Stripe account, minus the platform fee. You get paid fast.",
  },
  {
    q: "Do customers need an account to book?",
    a: "No. Customers can book and pay without creating an account. They receive a confirmation email with their booking details and waiver links.",
  },
  {
    q: "Can I customize the booking page for my business?",
    a: "Yes. You can add your logo, activity photos, custom descriptions, add-ons, deposit rules, and booking policies. Each activity has its own booking page.",
  },
  {
    q: "How do digital waivers work?",
    a: "Waivers are sent automatically after payment. Each guest gets a unique link to sign from their phone. You can track signing status in real time from your dashboard.",
  },
  {
    q: "What is the platform fee and how does it compare?",
    a: "Free plan: 4% per booking. Starter ($79/mo): 2%. Growth ($149/mo): 1%. Pro ($249/mo): 0.5%. Enterprise: 0%. FareHarbor charges 6% or more — you keep significantly more revenue with ReservKit.",
  },
  {
    q: "Can I manage multiple business locations?",
    a: "Yes. Each organization can have multiple activity types and availability rules. You can also manage multiple separate organizations from one account.",
  },
  {
    q: "How does staff scheduling work?",
    a: "Assign staff members to bookings, set their roles, and let them view their schedule from their phone. The roster view shows the full team schedule at a glance.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

// ── Stats ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "Free", label: "14-day trial, then free forever" },
  { value: "4%", label: "free tier fee — or $79/mo for 2%" },
  { value: "5 min", label: "to go live with online booking" },
  { value: "Mobile-first", label: "designed for the field" },
];

// ── Features (alternating) ────────────────────────────────────────────────────

const featureRows = [
  {
    id: "online-booking",
    label: "Online Booking",
    heading: "Let customers book and pay in minutes",
    body: "A beautiful public booking page your customers can use 24/7 — pick a date, choose a time slot, select guests, add extras, and pay. No phone calls, no back-and-forth. Your availability calendar updates in real time.",
    bullets: [
      "Shareable booking link for each activity",
      "Real-time availability calendar",
      "Guest count + add-on selection",
      "Automatic confirmation emails",
    ],
    visual: <BookingMockup />,
    flip: false,
  },
  {
    id: "payments-waivers",
    label: "Payments & Waivers",
    heading: "Stripe payments and digital waivers, built in",
    body: "Collect full payment or deposits at booking. Stripe routes money directly to your account. After payment, every guest automatically receives a waiver link — signed from their phone before arrival. No paper, no chasing.",
    bullets: [
      "Stripe Connect — funds go straight to you",
      "Full payment or deposit at booking",
      "Per-guest digital waiver signing",
      "Waiver compliance dashboard",
    ],
    visual: <PaymentMockup />,
    flip: true,
  },
  {
    id: "staff-reports",
    label: "Staff & Reports",
    heading: "Manage your team and track your revenue",
    body: "Assign staff to bookings and let them check their schedule from their phone. Reports give you booking volume, revenue, and guest counts — filterable by date range, activity, or team member.",
    bullets: [
      "Staff scheduling and roster view",
      "Mobile-friendly for the field",
      "Revenue and booking volume reports",
      "Check-in and guest management",
    ],
    visual: <ReportsMockup />,
    flip: false,
  },
];

// ── CSS mockup components ─────────────────────────────────────────────────────

function BookingMockup() {
  return (
    <div
      aria-hidden="true"
      className="w-full max-w-sm mx-auto rounded-2xl border border-[var(--color-border)] bg-white shadow-xl overflow-hidden"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 bg-slate-50 border-b border-[var(--color-border)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <div className="ml-2 flex-1 h-5 rounded bg-slate-200 text-xs text-slate-400 flex items-center px-2">
          reservkit.com/book/...
        </div>
      </div>
      <div className="p-5">
        <div className="h-5 w-32 rounded bg-slate-900 mb-1" />
        <div className="h-3.5 w-48 rounded bg-slate-200 mb-4" />
        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1 mb-4">
          {["S","M","T","W","T","F","S"].map((d, i) => (
            <div key={i} className="text-center text-xs font-medium text-slate-400">{d}</div>
          ))}
          {Array.from({ length: 28 }).map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded text-xs flex items-center justify-center font-medium ${
                i === 9
                  ? "bg-amber text-navy font-bold"
                  : i === 4 || i === 11 || i === 18
                  ? "bg-slate-100 text-slate-400 line-through"
                  : "text-slate-700 hover:bg-slate-100 cursor-pointer"
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
        {/* Time slots */}
        <div className="space-y-2">
          {["9:00 AM — 3 spots left", "11:00 AM — Available", "2:00 PM — Available"].map((slot, i) => (
            <div
              key={i}
              className={`flex items-center justify-between rounded-lg border px-3 py-2 text-xs ${
                i === 1
                  ? "border-amber bg-amber-light text-navy font-semibold"
                  : "border-[var(--color-border)] text-slate-600"
              }`}
            >
              <span>{slot}</span>
              {i === 1 && <span className="text-amber font-bold">✓</span>}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between rounded-xl bg-navy px-4 py-3">
          <span className="text-white text-sm font-semibold">2 guests · $120</span>
          <ArrowRight className="h-4 w-4 text-amber" />
        </div>
      </div>
    </div>
  );
}

function PaymentMockup() {
  return (
    <div
      aria-hidden="true"
      className="w-full max-w-sm mx-auto space-y-3"
    >
      {/* Payment card */}
      <div className="rounded-2xl border border-[var(--color-border)] bg-white shadow-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="h-4 w-28 rounded bg-slate-900 mb-1" />
            <div className="h-3 w-20 rounded bg-slate-200" />
          </div>
          <div className="h-8 w-16 rounded bg-[#635BFF] flex items-center justify-center">
            <span className="text-white text-xs font-bold">stripe</span>
          </div>
        </div>
        <div className="border border-[var(--color-border)] rounded-lg px-3 py-2.5 mb-3">
          <div className="text-xs text-slate-500 mb-1">Card number</div>
          <div className="text-sm font-mono text-slate-700">•••• •••• •••• 4242</div>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="border border-[var(--color-border)] rounded-lg px-3 py-2">
            <div className="text-xs text-slate-500">Expires</div>
            <div className="text-sm font-mono">12/27</div>
          </div>
          <div className="border border-[var(--color-border)] rounded-lg px-3 py-2">
            <div className="text-xs text-slate-500">CVC</div>
            <div className="text-sm font-mono">•••</div>
          </div>
        </div>
        <div className="rounded-xl bg-amber px-4 py-2.5 text-center font-semibold text-navy text-sm">
          Pay $120.00
        </div>
      </div>
      {/* Waiver card */}
      <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="h-4 w-4 text-green-600 shrink-0" />
          <span className="text-sm font-semibold text-green-800">Waiver sent to 2 guests</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs text-green-700">
            <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
            Alex M. — signed ✓
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            Jordan K. — pending
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportsMockup() {
  const bars = [60, 85, 45, 90, 70, 100, 75];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div
      aria-hidden="true"
      className="w-full max-w-sm mx-auto rounded-2xl border border-[var(--color-border)] bg-white shadow-xl overflow-hidden"
    >
      <div className="flex items-center gap-1.5 bg-slate-50 border-b border-[var(--color-border)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <div className="ml-2 h-5 w-24 rounded bg-slate-200" />
      </div>
      <div className="p-5">
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: "Revenue", value: "$4,280" },
            { label: "Bookings", value: "38" },
            { label: "Guests", value: "94" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-slate-50 p-3 text-center">
              <div className="text-lg font-extrabold text-navy">{s.value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
        {/* Bar chart */}
        <div className="flex items-end justify-between gap-1.5 h-24 mb-1">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className={`w-full rounded-t-sm ${i === 5 ? "bg-amber" : "bg-navy/20"}`}
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          {days.map((d, i) => (
            <div key={i} className="flex-1 text-center text-xs text-slate-400">{d}</div>
          ))}
        </div>
        {/* Staff row */}
        <div className="mt-4 border-t border-[var(--color-border)] pt-4">
          <div className="text-xs font-semibold text-slate-500 mb-2">TODAY&apos;S SCHEDULE</div>
          {["Alex M. — 9:00 AM Kayak Tour", "Jordan K. — 2:00 PM SUP Rental"].map((row) => (
            <div key={row} className="flex items-center gap-2 py-1.5 text-xs text-slate-700">
              <div className="h-2 w-2 rounded-full bg-amber shrink-0" />
              {row}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── How It Works ──────────────────────────────────────────────────────────────

const steps = [
  {
    n: "01",
    title: "Create your activities",
    body: "Add your activities, set pricing, availability, deposit rules, and waivers. Takes about 5 minutes.",
  },
  {
    n: "02",
    title: "Share your booking link",
    body: "Customers book and pay online through your branded booking page — 24/7, no phone calls needed.",
  },
  {
    n: "03",
    title: "Manage everything in one place",
    body: "Check in guests, collect waivers, view staff schedules, and track revenue — all from your phone.",
  },
];

// ── Testimonials ──────────────────────────────────────────────────────────────

const testimonials = [
  {
    quote:
      "ReservKit replaced a Google Sheet, a Square terminal, and a paper waiver stack. I set it up in an afternoon and took my first online booking the same day.",
    name: "Mike T.",
    role: "Kayak & SUP Rental Operator",
  },
  {
    quote:
      "The platform fee is a fraction of what FareHarbor was taking. More money stays in my business and my customers actually prefer the booking experience.",
    name: "Sarah L.",
    role: "Guided Surf Instruction",
  },
  {
    quote:
      "Staff scheduling used to be a group text nightmare. Now everyone checks their phone and knows exactly where they need to be. Game changer.",
    name: "Chris W.",
    role: "Boat Charter Operator",
  },
];

// ── Personas ──────────────────────────────────────────────────────────────────

const personas = [
  {
    emoji: "🚤",
    title: "Boat & Watersports Rentals",
    body: "Kayaks, jet skis, paddleboards, charters. Manage availability, deposits, and waivers without the spreadsheet chaos.",
    link: "/boat-rental-software",
  },
  {
    emoji: "🏄",
    title: "Tour & Experience Guides",
    body: "Surf lessons, guided hikes, cooking classes, escape rooms. Let guests book online and pay upfront.",
    link: "/tour-operator-software",
  },
  {
    emoji: "🎿",
    title: "Outdoor Equipment Rentals",
    body: "Bikes, skis, kayaks, camping gear. Set duration-based pricing, track availability, and send confirmations automatically.",
    link: "/kayak-rental-software",
  },
  {
    emoji: "🎉",
    title: "Event & Party Venues",
    body: "Bounce houses, party rooms, photo booths. Custom add-ons, per-guest pricing, and liability waivers — all built in.",
    link: null,
  },
];

// ── Pricing ───────────────────────────────────────────────────────────────────

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Start free. 14-day Growth trial on signup — no credit card.",
    platformFee: "4% platform fee",
    features: [
      "50 bookings/month",
      "Public booking widget",
      "Customer management",
      "Email confirmations",
      "Stripe payment processing",
    ],
    cta: "Start free trial",
    highlight: false,
  },
  {
    name: "Starter",
    price: "$79",
    period: "/mo",
    description: "Single-unit operators under $100K/yr.",
    platformFee: "2% platform fee",
    features: [
      "200 bookings/month",
      "Everything in Free",
      "Reports & analytics",
      "Digital waivers",
      "Staff scheduling",
      "SMS reminders",
    ],
    cta: "Start free trial",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$149",
    period: "/mo",
    description: "3–10 units, $100K–$500K/yr. Most popular.",
    platformFee: "1% platform fee",
    features: [
      "Unlimited bookings",
      "Everything in Starter",
      "Priced add-ons & upsells",
      "Broadcast SMS (Twilio)",
      "Coupon codes & promotions",
      "Damage deposit management",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Pro",
    price: "$249",
    period: "/mo",
    description: "10+ units, $500K+/yr. Multi-location operators.",
    platformFee: "0.5% platform fee",
    features: [
      "Unlimited bookings",
      "Everything in Growth",
      "Multi-location support",
      "Custom booking domain",
      "Advanced analytics",
      "Priority support (4h response)",
    ],
    cta: "Start free trial",
    highlight: false,
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* FAQ JSON-LD schema for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Nav />

      <main>
        {/* ── Hero ── */}
        <section
          aria-label="Hero"
          className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20 sm:py-28"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber-light px-4 py-1.5 text-sm font-medium text-amber-dark shadow-sm">
                <Zap className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
                Free to start — no credit card required
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl leading-tight">
                Online Booking Software for{" "}
                <span className="text-amber">Rental &amp; Experience</span>{" "}
                Businesses
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-xl">
                ReservKit is the booking platform built for rental operators, tour guides, and
                experience businesses. Take online bookings, collect payment, send waivers, and
                manage your staff — all from your phone.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-base font-semibold text-navy hover:bg-amber-dark transition-colors shadow-lg shadow-amber/30"
                >
                  Start Free Trial <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 text-base font-medium text-slate-600 hover:text-navy transition-colors"
                >
                  See how it works ↓
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-500" aria-hidden="true" />
                  Stripe-powered payments
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-500" aria-hidden="true" />
                  No credit card to start
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-500" aria-hidden="true" />
                  5-minute setup
                </span>
              </div>
            </div>
            {/* Hero visual */}
            <div className="relative hidden lg:block">
              <BookingMockup />
            </div>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <section
          aria-label="Platform statistics"
          className="border-y border-[var(--color-border)] bg-white px-6 py-10"
        >
          <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.value}>
                <div className="text-3xl font-extrabold text-navy">{s.value}</div>
                <div className="mt-1 text-sm text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Features alternating ── */}
        <section id="features" aria-label="Features">
          {featureRows.map((row, idx) => (
            <div
              key={row.id}
              id={row.id}
              className={`px-6 py-20 ${idx % 2 === 0 ? "bg-white" : "bg-[var(--color-surface)]"}`}
            >
              <div
                className={`mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  row.flip ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className={row.flip ? "md:[direction:ltr]" : ""}>
                  <span className="inline-block mb-3 text-xs font-bold uppercase tracking-widest text-amber">
                    {row.label}
                  </span>
                  <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                    {row.heading}
                  </h2>
                  <p className="mt-4 text-lg text-slate-600 leading-relaxed">{row.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {row.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2
                          className="h-4 w-4 mt-0.5 text-green-500 shrink-0"
                          aria-hidden="true"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={row.flip ? "md:[direction:ltr]" : ""}>{row.visual}</div>
              </div>
            </div>
          ))}
        </section>

        {/* ── For Who ── */}
        <section id="for-who" aria-label="Who ReservKit is for" className="px-6 py-24 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Built for rental operators and experience businesses
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                If you rent equipment, lead tours, or run experiences — ReservKit was built for you.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {personas.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border-l-4 border-amber bg-[var(--color-surface)] p-6 hover:shadow-sm transition-all"
                >
                  <div className="text-3xl mb-3" aria-hidden="true">{p.emoji}</div>
                  <h3 className="font-semibold text-navy mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.body}</p>
                  {p.link && (
                    <Link
                      href={p.link}
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-amber hover:text-amber-dark transition-colors"
                    >
                      Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section
          id="how-it-works"
          aria-label="How it works"
          className="px-6 py-24 bg-[var(--color-surface)]"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Set up online booking in 3 steps
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                From signup to taking your first booking in under 5 minutes.
              </p>
            </div>
            <div className="relative grid sm:grid-cols-3 gap-8">
              {/* Connector line */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-amber via-amber to-amber/30"
                style={{ top: "2.5rem", left: "calc(16.66% + 2.5rem)", right: "calc(16.66% + 2.5rem)" }}
              />
              {steps.map((step) => (
                <div key={step.n} className="relative flex flex-col items-center text-center">
                  <div className="h-20 w-20 rounded-2xl bg-navy flex items-center justify-center mb-6 text-2xl font-extrabold text-amber shadow-lg">
                    {step.n}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-base font-semibold text-white hover:bg-navy-light transition-colors shadow-lg"
              >
                Get started free <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section
          aria-label="Customer testimonials"
          className="px-6 py-24 bg-navy"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Trusted by rental operators and tour guides
              </h2>
              <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                Operators who switched from spreadsheets and legacy platforms.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all"
                >
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber text-amber" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-amber/40 mb-3" aria-hidden="true" />
                  <p className="text-slate-200 text-sm leading-relaxed mb-5">{t.quote}</p>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" aria-label="Pricing" className="px-6 py-24 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Simple, transparent pricing
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Start free. Upgrade as you grow. No surprise fees.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start mt-12">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-2xl p-8 ${
                    tier.highlight
                      ? "bg-navy text-white ring-2 ring-amber shadow-2xl shadow-navy/20 scale-[1.02]"
                      : "bg-[var(--color-surface)] border border-[var(--color-border)]"
                  }`}
                >
                  {tier.highlight && (
                    <div className="mb-4 inline-flex items-center gap-1 rounded-full bg-amber px-3 py-1 text-xs font-bold text-navy">
                      <Star className="h-3 w-3 fill-current" aria-hidden="true" /> Most Popular
                    </div>
                  )}
                  <h3
                    className={`text-lg font-bold ${tier.highlight ? "text-white" : "text-navy"}`}
                  >
                    {tier.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-extrabold ${tier.highlight ? "text-white" : "text-navy"}`}
                    >
                      {tier.price}
                    </span>
                    <span className={`text-sm ${tier.highlight ? "text-slate-300" : "text-slate-500"}`}>
                      {tier.period}
                    </span>
                  </div>
                  <p
                    className={`mt-1 text-sm font-medium ${
                      tier.highlight ? "text-amber" : "text-slate-500"
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
                          aria-hidden="true"
                        />
                        <span className={tier.highlight ? "text-slate-200" : "text-slate-700"}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={SIGNUP_URL}
                    className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                      tier.highlight
                        ? "bg-amber text-navy hover:bg-amber-dark"
                        : "bg-navy text-white hover:bg-navy-light"
                    }`}
                  >
                    {tier.cta} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-slate-500">
              All plans include a 14-day free trial. No credit card required to start.
              <br />
              <span className="text-slate-400">
                Need a custom plan?{" "}
                <a
                  href="mailto:hello@reservkit.com"
                  className="underline hover:text-slate-600 transition-colors"
                >
                  Contact us
                </a>{" "}
                for Enterprise pricing.
              </span>
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          id="faq"
          aria-label="Frequently asked questions"
          className="px-6 py-24 bg-[var(--color-surface)]"
        >
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Everything you need to know about ReservKit.
              </p>
            </div>
            <div className="space-y-2">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-[var(--color-border)] bg-white"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-navy list-none">
                    {item.q}
                    <span
                      aria-hidden="true"
                      className="ml-4 shrink-0 text-slate-400 transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-slate-500">
              Still have questions?{" "}
              <a
                href="mailto:hello@reservkit.com"
                className="text-amber font-semibold hover:text-amber-dark transition-colors"
              >
                Email us
              </a>{" "}
              or{" "}
              <Link
                href="/docs"
                className="text-amber font-semibold hover:text-amber-dark transition-colors"
              >
                visit the docs
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section aria-label="Call to action" className="px-6 py-20 bg-navy">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to stop managing bookings{" "}
              <span className="text-amber">manually?</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Join rental operators and experience businesses that have streamlined their booking,
              payment, and waiver workflows with ReservKit.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-base font-semibold text-navy hover:bg-amber-dark transition-colors shadow-lg shadow-amber/20"
              >
                Get started free <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white hover:bg-white/10 transition-colors"
              >
                View docs
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-slate-950 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
            {/* Col 1 */}
            <div>
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/logo.png"
                  alt="ReservKit"
                  width={100}
                  height={28}
                  className="h-7 w-auto object-contain"
                />
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                Online booking, payments, waivers, and staff tools built for rental operators and
                experience businesses.
              </p>
              <a
                href="mailto:hello@reservkit.com"
                className="mt-3 inline-block text-sm text-slate-400 hover:text-white transition-colors"
              >
                hello@reservkit.com
              </a>
            </div>
            {/* Col 2 */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                Product
              </div>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <a href="/#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <Link href="/changelog" className="hover:text-white transition-colors">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            {/* Col 3 */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                Company
              </div>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a
                    href={`${APP_URL}/login`}
                    className="hover:text-white transition-colors"
                  >
                    Sign in
                  </a>
                </li>
                <li>
                  <a
                    href={SIGNUP_URL}
                    className="hover:text-white transition-colors"
                  >
                    Start free
                  </a>
                </li>
                <li>
                  <a
                    href="/roadmap"
                    className="hover:text-white transition-colors"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} ReservKit. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Payments powered by{" "}
              <span className="font-semibold text-[#635BFF]">Stripe</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
