

interface HeroProps {
    headerTitle: string; 
    headerSubtitle?: string | undefined ;
    headerArrow?: string | undefined; 
}

const Hero: React.FC<HeroProps> = ({headerTitle, headerSubtitle, headerArrow}) => {
    return (
        <div className="absolute hero-top-position left-0 w-full flex flex-col items-center gap-12 sx:gap-[72px] md:gap-24">
            <h1 className="text-hero-responsive  text-white uppercase text-center md:max-w-full">{headerTitle}</h1>
           {headerArrow && (<img src={headerArrow} alt="arrow" className="hero-arrow-height" />)}
           {headerSubtitle && (<h2>{headerSubtitle}</h2>)}
        </div>
    )
}
//We are creatives
export default Hero;