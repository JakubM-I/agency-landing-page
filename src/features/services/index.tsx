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
            <AdditionalServices />
            <CreativeProcess />
            <CtaSection 
                title="Ready to Get Started?"
                txtLine="Let's discuss how we can help transform your brand and achieve your creative goals. Get in touch for a free consultation."
                btnText="Start your project"
            />
        </>
    )
};

export default ServicesPage;