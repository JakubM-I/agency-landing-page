import HeroSection from "../../components/HeroSection";
import { useLoaderData } from "react-router";
import {images} from "../../components/graphics/graphics.tsx";  
import CtaSection from "../../components/CtaSection/index.tsx";
import StatisticsSection from "./Statistics/index.tsx";
import FeaturedProject from "./FeaturedProject/index.tsx";

const ProjectsPage: React.FC = () => {
      const content = useLoaderData();

    return (
        <>
            <HeroSection
                items={content.projectsPage.heroSection} 
                images={images.projectsPage} 
            />
            <FeaturedProject 
                items={content.projectsPage.projectsSection} 
                images={images.projectsPage} 
            />
            <StatisticsSection items={content.projectsPage.statisticsSection} />
            <CtaSection items={content.projectsPage.ctaSection} />
        </>
    )
};

export default ProjectsPage;