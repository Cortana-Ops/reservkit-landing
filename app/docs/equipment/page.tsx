import Link from "next/link";
import { PageShell } from "../../components/PageShell";
import { CalendarCheck, ClipboardList, PackageCheck, ShieldCheck } from "lucide-react";
import { createMarketingMetadata } from "../../lib/metadata";

export const metadata = createMarketingMetadata({
  title: "Equipment",
  description:
    "Configure equipment records, assign equipment to an activity, and use named unit blocking in ReservKit for Growth and higher rental operators.",
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
            then add equipment records, attach the gear an activity normally needs, and hold named units when a
            specific physical item has to stay with one booking.
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
                <ClipboardList className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Assign equipment to an activity</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                Activity equipment rules record the gear an activity normally needs so ReservKit can forecast
                shortages. That is separate from holding a named unit on one booking. Create the equipment record
                first, then attach it on the activity.
              </p>
              <p>
                Free and Starter do not include equipment. On those plans, Equipment stays out of the sidebar, and the
                activity Equipment tab shows &quot;Upgrade to Growth,&quot; &quot;This feature is not included on your
                current plan,&quot; and &quot;View plans.&quot; Growth, Pro, and Enterprise include the equipment
                controls. An unexpired trial can open them too. The sidebar item also stays hidden for a team member
                who is not an owner or admin and does not have the equipment permission.
              </p>
              <p>
                Open Equipment and click &quot;Add Equipment.&quot; The dialog title is &quot;Add Equipment,&quot; and the
                description says to track planning counts, then add named physical units. Name is required. The name
                field placeholder is &quot;e.g. Kayak — 2-person.&quot; Category offers Watercraft, Safety Gear, Paddling,
                Snorkel/Dive, Camping, and Other. Set Quantity, choose a Condition (Excellent, Good, Fair, or Needs
                Repair), and add Notes if you need them. The notes placeholder is &quot;Storage location, serial number,
                etc.&quot; Click &quot;Save.&quot; An empty Equipment page says &quot;No equipment yet&quot; and &quot;Add
                items to start tracking your rental inventory,&quot; with the same &quot;Add Equipment&quot; button.
              </p>
              <p>
                Go to Activities. Click &quot;Add Activity&quot; to open a dialog titled &quot;New Activity,&quot; or use
                the Edit activity button on an existing activity card to open &quot;Edit Activity.&quot; The edit control
                is an icon button. Its accessible name is &quot;Edit activity.&quot; Open the Equipment tab. The other
                tabs in this dialog are Details, Fields, Availability, Waivers, and Deposit.
              </p>
              <p>
                The tab heading is &quot;Normal gear this activity needs.&quot; Under it, ReservKit says the rules are
                &quot;Used to forecast shortages automatically. Manual booking equipment remains for exceptions.&quot;
                The examples on the tab are &quot;1 life jacket per guest, 1 anchor kit per booking, 0.5 per guest = 1
                for every 2 guests.&quot;
              </p>
              <p>
                If no equipment records exist yet, the tab says &quot;Add equipment on the Equipment page before creating
                automatic demand rules,&quot; and &quot;Add requirement&quot; stays disabled. After equipment exists and
                the activity has no rules, the tab says &quot;No equipment rules yet. Add the gear this activity normally
                consumes.&quot; Click &quot;Add first equipment requirement.&quot; When a rule is already there, click
                &quot;Add requirement.&quot;
              </p>
              <p>
                Each rule has Equipment, Rule, and Quantity. Equipment uses the placeholder &quot;Choose equipment&quot;
                and lists the equipment name, followed by its category when one is set. Rule is &quot;Per guest&quot; or
                &quot;Per booking.&quot; A new rule starts as Per guest with Quantity 1. Quantity accepts numbers greater
                than 0, in steps of 0.01. Remove a rule with the button labeled &quot;Remove equipment requirement.&quot;
                Saving rejects a row with no equipment selected, a quantity that is not greater than 0, or the same
                equipment saved twice with the same rule.
              </p>
              <p>
                Click &quot;Save.&quot; &quot;Cancel&quot; closes the dialog. On a new activity, the tab says
                &quot;Equipment requirements will be saved after the activity is created.&quot; If you switch tabs with
                unsaved edits, ReservKit shows &quot;Unsaved changes on this tab&quot; and &quot;All tabs save together
                when you click Save Activity.&quot; The submit button itself is labeled &quot;Save,&quot; and it shows
                &quot;Saving…&quot; while the request is in progress. If equipment or the existing rules fail to load,
                the tab shows &quot;Equipment requirements unavailable&quot; and pauses saving until you use &quot;Retry
                equipment&quot; or &quot;Retry requirements.&quot;
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
