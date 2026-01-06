import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "@ant-design/v5-patch-for-react-19";
import "./App.css";
import AppLayout from "./features/layout/AppLayout";
import Home from "./features/layout/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import LogIn from "./features/layout/LogIn";
import Cart from "./features/cart/Cart";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: "",
    children: [
      {
        path: "/",
        element: <LogIn />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <AppLayout /> */}
    </>
  );
}

export default App;
