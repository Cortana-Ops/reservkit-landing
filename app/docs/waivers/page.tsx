import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../components/PageShell";
import { FileSignature, Settings, UserCheck, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Waivers",
  description: "Create digital liability waiver templates, configure per-guest signer fields, manage guest signing, and track waiver compliance in ReservKit.",
  alternates: { canonical: "https://reservkit.com/docs/waivers" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ReservKit", item: "https://reservkit.com" },
    { "@type": "ListItem", position: 2, name: "Documentation", item: "https://reservkit.com/docs" },
    { "@type": "ListItem", position: 3, name: "Waivers", item: "https://reservkit.com/docs/waivers" },
  ],
};

export default function Waivers() {
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
          <span className="text-navy font-medium">Waivers</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-3xl font-bold text-navy mb-3">Waivers</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Collect digital liability waivers from every guest — signed on their phone
            after booking, no paper or clipboards required.
          </p>
        </div>

        <div className="space-y-12">
          {/* Creating templates */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <FileSignature className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Creating waiver templates</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                Go to Waivers and click &quot;New template.&quot; Give the template a name (e.g., &quot;Standard Water Sports Liability Waiver&quot;)
                and paste or type the full waiver text. You can use your existing waiver language or have an attorney draft one specific to your activities.
              </p>
              <p>
                Once a template is saved, you can attach it to one or more activities from the activity&apos;s Waivers tab. A single booking
                can require multiple waivers if you have different liability requirements per activity type.
              </p>
              <p>
                Templates keep the accepted waiver text evidence-safe while offering formatting helpers for headings,
                bullets, numbered lists, and dividers so your language stays readable on any device.
              </p>
            </div>
          </section>

          {/* Configuring signer fields */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <Settings className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Configuring required signer fields</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                Each waiver template lets you toggle which fields each signer must complete. You can require any combination of:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Full name</li>
                <li>Phone number</li>
                <li>Date of birth</li>
                <li>Mailing address</li>
                <li>Emergency contact name and phone</li>
                <li>Signature (drawn or typed)</li>
                <li>Initials (for inline acknowledgment checkpoints)</li>
              </ul>
              <p className="mt-3">
                Configure the fields to match your insurance requirements. For adventure activities, many operators require signature,
                initials at key clauses, and emergency contact. For lower-risk rentals, name and signature is often sufficient.
              </p>
            </div>
          </section>

          {/* Guest signing flow */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <UserCheck className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Guest signing flow</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                Waivers are collected <strong className="text-navy">after payment</strong> — not during checkout. Once a booking is confirmed,
                the customer can open the waiver hub and send each guest through the signing flow for the waivers required by the booked activity.
              </p>
              <p>
                Each guest verifies their email once for that signing session, then signs each required waiver in order. Guests sign directly
                on their phone — no app download required. Signatures are captured either by drawing on the screen or typing their name.
              </p>
              <p>
                After signing, the guest sees a confirmation screen. The signed waiver evidence stays attached to the booking in ReservKit
                for operator review.
              </p>
            </div>
          </section>

          {/* Compliance dashboard */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-amber/10 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Tracking waiver compliance</h2>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                Booking detail and waiver views show progress by guest and by required waiver template. You can see which guests have
                signed, which templates are still pending, and where staff need to follow up before arrival.
              </p>
              <p>
                From the booking detail view, staff can send a reminder waiver link to any guest who hasn&apos;t signed yet. This is
                especially useful when guests arrive without having signed — they can sign on their phone in seconds before
                the activity begins.
              </p>
              <p>
                Signed waivers stay with the booking record and can be printed or downloaded as part of the waiver packet. Each signed
                waiver includes the guest&apos;s information, the accepted document text, and signing audit details.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-16 border-t border-[var(--color-border)] pt-10">
          <h2 className="text-lg font-bold text-navy mb-5">Next steps</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/docs/bookings-availability"
              className="group rounded-xl border border-[var(--color-border)] p-5 hover:border-amber/40 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-navy group-hover:text-amber transition-colors mb-1">← Bookings & Availability</p>
              <p className="text-sm text-slate-500">Manage your calendar, slots, and check-in process.</p>
            </Link>
            <Link
              href="/docs/staff"
              className="group rounded-xl border border-[var(--color-border)] p-5 hover:border-amber/40 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-navy group-hover:text-amber transition-colors mb-1">Staff →</p>
              <p className="text-sm text-slate-500">Invite team members, assign roles, and manage scheduling.</p>
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
