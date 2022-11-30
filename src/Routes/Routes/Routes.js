import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../Pages/Dashboard/MyProducts/MyProduct";
import CategoryProducts from "../../Pages/Home/Categories/CategoryProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";
import SellerRoute from "../SellerRoute/SellerRoute";

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
          element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
          children:[
               {
                    path: '/dashboard',
                    element: <MyOrders></MyOrders>
               },
               {
                    path: '/dashboard/addProduct',
                    element: <AddProduct></AddProduct>
               },
               {
                    path: '/dashboard/myProducts',
                    element: <MyProduct></MyProduct>
               },
               {
                    path: '/dashboard/allBuyers',
                    element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
               },
               {
                    path: '/dashboard/allSellers',
                    element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
               },
               
          ]
     },
     {
          path: '*',
          element: <NotFound></NotFound>
     }
])