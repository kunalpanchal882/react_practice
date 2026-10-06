import { createBrowserRouter, RouterProvider } from "react-router";
// import { RouterProvider } from "react-router/dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AuthLayout from "../app/layouts/AuthLayout";
import MainLayout from "../app/layouts/mainLayout";
import { HudrateUserapi } from "../features/auth/api/authApi";
import { addUser, setAuthLoading } from "../features/auth/state/AuthSlice";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import Cardpage from "../features/card/ui/pages/Cardpage";
import Orderpage from "../features/order/ui/pages/Orderpage";
import Productpage from "../features/products/ui/pages/Productpage";
import HomePages from "../shared/ui/pages/HomePages";
import MainProtected from "./protected/MainProtected";
import PublicProtected from "./protected/PublicProtected";

const Approutes = () => {

  const dispatch =  useDispatch()

  useEffect(() => {
    (async() => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          dispatch(setAuthLoading(false));
          return;
        }

        try {
          const user = await HudrateUserapi();
          dispatch(addUser(user));
        } catch (error) {
          localStorage.removeItem("accessToken");
          dispatch(setAuthLoading(false));
          console.log("error in hydrate user", error);
        }
    })();
      }, [dispatch]);

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
