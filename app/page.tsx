import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  CreditCard,
  FileSignature,
  Route,
  ShieldCheck,
  Users,
} from "lucide-react";
import Nav from "./components/Nav";
import { PricingSection } from "./components/PricingSection";
import { TrackedLink } from "./components/TrackedLink";
import {
  BETA_URL,
  POSITIONING_LINE,
  PRIMARY_CTA_LABEL,
  pricingSummary,
} from "./lib/marketing";

const faqItems = [
  {
    q: "Is ReservKit available now?",
    a: "ReservKit is available through limited guided beta onboarding for selected rental, tour, and experience operators. Approved operators get 0% ReservKit platform fees for 30 days.",
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
    title: "What does this actually cost me?",
    body: "Most platforms bury their fees in a demo or a custom quote. You should not have to get on a call to find out what a booking costs you.",
  },
  {
    title: "Why do payments feel like someone else owns them?",
    body: "When payments run through a platform processor, you are building their payment relationship. ReservKit uses Stripe Connect so payouts stay tied to your business.",
  },
  {
    title: "Waivers are a separate thing I have to figure out.",
    body: "Liability waivers are part of running an outdoor or rental business. ReservKit includes per-guest digital waivers in the booking workflow.",
  },
  {
    title: "Staff cannot see what they need to run the day.",
    body: "Check-in lists, assigned trips, who paid, and who still needs to sign should be visible without a group text.",
  },
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
    bullets: ["Stripe Connect", "Deposits and balances", "Coupon codes", "Refund-ready records"],
  },
  {
    icon: FileSignature,
    label: "Waivers",
    heading: "Collect waiver evidence before arrival",
    body: "Build a liability waiver once. Every guest signs before the trip, and the operator record stays tied to the booking.",
    bullets: ["Per-guest digital signing", "Required before check-in", "Timestamped records", "Downloadable signed waivers"],
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
  { title: "Configure waivers", body: "Build your liability waiver once. It attaches to every booking automatically." },
  { title: "Run a test booking", body: "Go through the full customer flow yourself before sharing with anyone." },
  { title: "Share your booking link", body: "Send it to your first group. Watch the bookings come in." },
];

const productImages = [
  {
    src: "/product-public-booking-live.png",
    alt: "ReservKit public booking page with configured activity cards",
    title: "Customer booking page",
    body: "Guests choose an activity, review details, select a date, and move toward secure checkout.",
    callouts: [
      { text: "Activity details", className: "left-[10%] top-[22%]" },
      { text: "Availability path", className: "right-[12%] top-[34%]" },
      { text: "Direct checkout", className: "left-[36%] bottom-[20%]" },
    ],
  },
  {
    src: "/product-customer-lookup.png",
    alt: "ReservKit customer booking lookup page",
    title: "Booking lookup",
    body: "Customers can return to booking details without creating an account, which keeps support simple after purchase.",
    callouts: [
      { text: "No account required", className: "left-[12%] top-[24%]" },
      { text: "Booking email lookup", className: "right-[12%] top-[42%]" },
      { text: "Guest-friendly support", className: "left-[34%] bottom-[18%]" },
    ],
  },
];

const proofLine = [
  "Simple monthly subscription",
  "Per-booking fee that decreases as you grow",
  "Operator-owned Stripe payments",
  "Waivers included",
  "No sales call required",
].join(" · ");

export const metadata = {
  title: "ReservKit — Direct booking software for rental and experience operators",
  description:
    "Take direct bookings, collect Stripe payments, manage waivers, and run day-of operations. Transparent pricing published upfront. No sales call required.",
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
                Limited guided beta access
              </div>
              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-navy sm:text-6xl">
                Direct bookings, your Stripe account, no surprises on pricing.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                ReservKit is booking software built for small rental and experience operators who are done guessing what they owe and done sharing their customer relationships with a platform.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <TrackedLink
                  href={BETA_URL}
                  event="beta_access_cta_clicked"
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
              <p className="mt-6 text-sm leading-relaxed text-slate-600">{proofLine}</p>
            </div>
            <div className="rounded-3xl border border-[var(--color-border)] bg-white p-3 shadow-2xl shadow-navy/10">
              <Image
                src="/product-public-booking-live.png"
                alt="ReservKit public booking page screenshot"
                width={1280}
                height={900}
                priority
                className="rounded-2xl object-cover object-top"
              />
            </div>
          </div>
        </section>

        <section id="features" className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                You are already doing the hard part. Booking software should make it easier.
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

        <section id="workflow" className="bg-[var(--color-surface)] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Everything in one place. Nothing you do not need.
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

        <PricingSection />

        <section id="product-tour" className="bg-[var(--color-surface)] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">See ReservKit in action</h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                Product screens are shown large enough to inspect, with the booking path and customer lookup flow presented as real working surfaces.
              </p>
            </div>
            <div className="mt-12 space-y-12">
              {productImages.map((image) => (
                <article key={image.src} className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-xl shadow-navy/10">
                  <div className="relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1920}
                      height={1350}
                      loading="lazy"
                      className="w-full object-cover object-top"
                    />
                    {image.callouts.map((callout) => (
                      <span
                        key={callout.text}
                        className={`absolute hidden rounded-full bg-navy px-3 py-1.5 text-xs font-bold text-white shadow-lg sm:inline-flex ${callout.className}`}
                      >
                        {callout.text}
                      </span>
                    ))}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy">{image.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{image.body}</p>
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
                From signup to first real booking in a single session.
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
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Built by someone who has operated a rental business.
            </h2>
            <blockquote className="mt-8 rounded-3xl border border-[var(--color-border)] bg-white p-8 shadow-sm">
              <p className="text-xl font-semibold leading-relaxed text-navy">
                ReservKit started because the existing options either cost too much, hid their pricing, or required a 45-minute sales demo to find out if they would work. That should not be the barrier to running a better booking operation.
              </p>
              <footer className="mt-5 text-sm font-bold text-slate-600">James, founder</footer>
            </blockquote>
            <p className="mt-5 text-sm text-slate-500">Operator testimonials will be added as they come in from beta.</p>
          </div>
        </section>

        <section className="bg-navy px-6 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white">Ready to take direct bookings?</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Beta access is limited. We onboard operators personally, starting with Stripe, one activity, and a real test booking.
            </p>
            <TrackedLink
              href={BETA_URL}
              event="beta_access_cta_clicked"
              properties={{ location: "final_cta" }}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-7 py-3.5 text-base font-bold text-navy transition-colors hover:bg-amber-dark"
            >
              {PRIMARY_CTA_LABEL} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </TrackedLink>
            <p className="mt-3 text-sm text-slate-400">No sales call. Monthly plans can be cancelled from the billing portal.</p>
          </div>
        </section>
      </main>

      <footer className="bg-navy-light px-6 py-10 text-slate-300">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-[1fr_auto_auto]">
          <div>
            <Image src="/logo.png" alt="ReservKit" width={100} height={28} className="h-7 w-auto object-contain" style={{ width: "auto" }} />
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
