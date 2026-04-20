import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ReservKit collects, uses, and protects your data.",
  alternates: { canonical: "https://reservkit.com/privacy" },
};

export default function Privacy() {
  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold text-navy mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: April 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">Information we collect</h2>
            <p>
              ReservKit collects information necessary to operate the booking platform, including
              names, email addresses, and payment information. Payment data is processed exclusively
              by Stripe — we do not store card numbers or bank details directly.
            </p>
            <p className="mt-3">
              We also collect usage data such as pages visited, features used, and booking activity
              to improve the platform and provide analytics to operators.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">How we use your information</h2>
            <ul className="list-disc list-inside space-y-1.5 text-sm">
              <li>To provide and operate the ReservKit platform</li>
              <li>To process bookings and payments on behalf of operators</li>
              <li>To send booking confirmations, reminders, and waiver links to customers</li>
              <li>To provide customer support</li>
              <li>To improve the platform through usage analytics</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">Data ownership</h2>
            <p>
              Booking data — customer names, contact information, booking history — belongs to the
              operator who collects it through their ReservKit account. We act as a data processor
              on the operator&apos;s behalf. Operators are responsible for their own compliance with
              applicable privacy laws (GDPR, CCPA, etc.) regarding their customers&apos; data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">Data sharing</h2>
            <p>
              We do not sell your personal data to third parties. We share data only with:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm mt-2">
              <li>
                <strong>Stripe</strong> — for payment processing
              </li>
              <li>
                <strong>Supabase</strong> — for database hosting and authentication
              </li>
              <li>
                <strong>Resend</strong> — for transactional email delivery
              </li>
              <li>
                <strong>Twilio</strong> — for SMS reminders (if enabled by operator)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">Data retention</h2>
            <p>
              We retain booking and account data for as long as your account is active or as needed
              to provide services. You may request deletion of your account and associated data at
              any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">Cookies</h2>
            <p>
              ReservKit uses cookies and similar technologies to maintain sessions and analyze
              usage. By using the platform, you consent to our use of cookies as described in this
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">Your rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data. To exercise
              these rights, contact us at{" "}
              <a
                href="mailto:hello@reservkit.com"
                className="text-amber font-medium hover:text-amber-dark transition-colors"
              >
                hello@reservkit.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">Contact</h2>
            <p>
              For privacy-related questions, contact us at{" "}
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
