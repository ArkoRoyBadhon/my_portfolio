import Home from "../Page/HomePage/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../Layout/MainLayout");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
])

export default router;