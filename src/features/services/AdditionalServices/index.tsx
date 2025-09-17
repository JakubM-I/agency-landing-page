import SectionTitle from "../../../components/SectionTitle";
import type { SectionAdditionalServiceProps } from "../../../components/types/interfaces";

const AdditionalServices: React.FC<SectionAdditionalServiceProps> = ({items, images}) => {
    return (
        <>
            <div className="py-16 sx:py-[67px] bg-[#F5EDE0]">
                <SectionTitle title="Additional Services" styling="mb-8" />
                <div className="flex flex-col sm:flex-row flex-nowrap sm:flex-wrap md:flex-nowrap justify-center items-stretch gap-10 sm:gap-8 px-6">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col justify-start items-center gap-4 sm:flex-[0_1_45%] md:flex-[0_1_26%] p-6 bg-white h-auto rounded-2xl shadow-xl">
                            <img src={images[item.section][item.img]} alt={item.title} className="w-[min(170px,100%)] h-auto aspect-square object-cover rounded-lg" />
                            <div className="flex flex-col justify-start items-cemter h-full">
                                <h3 className="text-lg font-bold text-grey-950 text-center mb-2">{item.title}</h3>
                                <p className="text-preset-10 text-grey-600 text-center text-pretty mb-3">{item.description}</p>
                                <p className="text-preset-10 text-center font-bold text-[#FF6B35] mt-auto mb-0">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default AdditionalServices;