"use client";

import Link from "next/link";
import { usePostHog } from "posthog-js/react";
import type { ComponentProps } from "react";
import { buildAttributedAppUrl, getCampaignAttribution } from "../lib/campaignAttribution";

interface TrackedLinkProps extends ComponentProps<typeof Link> {
  event: string;
  properties?: Record<string, string | number | boolean | undefined>;
}

export function TrackedLink({ event, properties, onClick, ...props }: TrackedLinkProps) {
  const ph = usePostHog();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const campaign = getCampaignAttribution(window.location.search, window.location.pathname);
    const ctaLocation = typeof properties?.location === "string" ? properties.location : undefined;
    const href = e.currentTarget.href;

    e.currentTarget.href = buildAttributedAppUrl(
      href,
      window.location.search,
      window.location.pathname,
      ctaLocation,
    );
    ph?.capture(event, { ...properties, ...campaign });
    onClick?.(e);
  };

  return <Link onClick={handleClick} {...props} />;
}
