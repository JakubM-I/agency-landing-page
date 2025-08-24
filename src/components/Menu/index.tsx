import { useEffect, useState } from "react";
import mobileMenu from "../../assets/icons/icon-hamburger.svg"
import { NavLink, useLoaderData } from "react-router";

interface MenuProps {
    toggleMenu: () => void;
}

interface NavItemsProps {
    id: string;
    to: string;
    label: string;
    type: "link" | "button";
    className?: string;
    classNameMobile?: string;
    itemClassName?: string;
}

const Menu: React.FC<MenuProps> = ({toggleMenu}) => {
    const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

    const navItems: NavItemsProps[] = useLoaderData();
    // [
    //     {
    //         id: "about",
    //         to: "about",
    //         label: "About",
    //         type: "link"
    //     },
    //             {
    //         id: "services",
    //         to: "services",
    //         label: "Services",
    //         type: "link"
    //     },
    //             {
    //         id: "projects",
    //         to: "projects",
    //         label: "Projects",
    //         type: "link"
    //     },
    //             {
    //         id: "contact",
    //         to: "contact",
    //         label: "Contact",
    //         type: "button",
    //         className: "bg-white border-none rounded-[28px] px-7 py-4 transitions-menu hover:bg-[#f7f7f740] text-preset-8 uppercase text-grey-950 hover:text-white",
    //         itemClassName: "rounded-[28px] py-4"
    //     }
    // ]

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
                    
                    {/* <li><NavLink to="about" className="">About</NavLink></li>
                    <li><NavLink to="services" className="">Services</NavLink></li>
                    <li><NavLink to="projects" className="">Projects</NavLink></li>
                    <li className="rounded-[28px] py-4">
                        <NavLink to="#" className=" bg-white border-none rounded-[28px] px-7 py-4 transitions-menu hover:bg-[#f7f7f740] text-preset-8 uppercase text-grey-950 hover:text-white">Contact</NavLink></li> */}
                </ul>) 
            }

        </>
    )
}

export default Menu;