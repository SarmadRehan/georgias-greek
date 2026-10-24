"use client";

import { useEffect, useState } from "react";

import { shop } from "@/data/georgias";

import { Logo } from "./Logo";
import { OrderButton } from "./SiteProvider";

const navLinks = [
  { href: "#story", label: "Our story" },
  { href: "#menu", label: "Menu" },
  { href: "#catering", label: "Catering" },
  { href: "#find-the-truck", label: "Find the truck" },
  { href: "#market", label: "Market" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label="Georgia's Greek, back to top">
          <Logo className="w-11" priority />
          <span className="hidden font-display text-lg leading-none font-bold text-navy min-[360px]:block">
            Georgia&apos;s Greek
            <span className="mt-1 block font-sans text-[0.7rem] font-bold tracking-[0.22em] text-olive-ink uppercase">Food Truck · Seattle</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-5 text-[0.95rem] font-semibold lg:gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-slate transition-colors hover:text-aegean">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={shop.phoneHref} className="font-bold whitespace-nowrap text-navy hover:text-aegean">
            {shop.phone}
          </a>
          <OrderButton className="rounded-full bg-terracotta px-5 py-2.5 font-bold whitespace-nowrap text-white transition-colors hover:bg-terracotta-dark">
            Order online
          </OrderButton>
        </div>

        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-sky-soft text-navy md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-navy/10 bg-white md:hidden">
          <ul className="flex flex-col px-4 py-2 text-base font-bold text-navy">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="block py-3" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
