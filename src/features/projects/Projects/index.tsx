import type { ProjectProps } from "../../../components/types/interfaces";

const Projects: React.FC<ProjectProps> = ({ items, images }) => {
    const projectsItem = items.filter(item => item.featured !== true);
    if (!projectsItem) {
        return null; // or some fallback UI
    }
    return (
        <div className="py-16 sx:py-[67px] px-6 md:px-2 full:px-0">
            <div className="grid grid-cols-2 p-4 w-[min(1200px,100%)] mx-auto gap-10">
                {projectsItem.map((item, index) => (
                    <div key={index}>
                        <img className="w-full" src={images[item.section][item.img]} alt={item.title} />
                        <div>
                            <div className="text-preset-12 text-red-400 uppercase">{item.category}</div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <ul className="flex flex-wrap gap-2 justify-start items-center">
                                {item.tags?.map((tag, index) => (
                                    <li key={index} className="flex-[0_0_auto] text-preset-12 font-light leading-none text-white bg-grey-400 p-2 rounded-xl">{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Projects;