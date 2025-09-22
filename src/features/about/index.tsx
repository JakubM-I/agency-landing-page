import HeroSection from "../../components/HeroSection";
import Values from "./Values";
import OurTeam from "./OurTeam";
import SectionIntro from "../../components/TextSection";
import { useLoaderData } from "react-router";
import {images} from "../../components/graphics/graphics.tsx";  

const AboutPage: React.FC = () => {
    const content = useLoaderData();

    return (
        <>
            <HeroSection items={content.aboutPage.heroSection} images={images.aboutPage}/>
            <SectionIntro items={content.aboutPage.introSection} />
            <Values items={content.aboutPage.valuesSection} images={images.aboutPage} />
            <OurTeam />
        </>
    )
}

export default AboutPage;

// background: linear-gradient(90deg, rgba(29, 179, 238, 1) 34%, rgba(1, 165, 233, 1) 96%);