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
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/40 px-4 py-10 backdrop-blur-sm sm:items-center md:py-12"
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
            className="mx-auto w-full max-w-lg rounded-3xl bg-white p-4 shadow-xl shadow-black/10 md:p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[0.65rem] font-semibold tracking-[0.25em] text-neutral-500">
                  FREE CONSULTATION
                </div>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                  Tell us about your project
                </h3>
                <p className="mt-1.5 text-sm text-neutral-600">
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

            <div className="mt-4">
              <LeadForm onSuccess={() => setTimeout(close, 700)} />
            </div>
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}
