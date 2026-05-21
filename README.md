# ReservKit Landing

Marketing website for ReservKit at `reservkit.com`.

This site is currently positioned for controlled beta access. Public marketing CTAs should route to `/beta`; direct app login links are for existing users only.

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

`check:content` blocks stale launch/pricing phrases and direct open-signup URLs that should not return during beta.

## Beta Intake

The beta request form posts to `POST /api/beta-request` and sends an intake email with Resend.

Required environment variables:

- `RESEND_API_KEY`
- `BETA_REQUEST_TO_EMAIL`

Optional environment variable:

- `BETA_REQUEST_FROM_EMAIL`

Do not commit secrets or paste live credentials into docs, issues, PRs, or chat.

## Shared Marketing Copy

Pricing and CTA constants live in `app/lib/marketing.ts`. Use those constants when editing pages so the website stays aligned with the app.
