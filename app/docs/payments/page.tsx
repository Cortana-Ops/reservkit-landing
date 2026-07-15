import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../components/PageShell";
import { CreditCard, RefreshCcw, DollarSign, Tag } from "lucide-react";
import { enterpriseTier, pricingTiers } from "../../lib/marketing";

export const metadata: Metadata = {
  title: "Payments",
  description:
    "Connect Stripe, set pricing and deposits, issue refunds, and understand ReservKit's current booking fee structure.",
  alternates: { canonical: "https://reservkit.com/docs/payments" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ReservKit", item: "https://reservkit.com" },
    { "@type": "ListItem", position: 2, name: "Documentation", item: "https://reservkit.com/docs" },
    { "@type": "ListItem", position: 3, name: "Payments", item: "https://reservkit.com/docs/payments" },
  ],
};

const feeTable = [
  ...pricingTiers.map((tier) => ({
    plan: tier.name,
    price: `${tier.price}${tier.period}`,
    fee: tier.fee,
    bookings: tier.volume,
  })),
  {
    plan: enterpriseTier.name,
    price: enterpriseTier.price,
    fee: enterpriseTier.fee,
    bookings: enterpriseTier.volume,
  },
];

export default function Payments() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/docs" className="hover:text-navy transition-colors">Documentation</Link>
          <span>/</span>
          <span className="text-navy font-medium">Payments</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-3xl font-bold text-navy mb-3">Payments</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            ReservKit uses Stripe Connect to process payments. Money flows directly to your Stripe account —
            ReservKit deducts a small booking fee per transaction. No monthly billing required on the free plan.
          </p>
        </div>

        <div className="space-y-12">
          {/* Stripe Connect */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Connecting Stripe</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                Go to Billing and click &quot;Connect Stripe.&quot; You&apos;ll be redirected to Stripe&apos;s onboarding
                flow where you can create a new Stripe account or connect an existing one.
              </p>
              <p>
                ReservKit uses Stripe Connect Standard. This means each business owner has their own Stripe account
                and receives payouts directly. ReservKit collects the booking fee automatically at checkout — you
                never need to manually split payments or transfer funds.
              </p>
              <p>
                Once connected, your Stripe dashboard will show a &quot;Connected account&quot; from ReservKit. You can
                disconnect and reconnect Stripe from Billing. Existing bookings and their
                associated charges are not affected.
              </p>
              <p>
                <strong className="text-navy">Important:</strong>{" "}Stripe requires your business to be based in a
                supported country. Payouts to your bank account happen on Stripe&apos;s standard schedule (typically
                2 business days after a charge). Stripe&apos;s own processing fee (2.9% + 30¢ per transaction) is
                separate from the ReservKit booking fee and is deducted by Stripe directly.
              </p>
            </div>
          </section>

          {/* Pricing & Deposits */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Pricing & Deposits</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                Set a base price per guest on each activity&apos;s Pricing tab. You can also configure a deposit
                amount — if a deposit is set, customers pay only the deposit amount at booking and the remaining
                balance is collected separately (e.g., on arrival).
              </p>
              <p>
                The booking fee is calculated on the total amount charged at checkout. If you collect a $50 deposit
                on a $200 activity, the booking fee applies to the $50 charged, not the full $200.
              </p>
              <p>
                Tip: customers can also tip your business at checkout. Tips go directly to your Stripe account and
                are not subject to the booking fee.
              </p>
            </div>
          </section>

          {/* Booking fees */}
          <section>
            <h2 className="text-xl font-bold text-navy mb-4">Booking fee breakdown</h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              The booking fee is a percentage of each booking&apos;s total charged amount. It&apos;s automatically
              deducted at checkout — nothing you need to configure.
            </p>
            <div className="grid gap-3 md:hidden">
              {feeTable.map((row) => (
                <div key={row.plan} className="rounded-xl border border-[var(--color-border)] bg-white p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-navy">{row.plan}</p>
                      <p className="mt-1 text-sm text-slate-500">{row.price}</p>
                    </div>
                    <p className="text-right text-sm font-semibold text-amber">{row.fee}</p>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{row.bookings}</p>
                </div>
              ))}
            </div>
            <div className="hidden overflow-x-auto rounded-2xl border border-[var(--color-border)] md:block">
              <table className="min-w-[42rem] text-sm">
                <thead>
                  <tr className="bg-[var(--color-surface)] border-b border-[var(--color-border)]">
                    <th className="text-left px-4 py-3 font-semibold text-navy">Plan</th>
                    <th className="text-left px-4 py-3 font-semibold text-navy">Monthly cost</th>
                    <th className="text-left px-4 py-3 font-semibold text-navy">Booking fee</th>
                    <th className="text-left px-4 py-3 font-semibold text-navy">Booking volume</th>
                  </tr>
                </thead>
                <tbody>
                  {feeTable.map((row, i) => (
                    <tr key={row.plan} className={i < feeTable.length - 1 ? "border-b border-[var(--color-border)]" : ""}>
                      <td className="px-4 py-3 font-medium text-navy">{row.plan}</td>
                      <td className="px-4 py-3 text-slate-600">{row.price}</td>
                      <td className="px-4 py-3 font-semibold text-amber">{row.fee}</td>
                      <td className="px-4 py-3 text-slate-600">{row.bookings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-3">
              Stripe&apos;s standard processing fee (2.9% + 30¢) applies in addition to the booking fee and is
              charged by Stripe directly.
            </p>
          </section>

          {/* Refunds */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <RefreshCcw className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Issuing refunds</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                Full and partial refunds are issued from the Bookings page. Open the booking, click &quot;Refund,&quot;
                and enter the amount to refund. For a full refund, the full charged amount is returned to the
                customer&apos;s payment method within 5–10 business days.
              </p>
              <p>
                Partial refunds let you refund any amount up to the original charge. This is useful when you want
                to keep the deposit or apply a cancellation fee while returning the remainder.
              </p>
              <p>
                When you issue a refund, the booking fee is not automatically returned. Stripe&apos;s own processing
                fee is also non-refundable per Stripe&apos;s terms. If you process a large volume of refunds, contact
                ReservKit support to discuss your situation.
              </p>
            </div>
          </section>

          {/* Coupons */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <Tag className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Coupon codes</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                Create discount coupon codes from Promo Codes. Coupons can be a fixed dollar amount or
                percentage off. You can set a maximum number of uses, an expiration date, or restrict the coupon
                to specific activities.
              </p>
              <p>
                Customers enter the coupon code on the checkout page. The discount is applied to the total before
                the booking fee is calculated. Coupon redemptions are tracked in the Coupons dashboard so you can
                see usage at a glance.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-16 border-t border-[var(--color-border)] pt-10">
          <h2 className="text-lg font-bold text-navy mb-5">Next steps</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/docs/getting-started"
              className="group rounded-xl border border-[var(--color-border)] p-5 hover:border-amber/40 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-navy group-hover:text-amber transition-colors mb-1">← Getting Started</p>
              <p className="text-sm text-slate-500">Back to account setup and first activity creation.</p>
            </Link>
            <Link
              href="/docs/waivers"
              className="group rounded-xl border border-[var(--color-border)] p-5 hover:border-amber/40 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-navy group-hover:text-amber transition-colors mb-1">Waivers →</p>
              <p className="text-sm text-slate-500">Collect digital liability waivers from every guest.</p>
            </Link>
          </div>
          <div className="mt-6">
            <Link href="/docs" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-navy transition-colors">
              ← Back to all documentation
            </Link>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
