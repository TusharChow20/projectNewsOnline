import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import NewsCategory from "../Pages/NewsCategory";
import axios from "axios";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: "Loading",
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: NewsCategory,
        loader: () => axios("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/news",
    element: <p>News</p>,
  },
  {
    path: "/*",
    element: <p>Error</p>,
  },
]);

export default router;
