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

const homepageFooterLinks = [
  { text: "Docs", href: "/docs" },
  { text: "Roadmap", href: "/roadmap" },
  { text: "Blog", href: "/blog" },
  { text: "Pricing", href: "/pricing" },
  { text: "Privacy", href: "/privacy" },
  { text: "Terms", href: "/terms" },
  { text: "Contact", href: "mailto:hello@reservkit.com" },
];

const pageShellFooterLinks = [
  { text: "← Back to ReservKit", href: "/" },
  { text: "Privacy", href: "/privacy" },
  { text: "Terms", href: "/terms" },
  { text: "Contact", href: "mailto:hello@reservkit.com" },
];

const primarySignupHref = "https://app.reservkit.com/login?signup=true";

const verticalMainLinks = [
  { text: "Start free", href: primarySignupHref, min: 2 },
  { text: "View pricing", href: "/pricing", min: 1 },
];

const routeMainLinkExpectations = {
  "/docs": [
    { text: "Getting Started", href: "/docs/getting-started", min: 1 },
    { text: "Bookings & Availability", href: "/docs/bookings-availability", min: 1 },
    { text: "Payments", href: "/docs/payments", min: 1 },
    { text: "Waivers", href: "/docs/waivers", min: 1 },
    { text: "Notifications", href: "/docs/notifications", min: 1 },
    { text: "Staff", href: "/docs/staff", min: 1 },
    { text: "Reports & Analytics", href: "/docs/reports", min: 1 },
    { text: "Contact support", href: "mailto:hello@reservkit.com", min: 1 },
  ],
  "/docs/getting-started": [
    { text: "Bookings & Availability", href: "/docs/bookings-availability", min: 1 },
    { text: "Payments & Fees", href: "/docs/payments", min: 1 },
    { text: "Back to all documentation", href: "/docs", min: 1 },
  ],
  "/docs/payments": [
    { text: "Getting Started", href: "/docs/getting-started", min: 1 },
    { text: "Waivers", href: "/docs/waivers", min: 1 },
    { text: "Back to all documentation", href: "/docs", min: 1 },
  ],
  "/docs/staff": [
    { text: "Waivers", href: "/docs/waivers", min: 1 },
    { text: "Reports & Analytics", href: "/docs/reports", min: 1 },
    { text: "Back to all documentation", href: "/docs", min: 1 },
  ],
  "/docs/waivers": [
    { text: "Bookings & Availability", href: "/docs/bookings-availability", min: 1 },
    { text: "Staff", href: "/docs/staff", min: 1 },
    { text: "Back to all documentation", href: "/docs", min: 1 },
  ],
  "/docs/notifications": [
    { text: "Getting Started", href: "/docs/getting-started", min: 1 },
    { text: "Waivers", href: "/docs/waivers", min: 1 },
    { text: "Back to all documentation", href: "/docs", min: 1 },
  ],
  "/docs/reports": [
    { text: "Staff", href: "/docs/staff", min: 1 },
    { text: "Getting Started", href: "/docs/getting-started", min: 1 },
    { text: "Back to all documentation", href: "/docs", min: 1 },
  ],
  "/docs/bookings-availability": [
    { text: "Payments guide", href: "/docs/payments", min: 1 },
    { text: "Payments & Fees", href: "/docs/payments", min: 1 },
    { text: "Waivers", href: "/docs/waivers", min: 1 },
    { text: "Back to all documentation", href: "/docs", min: 1 },
  ],
  "/roadmap": [
    { text: "Start free", href: primarySignupHref, min: 1 },
    { text: "View full changelog", href: "/changelog", min: 1 },
    { text: "Explore the docs", href: "/docs", min: 1 },
    { text: "Read the blog", href: "/blog", min: 1 },
  ],
  "/changelog": [
    { text: "View Roadmap", href: "/roadmap", min: 1 },
    { text: "Read the Blog", href: "/blog", min: 1 },
    { text: "Documentation", href: "/docs", min: 1 },
    { text: "Back to ReservKit", href: "/", min: 1 },
  ],
  "/blog": [
    { text: "Start free", href: primarySignupHref, min: 1 },
    { text: "Changelog", href: "/changelog", min: 1 },
    { text: "Roadmap", href: "/roadmap", min: 1 },
  ],
  "/boat-rental-software": verticalMainLinks,
  "/kayak-rental-software": verticalMainLinks,
  "/tour-operator-software": verticalMainLinks,
};

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

async function checkFooterLinks(page, route, viewport) {
  if (route === "/early-access") return;

  const expectedLinks = route === "/" ? homepageFooterLinks : pageShellFooterLinks;
  const renderedFooterLinks = await page.evaluate(() => {
    const footer = Array.from(document.querySelectorAll("footer")).at(-1);
    if (!footer) return [];

    return Array.from(footer.querySelectorAll("a")).map((anchor) => {
      const rect = anchor.getBoundingClientRect();
      const style = window.getComputedStyle(anchor);
      return {
        text: anchor.textContent?.replace(/\s+/g, " ").trim() ?? "",
        href: anchor.getAttribute("href") ?? "",
        visible:
          rect.width > 0 &&
          rect.height > 0 &&
          style.visibility !== "hidden" &&
          style.display !== "none",
      };
    });
  });

  if (renderedFooterLinks.length === 0) {
    failures.push(`${viewport.label} ${route} footer rendered no links`);
    return;
  }

  for (const expectedLink of expectedLinks) {
    const visibleLinkCount = renderedFooterLinks.filter(
      (link) => link.text === expectedLink.text && link.href === expectedLink.href && link.visible
    ).length;
    if (visibleLinkCount !== 1) {
      failures.push(
        `${viewport.label} ${route} footer expected one visible ${expectedLink.text} link to ${expectedLink.href}, found ${visibleLinkCount}`
      );
    }
  }
}

async function checkRouteMainLinks(page, route, viewport) {
  const expectedLinks = routeMainLinkExpectations[route];
  if (!expectedLinks) return;

  const renderedMainLinks = await page.evaluate(() => {
    const main = document.querySelector("main");
    if (!main) return [];

    return Array.from(main.querySelectorAll("a")).map((anchor) => {
      const rect = anchor.getBoundingClientRect();
      const style = window.getComputedStyle(anchor);
      return {
        text: anchor.textContent?.replace(/\s+/g, " ").trim() ?? "",
        href: anchor.getAttribute("href") ?? "",
        visible:
          rect.width > 0 &&
          rect.height > 0 &&
          style.visibility !== "hidden" &&
          style.display !== "none",
      };
    });
  });

  if (renderedMainLinks.length === 0) {
    failures.push(`${viewport.label} ${route} main content rendered no links`);
    return;
  }

  for (const expectedLink of expectedLinks) {
    const visibleLinkCount = renderedMainLinks.filter(
      (link) =>
        link.visible &&
        link.href === expectedLink.href &&
        link.text.includes(expectedLink.text)
    ).length;
    if (visibleLinkCount < expectedLink.min) {
      failures.push(
        `${viewport.label} ${route} main expected at least ${expectedLink.min} visible ${expectedLink.text} link(s) to ${expectedLink.href}, found ${visibleLinkCount}`
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
    await checkFooterLinks(page, route, viewport);
    await checkRouteMainLinks(page, route, viewport);

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
