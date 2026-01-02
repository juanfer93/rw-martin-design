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
      { id: "bathroom-01", src: "bathroom-1.png", alt: "Bathroom 1" },
    ],
  },
  {
    title: "Kitchen Remodels",
    slug: "kitchen-remodels",
    items: [
      { id: "kitchen-01", src: "", alt: "" },
      { id: "kitchen-02", src: "", alt: "" },
    ],
  },
  {
    title: "Exterior Remodeling",
    slug: "exterior-remodeling",
    items: [
      { id: "exterior-01", src: "", alt: "" },
      { id: "exterior-02", src: "", alt: "" },
    ],
  },
];
