import { create } from "zustand";

interface Store {
    modalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};

export const useStore = create<Store>((set) => ({
    modalOpen: false,
    openModal: () => {
        set(() => ({ modalOpen: true }));
    },
    closeModal: () => {
        set(() => ({ modalOpen: false }));
    },
})); 