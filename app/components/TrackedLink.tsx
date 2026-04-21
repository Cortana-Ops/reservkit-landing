"use client";

import Link from "next/link";
import { usePostHog } from "posthog-js/react";
import type { ComponentProps } from "react";

interface TrackedLinkProps extends ComponentProps<typeof Link> {
  event: string;
  properties?: Record<string, string | number | boolean | undefined>;
}

export function TrackedLink({ event, properties, onClick, ...props }: TrackedLinkProps) {
  const ph = usePostHog();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    ph?.capture(event, properties);
    onClick?.(e);
  };

  return <Link onClick={handleClick} {...props} />;
}
