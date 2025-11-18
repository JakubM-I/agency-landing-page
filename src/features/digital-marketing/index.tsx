import { useLoaderData } from "react-router"
import HeroSection from "../../components/HeroSection";
import {images} from "../../components/graphics/graphics.tsx";
import SectionIntro from "../../components/TextSection/index.tsx";
import CtaSection from "../../components/CtaSection/index.tsx";

const DigitalMarketing: React.FC = () => {
    const content = useLoaderData();
    console.log(content);

    return (
        <>
            <HeroSection
                items={content.dmarketingPage.heroSection}
                images={images.dmarketingPage}
            />
             <SectionIntro items={content.dmarketingPage.introSection} />
             <CtaSection items={content.dmarketingPage.ctaSection} />
        </>
    )

}

export default DigitalMarketing;