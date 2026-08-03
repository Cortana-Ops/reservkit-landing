import { EXPECTED_METADATA_BY_ROUTE } from "./marketing-metadata.mjs";
import { MARKETING_REDIRECT_ROUTES, MARKETING_ROUTES } from "./marketing-routes.mjs";

const failures = [];
const metadataRoutes = Object.keys(EXPECTED_METADATA_BY_ROUTE).sort();
const pageRoutes = [...MARKETING_ROUTES].sort();
const redirectRoutes = [...MARKETING_REDIRECT_ROUTES].sort();

const missingMetadata = pageRoutes.filter((route) => !metadataRoutes.includes(route));
const staleMetadata = metadataRoutes.filter((route) => !pageRoutes.includes(route));
const redirectMetadata = redirectRoutes.filter((route) => metadataRoutes.includes(route));

if (missingMetadata.length > 0) {
  failures.push(`marketing route(s) missing metadata expectations: ${missingMetadata.join(", ")}`);
}
if (staleMetadata.length > 0) {
  failures.push(`metadata expectations exist for non-page route(s): ${staleMetadata.join(", ")}`);
}
if (redirectMetadata.length > 0) {
  failures.push(`redirect route(s) should not have page metadata expectations: ${redirectMetadata.join(", ")}`);
}

for (const route of metadataRoutes) {
  const expected = EXPECTED_METADATA_BY_ROUTE[route];
  const canonical = route === "/" ? "https://reservkit.com" : `https://reservkit.com${route}`;

  for (const field of ["title", "description", "canonical", "socialTitle"]) {
    if (typeof expected[field] !== "string" || expected[field].trim().length === 0) {
      failures.push(`${route} metadata ${field} must be a non-empty string`);
    }
  }

  if (expected.canonical !== canonical) {
    failures.push(`${route} canonical expected ${canonical}, got ${expected.canonical}`);
  }
  if (!expected.title.includes("ReservKit")) {
    failures.push(`${route} browser title must include ReservKit`);
  }
  if (!expected.socialTitle.includes("ReservKit")) {
    failures.push(`${route} social title must include ReservKit`);
  }
  if (expected.description.length < 50) {
    failures.push(`${route} description is too short for a useful search/social snippet`);
  }
  if (expected.description.length > 220) {
    failures.push(`${route} description is longer than the current metadata budget`);
  }
}

if (failures.length) {
  console.error("\nMarketing metadata manifest check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Marketing metadata manifest check passed for ${metadataRoutes.length} routes.`);
