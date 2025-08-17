import BottomGrid from "./BottomGrid";
import GridSection from "../../components/GridSection";
import HeroSection from "../../components/HeroSection";
import Testimonials from "./Testimonials";
import headerDesktopBg from "../../assets/desktop/image-header.jpg";
import headerMobileBg from "../../assets/mobile/image-header.jpg"
import headerArrow from "../../assets/icons/icon-arrow-down.svg";

const HomePage: React.FC = () => {
    const headerTitle = "We are creatives"
    return (
        <>
            <HeroSection headerDesktopBg={headerDesktopBg} headerMobileBg={headerMobileBg} headerTitle={headerTitle} headerArrow={headerArrow}  />
            <GridSection />
            <Testimonials />
            <BottomGrid />
        </>
    )

}

export default HomePage;