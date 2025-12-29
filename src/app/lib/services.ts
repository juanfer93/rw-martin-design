export type Service = {
  slug: string;
  title: string;
  blurb: string;
  bullets: string[];

  description: string;
};

export const SERVICES: Service[] = [
  {
    slug: "bathroom-renovations",
    title: "Bathroom Renovations",
    blurb: "Modern, durable finishes with a build process you can trust.",
    bullets: ["Tile + waterproofing", "Vanities + lighting", "Walk-in showers"],
    description:
      "Transform your bathroom into a stylish, comfortable, and efficient space. From updated fixtures and tilework to complete bathroom renovations, we handle every detail with care. Whether modern or traditional, we’ll create a bathroom that reflects your taste and improves your daily routine.",
  },
  {
    slug: "kitchen-renovations",
    title: "Kitchen Renovations",
    blurb: "Better flow, better storage, and a cleaner look.",
    bullets: ["Cabinetry + counters", "Layouts + islands", "Backsplashes"],
    description:
      "Breathe new life into the heart of your home with a custom kitchen renovation. We design and remodel kitchens that are both beautiful and functional—tailored to your cooking habits, storage needs, and design preferences. Whether it’s a full gut renovation or a smart refresh, we create kitchens that work for your lifestyle and add lasting value to your home.",
  },
  {
    slug: "windows-doors",
    title: "Windows + Doors",
    blurb: "Efficiency, security, and curb appeal—done right.",
    bullets: ["Energy upgrades", "Entry doors", "Sliding + patio doors"],
    description:
      "Upgrade your home with energy-efficient windows and secure, stylish entry and patio doors. We install top-quality products designed to reduce energy costs, improve comfort, and boost your home’s value. Every window and door installation is completed with precision and care to ensure long-lasting performance and a perfect fit.",
  },
  {
    slug: "siding-replacement",
    title: "Siding Replacement",
    blurb: "Low-maintenance exterior improvements that last.",
    bullets: ["Colors + styles", "Added protection", "Clean finish details"],
    description:
      "Give your home a fresh new look with durable, low-maintenance siding replacement. We install siding that not only enhances curb appeal but also provides added insulation and protection against the elements. Choose from a variety of colors and styles to match your home’s aesthetic.",
  },
  {
    slug: "roof-gutter-replacement",
    title: "Roof + Gutter Replacement",
    blurb: "Protect your home from top to bottom.",
    bullets: ["Weather-resistant materials", "Seamless gutters", "Drainage + prevention"],
    description:
      "We provide expert roof replacement using durable, weather-resistant materials to protect your home and enhance curb appeal. Our services also include seamless gutter replacement to ensure proper drainage and prevent water damage. Together, your new roof and gutters will keep your home safe, dry, and looking great for years to come.",
  },
  {
    slug: "custom-decks",
    title: "Custom Decks",
    blurb: "Outdoor living spaces with great craftsmanship.",
    bullets: ["Wood or composite", "Railings + stairs", "Multi-level builds"],
    description:
      "Create the perfect outdoor retreat with a custom deck built for your lifestyle. Whether you prefer wood or composite materials, our decks are designed for durability, functionality, and beauty. From simple platforms to multi-level builds, we bring your vision to life with expert craftsmanship and attention to detail.",
  },
  {
    slug: "screened-porches-sunrooms",
    title: "Screened Porches + Sunrooms",
    blurb: "More comfort, more usable space, more wow.",
    bullets: ["Bug-free comfort", "Bright airy space", "Blends with the home"],
    description:
      "Enjoy the outdoors year-round with a custom-built screened porch or sunroom. These bright, airy spaces add square footage and comfort while allowing you to experience nature without bugs or bad weather. Designed for both beauty and practicality, our additions blend seamlessly with your home.",
  },
  {
    slug: "pergolas-pool-houses-patios",
    title: "Pergolas + Pool Houses + Patios",
    blurb: "Shade, style, and outdoor living upgrades.",
    bullets: ["Handcrafted pergolas", "Pool houses", "Patio spaces"],
    description:
      "Add character and charm to your outdoor living space with a handcrafted pergola, fully equipped pool house, or beautifully designed patio. Whether you're looking to relax in the shade, entertain guests, or create a private backyard escape, we’ll build a space that fits your needs and complements your property.",
  },
  {
    slug: "retaining-walls",
    title: "Retaining Walls",
    blurb: "Structure + drainage with a clean, finished look.",
    bullets: ["Drainage + stability", "Terraces + definition", "Engineered strength"],
    description:
      "Functional and attractive, our retaining walls provide structure, drainage, and visual appeal to your landscape. We design and build walls that are engineered for strength and styled to match the surrounding environment—perfect for managing slopes, creating terraces, or adding definition to your yard.",
  },
];

export const SERVICE_TITLES = SERVICES.map((s) => s.title) as [
  string,
  ...string[]
];

export const SERVICE_OPTIONS = [
  "Bathroom Renovations",
  "Kitchen Renovations",
  "Windows + Doors",
  "Siding Replacement",
  "Roof + Gutter Replacement",
  "Custom Decks",
  "Screened Porches + Sunrooms",
  "Pergolas + Pool Houses + Patios",
  "Retaining Walls",
  "Other",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];

