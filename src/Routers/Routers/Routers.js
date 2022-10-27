import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blogs/Blog";
import CourseDetails from "../../Components/CourseDetails/CourseDetails";
import Courses from "../../Components/Courses/Courses";
import FAQ from "../../Components/FAQ/FAQ";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import EnrollNow from "../../Components/NerollNow/EnrollNow";
import SignUp from "../../Components/SignUp/SignUp";
import Main from "../../Layout/Main";
import Profile from "../../Profile/Profile";
import TermsAndCondition from "../../TermsAndCondition/TermsAndCondition";
import PrivateRoute from "./PrivateRoute";

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
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/enrolNow/:id',
                element: <EnrollNow></EnrollNow>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/enrolNow',
                element: <PrivateRoute> <EnrollNow></EnrollNow> </PrivateRoute>,
                
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path: '/profile',
                element: <PrivateRoute> <Profile></Profile> </PrivateRoute>
            }
        ]
    }
])