/** @format */

import React from "react";
import { Link } from "react-router-dom";
const ShowBtn = ({ showInfo, setShowInfo }) => {
  const handleClick = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div className="show-btn">
      <Link className="show" to={"/adminLogin"}>
        Admin Login
      </Link>
      <Link className="show" to={"/Register"}>
        Register
      </Link>
      <Link className="show" to={"/allUser"}>
        All User
      </Link>
    </div>
  );
};

export default ShowBtn;
