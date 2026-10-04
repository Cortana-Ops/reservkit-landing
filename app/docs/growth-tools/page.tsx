import { createMarketingMetadata } from "../../lib/metadata";
import { GuideSection, OperatorGuide, Steps, SupportNote } from "../components/OperatorGuide";

export const metadata = createMarketingMetadata({
  title: "Growth Tools",
  description: "Use ReservKit promo codes, dynamic pricing, add-ons, broadcasts, reports, deposits, waivers, and equipment tools without surprising customers at checkout.",
  path: "/docs/growth-tools",
});

export default function GrowthToolsGuide() {
  return (
    <OperatorGuide
      title="Growth Tools"
      description="Configure promotions, pricing rules, add-ons, broadcasts, and operational tools with clear limits and a controlled test before launch."
      path="/docs/growth-tools"
      related={[
        { href: "/docs/payments", title: "Payments", description: "Understand fee basis, refunds, and Stripe money movement." },
        { href: "/docs/reports", title: "Reports & Analytics", description: "Review booking income, tips, volume, and exports." },
      ]}
    >
      <GuideSection title="Promo codes">
        <Steps items={[
          "Open Promo Codes and choose Create Promo Code.",
          "Choose percentage or fixed discount, then set the amount and optional minimum order, maximum uses, and expiry date.",
          "Save the code and run a public checkout preview before sharing it.",
          "Deactivate a code to stop future use without changing discounts already recorded on paid bookings.",
        ]} />
        <p>Promo codes discount the eligible booking subtotal. They do not discount tips, taxes, operator service fees, or refundable damage deposits.</p>
      </GuideSection>

      <GuideSection title="Dynamic pricing">
        <p>Dynamic Pricing supports lead-time, capacity, day-of-week, and date-range rules. Adjustments can be a fixed amount or percentage; negative values discount and positive values add a surcharge.</p>
        <p>Rules can apply to one activity or all activities. Multiple matching active rules in the same scope stack in priority order, so review the combined result rather than checking each rule in isolation.</p>
        <SupportNote>Before activating stacked rules, test dates where more than one condition matches. A correct individual rule can still produce an unintended combined price.</SupportNote>
      </GuideSection>

      <GuideSection title="Add-ons, deposits, waivers, and equipment">
        <p>Priced add-ons and refundable damage deposits are configured on the activity. Waiver templates and equipment requirements are assigned to the activities that need them. These tools are available according to the current plan gates shown on Pricing and Billing.</p>
        <p>Customers do not choose a specific named equipment unit. ReservKit uses operator-configured equipment requirements and named units for internal readiness and blocking.</p>
      </GuideSection>

      <GuideSection title="Broadcast SMS">
        <p>Broadcasts can target customers with bookings in the next 30 days or all customers with a phone number. ReservKit previews the recipient count before sending and stops if that count changes before confirmation.</p>
        <p>SMS delivery requires configured Twilio credentials or ReservKit-managed delivery. Review message length and segment count because longer messages can create multiple SMS segments. A confirmed broadcast cannot be undone.</p>
      </GuideSection>

      <GuideSection title="Measure the result">
        <p>Use Reports to compare booking income, tips, booking fees, volume, and guest counts. Keep campaign names or promo codes consistent enough that the team can explain what changed.</p>
        <p>ReservKit reports are operational summaries, not an accounting-grade ledger. Reconcile payouts, processing fees, disputes, and chargebacks in Stripe.</p>
      </GuideSection>
    </OperatorGuide>
  );
}
