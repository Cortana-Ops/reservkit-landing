import { existsSync } from "node:fs";
import { chromium } from "playwright";
import { EXPECTED_METADATA_BY_ROUTE } from "./marketing-metadata.mjs";
import { MARKETING_ROUTES } from "./marketing-routes.mjs";

const baseUrl = process.env.RESERVKIT_MARKETING_BASE_URL || "https://reservkit.com";
const chromeExecutable = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const routes = MARKETING_ROUTES;

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
const routesWithSharedHeader = routes.filter((route) => route !== "/early-access");

const desktopHeaderLinks = [
  { text: "ReservKit", href: "/" },
  { text: "Pricing", href: "/pricing" },
  { text: "Docs", href: "/docs" },
  { text: "Log in", href: "https://app.reservkit.com/login" },
  { text: "Start free", href: "https://app.reservkit.com/login?signup=true" },
];

const mobileMenuLinks = [
  { text: "Pricing", href: "/pricing" },
  { text: "Docs", href: "/docs" },
  { text: "Log in", href: "https://app.reservkit.com/login" },
  { text: "Start free", href: "https://app.reservkit.com/login?signup=true" },
];

const homepageHeroLinks = [
  { text: "Start free", href: "https://app.reservkit.com/login?signup=true" },
  { text: "See how it works", href: "#workflow" },
];

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

async function countVisibleHeaderLinks(page, expectedLink) {
  return page.evaluate((link) => {
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
}

async function countVisibleHomepageHeroLinks(page, expectedLink) {
  return page.evaluate((link) => {
    const hero = document.querySelector("main section:first-of-type");
    if (!hero) return 0;
    return Array.from(hero.querySelectorAll("a")).filter((anchor) => {
      const rect = anchor.getBoundingClientRect();
      const style = window.getComputedStyle(anchor);
      return (
        anchor.textContent?.replace(/\s+/g, " ").trim() === link.text &&
        anchor.getAttribute("href") === link.href &&
        rect.width > 0 &&
        rect.height > 0 &&
        style.visibility !== "hidden" &&
        style.display !== "none"
      );
    }).length;
  }, expectedLink);
}

async function checkHomepageHeroActions(page, route, viewport) {
  if (route !== "/") return;

  for (const expectedLink of homepageHeroLinks) {
    const visibleLinkCount = await countVisibleHomepageHeroLinks(page, expectedLink);
    if (visibleLinkCount !== 1) {
      failures.push(
        `${viewport.label} ${route} hero expected one visible ${expectedLink.text} link to ${expectedLink.href}, found ${visibleLinkCount}`
      );
    }
  }

  const workflowTargetExists = await page.locator("#workflow").count();
  if (workflowTargetExists !== 1) {
    failures.push(`${viewport.label} ${route} expected one #workflow anchor target, found ${workflowTargetExists}`);
    return;
  }

  const workflowLink = page
    .locator('main section:first-of-type a[href="#workflow"]')
    .filter({ hasText: "See how it works" })
    .first();
  await workflowLink.click({ timeout: 5_000 });
  await page.waitForFunction(() => window.location.hash === "#workflow", { timeout: 5_000 });
  const workflowPosition = await page.locator("#workflow").evaluate((element) => {
    const rect = element.getBoundingClientRect();
    return { top: rect.top, bottom: rect.bottom, viewportHeight: window.innerHeight };
  });
  if (
    workflowPosition.bottom <= 0 ||
    workflowPosition.top >= workflowPosition.viewportHeight
  ) {
    failures.push(
      `${viewport.label} ${route} workflow anchor click did not scroll target into view: ${JSON.stringify(workflowPosition)}`
    );
  }
  await page.evaluate(() => {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(100);
}

async function checkDesktopHeaderLinks(page, route, viewport) {
  if (viewport.label !== "desktop" || !routesWithSharedHeader.includes(route)) return;

  for (const expectedLink of desktopHeaderLinks) {
    const visibleLinkCount = await countVisibleHeaderLinks(page, expectedLink);
    if (visibleLinkCount !== 1) {
      failures.push(
        `${viewport.label} ${route} header expected one visible ${expectedLink.text} link to ${expectedLink.href}, found ${visibleLinkCount}`
      );
    }
  }
}

async function checkMobileHeaderMenu(page, route, viewport) {
  if (viewport.label !== "mobile" || !routesWithSharedHeader.includes(route)) return;

  await page.waitForFunction(() => document.readyState === "complete", { timeout: 30_000 });
  await page.waitForLoadState("networkidle", { timeout: 10_000 }).catch(() => {});
  await page.waitForTimeout(750);
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
  if (mobileMenuState.expanded !== "false") {
    failures.push(`${viewport.label} ${route} mobile menu button has unexpected aria-expanded=${mobileMenuState.expanded}`);
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

  for (const expectedLink of mobileMenuLinks) {
    const visibleMenuLinkCount = await countVisibleHeaderLinks(page, expectedLink);
    if (visibleMenuLinkCount !== 1) {
      failures.push(
        `${viewport.label} ${route} mobile menu expected one visible ${expectedLink.text} link to ${expectedLink.href}, found ${visibleMenuLinkCount}`
      );
    }
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
    const renderedMetadata = await page.evaluate(() => ({
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.getAttribute("content") ?? "",
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? "",
      openGraphTitle: document.querySelector('meta[property="og:title"]')?.getAttribute("content") ?? "",
      openGraphDescription: document.querySelector('meta[property="og:description"]')?.getAttribute("content") ?? "",
      openGraphUrl: document.querySelector('meta[property="og:url"]')?.getAttribute("content") ?? "",
      twitterTitle: document.querySelector('meta[name="twitter:title"]')?.getAttribute("content") ?? "",
      twitterDescription: document.querySelector('meta[name="twitter:description"]')?.getAttribute("content") ?? "",
    }));

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

    await checkHomepageHeroActions(page, route, viewport);
    await checkDesktopHeaderLinks(page, route, viewport);
    await checkMobileHeaderMenu(page, route, viewport);

    const expectedMetadata = EXPECTED_METADATA_BY_ROUTE[route];
    if (!expectedMetadata) {
      failures.push(`${viewport.label} ${route} is missing rendered metadata expectations`);
    } else {
      const expectedFields = {
        title: expectedMetadata.title,
        description: expectedMetadata.description,
        canonical: expectedMetadata.canonical,
        openGraphTitle: expectedMetadata.socialTitle,
        openGraphDescription: expectedMetadata.description,
        openGraphUrl: expectedMetadata.canonical,
        twitterTitle: expectedMetadata.socialTitle,
        twitterDescription: expectedMetadata.description,
      };
      for (const [field, expectedValue] of Object.entries(expectedFields)) {
        if (renderedMetadata[field] !== expectedValue) {
          failures.push(
            `${viewport.label} ${route} metadata ${field} expected ${JSON.stringify(expectedValue)}, got ${JSON.stringify(renderedMetadata[field])}`
          );
        }
      }
    }

    if (route === "/" && viewport.label === "mobile") {
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

    if (route === "/early-access") {
      const backLinkCount = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("a")).filter((anchor) => {
          const rect = anchor.getBoundingClientRect();
          return (
            anchor.textContent?.replace(/\s+/g, " ").trim() === "Back to ReservKit" &&
            anchor.getAttribute("href") === "/" &&
            rect.width > 0 &&
            rect.height > 0
          );
        }).length;
      });
      if (backLinkCount !== 1) {
        failures.push(`${viewport.label} ${route} expected one visible Back to ReservKit link, found ${backLinkCount}`);
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
