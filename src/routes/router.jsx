import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/Homelayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
    }
])

export default router;