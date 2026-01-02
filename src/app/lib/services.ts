export type ServiceImage = {
  src: string;
  alt: string;
};

export const SERVICES = [
  {
    slug: "bathroom-renovations",
    title: "Bathroom Renovations",
    blurb: "Stylish, comfortable, and efficient bathroom upgrades.",
    description:
      "Transform your bathroom with updated fixtures, tilework, and complete renovations—modern or traditional—handled with care from start to finish.",
    bullets: ["Updated fixtures", "Tilework & finishes", "Full bathroom renovations"],
    images: {
      hero: { src: "/services/bathroom.avif", alt: "Bathroom renovation" },
      card: { src: "/services/bathroom-card.avif", alt: "Bathroom renovation" },
    },
  },
  {
    slug: "kitchen-renovations",
    title: "Kitchen Renovations",
    blurb: "Beautiful, functional kitchens tailored to your lifestyle.",
    description:
      "Custom kitchen renovations designed around your cooking habits, storage needs, and design preferences—from full remodels to smart refreshes that add lasting value.",
    bullets: ["Custom design & remodel", "Storage & layout improvements", "Full renovation or refresh"],
    images: {
      hero: { src: "/services/kitchen.avif", alt: "Kitchen renovation" },
      card: { src: "/services/kitchen-card.avif", alt: "Kitchen renovation" },
    },
  },
  {
    slug: "windows-and-doors",
    title: "Windows and Doors",
    blurb: "Energy-efficient windows and secure, stylish doors.",
    description:
      "Upgrade comfort and reduce energy costs with quality window and door installations—completed with precision for long-lasting performance and a perfect fit.",
    bullets: ["Energy efficiency upgrades", "Entry/patio door installs", "Precision fit & finish"],
    images: {
      hero: { src: "/services/exterior-front-home.avif", alt: "Windows and doors installation" },
      card: { src: "/services/exterior-front-home.avif", alt: "Windows and doors installation" },
    },
  },
  {
    slug: "siding-replacement",
    title: "Siding Replacement",
    blurb: "Durable, low-maintenance siding for a fresh new look.",
    description:
      "Boost curb appeal and protect your home with siding replacement that adds insulation and stands up to the elements—available in multiple colors and styles.",
    bullets: ["Curb appeal improvement", "Weather protection", "Style/color options"],
    images: {
      hero: { src: "/services/exterior-siding.avif", alt: "Siding replacement" },
      card: { src: "/services/exterior-siding.avif", alt: "Siding replacement" },
    },
  },
  {
    slug: "roof-and-gutter-replacement",
    title: "Roof and Gutter Replacement",
    blurb: "Roof + seamless gutters to keep your home protected.",
    description:
      "Expert roof replacement with durable materials plus seamless gutter replacement for proper drainage—helping prevent water damage and keep your home safe and dry.",
    bullets: ["Roof replacement", "Seamless gutters", "Drainage & water protection"],
    images: {
      hero: { src: "/services/exterior-roof.avif", alt: "Roof and gutter replacement" },
      card: { src: "/services/exterior-roof.avif", alt: "Roof and gutter replacement" },
    },
  },
  {
    slug: "custom-decks",
    title: "Custom Decks",
    blurb: "Custom decks built for durability, function, and beauty.",
    description:
      "Create an outdoor retreat with a custom deck in wood or composite—simple platforms to multi-level builds—crafted with attention to detail.",
    bullets: ["Wood or composite", "Multi-level builds", "Outdoor living space"],
    images: {
      hero: { src: "/services/outdoor-backyard-deck.avif", alt: "Custom deck" },
      card: { src: "/services/outdoor-backyard-deck.avif", alt: "Custom deck" },
    },
  },
  {
    slug: "screened-porches-and-sunrooms",
    title: "Screened Porches and Sunrooms",
    blurb: "Enjoy the outdoors—without bugs or bad weather.",
    description:
      "Bright, comfortable screened porches and sunrooms that add square footage and blend seamlessly with your home for year-round enjoyment.",
    bullets: ["Screened porches", "Sunrooms", "Added comfort & space"],
    images: {
      hero: { src: "/services/outdoor-screened-porch.avif", alt: "Screened porch or sunroom" },
      card: { src: "/services/outdoor-screened-porch.avif", alt: "Screened porch or sunroom" },
    },
  },
  {
    slug: "pergolas-pool-houses-and-patios",
    title: "Pergolas, Pool Houses, and Patios",
    blurb: "Shade, entertaining, and backyard escapes—built to fit.",
    description:
      "Handcrafted pergolas, pool houses, and patios designed for relaxing, hosting, and adding charm—tailored to your property and needs.",
    bullets: ["Pergolas", "Pool houses", "Patios for entertaining"],
    images: {
      hero: { src: "/services/outdoor-covered-patio.avif", alt: "Pergola, pool house, or patio" },
      card: { src: "/services/outdoor-covered-patio.avif", alt: "Pergola, pool house, or patio" },
    },
  },
  {
    slug: "retaining-walls",
    title: "Retaining Walls",
    blurb: "Structure, drainage, and landscape definition.",
    description:
      "Retaining walls engineered for strength and styled to match your landscape—ideal for managing slopes, creating terraces, and adding definition.",
    bullets: ["Slope management", "Drainage support", "Terraces & definition"],
    images: {
      hero: { src: "/services/retaining-walls.avif", alt: "Retaining wall" },
      card: { src: "/services/retaining-walls.avif", alt: "Retaining wall" },
    },
  },
] as const;


export type ServiceItem = (typeof SERVICES)[number];

export const SERVICE_OPTIONS = SERVICES.map((service) => service.title) as [
  string,
  ...string[],
];
