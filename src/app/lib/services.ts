export type ServiceFAQ = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  blurb: string;

  highlights: string[];

  overview: string;
  included: string[];
  goodFor: string[];
  faqs: ServiceFAQ[];
};

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

export const SERVICES: Service[] = [
  {
    slug: "bathroom-renovations",
    title: "Bathroom Renovations",
    blurb: "Stylish, functional bathrooms—built clean, tight, and made to last.",
    highlights: ["Tile + waterproofing", "Vanities + lighting", "Walk-in showers"],
    overview:
      "Transform your bathroom into a comfortable, efficient space. From fixture updates and tilework to full renovations, we handle the details with care—modern or traditional, built around your taste and routine.",
    included: [
      "Design guidance + scope planning",
      "Demolition + prep (as needed)",
      "Waterproofing + tile-ready surfaces",
      "Fixture set (shower, toilet, vanity, hardware)",
      "Ventilation + moisture control checks",
      "Punch list + final walkthrough",
    ],
    goodFor: [
      "Outdated bathrooms that need a full refresh",
      "Improving layout, storage, and lighting",
      "Upgrading to a walk-in shower or new tub",
    ],
    faqs: [
      {
        q: "Do you do partial updates or only full remodels?",
        a: "Both. We can do smart refreshes (fixtures/finishes) or full renovations depending on your goals and budget.",
      },
      {
        q: "Can you help with material selections?",
        a: "Yes—tile, vanity, fixtures, and finishes. We’ll guide choices that look great and perform well long-term.",
      },
      {
        q: "Do you handle permits and inspections?",
        a: "When required, yes. We’ll confirm what applies to your project and take care of the process.",
      },
    ],
  },
  {
    slug: "kitchen-renovations",
    title: "Kitchen Renovations",
    blurb: "Better flow, better storage, and a cleaner look—without the chaos.",
    highlights: ["Cabinetry + counters", "Layouts + islands", "Backsplashes"],
    overview:
      "Bring new life to the heart of your home with a custom kitchen renovation. We design and remodel kitchens that are both beautiful and functional—tailored to cooking habits, storage needs, and style preferences.",
    included: [
      "Layout + functionality planning",
      "Cabinet/counter coordination",
      "Backsplash + finish carpentry",
      "Lighting + electrical planning (as needed)",
      "Flooring coordination (as needed)",
      "Final walkthrough + details dial-in",
    ],
    goodFor: [
      "Improving workflow and storage",
      "Modernizing finishes and lighting",
      "Creating an island or open layout",
    ],
    faqs: [
      {
        q: "Can you do a refresh without a full gut renovation?",
        a: "Yes. We can plan a phased approach—targeting the biggest impact items first (counters, backsplash, lighting, etc.).",
      },
      {
        q: "Do you coordinate trades (electric/plumbing)?",
        a: "Yes. We manage the sequencing so the job stays clean and predictable.",
      },
      {
        q: "Will you help maintain a consistent style with the rest of the home?",
        a: "Absolutely—finishes, trim, and transitions are selected to blend naturally with your existing look.",
      },
    ],
  },
  {
    slug: "windows-doors",
    title: "Windows + Doors",
    blurb: "Energy efficiency, comfort, and curb appeal—installed precisely.",
    highlights: ["Energy upgrades", "Entry doors", "Patio/sliding doors"],
    overview:
      "Upgrade your home with energy-efficient windows and secure, stylish entry and patio doors. We install high-quality products designed to reduce energy costs, improve comfort, and boost value—finished with a perfect fit.",
    included: [
      "Product guidance + sizing checks",
      "Removal + clean install",
      "Weather sealing + trim finishing",
      "Operation + fit verification",
      "Site protection + cleanup",
    ],
    goodFor: [
      "Drafty rooms or poor insulation",
      "Old windows/doors that stick or leak",
      "Boosting exterior curb appeal quickly",
    ],
    faqs: [
      {
        q: "Do you replace just a few windows/doors?",
        a: "Yes—single replacements or full sets. We’ll match style and trim details where possible.",
      },
      {
        q: "Will new windows help reduce energy costs?",
        a: "Often yes—especially if your current units are older, leaky, or single-pane.",
      },
      {
        q: "Do you handle interior/ exterior trim finishing?",
        a: "Yes. We aim for a clean, finished look inside and out.",
      },
    ],
  },
  {
    slug: "siding-replacement",
    title: "Siding Replacement",
    blurb: "Durable, low-maintenance siding that refreshes the whole exterior.",
    highlights: ["Curb appeal boost", "Weather protection", "Style options"],
    overview:
      "Give your home a fresh new look with durable, low-maintenance siding replacement. We install siding that improves curb appeal while adding protection from the elements—available in a range of colors and styles.",
    included: [
      "Exterior review + measurements",
      "Removal + prep (as needed)",
      "Wrap/insulation considerations",
      "Siding install + trim details",
      "Clean lines, corners, and transitions",
      "Final walkthrough",
    ],
    goodFor: [
      "Old siding that’s faded, cracked, or warped",
      "Improving insulation + weather resistance",
      "Modernizing the home’s exterior look",
    ],
    faqs: [
      {
        q: "Do you offer different styles and colors?",
        a: "Yes—multiple profiles and colors. We’ll help you pick a look that fits the home.",
      },
      {
        q: "Will you replace trim and accents too?",
        a: "We can—trim, fascia, and accents are common upgrades to complete the look.",
      },
      {
        q: "Does siding replacement improve insulation?",
        a: "It can. We’ll review options for wrap/insulation upgrades depending on your goals.",
      },
    ],
  },
  {
    slug: "roof-gutter-replacement",
    title: "Roof + Gutter Replacement",
    blurb: "Weather-resistant protection with proper drainage and clean finish.",
    highlights: ["Roof replacement", "Seamless gutters", "Leak prevention"],
    overview:
      "Protect your home with durable, weather-resistant roofing and seamless gutter replacement. Together, your new roof and gutters improve curb appeal, help prevent water damage, and keep your home safe and dry.",
    included: [
      "Roof inspection + scope planning",
      "Tear-off + underlayment as needed",
      "Flashing + ventilation checks",
      "Gutter sizing + drainage setup",
      "Cleanup + final verification",
    ],
    goodFor: [
      "Aging roofs or recurring leaks",
      "Overflowing/failed gutters",
      "Upgrading exterior protection long-term",
    ],
    faqs: [
      {
        q: "Can you replace just gutters?",
        a: "Yes. We can do gutters alone or as part of a full roof + gutter package.",
      },
      {
        q: "Do you check ventilation and flashing?",
        a: "Yes—these are critical for long-term roof performance.",
      },
      {
        q: "Will you protect landscaping during the job?",
        a: "Yes. We take precautions and keep the site as clean as possible throughout the project.",
      },
    ],
  },
  {
    slug: "custom-decks",
    title: "Custom Decks",
    blurb: "Outdoor living built for durability, comfort, and style.",
    highlights: ["Wood or composite", "Railings + stairs", "Multi-level builds"],
    overview:
      "Create the perfect outdoor retreat with a custom deck built for your lifestyle. Whether you prefer wood or composite, we build decks for durability, function, and beauty—from simple platforms to multi-level designs.",
    included: [
      "Design + layout planning",
      "Material selection (wood/composite)",
      "Footings/frame/decking build",
      "Railings + stairs",
      "Code compliance + checks",
      "Final walkthrough",
    ],
    goodFor: [
      "Replacing a worn deck",
      "Adding outdoor entertaining space",
      "Upgrading to composite/low-maintenance",
    ],
    faqs: [
      {
        q: "Do you build composite decks?",
        a: "Yes—wood or composite depending on your desired look and maintenance level.",
      },
      {
        q: "Can you do multi-level decks?",
        a: "Yes. We’ll design around your yard grade, views, and how you want to use the space.",
      },
      {
        q: "Do you handle permits?",
        a: "When required, yes—we’ll confirm local requirements and coordinate the process.",
      },
    ],
  },
  {
    slug: "screened-porches-sunrooms",
    title: "Screened Porches + Sunrooms",
    blurb: "Bright, airy spaces that extend living—without bugs or bad weather.",
    highlights: ["Screened comfort", "More usable space", "Blends with the home"],
    overview:
      "Enjoy the outdoors year-round with a custom screened porch or sunroom. These bright spaces add comfort and square footage while letting you experience nature without the drawbacks—designed to blend seamlessly with your home.",
    included: [
      "Design + footprint planning",
      "Structure build + finishes",
      "Screening/enclosure options",
      "Lighting + airflow considerations",
      "Trim + exterior integration",
      "Final walkthrough",
    ],
    goodFor: [
      "Year-round outdoor comfort",
      "Adding usable living space",
      "Creating a relaxing entertaining area",
    ],
    faqs: [
      {
        q: "What’s the difference between screened porch and sunroom?",
        a: "A screened porch is open-air with screens; a sunroom is more enclosed for extended seasonal use.",
      },
      {
        q: "Can it match my existing exterior style?",
        a: "Yes—roof lines, trim, and finishes are planned to integrate naturally.",
      },
      {
        q: "Can you add lighting and fans?",
        a: "Yes—common add-ons that make the space much more usable.",
      },
    ],
  },
  {
    slug: "pergolas-pool-houses-patios",
    title: "Pergolas + Pool Houses + Patios",
    blurb: "Character, shade, and outdoor function—built for how you live.",
    highlights: ["Pergolas", "Pool houses", "Patios + entertaining"],
    overview:
      "Add charm and function to your outdoor living area with a handcrafted pergola, a fully equipped pool house, or a beautifully designed patio—built to fit your needs and complement your property.",
    included: [
      "Concept + placement planning",
      "Structure build + finishes",
      "Shade/privacy options",
      "Outdoor layout considerations",
      "Final walkthrough",
    ],
    goodFor: [
      "Creating a shaded hangout zone",
      "Improving backyard entertaining",
      "Adding a purpose-built outdoor structure",
    ],
    faqs: [
      {
        q: "Can you build around an existing patio or pool area?",
        a: "Yes—we can integrate with what you already have or propose a clean rework.",
      },
      {
        q: "Do you help design the look?",
        a: "Yes—style and proportion matter a lot here. We’ll guide the design so it feels intentional.",
      },
      {
        q: "Can this be phased (pergola first, then patio later)?",
        a: "Often yes. We can plan a phased build so it stays manageable.",
      },
    ],
  },
  {
    slug: "retaining-walls",
    title: "Retaining Walls",
    blurb: "Structure, drainage, and landscape definition—engineered and clean.",
    highlights: ["Slope control", "Drainage support", "Landscape definition"],
    overview:
      "Retaining walls can be both functional and attractive—adding structure, drainage management, and visual definition. We design and build walls engineered for strength and styled to fit the surroundings.",
    included: [
      "Site evaluation + drainage planning",
      "Material selection guidance",
      "Base prep + leveling",
      "Wall build + reinforcement details",
      "Cleanup + final check",
    ],
    goodFor: [
      "Managing slopes and erosion",
      "Creating terraces or flat yard zones",
      "Adding definition and structure to landscaping",
    ],
    faqs: [
      {
        q: "Do retaining walls require drainage planning?",
        a: "Yes—drainage is a key part of long-term performance. We plan it as part of the build.",
      },
      {
        q: "Can it match the style of my yard/home?",
        a: "Yes. We’ll choose materials and finishes that look natural in your space.",
      },
      {
        q: "Do you handle engineering when needed?",
        a: "If the wall height/conditions require it, we’ll coordinate what’s necessary to build safely and correctly.",
      },
    ],
  },
];
