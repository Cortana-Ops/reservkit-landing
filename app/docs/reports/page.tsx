import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../components/PageShell";
import { BarChart3, TrendingUp, Filter, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Reports & Analytics",
  description: "Track booking income, customer tips, booking volume, and guest counts in ReservKit. Filter by date range and export CSVs for review.",
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
            Understand your business performance at a glance. Track booking income, customer tips, booking volume,
            and guest counts — and export CSVs for review.
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
                Reports show paid booking income, customer tips, booking fees, active booking counts, and excluded
                cancelled or refunded records for the date range you choose. Activity views help you see which products
                are driving the most booked value.
              </p>
              <p>
                Customer tips are shown separately from booking income so owner revenue and staff gratuities do not
                get mixed together. Stripe paid income is also separated from offline or manual paid records.
              </p>
              <p>
                Reports are built for operational review, forecasting, and payout checks. They are not a replacement
                for Stripe, payroll, tax, or accounting records.
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
                Reports show active booking counts, active guest counts, average paid booking value, unpaid active
                bookings, cancellation trends, and activity performance for the reporting window you choose.
              </p>
              <p>
                The Operations tab includes status breakdown, occupancy, and cancellation-rate views. Reports also
                provide a link back to the matching booking records when you need the underlying booking list.
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
                to set a start and end date. Preset shortcuts include 7 Days, 30 Days, 90 Days, Ops Window, and
                12 Months.
              </p>
              <p>
                Reports use activity date. The Ops Window preset looks 90 days back and 30 days ahead so operators can
                review recent activity and near-future operational demand in one place.
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
                Matching report records can be exported to CSV. The CSV file can be opened in Excel or Google Sheets
                for review with your internal records.
              </p>
              <p>
                The main CSV export includes matching booking rows with booking ID, created date, status, guest count,
                booking total, customer name, customer email, and activity. Staff tip payout review has its own CSV export
                when the signed-in operator has permission to view staff tip totals.
              </p>
              <p>
                ReservKit does not provide tax advice or an accounting-grade ledger. Use Stripe, your accounting system,
                and your accountant for official reporting requirements.
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
