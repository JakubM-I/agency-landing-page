import { useSearchParams } from "react-router";
import type { ProjectItemProps, ProjectProps } from "../../../components/types/interfaces";
import { useEffect, useMemo, useState } from "react";

const Projects: React.FC<ProjectProps> = ({ items, images }) => {
    const [searchParams] = useSearchParams();
    // const [displayItems, setDisplayItems] = useState<ProjectItemProps[]>([])
    // const projectsItem = items.filter(item => item.featured !== true);
    // if (!projectsItem) {
    //     return null;
    // }

    const filterQuerry = searchParams.get("f");

    // useEffect(() => {
    //     if(!filterQuerry){
    //         setDisplayItems(projectsItem);
    //     } else {
    //         setDisplayItems(projectsItem.filter(item => item.searchCategory === filterQuerry));
    //     }    
    // },[filterQuerry])


    const displayItems = useMemo(() => {
           const projectsItems = items.filter(item => item.featured !== true);

           if(!filterQuerry) {
            return projectsItems;
           }

           return projectsItems.filter(item => item.searchCategory === filterQuerry);
    }, [items, filterQuerry])

    return (
        <div className="py-16 sx:py-[67px] px-5 md:px-2 full:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 p-4 w-[min(1200px,100%)] mx-auto gap-10">
                {displayItems.map((item, index) => (
                    <div key={index} className="overflow-hidden rounded-xl shadow-md">
                        {images ? <img className="w-full" src={images[item.section][item.img]} alt={item.title} /> : null}
                        <div className="px-7 pt-7 pb-9 flex flex-col justify-start items-start gap-4">
                            <div className="text-preset-12 text-red-400 uppercase">{item.category}</div>
                            <h3 className="text-preset-5 text-grey-950">{item.title}</h3>
                            <p className="text-preset-11 text-left text-grey-550">{item.description}</p>
                            <ul className="flex flex-wrap gap-2 justify-start items-center">
                                {item.tags?.map((tag, index) => (
                                    <li key={index} className="flex-[0_0_auto] text-preset-12 font-light leading-none text-white bg-grey-400 px-4 py-2 rounded-xl">{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;