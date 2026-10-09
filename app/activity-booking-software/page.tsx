import { SeoProductPage, type SeoProductPageConfig } from "../components/SeoProductPage";
import { createMarketingMetadata } from "../lib/metadata";

export const metadata = createMarketingMetadata({
  title: "Activity Booking Software - Reservations, Payments & Waivers",
  description: "Activity booking software for direct reservations, availability, Stripe payments, guest waivers, staff coordination, and day-of check-in.",
  keywords: ["activity booking software", "activity reservation system", "experience booking software"],
  path: "/activity-booking-software",
});

const config: SeoProductPageConfig = {
  eventKey: "activity_booking",
  eyebrow: "Activity booking software",
  title: "Activity booking software for the customer journey and the day of work",
  intro: "Sell scheduled activities and experiences directly, route checkout through Stripe, collect guest details and waiver evidence, and keep staff aligned from confirmation through check-in.",
  image: { src: "/product-clearwake-light-public-booking-live.png", alt: "ReservKit public booking page showing a catalog of scheduled activities" },
  bestFitTitle: "A practical fit for operators who",
  bestFit: [
    "Sell timed tours, rentals, excursions, or guided experiences",
    "Need guest limits, booking cutoffs, and future availability",
    "Require waivers, add-ons, reminders, or staff coordination",
    "Want a direct booking link without depending on a third-party discovery site",
  ],
  problemTitle: "The activity is delivered after checkout, not inside it",
  problemBody: "Operators still need to know who is coming, who paid, who signed, what staff or equipment the booking needs, and whether the group is ready to check in. ReservKit keeps that operational context attached to the reservation.",
  workflowTitle: "From published activity to completed service",
  workflow: [
    { title: "Publish the activity", body: "Configure the customer-facing details, price, duration, capacity, cutoff rules, availability, and required booking fields." },
    { title: "Take the booking", body: "Guests choose a time, enter their details, select eligible add-ons, and complete Stripe Checkout without creating an account." },
    { title: "Run the day", body: "Staff review payment and waiver readiness, assignments, notes, guest counts, and check-in status from the operator workspace." },
  ],
  featureTitle: "Activity operator tools available in ReservKit",
  features: [
    "Public catalog and focused activity booking links",
    "Recurring availability and one-time openings",
    "Guest capacity, booking cutoffs, and duration options",
    "Stripe Connect payments, refunds, coupons, and eligible add-ons",
    "Per-guest digital waiver evidence",
    "Confirmation and reminder messages where configured",
    "Staff assignments, tasks, and day-of check-in",
    "Booking, guest, and activity reporting on eligible plans",
  ],
  proofTitle: "Start with one activity customers can actually complete",
  proofBody: "The recommended setup path is deliberately small: configure one real activity, create future availability, connect Stripe, attach any required waiver, and complete a controlled customer booking before sharing the link.",
  faqs: [
    { title: "What kinds of activities can I configure?", body: "ReservKit supports scheduled rental, tour, excursion, and experience workflows that can be represented by an activity, price, duration, guest capacity, and availability." },
    { title: "Do guests need a ReservKit account?", body: "No. Guests can book, pay, receive their confirmation, use Guest Hub, and sign required waivers without creating an operator account." },
    { title: "Can I create private group activities?", body: "Yes. Activity pricing and slot behavior can be configured for per-person or group-style bookings, including exclusive/private slots where the configured activity requires them." },
    { title: "Does ReservKit distribute activities to marketplaces?", body: "No. ReservKit currently supports direct booking links and supported iframe embeds. Marketplace, OTA, and channel-manager distribution are not launch features." },
  ],
  related: [
    { href: "/equipment-rental-booking-software", label: "Equipment rental booking software", description: "Connect timed reservations to operator-managed gear requirements." },
    { href: "/tour-operator-software", label: "Tour operator software", description: "See the direct-booking workflow for tours and guided experiences." },
    { href: "/docs/getting-started", label: "First booking walkthrough", description: "Follow the exact setup path from signup through a controlled booking test." },
  ],
  ctaTitle: "Publish and test your first activity",
  ctaBody: "Start a 14-day full-access trial, build one complete booking path, and move customer traffic only after you have tested it yourself.",
};

export default function ActivityBookingSoftware() {
  return <SeoProductPage config={config} />;
}
