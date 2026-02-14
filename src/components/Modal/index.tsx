import { useStore } from "../../store";
import ProjectsForm from "../Forms/projectsForms";
import ServicesForm from "../Forms/servicesForms";

const Modal = () => {
    const closeModal = useStore((state) => state.closeModal);
    const { modalType } = useStore((state) => state);

    const onClickCloseModal = (e: React.SyntheticEvent) => {
        e.stopPropagation();
        closeModal();
    }

    const formContent = () => {
        switch(modalType) {
            case "projects":
                return <ProjectsForm />;
            case "services":
                return <ServicesForm />;
            // case "contact":
            //     return "Contact Form";
            // case "dmarketing":
            //     return "Digital Marketing Form";
            // case "transformBrand":
            //     return "Transform Brand Form";
            default:
                return null;
        }
    }

    return (
    <div 
        onClick={onClickCloseModal}
        className="fixed z-[5] top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
        <div onClick={(e) => e.stopPropagation()} className="p-5 bg-white">
           {formContent()}
        </div>
    </div>
)
};

export default Modal;