import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Dashboard from "../page/Dashboard/Dashboard";
import Landingpage from "../page/Landingpage";
import AuthLayout from "../layout/AuthLayout";
import SignUp from "../page/Auth/SignUp";
import CreateaccountNotification from "../page/Auth/createaccountNotification";
import SignIn from "../page/Auth/SignIn";
import Forgetpassword from "../page/Auth/Forgetpassword";
import ForgetpasswordNotification from "../page/Auth/ForgetpasswordNotification";
import Changepassword from "../page/Auth/Changepassword";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landingpage />,
      },
      {
        path: "dash",
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: "signup",
        element: <SignUp />,
      },
      {
        index: true,
        path: "create-account-notification",
        element: <CreateaccountNotification />,
      },
      {
        index: true,
        path: "signin/:token",
        element: <SignIn />,
      },
      {
        index: true,
        path: "signin",
        element: <SignIn />,
      },
      {
        index: true,
        path: "forget-password",
        element: <Forgetpassword />,
      },
      {
        index: true,
        path: "forget-password-notification",
        element: <ForgetpasswordNotification />,
      },
      {
        index: true,
        path: "change-password/:token",
        element: <Changepassword />,
      },
    ],
  },
]);
