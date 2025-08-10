import HeroSection from "../../components/HeroSection";
import headerDesktopBg from "../../assets/desktop/aboutus-header.jpg";
import headerMobileBg from "../../assets/mobile/aboutus-header.jpg"
import Values from "./Values";
import History from "./History";

const AboutPage: React.FC = () => {
    const headerTitle = "About us";
    const headerSubtitle = "Passionate creatives dedicated to transforming brands through innovative design and strategic thinking";

    return (
        <>
            <HeroSection headerDesktopBg={headerDesktopBg} headerMobileBg={headerMobileBg} headerTitle={headerTitle} headerSubtitle={headerSubtitle} />
            <History />
            <Values />
        </>

    )
}

export default AboutPage;