import SectionTitle from "../../../components/SectionTitle";
import type { SuccessStoriesProps } from "../../../components/types/interfaces";

const SuccessStories: React.FC<SuccessStoriesProps> = ({items, images}) => {
    return (
        <section className="mt-16 sx:mt-[67px] py-16 sx:py-[67px] bg-[#F7F7F7]" aria-labelledby="successSection" >
             <SectionTitle title="Success Stories" styling="mb-8" id="successSection" />
              <div className="flex flex-col sm:flex-row flex-nowrap sm:flex-wrap justify-center items-stretch gap-10 sm:gap-8 px-6">
                {items.map((item, index) => (
                    <article key={index} className="flex flex-col justify-start items-center gap-2 flex-[0_1_45%] lg:flex-[0_1_30%] bg-white h-auto rounded-2xl shadow-xl overflow-hidden" aria-label={`${item.category}: ${item.title}`}>
                        <img src={images[item.section][item.img]} alt={item.title}  className="w-full"/>
                        <div className="p-7 flex flex-col justify-start items-start gap-4 w-full h-full">
                            <span className="text-preset-12 text-red-400 uppercase">{item.category}</span>
                            <h3 className="text-preset-5 text-grey-950">{item.title}</h3>
                            <p className="text-preset-11 text-left text-grey-550">{item.description}</p>
                            <dl className="flex flex-nowrap justify-between items-start gap-5 w-full max-w-[362px] mx-auto h-[80px] my-[auto_0]">
                                {item.effects.map((effect, index) => (
                                    <div key={index} className="flex flex-col flex-nowrap justify-start items-center gap-1 flex-[1_1_100px]">
                                        <dd className="text-preset-9 text-red-400">{effect.value}</dd>
                                        <dt className="text-preset-12 text-grey-550 text-center">{effect.title}</dt>
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