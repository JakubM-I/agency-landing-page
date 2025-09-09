import GridPicture from "../../../components/GridPicture";
import GridTextCell from "../../../components/GridTextCell";
import identityImg from "../../../assets/desktop/brand-identity.jpg";
import marketingImg from "../../../assets/desktop/marketing.jpg";
import designImg from "../../../assets/desktop/graphic-design.jpg";
import photographyImg from "../../../assets/desktop/photography.jpg";
import type { SectionGridProps } from "../../../components/types/interfaces";

const ServicesGrid: React.FC<SectionGridProps> = ({items, images}) => {
    console.log(items);
    console.log(images);
    console.log(images.serviceGrid.identity);

    return (
        <>
            {items.map((item, index) => (
            <div key={index} className="flex flex-wrap-reverse md:flex-nowrap justify-center items-center">
                <GridTextCell styling="bg-white">
                    <div className="flex flex-col justify-center items-start gap-6 sx:gap-8 w-fit max-w-[445px]">
                        <h2 className="grid-title text-center text-grey-950">{item.title}</h2>
                        <p className="text-preset-10 text-left text-grey-550">{item.description}</p>
                        <ul>
                            {item.list?.map((listItem, i) => (
                                <li key={i} className="text-preset-10 text-grey-550 before:content-['✓'] before:text-yellow-500 before:me-2">{listItem}</li>
                         ))}
                        </ul>
                        <a href={item.link} className="relative text-preset-8 uppercase text-grey-950 text-left z-[2] inline-block grid-link grid-link--yellow">Learn more</a>
                    </div>
                </GridTextCell>
                <GridPicture
                // desktopImg={`${images}.${item.section}.${item.img}`}
                    desktopImg={item.section !== undefined && item.img !== undefined ? images[item.section][item.img] : undefined}
                    mobileImg={item.section !== undefined && item.img !== undefined ? images[item.section][item.img] : undefined}
                />
            </div>
            ))}



            <div className="flex flex-wrap-reverse md:flex-nowrap justify-center items-center">
                <GridTextCell styling="bg-white">
                    <div className="flex flex-col justify-center items-start gap-6 sx:gap-8 w-fit max-w-[445px]">
                        <h2 className="grid-title text-center text-grey-950">Brand Identity & Strategy</h2>
                        <p className="text-preset-10 text-left text-grey-550">Transform your business with a compelling brand identity that resonates with your target audience. We dive deep into your company's values, mission, and goals to create a visual identity that truly represents who you are.</p>
                        <ul>
                            <li className="text-preset-10 text-grey-550 before:content-['✓'] before:text-yellow-500 before:me-2">Logo design and brand guidelines</li>
                            <li className="text-preset-10 text-grey-550 before:content-['✓'] before:text-yellow-500 before:me-2">Color palette and typography systems</li>
                            <li className="text-preset-10 text-grey-550 before:content-['✓'] before:text-yellow-500 before:me-2">Brand strategy and positioning</li>
                            <li className="text-preset-10 text-grey-550 before:content-['✓'] before:text-yellow-500 before:me-2">Marketing collateral design</li>
                            <li className="text-preset-10 text-grey-550 before:content-['✓'] before:text-yellow-500 before:me-2">Brand voice and messaging</li>
                        </ul>
                        <a href="#" className="relative text-preset-8 uppercase text-grey-950 text-left z-[2] inline-block grid-link grid-link--yellow">Learn more</a>
                    </div>
                </GridTextCell>
                <GridPicture desktopImg={images.serviceGrid.identity} mobileImg={identityImg} />
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center">
                <GridPicture desktopImg={marketingImg} mobileImg={marketingImg} />
                <GridTextCell styling="bg-white">
                    <div className="flex flex-col justify-center items-start gap-6 sx:gap-8 w-fit max-w-[445px]">
                        <h2 className="grid-title text-center text-grey-950">Digital Marketing"</h2>
                        <p className="text-preset-10 text-left text-grey-550">Stand out to the right audience with strategic digital marketing campaigns that amplify your brand message and drive meaningful engagement. We combine creative storytelling with data-driven insights to deliver results that matter.</p>
                        <ul>
                            <li className="text-preset-10 text-grey-550 before:content-['✓'] before:text-yellow-500 before:me-2">Social media strategy and content creation</li>
                            <li className="text-preset-10 text-grey-550 before:content-['✓'] before:text-yellow-500 before:me-2">SEO and search engine marketing</li>
                            <li className="text-preset-10 text-grey-550 before:content-['✓'] before:text-yellow-500 before:me-2">Email marketing campaigns</li>
                            <li className="text-preset-10 text-grey-550 before:content-['✓'] before:text-yellow-500 before:me-2">Content marketing and copywriting</li>
                            <li className="text-preset-10 text-grey-550 before:content-['✓'] before:text-yellow-500 before:me-2">Analytics and performance tracking</li>
                        </ul>
                        <a href="#" className="relative text-preset-8 uppercase text-grey-950 text-left z-[2] inline-block grid-link grid-link--red">Learn more</a>
                    </div>
                </GridTextCell>
            </div>
            <div className="flex flex-wrap-reverse md:flex-nowrap justify-center items-center">
                <GridTextCell styling="bg-white">
                    <div className="flex flex-col justify-center items-start gap-6 sx:gap-8 w-fit max-w-[445px]">
                        <h2 className="grid-title text-center text-grey-950">Graphic Design</h2>
                        <p className="text-preset-10 text-left text-grey-550">Bring your ideas to life with stunning visual communications that capture attention and deliver your message effectively. Our design solutions are both beautiful and functional, ensuring maximum impact across all mediums.</p>
                        <ul>
                            <li>Print design and layout</li>
                            <li>Digital graphics and social media</li>
                            <li>Packaging and product design</li>
                            <li>Infographics and data visualization</li>
                            <li>Exhibition and trade show materials</li>
                        </ul>
                        <a href="#" className="relative text-preset-8 uppercase text-grey-950 text-left z-[2] inline-block grid-link grid-link--yellow">Learn more</a>
                    </div>
                </GridTextCell>
                <GridPicture desktopImg={designImg} mobileImg={designImg} />
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center">
                <GridPicture desktopImg={photographyImg} mobileImg={photographyImg} />
                <GridTextCell styling="bg-white">
                    <div className="flex flex-col justify-center items-start gap-6 sx:gap-8 w-fit max-w-[445px]">
                        <h2 className="grid-title text-center text-grey-950">Photography & Visual Content"</h2>
                        <p className="text-preset-10 text-left text-grey-550">Elevate your brand with professional photography that tells your story. From product shots to lifestyle imagery, we create visual content that engages your audience and showcases your brand in the best light.</p>
                        <ul>
                            <li>Product and commercial photography</li>
                            <li>Corporate and team photography</li>
                            <li>Lifestyle and brand photography</li>
                            <li>Photo editing and retouching</li>
                            <li>Creative direction and styling</li>
                        </ul>
                        <a href="#" className="relative text-preset-8 uppercase text-grey-950 text-left z-[2] inline-block grid-link grid-link--red">Learn more</a>
                    </div>
                </GridTextCell>
            </div>
        </>
    )
}

export default ServicesGrid;