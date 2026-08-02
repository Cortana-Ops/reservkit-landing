import { existsSync } from "node:fs";
import { chromium } from "playwright";

const baseUrl = process.env.RESERVKIT_MARKETING_BASE_URL || "https://reservkit.com";
const chromeExecutable = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

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
const selectedRoutes = process.env.RENDERED_CHECK_ROUTES
  ? routes.filter((route) => process.env.RENDERED_CHECK_ROUTES.split(",").includes(route))
  : routes;

const viewports = [
  { label: "desktop", width: 1440, height: 1000 },
  { label: "mobile", width: 390, height: 900 },
];

const failures = [];
const maxConcurrency = Number(process.env.RENDERED_CHECK_CONCURRENCY || 4);

function routeUrl(route) {
  return new URL(route, baseUrl).toString();
}

async function launchBrowser() {
  const options = existsSync(chromeExecutable)
    ? { executablePath: chromeExecutable }
    : {};

  try {
    return await chromium.launch(options);
  } catch (error) {
    if (!existsSync(chromeExecutable)) {
      throw new Error(
        `${error.message}\nInstall the Playwright browser once with: npx playwright install chromium`
      );
    }
    throw error;
  }
}

async function checkRoute(browser, route, viewport, attempt = 1) {
  const page = await browser.newPage({ viewport });
  await page.route("**/*", (routeRequest) => {
    const requestUrl = new URL(routeRequest.request().url());
    const host = requestUrl.hostname;
    if (
      host.includes("posthog") ||
      host.includes("sentry") ||
      host.includes("vercel-insights") ||
      host.includes("vercel-analytics")
    ) {
      routeRequest.abort();
      return;
    }
    routeRequest.continue();
  });
  const messages = [];
  page.on("console", (message) => {
    if (["error", "warning"].includes(message.type())) {
      if (message.text().includes("Failed to load resource: net::ERR_FAILED")) return;
      messages.push(`${message.type()}: ${message.text()}`);
    }
  });
  page.on("pageerror", (error) => {
    messages.push(`pageerror: ${error.message}`);
  });

  try {
    const response = await page.goto(routeUrl(route), {
      waitUntil: "domcontentloaded",
      timeout: 20_000,
    });
    await page.waitForTimeout(250);
    const status = response?.status() ?? 0;
    const bodyText = (await page.locator("body").innerText()).trim();
    const hasOverlay = await page
      .locator("text=/Unhandled Runtime Error|Application error|This page could not be found/i")
      .count();
    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
    );
    const brokenImages = await page.evaluate(() =>
      Array.from(document.images)
        .filter((image) => image.complete && image.naturalWidth === 0)
        .map((image) => image.getAttribute("src") || image.currentSrc || "(unknown image)")
    );

    console.log(`${status} ${viewport.label} ${route} ${bodyText.length} chars`);

    if (status < 200 || status >= 400) {
      failures.push(`${viewport.label} ${route} returned HTTP ${status}`);
    }
    if (bodyText.length < 40) {
      failures.push(`${viewport.label} ${route} rendered too little content`);
    }
    if (hasOverlay > 0) {
      failures.push(`${viewport.label} ${route} rendered a framework/error overlay`);
    }
    if (hasHorizontalOverflow) {
      failures.push(`${viewport.label} ${route} has horizontal overflow`);
    }
    if (brokenImages.length > 0) {
      failures.push(`${viewport.label} ${route} has broken images: ${brokenImages.join(", ")}`);
    }
    if (messages.length > 0) {
      failures.push(`${viewport.label} ${route} console issues: ${messages.join(" | ")}`);
    }

    if (route === "/" && viewport.label === "mobile") {
      const menuButton = page.getByRole("button", { name: /open menu/i });
      await menuButton.waitFor({ state: "visible" });
      const expanded = await menuButton.getAttribute("aria-expanded");
      if (expanded !== "false") {
        failures.push(`${viewport.label} ${route} mobile menu button has unexpected aria-expanded=${expanded}`);
      }
    }

    if (route === "/early-access" && viewport.label === "mobile") {
      await page.getByRole("button", { name: /request setup help/i }).click();
      await page.getByText("Name is required.").waitFor({ state: "visible" });
      await page.getByText("Enter a valid email address.").waitFor({ state: "visible" });
    }
  } catch (error) {
    if (attempt < 2) {
      await page.close();
      console.log(`retry ${viewport.label} ${route}: ${error.message.split("\n")[0]}`);
      await checkRoute(browser, route, viewport, attempt + 1);
      return;
    }
    failures.push(`${viewport.label} ${route} render check failed: ${error.message}`);
  } finally {
    if (!page.isClosed()) await page.close();
  }
}

const browser = await launchBrowser();
try {
  const jobs = viewports.flatMap((viewport) =>
    selectedRoutes.map((route) => () => checkRoute(browser, route, viewport))
  );
  for (let index = 0; index < jobs.length; index += maxConcurrency) {
    await Promise.all(jobs.slice(index, index + maxConcurrency).map((job) => job()));
  }
} finally {
  await browser.close();
}

if (failures.length) {
  console.error("\nRendered marketing check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`\nRendered marketing check passed for ${selectedRoutes.length} routes across ${viewports.length} viewports.`);
