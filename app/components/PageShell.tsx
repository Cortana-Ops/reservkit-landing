"use client";

import Link from "next/link";
import Nav from "./Nav";

interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <>
      <Nav />
      {children}
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
