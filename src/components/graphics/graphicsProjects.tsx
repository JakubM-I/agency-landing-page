import headerDesktopBg from  "../../assets/desktop/projects-header.jpg";
import techFlowImg from "../../assets/desktop/tech-flow.jpg"
import projectPlaceholderImg from "../../assets/desktop/project-placeholder.jpg"
import michealImg from "../../assets/clients/image-michael.jpg";
import sarahImg from "../../assets/clients/image-sarah.jpg";
import jamesImg from "../../assets/clients/image-james.jpg";

export const projectsImages = {
    heroSection:{
        desktop: headerDesktopBg,
        mobile: headerDesktopBg
    },
    projectsSection:{
        techFlow: techFlowImg,
        organicHarvest:projectPlaceholderImg,
        fitTracker: projectPlaceholderImg,
        urbanLifestyle: projectPlaceholderImg,
        artisanBakery: projectPlaceholderImg,
        metropolitanLaw: projectPlaceholderImg,
        animalReport: projectPlaceholderImg
    },
    testimonialsSection: {
        michael: michealImg,
        sarah: sarahImg,
        james: jamesImg
    }
}