# Customer-Facing Page and Image Audit - 2026-10-03

## Scope and Evidence

Production baseline: all 25 marketing routes and 19 public app URL variants at 1440x1000 and 390x900 in Chrome. All 88 navigations returned HTTP 200, with no recorded uncaught page errors, horizontal overflow, or broken loaded images. HTTP 200 on the app includes friendly missing-link states and is not success-flow proof. Some initial booking captures preceded activity data; those snapshots are not complete-render evidence.

Evidence: `/tmp/reservkit-facing-audit/results.json`, route text files and screenshots in the same directory. Temporary evidence may be removed by the OS; this document preserves conclusions and limits. Baseline production marketing route, link/form, and rendered checks passed. After corrections, content, route, metadata, indexing, lint, production build, local link/form checks (29 internal URLs), and all 25 rendered routes at both sizes passed. Password reveal and hide were exercised on production login without submitting credentials. Barton Creek's loaded catalog and opening the pontoon date picker were exercised without booking submission.

Visual inspection covered product assets, social cover, and representative homepage, SEO, pricing, login, and demo-booking layouts. Automated checks cover every listed route; this is not a manual every-pixel review of every scroll position, native Safari/Android testing, or a renewed authenticated operator/admin audit.

## Confirmed Findings Corrected

1. Homepage Bookings copy attributed waiver/staff/notes information to a list screenshot that does not show it. Copy now distinguishes the list from booking details; alt text matches visible columns.
2. Waiver Templates was labeled as guest signing status. Heading, description, and alt text now describe configuration rather than signing evidence.
3. Public activity catalog imagery implied kayak inventory, availability, or Stripe checkout. Relevant SEO pages now use explicitly representative operator screenshots. All shared SEO images and homepage product-tour images carry demo labels and can be opened full size.
4. Availability instructions described a buffer absent from the current generator and an impossible 4:30 PM two-hour session ending by 5 PM. Replaced with a valid fixed-duration schedule, separate start interval explanation, variable-duration fit requirement, and actual schedule controls. Source: app `supabase/functions/generate-time-slots/index.ts`.
5. Waiver instructions advertised unsupported inline initials and described typed/drawn signatures as interchangeable. Corrected against `src/lib/waiver-fields.ts` and signing flow. Corrected New Waiver label and distinguished copying guest links from emailing the primary customer.
6. Getting Started named a nonexistent New activity button; corrected to Add Activity.
7. Deposit SEO copy implied authorization holds and a generally available test-mode toggle. Corrected: deposit is collected at checkout, refunds move money, status changes alone do not, standard operator accounts use live Connect, and sandbox demonstrations are guided.
8. Regression guards now require demo disclosure and corrected deposit/availability statements. Link checks validate image MIME types for full-size image links while continuing to require HTML for page links.

No app runtime, database, payment, pricing, email, SMS, or customer data changes. Preferred side-by-side homepage layout retained.

## Marketing Route Matrix

Every row received desktop/mobile navigation, rendering, metadata, link and image-load checks. "Corrected" means source changes verified locally; deployment evidence is recorded separately in Linear.

| Route | Outcome |
| --- | --- |
| `/` | Corrected screenshot claims, captions and enlargement links; layout retained |
| `/pricing` | Rendering/link checks pass; no pricing changes |
| `/early-access` | Rendering and form validation guards pass; no lead submitted |
| `/docs` | Pass |
| `/docs/getting-started` | Corrected activity button label |
| `/docs/payments` | Rendering/link checks pass; no live transaction executed |
| `/docs/staff` | Rendering/link checks pass; invite acceptance not re-exercised |
| `/docs/waivers` | Corrected signer fields, signature and sharing instructions |
| `/docs/notifications` | Rendering/link checks pass; delivery not re-exercised |
| `/docs/reports` | Rendering/link checks pass |
| `/docs/bookings-availability` | Corrected slot example and controls |
| `/roadmap` | Rendering/link checks pass |
| `/changelog` | Rendering/link checks pass; not a claim of a complete release history |
| `/blog` | Rendering/link checks pass |
| `/boat-rental-software` | Corrected image description/disclosure |
| `/kayak-rental-software` | Corrected image selection/disclosure |
| `/watersports-rental-software` | Corrected image selection/disclosure |
| `/jet-ski-rental-software` | Corrected templates image description/disclosure |
| `/rental-booking-software-with-waivers` | Corrected templates image description/disclosure |
| `/rental-booking-software-with-damage-deposits` | Corrected payment semantics/test guidance/disclosure |
| `/stripe-booking-software-for-rentals` | Corrected image selection/disclosure |
| `/switch-rental-booking-software` | Added shared image disclosure/enlargement |
| `/tour-operator-software` | Rendering/link checks pass |
| `/terms` | Rendering/link checks pass; not legal signoff |
| `/privacy` | Rendering/link checks pass; not legal signoff |

`/beta` redirect also checked by link suite.

## Public App Coverage

| Routes | Evidence boundary |
| --- | --- |
| `/login`, `/login?signup=true` | Entry states render; password show/hide exercised on login; no new signup/login submission |
| `/onboarding` | Correct unauthenticated sign-in redirect only; authenticated setup not audited anew |
| `/forgot-password`, `/reset-password` | Request form and invalid-token recovery; no reset email sent |
| `/accept-invite` | Missing-token recovery only; no invite accepted |
| `/welcome` | Public entry page renders |
| `/book`, `/book/not-a-real-org-slug` | Friendly missing booking-page states |
| `/book/barton-creek-outfitters` | Demo catalog loads; pontoon date picker opens; no booking/payment submitted |
| `/book/reservkit-test-org/test-lab-boat-rental-qa` | Focused activity entry appears in mobile baseline; not paid-flow evidence |
| `/embed/book?org=barton-creek-outfitters` | Embedded demo catalog appears in mobile baseline; no checkout submitted |
| `/payment-success` | Missing-payment-details failure state, not successful payment verification |
| `/my-booking`, `/my-bookings` | Lookup forms/legacy route, not authenticated booking access |
| `/waiver` | Missing-booking state, not OTP/signature completion |
| `/invoice` | Missing-booking recovery, not issued receipt verification |
| `/privacy`, `/terms` | Public legal pages render; cross-document legal consistency not certified |

## Image Inventory and Follow-Up

| Asset | Assessment |
| --- | --- |
| `product-bookings-dashboard.png` | Demo bookings list, not waiver/status detail; properly labeled now |
| `product-activities.png` | Mixed demo catalog, not a dedicated watersports fleet; representative only |
| `product-checkin-manifest.png` | Demo booking-level readiness, not individual signer proof |
| `product-waiver-status.png` | Misleading historical filename; actual Waiver Templates UI, now described accurately |
| `product-reports.png` | Illustrative sample revenue, not customer traction |
| `product-public-booking-live.png` | Mixed demo catalog, not checkout/calendar; removed from inappropriate SEO placements |
| Logo/icon and `social/reservkit-social-cover.png` | Branding assets, not product screenshots; loaded/inspected |
| Barton Creek activity photos | Loaded in public mobile catalog; pontoon uses waves rather than the actual boat; photography scene is generic |
| Test-org pontoon photo | Loaded but only 275px native width; soft when enlarged |

## Open Work, Not Cleared by This Audit

- P1 launch evidence: controlled non-test booking/payment/refund and actual confirmation/receipt/waiver delivery remain separate gates. Do not infer financial readiness from route rendering.
- P2 demo/media: replace mismatched demo activity photos, verify demo pricing units (pontoon currently advertises per person), then capture one coherent current watersports demo batch. Do not alter pricing or publish stock imagery as the actual rental asset without operator confirmation.
- P2 coverage: authenticated operator pages and token-protected successful guest states need session-backed review. Existing historical audits remain historical, not revalidated here.
- P2 browser coverage: native iPhone Safari/Android Chrome and desktop Safari/Edge were not exercised in this pass.
- P2 accessibility: public booking calendar month-navigation icon buttons exposed no accessible names in the inspected dialog; follow up in the app with a focused accessibility regression. This marketing-only patch does not repair that app control.

Keep RK-8 and RK-11 active. No fresh Sentry clearance claimed; RK-12 is not reopened by this audit.
