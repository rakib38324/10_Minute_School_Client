import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blogs/Blog";
import Courses from "../../Components/Courses/Courses";
import FAQ from "../../Components/FAQ/FAQ";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";
import Main from "../../Layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader:  () => fetch(`http://localhost:5000/catagory/08`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/catagory',
                element: <Courses></Courses>,
                
            },
            {
                path: '/catagory/:id',
                element: <Courses></Courses>,
                loader: ({params}) => fetch(`http://localhost:5000/catagory/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])