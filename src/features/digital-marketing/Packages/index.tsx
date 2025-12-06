import SectionTitle from "../../../components/SectionTitle";
import type { PackagesProps } from "../../../components/types/interfaces";

const Packages: React.FC<PackagesProps> = ({items}) => {
    return (
        <section className="py-16 sx:py-[67px] bg-[#F7F7F7]" aria-labelledby="packagesSection" >
            <SectionTitle title={items.title} styling="mb-8" id="packagesSection" />
            <p className="text-preset-10 text-left text-grey-550">{items.description}</p>
            {items.packages.map((packageItem, index) => (
                <article key={index} aria-label={`${packageItem.type}: ${packageItem.title}`}>
                    <span className="text-preset-12 text-red-400 uppercase">{packageItem.type}</span>
                    <h3 className="text-preset-5 text-grey-950">{packageItem.title}</h3>
                    <p className="text-preset-4 text-grey-950">{packageItem.price}</p>
                    <p className="text-preset-7 text-grey-950">{packageItem.time}</p>
                    <ul>
                        {packageItem.list.map((item, index) => (
                            <li key={index} className="text-preset-10 text-grey-550 before:content-['✓'] before:text-[#ffa62b] before:me-2">{item}</li>
                        ))}
                    </ul>
                    <button>{packageItem.button}</button>
                </article>
            ))}
        </section>
    )
};

export default Packages;