import { create } from "zustand";

type SidebarStore = {
  openSidebar: boolean;
  setOpenSidebar: (open: boolean) => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
  openSidebar: false,

  setOpenSidebar: (open) => set({ openSidebar: open }),
}));