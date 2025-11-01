import { NavLink } from "react-router";
import type { ProjectProps } from "../../../components/types/interfaces";

const FeaturedProject: React.FC<ProjectProps> = ({ items, images }) => {
    const featuredItem = items.find(item => item.featured === true);
    if (!featuredItem) {
        return null; // or some fallback UI
    }

    return (
        <div className="py-16 sx:py-[67px] px-6 md:px-2 full:px-0">

            <div className="flex flex-wrap md:flex-nowrap p-4 w-[min(1200px,100%)] mx-auto gap-10 shadow-md">
                <div className="flex-[1_1_55%] md:flex-[]0_0_50%]">
                    <img className="w-full" src={images[featuredItem.section][featuredItem.img]} alt={featuredItem.title} />
                </div>
                <div className="flex-[1_1_55%] md:flex-[]0_0_50%] h-full flex flex-col justify-start items-start gap-6">
                    <div className="text-preset-12 text-red-400 uppercase">{featuredItem.category}</div>
                    <h2 className="grid-title text-grey-950">{featuredItem.title}</h2>
                    <p className="text-preset-10 text-left text-grey-550">{featuredItem.description}</p>
                    <ul className="flex flex-wrap gap-2 justify-start items-center">
                        {featuredItem.tags?.map((tag, index) => (
                            <li key={index} className="flex-[0_0_auto] text-preset-12 font-light leading-none text-white bg-grey-400 p-2 rounded-xl">{tag}</li>
                        ))}
                    </ul>
                    <NavLink to="" className="relative text-preset-8 uppercase text-grey-950 text-left z-[2] inline-block grid-link grid-link--yellow mt-auto mb-0">
                        View Full Project
                    </NavLink>
                </div>
            </div>
        </div >
    )
}

export default FeaturedProject;