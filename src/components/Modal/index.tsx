import { useStore } from "../../store";

const Modal = ({children}: {children: React.ReactNode}) => {
    const closeModal = useStore((state) => state.closeModal);

    const onClickCloseModal = (e: React.SyntheticEvent) => {
        e.stopPropagation();
        closeModal();
    }

    return (
    <div 
        onClick={onClickCloseModal}
        className="fixed z-[5] top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
        <div onClick={(e) => e.stopPropagation()} className="p-5 bg-white">
           {children}
        </div>
    </div>
)
};

export default Modal;