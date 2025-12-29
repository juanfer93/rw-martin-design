import { create } from "zustand";

type UIState = {
  mobileNavOpen: boolean;
  leadModalOpen: boolean;
  openMobileNav: () => void;
  closeMobileNav: () => void;
  toggleMobileNav: () => void;

  openLeadModal: () => void;
  closeLeadModal: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  mobileNavOpen: false,
  leadModalOpen: false,

  openMobileNav: () => set({ mobileNavOpen: true }),
  closeMobileNav: () => set({ mobileNavOpen: false }),
  toggleMobileNav: () => set((s) => ({ mobileNavOpen: !s.mobileNavOpen })),

  openLeadModal: () => set({ leadModalOpen: true }),
  closeLeadModal: () => set({ leadModalOpen: false }),
}));
