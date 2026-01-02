import Link from "next/link";
import { Section } from "./components/Section";
import { CTAButton } from "./components/CTAButton";
import { PlaceholderImage } from "./components/ui/PlaceholderImage";
import { ServicesPicker } from "./components/ServicesPicker";

export default function HomePage() {
  return (
    <div id="home">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <PlaceholderImage className="h-full w-full rounded-none" label="HERO IMAGE" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-white/0" />
        </div>

        <div className="relative">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-inset ring-white/20">
                Design + Build • Fredericksburg Area
              </div>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Home Remodeling that feels premium — without the rigid experience.
              </h1>

              <p className="mt-4 text-base text-white/85 md:text-lg">
                Bathrooms, kitchens, exteriors, and outdoor living. A clean process,
                solid craftsmanship, and updates that last.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CTAButton className="w-full sm:w-auto" />
                <Link
                  href="/portfolio"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 sm:w-auto"
                >
                  View Portfolio
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 text-white/90 sm:grid-cols-4">
                {[
                  ["Licensed", "Insured & reliable"],
                  ["Quality", "Detail-focused builds"],
                  ["Clear", "No-surprise process"],
                  ["Local", "Fredericksburg region"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="rounded-2xl bg-white/10 p-4 ring-1 ring-inset ring-white/15"
                  >
                    <div className="text-sm font-semibold">{k}</div>
                    <div className="mt-1 text-xs text-white/75">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-10 bg-gradient-to-b from-white/0 to-white" />
        </div>
      </section>

      {/* SERVICES */}
      <Section
        id="services"
        eyebrow="SERVICES"
        title="Home improvements with a modern finish"
        subtitle="Pick a service to see details (like the original site), but with a cleaner layout and motion."
      >
        <ServicesPicker />
      </Section>

      <Section
        eyebrow="WHY US"
        title="Why Choose R.W. Martin Design + Build?"
        subtitle="Straightforward service, quality workmanship, and a clearer experience at every step."
      >
        <div className="space-y-8">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <p className="text-sm text-neutral-600 md:text-base">
              Owned and operated by Ron Martin, a licensed Virginia Class A contractor. We
              specialize in high-quality remodels, exterior renovations, and custom projects.
              Ron is personally involved in every phase, from the first call to the final
              walkthrough.
            </p>
            <p className="text-sm text-neutral-600 md:text-base">
              We treat your home like our own, delivering superior craftsmanship, clear
              communication, and reliable service from start to finish.
            </p>
            <div className="flex justify-center">
              <CTAButton className="rounded-full px-6 py-3" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["🛠️ 40+ Years of experience", "A legacy of hands-on building and happy homeowners."],
              ["✅ Licensed + insured", "Virginia Class A contractor, qualified for your remodel."],
              ["✨ Detail-oriented + clean", "We protect your property and keep the job site spotless."],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm shadow-neutral-900/5"
              >
                <div className="text-sm font-semibold text-neutral-900 md:text-base">
                  {title}
                </div>
                <p className="mt-2 text-sm text-neutral-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        id="process"
        eyebrow="PROCESS"
        title="Simple steps. Better experience."
        subtitle="This keeps the contractor-style clarity, but looks more modern and feels more alive."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["1", "Consultation", "Tell us what you want and what matters most."],
            ["2", "Plan", "We align scope, materials, and timeline."],
            ["3", "Build", "Clean job site habits + steady progress."],
            ["4", "Finish", "Final walkthrough + details dialed in."],
          ].map(([n, t, d]) => (
            <div
              key={n}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-900/5"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-sm font-semibold text-white">
                {n}
              </div>
              <div className="mt-3 text-sm font-semibold">{t}</div>
              <p className="mt-2 text-sm text-neutral-600">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA BAND */}
      <section id="contact" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2 md:items-center md:py-16">
          <div>
            <div className="text-xs font-semibold tracking-[0.25em] text-neutral-500">
              READY TO START?
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Get your free consultation
            </h2>
            <p className="mt-3 text-neutral-600">
              We’ll confirm details and schedule the next step. Quick, clear, and easy.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <a
              href="tel:+15403794048"
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:-translate-y-0.5 hover:bg-neutral-50"
            >
              Call 540-379-4048
            </a>
            <CTAButton className="rounded-full px-6 py-3" />
          </div>
        </div>
      </section>
    </div>
  );
}
