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
        element: <AddArticles/>
      },
      {
        path: "/allArticles",
        element: <AllArticles/>
      },
      {
        path: "/articlesDetails",
        element: <ArticleDetails/>
      },
      {
        path: "/subscription",
        element: <Subscription/>
      },
      
      {
        path: "/myArticles",
        element: <MyArticles/>
      },
      {
        path: "/premiumArticles",
        element: <PremiumArticles/>
      },
      {
        path: "/myProfile",
        element: <MyProfile/>
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: '/dashboard',
    element: <DashboardLayout/>,
    children: [
      {
        index: true,
        element: <AdminDashboard/>
      },
      {
        path: 'adminArticles',
        element: <AdminAllArticles/>
      },
      {
        path: 'allUsers',
        element: <AllUsers/>
      },
      {
        path: 'addPublisher',
        element: <AddPublisher/>
      },

    ]
  }
]);
