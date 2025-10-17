import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
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
