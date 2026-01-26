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
        <section className="pt-12 md:pt-16 px-5 md:px-2 full:px-0" aria-label="Projects menu">
            <ul className="w-fit mx-auto text-grey-950 bg-grey-100 px-3.5 py-2 rounded-3xl flex flex-wrap md:flex-nowrap items-center justify-center gap-2"
                role="tablist">
                {categories.map((category, index) => (
                    <li key={index} role="presentation">
                        <button
                            className={`pr-menu-item ${query === category ? "bg-yellow-500" : ""}`}
                            data-filter={category}
                            onClick={filterOnClick}
                            role="tab"
                            aria-selected={query === category}
                            aria-controls="projectsGrid">
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsMenu;