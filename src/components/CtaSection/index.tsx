import { NavLink } from "react-router";
import SectionTitle from "../SectionTitle";
import type { SectionCtaProps } from "../types/interfaces";

const CtaSection: React.FC<SectionCtaProps> = ({items}) => {
    return (
        <div className="py-16 sx:py-[67px] px-6 md:px-2 full:px-0">
            <div className="p-10 flex flex-col items-center justify-center gap-6 bg-red-400 rounded-2xl">
                <SectionTitle title={items.title} styling="text-white" />
                <p className="text-preset-10 text-center text-white text-pretty mb-2 w-[min(55ch,100%)]">{items.txtLine}</p>
                <NavLink to="/contact" className="bg-white py-2.5 px-3.5 rounded-2xl shadow-lg text-red-400 uppercase text-preset-8 font-bold text-center transition duration-450 easy-in-out hover:-translate-y-1">
                    {items.btnText}
                </NavLink>
            </div>
        </div>
    )
};

export default CtaSection;