import { createMarketingMetadata } from "../../lib/metadata";
import { GuideSection, OperatorGuide, Steps, SupportNote } from "../components/OperatorGuide";

export const metadata = createMarketingMetadata({
  title: "Daily Operations",
  description: "Run daily ReservKit operations from booking review and customer contact through staff assignment, check-in, balances, waivers, completion, cancellation, and refunds.",
  path: "/docs/daily-operations",
});

export default function DailyOperationsGuide() {
  return (
    <OperatorGuide
      title="Daily Operations"
      description="Use the calendar, Check-In, and Booking Detail together to keep arrival, money, waivers, staff, and booking status aligned."
      path="/docs/daily-operations"
      related={[
        { href: "/docs/bookings-availability", title: "Bookings & Availability", description: "Configure openings, capacity, links, and cancellations." },
        { href: "/docs/staff", title: "Staff", description: "Set permissions, assignments, schedules, and tasks." },
      ]}
    >
      <GuideSection title="Start-of-day review">
        <Steps items={[
          "Open Calendar or Check-In and select the operating date.",
          "Review expected guests, payment state, waiver progress, staff assignment, service location, and equipment readiness.",
          "Open any booking with a missing balance, unsigned waiver, unclear location, or equipment shortage before customers arrive.",
          "Use Booking Detail as the source of truth for actions and notes on that reservation.",
        ]} />
      </GuideSection>

      <GuideSection title="Booking statuses">
        <p>Confirmed means the reservation is active. Checked In means the customer arrived. Completed means service was delivered. No Show records that nobody arrived. Cancelled stops the active reservation flow.</p>
        <p>Use Change Status or the guided next action in Booking Detail. Status changes should reflect what actually happened; do not use cancellation as a substitute for a refund or use a refund as a substitute for cancellation.</p>
      </GuideSection>

      <GuideSection title="Money and balance actions">
        <p>Collect Balance is for an amount still due on an existing booking. Issue Refund sends an eligible online refund through Stripe. Offline Refund only records a refund handled outside ReservKit.</p>
        <SupportNote>Cancel Booking does not automatically refund a Stripe charge. For a paid cancellation, cancel the booking and then complete the appropriate refund action.</SupportNote>
      </GuideSection>

      <GuideSection title="Waivers, staff, and equipment">
        <p>Booking Detail shows waiver progress and can resend a waiver email. Staff assignments and tasks should be updated before the shift. Growth operators using equipment requirements should resolve shortages and review named-unit assignments for the booking window.</p>
        <p>Do not mark a booking complete while an unresolved payment, waiver, or equipment issue still needs operator action. Add an internal note when another team member will finish the follow-up.</p>
      </GuideSection>

      <GuideSection title="End-of-day review">
        <ul className="list-disc space-y-2 pl-5">
          <li>Every arrival is Checked In, Completed, No Show, or Cancelled as appropriate.</li>
          <li>Balances, refunds, and damage-deposit outcomes are reconciled.</li>
          <li>Waiver evidence is present for required guests.</li>
          <li>Operational notes explain exceptions another staff member may need later.</li>
        </ul>
      </GuideSection>
    </OperatorGuide>
  );
}
