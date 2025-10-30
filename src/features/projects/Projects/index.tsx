import type { ProjectProps } from "../../../components/types/interfaces";

const Projects: React.FC<ProjectProps> = ({items, images}) => {
    const projectsItem = items.filter(item => item.featured !== true);
    if (!projectsItem) {
        return null; // or some fallback UI
    }
return (
    <div>
        
    </div>
);
}

export default Projects;