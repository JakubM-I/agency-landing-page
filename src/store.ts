import { create } from "zustand";

interface Store {
    modalOpen: boolean;
    toggleModalOpen: (modalOpen: boolean) => void;
};

export const useStore = create<Store>((set) => ({
    modalOpen: false,
    toggleModalOpen: () => set((state) => ({ modalOpen: !state.modalOpen })),
}));