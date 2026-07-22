import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using the ReservKit booking platform.",
  alternates: { canonical: "https://reservkit.com/terms" },
};

export default function Terms() {
  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold text-navy mb-2">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: May 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">Acceptance of terms</h2>
            <p>
              By accessing or using ReservKit, you agree to be bound by these Terms of Service and
              our Privacy Policy. If you do not agree to these terms, do not use the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">Use of the platform</h2>
            <p>
              ReservKit provides booking management software as a service. You are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm mt-2">
              <li>All content you publish, including activity descriptions and pricing</li>
              <li>The accuracy of your business information</li>
              <li>Compliance with applicable laws in your jurisdiction</li>
              <li>Honoring bookings made through the platform</li>
              <li>Your own liability waiver content and compliance requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">Payments and fees</h2>
            <p>
              ReservKit uses Stripe for payment processing. Booking fees are charged as a
              percentage of each completed booking transaction according to the active plan:
            </p>
            <ul className="mt-2 mb-2 pl-4 list-disc space-y-1">
              <li>Free ($0/month): 4% booking fee, 10 bookings per month</li>
              <li>Starter ($79/month): 3% booking fee, 100 bookings per month</li>
              <li>Growth ($149/month): 2% booking fee, unlimited bookings</li>
              <li>Pro ($299/month): 1.5% booking fee, unlimited bookings</li>
              <li>Enterprise: custom monthly pricing, custom volume, and annual minimum</li>
            </ul>
            <p>Subscription fees for paid plans are billed monthly unless otherwise agreed in writing.</p>
            <p className="mt-3">
              You are responsible for any taxes applicable to your bookings. ReservKit is not
              responsible for chargebacks, refund disputes, or payment failures between operators
              and their customers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              Platform responsibility
            </h2>
            <p>
              ReservKit provides software as a service and is not a party to the transactions
              between operators and their customers. We are not responsible for the quality,
              safety, legality, or fulfillment of activities offered through the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">Prohibited use</h2>
            <p>You may not use ReservKit to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm mt-2">
              <li>Engage in fraudulent, deceptive, or illegal activity</li>
              <li>Violate any applicable law or regulation</li>
              <li>Harm, harass, or deceive customers or other users</li>
              <li>Reverse-engineer, copy, or create derivative works from the platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">Cancellation</h2>
            <p>
              Monthly plans can be canceled at any time and remain active through the end of the
              current billing period. Unless required by law or agreed in writing, paid
              subscription charges are not prorated or refunded except for billing errors,
              duplicate charges, fraud, or refunds required by law. Enterprise plans may include
              annual minimums, custom terms, or separate cancellation requirements in the signed
              agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">Termination</h2>
            <p>
              We reserve the right to suspend or terminate accounts that violate these terms,
              engage in fraudulent activity, or cause harm to customers or the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              Limitation of liability
            </h2>
            <p>
              To the maximum extent permitted by law, ReservKit is not liable for indirect,
              incidental, or consequential damages arising from your use of the platform. Our
              total liability in any matter is limited to the fees you paid in the three months
              preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">Changes to these terms</h2>
            <p>
              We may update these terms from time to time. Continued use of the platform after
              changes constitutes acceptance of the revised terms. We will notify active users of
              material changes by email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a
                href="mailto:hello@reservkit.com"
                className="text-amber font-medium hover:text-amber-dark transition-colors"
              >
                hello@reservkit.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </PageShell>
  );
}
