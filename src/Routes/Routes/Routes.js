import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import CategoryProducts from "../../Pages/Home/Categories/CategoryProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path:'/',
                    element: <Home></Home>
               },
               {
                    path: '/login',
                    element: <Login></Login>
               },
               {
                    path: '/signup',
                    element: <Signup></Signup>
               },
               {
                    path: '/blog',
                    element: <Blog></Blog>
               },
               {
                    path: '/category/:id',
                    element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>,
                    loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
               }
          ]
     },
     {
          path: '/dashboard',
          element: <DashboardLayout></DashboardLayout>,
          children:[
               {
                    path: '/dashboard',
                    element: <MyOrders></MyOrders>
               }
          ]
     },
     {
          path: '*',
          element: <NotFound></NotFound>
     }
])