import transformImg from "../../assets/desktop/image-transform.jpg"
import audienceImg from "../../assets/desktop/image-stand-out.jpg"
import graphicImg from "../../assets/desktop/image-graphic-design.jpg"
import photographyImg from "../../assets/desktop/image-photography.jpg"

const GridSection: React.FC = () => {
    return (
        <div>
            <div className="flex flex-nowrap justify-center items-center">
                <div className="w-1/2 flex justify-center items-center bg-white">
                    <div className="flex flex-col justify-center items-start w-fit max-w-[445px]">
                        <h2 className="text-preset-3 text-center text-grey-950">Transform your brand</h2>
                        <p className="text-preset-10 text-left text-grey-550">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                        <a href="#" className="text-preset-8 uppercase text-grey-950 text-left">Learn more</a>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={transformImg} alt="" />
                </div>
            </div>
            <div className="flex flex-nowrap justify-center items-center">
                <div className="w-1/2">
                    <img src={audienceImg} alt="" />
                </div>
                <div className="w-1/2 flex justify-center items-center bg-white">
                    <div className="flex flex-col justify-center items-start w-fit max-w-[445px]">
                        <h2 className="text-preset-3 text-center text-grey-950">Stand out to the right audience</h2>
                        <p className="text-preset-10 text-left text-grey-550">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
                        <a href="#" className="text-preset-8 uppercase text-grey-950 text-left">Learn more</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-nowrap justify-center items-center">
                <div className="w-1/2">
                    <img src={graphicImg} alt="" />
                </div>
                <div className="w-1/2">
                    <img src={photographyImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default GridSection;