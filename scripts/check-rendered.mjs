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

function parseSelectedRoutes() {
  if (!process.env.RENDERED_CHECK_ROUTES) return routes;

  const requestedRoutes = process.env.RENDERED_CHECK_ROUTES
    .split(",")
    .map((route) => route.trim())
    .filter(Boolean);
  const unknownRoutes = requestedRoutes.filter((route) => !routes.includes(route));

  if (unknownRoutes.length > 0) {
    throw new Error(
      `RENDERED_CHECK_ROUTES includes unknown route(s): ${unknownRoutes.join(", ")}. ` +
        `Known routes: ${routes.join(", ")}`
    );
  }

  const selected = [...new Set(requestedRoutes)];
  if (selected.length === 0) {
    throw new Error("RENDERED_CHECK_ROUTES did not include any valid routes.");
  }

  return selected;
}

const selectedRoutes = parseSelectedRoutes();

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
      await page.waitForFunction(() => document.readyState === "complete", { timeout: 30_000 });
      await page.waitForLoadState("networkidle", { timeout: 10_000 }).catch(() => {});
      await page.waitForTimeout(3_000);
      const mobileMenuState = await page.evaluate(() => {
        const button = document.querySelector('header button[aria-label="Open menu"]');
        if (!(button instanceof HTMLButtonElement)) return { found: false };
        return {
          found: true,
          ariaLabel: button.getAttribute("aria-label"),
          expanded: button.getAttribute("aria-expanded"),
          visible: button.getBoundingClientRect().width > 0 && button.getBoundingClientRect().height > 0,
        };
      });
      if (!mobileMenuState.found || !mobileMenuState.visible) {
        failures.push(`${viewport.label} ${route} mobile menu button is not visible`);
        return;
      }
      const expanded = mobileMenuState.expanded;
      if (expanded !== "false") {
        failures.push(`${viewport.label} ${route} mobile menu button has unexpected aria-expanded=${expanded}`);
      }
      await page.getByRole("button", { name: "Open menu", exact: true }).click({ timeout: 5_000 });
      await page.waitForTimeout(100);
      let openedMenuStateAfterRender = await page.evaluate(() => {
        const activeButton = document.querySelector("header button");
        return {
          ariaLabel: activeButton?.getAttribute("aria-label") ?? null,
          expanded: activeButton?.getAttribute("aria-expanded") ?? null,
        };
      });
      if (openedMenuStateAfterRender.expanded !== "true") {
        const buttonCenter = await page.evaluate(() => {
          const button = document.querySelector("header button");
          if (!button) return null;
          const rect = button.getBoundingClientRect();
          return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        });
        if (buttonCenter) {
          await page.mouse.click(buttonCenter.x, buttonCenter.y);
          await page.waitForTimeout(100);
          openedMenuStateAfterRender = await page.evaluate(() => {
            const activeButton = document.querySelector("header button");
            return {
              ariaLabel: activeButton?.getAttribute("aria-label") ?? null,
              expanded: activeButton?.getAttribute("aria-expanded") ?? null,
            };
          });
        }
      }
      const closeLabel = openedMenuStateAfterRender.ariaLabel;
      const expandedAfterClick = openedMenuStateAfterRender.expanded;
      if (closeLabel !== "Close menu" || expandedAfterClick !== "true") {
        failures.push(
          `${viewport.label} ${route} mobile menu did not open cleanly: aria-label=${closeLabel}, aria-expanded=${expandedAfterClick}`
        );
      }
      const expectedMobileMenuLinks = [
        { text: "Pricing", href: "/pricing" },
        { text: "Docs", href: "/docs" },
        { text: "Log in", href: "https://app.reservkit.com/login" },
        { text: "Start free", href: "https://app.reservkit.com/login?signup=true" },
      ];
      for (const expectedLink of expectedMobileMenuLinks) {
        const visibleMenuLinkCount = await page.evaluate((link) => {
          return Array.from(document.querySelectorAll("header a")).filter((anchor) => {
            const rect = anchor.getBoundingClientRect();
            const style = window.getComputedStyle(anchor);
            return (
              anchor.textContent?.trim() === link.text &&
              anchor.getAttribute("href") === link.href &&
              rect.width > 0 &&
              rect.height > 0 &&
              style.visibility !== "hidden" &&
              style.display !== "none"
            );
          }).length;
        }, expectedLink);
        if (visibleMenuLinkCount !== 1) {
          failures.push(
            `${viewport.label} ${route} mobile menu expected one visible ${expectedLink.text} link to ${expectedLink.href}, found ${visibleMenuLinkCount}`
          );
        }
      }
      const heroHeadingMetrics = await page.evaluate(() => {
        const heading = document.querySelector("h1");
        if (!heading) return null;
        const rect = heading.getBoundingClientRect();
        return {
          left: rect.left,
          right: rect.right,
          width: rect.width,
          viewportWidth: window.innerWidth,
        };
      });
      if (
        !heroHeadingMetrics ||
        heroHeadingMetrics.left < -1 ||
        heroHeadingMetrics.right > heroHeadingMetrics.viewportWidth + 1
      ) {
        failures.push(
          `${viewport.label} ${route} hero heading clips horizontally: ${JSON.stringify(heroHeadingMetrics)}`
        );
      }
    }

    if (route === "/pricing") {
      const pricingCards = await page.evaluate(() =>
        Array.from(document.querySelectorAll("main article")).map((article) => ({
          heading: article.querySelector("h3")?.textContent?.trim() ?? "",
          text: article.textContent?.replace(/\s+/g, " ").trim() ?? "",
          links: Array.from(article.querySelectorAll("a")).map((anchor) => ({
            text: anchor.textContent?.replace(/\s+/g, " ").trim() ?? "",
            href: anchor.getAttribute("href") ?? "",
          })),
        }))
      );
      const expectedSelfServePlans = [
        { name: "Free", requiredText: ["$0", "4% booking fee", "10 bookings/month", "No staff/team access"] },
        { name: "Starter", requiredText: ["$79", "3% booking fee", "100 bookings/month", "Basic team tools"] },
        { name: "Growth", requiredText: ["$149", "2% booking fee", "Unlimited bookings", "Reports and waiver tools"] },
        { name: "Pro", requiredText: ["$299", "1.5% booking fee", "Unlimited bookings", "Lowest self-serve booking fee"] },
      ];
      for (const expectedPlan of expectedSelfServePlans) {
        const card = pricingCards.find((candidate) => candidate.heading === expectedPlan.name);
        if (!card) {
          failures.push(`${viewport.label} ${route} missing ${expectedPlan.name} pricing card`);
          continue;
        }
        const signupLinks = card.links.filter(
          (link) => link.text === "Start free" && link.href === "https://app.reservkit.com/login?signup=true"
        );
        if (signupLinks.length !== 1) {
          failures.push(
            `${viewport.label} ${route} expected ${expectedPlan.name} card to have one Start free signup link, found ${signupLinks.length}`
          );
        }
        for (const requiredText of expectedPlan.requiredText) {
          if (!card.text.includes(requiredText)) {
            failures.push(`${viewport.label} ${route} ${expectedPlan.name} card missing text: ${requiredText}`);
          }
        }
      }
      const enterpriseCard = pricingCards.find((candidate) => candidate.heading === "Enterprise");
      if (!enterpriseCard) {
        failures.push(`${viewport.label} ${route} missing Enterprise pricing card`);
      } else {
        const enterpriseLinks = enterpriseCard.links.filter(
          (link) => link.text === "Request setup help" && link.href === "/early-access"
        );
        if (enterpriseLinks.length !== 1) {
          failures.push(
            `${viewport.label} ${route} expected Enterprise card to have one Request setup help link to /early-access, found ${enterpriseLinks.length}`
          );
        }
        for (const requiredText of ["Custom", "Custom booking fee", "Custom volume", "Manual/private plan"]) {
          if (!enterpriseCard.text.includes(requiredText)) {
            failures.push(`${viewport.label} ${route} Enterprise card missing text: ${requiredText}`);
          }
        }
        if (enterpriseCard.links.some((link) => link.text === "Start free")) {
          failures.push(`${viewport.label} ${route} Enterprise card must not use the self-serve Start free CTA`);
        }
      }
    }

    if (route === "/early-access" && viewport.label === "mobile") {
      await page.waitForFunction(() => document.readyState === "complete", { timeout: 30_000 });
      await page.waitForLoadState("networkidle", { timeout: 30_000 });
      await page.waitForTimeout(1_500);
      await page.getByRole("button", { name: /request setup help/i }).click();
      await page.locator("#early-access-name-error").waitFor({ state: "visible" });
      await page.locator("#early-access-email-error").waitFor({ state: "visible" });
      const nameError = await page.locator("#early-access-name-error").innerText();
      const emailError = await page.locator("#early-access-email-error").innerText();
      if (nameError !== "Name is required.") {
        failures.push(`${viewport.label} ${route} rendered unexpected name validation: ${nameError}`);
      }
      if (emailError !== "Enter a valid email address.") {
        failures.push(`${viewport.label} ${route} rendered unexpected email validation: ${emailError}`);
      }
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
