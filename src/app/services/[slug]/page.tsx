import { notFound } from "next/navigation";
import { SERVICES } from "@/app/lib/services";
import { ServiceDetails } from "@/app/components/ServiceDetails";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return <ServiceDetails service={service} related={related} />;
}
