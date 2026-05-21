import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Rss } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { TrackedLink } from "../components/TrackedLink";
import { BETA_URL, POSITIONING_LINE, PRIMARY_CTA_LABEL, pricingSummary } from "../lib/marketing";

export const metadata: Metadata = {
  title: "Blog — Rental Operator Guides",
  description:
    "Practical notes for rental operators and experience businesses evaluating direct booking, Stripe payments, waivers, and day-of workflows.",
  alternates: { canonical: "https://reservkit.com/blog" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ReservKit", item: "https://reservkit.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://reservkit.com/blog" },
  ],
};

const articles = [
  {
    id: "first-online-booking",
    tag: "Getting Started",
    date: "May 2026",
    readTime: "4 min read",
    title: "Your first ReservKit setup, start to finish",
    intro:
      "The first setup session focuses on one working booking link. Here is what that looks like: Stripe, one activity, waivers, and a test booking before you share anything publicly.",
    content: [
      POSITIONING_LINE + " Guided access keeps onboarding hands-on while operators set up the first booking flow.",
      "The first setup pass usually covers organization details, one or two activities, availability, Stripe Connect, waiver requirements, and the public booking link. Payments go through the operator's connected Stripe account, while ReservKit applies the plan's platform fee behind the scenes.",
      "Approved beta operators receive 0% ReservKit platform fees for 30 days. Public plan pricing is documented plainly: " + pricingSummary,
      "If you are evaluating ReservKit, the best next step is to request beta access with your business type, current booking workflow, and monthly booking volume. That gives us enough context to plan the first setup path.",
    ],
    relatedLinks: [
      { href: "/docs/getting-started", label: "Getting started guide" },
      { href: "/docs/payments", label: "Payments & Stripe setup" },
    ],
  },
  {
    id: "direct-booking-fees",
    tag: "Business",
    date: "May 2026",
    readTime: "5 min read",
    title: "The real cost of your booking platform and how to calculate it",
    intro:
      "Monthly subscription, platform fee, Stripe processing, and volume limits all hit differently depending on how many bookings you take. Run the actual math before you commit.",
    content: [
      "The cleanest way to compare booking tools is to write down the monthly subscription, the per-booking platform fee, payment processing fees, booking volume limits, and any required add-ons. Some platforms publish this clearly; some require a sales conversation or custom quote.",
      "ReservKit's public pricing is intentionally direct. Free is $0/mo + 4% with 10 bookings/month. Starter is $79/mo + 2.5% with 100 bookings/month. Growth is $149/mo + 2% with unlimited bookings. Pro is $299/mo + 1.5% with unlimited bookings. Enterprise is custom.",
      "Stripe processing is separate from ReservKit's platform fee. Tips are treated as operator revenue and are not marked up by ReservKit. Deposits are charged on the amount collected at checkout, not the full future balance.",
      "The most important comparison is operational fit: whether the customer booking flow, operator dashboard, waiver workflow, and payment setup match the way your business already works.",
    ],
    relatedLinks: [
      { href: "/docs/payments", label: "Payments & fee documentation" },
      { href: "/#pricing", label: "ReservKit pricing" },
    ],
  },
  {
    id: "switching-tools",
    tag: "Migration",
    date: "May 2026",
    readTime: "4 min read",
    title: "Before you switch booking software, answer these five questions",
    intro:
      "The wrong time to find out your migration plan has gaps is two weeks before your busy season. Verify the practical details before moving active bookings.",
    content: [
      "Before switching tools, confirm the practical details: how activities map over, how availability is rebuilt, where customer records live, what happens to historical bookings, and how payment disputes or refunds are handled in the old system.",
      "ReservKit includes a Migration Center V1 for structured imports. It is designed to make the first migration pass easier, while still leaving room for hands-on review before operators go live.",
      "If you currently use another booking platform, include that in your beta request. The first ReservKit setup should solve a real workflow problem without asking the operator to gamble with active bookings.",
    ],
    relatedLinks: [
      { href: "/docs/getting-started", label: "Getting started guide" },
      { href: "/docs/payments", label: "Payments & fee documentation" },
    ],
  },
  {
    id: "published-pricing",
    tag: "Pricing",
    date: "May 2026",
    readTime: "3 min read",
    title: "Why we show our pricing on the website",
    intro:
      "Most booking platforms will not show you a number until you have talked to a salesperson. We think that is backwards.",
    content: [
      "Operators should be able to estimate software cost before they change their calendar, payment flow, and staff process. Published pricing makes that decision simpler.",
      "ReservKit uses a monthly subscription plus a per-booking platform fee that decreases as your plan goes up. Stripe processing is separate, and operators use their own Stripe account.",
      "Transparent pricing does not mean every operator has the same implementation path. Larger enterprise rollouts may still need custom migration or support terms, but the core pricing model should be visible upfront.",
    ],
    relatedLinks: [
      { href: "/pricing", label: "See ReservKit pricing" },
      { href: "/docs/payments", label: "Payments & fee documentation" },
    ],
  },
];

export default function Blog() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-12 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-surface)]">
            <Rss className="h-5 w-5 text-navy" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-navy">Operator notes.</h1>
            <p className="mt-0.5 text-sm text-slate-500">Practical writing for rental and experience operators evaluating direct booking, waivers, and payment setup. No fluff.</p>
          </div>
        </div>

        <div className="space-y-16">
          {articles.map((article, index) => (
            <article
              key={article.id}
              id={article.id}
              className={index > 0 ? "border-t border-[var(--color-border)] pt-16" : ""}
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-amber/10 px-3 py-1 text-xs font-semibold text-amber">
                  {article.tag}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  {article.readTime}
                </div>
                <span className="text-xs text-slate-400">{article.date}</span>
              </div>

              <h2 className="mb-3 text-2xl font-bold text-navy">{article.title}</h2>
              <p className="mb-6 text-base font-medium leading-relaxed text-slate-700">
                {article.intro}
              </p>

              <div className="space-y-4">
                {article.content.map((para) => (
                  <p key={para} className="leading-relaxed text-slate-600">
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-4 border-t border-[var(--color-border)] pt-5">
                {article.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-amber hover:underline"
                  >
                    {link.label} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-500">
          <Link href="/changelog" className="transition-colors hover:text-navy">
            Changelog →
          </Link>
          <Link href="/roadmap" className="transition-colors hover:text-navy">
            Roadmap →
          </Link>
        </div>

        <div className="mt-8 rounded-2xl bg-navy p-8 text-center">
          <h2 className="mb-2 text-xl font-bold text-white">Evaluating ReservKit?</h2>
          <p className="mb-5 text-sm text-slate-400">
            Tell us what you run, how bookings work today, and what you need before going live.
          </p>
          <TrackedLink
            href={BETA_URL}
            event="beta_access_cta_clicked"
            properties={{ location: "blog_footer" }}
            className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-amber-dark"
          >
            {PRIMARY_CTA_LABEL} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </TrackedLink>
        </div>
      </main>
    </PageShell>
  );
}
