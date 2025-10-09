import { NavLink } from "react-router";
import type { FeaturedProjectProps } from "../../../components/types/interfaces";

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ items, images }) => {
    const featuredItem = items.find(item => item.featured === true);
    if (!featuredItem) {
        return null; // or some fallback UI
    }

    return (
        <div className="py-16 sx:py-[67px] px-6 md:px-2 full:px-0">

            <div className="flex flex-wrap md:flex-nowrap">
                <div className="flex-[1_1_55%] md:flex-[]0_0_50%]">
                    <img src={images[featuredItem.section][featuredItem.img]} alt={featuredItem.title} />
                </div>
                <div className="flex-[1_1_55%] md:flex-[]0_0_50%]">
                    <div>{featuredItem.category}</div>
                    <h3>{featuredItem.title}</h3>
                    <p>{featuredItem.description}</p>
                    <ul>
                        {featuredItem.tags?.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        ))}

                    </ul>
                    <NavLink to="" className="">
                        View Full Project
                    </NavLink>
                </div>
            </div>
        </div >
    )
}

export default FeaturedProject;