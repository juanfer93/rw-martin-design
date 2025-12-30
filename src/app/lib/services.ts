export type ServiceImage = {
  src: string;
  alt: string;
};
export type ServiceItem = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  bullets: string[];
  images?: {
    hero: ServiceImage;
    card?: ServiceImage;
  };
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "bathroom-renovations",
    title: "Bathroom Renovations",
    blurb: "Modern tile, updated fixtures, and spa-like finishes.",
    description:
      "Upgrade tired bathrooms with smart layouts, clean lines, and finishes that feel fresh without losing practicality.",
    bullets: [
      "Shower & tub conversions",
      "Tile + waterproofing",
      "Custom vanities",
    ],
    images: {
      hero: {
        src: "/window.svg",
        alt: "Bathroom renovation concept image",
      },
      card: {
        src: "/window.svg",
        alt: "Bathroom renovation concept image",
      },
    },
  },
  {
    slug: "kitchen-remodels",
    title: "Kitchen Remodels",
    blurb: "Better flow, brighter finishes, and built-in storage.",
    description:
      "Create a kitchen that feels open, efficient, and ready for daily use with smart cabinetry and durable surfaces.",
    bullets: [
      "Cabinet + countertop updates",
      "Lighting upgrades",
      "Layout improvements",
    ],
    images: {
      hero: {
        src: "/file.svg",
        alt: "Kitchen remodel concept image",
      },
      card: {
        src: "/file.svg",
        alt: "Kitchen remodel concept image",
      },
    },
  },
  {
    slug: "basement-finishing",
    title: "Basement Finishing",
    blurb: "Comfortable living space with clean, modern details.",
    description:
      "Turn unused square footage into a polished family room, guest suite, or flexible space that feels brand new.",
    bullets: [
      "Drywall + trim",
      "Flooring options",
      "Built-in storage",
    ],
    images: {
      hero: {
        src: "/globe.svg",
        alt: "Basement finishing concept image",
      },
      card: {
        src: "/globe.svg",
        alt: "Basement finishing concept image",
      },
    },
  },
  {
    slug: "outdoor-living",
    title: "Outdoor Living",
    blurb: "Decks, patios, and covered spaces made for gathering.",
    description:
      "Extend your living space outside with thoughtful layout planning and materials that stand up to the seasons.",
    bullets: [
      "Deck & patio builds",
      "Covered porches",
      "Outdoor lighting",
    ],
    images: {
      hero: {
        src: "/file.svg",
        alt: "Outdoor living concept image",
      },
      card: {
        src: "/file.svg",
        alt: "Outdoor living concept image",
      },
    },
  },
  {
    slug: "exterior-refresh",
    title: "Exterior Refresh",
    blurb: "Curb appeal upgrades with durable finishes.",
    description:
      "Improve first impressions with exterior updates that blend style and function while protecting your investment.",
    bullets: [
      "Siding & trim updates",
      "Entry upgrades",
      "Paint refresh",
    ],
      hero: {
        src: "/window.svg",
        alt: "Exterior refresh concept image",
      },
        src: "/window.svg",
        alt: "Exterior refresh concept image",
  },
  {
    slug: "custom-carpentry",
    title: "Custom Carpentry",
    blurb: "Built-ins, millwork, and details that elevate a room.",
    description:
      "Add tailored storage and architectural detail with custom carpentry that feels seamless and intentional.",
    bullets: [
      "Built-in shelving",
      "Accent walls",
      "Trim & finish work",
    ],
    images: {
      hero: {
        src: "/globe.svg",
        alt: "Custom carpentry concept image",
      },
      card: {
        src: "/globe.svg",
        alt: "Custom carpentry concept image",
      },
    },
  },
];

export const SERVICE_OPTIONS = SERVICES.map((service) => service.title) as [
  string,
  ...string[],
];
