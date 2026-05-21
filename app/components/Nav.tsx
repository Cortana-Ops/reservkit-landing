"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { TrackedLink } from "./TrackedLink";
import { BETA_URL, LOGIN_URL, PRIMARY_CTA_LABEL } from "../lib/marketing";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="ReservKit"
            width={120}
            height={32}
            priority
            className="h-8 w-auto object-contain"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-navy transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <TrackedLink
            href={LOGIN_URL}
            event="login_clicked"
            properties={{ location: 'nav' }}
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Log in
          </TrackedLink>
          <TrackedLink
            href={BETA_URL}
            event="beta_access_cta_clicked"
            properties={{ location: 'nav' }}
            className="inline-flex items-center gap-1.5 rounded-full bg-amber px-5 py-2 text-sm font-semibold text-navy hover:bg-amber-dark transition-colors shadow-sm"
          >
            {PRIMARY_CTA_LABEL} <ArrowRight className="h-3.5 w-3.5" />
          </TrackedLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-white px-6 py-4 space-y-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-slate-700 hover:text-navy transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 pb-1 flex flex-col gap-2 border-t border-[var(--color-border)] mt-3">
            <TrackedLink
              href={LOGIN_URL}
              event="login_clicked"
              properties={{ location: 'nav_mobile' }}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Log in
            </TrackedLink>
            <TrackedLink
              href={BETA_URL}
              event="beta_access_cta_clicked"
              properties={{ location: 'nav_mobile' }}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-navy hover:bg-amber-dark transition-colors"
            >
              {PRIMARY_CTA_LABEL} <ArrowRight className="h-3.5 w-3.5" />
            </TrackedLink>
          </div>
        </div>
      )}
    </header>
  );
}
