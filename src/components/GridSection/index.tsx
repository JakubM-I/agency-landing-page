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
                <div className="w-1/2 grid">
                    <img src={graphicImg} alt="" className="col-[1_/_-1] row-[1_/_-1] z-[1]"/>
                    <div className="text-green-600 py-14 col-[1_/_-1] row-[1_/_-1] z-[2] content-end justify-self-center max-w-[339px] w-full">
                        <h2 className="text-preset-5 text-center mb-[32px]">Graphic Design</h2>
                        <p className="text-preset-11 text-center">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                    </div>
                </div>
                <div className="w-1/2 grid">
                    <img src={photographyImg} alt="" className="col-[1_/_-1] row-[1_/_-1] z-[1]" />
                    <div className="text-green-600 py-14 col-[1_/_-1] row-[1_/_-1] z-[2] content-end justify-self-center max-w-[339px] w-full">
                        <h2 className="text-preset-5 text-center mb-[32px]">Photography</h2>
                        <p className="text-preset-11 text-center">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GridSection;