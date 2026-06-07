// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://6e5af96160d1af901cdba0d8e698f8f0@o4511506628411393.ingest.us.sentry.io/4511522626273280",
  tracesSampleRate: 1.0,
  streamGenAiSpans: true,
  integrations: [Sentry.vercelAIIntegration()],

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Enable sending user PII (Personally Identifiable Information)
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
