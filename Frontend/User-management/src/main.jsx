/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLogin from "./components/AdminLogin.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import UserInformation from "./components/UserInformation.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <AdminLogin /> },
      { path: "/Register", element: <RegisterForm /> },
      { path: "/allUser", element: <UserInformation /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
