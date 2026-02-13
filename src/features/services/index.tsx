import HeroSection from "../../components/HeroSection";
import SectionIntro from "../../components/TextSection";
import ServicesGrid from "./ServicesGrid";
import AdditionalServices from "./AdditionalServices";
import CreativeProcess from "./Process";
import CtaSection from "../../components/CtaSection";
import { useLoaderData } from "react-router";
import {images} from "../../components/graphics/graphics.tsx";  
import { useStore } from "../../store.ts";
import Modal from "../../components/Modal";
import ServicesForm from "../../components/Forms/servicesForms.tsx";



const ServicesPage: React.FC = () => {
    const content = useLoaderData();
    const isModalOpen = useStore((state) => state.modalOpen);

    return (
        <>
            <HeroSection 
                items={content.servicesPage.heroSection} 
                images={images.servicesPage} 
            />
            <SectionIntro items={content.servicesPage.introSection} />
            <ServicesGrid items={content.servicesPage.serviceGrid} images={images.servicesPage} />
            <AdditionalServices items={content.servicesPage.additionalServices} images={images.servicesPage}/>
            <CreativeProcess items={content.servicesPage.creativeProcess} images={images.servicesPage}/>
            <CtaSection 
                items={content.servicesPage.ctaSection}
            />
            {isModalOpen && 
                (<Modal>
                    <ServicesForm />
                </Modal>
                )}
        </>
    )
};

export default ServicesPage; 