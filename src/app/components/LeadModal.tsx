"use client";

import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { MotionDiv } from "./Motion";
import { useUIStore } from "../store/ui";
import { LeadForm } from "./LeadForm";

export function LeadModal() {
  const open = useUIStore((s) => s.leadModalOpen);
  const close = useUIStore((s) => s.closeLeadModal);

  return (
    <AnimatePresence>
      {open && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          onMouseDown={(e) => {
            // close only if clicking the overlay
            if (e.target === e.currentTarget) close();
          }}
        >
          <MotionDiv
            initial={{ y: 16, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="mx-auto mt-10 w-[92%] max-w-2xl rounded-3xl bg-white p-5 shadow-xl shadow-black/10 md:mt-16 md:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold tracking-[0.25em] text-neutral-500">
                  FREE CONSULTATION
                </div>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  Tell us about your project
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  We’ll follow up to schedule your consultation and next steps.
                </p>
              </div>

              <button
                onClick={close}
                className="rounded-xl border border-neutral-200 bg-white p-2 text-neutral-700 hover:bg-neutral-50"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6">
              <LeadForm onSuccess={() => setTimeout(close, 700)} />
            </div>
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}
