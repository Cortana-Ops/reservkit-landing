import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../components/PageShell";
import { Bell, Mail, MessageSquare, Reply, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Notifications",
  description:
    "Understand ReservKit booking emails, SMS reminders, review requests, and optional custom sender setup.",
  alternates: { canonical: "https://reservkit.com/docs/notifications" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ReservKit", item: "https://reservkit.com" },
    { "@type": "ListItem", position: 2, name: "Documentation", item: "https://reservkit.com/docs" },
    { "@type": "ListItem", position: 3, name: "Notifications", item: "https://reservkit.com/docs/notifications" },
  ],
};

const messageTypes = [
  {
    title: "Booking confirmations",
    body: "Sent after payment succeeds or an operator-confirmed booking is created, when confirmation emails are enabled.",
  },
  {
    title: "Booking reminders",
    body: "Sent before the activity when reminders are enabled. Reminder emails and SMS can include waiver hub links when waivers are required.",
  },
  {
    title: "Cancellation and modification emails",
    body: "Sent when a booking is cancelled or changed, so customers have the updated booking context.",
  },
  {
    title: "Google review requests",
    body: "Sent after a completed booking only when review requests are enabled and a Google Review Link is configured.",
  },
  {
    title: "Booking-link recovery",
    body: "Sent only after a customer asks for help finding a booking. The browser response stays generic so customer records are not exposed.",
  },
];

export default function Notifications() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/docs" className="transition-colors hover:text-navy">Documentation</Link>
          <span>/</span>
          <span className="font-medium text-navy">Notifications</span>
        </nav>

        <div className="mb-12">
          <h1 className="mb-3 text-3xl font-bold text-navy">Notifications</h1>
          <p className="text-lg leading-relaxed text-slate-600">
            ReservKit sends standard customer messages for the booking workflow. Your business identity controls
            what customers recognize, while ReservKit manages the delivery plumbing by default.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber/10">
                <Reply className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Business identity comes first</h2>
            </div>
            <div className="space-y-3 leading-relaxed text-slate-600">
              <p>
                Set your business name, business email, phone number, and Google Review Link in Settings. Customer-facing
                messages use your business name, and customer replies to booking emails use your business email when available.
              </p>
              <p>
                Customers should not need to know whether a message was delivered by ReservKit, Resend, Twilio, Supabase, or
                another internal service. They should see a clear booking message from the business they booked with.
              </p>
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber/10">
                <Bell className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Messages ReservKit can send</h2>
            </div>
            <div className="grid gap-3">
              {messageTypes.map((message) => (
                <div key={message.title} className="rounded-xl border border-[var(--color-border)] bg-white p-4">
                  <p className="font-semibold text-navy">{message.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{message.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber/10">
                <Mail className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">Email delivery</h2>
            </div>
            <div className="space-y-3 leading-relaxed text-slate-600">
              <p>
                Standard booking emails can use ReservKit-managed email delivery. You do not need a Resend account to start
                sending booking confirmations, reminders, cancellation emails, or customer booking-link recovery messages.
              </p>
              <p>
                If you want customer emails sent from your own verified domain, Settings includes optional Custom Email
                setup for Resend. That is an advanced sender-domain option, not a launch requirement.
              </p>
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber/10">
                <MessageSquare className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">SMS reminders and broadcasts</h2>
            </div>
            <div className="space-y-3 leading-relaxed text-slate-600">
              <p>
                Automated SMS reminders can use ReservKit-managed delivery when platform SMS is configured. Operators can
                also connect their own Twilio account if they want messages from their own number or stronger SMS control.
              </p>
              <p>
                Broadcast SMS depends on verified SMS readiness before sending. If SMS is important to your launch, test it
                during onboarding before relying on it for customer operations.
              </p>
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber/10">
                <ShieldCheck className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy">What is not editable yet</h2>
            </div>
            <div className="space-y-3 leading-relaxed text-slate-600">
              <p>
                ReservKit does not currently include a full operator-facing email or SMS template editor. The current controls
                cover notification toggles, business identity, Google review links, and optional custom provider credentials.
              </p>
              <p>
                Test emails from Settings go only to the signed-in operator. They do not message customers, run reminder jobs,
                or send SMS.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-16 border-t border-[var(--color-border)] pt-10">
          <h2 className="mb-5 text-lg font-bold text-navy">Next steps</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/docs/getting-started"
              className="group rounded-xl border border-[var(--color-border)] p-5 transition-all hover:border-amber/40 hover:shadow-sm"
            >
              <p className="mb-1 font-semibold text-navy transition-colors group-hover:text-amber">Getting Started</p>
              <p className="text-sm text-slate-500">Set up your organization profile before sending customers your booking link.</p>
            </Link>
            <Link
              href="/docs/waivers"
              className="group rounded-xl border border-[var(--color-border)] p-5 transition-all hover:border-amber/40 hover:shadow-sm"
            >
              <p className="mb-1 font-semibold text-navy transition-colors group-hover:text-amber">Waivers</p>
              <p className="text-sm text-slate-500">Understand how waiver links and signing reminders fit into the customer flow.</p>
            </Link>
          </div>
          <div className="mt-6">
            <Link href="/docs" className="inline-flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-navy">
              Back to all documentation
            </Link>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
