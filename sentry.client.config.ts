import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://99491015409e2ea0e229204eb3ee39e7@o4511256321785856.ingest.us.sentry.io/4511256341970944",
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0.05,
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    Sentry.replayIntegration({ maskAllText: true, blockAllMedia: false }),
  ],
});
