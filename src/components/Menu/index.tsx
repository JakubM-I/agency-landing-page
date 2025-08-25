import { useEffect, useState } from "react";
import mobileMenu from "../../assets/icons/icon-hamburger.svg"
import { NavLink, useLoaderData } from "react-router";
import type { MenuProps, NavItemsProps } from "../types/interfaces";

const Menu: React.FC<MenuProps> = ({toggleMenu}) => {
    const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

    const navItems: NavItemsProps[] = useLoaderData();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (isMobile === undefined) {
        return <div className="h-6 w-6"></div>;
    }

    return (
        <>
            {isMobile ? 
                (<>
                    <button className="cursor-pointer" onClick={toggleMenu}>
                        <img src={mobileMenu} alt="" />
                    </button>
                </>) : 
                ( <ul className="flex gap-12 list-none text-white items-center text-preset-10">
                    {navItems.map((item) => (
                        <li key={item.id} className={item.type === "button" ? `${item.itemClassName}` : "" }>
                            <NavLink to={item.to} className={item.type === "button" ? `${item.className}` : ""}>
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>) 
            }

        </>
    )
}

export default Menu;