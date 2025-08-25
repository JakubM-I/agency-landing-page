import type { HeroProps } from "../types/interfaces";

const Hero: React.FC<HeroProps> = ({headerTitle, headerSubtitle, headerArrow}) => {
    return (
        <div className={`absolute hero-top-position left-0 w-full flex flex-col items-center ${headerArrow ? "gap-12 sx:gap-[72px] md:gap-24" : "gap-6 md:gap-4"}`}>
            <h1 className="text-hero-responsive  text-white uppercase text-center md:max-w-full">{headerTitle}</h1>
           {headerArrow && (<img src={headerArrow} alt="arrow" className="hero-arrow-height" />)}
           {headerSubtitle && (<h2 className="text-subTitle-responsive text-white px-2 text-pretty text-center">{headerSubtitle}</h2>)}
        </div>
    )
}

export default Hero;