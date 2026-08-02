import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const scanDirs = ["app", "README.md"];

const forbidden = [
  "14-day Growth trial",
  "14-day free trial",
  "Start Free Trial",
  "Start free trial",
  "Early-access onboarding",
  "Pre-launch early access",
  "pre-launch early access",
  "before public launch",
  "limited pre-launch",
  "50 bookings/month",
  "50 bookings/mo",
  "200 bookings/month",
  "1% booking fee",
  "0.5% booking fee",
  "2.5% booking fee",
  "Starter ($79/month): 2.5%",
  "Starter ($79/mo + 2.5%",
  "$79/mo + 2.5%",
  "$249",
  "Settings → Payments",
  "Game changer",
  "Trusted by rental operators and tour guides",
  "What the beta is proving",
  "product evidence",
  "placeholder hype",
  "sanitized demo",
  "production test organization",
  "good fit for this beta wave",
  "careful beta",
  "being hardened",
  "being beta-tested",
  "review beta fit",
  "broader launch",
  "vanity demos",
  "all plans include the full product",
  "Every plan includes bookings, payments, waivers, and staff access",
  "All plans include the booking page, Stripe Connect payments, digital waivers, staff portal, check-in manifest, and revenue reports",
  'bullets: ["Check-in manifest", "Staff schedule and assignments", "Task management", "Revenue reports"]',
  "No long-term contract",
  "Cancel anytime",
  "30-60",
  "30–60",
  "ReservKit may not be the fit if",
  "flat-rate pricing",
  "operator-absorbed",
  "0% booking fees during onboarding",
  "0% ReservKit booking fees during onboarding",
  "operator login screenshot",
  "Initial release — ReservKit public beta",
  "guided beta onboarding",
  "Guided beta access",
  "Approved beta operators",
  "Request beta access",
  "beta request page",
  "SMS reminders sent 24 hours before booking",
  "Dynamic pricing rules",
  "Customer portal — guests can view",
  "Settings → Booking Page",
  "under 30 minutes",
  "legally defensible",
  "net revenue",
  "block-out dates",
  "stored indefinitely",
  "email copy of their signed waiver",
  "Capacity controls for vessels",
  "Website embed options",
  "Templates support rich text formatting",
  "bold text, numbered lists, and section headers",
  "Settings → Team",
  "cancel a pending invitation",
  "It attaches to every booking automatically",
  "Every guest gets a signing link after booking",
  "Downloadable signed waivers",
  "Downloading signed waivers",
  "printed or downloaded as part of the waiver packet",
  "From signup to first real booking",
  "No sales call.",
  "booking fee is not automatically returned",
  "within 5–10 business days",
  "subscription paid subscription charges",
  "click the status dropdown",
  "whether their waiver has been signed",
  "Waiver compliance at a glance",
  "product-waiver-compliance",
  "waiver compliance view",
  "track waiver compliance",
  "Tracking waiver compliance",
  "This week,\"",
  "This quarter",
  "You can sort and filter this list any way you need",
  "payment status, and booking status",
  "Staff can mark guests as checked in directly from this view",
  "Member\", description",
  "block off specific dates",
  "public booking page will be live and ready to accept payments",
  "Growth adds reports, waivers, broadcasts, equipment, and dynamic pricing",
  "For growing teams that need reports, waivers, broadcasts, equipment, and dynamic pricing",
  "title: \"Pricing — ReservKit\"",
  "title: \"Request Early Access — ReservKit\"",
  "Takes five minutes",
  "Watch the bookings come in",
  "live product screenshots",
  "current product screenshots",
  "not vaporware",
  "mockup-only marketing",
  "We onboard operators personally",
  "Here is what the operator side looks like",
  "Staff and captain scheduling",
  "Staff assignment and guide scheduling",
  "booking fee is calculated on the total amount charged",
  "booking's total charged amount",
  "booking&apos;s total charged amount",
  "2.9% + 30¢",
  "2.9% + 30",
  "2 business days after a charge",
  "pay only the deposit",
  "remaining balance is collected separately",
  "deposit checkout",
  "full or deposit checkout",
  "full price or deposits",
  "Deposit collection at booking",
  "deposit amount (collected at booking)",
  "not the full future balance",
];

const allowedByFile = {
  "app/terms/page.tsx": ["invite-only"],
};

const unsupportedLiveClaimPatterns = [
  {
    name: "cart or multi-item checkout",
    pattern: /\b(cart checkout|multi[-\s]?item checkout|multiple activities.*one checkout)\b/i,
    allowedContext: /future|coming next|roadmap|not currently/i,
  },
  {
    name: "resources or variants",
    pattern: /\b(resource variants|customer-selectable resources|physical unit assignment|inventory blocking)\b/i,
    allowedContext: /future|coming next|roadmap|not currently/i,
  },
  {
    name: "multi-day bookings",
    pattern: /\b(multi[-\s]?day bookings|overnight rentals|lodging-style stays)\b/i,
    allowedContext: /future|coming next|roadmap|not currently/i,
  },
  {
    name: "template editor",
    pattern: /\b(template editor|edit email templates|edit sms templates|customize email templates|customize sms templates)\b/i,
    allowedContext: /does not currently include|future|coming next|roadmap|not currently/i,
  },
  {
    name: "staff tip self-service",
    pattern: /\b(my tips|staff can see (their|own) tips|employees can see (their|own) tips)\b/i,
    allowedContext: /future|not exposed|not currently/i,
  },
  {
    name: "dedicated embed layouts",
    pattern: /\b(calendar-only embed|card-only embed|activity-card-only embed)\b/i,
    allowedContext: /future options|future work|coming next|roadmap|beyond the current booking links/i,
  },
];

const required = [
  { file: "app/lib/marketing.ts", text: "Start free" },
  { file: "app/lib/marketing.ts", text: 'process.env.NEXT_PUBLIC_MARKETING_MODE === "prelaunch"' },
  { file: "app/lib/marketing.ts", text: '    : "public_signup"' },
  { file: "app/lib/marketing.ts", text: 'MARKETING_MODE === "public_signup" ? PUBLIC_SIGNUP_URL : EARLY_ACCESS_URL' },
  { file: "app/lib/marketing.ts", text: "new URLSearchParams" },
  { file: "docs/MARKETING_TRUTH_AUDIT_2026-07-25.md", text: "Default / production mode is public signup" },
  { file: "docs/MARKETING_TRUTH_AUDIT_2026-07-25.md", text: "Public signup is live through Free-first signup" },
  { file: "app/components/Nav.tsx", text: "PRIMARY_CTA_URL" },
  { file: "app/components/Nav.tsx", text: "PRIMARY_CTA_EVENT" },
  { file: "app/components/PageShell.tsx", text: "import Nav from \"./Nav\"" },
  { file: "app/components/PageShell.tsx", text: "<Nav />" },
  { file: "app/components/EarlyAccessRequestForm.tsx", text: "Request setup help" },
  { file: "app/components/EarlyAccessRequestForm.tsx", text: 'name="email"' },
  { file: "app/components/EarlyAccessRequestForm.tsx", text: 'type="email"' },
  { file: "app/components/EarlyAccessRequestForm.tsx", text: 'autoComplete="email"' },
  { file: "app/components/EarlyAccessRequestForm.tsx", text: 'name="businessName"' },
  { file: "app/components/EarlyAccessRequestForm.tsx", text: 'name="biggestBookingProblem"' },
  { file: "app/components/EarlyAccessRequestForm.tsx", text: "aria-describedby" },
  { file: "app/components/EarlyAccessRequestForm.tsx", text: "biggestBookingProblem" },
  { file: "app/components/EarlyAccessRequestForm.tsx", text: "What is the biggest thing you need ReservKit to fix?" },
  { file: "app/lib/marketing.ts", text: "/early-access" },
  { file: "app/api/early-access-request/route.ts", text: "EARLY_ACCESS_REQUEST_TO_EMAIL" },
  { file: "app/api/early-access-request/route.ts", text: "biggestBookingProblem" },
  { file: "app/early-access/page.tsx", text: "Want help setting up your first ReservKit booking flow?" },
  { file: "app/early-access/page.tsx", text: "waiver evidence" },
  { file: "app/early-access/page.tsx", text: "refundable damage deposits" },
  { file: "app/early-access/page.tsx", text: "reply within one business day" },
  { file: "app/docs/payments/page.tsx", text: "booking subtotal collected at checkout" },
  { file: "app/docs/payments/page.tsx", text: "customer tips are not marked up" },
  { file: "app/docs/payments/page.tsx", text: "Stripe&apos;s published processing fees" },
  { file: "app/lib/marketing.ts", text: "Stripe’s published processing fees apply separately" },
  { file: "app/docs/payments/page.tsx", text: "refundable damage deposit" },
  { file: "app/lib/marketing.ts", text: "refundable damage deposits are not marked up" },
  { file: "app/lib/marketing.ts", text: "No staff/team access" },
  { file: "app/lib/marketing.ts", text: "Basic team tools" },
  { file: "app/lib/marketing.ts", text: "Equipment and dynamic pricing" },
  { file: "app/pricing/page.tsx", text: "Free includes the core booking page" },
  { file: "app/pricing/page.tsx", text: "Starter adds basic team tools" },
  { file: "app/pricing/page.tsx", text: "equipment, and dynamic pricing" },
  { file: "app/docs/staff/page.tsx", text: "Team and staff tools are available on Starter and higher plans" },
  { file: "app/docs/page.tsx", text: "staff scheduling on Starter and higher plans" },
  { file: "app/docs/bookings-availability/page.tsx", text: "all-activity booking links and activity-specific booking links" },
  { file: "app/docs/bookings-availability/page.tsx", text: "iframe snippets" },
  { file: "app/docs/bookings-availability/page.tsx", text: "Dedicated calendar-only or activity-card-only embeds are future options" },
  { file: "app/docs/page.tsx", text: "/docs/notifications" },
  { file: "app/docs/notifications/page.tsx", text: "ReservKit-managed email delivery" },
  { file: "app/docs/notifications/page.tsx", text: "Automated SMS reminders can use ReservKit-managed delivery" },
  { file: "app/docs/notifications/page.tsx", text: "Custom Resend setup requires both a Resend API key and a verified From Email" },
  { file: "app/docs/notifications/page.tsx", text: "Custom Twilio setup requires Account SID, Auth Token, and From Number together" },
  { file: "app/docs/notifications/page.tsx", text: "does not currently include a full operator-facing email or SMS template editor" },
  { file: "app/docs/notifications/page.tsx", text: "Test emails from Settings go only to the signed-in operator" },
  { file: "app/page.tsx", text: "real ReservKit screens from configured public booking and operator workflows" },
  { file: "app/page.tsx", text: "captures reviewed before broader marketing" },
  { file: "app/page.tsx", text: "representative screens show the operator workflows ReservKit is built around" },
  { file: "app/page.tsx", text: "Owners and admins keep revenue reporting separate." },
  { file: "app/page.tsx", text: "ReservKit is live booking software" },
  { file: "app/page.tsx", text: "Start on Free, build one working booking flow" },
];

const removedRoutes = [
  "app/fareharbor-alternative/page.tsx",
  "app/checkfront-alternative/page.tsx",
  "app/rezdy-alternative/page.tsx",
];

function listFiles(target) {
  const full = join(root, target);
  if (!statSync(full).isDirectory()) return [full];
  return readdirSync(full).flatMap((entry) => {
    const path = join(full, entry);
    if (entry === "node_modules" || entry === ".next") return [];
    if (statSync(path).isDirectory()) return listFiles(relative(root, path));
    return /\.(tsx|ts|md)$/.test(path) ? [path] : [];
  });
}

const files = scanDirs.flatMap(listFiles);
const failures = [];

for (const file of files) {
  const source = readFileSync(file, "utf8");
  const relativeFile = relative(root, file);
  for (const phrase of forbidden) {
    if (source.includes(phrase)) {
      failures.push(`${relativeFile} contains stale phrase: ${phrase}`);
    }
  }
  if (source.toLowerCase().includes("controlled beta")) {
    failures.push(`${relativeFile} contains stale phrase: controlled beta`);
  }
  if (source.includes("Invite-only") || source.includes("invite-only")) {
    const allowed = allowedByFile[relativeFile] ?? [];
    if (!allowed.includes("invite-only")) {
      failures.push(`${relativeFile} contains stale phrase: invite-only`);
    }
  }
  for (const { name, pattern, allowedContext } of unsupportedLiveClaimPatterns) {
    for (const match of source.matchAll(new RegExp(pattern.source, `${pattern.flags}g`))) {
      const lineStart = source.lastIndexOf("\n", match.index) + 1;
      const lineEnd = source.indexOf("\n", match.index);
      const line = source.slice(lineStart, lineEnd === -1 ? source.length : lineEnd);
      if (
        name === "open public signup" &&
        relativeFile === "app/lib/marketing.ts" &&
        source.slice(Math.max(0, match.index - 160), match.index + 160).includes("MARKETING_MODE")
      ) {
        continue;
      }
      if (!allowedContext.test(line)) {
        failures.push(`${relativeFile} may imply unsupported live ${name}: ${match[0]}`);
      }
    }
  }
}

for (const { file, text } of required) {
  try {
    const source = readFileSync(join(root, file), "utf8");
    if (!source.includes(text)) failures.push(`${file} is missing required text: ${text}`);
  } catch {
    failures.push(`${file} is missing`);
  }
}

for (const file of removedRoutes) {
  if (existsSync(join(root, file))) {
    failures.push(`${file} should not exist; competitor pages redirect from next.config.ts`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Content guard passed.");
