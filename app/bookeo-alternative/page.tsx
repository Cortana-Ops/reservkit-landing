import { ComparisonPage, type ComparisonPageConfig } from "../components/ComparisonPage";
import { createMarketingMetadata } from "../lib/metadata";

export const metadata = createMarketingMetadata({
  title: "Bookeo Alternative - Booking Software Comparison",
  description: "Compare Bookeo and ReservKit for monthly pricing, booking fees, scheduling, waivers, Stripe payments, equipment, deposits, and operator workflows.",
  keywords: ["Bookeo alternative", "Bookeo competitor", "rental booking software comparison"],
  path: "/bookeo-alternative",
});

const config: ComparisonPageConfig = {
  platform: "Bookeo",
  eyebrow: "Bookeo alternative",
  title: "ReservKit vs. Bookeo: compare total cost with the workflow you need",
  intro: "Bookeo offers mature scheduling with low fixed monthly prices and no Bookeo commission on payments. ReservKit costs more at launch but brings direct Stripe booking, waiver evidence, refundable deposits, equipment demand, named-unit blocking, and day-of records into one focused workspace.",
  updated: "October 9, 2026",
  sourceUrl: "https://www.bookeo.com/tours/pricing/",
  sourceLabel: "Bookeo Tours & Activities pricing",
  competitorStrengths: [
    "Low fixed monthly plans with no Bookeo commission on online payments",
    "Mature recurring, seasonal, group, and multi-day scheduling options",
    "Large staff and guide allowances on listed plans",
    "A 30-day trial, OTA connections, and optional waiver and SMS add-ons",
  ],
  reservkitStrengths: [
    "Stripe Connect checkout and payment context attached to the operator booking record",
    "Waiver evidence, deposits, equipment requirements, and named physical units in the same workflow",
    "Plan-based feature gates, published refund rules, and a capped Pro booking fee",
    "A contemporary customer flow and guided launch rehearsal across operator and customer views",
  ],
  chooseCompetitorIf: [
    "A low fixed software bill with no platform commission is the deciding factor.",
    "You require mature multi-day, seasonal, class, or unusually flexible scheduling today.",
    "Bookeo's existing integrations and optional add-on model already match your operation.",
  ],
  chooseReservKitIf: [
    "You want waiver, deposit, equipment, customer, and day-of records centered on one booking.",
    "Named physical-unit blocking matters more than broad scheduling permutations.",
    "You prefer a focused Stripe-connected workflow and published tier-by-tier operating features.",
  ],
  checkpoints: [
    { title: "Calculate annual cost", body: "Include ReservKit booking fees and Bookeo's waiver or SMS add-ons, then apply your real booking volume." },
    { title: "Model schedule complexity", body: "Test recurring, private, multi-day, seasonal, and resource-dependent products you actually sell." },
    { title: "Rehearse the guest path", body: "Compare mobile booking, payment, confirmation, waiver, reminder, cancellation, and rescheduling." },
    { title: "Run the operating day", body: "Confirm staff can see arrivals, balances, waivers, equipment, and customer context without side systems." },
  ],
  faqs: [
    { title: "Does Bookeo charge a booking commission?", body: "Bookeo currently says it charges a monthly subscription rather than commissions on online payments. Payment-gateway fees and optional products such as waiver plans and SMS credits remain separate." },
    { title: "Is ReservKit less expensive than Bookeo?", body: "Usually not on software price alone. ReservKit's case is the combined operating workflow and lower percentage rates than several commission-based competitors, not a claim that it always beats Bookeo's fixed monthly cost." },
    { title: "Which platform is better for complex scheduling?", body: "Bookeo currently documents broader scheduling patterns. ReservKit is strongest for timed tours, activities, charters, and rentals where booking-linked waivers, deposits, equipment, and day-of readiness matter." },
  ],
};

export default function BookeoAlternative() {
  return <ComparisonPage config={config} />;
}
