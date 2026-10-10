import { ArrowRight } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PricingSection } from "../components/PricingSection";
import { PricingEstimator } from "../components/PricingEstimator";
import { TrackedLink } from "../components/TrackedLink";
import { PRIMARY_CTA_URL, PRIMARY_CTA_EVENT, PRIMARY_CTA_LABEL } from "../lib/marketing";
import { createMarketingMetadata } from "../lib/metadata";

export const metadata = createMarketingMetadata({
  title: "Pricing",
  description:
    "Straightforward pricing for rental and experience operators: monthly subscription plus a per-booking fee that decreases as you grow. No demo required. Plans from $69 to $399/month.",
  path: "/pricing",
});

const faqs = [
  {
    q: "What is included in every plan?",
    a: "Every paid plan includes unlimited bookings. Starter includes the core booking page, Stripe Connect payments, customer records, and basic team tools. Growth adds waivers, broadcasts, reports, coupon codes, refundable damage deposits, priced add-ons, equipment, dynamic pricing, and named equipment-unit blocking. Pro adds API and white-label controls, a 0.5% booking fee, and a $900 monthly booking-fee cap.",
  },
  {
    q: "What does booking fee mean?",
    a: "ReservKit charges a percentage on each booking subtotal. Standard Stripe processing is charged separately by Stripe to your connected account. ReservKit's booking fee is not added as a separate customer checkout surcharge, and it decreases at higher plan tiers.",
  },
  {
    q: "Do paid plans include a trial?",
    a: "Yes. New Starter, Growth, and Pro subscriptions begin with a 14-day free trial. Cancel before the trial ends to prevent the first monthly subscription charge.",
  },
  {
    q: "Do I need my own Stripe account?",
    a: "Yes. ReservKit uses Stripe Connect to create the customer checkout flow and collect the plan-based booking fee where applicable. Stripe charges standard processing to your connected account and controls payout timing, disputes, and connected-account money movement.",
  },
  {
    q: "Can I cancel?",
    a: "Yes. Monthly plans can be cancelled from the billing portal to prevent future renewals. Paid subscription charges are non-refundable except for billing errors, duplicate charges, fraud, or legally required refunds. Enterprise agreements follow the cancellation terms in the signed agreement.",
  },
  {
    q: "Can I get help setting up?",
    a: "Yes. You can begin a 14-day full-access trial and request guided setup help with your first activity, Stripe setup, availability, waivers, and test booking.",
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
            A monthly subscription plus a booking fee that decreases as your plan goes up. Every number is here — no call required to see what it costs.
          </p>
        </div>

        <PricingSection compact />

        <PricingEstimator />

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
            Use the 14-day full-access trial to build and test your first booking flow, then choose the plan that fits your operation.
          </p>
          <TrackedLink
            href={PRIMARY_CTA_URL}
            event={PRIMARY_CTA_EVENT}
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
