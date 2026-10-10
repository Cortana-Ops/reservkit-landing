import { ComparisonPage, type ComparisonPageConfig } from "../components/ComparisonPage";
import { createMarketingMetadata } from "../lib/metadata";

export const metadata = createMarketingMetadata({
  title: "Bókun Alternative - Booking Software Comparison",
  description: "Compare Bókun and ReservKit for pricing, direct bookings, Stripe payments, distribution reach, resources, waivers, deposits, and operator workflows.",
  keywords: ["Bókun alternative", "Bókun competitor", "tour booking software comparison"],
  path: "/bokun-alternative",
});

const config: ComparisonPageConfig = {
  platform: "Bókun",
  eyebrow: "Bókun alternative",
  title: "ReservKit vs. Bókun: choose between distribution reach and focused operations",
  intro: "Bókun combines booking tools with a large OTA and reseller network at aggressive published prices. ReservKit is a focused alternative for operators who care more about direct Stripe checkout, waiver and deposit records, named equipment-unit blocking, and a guided operating workflow.",
  updated: "October 9, 2026",
  sourceUrl: "https://www.bokun.io/pricing",
  sourceLabel: "Bókun's pricing page",
  competitorStrengths: [
    "Published plans starting at $49 per month plus a 1.5% fee on applicable bookings",
    "A broad OTA, reseller, and marketplace distribution network",
    "Mobile app, gift cards, payment links, point of sale, and channel-management tools",
    "Zero Bókun fees on eligible Viator and offline bookings on its listed paid plans",
  ],
  reservkitStrengths: [
    "Direct-booking operations built around the operator's connected Stripe account",
    "Waiver evidence, refundable deposits, equipment demand, and named physical-unit blocking tied to bookings",
    "Published refund treatment and a Pro monthly booking-fee cap",
    "A focused 14-day trial path for proving availability, checkout, payment, and day-of readiness",
  ],
  chooseCompetitorIf: [
    "OTA, reseller, and marketplace distribution is your main acquisition strategy.",
    "You need a native mobile app, gift cards, or channel-management breadth now.",
    "Bókun's lower entry price and Viator relationship outweigh the need for ReservKit's current operating workflow.",
  ],
  chooseReservKitIf: [
    "Most bookings come directly through your own brand and Stripe relationship.",
    "Waivers, deposits, equipment readiness, and staff context need to stay attached to each booking.",
    "You want a smaller operating surface and a guided first complete booking rehearsal.",
  ],
  checkpoints: [
    { title: "Separate direct and OTA volume", body: "Model the monthly and percentage fees for each channel instead of comparing one headline rate." },
    { title: "Test the exact inventory", body: "Recreate capacity, equipment requirements, named units, and overlapping times before deciding." },
    { title: "Run mobile checkout", body: "Complete direct booking, payment, confirmation, waiver, and customer self-service on a phone." },
    { title: "Map distribution needs", body: "List the OTAs and resellers that materially produce bookings today, not every possible integration." },
  ],
  faqs: [
    { title: "Is ReservKit cheaper than Bókun?", body: "Not at every tier or volume. Bókun currently publishes a lower Starter subscription and similar or higher booking-fee rates depending on plan. Compare your real channel mix, transaction volume, required features, and support needs." },
    { title: "Does ReservKit match Bókun's distribution network?", body: "No. Bókun currently advertises a much broader OTA and reseller network. ReservKit should be selected for its direct-booking and operating workflow, not as a claim of equivalent channel breadth." },
    { title: "Can I test ReservKit before moving from Bókun?", body: "Yes. Configure one activity, its availability and equipment, connect Stripe, and complete a controlled customer booking before moving traffic." },
  ],
};

export default function BokunAlternative() {
  return <ComparisonPage config={config} />;
}
