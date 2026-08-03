import { readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { MARKETING_REDIRECT_ROUTES, MARKETING_ROUTES } from "./marketing-routes.mjs";

const appDir = join(process.cwd(), "app");
const ignoredSegments = new Set(["api"]);

function collectPageRoutes(dir = appDir) {
  const routes = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      if (dir === appDir && ignoredSegments.has(entry)) continue;
      routes.push(...collectPageRoutes(fullPath));
      continue;
    }
    if (entry !== "page.tsx") continue;
    const routePath = relative(appDir, dir)
      .split(sep)
      .filter(Boolean)
      .join("/");
    routes.push(routePath ? `/${routePath}` : "/");
  }
  return routes.sort();
}

const sourceRoutes = collectPageRoutes();
const expectedPages = [...MARKETING_ROUTES, ...MARKETING_REDIRECT_ROUTES].sort();
const missingFromManifest = sourceRoutes.filter((route) => !expectedPages.includes(route));
const staleManifestRoutes = expectedPages.filter((route) => !sourceRoutes.includes(route));
const duplicateRoutes = expectedPages.filter((route, index) => expectedPages.indexOf(route) !== index);

const failures = [];
if (missingFromManifest.length > 0) {
  failures.push(`app page route(s) missing from marketing manifest: ${missingFromManifest.join(", ")}`);
}
if (staleManifestRoutes.length > 0) {
  failures.push(`marketing manifest route(s) have no app page: ${staleManifestRoutes.join(", ")}`);
}
if (duplicateRoutes.length > 0) {
  failures.push(`marketing manifest contains duplicate route(s): ${[...new Set(duplicateRoutes)].join(", ")}`);
}

if (failures.length) {
  console.error("\nMarketing route manifest check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Marketing route manifest check passed for ${sourceRoutes.length} app page routes.`);

