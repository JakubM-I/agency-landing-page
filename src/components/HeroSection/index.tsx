import headerDesktopBg from "../../assets/desktop/image-header.jpg";
import headerMobileBg from "../../assets/mobile/image-header.jpg"
import Hero from "../Hero";

const HeroSection: React.FC = () => {
    return (
        <div className="relative w-full h-[482px] sx:h-[706px] bg-[#3ebfff]">
            <picture>
                <source srcSet={headerDesktopBg} type="image/jpg" media="(375px < width)" />
                <source srcSet={headerMobileBg} type="image/jpg" media="(width <= 375px)" />
                <img src={headerDesktopBg} className={`h-full w-full object-cover object-bottom`} alt="header background" />
            </picture>
            <Hero />
        </div>
    )
}

export default HeroSection;

// ${isSticky ? "h-full" : "h-[calc(100%-56px)] sx:h-[calc(100%-72px)] md:h-[calc(100%-93px)]"}