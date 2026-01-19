import SectionTitle from "../SectionTitle";
import type { ServicesProps } from "../types/interfaces";

const Services: React.FC<ServicesProps> = ({ items, images }) => {

    return (
        <section className="py-16 sx:py-[67px] bg-[#F7F7F7]">
            <SectionTitle title={items.title} styling="mb-8" />
            <div className="flex flex-col sm:flex-row flex-nowrap sm:flex-wrap justify-center items-stretch gap-10 sm:gap-8 px-6">
                {items.services.map((item, index) => (
                    <article key={index} className="flex flex-col flex-nowrap justify-start items-center gap-5 flex-[0_1_45%] lg:flex-[0_1_30%] p-6 bg-white h-auto rounded-2xl shadow-xl">
                        <img src={images[items.section][item.img]} alt={item.title} className="w-[min(130px,100%)] h-auto aspect-square object-cover rounded-full" />
                        <h3 className="text-preset-5 font-bold text-grey-950 text-center">{item.title}</h3>
                        <div className="text-preset-10 text-grey-600 text-center text-pretty ">{item.description}</div>
                        <ul className="w-full">
                            {item.list.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-preset-10 text-grey-550 before:content-['✓'] before:text-[#ffa62b] before:me-2"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    )
};

export default Services;