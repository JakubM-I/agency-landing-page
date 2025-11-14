import BottomGrid from "./BottomGrid";
import GridSection from "../../components/GridSection";
import HeroSection from "../../components/HeroSection";
import Testimonials from "./Testimonials";
import { useLoaderData } from "react-router";
import {images} from "../../components/graphics/graphics.tsx";  

const HomePage: React.FC = () => {
    const content = useLoaderData();

    return (
        <>
            {/* <HeroSection headerDesktopBg={headerDesktopBg} headerMobileBg={headerMobileBg} headerTitle={headerTitle} headerArrow={headerArrow}  /> */}
            <HeroSection items={content.homePage.heroSection} images={images.homePage} />

            <GridSection />
            <Testimonials />
            <BottomGrid />
        </>
    )

}

export default HomePage;