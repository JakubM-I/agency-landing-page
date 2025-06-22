import { useState } from "react";
import MenuBar from "../MenuBar";

interface HeaderProps{
    isSticky?: boolean;
}

const Header: React.FC<HeaderProps> = ({isSticky=false}) => {
    // const [isSticky, setIsSticky] = useState<boolean>(true);

    return (
        <>
        {isSticky ? (
            <header className="sticky top-1 z-5 bg-[#3ebfffce] backdrop-blur-md">
                <MenuBar isSticky={isSticky}  /> 
            </header>
        ) : (
            <header className="w-full relative bg-[#3ebfff]">
                {!isSticky && (<MenuBar isSticky={isSticky} />)}
            {/* <picture>
                <source srcSet={headerDesktopBg} type="image/jpg" media="(375px < width)" />
                <source srcSet={headerMobileBg} type="image/jpg" media="(width <= 375px)" />
                <img src={headerDesktopBg} className={`${isSticky ? "h-full" : "h-[calc(100%-56px)] sx:h-[calc(100%-72px)] md:h-[calc(100%-93px)]"} w-full object-cover object-bottom`} alt="header background" />
            </picture> */}
            {/* <Hero /> */}
        </header>
        )}
        </>

    )

}

export default Header;

// h-[538px] sx:h-[800px]