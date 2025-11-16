import transformImg from "../../assets/desktop/image-transform.jpg"
import transformImgMobile from "../../assets/mobile/image-transform.jpg"
import audienceImg from "../../assets/desktop/image-stand-out.jpg"
import audienceImgMobile from "../../assets/mobile/image-stand-out.jpg"
import graphicImg from "../../assets/desktop/image-graphic-design.jpg"
import graphicImgMobile from "../../assets/mobile/image-graphic-design.jpg"
import photographyImg from "../../assets/desktop/image-photography.jpg"
import photographyImgMobile from "../../assets/mobile/image-photography.jpg"
import GridPicture from "../GridPicture"
import GridTextCell from "../GridTextCell"
import { NavLink } from "react-router"

const GridSection: React.FC = () => {
    return (
        <>
            <div className="flex flex-wrap-reverse md:flex-nowrap justify-center items-center">
                {/* <div className="w-full md:w-1/2 flex justify-center items-center bg-white px-6 py-16 sx:py-[67px]"> */}
                <GridTextCell styling="bg-white">
                    <div className="flex flex-col justify-center items-start gap-6 sx:gap-8 w-fit max-w-[445px]">
                        <h2 className="grid-title text-center text-grey-950">Transform your brand</h2>
                        <p className="text-preset-10 text-left text-grey-550">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                        <a href="#" className="relative text-preset-8 uppercase text-grey-950 text-left z-[2] inline-block grid-link grid-link--yellow">Learn more</a>
                    </div>
                </GridTextCell>
                {/* </div> */}
                <GridPicture desktopImg={transformImg} mobileImg={transformImgMobile} />
                {/* <div className="w-full md:w-1/2 sx:h-[600px]">
                    <picture>
                        <source srcSet={transformImg} type="image/jpg" media="(375px < width)" />
                        <source srcSet={transformImgMobile} type="image/jpg" media="(width <= 375px)" />
                        <img src={transformImg} alt="" className="w-full h-full object-cover" />
                    </picture>
                </div> */}
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center">
                <GridPicture desktopImg={audienceImg} mobileImg={audienceImgMobile} />
                {/* <div className="w-full md:w-1/2 sx:h-[600px]">
                    <picture>
                        <source srcSet={audienceImg} type="image/jpg" media="(375px < width)" />
                        <source srcSet={audienceImgMobile} type="image/jpg" media="(width <= 375px)" />
                        <img src={audienceImg} alt="" className="w-full h-full object-cover" />
                    </picture>
                </div> */}
                {/* <div className="w-full md:w-1/2 flex justify-center items-center bg-white px-6 py-16 sx:py-[67px]"> */}
                <GridTextCell styling="bg-white">
                    <div className="flex flex-col justify-center items-start gap-6 sx:gap-8 w-fit max-w-[445px]">
                        <h2 className="grid-title text-center text-grey-950">Stand out to the right audience</h2>
                        <p className="text-preset-10 text-left text-grey-550">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
                        <NavLink to="/digital-marketing" className="relative text-preset-8 uppercase text-grey-950 text-left z-[2] inline-block grid-link grid-link--red">Learn more</NavLink>
                    </div>
                </GridTextCell>

                {/* </div> */}
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center">
                <div className="w-full md:w-1/2 sx:h-[600px] grid">
                    <picture className="col-[1_/_-1] row-[1_/_-1] z-[1]">
                        <source srcSet={graphicImg} type="image/jpg" media="(375px < width)" />
                        <source srcSet={graphicImgMobile} type="image/jpg" media="(width <= 375px)" />
                        <img src={graphicImg} alt="" className="w-full h-full object-cover" />
                    </picture>
                    <div className="text-green-600 py-14 col-[1_/_-1] row-[1_/_-1] z-[2] content-end justify-self-center max-w-[339px] w-full">
                        <h2 className="text-preset-5 text-center mb-[32px]">Graphic Design</h2>
                        <p className="text-preset-11 text-center">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 sx:h-[600px] grid">
                    <picture className="col-[1_/_-1] row-[1_/_-1] z-[1]">
                        <source srcSet={photographyImg} type="image/jpg" media="(375px < width)" />
                        <source srcSet={photographyImgMobile} type="image/jpg" media="(width <= 375px)" />
                        <img src={photographyImg} alt="" className="w-full h-full object-cover" />
                    </picture>
                    <div className="text-green-600 py-14 col-[1_/_-1] row-[1_/_-1] z-[2] content-end justify-self-center max-w-[339px] w-full">
                        <h2 className="text-preset-5 text-center mb-[32px]">Photography</h2>
                        <p className="text-preset-11 text-center">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GridSection;