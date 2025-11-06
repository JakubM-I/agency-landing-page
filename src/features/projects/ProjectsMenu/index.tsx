import { useState } from "react";
import { useSearchParams } from "react-router";


const ProjectsMenu: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState<string | null>(searchParams.get("f"));

    // const fQuery = document.querySelector<HTMLButtonElement>("button[data-filter]")?.getAttribute("data-filter");

    // const filterOnClick = () => {
    //     menuButtons.forEach((button) => {
    //         button.addEventListener("click", () => {
    //             const query = button?.getAttribute("data-filter");
    //             setSearchParams(query 
    //                 ? {f: query} 
    //                 : searchParams.delete("f"))
    //         })
    //     })
    //     //  if(fQuery) setSearchParams({f: fQuery})
    // }

    const filterOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const f = e.currentTarget.dataset.filter;
        if(!f) return;
        if(f !== "all")    
            {
            setSearchParams({f});
            setQuery(f);
        } else {
            setSearchParams(prev => {
                const params = new URLSearchParams(prev);
                params.delete("f");
                return params
            })
        }
        setQuery(null);
    }

    let active = true;
    return (
        <div className="py-16 sx:py-[67px] px-5 md:px-2 full:px-0">
            <ul className="w-fit mx-auto text-grey-950 bg-grey-100 px-3.5 py-2 rounded-3xl flex items-center justify-center gap-2">
                <li className={`pr-menu-item ${active ? "bg-yellow-500" : ""}`}>
                    <button data-filter="all" onClick={filterOnClick}>  
                        All
                    </button>
                </li>
                <li className="pr-menu-item">
                    <button data-filter="branding" onClick={filterOnClick}>
                        Branding
                    </button>
                </li>
                <li className="pr-menu-item">
                     <button data-filter="design" onClick={filterOnClick}>
                        Design
                    </button>
                </li>
                 <li className="pr-menu-item">
                     <button data-filter="photography" onClick={filterOnClick}>
                        Photography
                    </button>
                </li>
                  <li className="pr-menu-item">
                     <button data-filter="web" onClick={filterOnClick}>
                        Web
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default ProjectsMenu;