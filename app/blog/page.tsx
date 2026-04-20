import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/PageShell";
import { ArrowRight, BookOpen, Rss } from "lucide-react";
export const metadata: Metadata = {
  title: "Blog",
  description: "Guides, tips, and stories for rental operators and experience businesses using ReservKit.",
  alternates: { canonical: "https://reservkit.com/blog" },
};

export default function Blog() {
  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-xl bg-[var(--color-surface)] flex items-center justify-center">
            <Rss className="h-5 w-5 text-navy" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-navy">ReservKit Blog</h1>
            <p className="text-sm text-slate-500 mt-0.5">Stories and guides for rental operators</p>
          </div>
        </div>

        <div className="rounded-2xl border border-amber/30 bg-amber-light p-8 text-center mb-12">
          <BookOpen className="h-10 w-10 text-amber mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-xl font-bold text-navy mb-2">Content coming soon</h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
            We&apos;re working on guides to help rental operators, tour guides, and experience
            businesses grow their bookings and streamline their operations. Check back soon.
          </p>
          <a
            href="mailto:hello@reservkit.com?subject=Blog updates"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
          >
            Get notified when we publish <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        <div className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] p-6">
          <h2 className="text-base font-bold text-navy mb-4">Explore ReservKit</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/docs", label: "Documentation & Guides" },
              { href: "/changelog", label: "What's new — Changelog" },
              { href: "/kayak-rental-software", label: "Kayak rental software" },
              { href: "/boat-rental-software", label: "Boat rental software" },
              { href: "/fareharbor-alternative", label: "FareHarbor alternative" },
              { href: "/#pricing", label: "Pricing" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-navy transition-colors"
              >
                <ArrowRight className="h-3.5 w-3.5 text-amber shrink-0" aria-hidden="true" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </PageShell>
  );
}
