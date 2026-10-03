# Clearwake Watersports Media Source

The new source organization is **Clearwake Watersports Demo**, separate from Barton Creek Outfitters.

- Public catalog: https://app.reservkit.com/book/clearwake-watersports-demo
- Operator: select the org in the existing Barton Creek operator's switcher.
- Five activities (including One-Hour Jet Ski Rental), 24 fictional customers, 64 seeded reservations, equipment and operating tasks.
- Full setup/safety evidence: app repo `docs/CLEARWAKE_WATERSPORTS_DEMO_2026-10-03.md`.
- Generated illustrative fleet originals: `public/demo/clearwake-watersports/{pontoon,kayaks,paddleboards,sunset-cruise,jet-ski}.png`. They are also served from Supabase's activity-photos bucket under org `6109d4a0-6914-4edb-b453-7e57b64efdff`. All five have distinct image URLs and file hashes; no duplicate photo assignments.

These are fictional activity photos, not real fleet/customer proof. Screenshot the actual running application for UI images; never synthesize the application interface or signatures. Keep demo captions. Optimize delivery before a public marketing media release.

## Marketing Update Prepared

Light-mode correction: all six screens were recaptured from the running demo after explicitly selecting light mode. The navy operator sidebar is part of the real light theme, not a remaining dark-mode screenshot. All page references now use `product-clearwake-light-{activities,bookings-dashboard,checkin-manifest,waiver-status,reports,public-booking-live}.png`; legacy asset paths retain the same light images for compatibility. Versioned URLs avoid stale Next/CDN image caches. No app theme code or demo records changed.

Correction verification: full local verify passed again. Restarted the local production preview against the rebuilt output, reran the 25-route/two-viewport rendered checks, and refreshed the six website preview captures. Visually inspected all six source images plus the rendered desktop homepage and mobile jet ski page. App handoff: `docs/HANDOFF_2026-10-03.md` in the app repo. No production release performed.

On 2026-10-03, captured the actual running Clearwake organization in the existing signed-in Safari session. Replaced all six marketing product PNGs: Activities, Bookings, Check-In, Waiver Templates, Reports and public booking. Captures exclude browser tabs/toolbars; no UI, signatures or payment evidence were synthesized. Resized to 1600px wide and losslessly compressed. Operator captures are 1600x882; the complete public catalog is 1600x1533.

- Homepage keeps the preferred side-by-side layout and identifies Clearwake demo data.
- Jet ski page now shows the activity catalog, not the paddlesports waiver template.
- Watersports page shows the public catalog. Boat page caption matches the multiple-booking manifest.
- Tour operator page includes the real demo manifest.
- Shared desktop Industries dropdown and mobile industry links expose all five verticals.
- Homepage and PageShell footers expose all nine SEO routes under Industries and Solutions.
- Automated rendered checks cover industry menu links, Escape dismissal, mobile menu state, and all nine footer links. Existing mobile test selectors now identify the mobile button explicitly instead of assuming it is the first header button.

Status: local working-tree update, not committed or deployed. Preview at http://localhost:3017. Production remains on the previous release until an explicit production release. No GitHub Actions runs triggered, no live payments/messages, no changes to demo data or Stripe configuration.

Verification: full local `RESERVKIT_MARKETING_BASE_URL=http://localhost:3017 npm run verify` passed (content, 26 route manifest entries, 25 metadata/sitemap routes, lint, production build, 31 internal link/form URLs, and 25 rendered routes at 1440x1000 and 390x900). Manual in-app browser checks confirmed desktop dropdown layout, mobile menu layout and mobile Industries -> Jet ski navigation. All six captured images were visually reviewed. The existing edge-runtime static-generation notice remains informational. No new payment, email or operator workflow functionality was tested by this marketing-only change.
