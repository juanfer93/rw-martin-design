"use client";

import { useMemo } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { SERVICES } from "../lib/services";
import { useUIStore } from "../store/ui";
import { MotionDiv } from "./Motion";
import { ServiceImage } from "./ui/ServiceImage";
import { CTAButton } from "./CTAButton";

export function ServicesPicker() {
  const selectedSlug = useUIStore((s) => s.selectedServiceSlug);
  const selectService = useUIStore((s) => s.selectService);

  const selected = useMemo(
    () => SERVICES.find((s) => s.slug === selectedSlug) ?? SERVICES[0],
    [selectedSlug]
  );

  function handleSelect(slug: string) {
    selectService(slug);
    requestAnimationFrame(() => {
      document.getElementById("service-details")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <div className="grid gap-8">
      {/* Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => {
          const isActive = s.slug === selected.slug;

          return (
            <button
              key={s.slug}
              type="button"
              onClick={() => handleSelect(s.slug)}
              className={[
                "text-left group relative overflow-hidden rounded-2xl border bg-white p-5",
                "shadow-sm shadow-neutral-900/5 transition",
                "hover:-translate-y-0.5 hover:bg-neutral-50",
                isActive ? "border-neutral-900 ring-4 ring-neutral-900/10" : "border-neutral-200",
              ].join(" ")}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-neutral-900/5 blur-2xl" />
                <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-neutral-900/5 blur-2xl" />
              </div>

              <div className="relative">
                <div className="text-base font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-neutral-600">{s.blurb}</p>

                <ul className="mt-4 space-y-1 text-sm text-neutral-700">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900">
                  View details →
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Details (como la página antigua) */}
      <div id="service-details" className="scroll-mt-24">
        <AnimatePresence mode="wait">
          <MotionDiv
            key={selected.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-900/5 md:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <div className="text-xs font-semibold tracking-[0.25em] text-neutral-500">
                  SERVICE DETAILS
                </div>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  {selected.title}
                </h3>

                <p className="mt-4 text-sm text-neutral-700 md:text-base">
                  {selected.description}
                </p>

                <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                  <div className="text-sm font-semibold">Highlights</div>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                    {selected.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <CTAButton />
                  <a
                    href="tel:+15408461422"
                    className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:-translate-y-0.5 hover:bg-neutral-50"
                  >
                    Call 540-846-1422
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                <ServiceImage
                  className="aspect-[4/3]"
                  src={selected.images?.hero?.src}
                  alt={selected.images?.hero?.alt}
                  label="SERVICE IMAGE"
                />
                <div className="grid grid-cols-2 gap-4">
                  <ServiceImage className="aspect-[4/3]" label="IMAGE" />
                  <ServiceImage className="aspect-[4/3]" label="IMAGE" />
                </div>
              </div>
            </div>
          </MotionDiv>
        </AnimatePresence>
      </div>
    </div>
  );
}
