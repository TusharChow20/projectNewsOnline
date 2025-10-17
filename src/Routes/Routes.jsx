import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>home</p>,
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
