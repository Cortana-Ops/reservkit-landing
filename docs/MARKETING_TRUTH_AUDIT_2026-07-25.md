# Marketing Truth Audit - 2026-07-25

Purpose: keep `reservkit.com` aligned with current app behavior before broader marketing starts.

## Result

Passed. No public marketing page was found making unsupported live claims for public self-serve signup, cart or multi-item checkout, resources/variants, multi-day bookings, staff tip self-service, full email/SMS template editing, dedicated calendar/card embeds, payroll/time-clock workflows, generated waiver PDF export, waiver magic-link/SMS OTP signing, marketplace/channel-manager distribution, or resource scanning/maintenance workflows.

## 2026-08-04 Notifications Test Prerequisite Alignment

After the app shipped Settings notification preview prerequisite guards, the
public Notifications guide now says review-request tests require a saved Google
Review Link and SMS reminder tests require a saved business phone before the
test-send controls become available. This keeps `/docs/notifications` aligned
with the app-side Settings UI and the server-side requirements in
`send-review-request` and `send-sms-reminders`. `scripts/check-content.mjs`,
`scripts/check-live.mjs`, and `docs/MARKETING_PRODUCT_FACTS.md` now guard those
test-message prerequisites alongside the existing no-customer-send boundary.
Verification passed full marketing `npm run verify`, including rendered
desktop/mobile checks across all 19 public routes, plus focused local live
checks against `/docs/notifications` and the 19-route local live crawl.
Production is now updated: direct fetch of
`https://reservkit.com/docs/notifications` confirmed both prerequisite strings,
and `vercel inspect https://reservkit.com` reports a Ready production
deployment aliased to `https://reservkit.com`. The first manual
`vercel deploy --prod -y` attempt failed with Vercel quota
`api-deployments-free-per-day`, but the later production deployment caught up.
Scope boundary: public notification docs and marketing guardrails only; no app
runtime, provider/env/function/schema/template/scheduling/customer-send
behavior, booking, payment, pricing, Supabase, or marketing CTA behavior
changed.

## 2026-08-04 Future-Feature Guardrail Expansion

Marketing source was re-audited against the current app feature inventory after
the latest production/Sentry/backend evidence updates. No public page copy
needed to change: current public copy does not present future product surfaces
as live. `scripts/check-content.mjs` now blocks additional unsupported live
claims for payroll or time clocks, resource scanning or maintenance workflows,
one-click/generated waiver PDF downloads, waiver magic-link or SMS OTP signing,
and marketplace/channel-manager distribution unless the surrounding copy clearly
frames those ideas as future, not currently available, intentionally not built,
or otherwise outside launch scope.

Vercel production deployment `dpl_FdZKuY6vjV4Nxcb8Ny7he2euiJTn` is Ready and
aliased to `https://reservkit.com`, so the future-feature source guard is now
deployed. No public page copy, CTA target, pricing, signup, app runtime,
booking, payment, SMS/email, Supabase, or provider behavior changed.

## 2026-08-03 Source Claim Re-Audit After Notifications SMS Update

Marketing source was re-audited against the current app feature inventory and
external-services messaging facts after the `/docs/notifications` broadcast SMS
copy update. The scan covered the current public route set, shared marketing
constants, pricing, docs, vertical pages, privacy, terms, roadmap, changelog,
blog, and content/live guard scripts for stale or overbroad claims around
cart/multi-item checkout, resource variants, multi-day bookings, staff tip
self-service, template editing, public cash/pay-later checkout, dedicated
calendar/card embeds, waiver legal guarantees, exact reminder timing, pricing,
Enterprise self-serve semantics, and provider disclosure. No page copy changes
were needed: the source still frames unsupported surfaces as future scope or
omits them, and the current claims for service fees, balance payments, waiver
evidence, team/staff gates, SMS reminders/broadcasts, and provider disclosures
are corroborated by the app feature inventory and source. `npm run
check:content` passed. Follow-up live deployment evidence below now closes the
earlier Vercel quota caveat; live production contains the Notifications copy
updates.

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
- payroll or time clock
- resource scanning or maintenance
- generated waiver PDF export
- waiver magic-link or SMS OTP signing
- marketplace or channel manager

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

## 2026-08-03 SMS Delivery Facts Closeout

After the app shipped broadcast SMS readiness for either complete org-owned
Twilio credentials or complete ReservKit-managed platform Twilio configuration,
the marketing product-facts source of truth was updated in commit `82a51bb`
(`Align marketing SMS delivery facts`). Vercel production deployment
`dpl_6MVtyCYzESQComVt5mS5qqjRpMX7` reached Ready and is aliased to
`https://reservkit.com`.

Verification passed: `npm run check:routes`, `npm run check:metadata`,
`npm run check:indexing`, `npm run check:content`, `npm run lint`,
`npm run build`, `npm run check:links`, live `npm run check:live`, and live
`RESERVKIT_MARKETING_BASE_URL=https://reservkit.com npm run check:rendered`
across 19 routes at desktop and 390px mobile. Scope boundary: marketing facts
docs and release evidence only; no public page copy, pricing, signup, app
runtime, templates, recipients, SMS delivery behavior, booking, or payment flow
changed.

## 2026-08-03 Notifications SMS Broadcast Copy Source Update

Marketing source commit `33811c4` (`Align notification docs SMS delivery facts`)
updates `/docs/notifications` so the public Notifications guide explicitly says
automated SMS reminders and broadcast SMS can use ReservKit-managed delivery when
platform SMS is configured. `scripts/check-content.mjs`, `scripts/check-live.mjs`,
and rendered metadata expectations now guard that broadcast managed-delivery fact.

Verification passed locally: `npm run check:content`, `npm run check:metadata`,
`npm run check:routes`, `npm run check:indexing`, `npm run lint`,
`npm run build`, `npm run check:links`, `git diff --check`, and
`RESERVKIT_MARKETING_BASE_URL=http://localhost:4329 RENDERED_CHECK_ROUTES=/docs/notifications npm run check:rendered`
against a local production server at desktop and 390px mobile.

Initial production caveat: Vercel did not auto-deploy the pushed source during
the first polling window, and manual `vercel deploy --prod --scope
cortana-ops-projects` failed with the Vercel daily API deployment quota
`api-deployments-free-per-day`. That caveat is now resolved by the live
deployment closeout below.

Follow-up 2026-08-03 UTC retry evidence: the full local marketing pre-deploy
guard stack (`check:content`, `check:metadata`, `check:routes`,
`check:indexing`, `lint`, `build`, and `check:links`) passed again, but a second
manual `vercel deploy --prod --scope cortana-ops-projects` still failed with
`api-deployments-free-per-day`. `vercel inspect https://reservkit.com --scope
cortana-ops-projects --json` still reports production deployment
`dpl_BpbSaocxrHG5k88rMcMsTwHfXPaD`, aliased to `reservkit.com`, and live
`/docs/notifications` at that time contained the old reminder-only managed SMS
copy.

Follow-up 2026-08-03 UTC live deployment closeout: `vercel inspect
https://reservkit.com --scope cortana-ops-projects --json` now reports
production deployment `dpl_CoRSZBg9N98F1RM2c6XqBqB5SWcn` as Ready. Live
`https://reservkit.com/docs/notifications` contains the managed SMS reminders
and broadcast SMS copy, including the guidance that automated SMS reminders and
broadcast SMS can use ReservKit-managed delivery when platform SMS is configured.
The marketing repo is clean on `main` at `88d5726` (`Record marketing deploy
quota retry`). Verification passed `npm run check:content`, `npm run
check:metadata`, `npm run check:routes`, `npm run check:indexing`, `npm run
check:links`, `npm run check:live` across 19 routes,
`RESERVKIT_MARKETING_BASE_URL=https://reservkit.com npm run check:rendered`
across desktop and 390px mobile, `npm run lint`, `npm run build`, and
`git diff --check`.

## 2026-08-04 Notifications Test-Message Copy Follow-Up

After the app shipped the SMS reminder safe test-send path, `/docs/notifications`
was updated so the public guide no longer says Settings test emails never send
SMS. The page now says test emails go only to the signed-in operator, the SMS
reminder test sends only to the saved business phone, and test messages do not
message customers, run reminder jobs, or accept arbitrary recipients. The same
guide now lists abandoned booking recovery alongside the other supported
standard customer messages. `scripts/check-content.mjs` and
`scripts/check-live.mjs` guard this public-copy boundary.

Source commit `d05b828` (`Align notification test message copy`) is pushed to
`main`, and local verification passed `check:content`, `check:routes`,
`check:metadata`, `check:indexing`, `lint`, `build`, `check:links`,
`git diff --check`, and focused desktop/mobile rendered proof for
`/docs/notifications`. The first repeated manual
`vercel deploy --prod --yes --scope cortana-ops-projects` attempts hit Vercel
`api-deployments-free-per-day`, but later production deployments caught up;
the current live Notifications guide includes the prerequisite/test-message
copy guarded by `scripts/check-live.mjs`.

Follow-up 2026-08-04 live retry evidence: `vercel inspect
https://reservkit.com --scope cortana-ops-projects --json` still reports Ready
production deployment `dpl_9vuDz7KnRHj1gaJcuYr8McZ4Gp2i`, aliased to
`reservkit.com`. `RESERVKIT_MARKETING_BASE_URL=https://reservkit.com npm run
check:live` still fails only on the three guarded Notifications copy updates:
`The SMS reminder test sends only to the saved business phone`, `Test messages
do not message customers, run reminder jobs, or accept arbitrary recipients`,
and `Abandoned booking recovery`. A fresh manual `vercel deploy --prod --yes
--scope cortana-ops-projects` attempt failed with the same Vercel daily API
deployment quota, `api-deployments-free-per-day`.

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

## 2026-08-04 Capacity Claim Truth Follow-Up

The public Bookings & Availability guide no longer makes an absolute `no overbooking is possible` promise. It now says fully booked slots stop appearing as bookable online and checkout still checks capacity before creating a paid booking. `docs/MARKETING_PRODUCT_FACTS.md`, `scripts/check-content.mjs`, and `scripts/check-live.mjs` guard this safer capacity wording so future marketing copy describes the shipped controls instead of making an impossible-sounding guarantee.

## 2026-08-04 Homepage Stripe Timing And Vertical Confirmation Follow-Up

The homepage Stripe workflow copy no longer says operators control payout timing. It now uses the same launch boundary as the Payments and Getting Started guides: ReservKit creates the Stripe Connect checkout flow and routes the connected-account payment through Stripe, while Stripe controls payout timing, processing fees, and connected-account money movement. The kayak and tour vertical pages also no longer list unconditional confirmation emails; they qualify confirmation emails as available where enabled. `docs/MARKETING_PRODUCT_FACTS.md`, `scripts/check-content.mjs`, and `scripts/check-live.mjs` guard against restoring the old payout-timing and unqualified confirmation-email phrases.

Source commit `2f13d7b` (`Tighten Stripe payout and confirmation marketing copy`) is pushed to `main`. Verification passed full local `npm run verify`, `git diff --check`, and local served `RESERVKIT_MARKETING_BASE_URL=http://127.0.0.1:3012 npm run check:live` across 19 routes. The first explicit production deploy attempt failed with Vercel daily API quota `api-deployments-free-per-day`, but the later production deployment `dpl_9m7R6f4r8kZRxLHHdxgtjv6rjvtV` is Ready and aliased to `https://reservkit.com`; post-deploy `RESERVKIT_MARKETING_BASE_URL=https://reservkit.com npm run check:live` passed across 19 routes with the new Stripe payout-timing and vertical confirmation-email guards.

## 2026-08-02 Waiver Documentation Truth Follow-Up

The public waiver docs and cross-links were tightened to avoid broad legal/compliance promises. Public copy now says digital waivers are for activities that require them, avoids blanket `from every guest` language, removes casual `in seconds` signing promises, and avoids prescribing which signer fields are sufficient. The guide now tells operators to use waiver language and required fields reviewed for their business, activities, location, counsel, insurer, and operating requirements. `scripts/check-content.mjs` guards those safer waiver-doc boundaries.

## 2026-08-02 Payments Documentation Truth Follow-Up

The public Payments guide was tightened against the current app behavior. Booking-fee copy now says ReservKit collects the plan-based booking fee on the booking subtotal where applicable, not a vague fee on every transaction. Damage-deposit copy now states that deposits are collected as a separate Stripe Checkout line item, Booking Detail can mark released/charged outcomes for reconciliation, and released deposits still require the actual money movement in Stripe. Refund copy now directs operators to use the cancellation flow when the booking also needs to be cancelled so customer messages and capacity stay aligned. Coupon copy now says discounts apply to eligible booking subtotal before the ReservKit booking-fee calculation, while tips, taxes, operator service fees, and refundable deposits are not marked up. `scripts/check-content.mjs` and `scripts/check-live.mjs` guard these safer payment-doc claims.

2026-08-04 Stripe Connect money-movement follow-up: the public Payments guide no longer says operators `never need to manually split payments or transfer funds`. That phrase was too broad for the current product boundary because ReservKit controls connected-account checkout creation and booking-fee collection, while Stripe controls payout timing, processing fees, and connected-account money movement. The guide now says ReservKit creates the connected-account checkout flow and collects the plan-based booking fee where applicable, with Stripe controlling the connected account's money movement. `scripts/check-content.mjs` and `scripts/check-live.mjs` guard the safer Stripe/payout boundary and block the old absolute phrase.

2026-08-04 Getting Started Stripe boundary follow-up: the public Getting Started guide no longer says payments go directly to the operator's Stripe account or that `ReservKit never holds your money`. The replacement copy uses the same safer launch boundary as the Payments guide: ReservKit creates the Stripe Connect customer checkout flow, collects the plan-based booking fee where applicable, routes the connected-account payment through Stripe, and Stripe controls payout timing, processing fees, and connected-account money movement from there. `scripts/check-content.mjs` and `scripts/check-live.mjs` now block those broader direct-payment/holds-money phrases and require the Getting Started route to keep the Stripe payout-timing boundary visible.

2026-08-04 Payments direct-payout phrasing follow-up: a narrower marketing truth sweep found adjacent Payments guide wording that still said money and tips flow directly to the operator's Stripe account and that owners receive payouts directly. Those phrases were too close to the broader direct-payment claim already removed from Getting Started. The Payments guide now says ReservKit creates the customer checkout flow, routes the connected-account payment through Stripe, collects the plan-based booking fee where applicable, and that tips are routed through the connected Stripe account without a ReservKit booking-fee markup. `scripts/check-content.mjs` and `scripts/check-live.mjs` now block the adjacent direct-flow/direct-payout variants.

2026-08-04 public Stripe Connect shorthand follow-up: a fresh public-page sweep found adjacent shorthand on the homepage, Roadmap, and Blog saying customer payments go through the operator's connected Stripe account. That wording was not as broad as the earlier direct-payout claims, but it still muddied the safer launch boundary. Public copy now says ReservKit uses Stripe Connect to create the checkout flow and route the connected-account payment through Stripe, while Stripe controls payout timing, processing fees, and connected-account money movement. `scripts/check-content.mjs` and `scripts/check-live.mjs` now block the old connected-account shorthand variants.

Source commit `0f107f9` (`Tighten public Stripe Connect shorthand`) is pushed to `main`, and follow-up commit `ef34893` records the earlier quota caveat. Final verification passed full local `npm run verify`, `git diff --check`, local served `RESERVKIT_MARKETING_BASE_URL=http://127.0.0.1:3014 npm run check:live` across 19 routes, focused rendered checks for `/`, `/roadmap`, and `/blog` across desktop and 390px mobile, Vercel production deployment `dpl_3VN5UW5WZJAVm98nkTczzmUb6oq6` Ready and aliased to `https://reservkit.com`, post-deploy `RESERVKIT_MARKETING_BASE_URL=https://reservkit.com npm run check:live` across 19 routes, and full post-deploy marketing `npm run verify` including rendered desktop/mobile checks across 19 routes. The earlier `api-deployments-free-per-day` production deploy blocker is resolved.

## 2026-08-02 Adjacent Fee-Basis Follow-Up

The Getting Started guide and Terms page now use the same booking-fee basis as the Payments guide. Getting Started no longer says the booking fee is deducted from each transaction; it says ReservKit collects the plan-based booking fee on booking subtotal where applicable and does not mark up tips, taxes, operator service fees, or refundable damage deposits. Terms no longer says booking fees are charged on each completed booking transaction; it says fees are charged as a percentage of the eligible booking subtotal according to the active plan. Content and live guards now block those stale phrases and require the corrected setup/legal wording.

## 2026-08-02 Blog Fee/Tips Follow-Up

The public Blog page now uses the same fee/tip boundaries as Payments, Getting Started, Terms, and Reports. Setup copy no longer says ReservKit applies the plan fee `behind the scenes`; it says the plan-based booking fee is collected on eligible booking subtotal where applicable. The direct-booking-fees article no longer calls tips generic operator revenue; it says customer tips are tracked separately from booking income and are not marked up by ReservKit. Content and live guards now block those stale blog phrases.

## 2026-08-02 Marketing Link/Form Guard Follow-Up

Marketing behavior now has a dedicated `npm run check:links` guard in addition to copy/live checks. The guard crawls the public marketing route set, validates internal links and hash anchors, rejects empty/placeholder/javascript hrefs, enforces that app CTAs only point to the approved app login or signup URLs, verifies `/beta` remains an intentional redirect to `/early-access`, and checks that `POST /api/early-access-request` returns field validation for bad input. Local and live runs passed on 2026-08-02. Rendered Playwright proof also covered homepage desktop CTA/hash behavior, the 390px mobile menu with Log in / Start free links, and guided setup inline validation staying on `/early-access`.

## 2026-08-02 Roadmap Guided-Setup Label Follow-Up

The public Roadmap no longer says cleaner product captures depend on `early-access operators`; it now frames the screenshot work around controlled demo workflows and launch-ready operator setups. The guided setup API's default Resend sender label now says `ReservKit Guided Setup` instead of `ReservKit Early Access`, while the `/early-access` route and env var names remain for compatibility. `scripts/check-content.mjs` now blocks those stale early-access product-capture and sender-label phrases from returning.

## 2026-08-02 Guided-Setup Error-Copy Follow-Up

The guided setup API's delivery-failure response now says `Could not send guided setup request right now.` instead of the stale `early access request` wording. The missing-email-configuration response already used `Guided setup request email is not configured.` and remains unchanged. `scripts/check-content.mjs` now blocks the old delivery-failure phrase.

## 2026-08-02 Rendered Audit And Dependency Follow-Up

Marketing now has a reusable rendered-page guard: `npm run check:rendered`. The guard loads the public route set at desktop `1440px` and mobile `390px`, checks HTTP status, rendered body content, framework/error overlays, horizontal overflow, broken images, console/page errors, the mobile homepage menu button state, and guided setup inline validation on `/early-access`.

2026-08-02 follow-up: the guided setup validation probe now waits for mobile `/early-access` hydration/network idle before clicking submit, then asserts the field-specific `#early-access-name-error` and `#early-access-email-error` nodes and exact copy. The separate `npm run check:links` guard remains responsible for proving bad guided-setup API payloads return validation errors. This avoids treating a cold/hydrating production page as a rendered-page failure while still proving the visible inline validation path.

## Enterprise CTA Alignment — 2026-08-02

The public Pricing section now keeps self-serve plans on the primary `Start free` signup CTA, while the Enterprise card uses `Request setup help` and links to `/early-access`. This matches the app Billing model: Free, Starter, Growth, and Pro are self-serve; Enterprise is manual/private custom terms. `scripts/check-content.mjs` guards the Enterprise card so it does not drift back to implying Enterprise is a normal self-serve signup plan.

## 2026-08-02 Marketing Product Facts Source

The app handoff now has a matching marketing-side source of truth at `docs/MARKETING_PRODUCT_FACTS.md`. It records current public posture, public/private plan boundaries, feature gates, verified customer booking revenue-path proof, waiver/payment/offline-payment boundaries, messaging constraints, staff-tip/reporting boundaries, supported booking links/embeds, unsupported future scope, and product-media rules. `README.md` points future editors to that file, and `scripts/check-content.mjs` requires representative facts so the file cannot silently disappear or drift away from the current launch posture.

## 2026-08-02 Mobile CTA Render Guard Follow-Up

The rendered-page guard now proves the mobile homepage menu interaction, not just that the closed hamburger button exists. It waits for the homepage document to complete, clicks the mobile menu button, verifies the button changes to `Close menu` / `aria-expanded=true`, and confirms the visible mobile menu exposes `Pricing`, `Docs`, `Log in`, and `Start free` with the expected destinations. During this work, request interception for analytics/monitoring was removed from `check:rendered` because aborting or fulfilling those requests could keep the Next page in a pre-load state in Chrome and create false pre-hydration failures. The rendered check now loads the marketing site more like a real visitor and filters console output instead of altering page requests.

The marketing dependency baseline was also refreshed for production audit health: `next` and `eslint-config-next` are `16.2.12`, `@sentry/nextjs` is `10.69.0`, `posthog-js` is `1.409.5`, and Next's production transitive `postcss` / `sharp` advisories are pinned through package overrides. Verification passed `npm audit --omit=dev`, `npm run check:content`, `npm run check:links`, `npm run check:live`, `npm run lint`, `npm run build`, `npm run check:rendered`, and `git diff --check`.

## 2026-08-02 Pricing Render Guard Follow-Up

The rendered-page guard now verifies the public Pricing page cards at both desktop and 390px mobile widths. It asserts Free, Starter, Growth, and Pro each keep the `Start free` CTA pointed at the approved app signup URL, Enterprise keeps `Request setup help` pointed at `/early-access`, and the visible plan-card copy includes the current price, booking fee, volume, and representative feature-gate text. This gives the marketing site a rendered proof for the public/private plan boundary, not only a source-text content check.

## 2026-08-04 Confirmation Email Wording Follow-Up

Marketing copy now describes booking confirmation emails as available when enabled/configured instead of promising every completed booking always receives an automatic email confirmation. This matches the app-side notification model where confirmation emails are supported transactional messages but remain controlled by organization notification settings and provider delivery state. The homepage workflow bullet, Getting Started guide, Pricing FAQ, pricing-card feature text, and product facts were updated, while `scripts/check-content.mjs` and `scripts/check-live.mjs` now block the old absolute confirmation-email phrases.

Source verification passed `npm run verify`, focused local
`RESERVKIT_MARKETING_BASE_URL=http://127.0.0.1:3011 npm run check:live`,
focused rendered desktop/mobile checks for `/`, `/pricing`, and
`/docs/getting-started`, `npm run check:content`, `npm run lint`, and
`git diff --check`. The first explicit production deploy attempt from commit
`099a45b` was blocked by Vercel quota `api-deployments-free-per-day`, but the
later production deployment `dpl_5wGGZFTRgvSjgJHTMAhKBerSN6tn` is Ready and
aliased to `https://reservkit.com`. Post-deploy
`RESERVKIT_MARKETING_BASE_URL=https://reservkit.com npm run check:live` passed
across 19 routes with the stricter confirmation-email guards.

## 2026-08-03 Rendered Route Selection Guard Follow-Up

The rendered-page guard now fails loudly when `RENDERED_CHECK_ROUTES` contains an unknown route or resolves to an empty route set. This prevents partial marketing QA runs from silently skipping a typoed page during page-by-page launch checks. The default rendered check still covers the current public sitemap route set across desktop and 390px mobile viewports, while `/beta` remains covered by the link/form guard as an intentional redirect to `/early-access`.

## 2026-08-03 Route Metadata And Social Preview Follow-Up

Public route metadata now uses a shared helper so each route keeps its browser title, meta description, canonical URL, Open Graph title/description/URL, and Twitter title/description aligned. Before this pass, non-home pages had unique browser titles and descriptions but inherited homepage Open Graph/Twitter preview metadata. `npm run check:rendered` now verifies the rendered metadata for every public route at desktop and 390px mobile widths, so future route or layout edits fail if a page loses route-specific head tags.

## 2026-08-04 Homepage Hero CTA Render Guard Follow-Up

The rendered-page guard now proves the homepage hero CTAs directly instead of
relying only on shared navigation checks or one-off browser proof. For `/` at
desktop and 390px mobile widths, `npm run check:rendered` verifies the hero
section exposes exactly one visible `Start free` link to
`https://app.reservkit.com/login?signup=true`, exactly one visible `See how it
works` link to `#workflow`, one rendered `#workflow` target, and that clicking
the workflow link updates the hash and scrolls the workflow section into view.
Scope boundary: marketing QA guard/docs only; no public copy, CTA target,
pricing, app runtime, signup, booking, payment, SMS/email, or Supabase behavior
changed.

## 2026-08-04 Route Main Link Render Guard Follow-Up

The rendered-page guard now proves route-specific main-content links instead of
only global navigation, homepage hero CTAs, pricing cards, and footers. At
desktop and 390px mobile widths, `npm run check:rendered` verifies visible
main-content CTA or next-step links for the docs hub, all docs guide pages,
Roadmap, Changelog, Blog, and the boat/kayak/tour vertical pages. This catches
page-local CTA drift, missing docs next-step cards, and broken visible body
links during marketing page-by-page checks.

Scope boundary: marketing QA guard/docs only; no public copy, CTA target,
pricing, route structure, app runtime, signup, booking, payment, SMS/email,
Supabase, or provider behavior changed.

Source commit `675c52a` (`Guard marketing route body links`) is pushed to
`main`. Verification passed full local `npm run verify`, `git diff --check`,
focused rendered proof for the newly guarded route set, live
`RESERVKIT_MARKETING_BASE_URL=https://reservkit.com npm run check:live` across
19 routes, and live
`RESERVKIT_MARKETING_BASE_URL=https://reservkit.com npm run check:rendered`
across 19 routes at desktop and 390px mobile. Vercel production deployment
`dpl_8S2n9w9vbboSpR96sisTyEViKTWJ` is Ready and aliased to
`https://reservkit.com`.

## 2026-08-03 Shared Navigation Render Guard Follow-Up

The rendered-page guard now proves shared marketing navigation across the route
set instead of only checking the homepage mobile menu. For every public page
that uses the shared header, `npm run check:rendered` verifies the desktop
header exposes exactly one visible `ReservKit`, `Pricing`, `Docs`, `Log in`,
and `Start free` link with the approved destinations; at 390px mobile it opens
the hamburger menu and verifies `Pricing`, `Docs`, `Log in`, and `Start free`
are visible and pointed at the approved routes. `/early-access` intentionally
keeps its focused guided-setup layout and is guarded for a visible `Back to
ReservKit` link plus the existing inline validation path. Live rendered proof
passed across all 19 public routes at desktop and 390px mobile. Verification
also passed `npm run check:content`, `npm run check:routes`, `npm run
check:metadata`, `npm run check:indexing`, `npm run check:links`, `npm run
check:live`, `npm run lint`, `npm run build`, and `git diff --check`. Scope
boundary: marketing QA guard/docs only; no public copy, CTA target, pricing,
app runtime, signup, booking, payment, SMS/email, or Supabase behavior changed.

## 2026-08-03 Marketing Verify Script Follow-Up

Marketing now has a consolidated `npm run verify` gate that runs the current
source/content/route/metadata/indexing checks, lint, production build,
link/form crawl, and rendered desktop/mobile route proof. The README quality
gate list now includes `npm run check:rendered` and points future editors to the
single verify command so the strongest browser proof is not skipped during
launch copy or route changes. Scope boundary: marketing QA script/docs only; no
public copy, CTA target, pricing, app runtime, signup, booking, payment,
SMS/email, or provider behavior changed.

## 2026-08-03 Vertical Page Feature-Gate Follow-Up

The boat, kayak, and tour-operator landing pages now include the same concise
feature-availability note below their capability lists: Free covers the first
low-volume booking flow, Starter adds staff/team tools, and Growth adds waivers,
reports, broadcasts, equipment, dynamic pricing, deposits, coupons, and add-ons.
This keeps vertical SEO pages aligned with the public Pricing page and app-side
feature gates while preserving the Free-first primary CTA. `scripts/check-content.mjs`
guards the shared note so future vertical-page edits do not imply that every
listed capability is included on Free.

## 2026-08-03 Marketing Route Manifest Guard Follow-Up

The marketing QA route inventory now lives in `scripts/marketing-routes.mjs`
and is shared by `check:live`, `check:links`, and `check:rendered` instead of
being duplicated separately in each guard. A new `npm run check:routes` command
compares that manifest against actual `app/**/page.tsx` routes, excluding API
routes and keeping `/beta` as an intentional redirect route covered by the
link/form guard. This prevents future public pages from silently skipping live,
link, or rendered-route verification during launch audits. Verification passed
`npm run check:routes`, `npm run check:content`, `npm run lint`, `npm run
build`, `npm run check:links`, focused `RENDERED_CHECK_ROUTES=/,/pricing npm
run check:rendered`, and `npm run check:live`. Scope boundary: route QA scripts
and docs only; no public page copy, metadata, CTA target, redirect behavior, app
runtime, pricing, signup, payment, booking, or provider behavior changed.

## 2026-08-03 Marketing Metadata Manifest Guard Follow-Up

Rendered route metadata expectations now live in
`scripts/marketing-metadata.mjs` and are imported by `check:rendered` instead
of being embedded directly in the browser checker. A new `npm run
check:metadata` command compares those expectations against
`scripts/marketing-routes.mjs`, keeps redirect routes such as `/beta` out of
page metadata, and guards non-empty titles, descriptions, canonical URLs, and
social titles before the more expensive desktop/mobile rendered pass runs.
Scope boundary: metadata QA scripts and docs only; no rendered metadata values,
public page copy, CTA target, redirect behavior, app runtime, pricing, signup,
payment, booking, or provider behavior changed.

## 2026-08-03 Marketing Indexing Manifest Guard Follow-Up

The sitemap now includes `/early-access`, matching the current guided-setup
route that is already covered by page, metadata, live, link, and rendered
checks. A new `npm run check:indexing` command compares `app/sitemap.ts`
against `scripts/marketing-routes.mjs`, keeps redirect routes such as `/beta`
out of the sitemap, and verifies `app/robots.ts` advertises the production host
and sitemap URL. Scope boundary: sitemap/robots QA and docs only; no public
page copy, metadata values, CTA target, redirect behavior, app runtime, pricing,
signup, payment, booking, or provider behavior changed.

## 2026-08-02 Booking Link And Embed Docs Alignment

The docs index and Getting Started guide now make the live Settings -> Booking
Widget controls easier to find: all-activity booking links, activity-specific
booking links, and website iframe snippets. The Getting Started guide also
keeps the product boundary explicit: current iframe snippets embed the
ReservKit booking flow for all activities or one selected activity, while
dedicated calendar-only and activity-card-only embeds remain future options,
not launch features. `scripts/check-content.mjs` and `scripts/check-live.mjs`
now guard these claims.

## 2026-08-02 Staff Schedule Status Copy Alignment

The public Staff docs now describe the staff schedule card status as booking
status, not check-in status. The current app Staff Schedule cards show assigned
booking context and a booking status badge; attendance/check-in state remains
part of day-of booking/check-in workflows, not a dedicated staff-schedule card
field. `scripts/check-content.mjs` guards this wording so the docs do not imply
a staff check-in-status feature on that view.

## 2026-08-02 Terms Enterprise Copy Alignment

The public Terms pricing list no longer states that Enterprise has an annual
minimum as a definite public plan term. It now says Enterprise uses custom
pricing, custom volume, and signed agreement terms, which matches the app-side
source of truth that Enterprise is manual/private custom terms rather than a
normal self-serve checkout plan. The cancellation section can still say
Enterprise agreements may include annual minimums or custom cancellation terms
when those are present in the signed agreement. `scripts/check-content.mjs`
blocks the old definite annual-minimum phrase from returning. The visible Terms
date was also advanced to August 2026 because the pricing/legal copy changed.

## 2026-08-02 Privacy Provider Truth Alignment

The public Privacy page no longer says ReservKit shares data only with Stripe,
Supabase, and Resend. That omitted live provider categories used by the app and
marketing docs: Twilio for SMS when enabled, Vercel for hosting, and
Sentry/PostHog for monitoring, diagnostics, and analytics. The page now says
ReservKit does not sell personal data and shares data with service providers
needed to operate, secure, monitor, and improve the platform. Its visible
revision date is August 2026, and `scripts/check-content.mjs` guards the current
provider list plus blocks the old incomplete "We share data only with:" phrase.
`scripts/check-live.mjs` also verifies the live Privacy page keeps the August
2026 date, no-sale statement, service-provider framing, and Twilio, Vercel, and
Sentry/PostHog provider disclosures, and blocks the old incomplete "We share
data only with:" phrase from passing on production.
