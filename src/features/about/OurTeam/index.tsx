import SectionTitle from "../../../components/SectionTitle";
import team from "../../../assets/team/our-team.png";
import GridPicture from "../../../components/GridPicture";
import GridTextCell from "../../../components/GridTextCell";
import type { SectionTeamProps } from "../../../components/types/interfaces";


const OurTeam: React.FC<SectionTeamProps> = ({items, images}) => {

    return (
        <>
            <div className="mt-16 sx:mt-[67px] flex flex-col-reverse md:flex-row">
                <GridTextCell>
                    <div className="flex flex-col flex-nowrap justify-center items-start w-[min(445px,100%)]" >
                        <SectionTitle title="Our Team" styling="mb-8" />
                        <p className="text-preset-10 text-left text-pretty text-grey-550 mb-3">Behind every great project is a team of talented individuals who bring diverse skills, perspectives, and passion to the table. Our designers, strategists, and project managers work collaboratively to ensure your vision comes to life.</p>
                        <p className="text-preset-10 text-left text-pretty text-grey-550">From senior art directors with decades of experience to fresh graduates bringing new energy and ideas, we've built a culture of continuous learning and creative exploration.</p>
                    </div>
                </GridTextCell>
                <GridPicture desktopImg={team} mobileImg={team} />
            </div>
            <div className="py-16 sx:py-[67px]">
                <div className="flex flex-col sm:flex-row flex-nowrap sm:flex-wrap md:flex-nowrap justify-center items-start gap-10 sm:gap-8 px-6">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col justify-start items-center gap-4 sm:flex-[0_1_45%] md:flex-[0_1_22%]">
                        <img src={images[item.section][item.img]} alt={item.name} className="w-[min(200px,100%)] h-auto aspect-square object-cover rounded-lg" />
                        <div className="flex flex-col justify-start items-cemter">
                            <h3 className="text-lg font-bold text-grey-950 text-center">{item.name}</h3>
                            <p className="text-preset-10 text-grey-600 text-center">{item.position}</p>
                            <p className="text-preset-10 text-grey-600 text-center text-pretty mt-2">{item.description}</p>
                        </div>
                    </div>))}
                </div>
            </div>
        </>
    )
}

export default OurTeam;