import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  FileSignature,
  Route,
  ShieldCheck,
  Users,
} from "lucide-react";
import Nav from "./components/Nav";
import { TrackedLink } from "./components/TrackedLink";
import {
  BETA_URL,
  POSITIONING_LINE,
  PRIMARY_CTA_LABEL,
  enterpriseTier,
  pricingSummary,
  pricingTiers,
} from "./lib/marketing";

const faqItems = [
  {
    q: "Is ReservKit available now?",
    a: "ReservKit is available through limited beta onboarding for selected rental, tour, and experience operators. Approved operators get guided setup and 0% ReservKit platform fees for 30 days.",
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

const operatorPain = [
  "Phone calls and DMs turn into manual calendar checks.",
  "Payment links, waivers, and customer notes live in separate tools.",
  "Staff need a clear view of who is arriving, paid, and signed.",
  "Switching software feels risky when active bookings are on the line.",
];

const workflowSteps = [
  {
    icon: CalendarDays,
    label: "Booking page",
    heading: "Launch a direct booking flow",
    body: "Publish bookable activities with availability, guest counts, pricing, cutoff rules, and a customer-friendly path from selection to checkout.",
    bullets: ["Public activity links", "Availability slots", "Guest details", "Email confirmations"],
  },
  {
    icon: CreditCard,
    label: "Stripe payments",
    heading: "Get paid through your Stripe account",
    body: "ReservKit creates Stripe Checkout sessions for the connected operator account, so customer payments and Stripe branding stay tied to the business.",
    bullets: ["Stripe Connect", "Deposits and balances", "Coupons and adjustments", "Refund-ready records"],
  },
  {
    icon: FileSignature,
    label: "Operations",
    heading: "Run waivers and day-of work together",
    body: "Keep waiver evidence, check-in status, staff assignments, customer records, and booking reports in one operator workspace.",
    bullets: ["Per-guest waivers", "Check-in manifest", "Staff schedule", "Revenue reports"],
  },
];

const switchSteps = [
  "Review your current booking setup",
  "Configure the first activity",
  "Connect Stripe",
  "Run a test booking",
  "Share the booking link with a small first group",
];

const productImages = [
  {
    src: "/product-public-booking-live.png",
    alt: "ReservKit public booking page with configured activity cards",
    title: "Customer booking page",
    body: "Guests choose an activity, review details, select a date, and move toward secure checkout.",
  },
  {
    src: "/product-customer-lookup.png",
    alt: "ReservKit customer booking lookup page",
    title: "Customer lookup",
    body: "Customers can return to booking details without needing an account.",
  },
  {
    src: "/product-operator-login.png",
    alt: "ReservKit operator login page",
    title: "Operator access",
    body: "The operator workspace stays behind authenticated access for staff and owners.",
  },
];

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
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(28rem,1fr)] lg:items-center">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-amber/30 bg-amber-light px-4 py-1.5 text-sm font-semibold text-amber-dark">
                Now onboarding limited beta operators
              </div>
              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-navy sm:text-6xl">
                Booking software for operators who want to sell direct
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                {POSITIONING_LINE}
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
                  See how it works
                </Link>
              </div>
              <div className="mt-6 grid gap-2 text-sm text-slate-600 sm:grid-cols-3">
                {["Guided setup", "0% platform fee for 30 days", "Operator-owned Stripe payments"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[var(--color-border)] bg-white p-3 shadow-2xl shadow-navy/10">
              <Image
                src="/product-public-booking-live.png"
                alt="ReservKit public booking page screenshot"
                width={1280}
                height={900}
                priority
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        <section id="features" className="bg-white px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Direct booking without the daily workarounds</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Operators do not switch booking systems for a prettier calendar. They switch when booking, payment, waivers, staff, and customer details finally work together.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {operatorPain.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm leading-relaxed text-slate-700">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-dark" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="bg-[var(--color-surface)] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">From booking link to day-of operations</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                ReservKit connects the customer booking path to the operational records your team needs after the payment lands.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
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

        <section id="how-it-works" className="bg-white px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <Route className="h-10 w-10 text-amber-dark" aria-hidden="true" />
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">Switch carefully, go live when ready</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                ReservKit onboarding is designed around a first working flow, not a rushed migration. Start with one activity, prove the path, then widen usage when the setup is ready.
              </p>
            </div>
            <div className="grid gap-3">
              {switchSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm font-semibold text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="product-tour" className="bg-[var(--color-surface)] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">See ReservKit in action</h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                  The customer booking path and operator access are built for real reservation workflows, from first click through follow-up lookup.
                </p>
              </div>
              <TrackedLink
                href={BETA_URL}
                event="beta_access_cta_clicked"
                properties={{ location: "product_tour" }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-light"
              >
                {PRIMARY_CTA_LABEL} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </TrackedLink>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {productImages.map((image) => (
                <article key={image.src} className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm">
                  <Image src={image.src} alt={image.alt} width={1280} height={900} className="aspect-[4/3] object-cover object-top" />
                  <div className="p-5">
                    <h3 className="font-bold text-navy">{image.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{image.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Transparent pricing from day one</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Approved beta operators get 0% ReservKit platform fees for 30 days. Public pricing stays visible so there are no surprises later.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {pricingTiers.map((tier) => (
                <article
                  key={tier.name}
                  className={`rounded-2xl p-6 ${tier.highlight ? "bg-navy text-white ring-2 ring-amber" : "border border-[var(--color-border)] bg-[var(--color-surface)]"}`}
                >
                  <h3 className={`text-lg font-bold ${tier.highlight ? "text-white" : "text-navy"}`}>{tier.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className={`text-3xl font-extrabold ${tier.highlight ? "text-white" : "text-navy"}`}>{tier.price}</span>
                    <span className={tier.highlight ? "text-slate-300" : "text-slate-500"}>{tier.period}</span>
                  </div>
                  <p className={`mt-2 text-sm font-semibold ${tier.highlight ? "text-amber" : "text-amber-dark"}`}>{tier.fee}</p>
                  <p className={`mt-1 text-sm ${tier.highlight ? "text-slate-300" : "text-slate-500"}`}>{tier.volume}</p>
                  <p className={`mt-4 text-sm leading-relaxed ${tier.highlight ? "text-slate-300" : "text-slate-600"}`}>{tier.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-bold text-navy">{enterpriseTier.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{enterpriseTier.description}</p>
                </div>
                <p className="text-sm font-semibold text-slate-700">{enterpriseTier.price}: {enterpriseTier.fee}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <ClipboardCheck className="mx-auto h-10 w-10 text-amber-dark" aria-hidden="true" />
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy">Built for operator-owned payments and practical support</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                ReservKit keeps the important relationships clear: operators own their Stripe account, customers see the business at checkout, and setup starts with a working booking path.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Operators keep their own Stripe account relationship.",
                "ReservKit platform fee is operator-absorbed by default.",
                "The first setup path includes a live-style test booking.",
                "Support is focused on launch-critical booking workflows.",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-[var(--color-border)] p-4 text-sm text-slate-700">
                  <Users className="mt-0.5 h-4 w-4 shrink-0 text-amber-dark" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy px-6 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white">Ready for guided beta access?</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Tell us what you operate and how booking works today. We will reply by email with next steps for limited onboarding.
            </p>
            <TrackedLink
              href={BETA_URL}
              event="beta_access_cta_clicked"
              properties={{ location: "final_cta" }}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-7 py-3.5 text-base font-bold text-navy transition-colors hover:bg-amber-dark"
            >
              {PRIMARY_CTA_LABEL} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </TrackedLink>
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
