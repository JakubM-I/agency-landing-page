import type { SectionStatisticsProps } from "../../../components/types/interfaces";

const StatisticsSection: React.FC<SectionStatisticsProps> = ({items}) => {
    return (
        <section className="pt-16 sx:pt-[67px] px-6 md:px-2 full:px-0" aria-label="Results in numbers">
            <dl className="px-6 md:px-10 py-14 flex flex-wrap items-start justify-center gap-12 sx:gap-6 lg:gap-12 bg-[#3DCFD3] rounded-2xl">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-[1_0_200px] md:flex-[0_0_145px] flex-col items-center justify-start">
                        <dd className="text-white section-title mb-2">{item.title}</dd>
                        <dt className="text-preset-10 text-center uppercase text-white text-pretty mb-2">{item.description}</dt>
                    </div>
                ))}
            </dl>
        </section>
    )
};

export default StatisticsSection;