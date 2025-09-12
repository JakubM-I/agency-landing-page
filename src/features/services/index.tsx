import HeroSection from "../../components/HeroSection";
// import headerDesktopBg from "../../assets/desktop/services-header.jpg";
import SectionIntro from "../../components/TextSection";
import ServicesGrid from "./ServicesGrid";
import AdditionalServices from "./AdditionalServices";
import CreativeProcess from "./Process";
import CtaSection from "../../components/CtaSection";
import { useLoaderData } from "react-router";
// import {servicesImages as images} from "../../components/graphics/graphicServices.tsx";
import {images} from "../../components/graphics/graphics.tsx";  


const ServicesPage: React.FC = () => {
    const content = useLoaderData();
    // const items = content.servicesPage.serviceGrid;
    // const headerTitle = "Services";
    // const headerSubtitle = "From brand identity to digital experiences, we offer comprehensive creative solutions that drive results";
    // const heroTextColor = "text-blue-950"
    const sectionIntroTitle = "What We Do Best";
    const txtLine1 = "Our expertise spans across multiple disciplines, allowing us to provide integrated solutions that address every aspect of your brand's visual and digital presence. We don't just create beautiful designs – we craft strategic solutions that connect with your audience and achieve your business goals.";


    return (
        <>
            <HeroSection 
                items={content.servicesPage.heroSection} 
                images={images.servicesPage} 
            />
            {/* <HeroSection 
                headerDesktopBg={headerDesktopBg} 
                headerMobileBg={headerDesktopBg} 
                headerTitle={headerTitle} 
                headerSubtitle={headerSubtitle} 
                heroTextColor={heroTextColor} 
            /> */}
            <SectionIntro 
                title={sectionIntroTitle} 
                txtLine1={txtLine1} 
            />
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