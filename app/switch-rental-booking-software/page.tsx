import { SeoProductPage, type SeoProductPageConfig } from "../components/SeoProductPage";
import { createMarketingMetadata } from "../lib/metadata";

export const metadata = createMarketingMetadata({
  title: "Switch Rental Booking Software without Breaking Your Live Flow",
  description: "A practical migration path for rental operators switching booking software: map one activity, connect Stripe, configure waivers, test, then move traffic.",
  keywords: ["switch rental booking software", "rental booking software migration", "change booking systems"],
  path: "/switch-rental-booking-software",
});

const config: SeoProductPageConfig = {
  eventKey: "switch_booking_software",
  eyebrow: "Switch rental booking systems",
  title: "Switch rental booking software one tested flow at a time",
  intro: "Avoid a risky all-at-once migration. Rebuild one real activity, connect the payment and waiver paths, complete a customer test booking, and only then replace the links sending traffic to your old system.",
  image: { src: "/product-clearwake-light-bookings-dashboard.png", alt: "ReservKit operator bookings dashboard used to verify a migrated booking flow" },
  bestFitTitle: "This migration path works best when you can",
  bestFit: ["Choose one representative activity to move first", "Document current price, duration, capacity, and availability rules", "Complete Stripe onboarding and waiver setup", "Run a booking as a customer before changing live links"],
  problemTitle: "The risk is not creating an account. It is moving live traffic too soon.",
  problemBody: "Booking migrations fail when operators recreate a catalog but skip the complete customer and operator journey. ReservKit's guided setup offer centers on one first bookable flow that can be inspected end to end before launch.",
  workflowTitle: "A controlled migration in three stages",
  workflow: [
    { title: "Map", body: "Record the existing activity details, booking rules, customer fields, payment setup, waiver requirements, and links currently in use." },
    { title: "Rebuild and test", body: "Configure the activity in ReservKit, connect Stripe, attach waivers, and complete the full booking as a customer." },
    { title: "Move traffic", body: "Verify the operator record and communications, then update only the customer links you are ready to move." },
  ],
  featureTitle: "What to verify before replacing an old booking link",
  features: ["Activity name, description, photos, and location", "Pricing, duration, capacity, and availability", "Booking cutoff and guest detail collection", "Stripe connection and checkout amounts", "Required waiver templates and signer path", "Customer confirmation and operator notification behavior", "Booking record, staff context, and check-in view", "Cancellation, reschedule, and refund procedure"],
  proofTitle: "Guided setup is available for the first live booking flow",
  proofBody: "ReservKit can help map the current workflow and review the first configured activity. Data migration depends on the export available from the existing platform, so the first priority is a correct live booking path rather than promising an automatic full-history import.",
  faqs: [
    { title: "Do I need to switch every activity at once?", body: "No. Moving one representative activity first limits risk and gives the team a real workflow to validate before expanding." },
    { title: "Will ReservKit automatically import all of my old data?", body: "Existing data migration depends on the format and completeness of the export from the current platform. It should be assessed before any import commitment is made." },
    { title: "When should I update my website booking link?", body: "After the activity, availability, Stripe connection, waivers, customer checkout, communications, and operator record have all been tested successfully." },
    { title: "Can I keep the old system running during setup?", body: "Yes. The staged approach is designed so configuration and testing can happen before customer traffic is moved." },
  ],
  related: [
    { href: "/docs/getting-started", label: "Getting started guide", description: "Follow the current setup sequence inside ReservKit." },
    { href: "/boat-rental-software", label: "Boat rental software", description: "See the full dockside booking workflow." },
    { href: "/pricing", label: "Transparent pricing", description: "Compare plans before moving your booking volume." },
  ],
  ctaTitle: "Map the first booking flow you want to move",
  ctaBody: "Start on Free or request guided setup before changing any customer-facing link.",
};

export default function SwitchRentalBookingSoftware() { return <SeoProductPage config={config} />; }
