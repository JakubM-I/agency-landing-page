import SectionTitle from "../../../components/SectionTitle";
import team from "../../../assets/team/our-team.png";
import GridPicture from "../../../components/GridPicture";
import GridTextCell from "../../../components/GridTextCell";
import emilyImg from "../../../assets/team/emily-johnson.png";
import marcusImg from "../../../assets/team/marcus-chen.png";
import sofiaImg from "../../../assets/team/sofia-rodriguez.png";
import davidImg from "../../../assets/team/david-kim.png";

const OurTeam: React.FC = () => {
const teamMembers = [
  {
    name: "Emily Johnson",
    position: "Creative Director",
    description: "With 12 years of experience in branding and visual identity, Emily leads our creative vision and ensures every project exceeds expectations.",
    image: emilyImg
  },
  {
    name: "Marcus Chen",
    position: "Senior UX Designer",
    description: "Marcus combines user research with innovative design thinking to create digital experiences that truly connect with audiences.",
    image: marcusImg
  },
  {
    name: "Sofia Rodriguez",
    position: "Brand Strategist",
    description: "Sofia helps brands find their unique voice and position in the market through strategic thinking and creative storytelling.",
    image: sofiaImg
  },
  {
    name: "David Kim",
    position: "Motion Designer",
    description: "David brings brands to life through compelling animations and motion graphics that capture attention and tell stories.",
    image: davidImg
  }
];

    return (
        <>
            <div className="flex flex-col-reverse md:flex-row">
                {/* <div className="w-full md:w-1/2 flex flex-nowrap justify-center items-center px-6 py-16 sx:py-[67px]"> */}
                <GridTextCell>
                    <div className="flex flex-col flex-nowrap justify-center items-start w-[min(445px,100%)]" >
                        <SectionTitle title="Our Team" styling="mb-8" />
                        <p className="text-preset-10 text-left text-pretty text-grey-550 mb-3">Behind every great project is a team of talented individuals who bring diverse skills, perspectives, and passion to the table. Our designers, strategists, and project managers work collaboratively to ensure your vision comes to life.</p>
                        <p className="text-preset-10 text-left text-pretty text-grey-550">From senior art directors with decades of experience to fresh graduates bringing new energy and ideas, we've built a culture of continuous learning and creative exploration.</p>
                    </div>
                </GridTextCell>

                {/* </div> */}
                <GridPicture desktopImg={team} mobileImg={team} />
            </div>
            <div className="py-16 sx:py-[67px]">
                <div className="flex flex-col sm:flex-row flex-nowrap sm:flex-wrap md:flex-nowrap justify-center items-start gap-10 sm:gap-8 px-6">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col justify-start items-center gap-4 sm:flex-[0_1_45%] md:flex-[0_1_22%]">
                        <img src={member.image} alt={member.name} className="w-[min(300px, 100%)] h-auto aspect-square object-cover rounded-lg" />
                        <div className="flex flex-col justify-start items-cemter">
                            <h3 className="text-lg font-bold text-grey-950 text-center">{member.name}</h3>
                            <p className="text-preset-10 text-grey-600 text-center">{member.position}</p>
                            <p className="text-preset-10 text-grey-600 text-center text-pretty mt-2">{member.description}</p>
                        </div>
                    </div>))}
                </div>
            </div>
        </>
    )
}

export default OurTeam;