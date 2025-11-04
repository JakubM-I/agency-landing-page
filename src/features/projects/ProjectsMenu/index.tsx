const ProjectsMenu: React.FC = () => {
    let active = true;
    return (
        <div className="py-16 sx:py-[67px] px-5 md:px-2 full:px-0">
            <ul className="w-fit mx-auto text-grey-950 bg-grey-100 px-3.5 py-2 rounded-3xl flex items-center justify-center gap-2">
                <li className={`pr-menu-item ${active ? "bg-yellow-500" : ""}`}>All</li>
                <li className="pr-menu-item">Branding</li>
                <li className="pr-menu-item">Design</li>
                 <li className="pr-menu-item">Photography</li>
                  <li className="pr-menu-item">Web</li>
            </ul>
        </div>
    );
};
    ``
export default ProjectsMenu;