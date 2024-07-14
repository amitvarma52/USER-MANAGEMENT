/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./Redux-toolkit/Store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLogin from "./components/AdminLogin.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import UserInformation from "./components/UserInformation.jsx";
import { Provider } from "react-redux";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/adminLogin", element: <AdminLogin /> },
      { path: "/Register", element: <RegisterForm /> },
      { path: "/allUser", element: <UserInformation /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
