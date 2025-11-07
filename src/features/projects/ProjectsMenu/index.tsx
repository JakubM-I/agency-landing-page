// import { useState } from "react";
import { useSearchParams } from "react-router";
import type { ProjectProps } from "../../../components/types/interfaces";
import { useMemo } from "react";


const ProjectsMenu: React.FC<ProjectProps> = ({ items }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    // const [query, setQuery] = useState<string | null>(searchParams.get("f"));

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

    // const filterOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     const f = e.currentTarget.dataset.filter;
    //     if(!f) return;
    //     if(f !== "all")    
    //         {
    //         setSearchParams({f});
    //         setQuery(f);
    //     } else {
    //         setSearchParams(prev => {
    //             const params = new URLSearchParams(prev);
    //             params.delete("f");
    //             return params
    //         })
    //     }
    //     setQuery(null);
    // }

    const categories = useMemo(() => {
        return ["all", ...new Set(items.map(item => item.searchCategory).filter(Boolean))];
    }, [items]);


    const filterOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const filter = e.currentTarget.dataset.filter;
        if (!filter) return;
        if (filter === "all") {
            setSearchParams({});
        } else {
            setSearchParams({ f: filter })
        }
    }

    const query = searchParams.get("f") || "all";

    return (
        <div className="py-16 sx:py-[67px] px-5 md:px-2 full:px-0">
            <ul className="w-fit mx-auto text-grey-950 bg-grey-100 px-3.5 py-2 rounded-3xl flex items-center justify-center gap-2">
                {categories.map((category, index) => (
                    <li key={index} className={`pr-menu-item ${query === category ? "bg-yellow-500" : ""}`}>
                        <button
                            className="capitalize"
                            data-filter={category}
                            onClick={filterOnClick}>
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectsMenu;