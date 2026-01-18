import SectionTitle from "../../../components/SectionTitle";
import type { DevelopmentProcessProps } from "../../../components/types/interfaces";

const DevelopmentProcess: React.FC<DevelopmentProcessProps> = ({items}) => {

    return (
        <section className="pt-16 sx:pt-[67px] px-6 md:px-2 full:px-0" aria-labelledby="caseStudy">
            <SectionTitle title={items.title} styling="mb-8 text-center" />

        </section>
    )
}

export default DevelopmentProcess;