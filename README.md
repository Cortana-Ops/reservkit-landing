# ReservKit Landing

Marketing website for ReservKit at `reservkit.com`.

This site is positioned as working direct-booking software with public Free-first signup. Public marketing CTAs should route to the app signup URL. `/early-access` is retained as a guided setup/help request route for operators who want hands-on setup support.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Gates

Run these before opening or merging a PR:

```bash
npm run check:content
npm run check:routes
npm run check:links
npm run lint
npm run build
```

`check:content` blocks stale launch/pricing phrases and unsupported feature claims that should not appear in public marketing.
`check:routes` compares the shared marketing route manifest against actual `app/**/page.tsx` routes so new pages cannot skip live/link/rendered checks.
`check:links` crawls the current public marketing route set, verifies internal links and same-page anchors, validates approved app login/signup CTA targets, confirms `/beta` redirects to `/early-access`, and checks that the guided setup API returns field validation for bad input.

## Marketing Launch Mode

Public CTAs are controlled from `app/lib/marketing.ts`.

- Default / production mode: `NEXT_PUBLIC_MARKETING_MODE` unset or any value other than `prelaunch`.
  - CTA label: `Start free`
  - CTA destination: app signup route
- Explicit fallback mode: `NEXT_PUBLIC_MARKETING_MODE=prelaunch`.
  - CTA label: `Get early access`
  - CTA destination: `/early-access`

Production marketing is now in public signup posture. Do not switch back to `prelaunch` unless the app signup path is deliberately rolled back.

## Guided Setup Intake

The guided setup request form posts to `POST /api/early-access-request` and sends an intake email with Resend. The route/function names still use `early-access` for link compatibility.

Required environment variables:

- `RESEND_API_KEY`
- `EARLY_ACCESS_REQUEST_TO_EMAIL`

Optional environment variable:

- `EARLY_ACCESS_REQUEST_FROM_EMAIL`

Do not commit secrets or paste live credentials into docs, issues, PRs, or chat.

## Shared Marketing Copy

Pricing and CTA constants live in `app/lib/marketing.ts`. Use those constants when editing pages so the website stays aligned with the app.

Before changing public claims, read `docs/MARKETING_PRODUCT_FACTS.md`. That file is the marketing truth source for current launch posture, plan gates, booking-flow claims, waiver/payment boundaries, unsupported future features, and product-media rules.
