import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import UserHome from "../Pages/Dashboard/UserHome";
import AddTask from "../Pages/Dashboard/AddTask";
// import UserHome from "../Pages/UserHome/UserHome";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        //   errorElement: < 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'userHome',
                element: <PrivateRoute><UserHome></UserHome></PrivateRoute>
            },
            {
                path: 'addTask',
                element: <AddTask></AddTask>
            }
        ]

    }
]);