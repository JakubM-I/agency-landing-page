import Hero from "../Hero";
import type { SectionHeroProps } from "../types/interfaces";

// interface HeroSectionProps {
// headerDesktopBg: string; 
// headerMobileBg: string;
// headerTitle: string; 
// headerSubtitle?: string | undefined; 
// headerArrow?: string | undefined;
// }

const HeroSection: React.FC<SectionHeroProps> = ({items, images}) => {
    return (
        <section className="relative w-full h-[482px] sx:h-[706px] bg-[#3ebfff]">
            <picture>
                <source srcSet={images[items.section][items.desktopImg]} type="image/jpg" media="(375px < width)" />
                <source srcSet={images[items.section][items.mobileImg]} type="image/jpg" media="(width <= 375px)" />
                <img src={images[items.section][items.desktopImg]} className={`h-full w-full object-cover object-bottom`} alt="header background" />
            </picture>
            <Hero  headerTitle={items.title} headerSubtitle={items.subtitle} headerArrow={items.section && items.arrow ? images[items.section][items.arrow] : undefined} heroTextColor={items.textColor} />
        </section>
    )
}

export default HeroSection;

// ${isSticky ? "h-full" : "h-[calc(100%-56px)] sx:h-[calc(100%-72px)] md:h-[calc(100%-93px)]"}