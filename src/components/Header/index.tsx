import headerDesktopBg from "../../assets/desktop/image-header.jpg";
import headerMobileBg from "../../assets/mobile/image-header.jpg"
import Hero from "../Hero";
import MenuBar from "../MenuBar";

const Header: React.FC = () => {
    return (
        <header className="w-full relative  h-[538px] sx:h-[800px] bg-[#3ebfff]">
            <MenuBar />
            <picture>
                <source srcSet={headerDesktopBg} type="image/jpg" media="(375px < width)" />
                <source srcSet={headerMobileBg} type="image/jpg" media="(width <= 375px)" />
                <img src={headerDesktopBg} className=" h-[calc(100%-56px)] sx:h-[calc(100%-72px)] md:h-[calc(100%-93px)] w-full object-cover object-bottom" alt="header background" />
            </picture>
            <Hero />
        </header>
    )

}

export default Header;