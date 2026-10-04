import { createMarketingMetadata } from "../../lib/metadata";
import { GuideSection, OperatorGuide, Steps, SupportNote } from "../components/OperatorGuide";

export const metadata = createMarketingMetadata({
  title: "Settings & Migration",
  description: "Configure ReservKit organization, account, booking widget, payment, notification, integration, and data settings, then safely stage customer or future-booking imports.",
  path: "/docs/settings-migration",
});

export default function SettingsMigrationGuide() {
  return (
    <OperatorGuide
      title="Settings & Migration"
      description="Use the Settings tabs as the control center for business identity, booking links, fees, messaging, integrations, and data movement."
      path="/docs/settings-migration"
      related={[
        { href: "/docs/notifications", title: "Notifications", description: "Configure delivery and understand test-send limits." },
        { href: "/docs/getting-started", title: "Getting Started", description: "Follow the recommended first-booking setup sequence." },
      ]}
    >
      <GuideSection title="Settings map">
        <ul className="list-disc space-y-2 pl-5">
          <li><strong className="text-navy">Organization:</strong> business identity, timezone, booking URL slug, operating rules, and customer-facing details.</li>
          <li><strong className="text-navy">Account:</strong> signed-in account details and security actions.</li>
          <li><strong className="text-navy">Booking Widget:</strong> all-activity and activity-specific links plus supported iframe snippets.</li>
          <li><strong className="text-navy">Payments:</strong> customer-facing tax and service-fee configuration where supported.</li>
          <li><strong className="text-navy">Notifications:</strong> message switches, review link, safe test sends, and the delivery log.</li>
          <li><strong className="text-navy">Integrations:</strong> optional Resend and Twilio credentials and readiness checks.</li>
          <li><strong className="text-navy">Data:</strong> exports and links to migration tools.</li>
        </ul>
      </GuideSection>

      <GuideSection title="Booking slug and widget">
        <p>The booking URL slug becomes part of the public address, so use a short stable version of the business name. After changing it, verify the all-activity link, each focused activity link, and any iframe already installed on your website.</p>
        <p>The supported iframe embeds the full ReservKit booking flow for all activities or one activity. Calendar-only and activity-card-only embeds remain future options.</p>
      </GuideSection>

      <GuideSection title="Notification and integration checks">
        <p>Managed delivery can work without operator-owned provider credentials when enabled. Custom email requires both a Resend API key and verified From Email. Custom SMS requires Twilio Account SID, Auth Token, and From Number.</p>
        <p>Settings test sends use the saved business contact and do not message customers or run live reminder jobs. The delivery log is read-only and intentionally avoids exposing message bodies, customer contact data, recovery links, verification codes, or provider secrets.</p>
      </GuideSection>

      <GuideSection title="Import customers or future bookings">
        <Steps items={[
          "Export a CSV from the previous platform and keep an untouched backup.",
          "Open Migration Center, choose Customers or Future Bookings, and identify the source platform.",
          "Upload the CSV and review every warning, duplicate match, activity name, date, start time, and slot-capacity result.",
          "Stage the rows first. Commit only after the preview matches the intended organization and booking slots.",
          "After commit, verify Customers, Bookings, Calendar, guest counts, and source references before importing another batch.",
        ]} />
        <SupportNote>Migration is not a blind file upload. Future bookings must match an existing activity and future slot, and duplicate source records are guarded. Stop and correct the CSV or app setup when preview warnings are unclear.</SupportNote>
      </GuideSection>

      <GuideSection title="Before changing live settings">
        <p>Record the current value, make one logical change, save it, and verify the customer-facing result. For pricing, payment, slug, email, or SMS changes, run a controlled end-to-end check before the next live booking window.</p>
      </GuideSection>
    </OperatorGuide>
  );
}
