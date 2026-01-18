import SectionTitle from "../../../components/SectionTitle";
import type { DevelopmentProcessProps } from "../../../components/types/interfaces";

const DevelopmentProcess: React.FC<DevelopmentProcessProps> = ({ items }) => {

    return (
        <section className="pt-16 sx:pt-[67px] px-6 md:px-2 full:px-0" aria-labelledby="developmentProcess">
            <SectionTitle title={items.title} styling="mb-8" id="developmentProcess" />
            <ol className="list-none w-[min(800px,100%)] mx-auto">
                {items.steps.map((item, index) => (
                    <li key={index} className={`mb-8 flex items-center gap-7 process-step ${index % 2 === 0 ? "process-step-left ms-6" : "process-step-right me-6"}`}>
                        <div className="p-6 bg-white h-auto rounded-2xl shadow-xl">
                            <h3 className="text-preset-5 font-bold text-grey-950 mb-2">{item.title}</h3>
                            <p className="text-preset-10 text-grey-600">{item.description}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    )
}

export default DevelopmentProcess;