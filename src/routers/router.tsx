import Error from "@/pages/Error";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "/*",
        Component: Error,
      },
    ],
  },
]);
