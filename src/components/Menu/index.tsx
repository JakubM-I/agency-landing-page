import { useEffect, useState } from "react";
import mobileMenu from "../../assets/icons/icon-hamburger.svg"

const Menu: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {isMobile ? 
                (<div>
                    <button className="cursor-pointer">
                        <img src={mobileMenu} alt="" />
                    </button>
                </div>) : 
                ( <ul className="flex gap-12 list-none text-white items-center">
                    <li><a href="#" className="text-preset-8 ">About</a></li>
                    <li><a href="#" className="text-preset-8">Services</a></li>
                    <li><a href="#" className="text-preset-8">Projects</a></li>
                    <li className="rounded-[28px] py-4">
                        <a href="#" className=" bg-white border-none rounded-[28px] px-7 py-4 transitions-menu hover:bg-[#f7f7f740] text-preset-8  text-black hover:text-white">Contact</a></li>
                </ul>) 
            }

        </div>
    )
}

export default Menu;