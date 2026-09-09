const APP_ORIGIN = "https://app.reservkit.com";

export const CAMPAIGN_QUERY_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
] as const;

const MAX_VALUE_LENGTH = 100;
const MAX_PATH_LENGTH = 200;

function clean(value: string | null, maxLength = MAX_VALUE_LENGTH) {
  return value?.trim().slice(0, maxLength) || null;
}

export function getCampaignAttribution(search: string, landingPath: string) {
  const source = new URLSearchParams(search);
  const attribution: Record<string, string> = {};

  for (const key of CAMPAIGN_QUERY_KEYS) {
    const value = clean(source.get(key));
    if (value) attribution[key] = value;
  }

  const path = clean(landingPath, MAX_PATH_LENGTH);
  if (path) attribution.rk_landing_path = path;

  return attribution;
}

export function buildAttributedAppUrl(
  href: string,
  search: string,
  landingPath: string,
  ctaLocation?: string,
) {
  const url = new URL(href, APP_ORIGIN);
  if (url.origin !== APP_ORIGIN || url.pathname !== "/login") return href;

  const attribution = getCampaignAttribution(search, landingPath);
  const cleanCtaLocation = clean(ctaLocation ?? null);
  if (cleanCtaLocation) attribution.rk_cta = cleanCtaLocation;

  for (const [key, value] of Object.entries(attribution)) {
    url.searchParams.set(key, value);
  }

  return url.toString();
}
