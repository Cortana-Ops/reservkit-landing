import { SeoProductPage, type SeoProductPageConfig } from "../components/SeoProductPage";
import { createMarketingMetadata } from "../lib/metadata";

export const metadata = createMarketingMetadata({
  title: "Stripe Booking Software for Rental Businesses",
  description: "Rental booking software using Stripe Connect for customer checkout, booking payments, refunds, deposits, and operator payment visibility.",
  keywords: ["stripe booking software for rentals", "rental booking stripe connect", "stripe rental reservation software"],
  path: "/stripe-booking-software-for-rentals",
});

const config: SeoProductPageConfig = {
  eventKey: "stripe_rental_booking",
  eyebrow: "Rental bookings with Stripe",
  title: "Rental booking software with Stripe Connect checkout",
  intro: "Connect the operator's Stripe account, let ReservKit create the checkout flow, and keep payment status connected to the customer booking and day-of workflow.",
  image: { src: "/product-public-booking-live.png", alt: "ReservKit public booking page leading customers toward Stripe checkout" },
  bestFitTitle: "A clear payment setup for operators who want",
  bestFit: ["A direct booking page connected to Stripe", "Published ReservKit plan and booking fees", "Payment and balance context with each booking", "Refund and deposit workflows tied to the operator record"],
  problemTitle: "Online booking and payment operations should share one record",
  problemBody: "A successful Stripe payment still has to match the right customer, activity, date, guests, and operational status. ReservKit creates the connected-account checkout flow and records the resulting payment context with the booking.",
  workflowTitle: "Connect Stripe, test checkout, then accept live bookings",
  workflow: [
    { title: "Complete Stripe onboarding", body: "The business connects its Stripe account and completes the information Stripe requires for live payments." },
    { title: "Run the booking checkout", body: "ReservKit creates a Stripe Checkout flow for the selected activity and configured booking amounts." },
    { title: "Operate from the booking", body: "Payment status, customer details, refunds, deposit context, and booking status remain available to permitted operators." },
  ],
  featureTitle: "Payment capabilities around the reservation",
  features: ["Stripe Connect onboarding", "Stripe Checkout for public bookings", "Plan-based ReservKit booking fees", "Operator-configured customer-facing service fees", "Full and partial refund requests", "Refundable damage deposits on eligible plans", "Booking payment and balance status", "Reports for booking income, tips, and booking fees"],
  proofTitle: "Live mode is a launch gate, not an assumption",
  proofBody: "A new operator should confirm Stripe onboarding is complete, run the intended test flow, verify live account readiness, and understand refunds and deposit handling before sending paid customer traffic to the booking page.",
  faqs: [
    { title: "Does each ReservKit business connect Stripe?", body: "Yes. ReservKit uses Stripe Connect so each operator completes the connected-account onboarding required for its payment setup." },
    { title: "Who controls payout timing and processing fees?", body: "Stripe controls payout timing, processing fees, and connected-account money movement. ReservKit publishes its separate plan and booking fees." },
    { title: "Can a business accept payments before Stripe onboarding is complete?", body: "No paid booking flow should be treated as ready until the business has completed the required Stripe onboarding and ReservKit reports the connection as ready." },
    { title: "Can operators refund a booking?", body: "Eligible Stripe-backed payments support full and partial refund requests through the operator workflow, subject to payment state and Stripe results." },
  ],
  related: [
    { href: "/docs/payments", label: "Payment documentation", description: "Review current payment behavior and operator responsibilities." },
    { href: "/rental-booking-software-with-damage-deposits", label: "Damage deposit software", description: "See how refundable deposits fit into rental checkout." },
    { href: "/pricing", label: "ReservKit pricing", description: "Compare monthly plans, booking fees, and feature access." },
  ],
  ctaTitle: "Connect and test your first paid booking flow",
  ctaBody: "Start on Free, configure an activity, and verify Stripe readiness before taking customer payments.",
};

export default function StripeBookingSoftwareForRentals() { return <SeoProductPage config={config} />; }
