
import HomePage from "../HomePage";
import RootElement from "../Root/root";

export const routes = [
    {
        path: "/",
        element: <RootElement />,
        children: [
            {
                path: "/",
                element: <HomePage />
            }
        ]
    }
]