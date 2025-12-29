import { create } from "zustand";
import { SERVICES } from "../lib/services";

type UIState = {
  mobileNavOpen: boolean;
  leadModalOpen: boolean;

  selectedServiceSlug: string;

  openMobileNav: () => void;
  closeMobileNav: () => void;
  toggleMobileNav: () => void;

  openLeadModal: () => void;
  closeLeadModal: () => void;

  selectService: (slug: string) => void;
};

export const useUIStore = create<UIState>((set) => ({
  mobileNavOpen: false,
  leadModalOpen: false,

  selectedServiceSlug: SERVICES[0]?.slug ?? "bathroom-renovations",

  openMobileNav: () => set({ mobileNavOpen: true }),
  closeMobileNav: () => set({ mobileNavOpen: false }),
  toggleMobileNav: () => set((s) => ({ mobileNavOpen: !s.mobileNavOpen })),

  openLeadModal: () => set({ leadModalOpen: true }),
  closeLeadModal: () => set({ leadModalOpen: false }),

  selectService: (slug) => set({ selectedServiceSlug: slug }),
}));
