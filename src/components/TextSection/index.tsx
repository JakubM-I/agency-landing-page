import SectionTitle from "../SectionTitle";
import type { SectionIntroProps } from "../types/interfaces";

const SectionIntro: React.FC<SectionIntroProps> = ({items}) => {
    return (
        <div className="py-16 sx:py-[87px]">
            <SectionTitle title={items.title} styling="mb-8" />
            <div className="w-[min(1000px,100%)] px-6 mx-auto">
                <p className="text-preset-10 text-center text-grey-550 text-pretty mb-2">{items.line1}</p>
                {items.line2 && <p className="text-preset-10 text-center text-grey-550 text-pretty mb-2">{items.line2}</p>}
                {items.line3 && <p className="text-preset-10 text-center text-grey-550 text-pretty">{items.line3}</p>}
            </div>
        </div>
    )};

    export default SectionIntro;