import HeroSection from "../../components/HeroSection";
// import headerDesktopBg from "../../assets/desktop/aboutus-header.jpg";
// import headerMobileBg from "../../assets/mobile/aboutus-header.jpg"
import Values from "./Values";
import OurTeam from "./OurTeam";
import SectionIntro from "../../components/TextSection";
import { useLoaderData } from "react-router";
import {images} from "../../components/graphics/graphics.tsx";  

const AboutPage: React.FC = () => {
    const content = useLoaderData();
    // const headerTitle = "About us";
    // const headerSubtitle = "Passionate creatives dedicated to transforming brands through innovative design and strategic thinking";
    // const sectionIntroTitle = "Our Creative Journey"
    // const txtLine1 = "Founded in 2018, Sunnyside emerged from a simple belief: that exceptional design has the power to transform businesses and connect people in meaningful ways."
    // const txtLine2 = "What started as a small team of passionate designers has grown into a full-service creative agency, but our core mission remains unchanged - to help brands shine brighter and stand out in an increasingly crowded marketplace."
    // const txtLine3 = "We combine strategic thinking with creative excellence, ensuring every project not only looks amazing but delivers real business results for our clients."


    return (
        <>
            {/* <HeroSection headerDesktopBg={headerDesktopBg} headerMobileBg={headerMobileBg} headerTitle={headerTitle} headerSubtitle={headerSubtitle} /> */}
            <HeroSection items={content.aboutPage.heroSection} images={images.aboutPage}/>

            {/* <SectionIntro title={sectionIntroTitle} txtLine1={txtLine1} txtLine2={txtLine2} txtLine3={txtLine3} /> */}
            <SectionIntro items={content.aboutPage.introSection} />
            <Values />
            <OurTeam />
        </>

    )
}

export default AboutPage;

// background: linear-gradient(90deg, rgba(29, 179, 238, 1) 34%, rgba(1, 165, 233, 1) 96%);