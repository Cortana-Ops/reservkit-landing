"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { industryLinks } from "../lib/seoNavigation";
import { TrackedLink } from "./TrackedLink";
import { PRIMARY_CTA_URL, PRIMARY_CTA_EVENT, LOGIN_URL, PRIMARY_CTA_LABEL } from "../lib/marketing";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const industryMenu = useRef<HTMLDivElement>(null);
  const industryButton = useRef<HTMLButtonElement>(null);

  const closeMobileMenu = () => {
    setMobileIndustriesOpen(false);
    setOpen(false);
  };

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!industryMenu.current?.contains(event.target as Node)) setIndustriesOpen(false);
    };
    const closeEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (industriesOpen) industryButton.current?.focus();
        setIndustriesOpen(false);
        setMobileIndustriesOpen(false);
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeEscape);
    };
  }, [industriesOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="ReservKit"
            width={32}
            height={32}
            priority
          />
          <span className="text-sm font-bold text-navy">ReservKit</span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600"
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
          <div ref={industryMenu} className="relative" onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIndustriesOpen(false);
          }}>
            <button ref={industryButton} type="button" aria-expanded={industriesOpen} aria-controls="industries-navigation" onClick={() => setIndustriesOpen(!industriesOpen)} className="flex items-center gap-1.5 py-2 hover:text-navy">
              Who it&apos;s for <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            {industriesOpen && (
              <ul id="industries-navigation" className="absolute right-0 top-full w-56 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
                {industryLinks.map((link) => <li key={link.href}><Link href={link.href} onClick={() => setIndustriesOpen(false)} className="block rounded px-3 py-2 hover:bg-slate-50 focus-visible:bg-slate-50">{link.label}</Link></li>)}
              </ul>
            )}
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <TrackedLink
            href={LOGIN_URL}
            event="login_clicked"
            properties={{ location: 'nav' }}
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Log in
          </TrackedLink>
          <TrackedLink
            href={PRIMARY_CTA_URL}
            event={PRIMARY_CTA_EVENT}
            properties={{ location: 'nav' }}
            className="inline-flex items-center gap-1.5 rounded-full bg-amber px-5 py-2 text-sm font-semibold text-navy hover:bg-amber-dark transition-colors shadow-sm"
          >
            {PRIMARY_CTA_LABEL} <ArrowRight className="h-3.5 w-3.5" />
          </TrackedLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => {
            if (open) setMobileIndustriesOpen(false);
            setOpen(!open);
          }}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="lg:hidden max-h-[calc(100dvh-80px)] overflow-y-auto border-t border-[var(--color-border)] bg-white px-6 py-4 space-y-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={closeMobileMenu}
              className="block py-2.5 text-sm font-medium text-slate-700 hover:text-navy transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="border-t border-slate-200 pt-2 mt-2">
            <button
              type="button"
              aria-expanded={mobileIndustriesOpen}
              aria-controls="mobile-industries-navigation"
              onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
              className="flex w-full items-center justify-between py-2.5 text-sm font-medium text-slate-700 transition-colors hover:text-navy"
            >
              Who it&apos;s for
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileIndustriesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {mobileIndustriesOpen && (
              <ul id="mobile-industries-navigation" className="border-l border-slate-200 pl-4">
                {industryLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        closeMobileMenu();
                      }}
                      className="block py-2.5 text-sm text-slate-600 transition-colors hover:text-navy"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="pt-3 pb-1 flex flex-col gap-2 border-t border-[var(--color-border)] mt-3">
            <TrackedLink
              href={LOGIN_URL}
              event="login_clicked"
              properties={{ location: 'nav_mobile' }}
              onClick={closeMobileMenu}
              className="block py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Log in
            </TrackedLink>
            <TrackedLink
              href={PRIMARY_CTA_URL}
              event={PRIMARY_CTA_EVENT}
              properties={{ location: 'nav_mobile' }}
              onClick={closeMobileMenu}
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-navy hover:bg-amber-dark transition-colors"
            >
              {PRIMARY_CTA_LABEL} <ArrowRight className="h-3.5 w-3.5" />
            </TrackedLink>
          </div>
        </nav>
      )}
    </header>
  );
}
