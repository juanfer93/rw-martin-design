export type PortfolioImage = {
  id: string;
  src: string; 
  alt: string; 
};

export type PortfolioSection = {
  title: "Bathroom Remodels" | "Kitchen Remodels" | "Exterior Remodeling";
  slug: "bathroom-remodels" | "kitchen-remodels" | "exterior-remodeling";
  items: PortfolioImage[];
};

export const PORTFOLIO: PortfolioSection[] = [
  {
    title: "Bathroom Remodels",
    slug: "bathroom-remodels",
    items: [
      { id: "bathroom-01", src: "/portfolio/bathroom/bathroom-1.png", alt: "Bathroom 1" },
      { id: "bathroom-02", src: "/portfolio/bathroom/bathroom-2.png", alt: "Bathroom 2" },
      { id: "bathroom-03", src: "/portfolio/bathroom/bathroom-3.png", alt: "Bathroom 3" },
      { id: "bathroom-04", src: "/portfolio/bathroom/bathroom-4.png", alt: "Bathroom 4" },
      { id: "bathroom-05", src: "/portfolio/bathroom/bathroom-5.png", alt: "Bathroom 5" },
      { id: "bathroom-06", src: "/portfolio/bathroom/bathroom-6.png", alt: "Bathroom 6" },
      { id: "bathroom-07", src: "/portfolio/bathroom/bathroom-7.png", alt: "Bathroom 7" },
      { id: "bathroom-08", src: "/portfolio/bathroom/bathroom-8.png", alt: "Bathroom 8" },
      { id: "bathroom-09", src: "/portfolio/bathroom/bathroom-9.png", alt: "Bathroom 9" },
      { id: "bathroom-10", src: "/portfolio/bathroom/bathroom-10.png", alt: "Bathroom 10" },
      { id: "bathroom-11", src: "/portfolio/bathroom/bathroom-11.png", alt: "Bathroom 11" },
      { id: "bathroom-12", src: "/portfolio/bathroom/bathroom-12.png", alt: "Bathroom 12" },
    ],
  },
  {
    title: "Kitchen Remodels",
    slug: "kitchen-remodels",
    items: [
      { id: "kitchen-01", src: "/portfolio/kitchen/kitchen-1.png", alt: "Kitchen 1" },
      { id: "kitchen-02", src: "/portfolio/kitchen/kitchen-2.png", alt: "Kitchen 2" },
      { id: "kitchen-03", src: "/portfolio/kitchen/kitchen-3.png", alt: "Kitchen 3" },
      { id: "kitchen-04", src: "/portfolio/kitchen/kitchen-4.png", alt: "Kitchen 4" },
      { id: "kitchen-05", src: "/portfolio/kitchen/kitchen-5.png", alt: "Kitchen 5" },
      { id: "kitchen-06", src: "/portfolio/kitchen/kitchen-6.png", alt: "Kitchen 6" },
      { id: "kitchen-07", src: "/portfolio/kitchen/kitchen-7.png", alt: "Kitchen 7" },
      { id: "kitchen-08", src: "/portfolio/kitchen/kitchen-8.png", alt: "Kitchen 8" },
      { id: "kitchen-09", src: "/portfolio/kitchen/kitchen-9.png", alt: "Kitchen 9" },
      { id: "kitchen-10", src: "/portfolio/kitchen/kitchen-10.png", alt: "Kitchen 10" },
      { id: "kitchen-11", src: "/portfolio/kitchen/kitchen-11.png", alt: "Kitchen 11" },
      { id: "kitchen-12", src: "/portfolio/kitchen/kitchen-12.png", alt: "Kitchen 12" },
    ],
  },
  {
    title: "Exterior Remodeling",
    slug: "exterior-remodeling",
    items: [
      { id: "exterior-01", src: "/portfolio/exterior/exterior-01.png", alt: "Exterior Remodeling 1" },
      { id: "exterior-02", src: "/portfolio/exterior/exterior-02.png", alt: "Exterior Remodeling 2" },
      { id: "exterior-03", src: "/portfolio/exterior/exterior-03.png", alt: "Exterior Remodeling 3" },
      { id: "exterior-04", src: "/portfolio/exterior/exterior-04.png", alt: "Exterior Remodeling 4" },
      { id: "exterior-05", src: "/portfolio/exterior/exterior-05.png", alt: "Exterior Remodeling 5" },
      { id: "exterior-06", src: "/portfolio/exterior/exterior-06.png", alt: "Exterior Remodeling 6" },
      { id: "exterior-07", src: "/portfolio/exterior/exterior-07.png", alt: "Exterior Remodeling 7" },
      { id: "exterior-08", src: "/portfolio/exterior/exterior-08.png", alt: "Exterior Remodeling 8" },
      { id: "exterior-09", src: "/portfolio/exterior/exterior-09.png", alt: "Exterior Remodeling 9" },
      { id: "exterior-10", src: "/portfolio/exterior/exterior-10.png", alt: "Exterior Remodeling 10" },
      { id: "exterior-11", src: "/portfolio/exterior/exterior-11.png", alt: "Exterior Remodeling 11" },
      { id: "exterior-12", src: "/portfolio/exterior/exterior-12.png", alt: "Exterior Remodeling 12" },
    ],
  },
];
