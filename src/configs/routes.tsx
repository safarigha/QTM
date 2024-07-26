import { createBrowserRouter } from "react-router-dom";
// import ResetPage from "../pages/reset/Reset";
// import ForgetPage from "../pages/forget/Forget";
// import LoginPage from "../pages/login/Login";
import App from "../App";
import Layout from "../Layout";
import Register from "../pages/auth/register/Register";
import Login from "../pages/auth/login/Login";
import Board from "../pages/board/Board";
import ResetPassword from "../pages/auth/ResetPassword/ResetPassword";
// import NewBoard from "../pages/newBoard/newBoard.tsx";
// import ComponentT from "../components/component-T/ComponentT.tsx";
// import Profile from "../pages/profile/profile.tsx";
// import View from "../pages/workspace/View.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout isSignIn={false}>
        <App />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout isSignIn={true}>
        <Login />,
      </Layout>
    ),
  },
  {
    path: "/register",
    element: (
      <Layout isSignIn={false}>
        <Register />
      </Layout>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <Layout isSignIn={false}>
        <ResetPassword />
      </Layout>
    ),
  },
  {
    path: "/board",
    element: <Board />,
  },

  // {
  //   path: "/profile",
  //   element: <Profile />,
  // },
  // {
  //   path: "/workspaces-projects",
  //   element: <View />,
  // },
]);

export default routes;
