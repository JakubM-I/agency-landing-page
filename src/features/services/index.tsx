import HeroSection from "../../components/HeroSection";
import headerDesktopBg from "../../assets/desktop/services-header.jpg";


const ServicesPage: React.FC = () => {
const headerTitle = "Services";
const headerSubtitle = "From brand identity to digital experiences, we offer comprehensive creative solutions that drive results";

    return (
        <>
        <HeroSection headerDesktopBg={headerDesktopBg} headerMobileBg={headerDesktopBg} headerTitle={headerTitle} headerSubtitle={headerSubtitle} />
        
        </>
    )
};

export default ServicesPage;