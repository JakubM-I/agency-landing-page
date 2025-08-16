import SectionTitle from "../../../components/SectionTitle";
import team from "../../../assets/team/our-team.png";

const OurTeam: React.FC = () => {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-0">
                <div className="w-full md:w-1/2 flex flex-nowrap justify-center items-center">
                    <div className="flex flex-col flex-nowrap justify-center items-center w-[min(445px,100%)] px-6 py-16 sx:py-[67px]" >
                        <SectionTitle title="Our Team" />
                        <p className="text-preset-10 text-left text-balance text-grey-550 mb-3">Behind every great project is a team of talented individuals who bring diverse skills, perspectives, and passion to the table. Our designers, strategists, and project managers work collaboratively to ensure your vision comes to life.</p>
                        <p className="text-preset-10 text-left text-balance text-grey-550">From senior art directors with decades of experience to fresh graduates bringing new energy and ideas, we've built a culture of continuous learning and creative exploration.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 sx:h-[600px]">
                    <picture>
                        <source srcSet={team} type="image/png" />
                        <img src={team} alt="Our team" className="w-full h-full object-cover" />
                    </picture>
                </div>
            </div>
            <div className="py-8 md:py-14">

            </div>
        </>
    )
}

export default OurTeam;