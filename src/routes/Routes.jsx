import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddArticles from "../pages/AddArticles/AddArticles";
import AllArticles from "../pages/AllArticles/AllArticles";
import Subscription from "../pages/Subscription/Subscription";
import MyArticles from "../pages/MyArticles/MyArticles";
import PremiumArticles from "../pages/PremiumArticles/PremiumArticles";
import DashboardLayout from "../layouts/DashboardLayout";
import AdminAllArticles from "../pages/Dashboard/AdminAllArticles/AdminAllArticles";
import AddPublisher from "../pages/Dashboard/AddPublisher/AddPublisher";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import MyProfile from "../pages/MyProfile/MyProfile";
import ArticleDetails from "../pages/ArticlesDetails/ArticlesDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateArticles from "../pages/UpdateArticles/UpdateArticles";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addArticles",
        element: (
          <PrivateRoute>
            <AddArticles />
          </PrivateRoute>
        ),
      },
      {
        path: "/allArticles",
        element: <AllArticles />,
      },
      {
        path: "/articlesDetails/:id",
        element: (
          <PrivateRoute>
            <ArticleDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/subscription",
        element: (
          <PrivateRoute>
            <Subscription />
          </PrivateRoute>
        ),
      },

      {
        path: "/myArticles",
        element: (
          <PrivateRoute>
            <MyArticles />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateArticles/:id",
        element: (
          <PrivateRoute>
            <UpdateArticles />
          </PrivateRoute>
        ),
      },
      {
        path: "/premiumArticles",
        element: (
          <PrivateRoute>
            <PremiumArticles />
          </PrivateRoute>
        ),
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "adminArticles",
        element: (
          <AdminRoute>
            <AdminAllArticles />
          </AdminRoute>
        ),
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "addPublisher",
        element: (
          <AdminRoute>
            <AddPublisher />
          </AdminRoute>
        ),
      },
    ],
  },
]);
