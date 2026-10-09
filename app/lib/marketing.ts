export const APP_URL = "https://app.reservkit.com";
export const LOGIN_URL = `${APP_URL}/login`;
export const EARLY_ACCESS_URL = "/early-access";
export const MARKETING_MODE =
  process.env.NEXT_PUBLIC_MARKETING_MODE === "prelaunch"
    ? "prelaunch"
    : "public_signup";
export const PUBLIC_SIGNUP_URL = `${LOGIN_URL}?${new URLSearchParams({
  signup: "true",
}).toString()}`;
export const PRIMARY_CTA_LABEL =
  MARKETING_MODE === "public_signup" ? "Start 14-day trial" : "Get early access";
export const PRIMARY_CTA_URL =
  MARKETING_MODE === "public_signup" ? PUBLIC_SIGNUP_URL : EARLY_ACCESS_URL;
export const PRIMARY_CTA_EVENT =
  MARKETING_MODE === "public_signup"
    ? "public_signup_cta_clicked"
    : "early_access_cta_clicked";
export const HERO_STATUS_LABEL =
  MARKETING_MODE === "public_signup"
    ? "Public signup is open"
    : "Guided setup is available";
export const EARLY_ACCESS_POSITIONING =
  "Guided setup help for operators who want support moving their first direct booking flow into ReservKit.";
export const POSITIONING_LINE =
  "ReservKit helps rental and experience operators take direct bookings, collect Stripe payments, manage waiver evidence, and run day-of operations from one workspace.";
export const METADATA_DESCRIPTION =
  "Take direct bookings, collect Stripe payments, manage waiver evidence, refundable damage deposits, and day-of operations. Transparent pricing published upfront.";

export const pricingTiers = [
  {
    name: "Starter",
    price: "$69",
    period: "/mo",
    fee: "1.5% booking fee",
    volume: "Unlimited bookings",
    trial: "14-day free trial",
    description: "For small operators who need the core direct-booking workflow.",
    features: [
      "Booking pages and Stripe payments",
      "Calendar and customer records",
      "Basic team tools",
      "Staff scheduling access",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$199",
    period: "/mo",
    fee: "1% booking fee",
    volume: "Unlimited bookings",
    trial: "14-day free trial",
    description: "For growing teams that need unlimited bookings, waivers, reports, coupons, refundable damage deposits, add-ons, and named equipment-unit blocking.",
    features: [
      "Everything in Starter",
      "Reports and waiver tools",
      "Broadcasts and coupon codes",
      "Equipment and dynamic pricing",
      "Named equipment-unit blocking",
      "Damage deposits and add-ons",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    price: "$399",
    period: "/mo",
    fee: "0.5% booking fee",
    volume: "$900/month booking-fee cap",
    trial: "14-day free trial",
    description: "For higher-volume teams needing deeper operational support.",
    features: [
      "Everything in Growth",
      "API and white-label controls",
      "$1,299 maximum monthly software cost",
      "Higher-volume operations",
      "Deeper support path",
    ],
    highlight: false,
  },
];

export const enterpriseTier = {
  name: "Enterprise",
  price: "Custom",
  fee: "Contracted booking fee",
  volume: "Unlimited bookings",
  description: "For multi-location operators with custom rollout, migration, or support needs.",
  features: [
    "Manual/private plan",
    "Multi-location operations",
    "Migration or rollout support",
    "Signed agreement terms",
  ],
};

export const earlyAccessPricingCallout =
  "Operators who want help can request guided setup for the first live booking flow. We help map the right plan before live traffic moves over.";

export const publicSignupPricingCallout =
  "Start with 14 days of full access, connect Stripe when you are ready, and choose a paid plan before the trial ends. Every paid plan includes unlimited bookings.";

export const pricingAccessCalloutTitle =
  MARKETING_MODE === "public_signup"
    ? "Start with full access for 14 days."
    : "Guided setup is available.";

export const pricingAccessCallout =
  MARKETING_MODE === "public_signup"
    ? publicSignupPricingCallout
    : earlyAccessPricingCallout;

export const trialFootnote =
  "No public Free plan or booking caps. Your 14-day trial includes the full operator workflow so you can configure and test before choosing a paid plan.";

export const pricingFinePrint =
  "Stripe charges its standard processing fees directly to the operator’s connected account. ReservKit’s booking fee applies only to the eligible booking subtotal and is not added as a separate customer checkout surcharge. Tips, taxes, operator service fees, and refundable damage deposits are not marked up. Stripe does not return its original processing fee after a refund. ReservKit returns its booking fee for full operator, weather/safety, duplicate-payment, or system-error refunds; it retains the fee for customer cancellations, no-shows, and partial refunds.";

export const pricingSummary =
  "Public plans are Starter ($69/mo + 1.5%), Growth ($199/mo + 1%), Pro ($399/mo + 0.5% with a $900 monthly booking-fee cap), and Enterprise custom. Every plan includes unlimited bookings, and self-serve plans begin with a 14-day free trial.";

export const paymentPagePricingSummary =
  "Public plans are Starter ($69/mo + 1.5%), Growth ($199/mo + 1%), Pro ($399/mo + 0.5% with a $900 monthly booking-fee cap), and Enterprise custom. Every plan includes unlimited bookings.";

export const verticalFeatureGateNote =
  "Feature availability follows the pricing tiers: Starter covers core bookings and basic team tools; Growth adds waivers, reports, broadcasts, equipment, named unit blocking, dynamic pricing, deposits, coupons, and add-ons; Pro adds API and white-label controls.";

export const earlyAccessRequestFields = [
  "name",
  "email",
  "businessName",
  "businessType",
  "currentBookingTool",
  "monthlyBookingVolume",
  "biggestBookingProblem",
  "website",
  "notes",
] as const;
