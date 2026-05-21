import { readFileSync, readdirSync, statSync } from "node:fs";
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
  "1% platform fee",
  "0.5% platform fee",
  "$249",
  "Settings → Payments",
  "login?signup=true",
  "Game changer",
  "Trusted by rental operators and tour guides",
];

const required = [
  { file: "app/lib/marketing.ts", text: "Request beta access" },
  { file: "app/beta/page.tsx", text: "Request beta access" },
  { file: "app/api/beta-request/route.ts", text: "BETA_REQUEST_TO_EMAIL" },
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
  for (const phrase of forbidden) {
    if (source.includes(phrase)) {
      failures.push(`${relative(root, file)} contains stale phrase: ${phrase}`);
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

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Content guard passed.");
