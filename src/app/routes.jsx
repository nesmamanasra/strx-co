import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "./components/layouts/PublicLayout";
import Home from "./pages/Home";

// import Login from "./pages/Login";
// import NotFound from "./pages/NotFound";
// import { isLoggedIn } from "./lib/auth";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);
