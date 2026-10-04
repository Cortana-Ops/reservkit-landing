import { createMarketingMetadata } from "../../lib/metadata";
import { GuideSection, OperatorGuide, SupportNote, TaskWalkthrough } from "../components/OperatorGuide";

export const metadata = createMarketingMetadata({
  title: "Getting Started Guide",
  description: "Set up ReservKit, create your first activity, connect Stripe, configure waivers, and run a test booking before sharing your booking link.",
  path: "/docs/getting-started",
});

export default function GettingStarted() {
  return (
    <OperatorGuide
      title="Getting Started with ReservKit"
      description="Follow this sequence from a new account to one tested customer booking. Finish each completion check before moving to the next task."
      path="/docs/getting-started"
      related={[
        { href: "/docs/bookings-availability", title: "Bookings & Availability", description: "Create openings, verify capacity, and share the right booking link." },
        { href: "/docs/payments", title: "Payments & Fees", description: "Connect Stripe, understand fees, and reconcile refunds and deposits." },
      ]}
    >
      <TaskWalkthrough
        title="1. Create the organization"
        path="app.reservkit.com/login -> Sign up -> Onboarding"
        intro="New public organizations begin on Free, so you can configure the first booking flow before selecting a paid plan."
        steps={[
          { title: "Create the owner account", body: "Use the public signup path, verify the account when prompted, and continue to Onboarding." },
          { title: "Enter the business basics", body: "Add the business name, choose the closest business type, and select the operating timezone." },
          { title: "Finish onboarding", body: "Create the organization and wait for the operator dashboard to load before opening another page." },
        ]}
        doneWhen={[
          "The dashboard loads with the correct organization selected.",
          "Settings -> Organization shows the correct business name and timezone.",
        ]}
      />

      <TaskWalkthrough
        title="2. Complete the public business profile"
        path="Settings -> Organization"
        steps={[
          { title: "Add customer-facing details", body: "Review the business name, email, phone, logo, timezone, and any customer-facing address or instructions your operation uses." },
          { title: "Set the booking URL slug", body: "Choose a short, stable slug based on the business name. This becomes part of every public booking URL." },
          { title: "Review booking rules", body: "Set the minimum lead time, maximum advance-booking window, cancellation policy, and other available organization rules." },
          { title: "Save and verify", body: "Select Save Organization Settings, then open Settings -> Booking Widget and confirm that a Public Booking URL is available." },
        ]}
        doneWhen={[
          "The organization profile saves without an error.",
          "The Public Booking URL contains the intended business slug.",
        ]}
      />

      <TaskWalkthrough
        title="3. Create the first activity"
        path="Activities -> Add Activity"
        steps={[
          { title: "Complete Details", body: "Enter the customer-facing activity name and description, choose the activity and slot type, then set duration, capacity, location, and the correct pricing model." },
          { title: "Add booking fields only when needed", body: "Use Fields for information the operator truly needs from the customer. Avoid collecting sensitive information that is not required to deliver the activity." },
          { title: "Create availability", body: "Open Availability, select Add Schedule, and define the operating day, opening window, last check-in or end time, interval, and any available capacity controls." },
          { title: "Attach optional requirements", body: "Use Equipment, Waivers, and Deposit only when this activity needs them. Plan gates shown in the app control which tools are available." },
          { title: "Save the activity", body: "Select Save. All activity tabs save together, so resolve any validation message before closing the editor." },
        ]}
        doneWhen={[
          "The activity appears on Activities with the expected price and duration.",
          "At least one future opening appears for the activity.",
          "The focused public booking link opens the correct activity.",
        ]}
      />

      <TaskWalkthrough
        title="4. Connect customer payments"
        path="Billing -> Connect Stripe Account"
        intro="ReservKit collects the plan-based booking fee on the booking subtotal where applicable. Tips, taxes, operator service fees, and refundable damage deposits are not marked up by ReservKit."
        steps={[
          { title: "Start Stripe onboarding", body: "Select Connect Stripe Account and complete Stripe's business and payout onboarding in the Stripe window." },
          { title: "Return to ReservKit", body: "After Stripe sends you back, reopen Billing if needed and wait for the connection status to finish loading." },
          { title: "Check payment readiness", body: "Confirm Billing shows Connected. Stripe controls payout timing, processing fees, and connected-account money movement." },
        ]}
        doneWhen={[
          "Billing shows the Stripe account as Connected.",
          "The public activity can continue from guest details to Stripe Checkout.",
        ]}
      />

      <TaskWalkthrough
        title="5. Run a controlled test booking"
        path="Settings -> Booking Widget -> Public Booking URL"
        intro="Use the same path a customer will use. A standard organization connected to live Stripe can create a real charge."
        steps={[
          { title: "Open the public link in a private window", body: "Confirm the correct business and activity appear without relying on the signed-in operator session." },
          { title: "Choose the complete booking", body: "Select the activity, future time, duration, and guest count. Review add-ons, fees, waiver requirements, and the displayed total." },
          { title: "Complete checkout once", body: "Enter controlled customer details and continue through Stripe. Do not repeatedly submit if the first result is uncertain." },
          { title: "Verify the customer result", body: "Confirm the payment-success page, booking reference, receipt, Guest Hub link, any required waiver path, and that guests receive a booking confirmation email when confirmations are enabled." },
          { title: "Verify the operator result", body: "Open Bookings -> Booking Detail and compare the customer, time, guest count, amount, payment state, waivers, equipment demand, and message status with the checkout." },
        ]}
        doneWhen={[
          "The customer success page and operator Booking Detail refer to the same reservation.",
          "Payment, waiver, equipment, and notification states match the configured activity.",
          "Any real controlled charge is reconciled or refunded according to the test plan.",
        ]}
      />

      <TaskWalkthrough
        title="6. Share the booking path"
        path="Settings -> Booking Widget"
        intro="Settings -> Booking Widget can generate the all-activity public booking link, activity-specific booking links, and website iframe snippets. Dedicated calendar-only or activity-card-only embeds are future options, not launch features."
        steps={[
          { title: "Choose the right link", body: "Use the all-activity URL when customers should browse the catalog. Use an activity-specific URL when a button should open one activity directly." },
          { title: "Add it to one customer channel", body: "Place the tested URL on the business website, Google Business profile, social profile, or another controlled channel." },
          { title: "Test from the published location", body: "Use a phone that is not signed into the operator account and confirm the published button reaches the same tested booking flow." },
        ]}
        doneWhen={[
          "The published link opens the intended business and activity on mobile.",
          "A customer can reach an available time and the expected checkout without operator access.",
        ]}
      />

      <GuideSection title="Before sending real traffic">
        <ul className="list-disc space-y-2 pl-5">
          <li>Business identity, timezone, booking slug, and customer contact details are correct.</li>
          <li>Activity price, duration, capacity, cutoff rules, and future availability have been checked.</li>
          <li>Stripe is connected and the controlled checkout produced the expected booking record.</li>
          <li>Required waiver, equipment, deposit, add-on, tax, and notification behavior has been verified.</li>
          <li>At least one staff member knows where to find Bookings, Check-In, and Booking Detail.</li>
        </ul>
        <SupportNote>Do not move customer traffic because setup merely saved. Move traffic after the public flow and operator record agree in a controlled booking test.</SupportNote>
      </GuideSection>
    </OperatorGuide>
  );
}
