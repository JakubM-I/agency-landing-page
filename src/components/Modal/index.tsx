import { useStore } from "../../store";

const Modal = () => {
    const openModal = useStore((state) => state.toggleModalOpen);

    const closeModal = (e: React.SyntheticEvent) => {
        e.stopPropagation();
        openModal();
    }

    return (
    <div 
        onClick={closeModal}
        className="fixed z-[5] top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
        <div onClick={(e) => e.stopPropagation()} className="p-5 bg-white">
            <p>Modal</p>
        </div>
    </div>
)
};

export default Modal;