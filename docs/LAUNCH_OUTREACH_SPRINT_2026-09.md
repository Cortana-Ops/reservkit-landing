# ReservKit Founder Outreach Sprint

**Prepared:** 2026-09-09
**Last aligned:** 2026-10-02
**Outreach window:** 2026-09-14 through 2026-09-18
**Announcement decision:** 2026-09-18
**Recommended announcement:** 2026-09-22, only if the launch gates pass

**Cold email status:** Blocked until ReservKit has a valid physical postal
address. Do not substitute only a city and state or publish a home address.

This sprint is designed to produce successful operator setups, not raw signup
volume. The prospect tracker is in
`docs/launch_prospects_2026-09.csv`. The CSV is a prospect seed list, not a
store for replies or personal contact details. It contains public business
information only. Prioritize boat and watersports rental operators whose
inventory, capacity, waiver, time-slot, deposit, or payment workflows fit the
initial launch wedge. Keep adjacent rental and experience operators as a
secondary pool rather than broadening the first campaign message.

## Sprint Target

- Contact 5 qualified businesses per day for 5 business days.
- Get at least 5 qualified operators into onboarding.
- Guide at least 3 operators through a first bookable flow.
- Record repeated setup friction, not one-off feature requests.
- Hold the September 18 go/no-go review with production evidence.

A first bookable flow means the operator has an organization, one active
activity, future availability, active Stripe Connect, a public booking page,
and a completed controlled booking test. The test payment should be refunded
before the session ends.

## Outreach Rules

- Send from a real ReservKit identity on the root domain.
- Before sending, replace the postal-address placeholder in the template with
  ReservKit's valid business street address, registered post office box, or
  registered commercial mailbox.
- Personalize the first sentence using the `relevant_reason` in the tracker.
- Use the public business contact route in the tracker; do not source personal
  addresses or private contact data.
- Offer the existing Free plan and guided setup. Do not offer a discount,
  credit, custom term, migration promise, or unreleased feature.
- Send one initial note and at most one follow-up. Stop after a decline,
  unsubscribe request, or no response to the follow-up.
- Record `sent_at`, `reply_status`, `setup_call_at`, `activation_stage`, and
  concise factual notes in a private operating tracker or the private Launch
  Ops queue, not in the repository prospect seed.
- Keep names, emails, and free-form replies out of PostHog and repository
  files.
- Treat the message as a commercial solicitation. Keep sender and subject
  information accurate, include the physical address and opt-out footer below,
  and suppress future outreach immediately after an opt-out request. Review the
  [FTC CAN-SPAM compliance guide](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business)
  before the first batch.

## Founder Email

**Subject:** Quick booking setup question for [Business]

Hi [Business] team,

[One sentence based on the relevant reason in the tracker.]

I am building ReservKit for boat and watersports rental operators, and I am
looking for a small group of businesses to run a real booking setup with me
before our public announcement. ReservKit has a Free plan, and I will personally
help configure one activity, availability, Stripe Connect, waivers, and the
booking page, then run and refund a controlled test booking.

Would a 30-minute setup session be useful? You can also request guided setup at
https://reservkit.com/early-access.

Thanks,

[Founder name]
ReservKit
hello@reservkit.com

This is a one-to-one business solicitation from ReservKit.
ReservKit, [valid physical postal address]
To stop future marketing email from ReservKit, reply with `opt out`.

## Follow-Up

**Subject:** Re: Quick booking setup question for [Business]

Hi [Business] team,

Following up once in case a guided ReservKit setup would be useful. The goal is
to leave you with one working booking flow, not give you a sales presentation.
The Free plan does not require a paid subscription.

If the timing is not right, no response is needed and I will close the loop.

Thanks,

[Founder name]

ReservKit, [valid physical postal address]
To stop future marketing email from ReservKit, reply with `opt out`.

## Guided Setup Call

Target length: 30 minutes. Do not move to the next step until the current step
works on the operator's actual account.

1. **Fit and consent, 3 minutes:** Confirm the business sells scheduled rentals
   or experiences and agrees to a controlled live-mode payment and refund.
2. **Business, 3 minutes:** Confirm organization name, timezone, support contact,
   location, tax, and fee settings.
3. **Activity, 5 minutes:** Create one real activity with duration, capacity,
   price, image, location, and any required waiver.
4. **Availability, 5 minutes:** Create at least one future open slot and verify it
   appears on the public booking page.
5. **Payments, 5 minutes:** Complete Stripe Connect and confirm the app reports
   the account as active before attempting checkout.
6. **Booking, 5 minutes:** Complete one controlled booking using a real card,
   verify the operator booking record and customer confirmation, then refund it.
7. **Handoff, 4 minutes:** Confirm the operator can repeat the setup order, copy
   the booking link, and identify the support route.

## Evidence To Record

Record only the minimum needed to run the sprint:

| Field | Allowed value |
| --- | --- |
| `reply_status` | `none`, `interested`, `not_now`, `declined`, `unsubscribe` |
| `activation_stage` | `not_started`, `organization`, `activity`, `availability`, `connect`, `test_booking`, `activated` |
| `blocker_type` | `none`, `auth`, `organization`, `activity`, `availability`, `connect`, `checkout`, `booking`, `refund`, `other` |
| Notes | Short factual summary; no card data, credentials, or secrets |

Escalate authentication, account access, security, legal, billing/pricing,
refund/dispute, and data-loss concerns. Do not let the reply automation send a
response to those categories without human review.

## Daily Cadence

- **09:00:** Check Launch Ops, `hello@reservkit.com`, production Sentry, and the
  aggregate activation scorecard.
- **10:00:** Send the day's five personalized messages.
- **During the day:** Respond to interested operators and schedule guided setup.
- **After each call:** Update stage and blocker fields immediately.
- **16:30:** Review repeated friction and decide whether a launch-critical fix is
  needed. Batch code changes into one release when feasible.

## Go/No-Go Review

On September 18, compare the sprint results with
`docs/LAUNCH_OPERATING_PLAN_2026-09-08.md`. Do not announce broadly unless at
least 3 qualified operators are activated, at least 5 entered onboarding, the
critical production workflows are green, support is staffed, and a fresh Sentry
review has no current-release blocker.
