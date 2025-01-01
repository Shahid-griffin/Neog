import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Optional Bootstrap JS
import "./index.css";
import App from "./App.jsx";
import Todo from "./pages/todo.jsx";
import About from "./pages/about.jsx";
import TodoDetail, { TodoLoader } from "./pages/todoDetails.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router =createBrowserRouter([
  {
    path : "/",
    element : <App/>
  },
  {
    path :"/todo",
    element : <Todo/>
  },
  {
    path:"/about",
    element: <About/>
  },
  {
    path:"/todo/:todoId",
    element : <TodoDetail/>,
    loader :TodoLoader,

  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
