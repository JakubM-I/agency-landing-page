import { create } from "zustand";

type ModalType = "projects" | "services" | "contact" | "dmarketing" | "transformBrand" | null;

interface Store {
    modalOpen: boolean;
    modalType: ModalType;
    openModal: (type: ModalType) => void;
    closeModal: () => void;
};

export const useStore = create<Store>((set) => ({
    modalOpen: false,
    modalType: null,
    openModal: (type) => {
        set(() => ({ modalOpen: true , modalType: type }));
    },
    closeModal: () => {
        set(() => ({ modalOpen: false, modalType: null }));
    },
})); 