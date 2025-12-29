import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES } from "@/app/lib/services";
import { PlaceholderImage } from "@/app/components/ui/PlaceholderImage";
import { CTAButton } from "@/app/components/CTAButton";

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <Link href="/#services" className="text-sm font-semibold text-neutral-600 hover:text-neutral-900">
            ← Back to services
          </Link>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            {service.title}
          </h1>
          <p className="mt-3 text-neutral-600">{service.blurb}</p>

          <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-5">
            <div className="text-sm font-semibold">What’s included</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              {service.bullets.concat(["Permits & planning as needed", "Clean job site habits", "Final walkthrough"]).map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton />
            <a
              href="tel:+15403794048"
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
            >
              Call 540-379-4048
            </a>
          </div>
        </div>

        <div className="w-full max-w-xl">
          <PlaceholderImage className="aspect-[4/3]" label="SERVICE HERO IMAGE" />
          <div className="mt-4 grid grid-cols-2 gap-4">
            <PlaceholderImage className="aspect-[4/3]" label="IMAGE" />
            <PlaceholderImage className="aspect-[4/3]" label="IMAGE" />
          </div>
        </div>
      </div>
    </div>
  );
}
