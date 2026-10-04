import Link from "next/link";
import { PageShell } from "../components/PageShell";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  CalendarCheck2,
  CalendarDays,
  CircleHelp,
  Contact,
  CreditCard,
  FileSignature,
  PackageCheck,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";
import { createMarketingMetadata } from "../lib/metadata";

export const metadata = createMarketingMetadata({
  title: "Documentation & Guides",
  description: "ReservKit operator guides for setup, activities, daily bookings, customers, Stripe payments, staff, messaging, growth tools, settings, migration, and troubleshooting.",
  path: "/docs",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ReservKit", item: "https://reservkit.com" },
    { "@type": "ListItem", position: 2, name: "Documentation", item: "https://reservkit.com/docs" },
  ],
};

const sections = [
  {
    icon: BookOpen,
    title: "Getting Started",
    href: "/docs/getting-started",
    description: "Set up your ReservKit account, create your first activity, and take your first booking.",
    topics: ["Create an account", "Set up your organization", "Add your first activity", "Connect Stripe payments", "Share your booking link"],
  },
  {
    icon: CircleHelp,
    title: "Operator FAQ",
    href: "/docs/faq",
    description: "Get fast answers to common setup, booking, payment, access, and troubleshooting questions.",
    topics: ["Launch readiness", "Missing pages or activities", "Cancellations and refunds", "Delivery failures", "Contacting support safely"],
  },
  {
    icon: Activity,
    title: "Activities & Pricing",
    href: "/docs/activities",
    description: "Build and publish activities with the right pricing, duration, capacity, location, and requirements.",
    topics: ["Creating activities", "Pricing models", "Duration packages", "Locations and add-ons", "Publish checklist"],
  },
  {
    icon: CalendarDays,
    title: "Bookings & Availability",
    href: "/docs/bookings-availability",
    description: "Manage your availability calendar, direct booking links, website iframe snippets, and cancellation process.",
    topics: ["Setting availability windows", "Managing time slots", "All-activity and single-activity links", "Website iframe snippets", "Check-in process"],
  },
  {
    icon: CalendarCheck2,
    title: "Daily Operations",
    href: "/docs/daily-operations",
    description: "Run arrival, check-in, balances, waivers, staff, equipment, cancellations, and end-of-day review.",
    topics: ["Start-of-day review", "Booking statuses", "Balance and refund actions", "Waiver and equipment checks", "End-of-day review"],
  },
  {
    icon: Contact,
    title: "Customers & Guest Hub",
    href: "/docs/customers-guest-hub",
    description: "Manage customer records and help guests find, cancel, or reschedule eligible bookings.",
    topics: ["Customer profiles", "Notes and tags", "Secure booking lookup", "Recovery links", "Guest self-service"],
  },
  {
    icon: PackageCheck,
    title: "Equipment",
    href: "/docs/equipment",
    description: "Configure equipment records, assign that gear to an activity, and hold named units on Growth and higher plans.",
    topics: ["Assign equipment to an activity", "Optional equipment setup", "Named unit blocking", "Growth+ availability", "Customer booking behavior"],
  },
  {
    icon: CreditCard,
    title: "Payments",
    href: "/docs/payments",
    description: "Configure Stripe Connect, set pricing and refundable damage deposits, and understand the current booking fee structure.",
    topics: ["Connecting Stripe", "Setting prices and damage deposits", "Issuing refunds", "Understanding booking fees", "Coupon codes"],
  },
  {
    icon: FileSignature,
    title: "Waivers",
    href: "/docs/waivers",
    description: "Create digital waiver templates and configure per-guest signing requirements.",
    topics: ["Creating waiver templates", "Configuring required fields", "Guest signing flow", "Tracking waiver status", "Printing evidence packets"],
  },
  {
    icon: Bell,
    title: "Notifications",
    href: "/docs/notifications",
    description: "Understand booking emails, SMS reminders, review requests, and optional custom sender setup.",
    topics: ["Business identity", "Booking emails", "SMS reminders", "Google review links", "Custom Resend and Twilio"],
  },
  {
    icon: Users,
    title: "Staff",
    href: "/docs/staff",
    description: "Invite team members, assign roles, and manage staff scheduling on Starter and higher plans.",
    topics: ["Inviting team members", "Staff roles and permissions", "Assigning staff to bookings", "Staff schedule view", "Staff task management"],
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    href: "/docs/reports",
    description: "Track revenue, booking volume, and guest counts across your activities.",
    topics: ["Revenue reports", "Booking volume trends", "Guest count tracking", "Filtering by date range", "Exporting data"],
  },
  {
    icon: TrendingUp,
    title: "Growth Tools",
    href: "/docs/growth-tools",
    description: "Use promo codes, dynamic pricing, add-ons, broadcasts, and operational tools with controlled testing.",
    topics: ["Promo codes", "Dynamic pricing", "Add-ons and deposits", "Broadcast SMS", "Measuring results"],
  },
  {
    icon: Settings,
    title: "Settings & Migration",
    href: "/docs/settings-migration",
    description: "Configure business settings, booking links, providers, delivery logs, data exports, and staged imports.",
    topics: ["Settings map", "Booking slug and widget", "Provider readiness", "Customer imports", "Future booking imports"],
  },
];

export default function Docs() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 max-w-2xl">
          <h1 className="text-3xl font-bold text-navy mb-3">ReservKit Documentation</h1>
          <p className="text-lg text-slate-600">
            These guides cover setup, the customer booking flow, daily operations, and troubleshooting. Start with Getting Started if you are new, use Daily Operations during live service, or open the Operator FAQ when you need a fast answer.
          </p>
          <p className="mt-3 text-sm text-slate-500">Operator documentation reviewed October 3, 2026.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group rounded-2xl border border-[var(--color-border)] bg-white p-6 hover:border-amber/40 hover:shadow-sm transition-all block"
            >
              <div className="h-10 w-10 rounded-xl bg-[var(--color-surface)] flex items-center justify-center mb-4">
                <section.icon className="h-5 w-5 text-navy" aria-hidden="true" />
              </div>
              <h2 className="text-base font-bold text-navy mb-2 group-hover:text-amber transition-colors">{section.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{section.description}</p>
              <ul className="space-y-1.5">
                {section.topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2 text-xs text-slate-500">
                    <ArrowRight className="h-3 w-3 text-amber shrink-0" aria-hidden="true" />
                    {topic}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-navy p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Need help?</h2>
          <p className="text-slate-400 text-sm mb-5">
            Can&apos;t find what you&apos;re looking for? Reach out to our support team.
          </p>
          <a
            href="mailto:hello@reservkit.com"
            className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-2.5 text-sm font-semibold text-navy hover:bg-amber-dark transition-colors"
          >
            Contact support <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </main>
    </PageShell>
  );
}
