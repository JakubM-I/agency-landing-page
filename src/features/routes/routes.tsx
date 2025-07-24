
import AboutPage from "../about";
import HomePage from "../homepage";
import RootElement from "../Root/root";

export const routes = [
    {
        path: "/",
        element: <RootElement />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "about",
                element: <AboutPage />
            }
        ]
    }
]

//  element: React.lazy(() => import("../about/index.tsx"))