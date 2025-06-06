import headerDesktopBg from "../../assets/desktop/image-header.jpg";
import headerMobileBg from "../../assets/mobile/image-header.jpg"
import Hero from "../Hero";
import MenuBar from "../MenuBar";

const Header: React.FC = () => {
    return (
        <header className="w-full relative  h-[538px] sx:h-[800px]">
            <picture>
                <source srcSet={headerDesktopBg} type="image/jpg" media="(375px < width)" />
                <source srcSet={headerMobileBg} type="image/jpg" media="(width <= 375px)" />
                <img src={headerDesktopBg} className="h-full w-full object-cover object-bottom" alt="header background" />
            </picture>
            <MenuBar />
            <Hero />
        </header>
    )

}

export default Header;