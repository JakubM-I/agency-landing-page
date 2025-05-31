const Menu: React.FC = () => {
    return (
        <div>
            <ul className="flex gap-12 list-none text-white items-center">
                <li><a href="#" className="text-preset-8 ">About</a></li>
                <li><a href="#" className="text-preset-8">Services</a></li>
                <li><a href="#" className="text-preset-8">Projects</a></li>
                <li className=" bg-white border-none rounded-[28px] px-7 py-4"><a href="#" className="text-preset-8 text-black">Contact</a></li>
            </ul>
        </div>
    )
}

export default Menu;