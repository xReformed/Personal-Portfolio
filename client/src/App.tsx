import "./styles/index.css";
import Router from "./routes";
import { useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return useRoutes(Router);
}

export default App;
