"use client";

import { useMemo, useState } from "react";

const tiers = [
  { name: "Starter", monthly: 69, rate: 0.015, cap: null },
  { name: "Growth", monthly: 199, rate: 0.01, cap: null },
  { name: "Pro", monthly: 399, rate: 0.005, cap: 900 },
];

function money(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

export function PricingEstimator() {
  const [monthlyVolume, setMonthlyVolume] = useState(25000);
  const estimates = useMemo(() => tiers.map((tier) => {
    const bookingFee = Math.min(monthlyVolume * tier.rate, tier.cap ?? Number.POSITIVE_INFINITY);
    return { ...tier, bookingFee, total: tier.monthly + bookingFee };
  }), [monthlyVolume]);
  const lowest = Math.min(...estimates.map((tier) => tier.total));

  return (
    <section className="mt-16 border-y border-slate-200 py-12" aria-labelledby="cost-estimator-title">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase text-amber-dark">Cost estimator</p>
          <h2 id="cost-estimator-title" className="mt-3 text-3xl font-bold text-navy">See the platform cost at your volume</h2>
          <label htmlFor="monthly-volume" className="mt-6 block text-sm font-semibold text-slate-700">Monthly eligible booking subtotal</label>
          <div className="mt-2 flex items-center border border-slate-300 bg-white px-4 py-3 focus-within:border-amber">
            <span className="text-slate-500">$</span>
            <input id="monthly-volume" type="number" min="0" step="1000" value={monthlyVolume} onChange={(event) => setMonthlyVolume(Math.max(0, Number(event.target.value) || 0))} className="min-w-0 flex-1 bg-transparent px-2 text-lg font-bold text-navy outline-none" />
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate-500">Estimate includes the ReservKit subscription and booking fee. Stripe processing, taxes, tips, operator service fees, and refundable damage deposits are excluded.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <thead><tr className="border-b border-slate-300 text-slate-500"><th className="px-3 py-3 font-semibold">Plan</th><th className="px-3 py-3 font-semibold">Subscription</th><th className="px-3 py-3 font-semibold">Booking fee</th><th className="px-3 py-3 font-semibold">Estimated total</th></tr></thead>
            <tbody>{estimates.map((tier) => <tr key={tier.name} className="border-b border-slate-200"><th className="px-3 py-4 font-bold text-navy">{tier.name}{tier.total === lowest ? <span className="ml-2 bg-emerald-100 px-2 py-1 text-xs text-emerald-800">Lowest cost</span> : null}</th><td className="px-3 py-4 text-slate-600">{money(tier.monthly)}</td><td className="px-3 py-4 text-slate-600">{money(tier.bookingFee)}</td><td className="px-3 py-4 font-bold text-navy">{money(tier.total)}/mo</td></tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
