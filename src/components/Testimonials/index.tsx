import emilly from "../../assets/clients/image-emily.jpg";
import thomas from "../../assets/clients/image-thomas.jpg";
import jennie from "../../assets/clients/image-jennie.jpg";

const Testimonials: React.FC = () => {
    return (
        <div className="w-full bg-white py-14 sx:py-[71px] md:py-[162px] ">
            <div className="testimonials-width">
                <p className="text-center uppercase text-preset-6 text-grey-400 mb-14 sx:mb-20">Client testimonials</p>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 px-[22px]">
                    <div className="w-full sx:max-w-[600px] md:w-[350px] flex flex-col justify-start items-center gap-8 sx:gap-14">
                        <div className="flex flex-col justify-start items-center">
                            <img src={emilly} alt="Emily R. - Marketing Director" className="w-[72px] h-[72px] rounded-full" />
                        </div>
                        <div className="flex flex-col gap-8 md:gap-[72px] h-full">
                            <p className="text-preset-10 text-center text-grey-600">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                            <div className="flex flex-col justify-start items-center gap-2 mt-auto">
                                <p className="text-preset-7 text-grey-950">Emily R.</p>
                                <p className="text-preset-12 text-grey-400">Marketing Director</p>
                            </div>
                        </div>
                    </div>
                    <div className="m-full sx:max-w-[600px] md:w-[350px] flex flex-col justify-start items-center gap-8 sx:gap-14">
                        <div className="flex flex-col justify-start items-center">
                            <img src={thomas} alt="Thomas S. - Chief Operating Officer" className="w-[72px] h-[72px] rounded-full" />
                        </div>
                        <div className="flex flex-col gap-8 md:gap-[72px] h-full">
                            <p className="text-preset-10 text-center text-grey-600">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                            <div className="flex flex-col justify-start items-center gap-2 mt-auto">
                                <p className="text-preset-7 text-grey-950">Thomas S.</p>
                                <p className="text-preset-12 text-grey-400">Chief Operating Officer</p>
                            </div>
                        </div>
                    </div>
                    <div className="m-full sx:max-w-[600px] md:w-[350px] flex flex-col justify-start items-center gap-8 sx:gap-14">
                        <div className="flex flex-col justify-start items-center">
                            <img src={jennie} alt="Jennie F. - Business Owner" className="w-[72px] h-[72px] rounded-full" />
                        </div>
                        <div className="flex flex-col gap-8 md:gap-[72px] h-full">
                            <p className="text-preset-10 text-center text-grey-600">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!.</p>
                            <div className="flex flex-col justify-start items-center gap-2 mt-auto">
                                <p className="text-preset-7 text-grey-950">Jennie F.</p>
                                <p className="text-preset-12 text-grey-400">Business Owner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Testimonials;