
import Hero from "../Hero";

interface HeroSectionProps {
headerDesktopBg: string; 
headerMobileBg: string;
headerTitle: string; 
headerSubtitle?: string | undefined; 
headerArrow?: string | undefined;
}

const HeroSection: React.FC<HeroSectionProps> = ({headerDesktopBg, headerMobileBg, headerTitle, headerSubtitle, headerArrow }) => {
    return (
        <div className="relative w-full h-[482px] sx:h-[706px] bg-[#3ebfff]">
            <picture>
                <source srcSet={headerDesktopBg} type="image/jpg" media="(375px < width)" />
                <source srcSet={headerMobileBg} type="image/jpg" media="(width <= 375px)" />
                <img src={headerDesktopBg} className={`h-full w-full object-cover object-bottom`} alt="header background" />
            </picture>
            <Hero  headerTitle={headerTitle} headerSubtitle={headerSubtitle} headerArrow={headerArrow} />
        </div>
    )
}

export default HeroSection;

// ${isSticky ? "h-full" : "h-[calc(100%-56px)] sx:h-[calc(100%-72px)] md:h-[calc(100%-93px)]"}