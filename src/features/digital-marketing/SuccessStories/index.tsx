import SectionTitle from "../../../components/SectionTitle";
import type { SuccessStoriesProps } from "../../../components/types/interfaces";

const SuccessStories: React.FC<SuccessStoriesProps> = ({items, images}) => {
    return (
        <section className="py-16 sx:py-[67px] bg-[#F7F7F7]" aria-labelledby="successSection" >
             <SectionTitle title="Success Stories" styling="mb-8" id="successSection" />
              <div className="flex flex-col sm:flex-row flex-nowrap sm:flex-wrap justify-center items-stretch gap-10 sm:gap-8 px-6">
                {items.map((item, index) => (
                    <article key={index} className="flex flex-col justify-start items-center" aria-label={`${item.category}: ${item.title}`}>
                        <img src={images[item.section][item.img]} alt={item.title} />
                        <div className="p-3 flex flex-col justify-start items-start gap-4">
                            <span>{item.category}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <dl>
                                {item.effects.map((effect, index) => (
                                    <div key={index}>
                                        <dd>{effect.value}</dd>
                                        <dt>{effect.title}</dt>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </article>
                ))}
              </div>
        </section>
    )
};

export default SuccessStories;