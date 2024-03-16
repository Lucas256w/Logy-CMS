import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage";
import EditPost from "./pages/EditPost";
import CreatePost from "./pages/CreatePost";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Homepage /> },
        { path: "/post/:id", element: <EditPost /> },
        { path: "/post/create", element: <CreatePost /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
