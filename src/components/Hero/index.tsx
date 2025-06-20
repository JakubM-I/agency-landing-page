import headerArrow from "../../assets/icons/icon-arrow-down.svg";

const Hero: React.FC = () => {
    return (
        <div className="absolute hero-top-position left-0 w-full flex flex-col items-center gap-12 sx:gap-[72px] md:gap-24">
            <h1 className="text-hero-responsive  text-white uppercase text-center md:max-w-full">We are creatives</h1>
            <img src={headerArrow} alt="arrow" className="hero-arrow-height" />
        </div>
    )
}

export default Hero;