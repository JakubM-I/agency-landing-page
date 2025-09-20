import HeroSection from "../../components/HeroSection";
import SectionIntro from "../../components/TextSection";
import ServicesGrid from "./ServicesGrid";
import AdditionalServices from "./AdditionalServices";
import CreativeProcess from "./Process";
import CtaSection from "../../components/CtaSection";
import { useLoaderData } from "react-router";
import {images} from "../../components/graphics/graphics.tsx";  


const ServicesPage: React.FC = () => {
    const content = useLoaderData();

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
        </>
    )
};

export default ServicesPage; 