const baseUrl = process.env.RESERVKIT_MARKETING_BASE_URL || "https://reservkit.com";

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
  "/blog",
  "/boat-rental-software",
  "/kayak-rental-software",
  "/tour-operator-software",
  "/terms",
  "/privacy",
];

const requiredByRoute = {
  "/": ["Get early access", "Pre-launch early access", "refundable damage deposits"],
  "/pricing": ["Get early access", "Free", "Starter", "Growth"],
  "/early-access": ["Submit my application", "reply within one business day"],
  "/docs/payments": [
    "booking subtotal collected at checkout",
    "customer tips are not marked up",
    "Stripe",
  ],
  "/docs/staff": ["Team and staff tools are available on Starter and higher plans"],
  "/docs/waivers": ["Each guest verifies their email once", "signed waiver evidence"],
  "/docs/notifications": ["ReservKit-managed email delivery", "does not currently include a full operator-facing email or SMS template editor"],
  "/docs/reports": ["Customer tips are shown separately from booking income"],
};

const forbidden = [
  "Start free trial",
  "Start Free Trial",
  "14-day free trial",
  "login?signup=true",
  "2.9% + 30",
  "2 business days after a charge",
  "pay only the deposit",
  "Deposit collection at booking",
  "Waiver compliance at a glance",
];

const failures = [];

function routeUrl(route) {
  return new URL(route, baseUrl).toString();
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

  if (response.status < 200 || response.status >= 400) {
    failures.push(`${route} returned HTTP ${response.status}`);
  }

  for (const phrase of requiredByRoute[route] ?? []) {
    if (!text.includes(phrase)) {
      failures.push(`${route} is missing required text: ${phrase}`);
    }
  }

  for (const phrase of forbidden) {
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
