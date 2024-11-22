import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import CityPage from "../../pages/СitiesPage/CitiesPage";
import AuthPage from "../../pages/AuthPage/AuthPage";
import RegPage from "../../pages/RegPage/RegPage";
import NotFound from "../../pages/NotFound/NotFound";

 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/cities",
        element: <CityPage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path: "/reg",
        element: <RegPage />,
      },
    ],
  },
]);
