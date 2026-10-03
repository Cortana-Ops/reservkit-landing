import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageShell } from "./PageShell";
import { TrackedLink } from "./TrackedLink";
import {
  PRIMARY_CTA_EVENT,
  PRIMARY_CTA_LABEL,
  PRIMARY_CTA_URL,
  pricingSummary,
  verticalFeatureGateNote,
} from "../lib/marketing";

type ContentItem = { title: string; body: string };
type RelatedLink = { href: string; label: string; description: string };

export type SeoProductPageConfig = {
  eventKey: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: { src: string; alt: string };
  bestFitTitle: string;
  bestFit: string[];
  problemTitle: string;
  problemBody: string;
  workflowTitle: string;
  workflow: ContentItem[];
  featureTitle: string;
  features: string[];
  proofTitle: string;
  proofBody: string;
  faqs: ContentItem[];
  related: RelatedLink[];
  ctaTitle: string;
  ctaBody: string;
};

export function SeoProductPage({ config }: { config: SeoProductPageConfig }) {
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
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-amber-dark">{config.eyebrow}</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl">{config.title}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{config.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <TrackedLink
                  href={PRIMARY_CTA_URL}
                  event={PRIMARY_CTA_EVENT}
                  properties={{ location: `${config.eventKey}_hero` }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber px-7 py-3.5 text-base font-bold text-navy transition-colors hover:bg-amber-dark"
                >
                  {PRIMARY_CTA_LABEL} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </TrackedLink>
                <Link href="/pricing" className="inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-navy hover:text-amber-dark">
                  See pricing <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-white shadow-xl shadow-navy/10">
              <Image src={config.image.src} alt={config.image.alt} width={1440} height={900} priority className="w-full object-cover object-top" />
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy">{config.problemTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{config.problemBody}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy">{config.bestFitTitle}</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {config.bestFit.map((item) => (
                  <li key={item} className="flex gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm leading-relaxed text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-navy px-6 py-16 text-white">
          <div className="mx-auto max-w-6xl">
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight">{config.workflowTitle}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {config.workflow.map((item, index) => (
                <article key={item.title} className="rounded-lg border border-white/15 bg-white/[0.06] p-5">
                  <p className="text-sm font-extrabold text-amber">0{index + 1}</p>
                  <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy">{config.featureTitle}</h2>
              <ul className="mt-6 space-y-3">
                {config.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-lg border border-amber/25 bg-amber-light p-4 text-sm leading-relaxed text-slate-700">{verticalFeatureGateNote}</p>
            </div>
            <aside className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h2 className="text-2xl font-bold text-navy">{config.proofTitle}</h2>
              <p className="mt-4 leading-relaxed text-slate-600">{config.proofBody}</p>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">{pricingSummary}</p>
              <Link href="/docs/getting-started" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-amber-dark">
                Review the setup guide <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </section>

        <section className="bg-[var(--color-surface)] px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tight text-navy">Common questions</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {config.faqs.map((faq) => (
                <article key={faq.title} className="rounded-lg border border-[var(--color-border)] bg-white p-5">
                  <h3 className="font-bold text-navy">{faq.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-navy">Related operator guides</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {config.related.map((link) => (
                <Link key={link.href} href={link.href} className="group rounded-lg border border-[var(--color-border)] p-5 transition-colors hover:border-amber">
                  <h3 className="font-bold text-navy group-hover:text-amber-dark">{link.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy px-6 py-16 text-center text-white">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">{config.ctaTitle}</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">{config.ctaBody}</p>
            <TrackedLink
              href={PRIMARY_CTA_URL}
              event={PRIMARY_CTA_EVENT}
              properties={{ location: `${config.eventKey}_footer` }}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-7 py-3.5 text-base font-bold text-navy transition-colors hover:bg-amber-dark"
            >
              {PRIMARY_CTA_LABEL} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </TrackedLink>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
