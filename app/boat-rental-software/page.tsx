import { SeoProductPage, type SeoProductPageConfig } from "../components/SeoProductPage";
import { createMarketingMetadata } from "../lib/metadata";

export const metadata = createMarketingMetadata({
  title: "Boat Rental Booking Software - Payments, Deposits & Waivers",
  description: "Boat rental booking software for direct reservations, Stripe payments, refundable damage deposits, digital waivers, staff visibility, and dockside check-in.",
  keywords: ["boat rental booking software", "boat rental reservation system", "pontoon rental software"],
  path: "/boat-rental-software",
});

const config: SeoProductPageConfig = {
  eventKey: "boat_rental",
  eyebrow: "Boat rental software",
  title: "Boat rental booking software built for the dock, not just checkout",
  intro: "Take direct reservations, route checkout through Stripe, collect refundable damage deposits and waiver evidence, and give the dock team one clear view of the day.",
  image: { src: "/product-checkin-manifest.png", alt: "ReservKit check-in manifest showing one sample activity booking and arrival readiness" },
  bestFitTitle: "A practical fit for operators who",
  bestFit: ["Rent pontoons, ski boats, fishing boats, or personal watercraft", "Need guest counts, arrival details, and waiver status before departure", "Use refundable damage deposits for eligible bookings", "Want a direct booking link instead of managing every reservation by phone"],
  problemTitle: "A reservation is only the start of a boat rental workflow",
  problemBody: "The booking has to stay connected to payment status, guest details, signed waiver evidence, deposit records, staff assignments, and check-in. ReservKit keeps those operational details with the booking instead of splitting them across forms and spreadsheets.",
  workflowTitle: "From available time slot to ready-to-launch booking",
  workflow: [
    { title: "Publish availability", body: "Configure the activity, duration, capacity, pricing, booking window, and available time slots customers can choose." },
    { title: "Collect the booking", body: "Customers enter guest details and complete a Stripe Checkout flow that can include a refundable damage deposit." },
    { title: "Prepare the dock", body: "Staff review waiver status, payment status, guest count, notes, and check-in readiness from the operator workspace." },
  ],
  featureTitle: "Boat rental tools available in ReservKit",
  features: ["Public booking pages with activity availability", "Stripe Connect checkout", "Refundable damage deposits", "Per-guest digital waiver evidence", "Duration pricing and capacity controls", "Staff assignments and schedule visibility", "Check-in manifest and guest tracking", "Booking income and activity reports"],
  proofTitle: "Start with one vessel type and one tested booking path",
  proofBody: "Guided setup focuses on making one boat rental activity bookable end to end before you move customer traffic. Configure the activity, connect Stripe, attach the waiver requirements, and run your own test booking.",
  faqs: [
    { title: "Can ReservKit collect a refundable boat damage deposit?", body: "Yes. Eligible plans can add a refundable damage deposit at checkout. Deposit status is tracked in ReservKit, while actual money movement is handled through Stripe." },
    { title: "Can every guest sign a waiver?", body: "An activity can require one or more waiver templates. Guest signer records, verification timestamps, signature evidence, and audit details remain tied to the booking." },
    { title: "Can I control boat rental capacity and duration?", body: "Yes. Activities support guest limits, availability windows, time slots, and duration-based pricing for the booking options you configure." },
    { title: "Do I have to move every activity at once?", body: "No. The safer switch is one configured activity and a completed test booking before you replace existing customer links." },
  ],
  related: [
    { href: "/watersports-rental-software", label: "Watersports rental software", description: "Run mixed fleets and seasonal watersports activities." },
    { href: "/rental-booking-software-with-damage-deposits", label: "Damage deposit booking software", description: "Understand the deposit workflow and operator responsibilities." },
    { href: "/switch-rental-booking-software", label: "Switch booking systems", description: "Move one tested booking flow at a time." },
  ],
  ctaTitle: "Build your first boat rental booking flow",
  ctaBody: "Start on Free or request guided setup for the activity you want customers to book first.",
};

export default function BoatRentalSoftware() { return <SeoProductPage config={config} />; }
