import headerDesktopBg from "../../assets/desktop/image-header.jpg";
import headerMobileBg from "../../assets/mobile/image-header.jpg"
import MenuBar from "../MenuBar";

const Header: React.FC = () => {
    return (
        <header className="w-full relative">
            <picture>
                <source srcSet={headerDesktopBg} type="image/jpg" media="(min-width: 750px)" />
                <source srcSet={headerMobileBg} type="image/jpg" media="(max-width: 749px)" />
                <img src={headerDesktopBg} alt="header background" />
            </picture>
            <MenuBar />
        </header>
    )

}

export default Header;