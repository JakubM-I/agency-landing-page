import GridPicture from "../../../components/GridPicture";
import GridTextCell from "../../../components/GridTextCell";
import type { SectionGridProps } from "../../../components/types/interfaces";

const ServicesGrid: React.FC<SectionGridProps> = ({items, images}) => {

    return (
        <>
            {items.map((item, index) => (
            <div key={index} className={`flex ${ index % 2 === 0 ? "flex-row" : "flex-row-reverse"} flex-wrap-reverse md:flex-nowrap justify-center items-center`}>
                <GridTextCell styling="bg-white">
                    <div className="flex flex-col justify-center items-start gap-6 sx:gap-8 w-fit max-w-[445px]">
                        <h2 className="grid-title text-center text-grey-950">{item.title}</h2>
                        <p className="text-preset-10 text-left text-grey-550">{item.description}</p>
                        <ul>
                            {item.list?.map((listItem, i) => (
                                <li key={i} className="text-preset-10 text-grey-550 before:content-['✓'] before:text-yellow-500 before:me-2">{listItem}</li>
                         ))}
                        </ul>
                        <a href={item.link} className={`relative text-preset-8 uppercase text-grey-950 text-left z-[2] inline-block grid-link ${index % 2 === 0 ? "grid-link--yellow" : "grid-link--red"}`}>Learn more</a>
                    </div>
                </GridTextCell>
                <GridPicture
                    desktopImg={item.section !== undefined && item.img !== undefined ? images[item.section][item.img] : undefined}
                    mobileImg={item.section !== undefined && item.img !== undefined ? images[item.section][item.img] : undefined}
                />
            </div>
            ))}
        </>
    )
}

export default ServicesGrid;