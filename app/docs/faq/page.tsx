import { createMarketingMetadata } from "../../lib/metadata";
import { ChevronDown } from "lucide-react";
import { GuideSection, OperatorGuide, SupportNote } from "../components/OperatorGuide";

export const metadata = createMarketingMetadata({
  title: "Operator FAQ",
  description: "Answers to common ReservKit operator questions about setup, bookings, availability, Stripe payments, refunds, waivers, customers, staff, equipment, notifications, and troubleshooting.",
  path: "/docs/faq",
});

type FaqGroup = {
  title: string;
  items: Array<readonly [string, string]>;
};

const groups: FaqGroup[] = [
  {
    title: "Setup and access",
    items: [
      ["What must be ready before I share my booking link?", "Configure the organization slug and timezone, publish at least one priced activity, create future availability, connect Stripe for paid bookings, attach required waivers or equipment rules, and complete a controlled customer-flow test."],
      ["Can I use ReservKit without a paid plan?", "Yes. Free supports setup, testing, and the first 10 bookings per month with a 5% booking fee. Staff tools begin on Starter; deeper operational tools begin on Growth."],
      ["Why is a page missing from my sidebar?", "Plan gates, staff role, granular permissions, organization status, and current organization can all affect navigation. Confirm the active organization first, then ask an owner or admin to review plan and permissions."],
      ["Can I run more than one business?", "Yes. Organizations are separate workspaces. Use the organization switcher and verify the active business before changing activities, settings, staff, or bookings."],
    ],
  },
  {
    title: "Bookings and operations",
    items: [
      ["Why is an activity not visible or bookable?", "Check that it is published, has a valid price, has future availability, fits the cutoff and advance-booking rules, has remaining capacity, and belongs to the organization in the public URL."],
      ["Does cancelling automatically refund the customer?", "No. Cancellation updates the reservation and capacity. Use Issue Refund for an eligible Stripe refund or Offline Refund only after money was returned outside ReservKit."],
      ["Can a customer reschedule?", "Eligible active bookings can be rescheduled in Guest Hub when another slot can hold the existing guest count. Capacity is checked again when the change is submitted."],
      ["How do guests find a booking?", "Guest Hub requires the booking reference and matching booking email. A guest who forgot the reference can request booking links by email without ReservKit revealing whether an address exists."],
      ["How do I handle a walk-in or phone booking?", "Create an operator-side booking from Bookings, choose the customer, activity, time, and guest count, then record or collect payment according to the available booking actions."],
    ],
  },
  {
    title: "Payments and pricing",
    items: [
      ["Where do customer payments go?", "ReservKit creates the connected-account Stripe Checkout flow. Stripe controls processing, connected-account money movement, payout timing, disputes, and processing fees. ReservKit collects the plan-based booking fee where applicable."],
      ["What is the booking fee based on?", "The ReservKit booking fee uses the eligible booking subtotal after coupon discounts. Tips, taxes, operator service fees, and refundable damage deposits are not marked up."],
      ["Are Stripe fees included in ReservKit pricing?", "No. Stripe processing fees are separate from the ReservKit subscription and booking fee."],
      ["What happens after the 14-day paid-plan trial?", "The selected Starter, Growth, or Pro monthly subscription begins billing through Stripe unless it is cancelled before the trial ends."],
      ["Does marking a damage deposit released move money?", "Not by itself. The status records the operator outcome. Confirm any required refund or release action in Stripe and reconcile Booking Detail."],
    ],
  },
  {
    title: "Waivers, equipment, and messages",
    items: [
      ["Does ReservKit provide legal waiver language?", "No. ReservKit stores and presents the template and signer fields you configure. Your business, counsel, and insurer remain responsible for the waiver text and compliance requirements."],
      ["Can customers pick a specific equipment unit?", "No. Equipment requirements and named units are internal readiness and blocking tools. The customer books the activity, not a named physical unit."],
      ["Why did an email or SMS not send?", "Check Settings -> Notifications for the message switch and delivery log, then Settings -> Integrations for provider readiness. Confirm the required business contact fields before using a test send."],
      ["Can I edit every notification template?", "Not currently. Operators can control supported notification settings and provider setup, but a full email and SMS template editor is not yet available."],
    ],
  },
  {
    title: "Troubleshooting",
    items: [
      ["What should I do when data will not load?", "Use the page Retry action once, confirm the internet connection and active organization, then record the page, time, action, and visible error before contacting support. Avoid repeating payment or broadcast actions while the result is uncertain."],
      ["What should I send support?", "Send the organization name, page URL, booking reference when relevant, approximate time, steps taken, visible error text, and whether the action involved live money or customer messaging. Never send passwords, full card numbers, provider secret keys, or verification codes."],
      ["How do I report a payment mismatch?", "Include the booking reference and Stripe payment or refund identifier, describe the expected and displayed states, and stop retrying until support confirms whether Stripe completed the action."],
      ["How do I deactivate an account?", "Use Request account deactivation on Billing. ReservKit support reviews active bookings and required records before disabling the workspace and public booking page."],
    ],
  },
];

export default function OperatorFaqPage() {
  const faqItems = groups.flatMap((group) => group.items);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <OperatorGuide
      title="Operator FAQ"
      description="Fast answers for the questions operators and support teams are most likely to handle. Follow the linked guides when a workflow needs more detail."
      path="/docs/faq"
      related={[
        { href: "/docs/getting-started", title: "Getting Started", description: "Build and test the first live booking flow." },
        { href: "/docs/settings-migration", title: "Settings & Migration", description: "Review configuration, integrations, and safe imports." },
      ]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SupportNote>For urgent payment uncertainty, duplicate charges, or customer-message mistakes, stop retrying the action and contact support with the booking reference and time of the attempt.</SupportNote>
      {groups.map((group) => (
        <GuideSection key={group.title} title={group.title}>
          <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {group.items.map(([question, answer]) => (
              <details key={question} className="group py-4">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-navy marker:hidden">
                  <span>{question}</span>
                  <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-3 pr-4 text-sm leading-relaxed text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </GuideSection>
      ))}
    </OperatorGuide>
  );
}
