import HeroSection from "../../components/HeroSection";
import { useLoaderData } from "react-router";
import {images} from "../../components/graphics/graphics.tsx";  
import CtaSection from "../../components/CtaSection/index.tsx";
import StatisticsSection from "./Statistics/index.tsx";
import FeaturedProject from "./FeaturedProject/index.tsx";
import Projects from "./Projects/index.tsx";
import ProjectsMenu from "./ProjectsMenu/index.tsx";
import Testimonials from "./Testimonials/index.tsx";

const ProjectsPage: React.FC = () => {
      const content = useLoaderData();

    return (
        <>
            <HeroSection
                items={content.projectsPage.heroSection} 
                images={images.projectsPage} 
            />
            <ProjectsMenu 
                items={content.projectsPage.projectsSection} 
            />
            <FeaturedProject 
                items={content.projectsPage.projectsSection} 
                images={images.projectsPage} 
            />
            <Projects
                items={content.projectsPage.projectsSection} 
                images={images.projectsPage} 
            />
            <StatisticsSection items={content.projectsPage.statisticsSection} />
            <Testimonials />
            <CtaSection items={content.projectsPage.ctaSection} />
        </>
    )
};

export default ProjectsPage;