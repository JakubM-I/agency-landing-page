
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
                element: <HomePage />
            },
            {
                path: "about",
                element: <AboutPage />
            },
            {
                path: "services",
                element: <ServicesPage />
            },
            {
                path: "projects",
                element: <ProjectsPage />
            }
        ]
    }
]

//  element: React.lazy(() => import("../about/index.tsx"))