import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Optional Bootstrap JS
import "./index.css";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogDetails from "./pages/BlogDetails.jsx";

const router = createBrowserRouter([
  // it takes array of route
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  { path: "/blog",
     element: <Blog /> },
     {
      path:"blog/:blogId",
      element:<BlogDetails />
     }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
