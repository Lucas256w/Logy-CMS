import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Homepage /> },
        { path: "/login", element: <Login /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
