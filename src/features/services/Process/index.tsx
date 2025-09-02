import SectionTitle from "../../../components/SectionTitle";
import discoveryImg from "../../../assets/graphics/discovery.png";
import strategyImg from "../../../assets/graphics/strategy.png";
import designImg from "../../../assets/graphics/design.png";
import deliveryImg from "../../../assets/graphics/delivery.png";

const CreativeProcess: React.FC = () => { 
    const values = [
   {
      id: 1,
      title: "Discovery",
      description: "We learn about your business, goals, and challenges through in-depth research and consultation.",
      graphic: discoveryImg
   },
      {
      id: 2,
      title: "Strategy",
      description: "We develop a creative strategy that aligns with your objectives and resonates with your audience.",
      graphic: strategyImg
   },
      {
      id: 3,
      title: "Design",
      description: "Our team brings the strategy to life through innovative design solutions and creative execution.",
      graphic: designImg
   },
         {
      id: 4,
      title: "Delivery",
      description: "We deliver polished final products with ongoing support to ensure successful implementation.",
      graphic: deliveryImg
   }

    ]

    return (
      <div className="py-16 sx:py-[67px] bg-[#F7F7F7]">
         <SectionTitle title="Our Creative Process" styling="mb-8" />
         <div className="flex flex-col md:flex-row gap-9 flex-nowrap justify-center items-stretch px-6 md:px-0">
            {values.map((value) => (
            <div key={value.id} className="flex flex-col items-center justify-start gap-3.5 md:flex-[0_1_350px] p-6 bg-white h-auto rounded-2xl shadow-xl">
               <picture className="w-30"> 
                  <source srcSet={value.graphic} />
                  <img src={value.graphic} alt={value.title} />
               </picture>
               <h3 className="text-preset-7 text-grey-950">{value.title} </h3>
               <p className="text-preset-10 text-grey-600 text-center text-balance">{value.description}</p>
            </div>
            ))}
         </div>
      </div>
    )
};

export default CreativeProcess;