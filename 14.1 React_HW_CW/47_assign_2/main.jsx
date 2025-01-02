import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Optional Bootstrap JS
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./pages/product.jsx";
import About from "./pages/about.jsx";
import ProductDetail, { ProductLoader } from "./pages/productDetail.jsx";
import Cart from "./pages/cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/product", 
    element: <Product />
   },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cart",
    element : <Cart/>
  },
  {
    path : "/product/:productId",
    element : <ProductDetail />,
    loader : ProductLoader,
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
