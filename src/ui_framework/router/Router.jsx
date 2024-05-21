import Layout from "./Layout.jsx";
import { createBrowserRouter } from "react-router-dom";
import UserForm from "../../interface/Component/fromContent/UserForm.jsx";
import Favourite from "../../interface/pages/Favourite/Favourite.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <UserForm />,
      },
      {
        path: "/favourite",
        element: <Favourite />,
      },
    ],
  },
]);

export default Router;
