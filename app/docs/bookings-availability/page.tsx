import { createMarketingMetadata } from "../../lib/metadata";
import { GuideSection, OperatorGuide, SupportNote, TaskWalkthrough } from "../components/OperatorGuide";

export const metadata = createMarketingMetadata({
  title: "Bookings & Availability",
  description: "Manage your availability calendar, time slots, cancellations, and check-in process in ReservKit.",
  path: "/docs/bookings-availability",
});

export default function BookingsAvailability() {
  return (
    <OperatorGuide
      title="Bookings & Availability"
      description="Create the times customers can book, verify the public result, and use Booking Detail for changes that affect capacity or money."
      path="/docs/bookings-availability"
      related={[
        { href: "/docs/payments", title: "Payments & Fees", description: "Understand Stripe checkout, cancellations, refunds, and money movement." },
        { href: "/docs/waivers", title: "Waivers", description: "Create required templates and verify guest signing progress." },
      ]}
    >
      <TaskWalkthrough
        title="Create recurring bookable times"
        path="Availability -> Add Recurring Hours"
        intro="A recurring schedule is the weekly pattern. ReservKit uses it to create the dated future times customers actually select."
        steps={[
          { title: "Choose the activity and day", body: "Select the activity and the weekday this schedule should repeat." },
          { title: "Set the time window", body: "Enter the first start, last check-in or window end, and the interval between customer start times." },
          { title: "Save the recurring hours", body: "Save the row, then use Refresh Future Times to fill missing dated openings through the generation window." },
          { title: "Inspect the calendar", body: "Move through the next operating dates and confirm that the intended activity and start times appear." },
          { title: "Inspect the public page", body: "Open the activity-specific booking link and confirm the same future times are available to a customer." },
        ]}
        doneWhen={[
          "The Availability calendar shows the expected dated openings.",
          "The public activity page shows the intended future start times.",
          "Every offered duration can finish within its configured availability window.",
        ]}
      />

      <GuideSection title="How the window and interval work">
        <p>For a fixed two-hour activity with a 9 AM to 5 PM window and a 120-minute interval, the expected starts are 9 AM, 11 AM, 1 PM, and 3 PM. For duration packages, each selected duration must fit inside the configured window.</p>
        <p>Do not assume that the start-time interval adds a separate setup or cleanup buffer. Include operational buffers in the schedule and duration design, then test the resulting times.</p>
      </GuideSection>

      <TaskWalkthrough
        title="Add a one-time opening"
        path="Availability -> Add One-Time Opening"
        steps={[
          { title: "Choose the activity and date", body: "Select the activity and the specific operating date that needs an exception." },
          { title: "Set the opening", body: "Enter the start time, duration or end behavior shown in the dialog, and the capacity available for this opening." },
          { title: "Save and compare", body: "Save the opening, inspect it on the Availability calendar, and confirm it appears on the public activity page." },
        ]}
        doneWhen={[
          "The one-time opening appears only on the intended date.",
          "The public booking page offers the opening with the expected capacity and price.",
        ]}
      />

      <GuideSection title="Capacity and operator-created bookings">
        <p>Activity capacity limits the number of guests a slot can hold. Fully booked slots stop appearing as available online, and checkout still checks capacity before creating a paid booking.</p>
        <p>Owners, admins, and permissioned team members can use Bookings to create operator-side bookings for a walk-in, phone customer, or internal exception. Verify payment state and customer messaging because an operator-created booking is not the same as a completed public Stripe checkout.</p>
      </GuideSection>

      <TaskWalkthrough
        title="Share a booking link"
        path="Settings -> Booking Widget"
        intro="ReservKit provides all-activity booking links and activity-specific booking links, plus supported iframe snippets for the full booking flow. Dedicated calendar-only or activity-card-only embeds are future options."
        steps={[
          { title: "Choose the destination", body: "Use the Public Booking URL for the full catalog or an activity-specific link for one activity." },
          { title: "Open it signed out", body: "Use a private window or another device so the test does not depend on operator access." },
          { title: "Reach a valid checkout", body: "Select a future time and guest count and confirm the displayed activity, price, requirements, and total." },
        ]}
        doneWhen={[
          "The shared URL opens the correct organization and activity selection.",
          "A signed-out customer can reach the expected checkout path on mobile.",
        ]}
      />

      <TaskWalkthrough
        title="Cancel a paid booking correctly"
        path="Bookings -> open booking -> Booking Detail"
        steps={[
          { title: "Review the booking first", body: "Confirm the booking reference, customer, activity, date, payment state, cancellation policy, and amount before taking action." },
          { title: "Cancel the reservation", body: "Use Cancel Booking so ReservKit updates status, releases slot capacity, and sends the supported cancellation message." },
          { title: "Handle money separately", body: "If money must be returned, use Issue Refund for an eligible Stripe refund. Use Offline Refund only after money was returned outside ReservKit." },
          { title: "Verify both systems", body: "Confirm the final booking state in ReservKit and the payment or refund result in Stripe." },
        ]}
        doneWhen={[
          "The booking status and released capacity match the cancellation.",
          "The Stripe refund state matches the amount recorded in Booking Detail.",
        ]}
      />

      <SupportNote>Cancellation does not automatically refund a Stripe charge. Treat reservation status and money movement as two related checks.</SupportNote>
      <p className="text-sm leading-relaxed text-slate-600">Review the <a href="/docs/payments" className="font-semibold text-amber-dark hover:underline">Payments guide</a> before issuing a full, partial, or offline refund.</p>
      <GuideSection title="Check-in exception">
        <p>If a checked-in booking still needs to be cancelled, open Booking Detail and use the cancellation flow so status, capacity, customer messages, and any equipment hold stay aligned.</p>
      </GuideSection>
    </OperatorGuide>
  );
}
