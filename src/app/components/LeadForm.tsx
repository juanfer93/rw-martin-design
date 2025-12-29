"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadInput } from "../lib/leadSchema";

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1 text-sm text-red-600">{msg}</p>;
}

export function LeadForm({ onSuccess }: { onSuccess?: () => void }) {
  const [serverMsg, setServerMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: { service: "Bathroom Renovations" },
  });

  async function onSubmit(values: LeadInput) {
    setServerMsg(null);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => null);
        throw new Error(json?.message ?? "Something went wrong");
      }

      reset();
      setServerMsg("Thanks! We’ll reach out shortly.");
      onSuccess?.();
    } catch (e: any) {
      setServerMsg(e?.message ?? "Failed to submit");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="text-xs font-semibold text-neutral-700">
            First Name
          </label>
          <input
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-neutral-900/10 focus:ring-4"
            placeholder="First name"
            {...register("firstName")}
          />
          <FieldError msg={errors.firstName?.message} />
        </div>
        <div>
          <label className="text-xs font-semibold text-neutral-700">
            Last Name
          </label>
          <input
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-neutral-900/10 focus:ring-4"
            placeholder="Last name"
            {...register("lastName")}
          />
          <FieldError msg={errors.lastName?.message} />
        </div>
      </div>

      {/* anti-bot */}
      <input className="hidden" tabIndex={-1} autoComplete="off" {...register("honey")} />

      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="text-xs font-semibold text-neutral-700">Email</label>
          <input
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-neutral-900/10 focus:ring-4"
            placeholder="you@email.com"
            {...register("email")}
          />
          <FieldError msg={errors.email?.message} />
        </div>
        <div>
          <label className="text-xs font-semibold text-neutral-700">Phone</label>
          <input
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-neutral-900/10 focus:ring-4"
            placeholder="(540) 000-0000"
            {...register("phone")}
          />
          <FieldError msg={errors.phone?.message} />
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold text-neutral-700">Address</label>
        <input
          className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-neutral-900/10 focus:ring-4"
          placeholder="Street, City, State"
          {...register("address")}
        />
        <FieldError msg={errors.address?.message} />
      </div>

      <div>
        <label className="text-xs font-semibold text-neutral-700">
          Service
        </label>
        <select
          className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-neutral-900/10 focus:ring-4"
          {...register("service")}
        >
          <option>Bathroom Renovations</option>
          <option>Kitchen Renovations</option>
          <option>Windows + Doors</option>
          <option>Siding</option>
          <option>Roof + Gutters</option>
          <option>Decks</option>
          <option>Porches + Sunrooms</option>
          <option>Other</option>
        </select>
        <FieldError msg={errors.service?.message as any} />
      </div>

      <div>
        <label className="text-xs font-semibold text-neutral-700">
          Message (optional)
        </label>
        <textarea
          rows={4}
          className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-neutral-900/10 focus:ring-4"
          placeholder="Tell us about your project…"
          {...register("message")}
        />
        <FieldError msg={errors.message?.message} />
      </div>

      <button
        disabled={isSubmitting}
        className="mt-2 inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Request Free Consultation"}
      </button>

      {serverMsg && (
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-700">
          {serverMsg}
        </div>
      )}
    </form>
  );
}
