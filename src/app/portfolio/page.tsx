"use client";

import { useMemo, useState } from "react";
import { Section } from "@/app/components/Section";
import { ServiceImage } from "@/app/components/ui/ServiceImage";
import { PORTFOLIO } from "@/app/lib/portfolio";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const INITIAL_COUNT = 8;
const STEP = 8;

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN: [number, number, number, number] = [0.7, 0, 0.84, 0];

export default function PortfolioPage() {
  const [visibleBySection, setVisibleBySection] = useState<Record<string, number>>(
    () =>
      Object.fromEntries(
        PORTFOLIO.map((s) => [s.slug, Math.min(INITIAL_COUNT, s.items.length)])
      )
  );

  const loadMore = (slug: string, total: number) => {
    setVisibleBySection((prev) => ({
      ...prev,
      [slug]: Math.min((prev[slug] ?? INITIAL_COUNT) + STEP, total),
    }));
  };

  const tileVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 10 },
      show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.35,
          ease: EASE_OUT,
          delay: i * 0.03,
        },
      }),
      exit: {
        opacity: 0,
        y: 8,
        transition: { duration: 0.2, ease: EASE_IN },
      },
    }),
    []
  );

  return (
    <div className="pt-6">
      <Section
        eyebrow="PORTFOLIO"
        title="Our Work — Project Portfolio"
        subtitle="Project collections are grouped by section. Add your uploaded photos to the array to populate each gallery."
      >
        {PORTFOLIO.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 px-6 py-10 text-center text-sm text-neutral-600">
            No portfolio images yet. Add section objects and image arrays in{" "}
            <span className="font-semibold text-neutral-900">
              src/app/lib/portfolio.ts
            </span>{" "}
            to populate this page.
          </div>
        ) : (
          <div className="space-y-12">
            {PORTFOLIO.map((section) => {
              const visible = visibleBySection[section.slug] ?? INITIAL_COUNT;
              const shown = section.items.slice(0, visible);
              const canLoadMore = visible < section.items.length;

              return (
                <div key={section.slug} className="space-y-4">
                  <h3 className="text-2xl font-semibold text-neutral-900">
                    {section.title}
                  </h3>

                  {section.items.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 px-6 py-10 text-center text-sm text-neutral-600">
                      No images for this section yet
                    </div>
                  ) : (
                    <>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <AnimatePresence initial={false}>
                          {shown.map((image, index) => (
                            <motion.div
                              key={image.id}
                              custom={index}
                              variants={tileVariants}
                              initial="hidden"
                              animate="show"
                              exit="exit"
                              layout
                              transition={{ layout: { duration: 0.35, ease: EASE_OUT } }}
                            >
                              <ServiceImage
                                className="aspect-[4/3]"
                                src={image.src}
                                alt={image.alt}
                                label={`PORTFOLIO ${index + 1}`}
                              />
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>

                      {canLoadMore && (
                        <div className="pt-2">
                          <motion.button
                            type="button"
                            onClick={() => loadMore(section.slug, section.items.length)}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2, ease: EASE_OUT }}
                            className="inline-flex items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-neutral-900/10 transition-colors duration-300 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900/30 focus:ring-offset-2"

                          >
                            Load more
                          </motion.button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </Section>
    </div>
  );
}
