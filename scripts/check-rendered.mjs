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

const expectedMetadataByRoute = {
  "/": {
    title: "ReservKit — Booking software for rental, tour, and experience operators",
    description:
      "Switch to direct booking software with Stripe payments, waiver evidence, refundable damage deposits, day-of operations, and transparent pricing for rental, tour, and experience operators.",
    canonical: "https://reservkit.com",
    socialTitle: "ReservKit — Booking software for rental, tour, and experience operators",
  },
  "/pricing": {
    title: "Pricing — ReservKit",
    description:
      "Straightforward pricing for rental and experience operators — monthly subscription plus a per-booking fee that decreases as you grow. No demo required. Plans from $0 to $299/month.",
    canonical: "https://reservkit.com/pricing",
    socialTitle: "Pricing — ReservKit",
  },
  "/early-access": {
    title: "Request Guided Setup — ReservKit",
    description: "Request ReservKit setup help for your first direct booking flow.",
    canonical: "https://reservkit.com/early-access",
    socialTitle: "Request Guided Setup — ReservKit",
  },
  "/docs": {
    title: "Documentation & Guides — ReservKit",
    description: "ReservKit guides for direct bookings, Stripe payments, waivers, staff scheduling, and reports.",
    canonical: "https://reservkit.com/docs",
    socialTitle: "Documentation & Guides — ReservKit",
  },
  "/docs/getting-started": {
    title: "Getting Started Guide — ReservKit",
    description:
      "Set up ReservKit, create your first activity, connect Stripe, configure waivers, and run a test booking before sharing your booking link.",
    canonical: "https://reservkit.com/docs/getting-started",
    socialTitle: "Getting Started Guide — ReservKit",
  },
  "/docs/payments": {
    title: "Payments — ReservKit",
    description:
      "Connect Stripe, set pricing and refundable damage deposits, issue refunds, and understand ReservKit's current booking fee structure.",
    canonical: "https://reservkit.com/docs/payments",
    socialTitle: "Payments — ReservKit",
  },
  "/docs/staff": {
    title: "Staff — ReservKit",
    description:
      "Invite team members, configure roles and permissions, assign staff to bookings, and manage your team schedule in ReservKit.",
    canonical: "https://reservkit.com/docs/staff",
    socialTitle: "Staff — ReservKit",
  },
  "/docs/waivers": {
    title: "Waivers — ReservKit",
    description:
      "Create digital waiver templates, configure per-guest signer fields, manage guest signing, and track waiver status in ReservKit.",
    canonical: "https://reservkit.com/docs/waivers",
    socialTitle: "Waivers — ReservKit",
  },
  "/docs/notifications": {
    title: "Notifications — ReservKit",
    description: "Understand ReservKit booking emails, SMS reminders, review requests, and optional custom sender setup.",
    canonical: "https://reservkit.com/docs/notifications",
    socialTitle: "Notifications — ReservKit",
  },
  "/docs/reports": {
    title: "Reports & Analytics — ReservKit",
    description:
      "Track booking income, customer tips, booking volume, and guest counts in ReservKit. Filter by date range and export CSVs for review.",
    canonical: "https://reservkit.com/docs/reports",
    socialTitle: "Reports & Analytics — ReservKit",
  },
  "/docs/bookings-availability": {
    title: "Bookings & Availability — ReservKit",
    description: "Manage your availability calendar, time slots, cancellations, and check-in process in ReservKit.",
    canonical: "https://reservkit.com/docs/bookings-availability",
    socialTitle: "Bookings & Availability — ReservKit",
  },
  "/roadmap": {
    title: "Product Roadmap — ReservKit",
    description:
      "See what we've shipped, what's in progress, and what's coming next for ReservKit — the booking platform for rental operators and experience businesses.",
    canonical: "https://reservkit.com/roadmap",
    socialTitle: "Product Roadmap — ReservKit",
  },
  "/changelog": {
    title: "Product Updates — ReservKit",
    description: "Recent ReservKit product updates for booking, payments, waivers, and operator workflows.",
    canonical: "https://reservkit.com/changelog",
    socialTitle: "Product Updates — ReservKit",
  },
  "/blog": {
    title: "Blog — Rental Operator Guides — ReservKit",
    description:
      "Practical notes for rental operators and experience businesses evaluating direct booking, Stripe payments, waivers, and day-of workflows.",
    canonical: "https://reservkit.com/blog",
    socialTitle: "Blog — Rental Operator Guides — ReservKit",
  },
  "/boat-rental-software": {
    title: "Boat Rental Booking Software - Payments & Waivers Included — ReservKit",
    description:
      "Boat rental booking software for direct reservations, Stripe payments, digital waivers, staff visibility, and Free-first setup.",
    canonical: "https://reservkit.com/boat-rental-software",
    socialTitle: "Boat Rental Booking Software - Payments & Waivers Included — ReservKit",
  },
  "/kayak-rental-software": {
    title: "Kayak Rental Booking Software - Online Reservations & Waivers — ReservKit",
    description:
      "ReservKit helps kayak and paddleboard rental operators take online reservations, collect Stripe payments, and manage digital waivers.",
    canonical: "https://reservkit.com/kayak-rental-software",
    socialTitle: "Kayak Rental Booking Software - Online Reservations & Waivers — ReservKit",
  },
  "/tour-operator-software": {
    title: "Tour Operator Booking Software - Waivers, Payments, Staff — ReservKit",
    description:
      "ReservKit helps tour and activity operators accept online bookings, collect Stripe payments, manage waivers, and coordinate staff.",
    canonical: "https://reservkit.com/tour-operator-software",
    socialTitle: "Tour Operator Booking Software - Waivers, Payments, Staff — ReservKit",
  },
  "/terms": {
    title: "Terms of Service — ReservKit",
    description: "Terms and conditions for using the ReservKit booking platform.",
    canonical: "https://reservkit.com/terms",
    socialTitle: "Terms of Service — ReservKit",
  },
  "/privacy": {
    title: "Privacy Policy — ReservKit",
    description: "How ReservKit collects, uses, and protects your data.",
    canonical: "https://reservkit.com/privacy",
    socialTitle: "Privacy Policy — ReservKit",
  },
};

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

    const expectedMetadata = expectedMetadataByRoute[route];
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
