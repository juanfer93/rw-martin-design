export type Service = {
  slug: string;
  title: string;
  blurb: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "bathroom-renovations",
    title: "Bathroom Renovations",
    blurb: "Modern, durable finishes with a build process you can trust.",
    bullets: ["Tile + waterproofing", "Vanities + lighting", "Walk-in showers"],
  },
  {
    slug: "kitchen-renovations",
    title: "Kitchen Renovations",
    blurb: "Better flow, better storage, and a cleaner look.",
    bullets: ["Cabinetry + counters", "Layouts + islands", "Backsplashes"],
  },
  {
    slug: "windows-doors",
    title: "Windows + Doors",
    blurb: "Efficiency, security, and curb appeal—done right.",
    bullets: ["Energy upgrades", "Entry doors", "Sliding + patio doors"],
  },
  {
    slug: "siding",
    title: "Siding",
    blurb: "Low-maintenance exterior improvements that last.",
    bullets: ["Vinyl + fiber cement", "Trim + accents", "Weather protection"],
  },
  {
    slug: "roof-gutters",
    title: "Roof + Gutters",
    blurb: "Protect your home from top to bottom.",
    bullets: ["Roof replacement", "Gutter systems", "Ventilation checks"],
  },
  {
    slug: "decks",
    title: "Decks",
    blurb: "Outdoor living spaces with great craftsmanship.",
    bullets: ["Composite options", "Railings + stairs", "Lighting add-ons"],
  },
  {
    slug: "porches-sunrooms",
    title: "Porches + Sunrooms",
    blurb: "More comfort, more usable space, more wow.",
    bullets: ["Screened porches", "Enclosures", "Year-round upgrades"],
  },
];
