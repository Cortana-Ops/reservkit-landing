import Link from "next/link";
import { PageShell } from "../../components/PageShell";
import { CalendarCheck, PackageCheck, ShieldCheck } from "lucide-react";
import { createMarketingMetadata } from "../../lib/metadata";

export const metadata = createMarketingMetadata({
  title: "Equipment",
  description:
    "Configure optional equipment records and named unit blocking in ReservKit for Growth and higher rental operators.",
  path: "/docs/equipment",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ReservKit", item: "https://reservkit.com" },
    { "@type": "ListItem", position: 2, name: "Documentation", item: "https://reservkit.com/docs" },
    { "@type": "ListItem", position: 3, name: "Equipment", item: "https://reservkit.com/docs/equipment" },
  ],
};

export default function EquipmentDocs() {
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
          <span className="text-navy font-medium">Equipment</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-3xl font-bold text-navy mb-3">Equipment</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Equipment setup is optional. Operators can run simple guest-capacity bookings without creating equipment,
            then add equipment records and named units when specific rentable gear needs to be held for bookings.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <PackageCheck className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">When to use equipment</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                Use equipment records when the operator needs staff to see which gear category supports a booking,
                such as jet skis, boats, kayaks, paddleboards, carts, or other rentable assets.
              </p>
              <p>
                Named units are for operations that track the actual physical item, such as Jet Ski 01 or Pontoon 03.
                When named units are configured, ReservKit can hold an available unit for the booking so the same unit
                is not assigned to overlapping reservations.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Plan availability</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                Named equipment-unit blocking is available on Growth and higher plans. Starter operators can use the
                core direct-booking and team workflow, then upgrade when their operation needs specific gear held
                against each reservation.
              </p>
              <p>
                The customer booking page does not ask guests to choose a specific unit. Customers choose the activity,
                time, guest count, and checkout details; unit assignment is handled by the operator workflow.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <CalendarCheck className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">How it affects bookings</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                Slot capacity still matters. Equipment-unit blocking adds another operational check for activities
                where a specific physical unit must be available during the booking window.
              </p>
              <p>
                Cancellations and booking changes should be handled from Booking Detail so booking status, slot
                capacity, customer messages, and equipment holds stay aligned.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-16 border-t border-[var(--color-border)] pt-10">
          <h2 className="text-lg font-bold text-navy mb-5">Next steps</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/pricing"
              className="group rounded-xl border border-[var(--color-border)] p-5 hover:border-amber/40 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-navy group-hover:text-amber transition-colors mb-1">Compare plans →</p>
              <p className="text-sm text-slate-500">See where equipment tools fit in the public pricing tiers.</p>
            </Link>
            <Link
              href="/docs/bookings-availability"
              className="group rounded-xl border border-[var(--color-border)] p-5 hover:border-amber/40 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-navy group-hover:text-amber transition-colors mb-1">Bookings & Availability →</p>
              <p className="text-sm text-slate-500">Review time slots, capacity, booking links, and cancellation behavior.</p>
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
