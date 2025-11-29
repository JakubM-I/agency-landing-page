import SectionTitle from "../../../components/SectionTitle";
import type { SectionStatisticsProps } from "../../../components/types/interfaces";

const MarketingStatistics: React.FC<SectionStatisticsProps> = ({items}) => {
    return (
          <div className="pt-16 sx:pt-[67px] px-6 md:px-2 full:px-0">
            <div className="px-6 md:px-10 py-14 flex flex-wrap items-start justify-center gap-12 sx:gap-6 lg:gap-12 bg-[#4ECDC4] rounded-2xl">
                <SectionTitle title="Results That Speak for Themselves" styling="mb-8 text-white" />
                {items.map((item, index) => (
                    <div key={index} className="flex flex-[1_0_200px] md:flex-[0_0_145px] flex-col items-center justify-start">
                        <h2 className="text-white section-title mb-2">{item.title}</h2>
                        <p className="text-preset-10 text-center uppercase text-white text-pretty mb-2">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MarketingStatistics;