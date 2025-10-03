import type { SectionStatisticsProps } from "../../../components/types/interfaces";

const StatisticsSection: React.FC<SectionStatisticsProps> = ({items}) => {
    return (
        <div className="py-16 sx:py-[67px] px-6 md:px-2 full:px-0">
            <div className="p-10 flex items-start justify-center gap-6 bg-[#3DCFD3] rounded-2xl">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-[0_0_150px] flex-col items-center justify-start">
                        <h2 className="text-white section-title mb-2">{item.title}</h2>
                        <p className="text-preset-10 text-center uppercase text-white text-pretty mb-2">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default StatisticsSection;