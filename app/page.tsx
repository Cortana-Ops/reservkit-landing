import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  CreditCard,
  FileSignature,
  Route,
  Search,
  ShieldCheck,
  TrendingDown,
  Users,
} from "lucide-react";
import Nav from "./components/Nav";
import { PricingSection } from "./components/PricingSection";
import { TrackedLink } from "./components/TrackedLink";
import {
  EARLY_ACCESS_URL,
  POSITIONING_LINE,
  PRIMARY_CTA_LABEL,
  pricingSummary,
} from "./lib/marketing";

const faqItems = [
  {
    q: "Is ReservKit available now?",
    a: "ReservKit is available through limited pre-launch early access for selected rental, tour, and experience operators before public launch.",
  },
  {
    q: "Can I switch from FareHarbor, Peek, Checkfront, Rezdy, or another booking platform?",
    a: "Yes. Guided onboarding is built around switching safely: configure activities, availability, waivers, Stripe, booking rules, and test bookings before sharing your ReservKit link. Existing data migration depends on the export available from your current platform.",
  },
  {
    q: "How do customer payments work?",
    a: "Customers pay through Stripe Checkout. ReservKit uses Stripe Connect so booking payments route to the operator's connected Stripe account.",
  },
  {
    q: "Do customers need an account to book?",
    a: "No. Customers can book, pay, sign required waivers, and receive their confirmation without creating a ReservKit account.",
  },
  {
    q: "What happens after guided access?",
    a: pricingSummary,
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

const painCards = [
  {
    title: "Pricing should not require a sales call",
    body: "Operators should be able to understand the monthly cost and per-booking fee before they spend time in a demo.",
  },
  {
    title: "Payments should belong to your business",
    body: "ReservKit uses Stripe Connect so customer payments route through your connected Stripe account instead of a platform-owned payment relationship.",
  },
  {
    title: "Waivers should create usable evidence",
    body: "Customers can sign digital waivers before arrival. Signed records stay tied to the booking with identity checks, timestamps, signature evidence, and audit details.",
  },
  {
    title: "Staff should see the day clearly",
    body: "Check-in lists, payment status, waiver status, guest counts, and assigned work should be visible before the first group arrives.",
  },
];

const whyReservKit = [
  {
    title: "Know what the platform costs",
    body: "Public pricing, plan limits, and booking fees are visible before an operator books a demo or changes their booking process.",
  },
  {
    title: "Keep payments tied to your business",
    body: "Stripe Connect lets operators use their own Stripe account, payout schedule, customer payment records, and checkout branding.",
  },
  {
    title: "Collect the messy operational pieces together",
    body: "Waiver evidence, refundable deposits, guest counts, notes, staff context, and check-in status live with the booking record.",
  },
];

const switchingSteps = [
  {
    title: "Map your current setup",
    body: "Activities, durations, deposits, waiver needs, staff handoffs, cutoff rules, and the links customers use today.",
  },
  {
    title: "Rebuild the live booking path",
    body: "Set up your first bookable activity, Stripe account, availability, waiver requirements, and customer confirmation flow.",
  },
  {
    title: "Test before you switch traffic",
    body: "Run a real test booking end to end so you see the customer flow, operator record, payment handoff, and waiver path before launch.",
  },
];

const revenuePoints = [
  "Published monthly plans and booking fees",
  "Lower booking fee percentage on higher-volume plans",
  "Operator-controlled customer-facing service fees",
  "Stripe payments routed to your connected account",
];

const controlPoints = [
  "Direct booking page for your activities",
  "Operator-owned Stripe Connect payments",
  "Signed waiver evidence",
  "Refundable damage deposits at checkout",
  "Call-to-book cutoff handling",
  "Day-of check-in and staff visibility",
];

const workflowSteps = [
  {
    icon: CalendarDays,
    label: "Booking page",
    heading: "Publish a clean, direct booking flow",
    body: "Customers choose an activity, review availability, enter guest details, and move toward checkout without phone tag.",
    bullets: ["Activity pages with real availability", "Guest detail collection", "Cutoff rules and guest limits", "Email confirmations on booking"],
  },
  {
    icon: CreditCard,
    label: "Stripe payments",
    heading: "Get paid through your Stripe account",
    body: "Payments go through your Stripe account. You control payout timing. Customers see your business at checkout.",
    bullets: ["Stripe Connect", "Refundable damage deposits", "Balance payments", "Coupon codes"],
  },
  {
    icon: FileSignature,
    label: "Waivers",
    heading: "Collect signed waiver evidence",
    body: "Attach one or more waiver templates to an activity. Guests verify by email, sign before the trip, and the signed record stays tied to the booking with audit details.",
    bullets: ["Per-guest digital signing", "Email verification", "IP and device context", "Printable waiver packets"],
  },
  {
    icon: Users,
    label: "Day-of operations",
    heading: "Give staff the live view they need",
    body: "Your team can see who is arriving, who paid, who signed, and what needs attention before the group shows up.",
    bullets: ["Check-in manifest", "Staff schedule and assignments", "Task management", "Revenue reports"],
  },
];

const setupSteps = [
  { title: "Connect Stripe", body: "Link your existing Stripe account or create one. Takes five minutes." },
  { title: "Set up your first activity", body: "Name it, set pricing, guest limits, availability windows, and cutoff rules." },
  { title: "Configure waivers", body: "Build your waiver templates once, then assign the required templates to each activity." },
  { title: "Run a test booking", body: "Go through the full customer flow yourself before sharing with anyone." },
  { title: "Share your booking link", body: "Send it to your first group. Watch the bookings come in." },
];

const operatorProof = [
  {
    title: "Real product, not mockup-only marketing",
    body: "The homepage uses live product screenshots from configured public booking and operator workflows.",
  },
  {
    title: "Stripe Connect from the start",
    body: "Payments are designed around your Stripe account instead of a platform-owned payment relationship.",
  },
  {
    title: "Built around operator setup",
    body: "Guided onboarding focuses on one working booking flow before asking you to move real traffic.",
  },
];

const industryLinks = [
  { href: "/boat-rental-software", label: "Boat rental software" },
  { href: "/kayak-rental-software", label: "Kayak rental software" },
  { href: "/tour-operator-software", label: "Tour operator software" },
  { href: "/pricing", label: "Transparent pricing" },
];

const operatorFeatures = [
  {
    src: "/product-activities.png",
    width: 1440,
    height: 900,
    alt: "ReservKit activities page showing five configured bookable activities",
    label: "Activities",
    heading: "Build the catalog customers actually book",
    body: "Activities carry the customer-facing photos, descriptions, locations, pricing, duration, capacity, and waiver setup that power the live booking page.",
    bullets: ["Photos and descriptions", "Pricing, duration, and capacity", "Locations and categories", "Waiver-ready activity setup"],
  },
  {
    src: "/product-bookings-dashboard.png",
    width: 1440,
    height: 900,
    alt: "ReservKit bookings dashboard showing payment and waiver status",
    label: "Bookings",
    heading: "Every booking in one place",
    body: "The bookings list ties together the guest, activity, time slot, payment status, waiver status, assigned staff, and any operator notes — all in a single view.",
    bullets: ["Payment and balance status", "Waiver compliance at a glance", "Assigned staff", "Guest count and notes"],
  },
  {
    src: "/product-checkin-manifest.png",
    width: 1440,
    height: 900,
    alt: "ReservKit check-in manifest showing day-of bookings",
    label: "Day-of operations",
    heading: "Your staff knows who is arriving before they show up",
    body: "The check-in manifest separates ready bookings from the ones that need attention. Staff can mark arrivals, verify waivers, and track the day without a group text.",
    bullets: ["Ready vs. attention split", "Waiver status per guest", "One-tap check-in", "Printable and CSV-ready"],
  },
  {
    src: "/product-waiver-compliance.png",
    width: 1440,
    height: 900,
    alt: "ReservKit waiver compliance view showing guest signing status",
    label: "Waivers",
    heading: "Waiver evidence collected before arrival",
    body: "Required waivers attach to activities. Guests can open the waiver hub after booking, verify by email, and sign each required waiver. Signed records stay tied to the booking with verification timestamps, IP/device context, signature evidence, and the exact waiver text accepted.",
    bullets: ["Per-guest signer status", "Shareable waiver hub", "Audit-ready evidence", "Printable evidence packets"],
  },
  {
    src: "/product-reports.png",
    width: 1440,
    height: 900,
    alt: "ReservKit revenue and booking reports dashboard",
    label: "Reports",
    heading: "Know your numbers by activity and date range",
    body: "Reports separate booking income from customer tips, show booking fees, and make activity performance easier to review by date range.",
    bullets: ["Booking income by activity", "Customer tips separated", "Date range filtering", "CSV export"],
  },
];

export const metadata = {
  title: "ReservKit — Booking software for rental, tour, and experience operators",
  description:
    "Switch to direct booking software with Stripe payments, waiver evidence, refundable deposits, day-of operations, and transparent pricing for rental, tour, and experience operators.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <main>
        <section className="relative overflow-hidden bg-[var(--color-surface)] px-6 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(30rem,1fr)] lg:items-center">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-amber/30 bg-amber-light px-4 py-1.5 text-sm font-semibold text-amber-dark">
                Pre-launch early access
              </div>
              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-navy sm:text-6xl">
                Booking software that keeps operators in control of bookings, payments, and the day of work.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                ReservKit helps rental, tour, and experience businesses take direct bookings, collect payments through their own Stripe account, gather waiver evidence, handle deposits, and give staff a clear day-of view.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <TrackedLink
                  href={EARLY_ACCESS_URL}
                  event="early_access_cta_clicked"
                  properties={{ location: "hero" }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber px-7 py-3.5 text-base font-bold text-navy shadow-lg shadow-amber/20 transition-colors hover:bg-amber-dark"
                >
                  {PRIMARY_CTA_LABEL} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </TrackedLink>
                <Link
                  href="#workflow"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:text-navy"
                >
                  See how it works <ArrowRight className="h-4 w-4 rotate-90" aria-hidden="true" />
                </Link>
              </div>
              <div className="mt-6 grid gap-2 text-sm leading-relaxed text-slate-600 sm:grid-cols-2">
                {controlPoints.slice(0, 4).map((point) => (
                  <div key={point} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[var(--color-border)] bg-white p-3 shadow-2xl shadow-navy/10">
              <Image
                src="/product-public-booking-live.png"
                alt="ReservKit public booking page screenshot"
                width={1440}
                height={900}
                priority
                className="rounded-2xl object-cover object-top"
              />
            </div>
          </div>
        </section>

        <section className="bg-navy px-6 py-20 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-amber/30 bg-white/10 px-4 py-1.5 text-sm font-semibold text-amber">
                Why ReservKit exists
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Operators should not have to trade control for online bookings.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                A booking platform should help you sell online without hiding fees, taking over the payment relationship, or scattering waivers, deposits, and day-of work across disconnected tools.
              </p>
            </div>
            <div className="grid gap-4">
              {whyReservKit.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                The hard part is running the business. Your booking software should remove friction.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {painCards.map((card) => (
                <article key={card.title} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                  <ShieldCheck className="h-5 w-5 text-amber-dark" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold text-navy">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="switching" className="bg-navy px-6 py-20 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-amber/30 bg-white/10 px-4 py-1.5 text-sm font-semibold text-amber">
                Switching platforms
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Coming from FareHarbor, Peek, Checkfront, Rezdy, spreadsheets, or a custom form?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                The risky part is not buying new software. It is changing your booking flow without breaking your season. Early-access onboarding is built around a tested switch: one working activity, one payment path, one waiver path, and one booking link before you move traffic.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {industryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-white/15 px-3 py-1.5 text-sm font-semibold text-slate-200 transition-colors hover:border-amber/50 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {switchingSteps.map((step, index) => (
                <article key={step.title} className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 sm:grid-cols-[3rem_1fr]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber text-sm font-extrabold text-navy">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="bg-[var(--color-surface)] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Direct booking, payment, waiver, deposit, and day-of tools in one workspace.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {POSITIONING_LINE}
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-4">
              {workflowSteps.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.heading} className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-light text-amber-dark">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-xs font-bold uppercase tracking-widest text-amber-dark">{feature.label}</p>
                    <h3 className="mt-2 text-xl font-bold text-navy">{feature.heading}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.body}</p>
                    <ul className="mt-5 space-y-2">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <TrendingDown className="h-10 w-10 text-amber-dark" aria-hidden="true" />
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                At real booking volume, every percentage point matters.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                If your business does tens of thousands in monthly bookings, small booking-fee differences become real money. ReservKit keeps the model visible: monthly plan plus a published booking fee, with lower rates on higher-volume plans.
              </p>
              <Link
                href="/pricing"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy transition-colors hover:text-amber-dark"
              >
                See the pricing page <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-widest text-amber-dark">Example pressure</p>
                <p className="mt-3 text-4xl font-extrabold text-navy">$60k/mo</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  At that volume, a 1 percentage point fee difference is about $600/month before processing fees. Operators should be able to see the math before committing to a platform.
                </p>
              </div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {revenuePoints.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <PricingSection />

        <section id="product-tour" className="bg-[var(--color-surface)] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Inside the operator workspace</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                ReservKit connects bookings, payments, waivers, and staff in one place. Here is what the operator side looks like.
              </p>
            </div>
            <div className="mt-12 space-y-16">
              {operatorFeatures.map((feature, index) => (
                <article
                  key={feature.src}
                  className={`grid gap-10 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-dark">{feature.label}</p>
                    <h3 className="mt-2 text-2xl font-bold text-navy">{feature.heading}</h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">{feature.body}</p>
                    <ul className="mt-5 space-y-2">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-xl shadow-navy/10 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <Image
                      src={feature.src}
                      alt={feature.alt}
                      width={feature.width}
                      height={feature.height}
                      loading="lazy"
                      className="w-full object-cover object-top"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-white px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <Route className="h-10 w-10 text-amber-dark" aria-hidden="true" />
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                From guided setup to first real booking in a single session.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Setup is focused on a working booking path: Stripe, one activity, waivers, and a test booking before you share the link.
              </p>
            </div>
            <div className="grid gap-5">
              {setupSteps.map((step, index) => (
                <article key={step.title} className="grid gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:grid-cols-[4rem_1fr] sm:items-start">
                  <div className="text-5xl font-extrabold leading-none text-amber-dark">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-surface)] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Built by someone who has operated a rental business.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                ReservKit is early, but it is not vaporware. The product already covers the core path operators need to trust before switching: direct bookings, Stripe payments, waiver evidence, refundable deposits, check-in, staff context, reports, and guided setup.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {operatorProof.map((item) => (
                <article key={item.title} className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
                  <ShieldCheck className="h-5 w-5 text-amber-dark" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
                </article>
              ))}
            </div>
            <blockquote className="mt-8 rounded-3xl border border-[var(--color-border)] bg-white p-8 shadow-sm">
              <p className="text-xl font-semibold leading-relaxed text-navy">
                Operators deserve to know what they owe, keep the payment relationship in their own business, and get set up without a weeks-long evaluation process. That is why I built ReservKit.
              </p>
              <footer className="mt-5 text-sm font-bold text-slate-600">James, founder</footer>
            </blockquote>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <Search className="h-10 w-10 text-amber-dark" aria-hidden="true" />
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Questions operators ask before switching
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {faqItems.map((item) => (
                <article key={item.q} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                  <h3 className="font-bold text-navy">{item.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy px-6 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white">Ready to take direct bookings?</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              We onboard operators personally: Stripe, one activity, waiver and deposit setup, and one test booking before you share the link.
            </p>
            <TrackedLink
              href={EARLY_ACCESS_URL}
              event="early_access_cta_clicked"
              properties={{ location: "final_cta" }}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-7 py-3.5 text-base font-bold text-navy transition-colors hover:bg-amber-dark"
            >
              {PRIMARY_CTA_LABEL} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </TrackedLink>
            <p className="mt-3 text-sm text-slate-400">Pricing is published upfront. Monthly plans can be cancelled from the billing portal.</p>
          </div>
        </section>
      </main>

      <footer className="bg-navy-light px-6 py-10 text-slate-300">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-[1fr_auto_auto]">
          <div>
            <Image src="/logo.png" alt="ReservKit" width={100} height={28} className="h-7 w-auto object-contain" style={{ width: "auto", height: "auto" }} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {POSITIONING_LINE}
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <Link href="/docs" className="block hover:text-white">Docs</Link>
            <Link href="/roadmap" className="block hover:text-white">Roadmap</Link>
            <Link href="/blog" className="block hover:text-white">Blog</Link>
            <Link href="/pricing" className="block hover:text-white">Pricing</Link>
          </div>
          <div className="space-y-2 text-sm">
            <Link href="/privacy" className="block hover:text-white">Privacy</Link>
            <Link href="/terms" className="block hover:text-white">Terms</Link>
            <a href="mailto:hello@reservkit.com" className="block hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
