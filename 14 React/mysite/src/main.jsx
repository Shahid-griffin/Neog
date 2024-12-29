import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Optional Bootstrap JS
import "./index.css";
import App from "./App.jsx";
import About  from "./pages/About.jsx";
import Stays from "./pages/Stays.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter ([
  {
    path :"/",
    element : <App />
  },
  {
    path : "/about",
    element : <About />
  },
  {
    path :"/stays",
    element : <Stays />
  }
])
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
