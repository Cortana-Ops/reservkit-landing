import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs/config";

const nextConfig: NextConfig = {
};

export default withSentryConfig(nextConfig, {
  org: "the-hive-co",
  project: "reservkit-landing",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  sourcemaps: { disable: true },
});
