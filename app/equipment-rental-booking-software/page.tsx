import { SeoProductPage, type SeoProductPageConfig } from "../components/SeoProductPage";
import { createMarketingMetadata } from "../lib/metadata";

export const metadata = createMarketingMetadata({
  title: "Equipment Rental Booking Software - Inventory & Payments",
  description: "Equipment rental booking software for direct reservations, availability, Stripe payments, waivers, deposits, and operator-managed named units.",
  keywords: ["equipment rental booking software", "equipment rental reservation software", "rental inventory booking system"],
  path: "/equipment-rental-booking-software",
});

const config: SeoProductPageConfig = {
  eventKey: "equipment_rental",
  eyebrow: "Equipment rental software",
  title: "Equipment rental booking software that connects reservations to the gear behind them",
  intro: "Publish timed rentals, take direct Stripe payments, collect waiver evidence and refundable damage deposits, and give operators a clear view of the equipment each booking requires.",
  image: { src: "/product-clearwake-light-activities.png", alt: "ReservKit activities workspace showing configured rental activities" },
  bestFitTitle: "A practical fit for operators who",
  bestFit: [
    "Rent equipment in scheduled time windows",
    "Need availability, guest capacity, and equipment demand in one workflow",
    "Use waivers or refundable damage deposits for eligible rentals",
    "Want staff to assign physical units without asking customers to choose a serial-numbered item",
  ],
  problemTitle: "A booking can be available while the required equipment is not",
  problemBody: "Guest capacity alone does not tell staff whether the right gear is ready. ReservKit connects activity availability to operator-configured equipment requirements and optional named units so the team can prepare the reservation without exposing internal fleet decisions to customers.",
  workflowTitle: "From bookable activity to equipment-ready reservation",
  workflow: [
    { title: "Configure the rental", body: "Set the activity name, duration choices, price, guest capacity, availability windows, and any waiver or deposit requirements." },
    { title: "Define equipment demand", body: "Add equipment records, attach per-booking or per-guest requirements, and configure named physical units when the operation needs them." },
    { title: "Review the booking", body: "Use Booking Detail and day-of views to review payment, waiver, guest, staff, and equipment readiness before arrival." },
  ],
  featureTitle: "Equipment rental tools available in ReservKit",
  features: [
    "All-activity and activity-specific booking pages",
    "Duration packages and timed availability",
    "Stripe Connect checkout and refunds",
    "Refundable damage deposits on eligible plans",
    "Digital waiver evidence tied to the booking",
    "Per-guest and per-booking equipment requirements",
    "Named physical-unit blocking on Growth and higher plans",
    "Check-in, staff assignments, notes, and operational reporting",
  ],
  proofTitle: "Equipment is optional and operator controlled",
  proofBody: "Simple operators can use guest capacity without equipment records. Growth and higher plans can add equipment requirements and named units when physical inventory needs to affect booking readiness. Customers book the activity; operators manage the specific unit.",
  faqs: [
    { title: "Do I have to configure equipment before taking bookings?", body: "No. Equipment setup is optional. An operator can begin with activity capacity and add equipment records when the business needs internal demand or named-unit tracking." },
    { title: "Can customers choose a specific physical unit?", body: "No. Customers choose the activity, time, duration, and guest details. Specific named-unit assignment remains an operator workflow." },
    { title: "Which plans include equipment tools?", body: "Equipment requirements and named equipment-unit blocking are available on Growth and higher plans. Current access is shown on the Pricing and Billing pages." },
    { title: "Does ReservKit manage repairs or warehouse stock?", body: "No. Current equipment tools support booking demand, readiness, and named-unit blocking. Asset-code workflows, repair management, and warehouse stock accounting are not current launch features." },
  ],
  related: [
    { href: "/activity-booking-software", label: "Activity booking software", description: "Connect scheduled activities to direct booking and day-of operations." },
    { href: "/docs/equipment", label: "Equipment setup guide", description: "Follow the operator walkthrough for equipment records and activity requirements." },
    { href: "/rental-booking-software-with-damage-deposits", label: "Damage deposit booking software", description: "Understand the refundable deposit workflow and operator responsibilities." },
  ],
  ctaTitle: "Build one equipment rental flow and test it",
  ctaBody: "Start a 14-day full-access trial for the core booking path, then choose Growth when equipment requirements and named-unit blocking become part of the operation.",
};

export default function EquipmentRentalBookingSoftware() {
  return <SeoProductPage config={config} />;
}
