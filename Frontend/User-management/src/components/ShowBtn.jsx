/** @format */

import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { context } from "../Store/Store";
const ShowBtn = () => {
  const { obj } = useContext(context);
  if (obj.showOther == true) {
    return (
      <div className="show-btn">
        <Link className="show" to={"/Register"}>
          New User
        </Link>
        <Link className="show" to={"/allUser"}>
          All User
        </Link>
      </div>
    );
  } else {
    return (
      <div className="show-btn">
        <Link className="show" to={"/adminLogin"}>
          Admin Login
        </Link>
      </div>
    );
  }
};

export default ShowBtn;
