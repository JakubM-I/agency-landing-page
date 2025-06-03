import headerDesktopBg from "../../assets/desktop/image-header.jpg";
import headerMobileBg from "../../assets/mobile/image-header.jpg"
import Hero from "../Hero";
import MenuBar from "../MenuBar";

const Header: React.FC = () => {
    return (
        <header className="w-full relative">
            <picture>
                <source srcSet={headerDesktopBg} type="image/jpg" media="(min-width: 769px)" />
                <source srcSet={headerMobileBg} type="image/jpg" media="(max-width: 768px)" />
                <img src={headerDesktopBg} className="max-h-[800px] h-full w-full object-cover object-bottom" alt="header background" />
            </picture>
            <MenuBar />
            <Hero />
        </header>
    )

}

export default Header;