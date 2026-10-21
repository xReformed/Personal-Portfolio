import { type RouteObject } from "react-router-dom";
import SiteLayout from "../components/SiteLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const Router: RouteObject[] = [
  {
    // Landing hero is full-bleed with its own nav placement
    path: "/",
    element: <Home />,
  },
  {
    element: <SiteLayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
];

export default Router;
