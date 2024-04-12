import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Login from "../Pages/Home/Login";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";

import Details from "../Components/Details/Details";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,

        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/details/:search',
                element: <Details></Details>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/UpdateProfile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
]);

export default router;