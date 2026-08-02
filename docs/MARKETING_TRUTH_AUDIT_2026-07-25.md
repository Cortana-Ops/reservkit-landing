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

## 2026-08-02 Staff Visibility Follow-Up

The homepage day-of operations copy was tightened so it no longer implies normal staff members receive revenue-report access. Staff-facing language now focuses on arrival readiness, assignments, waiver status, operational notes, and booking readiness. Owner/admin revenue reporting remains described separately, and `scripts/check-content.mjs` now guards against restoring the old `Revenue reports` staff bullet.

## 2026-08-02 Notifications Provider Setup Follow-Up

After the app shipped Settings integration validation hardening, the public Notifications guide was updated to match: custom Resend requires both a Resend API key and verified From Email, and custom Twilio requires Account SID, Auth Token, and From Number together. The page still frames both as optional advanced setup and keeps ReservKit-managed delivery as the default launch posture. `scripts/check-content.mjs` and `scripts/check-live.mjs` now guard those provider-completeness claims.

## 2026-08-02 Inner-Page Navigation And Changelog Follow-Up

The public `/changelog` page is in the sitemap and now reflects the current public-signup launch posture instead of leaving May 2026 as the latest entry. It includes the public Free-first signup launch, notification setup truth sync, staff visibility copy alignment, pricing/media updates, and the removed early-access-first posture. `scripts/check-live.mjs` now includes `/changelog` with required launch/current-product text.

Inner pages that use `PageShell` now render the shared `Nav` component instead of a separate simplified header. This gives docs, pricing, changelog, roadmap, blog, legal pages, and vertical landing pages the same desktop Log in / Start free links and mobile hamburger menu as the homepage. Local rendered Browser checks passed for `/changelog` desktop and 390px mobile menu, plus `/docs` desktop nav/link proof, with no console warnings/errors and no horizontal overflow.

2026-08-02 public-launch copy readiness follow-up:

- Homepage proof copy no longer uses defensive beta-era language like `not vaporware` or `mockup-only marketing`.
- Final homepage CTA now keeps public signup first: operators can start on Free, build one working booking flow, and request guided setup help if they want review before sharing their link.
- `scripts/check-content.mjs` now guards those stale defensive phrases and requires the live-booking/public-signup wording.

## 2026-08-02 Prelaunch Rollback Check Follow-Up

The production posture remains public signup, but `NEXT_PUBLIC_MARKETING_MODE=prelaunch` is still the explicit rollback path. A local prelaunch-mode live-check rehearsal found `scripts/check-live.mjs` still expected the old `Pre-launch early access` homepage phrase. The homepage badge is now mode-aware: public mode says `Public signup is open`, while rollback mode says `Guided setup is available`. The live checker now requires `Get early access` plus that rollback badge in prelaunch mode without restoring stale beta/prelaunch language.

## 2026-08-02 Guided Setup Form Fallback Follow-Up

A page-by-page rendered marketing sweep found the guided setup form relied on client hydration to prevent the browser's default form behavior. The form now declares `method="post"` and `action="/api/early-access-request"`, and the API accepts both JSON and form-encoded payloads. Hydrated submissions still show inline validation without leaving `/early-access`; no-JS/fallback submissions post to the API instead of leaking operator-entered fields into the URL. Internal/API copy now says `Guided setup request` rather than `early access request`.

## 2026-08-02 Live Marketing Verification Follow-Up

Live `https://reservkit.com` verification confirmed the guided setup fallback release is deployed: `/early-access` contains the POST form action, hydrated invalid submission stays on `/early-access` with inline errors, invalid form-encoded API POST returns JSON validation errors, and the mobile menu opens at 390px with expected links. A live route/link crawl covered 292 links across current marketing routes, including 22 unique internal URLs/anchors, with no bad HTTP statuses or missing anchors.

## 2026-08-02 Pricing Gate Clarity Follow-Up

The public pricing page still matched the app-side prices, booking fees, and booking-volume limits, but the plan cards did not show enough of the actual feature gates. Pricing cards now include concise tier-specific feature bullets: Free is core low-volume booking with no staff/team access, Starter begins team tools, Growth unlocks deeper operator tools like reports, waivers, broadcasts, equipment, dynamic pricing, coupons, deposits, and add-ons, and Pro is the lower-fee higher-volume support tier. `scripts/check-content.mjs` now guards those plan-gate clarity claims so marketing copy does not drift toward “all plans include everything.”

## 2026-08-02 Bookings Documentation Truth Follow-Up

The public Bookings & Availability guide was tightened to match app behavior. It no longer says operators handle generic `booking requests`, no longer implies every staff member can create manual bookings, and no longer says checked-in bookings are excluded from cancellation flows. The guide now says operator-side bookings can be created by owners, admins, and permissioned team members, and that checked-in bookings should still use the Booking Detail cancellation flow when cancellation is needed. `scripts/check-content.mjs` guards the corrected wording.

## 2026-08-02 Waiver Documentation Truth Follow-Up

The public waiver docs and cross-links were tightened to avoid broad legal/compliance promises. Public copy now says digital waivers are for activities that require them, avoids blanket `from every guest` language, removes casual `in seconds` signing promises, and avoids prescribing which signer fields are sufficient. The guide now tells operators to use waiver language and required fields reviewed for their business, activities, location, counsel, insurer, and operating requirements. `scripts/check-content.mjs` guards those safer waiver-doc boundaries.

## 2026-08-02 Payments Documentation Truth Follow-Up

The public Payments guide was tightened against the current app behavior. Booking-fee copy now says ReservKit collects the plan-based booking fee on the booking subtotal where applicable, not a vague fee on every transaction. Damage-deposit copy now states that deposits are collected as a separate Stripe Checkout line item, Booking Detail can mark released/charged outcomes for reconciliation, and released deposits still require the actual money movement in Stripe. Refund copy now directs operators to use the cancellation flow when the booking also needs to be cancelled so customer messages and capacity stay aligned. Coupon copy now says discounts apply to eligible booking subtotal before the ReservKit booking-fee calculation, while tips, taxes, operator service fees, and refundable deposits are not marked up. `scripts/check-content.mjs` and `scripts/check-live.mjs` guard these safer payment-doc claims.

## 2026-08-02 Adjacent Fee-Basis Follow-Up

The Getting Started guide and Terms page now use the same booking-fee basis as the Payments guide. Getting Started no longer says the booking fee is deducted from each transaction; it says ReservKit collects the plan-based booking fee on booking subtotal where applicable and does not mark up tips, taxes, operator service fees, or refundable damage deposits. Terms no longer says booking fees are charged on each completed booking transaction; it says fees are charged as a percentage of the eligible booking subtotal according to the active plan. Content and live guards now block those stale phrases and require the corrected setup/legal wording.

## 2026-08-02 Blog Fee/Tips Follow-Up

The public Blog page now uses the same fee/tip boundaries as Payments, Getting Started, Terms, and Reports. Setup copy no longer says ReservKit applies the plan fee `behind the scenes`; it says the plan-based booking fee is collected on eligible booking subtotal where applicable. The direct-booking-fees article no longer calls tips generic operator revenue; it says customer tips are tracked separately from booking income and are not marked up by ReservKit. Content and live guards now block those stale blog phrases.

## 2026-08-02 Marketing Link/Form Guard Follow-Up

Marketing behavior now has a dedicated `npm run check:links` guard in addition to copy/live checks. The guard crawls the public marketing route set, validates internal links and hash anchors, rejects empty/placeholder/javascript hrefs, enforces that app CTAs only point to the approved app login or signup URLs, verifies `/beta` remains an intentional redirect to `/early-access`, and checks that `POST /api/early-access-request` returns field validation for bad input. Local and live runs passed on 2026-08-02. Rendered Playwright proof also covered homepage desktop CTA/hash behavior, the 390px mobile menu with Log in / Start free links, and guided setup inline validation staying on `/early-access`.
