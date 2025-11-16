import { useLoaderData } from "react-router"
import HeroSection from "../../components/HeroSection";
import {images} from "../../components/graphics/graphics.tsx";

const DigitalMarketing: React.FC = () => {
    const content = useLoaderData();

    return (
        <>
            <HeroSection
                items={content.dmarketingPage.heroSection}
                images={images.dmarketingPage}
            />
        </>
    )

}

export default DigitalMarketing