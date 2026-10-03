import { SeoProductPage, type SeoProductPageConfig } from "../components/SeoProductPage";
import { createMarketingMetadata } from "../lib/metadata";

export const metadata = createMarketingMetadata({
  title: "Rental Booking Software with Damage Deposits",
  description: "Rental booking software with Stripe checkout, refundable damage deposits, booking records, waivers, and operator follow-up tools.",
  keywords: ["rental booking software with damage deposits", "rental damage deposit software", "booking system refundable deposit"],
  path: "/rental-booking-software-with-damage-deposits",
});

const config: SeoProductPageConfig = {
  eventKey: "damage_deposit_booking",
  eyebrow: "Refundable damage deposits",
  title: "Rental booking software with refundable damage deposits at checkout",
  intro: "Collect an eligible refundable damage deposit as a separate charge line at checkout, keep its status with the booking, and refund the appropriate amount through Stripe after the rental. This is not a card authorization hold.",
  image: { src: "/product-bookings-dashboard.png", alt: "ReservKit bookings dashboard with customer, payment, and booking details" },
  bestFitTitle: "Useful for rental businesses that need",
  bestFit: ["A deposit amount configured for eligible activities", "Checkout records connected to the reservation", "A clear operator status after the activity", "Stripe as the system handling the underlying money movement"],
  problemTitle: "Damage deposits need an operational follow-through",
  problemBody: "Collecting a deposit is only one step. The booking record also needs to show the customer, activity, payment context, and deposit status so an operator can review what happened and complete the appropriate Stripe action after the rental.",
  workflowTitle: "A clear deposit path from checkout to post-rental review",
  workflow: [
    { title: "Configure", body: "Set the refundable damage deposit for the eligible activity and confirm the active plan supports it." },
    { title: "Collect at checkout", body: "ReservKit creates the connected-account Stripe Checkout flow with the configured booking amounts." },
    { title: "Resolve after the activity", body: "Review the rental and refund the appropriate amount through Stripe under your policy. Record the deposit outcome in ReservKit; changing its status alone does not return funds or collect an additional damage charge." },
  ],
  featureTitle: "Deposit-related booking context",
  features: ["Activity-level deposit configuration", "Stripe Connect checkout flow", "Deposit amount shown in the customer booking path", "Booking and payment context in the operator view", "Customer details tied to the reservation", "Cancellation and refund workflows", "Role-based operator access", "Payment documentation for setup and follow-up"],
  proofTitle: "Verify the deposit flow before accepting customers",
  proofBody: "Ask ReservKit for a guided sandbox demo if you need a no-money walkthrough. Standard operator accounts connect live Stripe accounts; do not enter test cards into live checkout. Before customer traffic, verify checkout amounts and your refund procedure with a controlled real transaction, allowing for Stripe fees.",
  faqs: [
    { title: "Is the damage deposit refundable?", body: "ReservKit models this as a refundable damage deposit. The actual money movement must be completed through Stripe according to the operator's policy and the transaction state." },
    { title: "Does changing a status in ReservKit move the money?", body: "No. The operator should verify and complete the real Stripe action. ReservKit's status helps record the operational outcome but is not a substitute for the Stripe transaction." },
    { title: "Are damage deposits available on every plan?", body: "No. Refundable damage deposits are included from the Growth tier upward under the current plan structure." },
    { title: "Can ReservKit issue partial refunds?", body: "The current payment workflow supports full and partial refund requests for eligible Stripe-backed payments, subject to the transaction state and operator policy." },
  ],
  related: [
    { href: "/docs/payments", label: "Payment documentation", description: "Review deposits, refunds, fees, and Stripe responsibilities." },
    { href: "/boat-rental-software", label: "Boat rental software", description: "Use deposits alongside waivers and dockside check-in." },
    { href: "/stripe-booking-software-for-rentals", label: "Stripe booking software", description: "Understand the connected-account checkout flow." },
  ],
  ctaTitle: "Test your rental payment and deposit flow",
  ctaBody: "Configure one activity and verify the complete checkout and operator follow-up before going live.",
};

export default function RentalBookingSoftwareWithDamageDeposits() { return <SeoProductPage config={config} />; }
