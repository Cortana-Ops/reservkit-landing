import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PricingSection } from "../components/PricingSection";
import { TrackedLink } from "../components/TrackedLink";
import { BETA_URL, PRIMARY_CTA_LABEL } from "../lib/marketing";

export const metadata: Metadata = {
  title: "Pricing — ReservKit",
  description:
    "Straightforward pricing for rental and experience operators — monthly subscription plus a per-booking fee that decreases as you grow. No demo required. Plans from $0 to $299/month.",
  alternates: { canonical: "https://reservkit.com/pricing" },
};

const faqs = [
  {
    q: "What is included in every plan?",
    a: "All plans include the booking page, Stripe Connect payments, digital waivers, staff portal, check-in manifest, and revenue reports. Volume and platform fee percentage are what change.",
  },
  {
    q: "What does platform fee mean?",
    a: "ReservKit charges a percentage on each booking subtotal. This is separate from Stripe processing fees. At higher plan tiers, the ReservKit platform fee decreases.",
  },
  {
    q: "Do I need my own Stripe account?",
    a: "Yes. ReservKit uses Stripe Connect, which means payments go directly to your Stripe account. You control your payout schedule and customer relationship.",
  },
  {
    q: "Can I cancel?",
    a: "Yes. Monthly plans can be cancelled from the billing portal. Enterprise agreements follow the cancellation terms in the signed agreement.",
  },
  {
    q: "What is the beta offer?",
    a: "Approved beta operators get 0% ReservKit platform fees for 30 days. Stripe processing still applies. After that, you choose the plan that fits your volume.",
  },
];

export default function PricingPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Pricing you can actually read.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            A monthly subscription plus a per-booking platform fee that decreases as your plan goes up. No features hidden behind a sales demo.
          </p>
        </div>

        <PricingSection compact />

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-navy">Pricing FAQ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.q} className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
                <h3 className="font-bold text-navy">{faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl bg-navy p-8 text-center">
          <h2 className="text-2xl font-bold text-white">Ready to price your first booking flow?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
            Tell us what you operate and how many bookings you handle today. We will help map the right setup path.
          </p>
          <TrackedLink
            href={BETA_URL}
            event="beta_access_cta_clicked"
            properties={{ location: "pricing_footer" }}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold text-navy transition-colors hover:bg-amber-dark"
          >
            {PRIMARY_CTA_LABEL} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </TrackedLink>
        </section>
      </main>
    </PageShell>
  );
}
