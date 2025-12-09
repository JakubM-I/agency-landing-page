import SectionTitle from "../../../components/SectionTitle";
import type { PackagesProps } from "../../../components/types/interfaces";

const Packages: React.FC<PackagesProps> = ({ items }) => {
    return (
        <section className="py-16 sx:py-[67px] bg-[#F5EDE0]" aria-labelledby="packagesSection" >
            <SectionTitle title={items.title} styling="mb-8" id="packagesSection" />
            <div className="w-[min(1000px,100%)] px-6 mx-auto">
                <p className="text-preset-10 text-center text-grey-550 text-pretty mb-9">{items.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row flex-nowrap sm:flex-wrap justify-center items-stretch gap-10 sm:gap-8 px-6">
                {items.packages.map((packageItem, index) => (
                    <article key={index} aria-label={`${packageItem.type}: ${packageItem.title}`}
                        className="flex flex-col justify-start items-center gap-4 flex-[0_1_45%] lg:flex-[0_1_30%] bg-white p-7 h-auto rounded-2xl shadow-xl overflow-hidden">
                        <span className="text-preset-12 text-red-400 uppercase">{packageItem.type}</span>
                        <h3 className="text-preset-5 text-grey-950 text-center">{packageItem.title}</h3>
                        <p className="text-preset-3 text-grey-950">{packageItem.price}</p>
                        <p className="text-preset-10 text-grey-950">{packageItem.time}</p>
                        <ul>
                            {packageItem.list.map((item, index) => (
                                <li key={index} className="text-preset-10 text-grey-550 before:content-['✓'] before:text-[#ffa62b] before:me-2">{item}</li>
                            ))}
                        </ul>
                        <button className="my-[auto_0] bg-red-400 py-2.5 px-3.5 rounded-2xl shadow-lg text-white uppercase text-preset-8 font-bold text-center transition duration-450 easy-in-out hover:-translate-y-1">{packageItem.button}</button>
                    </article>
                ))}
            </div>
        </section>
    )
};

export default Packages;
