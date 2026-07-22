import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../components/PageShell";
import { UserPlus, Shield, ClipboardList, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Staff",
  description: "Invite team members, configure roles and permissions, assign staff to bookings, and manage your team schedule in ReservKit.",
  alternates: { canonical: "https://reservkit.com/docs/staff" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ReservKit", item: "https://reservkit.com" },
    { "@type": "ListItem", position: 2, name: "Documentation", item: "https://reservkit.com/docs" },
    { "@type": "ListItem", position: 3, name: "Staff", item: "https://reservkit.com/docs/staff" },
  ],
};

const roles = [
  { role: "Owner", description: "Full account ownership, including billing, settings, staff, and organization data." },
  { role: "Admin", description: "Broad operational access for activities, bookings, staff management, reports, and settings." },
  { role: "Manager", description: "Operational access for bookings, activities, calendar, equipment, and report review without billing ownership." },
  { role: "Staff", description: "Can use staff-facing operational views for assigned schedule, task, and booking work." },
];

export default function Staff() {
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
          <span className="text-navy font-medium">Staff</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-3xl font-bold text-navy mb-3">Staff</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Bring your team into ReservKit. Assign roles, link staff to specific bookings, and give your crew
            the schedule view they need to run operations smoothly.
          </p>
        </div>

        <div className="space-y-12">
          {/* Inviting */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <UserPlus className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Inviting team members</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                Go to Team Members and click &quot;Invite Member.&quot; Enter the team member&apos;s email address and select their starting role.
                They&apos;ll receive an invitation email with a link to create their account and join your organization.
              </p>
              <p>
                Team members can be part of multiple organizations — useful if you manage multiple brands or seasonal
                operations under different organization accounts.
              </p>
              <p>
                Invite links expire after seven days. Once a team member accepts, they appear as an active member and can log in immediately.
                Owners and admins can remove a team member later, which revokes access and requires a new invitation to rejoin.
              </p>
            </div>
          </section>

          {/* Roles */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Staff roles and permissions</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-5">
              ReservKit uses operator-facing roles that match the app. Choose the role that
              matches what each team member needs access to:
            </p>
            <div className="space-y-3">
              {roles.map((r) => (
                <div key={r.role} className="rounded-xl border border-[var(--color-border)] p-4 flex gap-4">
                  <div className="shrink-0 h-8 w-8 rounded-full bg-amber/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-amber">{r.role[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">{r.role}</p>
                    <p className="text-sm text-slate-600 mt-0.5">{r.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Assigning to bookings */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <ClipboardList className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Assigning staff to bookings</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                Open any booking from the Bookings page and use the Assigned Staff control to assign one or more
                team members to that booking. Assigned staff can use staff-facing schedule and workflow views.
              </p>
              <p>
                Assignments help your team know who is responsible for each trip, tour, or rental session. Owners and admins
                can review staff tip totals in Reports without exposing every teammate&apos;s tip totals to all staff.
              </p>
              <p>
                You can also create staff tasks — pre-trip checklist items like equipment prep, boat inspection, or
                waiver verification — and assign them to specific team members from the Staff Tasks page.
              </p>
            </div>
          </section>

          {/* Schedule view */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <CalendarDays className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Staff schedule view</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                Staff-facing schedule views help team members focus on assigned work without the noise of the full operator calendar.
              </p>
              <p>
                The schedule view shows the activity name, time, customer party size, and check-in status for each
                assigned booking. Schedule cards link back to Booking Detail for deeper booking actions when the team
                member has the right access.
              </p>
              <p>
                Owners and admins can review all bookings across the Calendar, Bookings, Booking Detail, and Reports
                workflows instead of relying only on an individual staff schedule.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-16 border-t border-[var(--color-border)] pt-10">
          <h2 className="text-lg font-bold text-navy mb-5">Next steps</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/docs/waivers"
              className="group rounded-xl border border-[var(--color-border)] p-5 hover:border-amber/40 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-navy group-hover:text-amber transition-colors mb-1">← Waivers</p>
              <p className="text-sm text-slate-500">Digital liability waivers for every guest, signed on their phone.</p>
            </Link>
            <Link
              href="/docs/reports"
              className="group rounded-xl border border-[var(--color-border)] p-5 hover:border-amber/40 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-navy group-hover:text-amber transition-colors mb-1">Reports & Analytics →</p>
              <p className="text-sm text-slate-500">Track revenue, booking volume, and business performance.</p>
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
