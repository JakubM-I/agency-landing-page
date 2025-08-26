import { useEffect, useState } from "react";
import MenuBar from "../MenuBar";
import { useLocation } from "react-router";
import type{ HeaderProps, HeaderBgProps, HeaderStylesProps, getHeaderBgProps } from "../types/interfaces";

const Header: React.FC<HeaderProps> = ({isSticky=false}) => {
    const headerStyles: HeaderStylesProps = {
        "/":{
            relative: "bg-[#3ebfff]",
            sticky: "bg-[#3ebfffce]",
        },
        "/about": {
            relative: "bg-linear-to-r from-gradient-blue-start from-34% to-gradient-blue-end to-96%",
            sticky: "bg-[#05aaeb94]"
        },
        "/services": {
            relative: "bg-[#ffa922]",
            sticky: "bg-[#ffa922]"
        }
    }

    const getHeaderBg = ({pathname, isSticky}: getHeaderBgProps): string => {
        const styles = headerStyles[pathname];
        if(!styles) return "";
        return isSticky ? styles.sticky : styles.relative;
    }

    let location = useLocation();
    const [headerBg, setHeaderBg] = useState("");

    useEffect( () => {
        setHeaderBg(getHeaderBg({pathname: location.pathname, isSticky}));
    }, [location, isSticky]);

    return (
        <>
        {isSticky ? (
            <header className={`sticky top-1 z-5 ${headerBg} backdrop-blur-md`}> 
                <MenuBar isSticky={isSticky}  /> 
            </header>
        ) : (
            <header className={`w-full relative ${headerBg}`}>
                {!isSticky && (<MenuBar isSticky={isSticky} />)}
        </header>
        )}
        </>
    )
}

export default Header;

//bg-[#3ebfffce]