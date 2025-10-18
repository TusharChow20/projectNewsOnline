import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import NewsCategory from "../Pages/NewsCategory";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: NewsCategory,
      },
    ],
  },
  {
    path: "/authentication",
    element: <p>Authentication </p>,
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
