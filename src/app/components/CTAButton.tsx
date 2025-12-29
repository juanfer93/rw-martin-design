"use client";

import { useUIStore } from "../store/ui";

export function CTAButton({ className = "" }: { className?: string }) {
  const open = useUIStore((s) => s.openLeadModal);

  return (
    <button
      onClick={open}
      className={[
        "inline-flex items-center justify-center rounded-full px-5 py-2.5",
        "bg-neutral-900 text-white text-sm font-semibold",
        "shadow-sm shadow-neutral-900/10",
        "transition hover:-translate-y-0.5 hover:bg-neutral-800 active:translate-y-0",
        className,
      ].join(" ")}
    >
      FREE Consultation
    </button>
  );
}
