import { ArrowRight } from "lucide-react";
import { TrackedLink } from "./TrackedLink";
import {
  BETA_URL,
  PRIMARY_CTA_LABEL,
  betaPricingCallout,
  enterpriseTier,
  freePlanFootnote,
  pricingFinePrint,
  pricingTiers,
} from "../lib/marketing";

type PricingSectionProps = {
  compact?: boolean;
};

export function PricingSection({ compact = false }: PricingSectionProps) {
  return (
    <section id="pricing" className={compact ? "" : "bg-white px-6 py-20"}>
      <div className={compact ? "" : "mx-auto max-w-6xl"}>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Pricing you can read without booking a demo.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Every plan includes bookings, payments, waivers, and staff access. Pick the one that fits your volume.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative rounded-2xl p-6 ${
                tier.highlight
                  ? "border-2 border-amber bg-navy text-white shadow-xl shadow-navy/15"
                  : "border border-[var(--color-border)] bg-[var(--color-surface)]"
              }`}
            >
              {tier.highlight ? (
                <span className="mb-4 inline-flex rounded-full bg-amber px-3 py-1 text-xs font-bold text-navy">
                  Recommended
                </span>
              ) : null}
              <h3 className={`text-lg font-bold ${tier.highlight ? "text-white" : "text-navy"}`}>{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className={`text-4xl font-extrabold ${tier.highlight ? "text-white" : "text-navy"}`}>
                  {tier.price}
                </span>
                <span className={tier.highlight ? "text-slate-300" : "text-slate-500"}>{tier.period}</span>
              </div>
              <p className={`mt-4 text-sm font-semibold ${tier.highlight ? "text-amber" : "text-amber-dark"}`}>
                {tier.fee}
              </p>
              <p className={`mt-1 text-sm ${tier.highlight ? "text-slate-300" : "text-slate-500"}`}>
                {tier.volume}
              </p>
              <p className={`mt-5 min-h-12 text-sm leading-relaxed ${tier.highlight ? "text-slate-300" : "text-slate-600"}`}>
                {tier.description}
              </p>
              <TrackedLink
                href={BETA_URL}
                event="beta_access_cta_clicked"
                properties={{ location: `pricing_${tier.name.toLowerCase()}` }}
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                  tier.highlight
                    ? "bg-amber text-navy hover:bg-amber-dark"
                    : "bg-white text-navy ring-1 ring-[var(--color-border)] hover:ring-amber/50"
                }`}
              >
                {PRIMARY_CTA_LABEL} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </TrackedLink>
            </article>
          ))}

          <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <h3 className="text-lg font-bold text-navy">{enterpriseTier.name}</h3>
            <div className="mt-4 text-4xl font-extrabold text-navy">{enterpriseTier.price}</div>
            <p className="mt-4 text-sm font-semibold text-amber-dark">{enterpriseTier.fee}</p>
            <p className="mt-1 text-sm text-slate-500">{enterpriseTier.volume}</p>
            <p className="mt-5 min-h-12 text-sm leading-relaxed text-slate-600">{enterpriseTier.description}</p>
            <TrackedLink
              href={BETA_URL}
              event="beta_access_cta_clicked"
              properties={{ location: "pricing_enterprise" }}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy ring-1 ring-[var(--color-border)] transition-colors hover:ring-amber/50"
            >
              {PRIMARY_CTA_LABEL} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </TrackedLink>
          </article>
        </div>

        <div className="mt-8 rounded-2xl border border-amber/30 bg-amber-light p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-bold text-navy">Currently in guided beta.</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{betaPricingCallout}</p>
            </div>
            <TrackedLink
              href={BETA_URL}
              event="beta_access_cta_clicked"
              properties={{ location: "pricing_beta_callout" }}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold text-navy shadow-sm transition-colors hover:bg-amber-dark"
            >
              {PRIMARY_CTA_LABEL} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </TrackedLink>
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-600">{freePlanFootnote}</p>
        <p className="mt-4 max-w-4xl text-xs leading-relaxed text-slate-500">{pricingFinePrint}</p>
      </div>
    </section>
  );
}
