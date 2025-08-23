import HeroSection from "../../components/HeroSection";
import headerDesktopBg from "../../assets/desktop/aboutus-header.jpg";
import headerMobileBg from "../../assets/mobile/aboutus-header.jpg"
import Values from "./Values";
import History from "./History";
import OurTeam from "./OurTeam";

const AboutPage: React.FC = () => {
    const headerTitle = "About us";
    const headerSubtitle = "Passionate creatives dedicated to transforming brands through innovative design and strategic thinking";

    return (
        <>
            <HeroSection headerDesktopBg={headerDesktopBg} headerMobileBg={headerMobileBg} headerTitle={headerTitle} headerSubtitle={headerSubtitle} />
            <History />
            <Values />
            <OurTeam />
        </>

    )
}

export default AboutPage;

// background: linear-gradient(90deg, rgba(29, 179, 238, 1) 34%, rgba(1, 165, 233, 1) 96%);