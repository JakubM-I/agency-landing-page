import SectionTitle from "../../../components/SectionTitle";
import type { DevelopmentProcessProps } from "../../../components/types/interfaces";

const DevelopmentProcess: React.FC<DevelopmentProcessProps> = ({ items }) => {

    return (
        <section className="pt-16 sx:pt-[67px] px-6 full:px-0" aria-labelledby="developmentProcess">
            <SectionTitle title={items.title} styling="mb-8" id="developmentProcess" />
            <ol className="list-none w-[min(800px,100%)] mx-auto">
                {items.steps.map((item, index) => (
                    <li key={index} className={`mb-8 flex items-start md:items-center gap-5 md:gap-7 process-step ${index % 2 === 0 ? "process-step-left" : "process-step-right flex-row-reverse md:flex-row" }`}>
                        <div className="p-6 bg-white h-auto rounded-2xl shadow-xl">
                            <h3 className="text-preset-7 sl:text-preset-6 md:text-preset-5 font-bold text-grey-950 mb-2">{item.title}</h3>
                            <p className="text-preset-11 md:text-preset-10 text-grey-600">{item.description}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    )
}

export default DevelopmentProcess;