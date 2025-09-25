
import AboutPage from "../about";
import HomePage from "../homepage";
import ProjectsPage from "../projects";
import RootElement from "../Root/root";
import ServicesPage from "../services";

export const routes = [
    {
        path: "/",
        element: <RootElement />,
        loader: () => {
            return fetch("/sunnyside/navItems.json")
        },
        children: [
            {
                path: "/",
                element: <HomePage />,
                loader: () => {
                    return fetch("/sunnyside/content.json")
                }
            },
            {
                path: "about",
                element: <AboutPage />,
                loader: () => {
                    return fetch("/sunnyside/content.json")
                }
            },
            {
                path: "services",
                element: <ServicesPage />,
                loader: () => {
                    return fetch("/sunnyside/content.json")
                }
            },
            {
                path: "projects",
                element: <ProjectsPage />,
                loader: () => {
                    return fetch("/sunnyside/content.json")
                }
            }
        ]
    }
]

//  element: React.lazy(() => import("../about/index.tsx"))