import HeroSection from "../../components/HeroSection";
import { useLoaderData } from "react-router";
import {images} from "../../components/graphics/graphics.tsx";  

const ProjectsPage: React.FC = () => {
      const content = useLoaderData();

    return (
        <>
            <HeroSection
                items={content.projectsPage.heroSection} 
                images={images.projectsPage} 
            />
        </>
    )
};

export default ProjectsPage;