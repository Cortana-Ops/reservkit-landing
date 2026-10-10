import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { PageShell } from "./PageShell";
import { TrackedLink } from "./TrackedLink";
import { PRIMARY_CTA_EVENT, PRIMARY_CTA_LABEL, PRIMARY_CTA_URL } from "../lib/marketing";

export type ComparisonPageConfig = {
  platform: string;
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sourceUrl: string;
  sourceLabel: string;
  competitorStrengths: string[];
  reservkitStrengths: string[];
  chooseCompetitorIf: string[];
  chooseReservKitIf: string[];
  checkpoints: Array<{ title: string; body: string }>;
  faqs: Array<{ title: string; body: string }>;
};

export function ComparisonPage({ config }: { config: ComparisonPageConfig }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.title,
      acceptedAnswer: { "@type": "Answer", text: faq.body },
    })),
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        <section className="bg-[var(--color-surface)] px-6 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-amber-dark">{config.eyebrow}</p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-normal text-navy sm:text-5xl">{config.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">{config.intro}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <TrackedLink href={PRIMARY_CTA_URL} event={PRIMARY_CTA_EVENT} properties={{ location: `compare_${config.platform.toLowerCase().replaceAll(" ", "_")}` }} className="inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3 font-bold text-navy hover:bg-amber-dark">
                  {PRIMARY_CTA_LABEL} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </TrackedLink>
                <Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-navy hover:border-amber">
                  Compare ReservKit plans
                </Link>
              </div>
            </div>
            <figure>
              <Image src="/product-clearwake-light-bookings-dashboard.png" alt="ReservKit bookings workspace with sample reservation and payment status data" width={1600} height={882} priority sizes="(max-width: 1023px) 100vw, 600px" className="h-auto w-full rounded-lg border border-slate-200 bg-white" />
              <figcaption className="mt-3 text-sm text-slate-600">Real ReservKit product screen with fictional demo records.</figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-2">
              {[
                { title: `What ${config.platform} is strong at`, items: config.competitorStrengths },
                { title: "What ReservKit is built to do differently", items: config.reservkitStrengths },
              ].map((group) => (
                <article key={group.title} className="border-t-4 border-navy bg-[var(--color-surface)] p-6">
                  <h2 className="text-xl font-bold text-navy">{group.title}</h2>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" /><span>{item}</span></li>)}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              Competitor information reviewed {config.updated}. Verify current details directly with the provider: <a href={config.sourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy underline underline-offset-4">{config.sourceLabel} <ExternalLink className="inline h-3 w-3" aria-hidden="true" /></a>.
            </p>
          </div>
        </section>

        <section className="bg-navy px-6 py-16 text-white">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Choose {config.platform} when</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
                {config.chooseCompetitorIf.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Choose ReservKit when</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
                {config.chooseReservKitIf.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-navy">Run the same proof before switching</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {config.checkpoints.map((item) => <article key={item.title} className="border-l-2 border-amber pl-5"><h3 className="font-bold text-navy">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-surface)] px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-navy">Comparison FAQ</h2>
            <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
              {config.faqs.map((faq) => <article key={faq.title} className="py-6"><h3 className="font-bold text-navy">{faq.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.body}</p></article>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
              <Link href="/compare" className="text-navy underline underline-offset-4">View every comparison</Link>
              <Link href="/switch-rental-booking-software" className="text-navy underline underline-offset-4">Plan a safe migration</Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
