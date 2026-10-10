import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { createMarketingMetadata } from "../lib/metadata";

export const metadata = createMarketingMetadata({
  title: "Compare Booking Software for Tours, Activities & Rentals",
  description: "Compare ReservKit with FareHarbor, Peek Pro, Checkfront, and Rezdy using published pricing, operational fit, payments, support, and distribution criteria.",
  keywords: ["booking software comparison", "tour booking software comparison", "rental booking software alternatives"],
  path: "/compare",
});

const comparisons = [
  { href: "/fareharbor-alternative", name: "FareHarbor", body: "Compare a large, support-led platform with ReservKit's public pricing, Stripe Connect model, and guided first-flow migration." },
  { href: "/peek-pro-alternative", name: "Peek Pro", body: "Compare Peek's AI, marketing, and mobile ecosystem with ReservKit's focused operator workflow and transparent plans." },
  { href: "/checkfront-alternative", name: "Checkfront", body: "Compare flexible booking types, distribution, pricing structure, payments, waivers, and equipment workflows." },
  { href: "/rezdy-alternative", name: "Rezdy", body: "Compare distribution reach and tour operations with ReservKit's direct-booking, Stripe, waiver, and day-of tools." },
];

export default function ComparePage() {
  return (
    <PageShell>
      <main>
        <section className="bg-navy px-6 py-20 text-white">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase text-amber">Booking software comparisons</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-normal sm:text-5xl">Choose the system your operation can actually run</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">A useful comparison goes beyond a feature checklist. Test pricing, payment ownership, availability, mobile checkout, staff workflow, migration, support, and the exact booking path your customers will use.</p>
          </div>
        </section>
        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-5 md:grid-cols-2">
              {comparisons.map((item) => <article key={item.href} className="border-t-4 border-amber bg-[var(--color-surface)] p-6"><h2 className="text-2xl font-bold text-navy">ReservKit vs. {item.name}</h2><p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p><Link href={item.href} className="mt-5 inline-flex items-center gap-2 font-bold text-navy hover:text-amber-dark">Read the comparison <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></article>)}
            </div>
          </div>
        </section>
        <section className="bg-[var(--color-surface)] px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-navy">The minimum proof every platform should pass</h2>
            <ol className="mt-7 grid gap-5 sm:grid-cols-2">
              {["Create one real activity with the right capacity and availability.", "Complete the customer flow on a phone without scroll or checkout traps.", "Run a payment, cancellation, and refund under the written fee policy.", "Confirm staff can see payment, waiver, equipment, and arrival readiness."].map((item, index) => <li key={item} className="flex gap-4 border-b border-slate-200 pb-5"><span className="font-bold text-amber-dark">{index + 1}</span><span className="text-sm leading-relaxed text-slate-700">{item}</span></li>)}
            </ol>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
