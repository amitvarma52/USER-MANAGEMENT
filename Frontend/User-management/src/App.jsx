/** @format */

import { useState } from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import UserInformation from "./components/UserInformation";
import ShowBtn from "./components/ShowBtn";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <ShowBtn />
      <Outlet/>
    </>
  );
}

export default App;
