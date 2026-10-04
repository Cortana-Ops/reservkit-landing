import { createMarketingMetadata } from "../../lib/metadata";
import { GuideSection, OperatorGuide, SupportNote, TaskWalkthrough } from "../components/OperatorGuide";

export const metadata = createMarketingMetadata({
  title: "Equipment",
  description: "Configure equipment records, assign equipment to an activity, and use named unit blocking in ReservKit for Growth and higher rental operators.",
  path: "/docs/equipment",
});

export default function EquipmentDocs() {
  return (
    <OperatorGuide
      title="Equipment"
      description="Equipment is optional. Use it when staff need booking demand, shortage visibility, or a named physical unit held for a reservation."
      path="/docs/equipment"
      related={[
        { href: "/docs/activities", title: "Activities & Pricing", description: "Configure the activity that consumes the equipment." },
        { href: "/docs/bookings-availability", title: "Bookings & Availability", description: "Review time slots, capacity, and overlapping reservations." },
      ]}
    >
      <GuideSection title="Choose the level of tracking you need">
        <ul className="list-disc space-y-2 pl-5">
          <li><strong className="text-navy">No equipment setup:</strong> use activity guest capacity when the team does not need gear-level planning.</li>
          <li><strong className="text-navy">Equipment requirements:</strong> calculate normal demand per guest or per booking, such as one life jacket per guest.</li>
          <li><strong className="text-navy">Named physical units:</strong> identify the actual item, such as Jet Ski 01, and prevent that unit from being held by overlapping bookings.</li>
        </ul>
        <SupportNote>Customers book the activity, time, duration, and guest count. They do not choose a named physical unit during checkout.</SupportNote>
      </GuideSection>

      <TaskWalkthrough
        title="Create an equipment record"
        path="Equipment -> Add Equipment"
        steps={[
          { title: "Name the equipment type", body: "Use a name staff will recognize, such as Two-person Kayak or Pontoon. Choose the closest category." },
          { title: "Set planning quantity and condition", body: "Enter the total quantity available for planning, choose the current condition, and add an internal storage or handling note if useful." },
          { title: "Save the record", body: "Select Save and wait for the new equipment row to appear before assigning it to an activity." },
        ]}
        doneWhen={[
          "The equipment appears on the Equipment page with the intended quantity and condition.",
          "The same equipment becomes available in an activity's Equipment tab.",
        ]}
      />

      <TaskWalkthrough
        title="Attach normal equipment demand to an activity"
        path="Activities -> Edit activity -> Equipment"
        steps={[
          { title: "Open the activity editor", body: "Use the Edit activity icon on the activity that normally consumes the equipment." },
          { title: "Add a requirement", body: "Select Add first equipment requirement, choose the equipment, and choose Per guest or Per booking." },
          { title: "Set the quantity", body: "Enter the amount required by the rule. For example, 1 per guest requires four units for a four-guest booking." },
          { title: "Save all activity tabs", body: "Select Save. If the app reports unavailable equipment or requirements, retry the failed load before saving." },
        ]}
        doneWhen={[
          "Reopening the activity shows the saved equipment rule.",
          "A controlled booking produces the expected equipment demand for its guest count.",
        ]}
      />

      <TaskWalkthrough
        title="Add named physical units"
        path="Equipment -> equipment row -> Manage units"
        steps={[
          { title: "Open Physical units", body: "Select Manage units on the equipment row. Named-unit controls require the eligible plan access shown in the app." },
          { title: "Add each real unit", body: "Select Add unit and enter a unique staff-facing label, such as Kayak 01, Kayak 02, or Pontoon 03." },
          { title: "Set unit status", body: "Keep a ready unit Available. Change the status when a unit should not be assigned, and add a concise internal note when useful." },
          { title: "Verify overlap behavior", body: "Use controlled bookings in overlapping windows and confirm the same named unit is not held by both reservations." },
        ]}
        doneWhen={[
          "The Physical units dialog shows every tracked item with the correct status.",
          "Overlapping controlled bookings use different available units or expose the expected shortage.",
        ]}
      />

      <GuideSection title="Plan access and current limits">
        <p>Equipment requirements and named equipment-unit blocking are available on Growth and higher plans. Free and Starter operators can continue using activity capacity without equipment records.</p>
        <p>Current equipment tools cover booking demand, readiness, and named-unit blocking. Asset-code workflows, repair schedules, warehouse stock accounting, and customer-selected unit variants are not current launch features.</p>
      </GuideSection>

      <GuideSection title="When a booking changes">
        <p>Use Booking Detail for cancellations and booking changes so reservation status, slot capacity, customer messages, and equipment holds stay aligned. Review the affected time window after changing a booking that already has equipment demand or a named unit.</p>
      </GuideSection>
    </OperatorGuide>
  );
}
