import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const scanDirs = ["app", "README.md"];

const forbidden = [
  "14-day Growth trial",
  "14-day free trial",
  "Start Free Trial",
  "Start free trial",
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
  "login?signup=true",
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
  "Staff and captain scheduling",
  "Staff assignment and guide scheduling",
  "booking fee is calculated on the total amount charged",
  "booking's total charged amount",
  "booking&apos;s total charged amount",
  "2.9% + 30¢",
  "2.9% + 30",
  "2 business days after a charge",
];

const allowedByFile = {
  "app/terms/page.tsx": ["invite-only"],
};

const required = [
  { file: "app/lib/marketing.ts", text: "Get early access" },
  { file: "app/components/EarlyAccessRequestForm.tsx", text: "Submit my application" },
  { file: "app/components/EarlyAccessRequestForm.tsx", text: "biggestBookingProblem" },
  { file: "app/components/EarlyAccessRequestForm.tsx", text: "What is the biggest thing you need ReservKit to fix?" },
  { file: "app/lib/marketing.ts", text: "/early-access" },
  { file: "app/api/early-access-request/route.ts", text: "EARLY_ACCESS_REQUEST_TO_EMAIL" },
  { file: "app/api/early-access-request/route.ts", text: "biggestBookingProblem" },
  { file: "app/early-access/page.tsx", text: "Get early access to a real ReservKit booking flow before public launch." },
  { file: "app/early-access/page.tsx", text: "waiver evidence" },
  { file: "app/early-access/page.tsx", text: "refundable deposits" },
  { file: "app/early-access/page.tsx", text: "reply within one business day" },
  { file: "app/docs/payments/page.tsx", text: "booking subtotal collected at checkout" },
  { file: "app/docs/payments/page.tsx", text: "customer tips are not marked up" },
  { file: "app/docs/payments/page.tsx", text: "Stripe&apos;s published processing fees" },
  { file: "app/lib/marketing.ts", text: "Stripe’s published processing fees apply separately" },
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
