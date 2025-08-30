import GridPicture from "../../../components/GridPicture";
import GridTextCell from "../../../components/GridTextCell";
import identityImg from "../../../assets/desktop/brand-identity.jpg"

const ServicesGrid: React.FC = () => {
    return (
        <>
            <div className="flex flex-wrap-reverse md:flex-nowrap justify-center items-center">
                <GridTextCell styling="bg-white">
                    <div className="flex flex-col justify-center items-start gap-6 sx:gap-8 w-fit max-w-[445px]">
                        <h2 className="grid-title text-center text-grey-950">Brand Identity & Strategy</h2>
                        <p className="text-preset-10 text-left text-grey-550">Transform your business with a compelling brand identity that resonates with your target audience. We dive deep into your company's values, mission, and goals to create a visual identity that truly represents who you are.</p>
                        <ul>
                            <li>Logo design and brand guidelines</li>
                            <li>Color palette and typography systems</li>
                            <li>Brand strategy and positioning</li>
                            <li>Marketing collateral design</li>
                            <li>Brand voice and messaging</li>
                        </ul>
                        <a href="#" className="relative text-preset-8 uppercase text-grey-950 text-left z-[2] inline-block grid-link grid-link--yellow">Learn more</a>
                    </div>
                </GridTextCell>
                <GridPicture desktopImg={identityImg} mobileImg={identityImg} />
            </div>
        </>

    )
}

export default ServicesGrid;