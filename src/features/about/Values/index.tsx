import SectionTitle from "../../../components/SectionTitle";
import creativity from "../../../assets/graphics/creativity.png";
import innovation from "../../../assets/graphics/innovation.png";
import excellence from "../../../assets/graphics/excellence.png"

const Values: React.FC = () => {
const values = [
   {
      id: 1,
      title: "Creativity First ",
      description: "We believe in pushing boundaries and exploring new possibilities. Every project is an opportunity to create something unique and memorable that captures the essence of your brand.",
      graphic: creativity
   },
      {
      id: 2,
      title: "Innovation",
      description: "Staying ahead of trends and embracing new technologies allows us to deliver cutting-edge solutions that keep our clients competitive in their markets.",
      graphic: innovation
   },
      {
      id: 3,
      title: "Excellence",
      description: "We're perfectionists at heart. Every detail matters, from the first concept sketch to the final delivery. We don't settle for good when great is possible.",
      graphic: excellence
   }
]


   return (
      <div className="py-16 sx:py-[67px] bg-[#F7F7F7]">
         <SectionTitle title="What Drives Us" styling="mb-8" />
         <div className="flex flex-col md:flex-row gap-9 flex-nowrap justify-center items-stretch px-6 md:px-0">
            {values.map((value) => (
            <div key={value.id} className="flex flex-col items-center justify-start gap-3.5 md:flex-[0_1_25%] p-6 bg-white h-auto rounded-2xl shadow-xl">
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
}

export default Values;