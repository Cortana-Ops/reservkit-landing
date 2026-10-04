# ReservKit Documentation Walkthrough Plan

**Reviewed:** 2026-10-03

## Documentation Standard

An operator task guide is ready when it includes:

1. The exact sidebar, tab, and button labels used by the current app.
2. Prerequisites or plan gates before the operator begins.
3. Numbered actions in the order they should be completed.
4. A `You are done when` check based on a visible app or customer result.
5. A warning where saving, cancelling, refunding, messaging, or changing inventory has a separate operational consequence.
6. A related guide for the next likely task.

The First Booking Walkthrough, Activities, Availability, cancellations, and Equipment guides now use this standard. The remaining reference guides should adopt it as their UI changes stabilize.

## Recommended Video Snippets

Do not produce a long product tour yet. Record short, replaceable clips only after the written walkthrough and UI are stable.

| Priority | Clip | Target length | Why motion helps |
| --- | --- | --- | --- |
| 1 | Create an activity and recurring availability | 45-60 seconds | Shows how Details and Availability save together and how intervals create start times |
| 2 | Test the public booking flow | 45-60 seconds | Connects the operator setup to the signed-out customer experience |
| 3 | Create equipment and attach a requirement | 30-45 seconds | Clarifies the difference between equipment demand and named physical units |
| 4 | Create and assign a waiver | 30-45 seconds | Shows that the template is created first and assigned to an activity second |
| 5 | Cancel and refund a paid booking | 30-45 seconds | Reinforces that reservation cancellation and Stripe money movement are separate actions |

## Recording Rules

- Use the controlled Clearwake demo organization and fictional customer data.
- Never expose email inboxes, provider credentials, Stripe identifiers, customer contact data, OTPs, or browser password managers.
- Keep each clip focused on one outcome and embed it beside the matching written walkthrough.
- Include captions and a text transcript so the docs remain usable without audio or video.
- Display the review date and re-record a clip when labels or behavior no longer match production.
- Do not record Stripe onboarding itself. Show the ReservKit entry point and the returned Connected state; Stripe's hosted steps can change and may expose sensitive business information.

## Next Documentation Pass

Convert the following pages from reference-first to task-first after the current launch work:

1. Payments: connect Stripe, issue a refund, and verify the result.
2. Waivers: create a template, assign it, and verify guest completion.
3. Staff: invite a member, set access, assign a booking, and confirm schedule visibility.
4. Notifications: enable a message, run a safe test, and read the delivery log.
5. Growth Tools: create a promo code or dynamic-pricing rule and verify the public total.
6. Reports: choose the correct report, filter the period, and reconcile the export.
