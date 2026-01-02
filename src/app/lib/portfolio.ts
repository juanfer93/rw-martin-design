export type PortfolioImage = {
  src: string;
  alt: string;
};

export type PortfolioSection = {
  title: string;
  images: PortfolioImage[];
};

export const portfolioSections: PortfolioSection[] = [];
