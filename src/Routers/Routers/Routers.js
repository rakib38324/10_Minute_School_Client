import { createBrowserRouter } from "react-router-dom";
import Courses from "../../Components/Courses/Courses";
import FAQ from "../../Components/FAQ/FAQ";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";
import Main from "../../Layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            }
        ]
    }
])