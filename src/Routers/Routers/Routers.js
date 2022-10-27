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
import page from './404-pages.jpg'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader:  () => fetch(`https://10-munite-school-server.vercel.app/catagory/08`)
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
                loader: ({params}) => fetch(`https://10-munite-school-server.vercel.app/catagory/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://10-munite-school-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/enrolNow/:id',
                element: <PrivateRoute><EnrollNow></EnrollNow></PrivateRoute>,
                loader: ({params}) => fetch(`https://10-munite-school-server.vercel.app/course/${params.id}`)
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
    },
  
    {path: '*', element: <div> <img src={page} alt="" /> </div> }
])