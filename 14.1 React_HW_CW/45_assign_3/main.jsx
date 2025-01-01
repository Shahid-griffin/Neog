import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Optional Bootstrap JS
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfileDetail, { ProfileLoader } from "./pages/ProfileDetail.jsx";
import Profile from "./pages/Profile.jsx";

const router = createBrowserRouter ([
  {path:"/",
    element:<App/>
  },
  {
    path : "/profile",
    element :<Profile/>
  },
  {
    path: "/profile/:profileName",
    element: <ProfileDetail/>,
    loader : ProfileLoader
  }
])
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
