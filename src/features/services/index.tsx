import HeroSection from "../../components/HeroSection";
import headerDesktopBg from "../../assets/desktop/services-header.jpg";
import SectionIntro from "../../components/TextSection";
import ServicesGrid from "./ServicesGrid";


const ServicesPage: React.FC = () => {
    const headerTitle = "Services";
    const headerSubtitle = "From brand identity to digital experiences, we offer comprehensive creative solutions that drive results";
    const heroTextColor = "text-blue-950"
    const sectionIntroTitle = "What We Do Best";
    const txtLine1 = "Our expertise spans across multiple disciplines, allowing us to provide integrated solutions that address every aspect of your brand's visual and digital presence. We don't just create beautiful designs – we craft strategic solutions that connect with your audience and achieve your business goals.";


    return (
        <>
            <HeroSection headerDesktopBg={headerDesktopBg} headerMobileBg={headerDesktopBg} headerTitle={headerTitle} headerSubtitle={headerSubtitle} heroTextColor={heroTextColor} />
            <SectionIntro title={sectionIntroTitle} txtLine1={txtLine1} />
            <ServicesGrid />
        </>
    )
};

export default ServicesPage;