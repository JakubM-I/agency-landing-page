import SectionTitle from "../../../components/SectionTitle";
import type { PackagesProps } from "../../../components/types/interfaces";

const Packages: React.FC<PackagesProps> = ({items}) => {
    return (
        <section className="py-16 sx:py-[67px] bg-[#F7F7F7]" aria-labelledby="packagesSection" >
            <SectionTitle title={items.title} styling="mb-8" id="packagesSection" />
            <p>{items.description}</p>
            {items.packeges.map((packege, index) => (
                <article key={index}>
                    <span>{packege.type}</span>
                    <h3>{packege.title}</h3>
                    <p>{packege.price}</p>
                    <p>{packege.time}</p>
                    <ul>
                        {packege.list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </section>
    )
};

export default Packages;