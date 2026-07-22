import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../components/PageShell";
import { CalendarDays, Clock, X, CheckSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Bookings & Availability",
  description: "Manage your availability calendar, time slots, cancellations, and check-in process in ReservKit.",
  alternates: { canonical: "https://reservkit.com/docs/bookings-availability" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ReservKit", item: "https://reservkit.com" },
    { "@type": "ListItem", position: 2, name: "Documentation", item: "https://reservkit.com/docs" },
    { "@type": "ListItem", position: 3, name: "Bookings & Availability", item: "https://reservkit.com/docs/bookings-availability" },
  ],
};

export default function BookingsAvailability() {
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
          <span className="text-navy font-medium">Bookings & Availability</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-3xl font-bold text-navy mb-3">Bookings & Availability</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Control when your activities are available, manage your calendar, and handle the full booking lifecycle from
            confirmation to check-in.
          </p>
        </div>

        <div className="space-y-12">
          {/* Setting availability */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <CalendarDays className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Setting availability windows</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                Each activity has its own availability schedule. Go to Activities → select an activity → Availability tab.
                You can set recurring weekly schedules (e.g., Tuesday through Sunday, 8 AM–5 PM) or create one-off availability
                for special events.
              </p>
              <p>
                The availability window defines the outer bounds of when bookings can start. Within that window, ReservKit
                automatically generates time slots based on your activity duration and the buffer time you configure between
                sessions. A 2-hour activity with a 30-minute buffer in a 9 AM–5 PM window will show slots at 9:00, 11:30,
                2:00, and 4:30 — with the last slot ending at or before 5 PM.
              </p>
              <p>
                You can adjust generated slots and create manual slots for special cases without rebuilding the whole activity.
                Public availability reflects the slots that are actually bookable.
              </p>
            </div>
          </section>

          {/* Managing time slots */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Managing time slots</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                Time slots are auto-generated from your availability settings, but you can also create manual slots for
                special cases. The calendar view (Calendar tab in the sidebar) shows all slots across all activities
                in a single view, color-coded by activity.
              </p>
              <p>
                Each slot has a capacity limit. Set the maximum number of guests allowed per slot on the activity&apos;s Pricing tab.
                When a slot is fully booked, it&apos;s automatically removed from the public booking page — no overbooking is possible.
              </p>
              <p>
                Staff can create bookings manually on behalf of customers through the Bookings page. Manual bookings bypass
                the public payment flow and are useful for walk-in customers, phone reservations, or groups with custom pricing.
              </p>
            </div>
          </section>

          {/* Handling cancellations */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <X className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Handling cancellations</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                Cancellations are processed from Booking Detail. Open the booking and use the Cancel action so ReservKit can
                update the booking status, release reserved slot capacity, and send the customer cancellation email.
              </p>
              <p>
                Cancelling a booking does not automatically refund a Stripe charge. Use the Refund action from Booking Detail
                when money needs to go back to the customer, then choose the refund amount according to your policy. See the{" "}
                <Link href="/docs/payments" className="text-amber hover:underline">Payments guide</Link> for instructions on
                issuing partial and full refunds.
              </p>
              <p>
                Keep your cancellation policy clear in customer-facing confirmation copy and your business terms. Dedicated
                policy customization can be expanded as operator needs become clearer.
              </p>
            </div>
          </section>

          {/* Check-in */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <CheckSquare className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Check-in process</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                On the day of an activity, use the Check-In page or Calendar view to pull up the day&apos;s bookings. Each booking
                card shows the customer name, party size, and waiver status or progress.
              </p>
              <p>
                To check in a guest, click the booking and mark it as &quot;Checked In.&quot; This updates the booking status and
                gives your staff a clear visual of who has arrived vs. who is expected. Checked-in bookings are excluded
                from cancellation flows.
              </p>
              <p>
                If a customer hasn&apos;t signed their waiver before arriving, staff can send the waiver link directly from the
                booking detail view. The guest can sign on their phone in seconds — no paper required.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-16 border-t border-[var(--color-border)] pt-10">
          <h2 className="text-lg font-bold text-navy mb-5">Next steps</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/docs/payments"
              className="group rounded-xl border border-[var(--color-border)] p-5 hover:border-amber/40 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-navy group-hover:text-amber transition-colors mb-1">Payments & Fees →</p>
              <p className="text-sm text-slate-500">Understand Stripe Connect, pricing, refunds, and booking fees.</p>
            </Link>
            <Link
              href="/docs/waivers"
              className="group rounded-xl border border-[var(--color-border)] p-5 hover:border-amber/40 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-navy group-hover:text-amber transition-colors mb-1">Waivers →</p>
              <p className="text-sm text-slate-500">Create digital liability waivers and manage per-guest signing.</p>
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
