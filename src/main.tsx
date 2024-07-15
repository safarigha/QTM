import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./configs/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import routes from "./configs/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <RouterProvider router={routes} />
    <ToastContainer />
    {/* </Provider> */}
  </React.StrictMode>
);
