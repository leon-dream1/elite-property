import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import AllProperty from "../pages/AllProperty/AllProperty";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import UserProfile from "../pages/DashBoard/User/UserProfile/UserProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allProperty",
        element: (
          <PrivateRoute>
            <AllProperty />
          </PrivateRoute>
        ),
      },
      {
        path: "/property/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails />
          </PrivateRoute>
        ),
        loader: () => fetch(`/data.json`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  // DashBoard Related
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: "true",
        element: <UserProfile />,
      },
      {
        path: "myProfile",
        element: <UserProfile />,
      },
    ],
  },
]);
