import { createBrowserRouter } from "react-router-dom";
import PaginationScreen from "../pages/PaginationScreen";
import Header from "../components/static/Header";
import Hero from "../pages/Hero";
import HeroPage from "../pages/HeroPage";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/hero",
    element: <HeroPage />,
  },
]);
