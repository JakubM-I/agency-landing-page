import { NavLink } from "react-router";
import type { CaseStudyProps } from "../../../components/types/interfaces";

const CaseStudy: React.FC<CaseStudyProps> = ({items, images}) => {
    return (
        <div className="pt-16 sx:pt-[67px] px-6 md:px-2 full:px-0">

            <div className="flex flex-wrap md:flex-nowrap p-4 w-[min(1200px,100%)] mx-auto gap-10 shadow-md">
                <div className="flex-[1_1_55%] md:flex-[]0_0_50%]">
                    {images ? (<img className="w-full" src={images[items.section][items.img]} alt={items.title} />) : null}
                </div>
                <div className="flex-[1_1_55%] md:flex-[]0_0_50%] h-full flex flex-col justify-start items-start gap-6">
                    <div className="text-preset-12 text-red-400 uppercase">{items.category}</div>
                    <h2 className="grid-title text-grey-950">{items.title}</h2>
                    <p className="text-preset-10 text-left text-grey-550">{items.description}</p>
                    <ul className="flex flex-wrap gap-2 justify-start items-center">
                        {items.results.map((item, index) => (
                            <li key={index} className="">
                                {item.value}
                                {item.title}
                            </li>
                        ))}
                    </ul>
                    <NavLink to="" className="relative text-preset-8 uppercase text-grey-950 text-left z-[2] inline-block grid-link grid-link--yellow mt-auto mb-0">
                        View Full Project
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default CaseStudy;