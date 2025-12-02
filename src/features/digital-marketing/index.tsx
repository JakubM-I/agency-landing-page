import { useLoaderData } from "react-router"
import HeroSection from "../../components/HeroSection";
import { images } from "../../components/graphics/graphics.tsx";
import SectionIntro from "../../components/TextSection/index.tsx";
import CtaSection from "../../components/CtaSection/index.tsx";
import OurApproach from "./OurApproach/index.tsx";
import MarketingServices from "./MarketingServices/index.tsx";
import MarketingStatistics from "./Statistics/index.tsx";
import SuccessStories from "./SuccessStories/index.tsx";
import Packages from "./Packages/index.tsx";

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
            <MarketingServices 
                items={content.dmarketingPage.marketingServicesSection}
                images={images.dmarketingPage}
            />
            <OurApproach
                items={content.dmarketingPage.ourApproachSection}
                images={images.dmarketingPage} />
            <MarketingStatistics items={content.dmarketingPage.statisticsSection} />
            <SuccessStories 
                items={content.dmarketingPage.successSection}
                images={images.dmarketingPage}
            />
            <Packages items={content.dmarketingPage.packagesSection}/>
            <CtaSection items={content.dmarketingPage.ctaSection} />
        </>
    )

}

export default DigitalMarketing;