import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/PageShell";
import { ArrowRight, BookOpen, CreditCard, FileSignature, Users, BarChart3, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation & Guides",
  description: "ReservKit guides for direct bookings, Stripe payments, waivers, staff scheduling, and reports.",
  alternates: { canonical: "https://reservkit.com/docs" },
};

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
    icon: CalendarDays,
    title: "Bookings & Availability",
    href: "/docs/bookings-availability",
    description: "Manage your availability calendar, handle booking requests, and process cancellations.",
    topics: ["Setting availability windows", "Managing time slots", "Handling cancellations", "Booking status overview", "Check-in process"],
  },
  {
    icon: CreditCard,
    title: "Payments",
    href: "/docs/payments",
    description: "Configure Stripe Connect, set pricing and deposits, and understand the current booking fee structure.",
    topics: ["Connecting Stripe", "Setting prices and deposits", "Issuing refunds", "Understanding booking fees", "Coupon codes"],
  },
  {
    icon: FileSignature,
    title: "Waivers",
    href: "/docs/waivers",
    description: "Create liability waiver templates and configure per-guest signing requirements.",
    topics: ["Creating waiver templates", "Configuring required fields", "Guest signing flow", "Tracking waiver compliance", "Printing evidence packets"],
  },
  {
    icon: Users,
    title: "Staff",
    href: "/docs/staff",
    description: "Invite team members, assign roles, and manage staff scheduling.",
    topics: ["Inviting team members", "Staff roles and permissions", "Assigning staff to bookings", "Staff schedule view", "Staff task management"],
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    href: "/docs/reports",
    description: "Track revenue, booking volume, and guest counts across your activities.",
    topics: ["Revenue reports", "Booking volume trends", "Guest count tracking", "Filtering by date range", "Exporting data"],
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
            These guides cover the full ReservKit setup, from connecting Stripe to running your first live booking. Start with Getting Started if you are new. Jump to a section if you are troubleshooting something specific.
          </p>
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
