import { Section } from "@/app/components/Section";
import { ServiceImage } from "@/app/components/ui/ServiceImage";
import { portfolioSections } from "@/app/lib/portfolio";

export default function PortfolioPage() {
  return (
    <div className="pt-6">
      <Section
        eyebrow="PORTFOLIO"
        title="Our Work — Project Portfolio"
        subtitle="Project collections are grouped by session. Add your uploaded photos to the array to populate each gallery."
      >
        {portfolioSections.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 px-6 py-10 text-center text-sm text-neutral-600">
            No portfolio images yet. Add session objects and image arrays in{" "}
            <span className="font-semibold text-neutral-900">
              src/app/lib/portfolio.ts
            </span>
            to populate this page.
          </div>
        ) : (
          <div className="space-y-12">
            {portfolioSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-2xl font-semibold text-neutral-900">
                  {section.title}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {section.images.map((image, index) => (
                    <ServiceImage
                      key={`${section.title}-${image.src}-${index}`}
                      className="aspect-[4/3]"
                      src={image.src}
                      alt={image.alt}
                      label={`PORTFOLIO ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}
