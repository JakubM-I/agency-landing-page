
import AboutPage from "../about";
import DigitalMarketing from "../digital-marketing";
import HomePage from "../homepage/index";
import ProjectsPage from "../projects";
import RootElement from "../Root/root";
import ServicesPage from "../services";
import TransformBrand from "../transform-brand";
import ContactPage from "../contact";

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
            },
            {
                path: "digital-marketing",
                element: <DigitalMarketing />,
                loader: () => {
                    return fetch("/content.json")
                }
            },
            {
                path: "brand-transform",
                element: <TransformBrand />,
                loader: () => {
                    return fetch("/content.json")
                }
            },
            {
                path: "contact",
                element: <ContactPage />,
                loader: () => {
                    return fetch("/content.json")
                }
            }
        ]
    }
]

//  element: React.lazy(() => import("../about/index.tsx"))