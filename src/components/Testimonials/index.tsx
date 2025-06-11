import emilly from "../../assets/clients/image-emily.jpg";
import thomas from "../../assets/clients/image-thomas.jpg";
import jennie from "../../assets/clients/image-jennie.jpg";

const Testimonials: React.FC = () => {
    return (
        <div>
            <p className="text-center uppercase text-preset-6 text-grey-400">Client testimonials</p>
            <div className="flex justify-center items-start gap-32">
                <div className="w-[350px] flex flex-col justify-start items-center">
                    <img src={emilly} alt="Emily R. - Marketing Director" />
                    <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                    <p>Emily R.</p>
                    <p>Marketing Director</p>
                </div>
                <div className="w-[350px] flex flex-col justify-start items-center">
                    <img src={thomas} alt="Thomas S. - Chief Operating Officer" />
                    <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                    <p>Thomas S.</p>
                    <p>Chief Operating Officer</p>
                </div>
                <div className="w-[350px] flex flex-col justify-start items-center">
                    <img src={jennie} alt="" />
                    <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!.</p>
                    <p>Jennie F.</p>
                    <p>Business Owner</p>
                </div>
            </div>
        </div>
    )
};

export default Testimonials;