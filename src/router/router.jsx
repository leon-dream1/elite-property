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
import PropertyBought from "../pages/DashBoard/User/PropertyBought/PropertyBought";
import RequestedProperty from "../pages/DashBoard/Agent/RequestedProperty/RequestedProperty";
import Payment from "../pages/DashBoard/User/Payment/Payment";
import MySoldProperty from "../pages/DashBoard/Agent/MySoldProperty/MySoldProperty";
import MyReview from "../pages/DashBoard/User/MyReview/MyReview";
import ManageReview from "../pages/DashBoard/Admin/ManageReview/ManageReview";
import AdvertiseProperty from "../pages/DashBoard/Admin/AdvertiseProperty/AdvertiseProperty";
import AdminRoute from "./AdminRoute/AdminRoute";
import AgentRoute from "./AgentRoute/AgentRoute";

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
      {
        path: "propertyBought",
        element: (
          <PrivateRoute>
            <PropertyBought />
          </PrivateRoute>
        ),
      },
      {
        path: "propertyBought/payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "myReview",
        element: (
          <PrivateRoute>
            <MyReview />
          </PrivateRoute>
        ),
      },

      //Agent
      {
        path: "addProperty",
        element: (
          <PrivateRoute>
            <AgentRoute>
              <AddProperty />
            </AgentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "myAddedProperty",
        element: (
          <PrivateRoute>
            <AgentRoute>
              <MyAddedProperty />
            </AgentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "myAddedProperty/updateMyAddedProperty/:id",
        element: (
          <PrivateRoute>
            <AgentRoute>
              <UpdateMyAddedProperty />
            </AgentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "requestProperty",
        element: (
          <PrivateRoute>
            <AgentRoute>
              <RequestedProperty />
            </AgentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "mySoldProperty",
        element: (
          <PrivateRoute>
            <AgentRoute>
              <MySoldProperty />
            </AgentRoute>
          </PrivateRoute>
        ),
      },

      //ADMIN
      {
        path: "manageProperties",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageProperty />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manageReviews",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageReview />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "advertiseProperty",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdvertiseProperty />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
