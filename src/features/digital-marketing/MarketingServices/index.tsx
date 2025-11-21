import SectionTitle from "../../../components/SectionTitle";
import type { MarketingServicesProps } from "../../../components/types/interfaces";

const MarketingServices: React.FC<MarketingServicesProps> = ({items, images}) => {

    return (
        <>
            <div className="py-16 sx:py-[67px] bg-[#F7F7F7]">
                <SectionTitle title="Our Digital Marketing Services" styling="mb-8" />
                 <div className="flex flex-col sm:flex-row flex-nowrap sm:flex-wrap md:flex-nowrap justify-center items-stretch gap-10 sm:gap-8 px-6"> 
                    {items.map((item, index) => (
                        <div key={index}>
                            <img src={images[item.section][item.img]} alt={item.title} className="w-[min(170px,100%)] h-auto aspect-square object-cover rounded-lg" />
                            <h3>{item.title}</h3>
                            <div>{item.description}</div>
                            <ul className="">
                                {item.list.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        ))}
                 </div>
            </div>
        </>
    )
};

export default MarketingServices;