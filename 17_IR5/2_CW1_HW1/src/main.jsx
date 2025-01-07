import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Employee from "./pages/Employee.jsx";
import EmployeeDetails from "./pages/EmployeeDetails.jsx";
import Report from "./pages/Report.jsx";
// import MovieDetails from "./pages/MovieDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/employee",
    element: <Employee />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "/employee/:employeeId",
    element: <EmployeeDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);