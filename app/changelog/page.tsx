import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/PageShell";

export const metadata: Metadata = {
  title: "Product Updates",
  description: "Recent ReservKit product updates for booking, payments, waivers, and operator workflows.",
  alternates: { canonical: "https://reservkit.com/changelog" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ReservKit", item: "https://reservkit.com" },
    { "@type": "ListItem", position: 2, name: "Changelog", item: "https://reservkit.com/changelog" },
  ],
};

type ReleaseTag = "Added" | "Changed" | "Fixed" | "Security";

interface Release {
  version: string;
  date: string;
  items: { tag: ReleaseTag; text: string }[];
}

const releases: Release[] = [
  {
    version: "Production readiness",
    date: "May 2026",
    items: [
      { tag: "Changed", text: "Updated public pricing to Starter, Growth, Pro, Enterprise, and Free." },
      { tag: "Changed", text: "Repositioned the public site around direct bookings, operator-owned Stripe payments, waivers, and day-of operations." },
      { tag: "Fixed", text: "Removed competitor comparison pages and redirected those URLs to the homepage." },
      { tag: "Fixed", text: "Added content checks that block stale pricing, open-signup CTAs, and removed comparison-page copy." },
    ],
  },
  {
    version: "Booking trust polish",
    date: "May 2026",
    items: [
      { tag: "Changed", text: "Kept price summary visible in the guest-details step and removed the extra Stripe review page." },
      { tag: "Changed", text: "Improved selected-time and guest-count sticky bar behavior on mobile." },
      { tag: "Changed", text: "Added clearer call-to-book cutoff copy for activities that cannot be booked online." },
      { tag: "Fixed", text: "Improved step navigation so guests return to the top of the next booking step." },
    ],
  },
  {
    version: "Waiver and operator polish",
    date: "May 2026",
    items: [
      { tag: "Changed", text: "Made drawn signature fields optional when configured and required only when enabled." },
      { tag: "Changed", text: "Added drawn-signature evidence display for signed waiver records." },
      { tag: "Fixed", text: "Closed mobile navigation after route changes." },
      { tag: "Fixed", text: "Clarified Availability and Activity Details wording for operators." },
    ],
  },
];

const tagColors: Record<ReleaseTag, string> = {
  Added: "bg-green-100 text-green-800",
  Changed: "bg-blue-100 text-blue-800",
  Fixed: "bg-amber-100 text-amber-800",
  Security: "bg-red-100 text-red-800",
};

export default function Changelog() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-navy mb-2">Product updates</h1>
          <p className="text-lg text-slate-600">
            Recent product and website changes that affect operators evaluating ReservKit.
          </p>
        </div>

        <div className="space-y-12">
          {releases.map((release, idx) => (
            <article key={release.version}>
              <div className="flex items-baseline gap-4 mb-5">
                <h2 className="text-xl font-bold text-navy">{release.version}</h2>
                <span className="text-sm text-slate-500">{release.date}</span>
                {idx === 0 && (
                  <span className="rounded-full bg-amber px-2.5 py-0.5 text-xs font-bold text-navy">
                    Latest
                  </span>
                )}
              </div>
              <ul className="space-y-2.5 pl-0">
                {release.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 shrink-0 rounded px-1.5 py-0.5 text-xs font-semibold ${tagColors[item.tag]}`}
                    >
                      {item.tag}
                    </span>
                    <span className="text-sm text-slate-700 leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
              {idx < releases.length - 1 && (
                <div className="mt-12 border-b border-[var(--color-border)]" />
              )}
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] p-8 text-center">
          <h2 className="text-lg font-bold text-navy mb-2">Have a workflow request?</h2>
          <p className="text-sm text-slate-600 mb-4">
            Send the workflow you need to support during setup.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
            >
              View Roadmap
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-2.5 text-sm font-semibold text-navy hover:bg-slate-50 transition-colors"
            >
              Read the Blog
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-2.5 text-sm font-semibold text-navy hover:bg-slate-50 transition-colors"
            >
              Documentation
            </Link>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          <Link href="/" className="text-amber hover:text-amber-dark transition-colors">
            ← Back to ReservKit
          </Link>
        </p>
      </main>
    </PageShell>
  );
}
