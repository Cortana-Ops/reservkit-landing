"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TrackedLink } from "./TrackedLink";
import { BETA_URL, PRIMARY_CTA_LABEL } from "../lib/marketing";

interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <>
      {/* Simple static nav for inner pages */}
      <header className="border-b border-[var(--color-border)] bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="ReservKit"
              width={100}
              height={28}
              priority
              className="h-7 w-auto object-contain"
              style={{ width: "auto" }}
            />
          </Link>
          <TrackedLink
            href={BETA_URL}
            event="beta_access_cta_clicked"
            properties={{ location: 'page_shell' }}
            className="inline-flex items-center gap-1.5 rounded-full bg-amber px-4 py-2 text-sm font-semibold text-navy hover:bg-amber-dark transition-colors"
          >
            {PRIMARY_CTA_LABEL} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </TrackedLink>
        </div>
      </header>
      {children}
      {/* Simple footer */}
      <footer className="border-t border-[var(--color-border)] bg-white px-6 py-8 mt-auto">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-700 transition-colors">
            ← Back to ReservKit
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-700 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-700 transition-colors">Terms</Link>
            <a href="mailto:hello@reservkit.com" className="hover:text-slate-700 transition-colors">Contact</a>
          </div>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} ReservKit</p>
        </div>
      </footer>
    </>
  );
}
