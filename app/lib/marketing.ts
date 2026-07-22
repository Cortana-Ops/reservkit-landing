export const APP_URL = "https://app.reservkit.com";
export const LOGIN_URL = `${APP_URL}/login`;
export const EARLY_ACCESS_URL = "/early-access";
export const PRIMARY_CTA_LABEL = "Get early access";
export const EARLY_ACCESS_POSITIONING =
  "Limited pre-launch onboarding for operators who want to switch to direct bookings before public launch.";
export const POSITIONING_LINE =
  "ReservKit helps rental and experience operators take direct bookings, collect Stripe payments, manage waiver evidence, and run day-of operations from one workspace.";
export const METADATA_DESCRIPTION =
  "Take direct bookings, collect Stripe payments, manage waiver evidence, refundable damage deposits, and day-of operations. Transparent pricing published upfront.";

export const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    fee: "4% booking fee",
    volume: "10 bookings/month",
    description: "For setup, testing, and first live bookings before you commit to a paid plan.",
    highlight: false,
  },
  {
    name: "Starter",
    price: "$79",
    period: "/mo",
    fee: "3% booking fee",
    volume: "100 bookings/month",
    description: "For small operators who need the core direct-booking workflow.",
    highlight: true,
  },
  {
    name: "Growth",
    price: "$149",
    period: "/mo",
    fee: "2% booking fee",
    volume: "Unlimited bookings",
    description: "For growing teams that need unlimited bookings, waivers, broadcasts, reports, coupons, refundable damage deposits, and add-ons.",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$299",
    period: "/mo",
    fee: "1.5% booking fee",
    volume: "Unlimited bookings",
    description: "For higher-volume teams needing deeper operational support.",
    highlight: false,
  },
];

export const enterpriseTier = {
  name: "Enterprise",
  price: "Custom",
  fee: "Custom booking fee",
  volume: "Custom volume",
  description: "For operators with larger rollout, migration, or support needs.",
};

export const earlyAccessPricingCallout =
  "Early-access operators get a hands-on setup path before public launch. We help map the right plan before live traffic moves over.";

export const freePlanFootnote =
  "Need to try it at very low volume? The Free plan includes 10 bookings/month at 4% — no subscription required.";

export const pricingFinePrint =
  "Stripe’s published processing fees apply separately. ReservKit’s booking fee is charged on the booking subtotal. Tips, taxes, operator service fees, and refundable damage deposits are not marked up.";

export const pricingSummary =
  "Public plans are Free ($0/mo + 4%, 10 bookings/month), Starter ($79/mo + 3%, 100 bookings/month), Growth ($149/mo + 2%, unlimited), Pro ($299/mo + 1.5%, unlimited), and Enterprise custom.";

export const earlyAccessRequestFields = [
  "name",
  "email",
  "businessName",
  "businessType",
  "currentBookingTool",
  "monthlyBookingVolume",
  "website",
  "notes",
] as const;
