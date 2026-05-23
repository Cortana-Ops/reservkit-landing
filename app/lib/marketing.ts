export const APP_URL = "https://app.reservkit.com";
export const LOGIN_URL = `${APP_URL}/login`;
export const BETA_URL = "/beta";
export const PRIMARY_CTA_LABEL = "Get early access";
export const BETA_PLATFORM_FEE_OFFER = "0% platform fee for 30 days";
export const POSITIONING_LINE =
  "ReservKit helps rental and experience operators take direct bookings, collect Stripe payments, manage waiver evidence, and run day-of operations from one workspace.";
export const METADATA_DESCRIPTION =
  "Take direct bookings, collect Stripe payments, manage waiver evidence, refundable deposits, and day-of operations. Transparent pricing published upfront.";

export const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    fee: "4% platform fee",
    volume: "10 bookings/month",
    description: "For setup, testing, and first live bookings before you commit to a paid plan.",
    highlight: false,
  },
  {
    name: "Starter",
    price: "$79",
    period: "/mo",
    fee: "2.5% platform fee",
    volume: "100 bookings/month",
    description: "For small operators ready to take direct bookings regularly.",
    highlight: true,
  },
  {
    name: "Growth",
    price: "$149",
    period: "/mo",
    fee: "2% platform fee",
    volume: "Unlimited bookings",
    description: "For growing rental and experience businesses.",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$299",
    period: "/mo",
    fee: "1.5% platform fee",
    volume: "Unlimited bookings",
    description: "For higher-volume teams needing deeper operational support.",
    highlight: false,
  },
];

export const enterpriseTier = {
  name: "Enterprise",
  price: "Custom",
  fee: "Custom platform fee",
  volume: "Custom volume",
  description: "For operators with larger rollout, migration, or support needs.",
};

export const betaPricingCallout =
  "Approved beta operators get 0% ReservKit platform fees for 30 days. Stripe processing still applies.";

export const freePlanFootnote =
  "Need to try it at very low volume? The Free plan includes 10 bookings/month at 4% — no subscription required.";

export const pricingFinePrint =
  "Stripe processing fees (~2.9% + 30¢) apply separately. ReservKit’s platform fee is charged on the booking subtotal. Tips are not marked up. Deposits are charged on what’s collected at checkout, not the full future balance.";

export const pricingSummary =
  "Approved beta operators get 0% ReservKit platform fees for 30 days. Public plans are Free ($0/mo + 4%, 10 bookings/month), Starter ($79/mo + 2.5%, 100 bookings/month), Growth ($149/mo + 2%, unlimited), Pro ($299/mo + 1.5%, unlimited), and Enterprise custom.";

export const betaRequestFields = [
  "name",
  "email",
  "businessName",
  "businessType",
  "currentBookingTool",
  "monthlyBookingVolume",
  "website",
  "notes",
] as const;
