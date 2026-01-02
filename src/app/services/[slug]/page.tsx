import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES } from "@/app/lib/services";
import { ServiceImage } from "@/app/components/ui/ServiceImage";
import { CTAButton } from "@/app/components/CTAButton";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <Link href="/#services" className="text-sm font-semibold text-neutral-600 hover:text-neutral-900">
        ← Back to services
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-3 text-neutral-600">{service.blurb}</p>

          <p className="mt-6 text-sm text-neutral-700 md:text-base">
            {service.description}
          </p>

          <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5">
            <div className="text-sm font-semibold">Highlights</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              {service.bullets.map((b) => (
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
              href="tel:+15408461422"
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
            >
              Call 540-846-1422
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          <ServiceImage
            className="aspect-[4/3]"
            src={service.images?.hero.src}
            alt={service.images?.hero.alt}
            label="SERVICE HERO IMAGE"
          />
        </div>
      </div>
    </div>
  );
}
