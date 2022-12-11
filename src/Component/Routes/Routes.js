import About from "../Page/About/About";
import Blog from "../Page/Blog/Blog";
import DetailPage from "../Page/DetailPage/DetailPage";
import Home from "../Page/HomePage/Home";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/blogs',
        element: <Blog />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/details',
        element: <DetailPage />
    }
])

export default router;