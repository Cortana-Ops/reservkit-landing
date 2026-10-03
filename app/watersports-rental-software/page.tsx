import { SeoProductPage, type SeoProductPageConfig } from "../components/SeoProductPage";
import { createMarketingMetadata } from "../lib/metadata";

export const metadata = createMarketingMetadata({
  title: "Watersports Rental Software - Bookings, Payments & Waivers",
  description: "Watersports rental software for direct bookings, Stripe payments, digital waivers, deposits, staff coordination, and day-of check-in.",
  keywords: ["watersports rental software", "water sports booking software", "rental reservation software"],
  path: "/watersports-rental-software",
});

const config: SeoProductPageConfig = {
  eventKey: "watersports_rental",
  eyebrow: "Watersports rental software",
  title: "One booking workspace for watersports rentals and day-of operations",
  intro: "Sell boat, jet ski, kayak, paddleboard, and other bookable activities through direct links while keeping payments, waiver evidence, deposits, guests, and staff context with each booking.",
  image: { src: "/product-bookings-dashboard.png", alt: "ReservKit operator Bookings list with sample activities and payment states" },
  bestFitTitle: "Built for operators who need to coordinate",
  bestFit: ["Several watersports activities with different prices and durations", "Capacity, availability, and cutoff rules by activity", "Guest waivers and refundable damage deposits", "A seasonal team working from phones and a shared dashboard"],
  problemTitle: "Mixed rental operations outgrow disconnected tools quickly",
  problemBody: "Each activity can have a different duration, guest limit, price, waiver requirement, and operating schedule. ReservKit turns those rules into bookable activities and keeps the resulting customer and day-of records in the same operator workspace.",
  workflowTitle: "A repeatable booking path across your activity catalog",
  workflow: [
    { title: "Configure each activity", body: "Set customer-facing details, location, pricing, duration, capacity, availability, and applicable waiver requirements." },
    { title: "Accept direct bookings", body: "Customers choose an available time, enter their details, and complete the Stripe Checkout flow." },
    { title: "Run the day", body: "Use bookings, assignments, waiver status, notes, and check-in views to prepare each departure." },
  ],
  featureTitle: "Tools for a multi-activity watersports business",
  features: ["Activity catalog and direct booking pages", "Availability windows and booking cutoffs", "Duration and guest-capacity controls", "Stripe Connect payments", "Refundable damage deposits on eligible plans", "Per-guest digital waiver evidence", "Staff scheduling and booking assignments", "Check-in, customer records, and reports"],
  proofTitle: "Launch one activity before moving the full catalog",
  proofBody: "A guided switch starts with the activity that best represents your operation. Test its availability, checkout, waiver, confirmation, and operator record before configuring the rest of the catalog.",
  faqs: [
    { title: "Can different watersports activities have different availability?", body: "Yes. Each activity can be configured with its own availability, time slots, duration, pricing, capacity, and booking rules." },
    { title: "Can I require waivers only for certain activities?", body: "Yes. Waiver templates are assigned to the activities that require them rather than applied blindly across the catalog." },
    { title: "Does ReservKit support staff assignments?", body: "Paid plans include team tools. Staff can be assigned booking work and receive the operational context permitted by their role." },
    { title: "Can I start with only one activity?", body: "Yes. Starting with one complete, tested booking flow is the recommended migration path." },
  ],
  related: [
    { href: "/boat-rental-software", label: "Boat rental software", description: "Deposits, waivers, and dockside workflows for boat rentals." },
    { href: "/jet-ski-rental-software", label: "Jet ski rental software", description: "Direct booking and guest-readiness workflows for personal watercraft." },
    { href: "/kayak-rental-software", label: "Kayak rental software", description: "Reservations and launch-site operations for paddle rentals." },
  ],
  ctaTitle: "Create the first bookable activity in your watersports catalog",
  ctaBody: "Start on Free and prove the complete customer and operator workflow before moving more traffic.",
};

export default function WatersportsRentalSoftware() { return <SeoProductPage config={config} />; }
