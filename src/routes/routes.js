import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import TopRated from "../Pages/TopRated";
import Main from "../layout/Main/Main";
import Dashboard from "../layout/Dashboard/Dashboard";
import ProductList from "../Pages/DashBoard/ProductList";
import AddProduct from "../Pages/DashBoard/AddProduct";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <ProductList />,
          },
          {
            path: "add-product",
            element: <AddProduct />,
          },
        ],
      },
    ],
  },
]);

export default routes;