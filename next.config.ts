import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/fareharbor-alternative",
        destination: "/",
        permanent: true,
      },
      {
        source: "/checkfront-alternative",
        destination: "/",
        permanent: true,
      },
      {
        source: "/rezdy-alternative",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  org: "the-hive-co",
  project: "reservkit-landing",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  sourcemaps: { disable: true },
});
