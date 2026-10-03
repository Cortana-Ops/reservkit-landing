# ReservKit Launch Operating Plan

**Prepared:** 2026-09-08

**Last reviewed:** 2026-10-02

**Public announcement target:** Postponed; no replacement date until the gates pass.

**Decision status:** No-go for broad promotion and paid acquisition. Continue founder-guided onboarding.

ReservKit is already open for public Free-first signup. This plan is for the public announcement and founder-led acquisition push, not for enabling access. Until the activation baseline is stronger, the launch goal is to create successful operators rather than maximize raw traffic.

## Initial Market Wedge

The first acquisition focus is **boat and watersports rental operators**. This
is narrower than the product's full supported market and gives outreach, SEO,
demos, and onboarding one concrete operating workflow. The primary offer is a
guided migration of one first-bookable flow, not a promise to replace an
operator's entire system on day one.

For the first 90 days, judge the wedge by activation and use rather than raw
traffic: 5 qualified onboarding starts, 3 completed first-bookable flows, and
evidence that at least one operator can continue normal booking operations
without founder intervention. Expand positioning only after those outcomes are
repeatable.

## Baseline

Privacy-safe production aggregates re-read on 2026-09-21 UTC:

| Measure | Current baseline |
| --- | ---: |
| Standard non-test signups, last 30 days | 0 |
| Standard non-test signups, last 14 days | 0 |
| Standard non-test organizations, all time | 9 |
| Standard non-test organizations with active activity | 2 |
| Standard non-test signups with future open slots | 0 |
| Standard non-test signups with active Stripe Connect | 0 |
| Standard non-test signups with any booking | 0 |
| Standard non-test organizations with complete first-bookable flow | 0 |

No customer or operator PII is part of this baseline.

## Launch Funnel

1. Qualified visitor reaches a ReservKit page.
2. Visitor clicks `Start free`.
3. Operator requests signup confirmation.
4. Operator confirms email, signs in, and creates an organization.
5. Operator creates an active activity.
6. Operator creates future availability.
7. Operator completes Stripe Connect.
8. Operator completes a controlled end-to-end booking test.
9. Operator receives a real booking and later converts to a paid plan when volume or feature needs justify it.

The primary activation outcome is the **first bookable flow**: organization created, active activity configured, future availability present, Stripe Connect active, and a controlled booking test completed. Signup count alone is not activation.

## Go/No-Go Gates

All gates must be true at the next go/no-go review:

- At least 3 qualified operators complete the first bookable flow with founder-guided setup.
- At least 5 qualified operators have entered onboarding, giving enough evidence to identify repeated setup friction.
- No unresolved current-release P0 issue affects authentication, organization creation, availability, Stripe Connect, checkout, booking creation, or refunds.
- Production app smoke, marketing live checks, and the single batched release CI run are green.
- A fresh production Sentry review has no current-release launch blocker. Keep RK-12 closed unless real non-test evidence appears.
- `hello@reservkit.com` has a named owner and is checked throughout each launch business day.
- The owner can explain and demonstrate the setup order: business, activity, availability, Stripe Connect, booking page, controlled booking test.
- Authenticated Billing package claims match the product and the support service
  ReservKit can actually provide.
- One current-release, non-test live Connect booking, cancellation, and refund
  has completed under explicit owner control of the money.
- Critical Sentry/provider alerts reach a named launch support owner.

If fewer than 3 operators activate, postpone the broad announcement and continue guided onboarding. Do not compensate with more traffic.

## Two-Week Schedule

### September 8-11: Measurement and launch materials

- [x] Ship campaign attribution from marketing CTA through signup and onboarding.
- [x] Establish the funnel event names and privacy rules.
- [x] Prepare a list of 25 handpicked rental or experience operators.
- [x] Prepare one short outreach email and one guided setup call outline.
- [x] Rehearse the complete setup and refund path using controlled accounts.
- [x] Prepare LinkedIn, Facebook, and Instagram profiles, an organic content
  sequence, and a gated Meta campaign draft.

The prospect tracker, founder email, follow-up, guided setup call, evidence
fields, and five-batch cadence are in
`docs/LAUNCH_OUTREACH_SPRINT_2026-09.md` and
`docs/launch_prospects_2026-09.csv`. Social profile fields, tracked links,
organic posts, and the paid campaign guardrails are in
`docs/SOCIAL_LAUNCH_PLAN_2026-09.md`.

### Current phase: Activation sprint

- Contact qualified operators directly in small daily batches through channels
  that do not require a commercial-email postal footer.
- Offer guided setup through the existing help path; do not promise discounts or custom terms.
- Onboard 3-5 operators personally and record only repeated product friction.
- Fix launch-blocking defects in one batched release. Defer cosmetic and speculative scope.
- Hold the next owner go/no-go review only after three operators complete the
  first-bookable flow.

### After gates pass: Announcement and support

- Publish the announcement only if the gates pass.
- Use founder channels, direct outreach, helpful operator-community posts, and existing SEO pages.
- Review signup, organization creation, activation, errors, and support requests every business day.
- Respond to setup requests the same business day.
- Request a factual customer quote only after a real successful workflow; never manufacture proof.

## Channel Priorities

1. Founder outreach to 25 carefully selected operators with a relevant reason for contacting each one.
2. Guided setup for current and new signups, including the operators who already requested help.
3. Helpful posts in relevant operator communities that show a concrete workflow or answer a real problem.
4. Boat and watersports SEO pages, high-intent workflow pages, and product documentation as trust and search support.
5. Paid acquisition only after the first-bookable-flow conversion rate is proven and support capacity is known.

## Daily Scorecard

Track these as aggregate counts and rates, split by `utm_source`, `utm_campaign`, landing path, and CTA location where volume permits:

- Qualified outreach sent and replies.
- `Start free` clicks.
- Signup confirmation requests.
- Organizations created.
- First activities created or skipped.
- Future availability configured.
- Stripe Connect activated.
- Controlled booking tests completed.
- Real bookings and paid-plan conversions.
- Open current-release Sentry issues and support requests.

Do not put emails, names, business names, free-form form content, raw errors, or secrets into PostHog campaign events.

## Stop Conditions

Pause active promotion when any of these occurs:

- Repeated sign-in, confirmation, organization creation, payment, booking, or refund failure affects real users.
- A P0 current-release production issue appears in Sentry or support.
- Support cannot respond during the stated window.
- Product messaging no longer matches production pricing or behavior.

Keep existing customers supported while promotion is paused. Rollback decisions should follow the public signup and production support runbooks.

## Owner Decisions And Actions

- Confirm or change the recommended September 22 announcement date by September 18.
- Own `hello@reservkit.com` during launch week or name the person who does.
- Confirm ReservKit's valid physical mailing address for the commercial-email
  footer before founder outreach begins.
- Approve the first 25 prospects and send founder outreach from a real ReservKit identity.
- Do not create a launch discount by default. Free already provides a low-risk entry; any credit, discount, or custom offer requires an explicit pricing decision.

## Release Discipline

- Batch app changes into one verified push when feasible; a push to `main` triggers the expensive full pipeline.
- Run focused local tests during iteration, then one full local verification before the push.
- Do not create PRs or empty documentation commits solely to obtain another CI run.
- Record production evidence after the deployment without triggering a second pipeline unless launch-critical code changed.

## Support Automation Boundary

Guided-setup intake is being connected to a private Launch Ops queue. Contact details and free-form messages belong in the service-role support store, not PostHog. Replies and activation nudges begin as idempotent drafts with human review. Security, legal, refund/dispute, billing/pricing, and account-access threads always escalate. Root `reservkit.com` mail remains on Google Workspace; inbound automation should use a separate Resend receiving subdomain and must not change root MX records.

As of September 9, guided-setup storage, weekday activation drafting, signed
inbound mailbox capture, automated-message filtering, and manual sent-state
reconciliation are live in production. Two existing activation drafts were
reconciled after the owner confirmed they had already been sent; no duplicate
email was sent. Launch Ops drafts are still human-reviewed and are not
automatically delivered. Security, legal, refund/dispute, billing/pricing, and
account-access messages remain mandatory escalations.
