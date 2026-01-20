import { createBrowserRouter, Navigate } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { isLoggedIn } from "./lib/auth";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: isLoggedIn() ? <Navigate to="/" replace /> : <Login />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
