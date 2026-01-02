"use client";

import Link from "next/link";
import { MotionDiv } from "@/app/components/Motion";
import { ServiceImage } from "@/app/components/ui/ServiceImage";
import { CTAButton } from "@/app/components/CTAButton";
import type { ServiceItem } from "@/app/lib/services";
import { useMemo } from "react";

function Card({ title, items }: { title: string; items: readonly  string[] }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-900/5">
      <div className="text-sm font-semibold">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-neutral-700">
        {items.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServiceDetails({
  service,
  related,
}: {
  service: ServiceItem;
  related: ServiceItem[];
}) {
  const metaLine = useMemo(
    () =>
      "Fredericksburg • Spotsylvania • Stafford • Orange County • King George • Prince William • Fairfax • Richmond",
    []
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      {/* Top */}
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#services"
            className="text-sm font-semibold text-neutral-600 hover:text-neutral-900"
          >
            ← Back to services
          </Link>

          <div className="mt-4 inline-flex rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold tracking-[0.22em] text-neutral-600">
            SERVICES
          </div>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            {service.title}
          </h1>

          <p className="mt-3 text-neutral-600 md:text-lg">{service.blurb}</p>

          {/* ✅ antes era service.overview */}
          <p className="mt-5 text-base text-neutral-700 md:text-lg">
            {service.description}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton />
            <a
              href="tel:+15408461422"
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:-translate-y-0.5 hover:bg-neutral-50"
            >
              Call 540-846-1422
            </a>
          </div>

          <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
            <span className="font-semibold">Service Area:</span> {metaLine}
          </div>
        </MotionDiv>

        {/* Right visuals */}
        <MotionDiv
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="grid gap-4"
        >
          <ServiceImage
            className="aspect-[4/3]"
            src={service.images?.hero.src}
            alt={service.images?.hero.alt}
            label="SERVICE HERO IMAGE"
          />
          <div className="grid grid-cols-2 gap-4">
            <ServiceImage className="aspect-[4/3]" label="IMAGE" />
            <ServiceImage className="aspect-[4/3]" label="IMAGE" />
          </div>
        </MotionDiv>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.45 }}
        >
          <Card title="Highlights" items={service.bullets} />
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <Card
            title="What’s included"
            items={[
              "Design guidance + scope planning",
              "Material/finish coordination",
              "Clean job site habits",
              "Punch list + final walkthrough",
            ]}
          />
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <Card
            title="Great for"
            items={[
              "Refreshing an outdated space",
              "Improving function and comfort",
              "Boosting curb appeal and value",
            ]}
          />
        </MotionDiv>
      </div>

      {/* Related */}
      <div className="mt-14">
        <div className="text-xs font-semibold tracking-[0.25em] text-neutral-500">
          RELATED SERVICES
        </div>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
          Keep exploring
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/services/${r.slug}`}
              className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-900/5 transition hover:-translate-y-0.5 hover:bg-neutral-50"
            >
              <div className="text-sm font-semibold">{r.title}</div>
              <p className="mt-2 text-sm text-neutral-600">{r.blurb}</p>
              <div className="mt-4 text-sm font-semibold text-neutral-900">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="text-xs font-semibold tracking-[0.25em] text-neutral-500">
              READY TO START?
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Request your free consultation
            </div>
            <p className="mt-2 text-sm text-neutral-600">
              Simple steps, clear communication, and quality you can see.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+15408461422"
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:-translate-y-0.5 hover:bg-neutral-50"
            >
              Call 540-846-1422
            </a>
            <CTAButton className="rounded-full px-6 py-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
