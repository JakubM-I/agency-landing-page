import type { SectionStatisticsProps } from "../../../components/types/interfaces";

const StatisticsSection: React.FC<SectionStatisticsProps> = ({items}) => {
    return (
        <div className="py-16 sx:py-[67px] px-6 md:px-2 full:px-0">
            <div className="p-10 flex flex-col items-center justify-center gap-6 bg-r[#3DCFD3] rounded-2xl">
                <h2 className="text-white text-3xl font-bold mb-2">Project Statistics</h2>
                <p className="text-preset-10 text-center text-white text-pretty mb-2 w-[min(55ch,100%)]">Over 500 successful projects completed with a 95% client satisfaction rate.</p>
            </div>
        </div>
    )
};

export default StatisticsSection;