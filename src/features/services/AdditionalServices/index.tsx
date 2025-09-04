import GridTextCell from "../../../components/GridTextCell";
import SectionTitle from "../../../components/SectionTitle";
import developmentImg from "../../../assets/graphics/web-development.png";
import consultingImg from "../../../assets/graphics/consulting.png";
import videoImg from "../../../assets/graphics/video-production.png";

const AdditionalServices: React.FC = () => {
    const services = [
        {
            title: "Web Development",
            description: "Custom websites and digital experiences that perform as beautifully as they look.",
            iconImg: developmentImg,
            price: "Starting from $2,500"
        },
        {
            title: "Creative Consulting",
            description: "Strategic guidance to align your creative vision with business objectives.",
            iconImg: consultingImg,
            price: "$150/hour"
        },
        {
            title: "Video Production",
            description: "Compelling video content that brings your brand story to life and engages audiences.",
            iconImg: videoImg,
            price: "Starting from $3,000"
        }
    ]
    return (
        <>
            <div className="py-16 sx:py-[67px] bg-[#F5EDE0]">
                <SectionTitle title="Additional Services" styling="mb-8" />
                <div className="flex flex-col sm:flex-row flex-nowrap sm:flex-wrap md:flex-nowrap justify-center items-stretch gap-10 sm:gap-8 px-6">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col justify-start items-center gap-4 sm:flex-[0_1_45%] md:flex-[0_1_22%] p-6 bg-white h-auto rounded-2xl shadow-xl">
                            <img src={service.iconImg} alt={service.title} className="w-[min(170px,100%)] h-auto aspect-square object-cover rounded-lg" />
                            <div className="flex flex-col justify-start items-cemter h-full">
                                <h3 className="text-lg font-bold text-grey-950 text-center mb-2">{service.title}</h3>
                                <p className="text-preset-10 text-grey-600 text-center text-pretty mb-3">{service.description}</p>
                                <p className="text-preset-10 text-center font-bold text-[#FF6B35] mt-auto mb-0">{service.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}
export default AdditionalServices;