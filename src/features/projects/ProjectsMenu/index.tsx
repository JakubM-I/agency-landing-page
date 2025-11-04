const ProjectsMenu: React.FC = () => {
    return (
        <div className="py-16 sx:py-[67px] px-5 md:px-2 full:px-0">
            <ul className="w-fit mx-auto text-grey-950 bg-grey-100 px-3.5 py-2 rounded-3xl flex items-center justify-center gap-2">
                <li className="px-5 py-2 rounded-2xl bg-yellow-500 cursor-pointer uppercase">All</li>
                <li className="px-5 py-2 rounded-2xl hover:bg-yellow-500 cursor-pointer uppercase">Branding</li>
                <li className="px-5 py-2 rounded-2xl hover:bg-yellow-500 cursor-pointer uppercase">Design</li>
                 <li className="px-5 py-2 rounded-2xl hover:bg-yellow-500 cursor-pointer uppercase">Photography</li>
                  <li className="px-5 py-2 rounded-2xl hover:bg-yellow-500 cursor-pointer uppercase">Web</li>
            </ul>
        </div>
    );
};

export default ProjectsMenu;