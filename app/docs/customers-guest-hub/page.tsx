import { createMarketingMetadata } from "../../lib/metadata";
import { GuideSection, OperatorGuide, Steps, SupportNote } from "../components/OperatorGuide";

export const metadata = createMarketingMetadata({
  title: "Customers & Guest Hub",
  description: "Manage ReservKit customer records, booking history, notes and tags, and help guests securely find, cancel, or reschedule eligible bookings through Guest Hub.",
  path: "/docs/customers-guest-hub",
});

export default function CustomersGuide() {
  return (
    <OperatorGuide
      title="Customers & Guest Hub"
      description="Keep customer records useful for operators while giving guests a secure self-service path for eligible booking actions."
      path="/docs/customers-guest-hub"
      related={[
        { href: "/docs/daily-operations", title: "Daily Operations", description: "Handle customer needs from Booking Detail." },
        { href: "/docs/notifications", title: "Notifications", description: "Understand confirmations, recovery links, and delivery status." },
      ]}
    >
      <GuideSection title="Customer records">
        <p>The Customers page supports search by name, email, phone, source, or tag. Filters separate customers with bookings from contacts who have not booked yet. Customer profiles show contact details, notes, tags, upcoming bookings, booking history, and recorded spend.</p>
        <Steps items={[
          "Open Customers and search before creating a manual record.",
          "Open the customer profile to review booking history before changing contact details.",
          "Use notes for operational context and tags for simple grouping; avoid storing card data, passwords, medical records, or other unnecessary sensitive information.",
          "Open a booking from the customer profile when the request concerns one reservation.",
        ]} />
      </GuideSection>

      <GuideSection title="Guest Hub lookup">
        <p>Guests can open Guest Hub and enter both the booking reference and the email used during booking. ReservKit requires the values to match before showing booking details.</p>
        <p>If the guest forgot the reference, Email me my booking links sends recovery links only when matching bookings exist. The response remains intentionally generic so it does not reveal whether an email address is in the system.</p>
      </GuideSection>

      <GuideSection title="Guest cancellation and rescheduling">
        <p>Eligible active bookings can expose Cancel or Reschedule in Guest Hub. Rescheduling only offers openings that can hold the existing guest count and still rechecks capacity when the change is submitted.</p>
        <SupportNote>A guest cancellation does not promise an automatic refund. Operators still apply their cancellation policy and reconcile any money movement from Booking Detail and Stripe.</SupportNote>
      </GuideSection>

      <GuideSection title="When a guest cannot find a booking">
        <ul className="list-disc space-y-2 pl-5">
          <li>Confirm the guest is using the booking email, not a different contact address.</li>
          <li>Confirm the complete booking reference from the receipt or confirmation.</li>
          <li>Check Settings -&gt; Notifications for delivery status when the customer expected an email.</li>
          <li>Search Customers and Bookings as an operator; do not ask the guest to send payment-card details.</li>
          <li>Use Booking Detail to resend supported links after confirming the requester.</li>
        </ul>
      </GuideSection>
    </OperatorGuide>
  );
}
