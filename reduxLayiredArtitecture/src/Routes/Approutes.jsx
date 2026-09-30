import { createBrowserRouter, RouterProvider } from "react-router";
// import { RouterProvider } from "react-router/dom";
import PublicProtected from "./protected/PublicProtected";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import MainProtected from "./protected/MainProtected";
import AuthLayout from "../app/layouts/AuthLayout";
import MainLayout from "../app/layouts/mainLayout";
import HomePages from "../shared/ui/pages/HomePages";
import Productpage from "../features/products/ui/pages/Productpage";
import Cardpage from "../features/card/ui/pages/Cardpage";
import Orderpage from "../features/order/ui/pages/Orderpage";
import { HudrateUserapi } from "../features/auth/api/authApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/state/AuthSlice";

const Approutes = () => {

  const dispatch =  useDispatch()

  useEffect(() => {
    (async() => {
        try {
            let res = await HudrateUserapi()
            dispatch(addUser(res))
            console.log(res)
        } catch (error) {
            console.log("error in hydrate user",error)
        }
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePages />,
            },
            {
              path: "product",
              element: <Productpage />,
            },
            {
              path: "card",
              element: <Cardpage />,
            },
            {
              path: "order",
              element: <Orderpage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Approutes;
