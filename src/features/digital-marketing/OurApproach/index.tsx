import { NavLink } from "react-router";
import GridPicture from "../../../components/GridPicture";
import GridTextCell from "../../../components/GridTextCell";
import SectionTitle from "../../../components/SectionTitle";
import type { OurAproachProps } from "../../../components/types/interfaces";

const OurApproach: React.FC<OurAproachProps> = ({ items, images }) => {

    return (
        <>
            <div className="flex flex-col-reverse md:flex-row">
                <GridTextCell>
                    <div className="flex flex-col flex-nowrap justify-center items-start w-[min(445px,100%)]" >
                        <SectionTitle title={items.title} styling="mb-8" />
                        <p className="text-preset-10 text-left text-pretty text-grey-550 mb-3">{items.line1}</p>
                        <p className="text-preset-10 text-left text-pretty text-grey-550">{items.line2}</p>
                        <ul>
                            {items.list?.map((listItem, i) => (
                                <li key={i} className="text-preset-10 text-grey-550 before:content-['🎯'] before:me-2">{listItem}</li>
                            ))}
                        </ul>
                        <NavLink to={items.link ? items.link : ""} className="relative text-preset-8 uppercase text-grey-950 text-left z-[2] inline-block grid-link grid-link--red">Learn about our process</NavLink>
                    </div>
                </GridTextCell>
                <GridPicture
                    desktopImg={images[items.section][items.img]}
                    mobileImg={images[items.section][items.img]} />
            </div>
        </>


    )
};

export default OurApproach;