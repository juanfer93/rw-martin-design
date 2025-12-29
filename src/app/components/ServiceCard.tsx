"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionDiv } from "./Motion";
import type { Service } from "../lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <MotionDiv
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-900/5"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-neutral-900/5 blur-2xl" />
        <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-neutral-900/5 blur-2xl" />
      </div>

      <div className="relative">
        <div className="text-base font-semibold">{service.title}</div>
        <p className="mt-2 text-sm text-neutral-600">{service.blurb}</p>

        <ul className="mt-4 space-y-1 text-sm text-neutral-700">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/services/${service.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900"
        >
          Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
      </div>
    </MotionDiv>
  );
}
