# ReservKit Marketing Product Facts

**Last updated:** 2026-08-02

Use this file before changing public marketing copy, docs, pricing cards, screenshots, or launch claims. The app repo may have newer implementation details, but marketing should not claim a feature publicly unless it is listed here or verified again against the live app.

## Current Public Posture

- ReservKit is live direct-booking software, not a beta waitlist.
- Public signup is open through the Free-first app signup path.
- `/early-access` remains guided setup/help intake for operators who want support setting up the first booking flow.
- Public self-serve plans are Free, Starter, Growth, and Pro.
- Enterprise is manual/private setup help, not a normal self-serve checkout plan.

## Pricing And Fees

- Free: `$0/mo`, `4% booking fee`, `10 bookings/month`.
- Starter: `$79/mo`, `3% booking fee`, `100 bookings/month`.
- Growth: `$149/mo`, `2% booking fee`, unlimited bookings.
- Pro: `$299/mo`, `1.5% booking fee`, unlimited bookings.
- Enterprise: custom terms and custom booking fee.
- ReservKit booking fees are charged on eligible booking subtotal where applicable.
- Tips, taxes, operator service fees, and refundable damage deposits are not marked up by ReservKit.
- Stripe processing fees are separate and charged by Stripe.
- Paid ReservKit subscription charges are non-refundable except for billing errors, duplicate charges, fraud, or legally required refunds.

## Current Feature Gates

- Free includes the core public booking page, Stripe Connect payments, customer records, and email confirmations at low volume.
- Free does not include staff/team access.
- Starter adds basic team tools and staff scheduling access.
- Growth adds unlimited bookings, reports, waiver tools, broadcasts, coupon codes, refundable damage deposits, priced add-ons, equipment, and dynamic pricing.
- Pro includes Growth features with the lowest self-serve booking fee and a deeper support path for higher-volume operations.
- Admin/support accounts are internal ReservKit operations accounts and should not be described as public plans.
- Owner/custom/private accounts are private account types and should not be promoted as public plans.

## Verified Customer Booking Flow

Live production proof on 2026-08-02 verified the Test Lab focused activity path:

- Activity-specific public links can open a single activity booking page.
- The all-activity booking page remains available for browsing every published activity.
- Public booking supports selecting availability, guest count, customer details, optional promo code, optional tip, and Stripe Checkout.
- A real Stripe sandbox Checkout completed for a one-guest `$45.00` Test Lab booking and redirected to `payment-success`.
- Payment success showed the confirmed booking reference, manage-booking link, receipt link, and waiver link.
- Receipt showed paid booking details and total.
- Guest Hub required matching customer email before showing booking details.
- Waiver entry showed booking context and required email verification before signing.
- Mobile 390px checks showed no horizontal overflow on focused activity, payment success, receipt, and waiver entry.

## Waiver Claims

- ReservKit supports waiver templates assigned to activities.
- Activities can require multiple waiver templates.
- Waivers are signed after booking/payment, not during checkout.
- Each guest verifies their email once for the signing session, then signs the required waiver(s).
- Booking Detail and waiver views show progress by guest and required waiver template.
- Signed waiver evidence stays attached to the booking and can be printed or saved as part of the waiver packet.
- Marketing must not claim legal compliance, lawyer-reviewed templates, SMS verification, magic-link signing, or instant/seconds-based signing guarantees.

## Payments, Refunds, Deposits, And Offline Payments

- ReservKit uses Stripe Connect Standard for public paid bookings.
- Operators receive payouts through their own connected Stripe account.
- Refunds are started from Booking Detail and sent to Stripe.
- If a booking also needs cancellation, operators should use the cancellation flow so status, capacity, and customer messages stay aligned.
- Refundable damage deposits are collected as separate Stripe Checkout line items.
- Booking Detail can mark deposit outcomes for reconciliation, but released deposits still need the actual money movement handled in Stripe.
- Offline/manual payment handling is an operator-side exception path for eligible unpaid bookings, not a public cash/pay-later checkout option.

## Messaging

- ReservKit sends standard booking confirmation, reminder, cancellation/change, waiver-link, and booking-link recovery messages where configured.
- ReservKit-managed email delivery is the default launch posture.
- Custom Resend requires both a Resend API key and verified From Email.
- Custom Twilio requires Account SID, Auth Token, and From Number together.
- The app does not currently include a full operator-facing email/SMS template editor.

## Staff, Tips, Reports, And Operations

- Staff/team tools begin on Starter.
- Owner/admin Reports can show customer tips separately from booking income.
- Staff tip payout review is owner/admin facing.
- Staff-facing My Tips/self-service tip visibility is not a public launch feature.
- Staff members should not be marketed as having broad revenue-report access.
- Reports should be described as owner/admin operational and revenue visibility, not payroll or payout processing.

## Public Booking Links And Embeds

- Settings can generate all-activity booking links and activity-specific booking links.
- Settings can generate iframe snippets for the current supported booking flow.
- Activity-specific links use clean public slugs when available, and older activity links continue through the compatibility path.
- Dedicated calendar-only embeds, card-only embeds, and activity-card-only embeds are future options.

## Future Or Not-Yet-Built Scope

Do not market the following as live:

- Cart or multi-item checkout.
- Resource variants, customer-selectable resources, physical unit assignment, and inventory blocking.
- Multi-day/overnight bookings.
- Staff tip self-service.
- Full operator-facing email/SMS template editor.
- Dedicated calendar-only or card-only embed layouts.
- Payroll, payout ledger, time clock, or tax handling.
- Public cash/pay-later checkout.
- Split tenders or partial offline payments.

## Product Media Rules

- Use controlled demo screenshots, not private owner/customer accounts.
- Do not expose private customer names, emails, phone numbers, IDs, OTPs, secrets, tokens, or real payment identifiers.
- Product screenshots may show representative configured workflows, but avoid QA-heavy Test Lab labels unless intentionally demo-safe.
- If screenshots drift from live app behavior, update the screenshot or remove the claim.
