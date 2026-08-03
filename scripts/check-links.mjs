import { EXPECTED_REDIRECTS, MARKETING_REDIRECT_ROUTES, MARKETING_ROUTES } from "./marketing-routes.mjs";

const baseUrl = process.env.RESERVKIT_MARKETING_BASE_URL || "https://reservkit.com";
const baseOrigin = new URL(baseUrl).origin;
const appOrigin = "https://app.reservkit.com";

const seedRoutes = [...MARKETING_ROUTES, ...MARKETING_REDIRECT_ROUTES];
const expectedRedirects = EXPECTED_REDIRECTS;

const failures = [];
const htmlCache = new Map();
const checkedUrls = new Set();
const discoveredRoutes = new Set(seedRoutes);

function toBaseUrl(path) {
  return new URL(path, baseUrl);
}

function routeKey(url) {
  return `${url.pathname}${url.search}`;
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function extractAnchors(html) {
  const anchors = [];
  const anchorPattern = /<a\b[^>]*?\bhref=(["'])(.*?)\1/gi;
  let match;
  while ((match = anchorPattern.exec(html))) {
    anchors.push(decodeHtml(match[2].trim()));
  }
  return anchors;
}

function extractForms(html) {
  const forms = [];
  const formPattern = /<form\b([^>]*)>/gi;
  let match;
  while ((match = formPattern.exec(html))) {
    const attrs = match[1];
    const action = attrs.match(/\baction=(["'])(.*?)\1/i)?.[2] ?? "";
    const method = attrs.match(/\bmethod=(["'])(.*?)\1/i)?.[2] ?? "get";
    forms.push({ action: decodeHtml(action), method: method.toLowerCase() });
  }
  return forms;
}

function extractIds(html) {
  const ids = new Set();
  const idPattern = /\bid=(["'])(.*?)\1/gi;
  let match;
  while ((match = idPattern.exec(html))) {
    ids.add(decodeHtml(match[2]));
  }
  return ids;
}

async function fetchHtml(url) {
  const cacheKey = url.toString();
  if (htmlCache.has(cacheKey)) return htmlCache.get(cacheKey);

  const response = await fetch(url, { redirect: "manual" });
  const text = await response.text();
  const result = { response, text };
  htmlCache.set(cacheKey, result);
  return result;
}

async function checkMarketingUrl(url, sourceRoute) {
  const urlWithoutHash = new URL(url.toString());
  urlWithoutHash.hash = "";
  const key = urlWithoutHash.toString();
  if (!checkedUrls.has(key)) {
    checkedUrls.add(key);
    try {
      const { response, text } = await fetchHtml(urlWithoutHash);
      const expectedLocation = expectedRedirects[routeKey(urlWithoutHash)];
      if (expectedLocation) {
        const actualLocation = response.headers.get("location");
        if (response.status < 300 || response.status >= 400 || actualLocation !== expectedLocation) {
          failures.push(`${sourceRoute} links to ${routeKey(urlWithoutHash)}, expected redirect to ${expectedLocation} but got HTTP ${response.status} ${actualLocation ?? ""}`.trim());
        }
      } else if (response.status < 200 || response.status >= 400) {
        failures.push(`${sourceRoute} links to ${routeKey(urlWithoutHash)}, which returned HTTP ${response.status}`);
      } else if (!text.includes("<html")) {
        failures.push(`${sourceRoute} links to ${routeKey(urlWithoutHash)}, which did not return an HTML page`);
      }
    } catch (error) {
      failures.push(`${sourceRoute} links to ${routeKey(urlWithoutHash)}, which failed to fetch: ${error.message}`);
    }
  }

  if (url.hash) {
    const { text } = await fetchHtml(urlWithoutHash);
    const id = decodeURIComponent(url.hash.slice(1));
    if (!extractIds(text).has(id)) {
      failures.push(`${sourceRoute} links to missing section ${routeKey(urlWithoutHash)}#${id}`);
    }
  }
}

function checkAppUrl(url, sourceRoute) {
  if (url.origin !== appOrigin) {
    failures.push(`${sourceRoute} points to unexpected external app host: ${url.toString()}`);
    return;
  }

  if (url.pathname !== "/login") {
    failures.push(`${sourceRoute} points to unexpected app path: ${url.toString()}`);
  }

  const allowedSearches = new Set(["", "?signup=true"]);
  if (!allowedSearches.has(url.search)) {
    failures.push(`${sourceRoute} points to unexpected app query: ${url.toString()}`);
  }
}

async function checkAnchor(sourceRoute, href) {
  if (!href || href === "#" || href.includes("undefined") || href.includes("null")) {
    failures.push(`${sourceRoute} has invalid link href: ${href || "(empty)"}`);
    return;
  }

  if (/^(mailto|tel):/i.test(href)) return;
  if (/^javascript:/i.test(href)) {
    failures.push(`${sourceRoute} has javascript link href: ${href}`);
    return;
  }

  const currentUrl = toBaseUrl(sourceRoute);
  const url = new URL(href, currentUrl);

  if (url.origin === baseOrigin) {
    discoveredRoutes.add(routeKey(url));
    await checkMarketingUrl(url, sourceRoute);
    return;
  }

  if (url.origin === appOrigin) {
    checkAppUrl(url, sourceRoute);
    return;
  }

  console.log(`skip external ${sourceRoute} -> ${url.toString()}`);
}

async function checkRoute(route) {
  const url = toBaseUrl(route);
  let text;
  try {
    const result = await fetchHtml(url);
    text = result.text;
    console.log(`${result.response.status} ${route} ${text.length}b`);
    const expectedLocation = expectedRedirects[route];
    if (expectedLocation) {
      const actualLocation = result.response.headers.get("location");
      if (result.response.status < 300 || result.response.status >= 400 || actualLocation !== expectedLocation) {
        failures.push(`${route} expected redirect to ${expectedLocation} but got HTTP ${result.response.status} ${actualLocation ?? ""}`.trim());
      }
      return;
    }

    if (result.response.status < 200 || result.response.status >= 400) {
      failures.push(`${route} returned HTTP ${result.response.status}`);
      return;
    }
  } catch (error) {
    failures.push(`${route} failed to fetch: ${error.message}`);
    return;
  }

  for (const href of extractAnchors(text)) {
    await checkAnchor(route, href);
  }

  if (route === "/early-access") {
    const setupForm = extractForms(text).find((form) => form.action === "/api/early-access-request");
    if (!setupForm) {
      failures.push("/early-access is missing the guided setup form action");
    } else if (setupForm.method !== "post") {
      failures.push(`/early-access guided setup form uses ${setupForm.method.toUpperCase()} instead of POST`);
    }
  }
}

async function checkInvalidSetupPost() {
  const response = await fetch(toBaseUrl("/api/early-access-request"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "not-an-email" }),
    redirect: "manual",
  });
  const text = await response.text();
  if (response.status !== 400) {
    failures.push(`/api/early-access-request invalid payload returned HTTP ${response.status} instead of 400`);
  }
  if (!text.includes("errors") || !text.includes("email")) {
    failures.push("/api/early-access-request invalid payload response did not include field validation errors");
  }
}

for (const route of seedRoutes) {
  await checkRoute(route);
}

for (const route of [...discoveredRoutes].sort()) {
  if (!seedRoutes.includes(route) && route.startsWith("/")) {
    await checkRoute(route);
  }
}

await checkInvalidSetupPost();

if (failures.length) {
  console.error("\nMarketing link/form check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`\nMarketing link/form check passed for ${checkedUrls.size} internal URLs.`);
