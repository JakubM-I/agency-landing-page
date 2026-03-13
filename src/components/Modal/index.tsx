import { useStore } from "../../store";
import ContactForm from "../Forms/contactForms";
import DmarketingForms from "../Forms/dmarketingForms";
import ProjectsForm from "../Forms/projectsForms";
import ServicesForm from "../Forms/servicesForms";
import TransformBrandForm from "../Forms/transformBrandFroms";
import { MdClose } from "react-icons/md";

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
            <div onClick={(e) => e.stopPropagation()} className=" bg-white rounded-xl relative overflow-hidden w-[min(550px,100%)] h-[90%] max-h-fit overflow-y-auto">
                {/* <div className="w-100"> */}
                    <button onClick={onClickCloseModal} className="block absolute top-1.5 right-1.5 cursor-pointer"><MdClose /></button>
                    {/* </div> */}
                {formContent()}
            </div>
        </div>
    )
};

export default Modal;