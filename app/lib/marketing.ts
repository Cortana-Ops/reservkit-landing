export const APP_URL = "https://app.reservkit.com";
export const LOGIN_URL = `${APP_URL}/login`;
export const BETA_URL = "/beta";
export const PRIMARY_CTA_LABEL = "Request beta access";
export const POSITIONING_LINE =
  "ReservKit helps rental and experience operators take direct bookings, collect Stripe payments, manage waivers, and run day-of operations from one workspace.";
export const METADATA_DESCRIPTION =
  "Booking software for rental and experience operators to take direct bookings, Stripe payments, waivers, and staff workflows. Limited beta onboarding available.";

export const pricingTiers = [
  {
    name: "Beta",
    price: "Limited access",
    period: "",
    fee: "0% platform fee during onboarding",
    volume: "Limited guided access",
    description: "For approved operators getting guided setup before wider self-serve access.",
    features: [
      "Guided setup",
      "Online booking and payments",
      "Digital waivers",
      "Guided onboarding",
    ],
    highlight: true,
  },
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    fee: "4% platform fee",
    volume: "10 bookings/month",
    description: "For trying online booking at very low volume.",
    features: [
      "Public booking page",
      "Customer management",
      "Email confirmations",
      "Stripe payment processing",
    ],
    highlight: false,
  },
  {
    name: "Starter",
    price: "$79",
    period: "/mo",
    fee: "2.5% platform fee",
    volume: "100 bookings/month",
    description: "For small operators ready to take direct bookings regularly.",
    features: [
      "Everything in Free",
      "Reports and activity views",
      "Digital waivers",
      "Staff scheduling",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$149",
    period: "/mo",
    fee: "2% platform fee",
    volume: "Unlimited bookings",
    description: "For growing rental and experience businesses.",
    features: [
      "Everything in Starter",
      "Coupons and promotions",
      "Broadcast SMS tools",
      "Damage deposit management",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$299",
    period: "/mo",
    fee: "1.5% platform fee",
    volume: "Unlimited bookings",
    description: "For higher-volume teams needing deeper operational support.",
    features: [
      "Everything in Growth",
      "Advanced operational reporting",
      "Priority support",
      "Multi-org workflows",
    ],
    highlight: false,
  },
];

export const enterpriseTier = {
  name: "Enterprise",
  price: "Custom",
  fee: "custom volume and annual minimum",
  description: "For operators with larger rollout, migration, or support needs.",
};

export const pricingSummary =
  "Approved beta operators get temporary 0% ReservKit platform fees during onboarding. Public plans are Free ($0/mo + 4%, 10 bookings/month), Starter ($79/mo + 2.5%, 100 bookings/month), Growth ($149/mo + 2%, unlimited), Pro ($299/mo + 1.5%, unlimited), and Enterprise custom.";

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
