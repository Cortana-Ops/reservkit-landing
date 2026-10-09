import { SeoProductPage, type SeoProductPageConfig } from "../components/SeoProductPage";
import { createMarketingMetadata } from "../lib/metadata";

export const metadata = createMarketingMetadata({
  title: "Kayak Rental Booking Software - Reservations & Waivers",
  description: "Kayak and paddleboard rental booking software for online reservations, Stripe payments, digital waivers, availability, and mobile check-in.",
  keywords: ["kayak rental booking software", "paddleboard rental software", "kayak reservation system"],
  path: "/kayak-rental-software",
});

const config: SeoProductPageConfig = {
  eventKey: "kayak_rental",
  eyebrow: "Kayak and paddleboard rentals",
  title: "Kayak rental booking software for busy launch sites",
  intro: "Let guests reserve online, pay through Stripe, complete required waivers, and arrive with the details your launch team needs already attached to the booking.",
  image: { src: "/product-clearwake-light-bookings-dashboard.png", alt: "ReservKit operator Bookings list with sample activities and payment states" },
  bestFitTitle: "Designed for rental teams managing",
  bestFit: ["Kayaks, canoes, paddleboards, or mixed paddle fleets", "Hourly or fixed-duration rental options", "Per-guest waiver requirements", "Seasonal staff who need a simple arrival list"],
  problemTitle: "Reduce the line before guests reach the water",
  problemBody: "Phone reservations, paper waivers, and separate payment notes create work at the busiest point of the day. A direct booking flow gives customers a clear path while the operator keeps availability, payment, waiver, and guest details together.",
  workflowTitle: "A simpler path from reservation to launch",
  workflow: [
    { title: "Choose the rental", body: "Customers see the activity description, available date and time options, duration, and guest limits you configured." },
    { title: "Book and prepare", body: "Checkout runs through Stripe, and required waiver signing can be completed before the customer arrives." },
    { title: "Check in", body: "The team sees who is arriving, the guest count, and which bookings still need attention." },
  ],
  featureTitle: "Kayak rental workflows in one workspace",
  features: ["Public activity booking links", "Availability windows and booking cutoffs", "Duration-based pricing", "Stripe Connect checkout", "Digital waiver evidence per guest", "Customer and booking records", "Staff schedules and assignments", "Mobile-friendly check-in workflow"],
  proofTitle: "Use a real rental activity for setup",
  proofBody: "Create the first kayak or paddleboard activity with its actual duration, capacity, price, and waiver requirements. Then make a test booking before sharing the link with customers.",
  faqs: [
    { title: "Does ReservKit work for both kayaks and paddleboards?", body: "Yes. Each offering can be configured as its own activity with its own description, price, duration, capacity, availability, and waiver requirements." },
    { title: "Can guests sign before arriving?", body: "Yes. Required waiver templates can be attached to the activity, and signer status remains associated with the booking." },
    { title: "Can I set a booking cutoff?", body: "Yes. Booking rules can limit how close to a start time a customer can complete an online booking." },
    { title: "Can seasonal staff use the system?", body: "Paid plans provide team tools for invited staff, including assigned work and day-of booking context according to their role." },
  ],
  related: [
    { href: "/watersports-rental-software", label: "Watersports rental software", description: "A broader workflow for mixed rental operations." },
    { href: "/rental-booking-software-with-waivers", label: "Booking software with waivers", description: "See how waiver evidence stays tied to each booking." },
    { href: "/stripe-booking-software-for-rentals", label: "Stripe booking software", description: "See how connected-account checkout works." },
  ],
  ctaTitle: "Put your first kayak rental online",
  ctaBody: "Start a 14-day full-access trial, configure one activity, and test the customer path before sharing it.",
};

export default function KayakRentalSoftware() { return <SeoProductPage config={config} />; }
