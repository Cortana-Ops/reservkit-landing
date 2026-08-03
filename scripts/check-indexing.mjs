import { readFileSync } from "node:fs";
import { MARKETING_REDIRECT_ROUTES, MARKETING_ROUTES } from "./marketing-routes.mjs";

const baseUrl = "https://reservkit.com";
const sitemapSource = readFileSync("app/sitemap.ts", "utf8");
const robotsSource = readFileSync("app/robots.ts", "utf8");
const failures = [];

const expectedSitemapUrls = MARKETING_ROUTES.map((route) =>
  route === "/" ? baseUrl : `${baseUrl}${route}`,
).sort();
const sitemapUrls = [...sitemapSource.matchAll(/url:\s*(?:base|`\$\{base\}([^`]+)`)/g)]
  .map((match) => (match[1] ? `${baseUrl}${match[1]}` : baseUrl))
  .sort();

const duplicateUrls = sitemapUrls.filter((url, index) => sitemapUrls.indexOf(url) !== index);
const missingUrls = expectedSitemapUrls.filter((url) => !sitemapUrls.includes(url));
const staleUrls = sitemapUrls.filter((url) => !expectedSitemapUrls.includes(url));

if (missingUrls.length > 0) {
  failures.push(`sitemap missing marketing route URL(s): ${missingUrls.join(", ")}`);
}
if (staleUrls.length > 0) {
  failures.push(`sitemap contains URL(s) outside the marketing route manifest: ${staleUrls.join(", ")}`);
}
if (duplicateUrls.length > 0) {
  failures.push(`sitemap contains duplicate URL(s): ${[...new Set(duplicateUrls)].join(", ")}`);
}

for (const redirectRoute of MARKETING_REDIRECT_ROUTES) {
  const redirectUrl = `${baseUrl}${redirectRoute}`;
  if (sitemapUrls.includes(redirectUrl)) {
    failures.push(`redirect route ${redirectRoute} should not be indexed in the sitemap`);
  }
}

if (!robotsSource.includes('allow: "/"')) {
  failures.push("robots.ts must allow crawlers to index public marketing routes");
}
if (!robotsSource.includes(`sitemap: "${baseUrl}/sitemap.xml"`)) {
  failures.push("robots.ts must advertise the production sitemap URL");
}
if (!robotsSource.includes(`host: "${baseUrl}"`)) {
  failures.push("robots.ts must declare the production host");
}

if (failures.length) {
  console.error("\nMarketing indexing check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Marketing indexing check passed for ${sitemapUrls.length} sitemap URLs.`);
