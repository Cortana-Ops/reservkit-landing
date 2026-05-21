import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  CreditCard,
  FileSignature,
  ShieldCheck,
  Users,
} from "lucide-react";
import Nav from "./components/Nav";
import { TrackedLink } from "./components/TrackedLink";
import { BETA_URL, PRIMARY_CTA_LABEL, enterpriseTier, pricingSummary, pricingTiers } from "./lib/marketing";

const faqItems = [
  {
    q: "Is ReservKit open to everyone?",
    a: "ReservKit is currently in controlled beta. Operators can request access, and approved beta accounts receive temporary 0% ReservKit platform fees during the beta window.",
  },
  {
    q: "How do customer payments work?",
    a: "Customers pay through Stripe Checkout. ReservKit uses Stripe Connect so booking payments route to the operator's connected Stripe account.",
  },
  {
    q: "Do customers need an account to book?",
    a: "No. Customers can book, pay, and receive their confirmation without creating a ReservKit account.",
  },
  {
    q: "What happens after beta?",
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

const featureRows = [
  {
    icon: CalendarDays,
    label: "Direct booking",
    heading: "A customer booking flow you can share with confidence",
    body: "Guests choose an activity, pick an available time, enter their details, and go straight to Stripe. The flow is built for direct bookings from your website, social bio, or Google Business profile.",
    bullets: ["Public activity links", "Real availability slots", "Guest and price summary before Stripe", "Email confirmations"],
  },
  {
    icon: CreditCard,
    label: "Payments",
    heading: "Stripe Connect routes payment to the operator",
    body: "ReservKit creates Stripe Checkout sessions on behalf of the connected business. The exact branding customers see comes from the operator's Stripe account profile.",
    bullets: ["Connected-account payment flow", "Deposits and balances", "Coupons and adjustments", "Refund-ready payment records"],
  },
  {
    icon: FileSignature,
    label: "Operations",
    heading: "Waivers, check-in, staff, and reporting in one operator workspace",
    body: "ReservKit is not just a payment link. Operators can manage day-of readiness, digital waiver evidence, staff assignments, customer records, and revenue reporting after the booking comes in.",
    bullets: ["Per-guest digital waivers", "Check-in manifest", "Staff schedule and tasks", "Reports and booking reconciliation"],
  },
];

const operatorWorkflows = [
  {
    title: "Before launch",
    body: "Set up activities, availability, Stripe, booking URL, and a test booking from the in-app onboarding checklist.",
  },
  {
    title: "During the booking",
    body: "Customers see the activity, selected time, guest details, price summary, and Stripe payment page without needing an account.",
  },
  {
    title: "Day of service",
    body: "Operators review the manifest, waiver status, staff coverage, and customer details from the same workspace.",
  },
];

const proofImages = [
  {
    src: "/product-public-booking.png",
    alt: "ReservKit public booking page for a test activity",
    title: "Public booking page",
    body: "Actual public booking flow from the production test organization.",
  },
  {
    src: "/product-customer-lookup.png",
    alt: "ReservKit customer booking lookup page",
    title: "Customer lookup",
    body: "Customer-facing booking lookup and self-service entry point.",
  },
  {
    src: "/product-operator-login.png",
    alt: "ReservKit operator login page",
    title: "Operator access",
    body: "The operator workspace starts behind authenticated access.",
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
                Controlled beta access for rental and experience operators
              </div>
              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-navy sm:text-6xl">
                Direct booking software for operators who need fewer workarounds
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                ReservKit helps rental, tour, and experience businesses take direct bookings, collect Stripe payments, send waivers, and run day-of operations from one focused workspace.
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
                  href="#product-proof"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:text-navy"
                >
                  See product evidence
                </Link>
              </div>
              <div className="mt-6 grid gap-2 text-sm text-slate-600 sm:grid-cols-3">
                {["Invite-only beta", "Temporary 0% beta fee", "Stripe-powered payments"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[var(--color-border)] bg-white p-3 shadow-2xl shadow-navy/10">
              <Image
                src="/product-public-booking.png"
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
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">What the beta is proving</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                The first beta wave is focused on real operator workflows: getting bookable, taking payment, collecting waiver evidence, and understanding what happened after the booking.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {featureRows.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.heading} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
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

        <section id="product-proof" className="bg-[var(--color-surface)] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Real product evidence, not placeholder hype</h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                  These images come from the current ReservKit product surface and production test organization, with no private customer data.
                </p>
              </div>
              <TrackedLink
                href={BETA_URL}
                event="beta_access_cta_clicked"
                properties={{ location: "product_proof" }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-light"
              >
                {PRIMARY_CTA_LABEL} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </TrackedLink>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {proofImages.map((image) => (
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

        <section id="how-it-works" className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">How the beta path works</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {operatorWorkflows.map((workflow, index) => (
                <article key={workflow.title} className="rounded-2xl border-l-4 border-amber bg-[var(--color-surface)] p-6">
                  <div className="text-sm font-extrabold text-amber-dark">0{index + 1}</div>
                  <h3 className="mt-3 text-xl font-bold text-navy">{workflow.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{workflow.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-[var(--color-surface)] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Beta first, transparent pricing after</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Beta access is temporary and invite-only. Public pricing stays visible so operators know what changes after beta.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {pricingTiers.map((tier) => (
                <article
                  key={tier.name}
                  className={`rounded-2xl p-6 ${tier.highlight ? "bg-navy text-white ring-2 ring-amber" : "border border-[var(--color-border)] bg-white"}`}
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
            <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-white p-6">
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
              <ShieldCheck className="mx-auto h-10 w-10 text-amber-dark" aria-hidden="true" />
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy">Built for careful beta onboarding</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                We are inviting a small number of operators first so setup, payment confidence, and support loops stay manageable.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Operators keep their own Stripe account relationship.",
                "ReservKit platform fee is operator-absorbed by default.",
                "Beta feedback is reviewed before broader launch decisions.",
                "Support is focused on real booking workflows, not vanity demos.",
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
            <h2 className="text-3xl font-bold tracking-tight text-white">Want to try ReservKit in beta?</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Tell us what you operate and how booking works today. We will follow up if your business is a good fit for this beta wave.
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
            <Image src="/logo.png" alt="ReservKit" width={100} height={28} className="h-7 w-auto object-contain" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Direct booking, payments, waivers, and operator tools for rental and experience businesses.
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
