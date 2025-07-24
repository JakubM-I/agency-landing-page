import BottomGrid from "../../components/BottomGrid";
import GridSection from "../../components/GridSection";
import HeroSection from "../../components/HeroSection";
import Testimonials from "../../components/Testimonials";

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <GridSection />
            <Testimonials />
            <BottomGrid />
        </>
    )

}

export default HomePage;