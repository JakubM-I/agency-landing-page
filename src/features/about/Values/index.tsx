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
      <div className="py-8">
         <SectionTitle title="What Drives Us" />
         <div className="flex gap-9 flex-nowrap justify-center items-center">
            {values.map((value) => (
            <div key={value.id} className="flex flex-col items-center justify-start gap-3.5 flex-[0_1_350px]">
               <picture className="w-30"> 
                  <source srcSet={value.graphic} />
                  <img src={value.graphic} alt="" />
               </picture>
               <h3>{value.title} </h3>
               <p>{value.description}</p>
            </div>
            ))}
         </div>
      </div>
   )
}

export default Values;