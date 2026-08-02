# Marketing Truth Audit - 2026-07-25

Purpose: keep `reservkit.com` aligned with current app behavior before broader marketing starts.

## Result

Passed. No public marketing page was found making unsupported live claims for public self-serve signup, cart or multi-item checkout, resources/variants, multi-day bookings, staff tip self-service, full email/SMS template editing, or dedicated calendar/card embeds.

## Evidence

- `npm run check:content` passed.
- `npm run check:live` passed against `https://reservkit.com`.
- A focused source scan across public app source found zero unsupported future-feature claims.
- Live rendered Browser checks passed on desktop routes:
  - `/`
  - `/pricing`
  - `/docs`
  - `/docs/bookings-availability`
  - `/docs/notifications`
  - `/docs/staff`
  - `/docs/reports`
  - `/roadmap`
  - `/early-access`
- Live rendered mobile checks passed for the homepage, mobile menu, and early-access form empty-submit validation.

## Follow-Up Rendered Verification

After the latest app-side production/Sentry/customer-path evidence updates, a fresh live marketing gate was rerun on 2026-07-25:

- `npm run check:content` passed.
- `npm run lint` passed.
- `npm run build` passed.
- `npm run check:live` passed against `https://reservkit.com`.
- A Playwright rendered pass loaded `/`, `/pricing`, `/early-access`, `/docs`, `/docs/bookings-availability`, `/docs/notifications`, `/docs/reports`, and `/roadmap` at desktop `1440px` and mobile `390px`.
- The rendered pass found no console errors or warnings, no horizontal overflow, required launch-sensitive copy present, and stale/risky copy absent.

## Guardrail Added

`scripts/check-content.mjs` now includes pattern-based checks for risky unsupported-live-claim language:

- open public signup
- cart or multi-item checkout
- resources or variants
- multi-day bookings
- template editor
- staff tip self-service
- dedicated embed layouts

Future pages can still discuss these items when the surrounding copy clearly frames them as future, coming-next, roadmap, or not currently available.

## Launch Mode Guardrail Updated

The marketing CTA source has an explicit launch mode in `app/lib/marketing.ts`.

- Default / production mode is public signup and keeps public CTAs on `Start free` -> the app signup route.
- `NEXT_PUBLIC_MARKETING_MODE=prelaunch` is the explicit rollback mode for `Get early access` -> `/early-access`.
- `scripts/check-content.mjs` verifies this posture and blocks stale prelaunch/pricing phrases.
- Public signup is live through the app Free-first path; `/early-access` remains as guided setup/help intake, not the primary public CTA.

## Product Boundaries Confirmed

- Public CTAs are `Start free`.
- Public signup is live through Free-first signup.
- Guided setup remains available through `/early-access`.
- Dedicated calendar-only/card-only embeds remain future options.
- Resources/variants and cart/multi-item checkout remain future product/design work.
- Notifications docs correctly say ReservKit does not currently include a full operator-facing email or SMS template editor.
- Staff docs keep staff/team tools Starter+ and do not expose staff tip self-service as a launch feature.

## 2026-08-02 Truth Sync

After the public signup launch closeout, this audit was updated so future marketing work does not accidentally restore the old prelaunch interpretation. `README.md` and `app/lib/marketing.ts` are the current source of truth: production marketing is in public signup posture unless `NEXT_PUBLIC_MARKETING_MODE=prelaunch` is deliberately set as a rollback.
