# ReservKit Landing

Marketing website for ReservKit at `reservkit.com`.

This site is positioned as working booking software with limited pre-launch early access. Public marketing CTAs should route to `/early-access`; direct app login links are for existing users only until the coordinated public-signup launch cutover.

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
npm run lint
npm run build
```

`check:content` blocks stale launch/pricing phrases and accidental open-signup claims that should not return before public launch.

## Marketing Launch Mode

Public CTAs are controlled from `app/lib/marketing.ts`.

- Default / production-safe mode: `NEXT_PUBLIC_MARKETING_MODE` unset or any value other than `public_signup`.
  - CTA label: `Get early access`
  - CTA destination: `/early-access`
- Public-signup cutover mode: `NEXT_PUBLIC_MARKETING_MODE=public_signup` uses the `Start free` CTA.
  - CTA destination: app signup route

Do not enable `public_signup` on production marketing until the app production environment has `VITE_SELF_SERVE_SIGNUP_ENABLED=true`, the app signup verification checklist has passed, and the marketing route sweep has passed.

## Early Access Intake

The early access request form posts to `POST /api/early-access-request` and sends an intake email with Resend.

Required environment variables:

- `RESEND_API_KEY`
- `EARLY_ACCESS_REQUEST_TO_EMAIL`

Optional environment variable:

- `EARLY_ACCESS_REQUEST_FROM_EMAIL`

Do not commit secrets or paste live credentials into docs, issues, PRs, or chat.

## Shared Marketing Copy

Pricing and CTA constants live in `app/lib/marketing.ts`. Use those constants when editing pages so the website stays aligned with the app.
