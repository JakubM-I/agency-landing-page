
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
            return fetch("/navItems.json")
        },
        children: [
            {
                path: "/",
                element: <HomePage />,
                loader: () => {
                    return fetch("/content.json")
                }
            },
            {
                path: "about",
                element: <AboutPage />,
                loader: () => {
                    return fetch("/content.json")
                }
            },
            {
                path: "services",
                element: <ServicesPage />,
                loader: () => {
                    return fetch("/content.json")
                }
            },
            {
                path: "projects",
                element: <ProjectsPage />,
                loader: () => {
                    return fetch("/content.json")
                }
            }
        ]
    }
]

//  element: React.lazy(() => import("../about/index.tsx"))