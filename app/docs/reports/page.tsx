import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../components/PageShell";
import { BarChart3, TrendingUp, Filter, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Reports & Analytics",
  description: "Track revenue, booking volume, and guest counts in ReservKit. Filter by date range and export data for accounting.",
  alternates: { canonical: "https://reservkit.com/docs/reports" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ReservKit", item: "https://reservkit.com" },
    { "@type": "ListItem", position: 2, name: "Documentation", item: "https://reservkit.com/docs" },
    { "@type": "ListItem", position: 3, name: "Reports & Analytics", item: "https://reservkit.com/docs/reports" },
  ],
};

export default function Reports() {
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
          <span className="text-navy font-medium">Reports & Analytics</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-3xl font-bold text-navy mb-3">Reports & Analytics</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Understand your business performance at a glance. Track revenue, booking volume, and guest counts — and
            export everything for your accounting.
          </p>
          <p className="mt-3 text-sm text-amber font-medium">
            Reports availability follows your active plan.
          </p>
        </div>

        <div className="space-y-12">
          {/* Revenue */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Revenue reports</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                The Revenue report shows gross booking revenue (total charged at checkout before booking fee),
                booking fees paid, and net revenue for any date range you choose. Revenue is broken down by
                activity so you can see which products are driving the most income.
              </p>
              <p>
                Revenue figures reflect confirmed bookings only — cancelled bookings are excluded. Partial refunds
                are deducted from the reported revenue automatically, so the numbers match what hit your Stripe account.
              </p>
              <p>
                The monthly summary view gives you a quick year-to-date revenue picture useful for tax planning,
                forecasting, and comparing season-over-season performance.
              </p>
            </div>
          </section>

          {/* Booking volume */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Booking volume & guest counts</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                The Bookings report shows the total number of bookings and total guests served over any period. This
                is useful for capacity planning — understanding which activities are most popular, which days of
                the week are busiest, and how lead time varies by activity type.
              </p>
              <p>
                Each booking entry shows the activity, booking date, trip date, party size, revenue, and current
                status. You can sort and filter this list any way you need.
              </p>
            </div>
          </section>

          {/* Filtering */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <Filter className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Filtering by date range</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                All reports support custom date range filtering. Use the date picker at the top of the Reports page
                to set a start and end date. Preset shortcuts include &quot;This week,&quot; &quot;This month,&quot; &quot;Last month,&quot;
                &quot;This quarter,&quot; and &quot;This year.&quot;
              </p>
              <p>
                You can also filter by activity, booking status (confirmed, cancelled, checked in), and payment status.
                Combining filters lets you answer specific questions quickly — for example, &quot;how much revenue came from
                kayak rentals last June?&quot;
              </p>
            </div>
          </section>

          {/* Exporting */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <Download className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Exporting data</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                Any filtered report view can be exported to CSV. Click &quot;Export&quot; in the top-right of the report and
                choose which columns to include. The CSV file can be opened directly in Excel, Google Sheets, or imported
                into your accounting software.
              </p>
              <p>
                Exported booking data includes: booking ID, activity name, trip date, customer name, customer email,
                party size, gross revenue, booking fee, net revenue, payment status, and booking status.
              </p>
              <p>
                For tax purposes, your accountant can request a full-year export that includes every completed transaction.
                ReservKit does not provide tax advice — consult your accountant for reporting requirements in your jurisdiction.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-16 border-t border-[var(--color-border)] pt-10">
          <h2 className="text-lg font-bold text-navy mb-5">Next steps</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/docs/staff"
              className="group rounded-xl border border-[var(--color-border)] p-5 hover:border-amber/40 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-navy group-hover:text-amber transition-colors mb-1">← Staff</p>
              <p className="text-sm text-slate-500">Invite your team, assign roles, and manage your crew&apos;s schedule.</p>
            </Link>
            <Link
              href="/docs/getting-started"
              className="group rounded-xl border border-[var(--color-border)] p-5 hover:border-amber/40 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-navy group-hover:text-amber transition-colors mb-1">Back to Getting Started →</p>
              <p className="text-sm text-slate-500">Review setup steps if you&apos;re just getting started.</p>
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
