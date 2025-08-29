import SectionTitle from "../SectionTitle";
import type { SectionIntroProps } from "../types/interfaces";

const SectionIntro: React.FC<SectionIntroProps> = ({title, txtLine1, txtLine2, txtLine3}) => {
    return (
        <div className="py-16 sx:py-[87px]">
            <SectionTitle title={title} styling="mb-8" />
            <div className="w-[min(1000px,100%)] px-6 mx-auto">
                <p className="text-preset-10 text-center text-grey-550 text-pretty mb-2">{txtLine1}</p>
                {txtLine2 && <p className="text-preset-10 text-center text-grey-550 text-pretty mb-2">{txtLine2}</p>}
                {txtLine3 && <p className="text-preset-10 text-center text-grey-550 text-pretty">{txtLine3}</p>}
            </div>
        </div>
    )};

    export default SectionIntro;