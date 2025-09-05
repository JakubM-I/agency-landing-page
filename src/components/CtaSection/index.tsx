import { NavLink } from "react-router";
import SectionTitle from "../SectionTitle";
import type { CtaSectionProps } from "../types/interfaces";

const CtaSection: React.FC<CtaSectionProps> = ({title, txtLine, btnText}) => {
    return (
        <div className="py-16 sx:py-[67px] bg-red-400 rounded-2xl">
            <SectionTitle title={title} styling="mb-8" />
            <p className="text-preset-10 text-center text-white text-pretty mb-2">{txtLine}</p>
            <NavLink to="/contact" className="bg-white py-2.5 px-3.5 rounded-2xl shadow-lg text-red-400">
                {btnText} 
            </NavLink>
        </div>
    )
};

export default CtaSection;