import emilly from "../../../assets/clients/image-emily.jpg";
import thomas from "../../../assets/clients/image-thomas.jpg";
import jennie from "../../../assets/clients/image-jennie.jpg";
import type { ClientsProps } from "../../../components/types/interfaces";

// interface ClientsProps {
//     name: string;
//     role: string;
//     testimonial: string;
//     photo: string;
// }

const Testimonials: React.FC = () => {

const clients: ClientsProps[] = [
    {
        name: "Emily R.",
        role: "Marketing Director",
        testimonial: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        photo: emilly
    },
    {
        name: "Thomas S.",
        role: "Chief Operating Officer",
        testimonial: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
        photo: thomas
    },
    {
        name: "Jennie F.",
        role: "Business Owner",
        testimonial: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!.",
        photo: jennie
    }
]

    return (
        <div className="w-full bg-white py-14 sx:py-[71px] md:py-[162px] ">
            <div className="testimonials-width">
                <p className="text-center uppercase text-preset-6 text-grey-400 mb-14 sx:mb-20">Client testimonials</p>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 px-[22px]">
                    {clients.map((client, index) => (
                    <div key={index} className="w-full sx:max-w-[600px] md:w-[350px] flex flex-col justify-start items-center gap-8 sx:gap-14">
                        <div className="flex flex-col justify-start items-center">
                            <img src={client.photo} alt={`${client.name} - ${client.role}`} className="w-[72px] h-[72px] rounded-full" />
                        </div>
                        <div className="flex flex-col gap-8 md:gap-[72px] h-full">
                            <p className="text-preset-10 text-center text-grey-600">{client.testimonial}</p>
                            <div className="flex flex-col justify-start items-center gap-2 mt-auto">
                                <p className="text-preset-7 text-grey-950">{client.name}</p>
                                <p className="text-preset-12 text-grey-400">{client.role}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Testimonials;