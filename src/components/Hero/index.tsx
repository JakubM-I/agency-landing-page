import headerArrow from "../../assets/icons/icon-arrow-down.svg";

const Hero: React.FC = () => {
    return (
        <div className="absolute top-1/4 left-0 w-full flex flex-col items-center gap-24">
            <h1 className="text-preset-1 text-white uppercase text-center">We are creatives</h1>
            <img src={headerArrow} alt="arrow" />
        </div>
    )
}

export default Hero;