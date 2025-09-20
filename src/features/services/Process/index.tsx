import SectionTitle from "../../../components/SectionTitle";
import type { SectionCreativeProcessProps } from "../../../components/types/interfaces";

const CreativeProcess: React.FC<SectionCreativeProcessProps> = ({items, images}) => {
    return (
        <div className="py-16 sx:py-[67px] bg-[#F7F7F7]">
            <SectionTitle title="Our Creative Process" styling="mb-8" />
            <div className="flex flex-col sm:flex-row gap-9 md:gap-0 flex-nowrap sm:flex-wrap justify-center md:justify-evenly items-stretch px-6 md:px-0">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-start gap-3.5 sm:flex-[0_1_45%] md:flex-[0_1_20%] p-6 bg-white h-auto rounded-2xl shadow-xl">
                        <picture className="w-30">
                            <source srcSet={images[item.section][item.img]} />
                            <img src={images[item.section][item.img]} alt={item.title} />
                        </picture>
                        <h3 className="text-preset-7 text-grey-950">{item.title} </h3>
                        <p className="text-preset-10 text-grey-600 text-center text-balance">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default CreativeProcess;