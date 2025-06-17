const MobileMenu: React.FC  = () => {
    return (
        <div>
            <ul className="flex flex-col gap-8 bg-white list-none text-grey-550 text-preset-9 items-center justify-center">
                    <li><a href="#" className="">About</a></li>
                    <li><a href="#" className="">Services</a></li>
                    <li><a href="#" className="">Projects</a></li>
                    <li className="rounded-[28px] py-4">
                        <a href="#" className=" bg-yellow-500 border-none rounded-[28px] px-7 py-4 transitions-menu hover:bg-[#f7f7f740] text-preset-8 uppercase text-grey-950 ">Contact</a></li>
                </ul>
        </div>
    )
};

export default MobileMenu;