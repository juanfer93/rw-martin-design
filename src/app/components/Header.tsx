"use client";

import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { MotionDiv, MotionHeader } from "./Motion";
import { useUIStore } from "../store/ui";
import { CTAButton } from "./CTAButton";
import { SERVICES } from "../lib/services";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const mobileOpen = useUIStore((s) => s.mobileNavOpen);
  const toggle = useUIStore((s) => s.toggleMobileNav);
  const close = useUIStore((s) => s.closeMobileNav);

  return (
    <MotionHeader
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/70 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/#home" className="group flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-neutral-900 text-white text-xs font-bold">
            RW
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">
              R.W. Martin
            </div>
            <div className="text-xs text-neutral-600">Design + Build</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-neutral-700 transition hover:text-neutral-950"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+15403794048"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-50"
          >
            <Phone className="h-4 w-4" />
            540-379-4048
          </a>
          <CTAButton />
        </div>

        <button
          onClick={toggle}
          className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white p-2 text-neutral-900 md:hidden"
          aria-label="Open menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <MotionDiv
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-neutral-200 bg-white md:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 py-4">
              <div className="grid gap-2">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={close}
                    className="rounded-xl px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-neutral-200 p-3">
                <div className="text-xs font-semibold text-neutral-600">
                  Popular services
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {SERVICES.slice(0, 6).map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={close}
                      className="rounded-xl bg-neutral-50 px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-100"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <a
                  href="tel:+15403794048"
                  className="flex-1 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-center text-sm font-semibold"
                >
                  Call
                </a>
                <div className="flex-1">
                  <CTAButton className="w-full rounded-xl" />
                </div>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </MotionHeader>
  );
}
