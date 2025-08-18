import SectionTitle from "../../../components/SectionTitle";
import team from "../../../assets/team/our-team.png";
import GridPicture from "../../../components/GridPicture";
import GridTextCell from "../../../components/GridTextCell";
import emilyImg from "../../../assets/team/emily.jpg";
import marcusImg from "../../../assets/team/marcus.jpg";
import sofiaImg from "../../../assets/team/sofia.jpg";
import davidImg from "../../../assets/team/david.jpg";

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

            </div>
        </>
    )
}

export default OurTeam;