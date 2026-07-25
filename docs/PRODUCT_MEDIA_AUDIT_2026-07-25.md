# Product Media Audit - 2026-07-25

Purpose: keep the public marketing site honest about product screenshots before broader marketing starts.

## Current State

- Homepage product media uses real ReservKit UI captures from configured demo/operator workflows.
- The public booking, Activities, Bookings, Check-In, Waivers, and Reports captures are usable as representative product proof, but they should not be described as always-current live screenshots.
- Homepage copy now says the screenshots are real ReservKit screens from configured workflows and representative operator screens.
- `public/product-reports.png` was replaced on 2026-07-25 with a current cropped Reports workspace capture that removes support-only navigation and avoids customer-identifying table data.

## Findings

- `public/product-public-booking-live.png` shows a real public booking flow with configured activities. It is acceptable as a representative customer-flow screenshot.
- `public/product-activities.png`, `public/product-bookings-dashboard.png`, `public/product-checkin-manifest.png`, and `public/product-waiver-status.png` show real operator UI and are acceptable for the current pre-launch site.
- `public/product-reports.png` now shows the current Reports Overview tab, customer-tip separation, booking-fee language, activity-date window copy, and booking-income chart without exposing the support-only sidebar.

## Replacement Standard

Future public screenshots should be captured from a controlled demo organization, not a private owner account or live customer account. Before replacing assets:

1. Use sanitized demo customer names, emails, activities, and booking references.
2. Confirm the active app route matches current production behavior.
3. Capture desktop and mobile where the page is promoted on marketing.
4. Verify no private customer data, secrets, internal IDs, OTPs, tokens, or real payment identifiers are visible.
5. Run marketing `npm run check:content`, `npm run lint`, `npm run build`, live/local browser checks, and `npm run check:live` after deployment.

## Next Media Slice

Recommended next product-media task: review the remaining homepage product-tour images as a batch only if future app UI changes make them visibly stale. Do not capture from private owner/customer accounts.
