import { useStore } from "../../store";
import ContactForm from "../Forms/contactForms";
import DmarketingForms from "../Forms/dmarketingForms";
import ProjectsForm from "../Forms/projectsForms";
import ServicesForm from "../Forms/servicesForms";
import TransformBrandForm from "../Forms/transformBrandFroms";

const Modal = () => {
    const closeModal = useStore((state) => state.closeModal);
    const { modalType, modalOpen } = useStore((state) => state);

    const onClickCloseModal = (e: React.SyntheticEvent) => {
        e.stopPropagation();
        closeModal();
    }

    const formContent = () => {
        switch (modalType) {
            case "projects":
                return <ProjectsForm />;
            case "services":
                return <ServicesForm />;
            case "contact":
                return <ContactForm />;
            case "dmarketing":
                return <DmarketingForms />;
            case "transformBrand":
                return <TransformBrandForm />;
            default:
                return null;
        }
    }

    return (
        <div
            onClick={onClickCloseModal}
            className={`fixed z-[5] top-0 left-0 w-full h-full flex items-center justify-center ${modalOpen ? "animation-fade-in" : "animation-fade-out"} ${!modalOpen ? "pointer-events-none" : ""}`}>
            <div onClick={(e) => e.stopPropagation()} className="p-5 bg-white">
                {formContent()}
            </div>
        </div>
    )
};

export default Modal;