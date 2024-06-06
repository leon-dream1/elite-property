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
import AddProperty from "../pages/DashBoard/Agent/AddProperty/AddProperty";
import MyAddedProperty from "../pages/DashBoard/Agent/MyAddedProperty/MyAddedProperty";
import UpdateMyAddedProperty from "../pages/DashBoard/Agent/MyAddedProperty/UpdateMyAddedProperty";
import ManageProperty from "../pages/DashBoard/Admin/ManageProperty/ManageProperty";
import ManageUsers from "../pages/DashBoard/Admin/ManageUsers/ManageUsers";
import WishList from "../pages/DashBoard/User/WishList/WishList";
import Offer from "../pages/DashBoard/User/Offer/Offer";

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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: "true",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      //User
      {
        path: "myProfile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "wishList",
        element: (
          <PrivateRoute>
            <WishList />
          </PrivateRoute>
        ),
      },
      {
        path: "wishList/offer/:id",
        element: (
          <PrivateRoute>
            <Offer />
          </PrivateRoute>
        ),
      },

      //Agent
      {
        path: "addProperty",
        element: (
          <PrivateRoute>
            <AddProperty />
          </PrivateRoute>
        ),
      },
      {
        path: "myAddedProperty",
        element: (
          <PrivateRoute>
            <MyAddedProperty />
          </PrivateRoute>
        ),
      },
      {
        path: "myAddedProperty/updateMyAddedProperty/:id",
        element: (
          <PrivateRoute>
            <UpdateMyAddedProperty />
          </PrivateRoute>
        ),
      },

      //ADMIN
      {
        path: "manageProperties",
        element: (
          <PrivateRoute>
            <ManageProperty />
          </PrivateRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
