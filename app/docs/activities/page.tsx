import { createMarketingMetadata } from "../../lib/metadata";
import { GuideSection, OperatorGuide, SupportNote, TaskWalkthrough } from "../components/OperatorGuide";

export const metadata = createMarketingMetadata({
  title: "Activities & Pricing",
  description: "Create and publish ReservKit activities with pricing, duration packages, availability, waivers, deposits, locations, add-ons, and equipment requirements.",
  path: "/docs/activities",
});

export default function ActivitiesGuide() {
  return (
    <OperatorGuide
      title="Activities & Pricing"
      description="Build the bookable products customers see, then verify each activity from price and duration through availability and checkout."
      path="/docs/activities"
      related={[
        { href: "/docs/bookings-availability", title: "Bookings & Availability", description: "Generate openings and understand capacity." },
        { href: "/docs/equipment", title: "Equipment", description: "Connect required gear and named units to activities." },
      ]}
    >
      <TaskWalkthrough
        title="Create and publish an activity"
        path="Activities -> Add Activity"
        steps={[
          { title: "Complete Details", body: "Add the customer-facing name, description, type, location, duration, slot behavior, capacity, and pricing model." },
          { title: "Review Fields", body: "Add only the customer questions the team needs to deliver the booking." },
          { title: "Create future times", body: "Open Availability, add the recurring schedule rows or one-time openings, and check the generated future times." },
          { title: "Attach optional requirements", body: "Review Equipment, Waivers, and Deposit for the activity. Leave optional tools unused when the operation does not need them." },
          { title: "Save and inspect", body: "Select Save, then open the activity's public booking link and check the complete customer-facing result." },
        ]}
        doneWhen={[
          "The saved activity appears in Activities with the expected price and status.",
          "The public activity page shows at least one future bookable time.",
          "The checkout preview reflects the intended guest count, price, and optional requirements.",
        ]}
      />
      <GuideSection title="Publishing requirements">
        <SupportNote>Saving an activity does not make it bookable by itself. It also needs a public status, a valid price, future availability, and a configured organization booking slug.</SupportNote>
      </GuideSection>

      <GuideSection title="Choose the right pricing model">
        <p>Use per-person pricing when the total should scale with guest count. Use flat pricing when one reservation covers the whole rental or private group.</p>
        <p>Duration Packages & Pricing can offer choices such as one hour, two hours, or a half day. One availability window can support multiple duration packages; the selected duration still has to finish before the window closes.</p>
        <p>Pricing tiers can describe guest-count bands for per-person activities. Always run example totals on the public page after changing prices, tiers, duration packages, add-ons, coupons, or dynamic-pricing rules.</p>
      </GuideSection>

      <GuideSection title="Locations, add-ons, waivers, and deposits">
        <p>Set a fixed service location when every booking starts at the same place. When your activity supports operator-defined location choices, use clear labels and instructions that a guest can recognize at checkout.</p>
        <p>Priced add-ons are optional extras selected during booking. Waiver templates are assigned in the Waivers tab and are completed after payment. Refundable damage deposits are separate checkout line items on eligible plans.</p>
        <SupportNote>A released damage-deposit status is an operational record. If money must move back to the customer, confirm the related action in Stripe and reconcile Booking Detail.</SupportNote>
      </GuideSection>

      <GuideSection title="Publish checklist">
        <ul className="list-disc space-y-2 pl-5">
          <li>Name, description, guest instructions, timezone, and location read correctly.</li>
          <li>Every duration and guest count produces the expected subtotal.</li>
          <li>Capacity and cutoff rules match how the operation actually runs.</li>
          <li>Required waivers, equipment demand, add-ons, service fees, taxes, and deposits appear as intended.</li>
          <li>The focused activity link opens the correct activity and at least one future time is bookable.</li>
        </ul>
      </GuideSection>
    </OperatorGuide>
  );
}
