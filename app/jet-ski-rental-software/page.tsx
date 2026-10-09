import { SeoProductPage, type SeoProductPageConfig } from "../components/SeoProductPage";
import { createMarketingMetadata } from "../lib/metadata";

export const metadata = createMarketingMetadata({
  title: "Jet Ski Rental Software - Online Booking & Waivers",
  description: "Jet ski rental booking software for online reservations, Stripe payments, refundable damage deposits, guest waivers, and launch-site check-in.",
  keywords: ["jet ski rental software", "jet ski booking software", "personal watercraft reservation system"],
  path: "/jet-ski-rental-software",
});

const config: SeoProductPageConfig = {
  eventKey: "jet_ski_rental",
  eyebrow: "Jet ski rental software",
  title: "Jet ski rental booking software for payments, waivers, and launch readiness",
  intro: "Give customers a direct reservation path while your team keeps rider details, payment status, refundable damage deposits, waiver evidence, and arrival readiness connected to the booking.",
  image: { src: "/product-clearwake-light-activities.png", alt: "Clearwake demo activity catalog including a one-hour jet ski rental with pricing and capacity" },
  bestFitTitle: "Useful for jet ski operators managing",
  bestFit: ["Fixed start times or duration-based rental choices", "Rider and guest information before arrival", "Required digital waiver evidence", "Refundable damage deposits and payment status"],
  problemTitle: "A paid reservation can still be unready for launch",
  problemBody: "Jet ski operations need more than a name and time. The team has to know who is riding, whether required waivers are complete, whether payment and deposit steps are accounted for, and which reservations still need attention.",
  workflowTitle: "Move customers through the readiness steps before arrival",
  workflow: [
    { title: "Reserve", body: "The customer chooses an available jet ski activity, time, duration, and guest count within your configured rules." },
    { title: "Complete requirements", body: "Stripe handles checkout and ReservKit associates required guest waiver evidence with the booking." },
    { title: "Review and check in", body: "The launch team uses booking and check-in views to identify ready reservations and follow up on missing steps." },
  ],
  featureTitle: "Jet ski booking and operations features",
  features: ["Customer-facing availability and booking links", "Duration pricing and capacity controls", "Stripe Connect checkout", "Refundable damage deposits", "Digital waiver evidence", "Guest and customer records", "Staff assignment context", "Day-of check-in manifest"],
  proofTitle: "Test the exact rider journey before sharing the link",
  proofBody: "Configure a real jet ski activity and complete a test booking as a customer. Confirm that the operator record shows the expected payment, guest, waiver, and scheduling details before launch.",
  faqs: [
    { title: "Can a jet ski booking include a refundable damage deposit?", body: "Yes, on eligible plans. The deposit can be included in checkout and its status tracked in ReservKit, with money movement handled through Stripe." },
    { title: "Can multiple guests have waiver records?", body: "Yes. Required waiver templates can collect signer records for guests associated with the booking." },
    { title: "Can I limit last-minute online bookings?", body: "Yes. Booking cutoff rules can prevent online checkout too close to an activity start time." },
    { title: "Can staff see which bookings need attention?", body: "The check-in workflow distinguishes ready bookings from those with outstanding operational steps." },
  ],
  related: [
    { href: "/rental-booking-software-with-damage-deposits", label: "Damage deposit booking software", description: "Review how deposits fit into checkout and follow-up." },
    { href: "/rental-booking-software-with-waivers", label: "Booking software with waivers", description: "Keep signed waiver evidence with guest records." },
    { href: "/watersports-rental-software", label: "Watersports rental software", description: "Manage jet skis alongside other activities." },
  ],
  ctaTitle: "Build and test your first jet ski booking flow",
  ctaBody: "Start a 14-day full-access trial and validate the full reservation path before sending customers to it.",
};

export default function JetSkiRentalSoftware() { return <SeoProductPage config={config} />; }
