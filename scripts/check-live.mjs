const baseUrl = process.env.RESERVKIT_MARKETING_BASE_URL || "https://reservkit.com";
const configuredMarketingMode =
  process.env.NEXT_PUBLIC_MARKETING_MODE === "prelaunch"
      ? "prelaunch"
      : process.env.NEXT_PUBLIC_MARKETING_MODE
        ? "public_signup"
        : null;
let detectedMarketingMode = null;

const routes = [
  "/",
  "/pricing",
  "/early-access",
  "/docs",
  "/docs/getting-started",
  "/docs/payments",
  "/docs/staff",
  "/docs/waivers",
  "/docs/notifications",
  "/docs/reports",
  "/docs/bookings-availability",
  "/roadmap",
  "/changelog",
  "/blog",
  "/boat-rental-software",
  "/kayak-rental-software",
  "/tour-operator-software",
  "/terms",
  "/privacy",
];

const sharedRequiredByRoute = {
  "/early-access": ["Request setup help", "reply within one business day"],
  "/docs/payments": [
    "booking subtotal collected at checkout",
    "customer tips are not marked up",
    "Stripe",
  ],
  "/docs/staff": ["Team and staff tools are available on Starter and higher plans"],
  "/docs/waivers": ["Each guest verifies their email once", "signed waiver evidence"],
  "/docs/notifications": [
    "ReservKit-managed email delivery",
    "Custom Resend setup requires both a Resend API key and a verified From Email",
    "Custom Twilio setup requires Account SID, Auth Token, and From Number together",
    "does not currently include a full operator-facing email or SMS template editor",
  ],
  "/docs/reports": ["Customer tips are shown separately from booking income"],
  "/docs/bookings-availability": ["all-activity booking links and activity-specific booking links", "Dedicated calendar-only or activity-card-only embeds are future options"],
  "/changelog": ["Public signup and launch truth pass", "Public Free-first signup", "Product proof and pricing alignment"],
};

const baseForbidden = [
  "Start free trial",
  "Start Free Trial",
  "14-day free trial",
  "2.9% + 30",
  "2 business days after a charge",
  "pay only the deposit",
  "Deposit collection at booking",
  "Waiver compliance at a glance",
];

const forbidden =
  (mode) => mode === "public_signup"
    ? baseForbidden
    : [...baseForbidden, "login?signup=true"];

const failures = [];

function routeUrl(route) {
  return new URL(route, baseUrl).toString();
}

function inferMarketingMode(text) {
  return text.includes("Start free") ? "public_signup" : "prelaunch";
}

function requiredForRoute(route, mode) {
  const launchRequiredByRoute =
    mode === "public_signup"
      ? {
          "/": ["Start free", "refundable damage deposits"],
          "/pricing": ["Start free", "Free", "Starter", "Growth"],
        }
      : {
          "/": ["Get early access", "Pre-launch early access", "refundable damage deposits"],
          "/pricing": ["Get early access", "Free", "Starter", "Growth"],
        };

  return [
    ...(launchRequiredByRoute[route] ?? []),
    ...(sharedRequiredByRoute[route] ?? []),
  ];
}

for (const route of routes) {
  const url = routeUrl(route);
  const start = Date.now();
  let response;
  let text;

  try {
    response = await fetch(url, { redirect: "manual" });
    text = await response.text();
  } catch (error) {
    failures.push(`${route} failed to fetch: ${error.message}`);
    continue;
  }

  const elapsedMs = Date.now() - start;
  console.log(`${response.status} ${route} ${elapsedMs}ms ${text.length}b`);

  const routeMode = configuredMarketingMode ?? detectedMarketingMode ?? inferMarketingMode(text);
  if (route === "/") detectedMarketingMode = routeMode;

  if (response.status < 200 || response.status >= 400) {
    failures.push(`${route} returned HTTP ${response.status}`);
  }

  for (const phrase of requiredForRoute(route, routeMode)) {
    if (!text.includes(phrase)) {
      failures.push(`${route} is missing required text: ${phrase}`);
    }
  }

  for (const phrase of forbidden(routeMode)) {
    if (text.includes(phrase)) {
      failures.push(`${route} contains stale phrase: ${phrase}`);
    }
  }
}

if (failures.length) {
  console.error("\nLive marketing check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("\nLive marketing check passed.");
